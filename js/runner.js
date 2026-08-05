// Characters that commonly cause issues for Chinese learners
  const CN_PUNCTUATION = [
    { char: '“', name: '中文左双引号 “' },
    { char: '”', name: '中文右双引号 ”' },
    { char: '‘', name: '中文左单引号 ‘' },
    { char: '’', name: '中文右单引号 ’' },
    { char: '（', name: '中文左括号 （' },
    { char: '）', name: '中文右括号 ）' },
    { char: '，', name: '中文逗号 ，' },
    { char: '；', name: '中文分号 ；' },
    { char: '：', name: '中文冒号 ：' },
  ];

  function detectCNPunctuation(code) {
    const found = [];
    for (const item of CN_PUNCTUATION) {
      if (code.includes(item.char)) {
        found.push(item);
      }
    }
    return found;
  }

  function showCNWarning(found) {
    const warning = document.getElementById('cn-warning');
    const text = document.getElementById('cn-warning-text');
    if (found.length > 0) {
      const details = found.map(f => `<code>${f.char}</code>`).join(' ');
      text.innerHTML = `检测到中文标点符号：${details} — 请切换到<strong>英文输入法</strong>再写代码！`;
      warning.classList.add('show');
    } else {
      warning.classList.remove('show');
    }
  }

  // (loadState removed — replaced by loadUserProgress above)

  // Strip comments AND string contents, leaving only code syntax to check
  function codeOnly(text) {
    let inString = false;
    let stringChar = null;
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      // Detect string boundaries
      if (!inString && (ch === '"' || ch === "'")) {
        inString = true;
        stringChar = ch;
        result += ch; // keep the opening quote
      } else if (inString && ch === stringChar && text[i-1] !== '\\') {
        inString = false;
        stringChar = null;
        result += ch; // keep the closing quote
      } else if (inString) {
        result += ' '; // replace string content with spaces
      } else if (ch === '#') {
        // Comment starts — skip rest of line
        while (i < text.length && text[i] !== '\n') i++;
        if (i < text.length) result += '\n';
      } else {
        result += ch;
      }
    }
    return result;
  }

  // ===== PYODIDE ENGINE =====
  let pyodide = null;
  let pyodideReady = false;

  async function initPyodide() {
    const status = document.getElementById('py-status');
    const runBtn = document.getElementById('run-btn');
    try {
      pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/' });
      pyodideReady = true;
      status.className = 'py-status ready';
      status.innerHTML = '🐍 Python 就绪';
      runBtn.disabled = false;
    } catch (err) {
      status.className = 'py-status error';
      status.innerHTML = '⚠️ Python 环境加载失败，请刷新重试';
      console.error('Pyodide load error:', err);
    }
  }

  async function runCode() {
    if (!pyodideReady) return;

    const level = LEVELS[state.currentLevel];
    const code = document.getElementById('code-editor').value;
    const terminal = document.getElementById('terminal-body');
    const runBtn = document.getElementById('run-btn');

    // Check for Chinese punctuation (only in code syntax, not inside strings)
    const syntaxOnly = codeOnly(code);
    const cnIssues = detectCNPunctuation(syntaxOnly);
    if (cnIssues.length > 0) {
      const chars = cnIssues.map(f => f.char).join('、');
      terminal.innerHTML = `<span class="prompt">$ python main.py</span>
<span class="error">━━━━━━━━━━━━━━━━━━━━</span>
<span class="error">❌ 代码中包含中文标点符号：${chars}</span>
<span class="info">Python 只认<strong>英文标点</strong>。请切换到英文输入法，把中文标点换成英文的。</span>
<span class="info">💡 对照：中文 "" → 英文 "" | 中文 （） → 英文 () | 中文 ， → 英文 ,</span>`;
      terminal.scrollTop = terminal.scrollHeight;
      return;
    }

    // Disable button during execution
    runBtn.disabled = true;
    runBtn.textContent = '⏳ 执行中...';
    terminal.innerHTML = '<span class="prompt">$ python main.py</span>\n<span class="info">⏳ 正在执行...</span>';
    terminal.scrollTop = terminal.scrollHeight;

    try {
      const testCase = level.testCases[0];
      // Normalize expected: convert literal \n (backslash-n in single-quoted strings) to real newlines
      const expected = (testCase.expected || '').replace(/\\n/g, '\n');

      // Capture stdout/stderr using Python's StringIO (more reliable than Pyodide callbacks)
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
_captured = StringIO()
sys.stdout = _captured
sys.stderr = _captured
`);

      // Handle input() — always override to prevent hangs on empty stdin
      const stdinLines = (testCase.stdin || '').split('\n');
      const hasStdin = stdinLines.length > 0 && stdinLines[0] !== '';
      await pyodide.runPythonAsync(`
import builtins
_stdin_data = ${JSON.stringify(hasStdin ? stdinLines : [''])}
_stdin_iter = iter(_stdin_data)
builtins.input = lambda prompt='': next(_stdin_iter)
`);

      // Run the user's code
      await pyodide.runPythonAsync(code);

      // Get captured output
      const rawOutput = await pyodide.runPythonAsync(`
import sys
sys.stdout = sys.__stdout__
_captured.getvalue()
`);
      const output = (rawOutput || '').replace(/\r\n/g, '\n').replace(/\r/g, '').trim();

      // Restore input
      await pyodide.runPythonAsync(`
import builtins
builtins.input = input
`);

      // Build terminal output
      let termHTML = '<span class="prompt">$ python main.py</span>\n';

      if (output === expected) {
        termHTML += `<span>${escapeHtml(output)}</span>\n`;
        termHTML += `<span class="success">━━━━━━━━━━━━━━━━━━━━</span>\n`;
        termHTML += `<span class="success">✅ 任务完成！测试通过。</span>`;

        if (!state.completedLevels.has(state.currentLevel)) {
          state.completedLevels.add(state.currentLevel);
          if (state.currentLevel < TOTAL_LEVELS) {
            state.currentLevel = Math.max(state.currentLevel, state.currentLevel + 1);
          }
          saveProgress();

          // Show completion feedback
          terminal.innerHTML = termHTML;
          terminal.scrollTop = terminal.scrollHeight;
          await sleep(600);
          if (level.achievement) {
            showAchievement(level.achievement);
          } else {
            showTaskComplete();
          }
          runBtn.disabled = false;
          runBtn.textContent = '▶ 运行代码';
          return;
        }
      } else {
        termHTML += `<span>${escapeHtml(output) || '(无输出)'}</span>\n`;
        termHTML += `<span class="error">━━━━━━━━━━━━━━━━━━━━</span>\n`;
        termHTML += `<span class="error">❌ 输出不匹配</span>\n`;
        termHTML += `<span class="info">期望输出: "${escapeHtml(expected)}"</span>\n`;
        termHTML += `<span class="info">实际输出: "${escapeHtml(output) || '(空)'}"</span>\n`;
        termHTML += `<span class="info">检查输出内容是否完全一致（大小写、空格、标点）。</span>`;
      }

      terminal.innerHTML = termHTML;
    } catch (err) {
      // Python runtime error
      let errMsg = err.message || String(err);
      // Only show the last line (actual Python error) if it's a traceback
      const lines = errMsg.split('\n');
      const relevant = lines.filter(l => l.trim()).slice(-4).join('\n');

      terminal.innerHTML = `<span class="prompt">$ python main.py</span>
<span class="error">${escapeHtml(relevant)}</span>
<span class="error">━━━━━━━━━━━━━━━━━━━━</span>
<span class="error">❌ 代码执行出错</span>
<span class="info">请检查语法，修改后重试。常见错误：拼写、缩进、英文标点。</span>`;
    }

    runBtn.disabled = false;
    runBtn.textContent = '▶ 运行代码';
    terminal.scrollTop = terminal.scrollHeight;
  }

  // ===== ACHIEVEMENT =====