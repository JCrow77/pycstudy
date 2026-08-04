const phases = [
  { start: 1, end: 6, label: '启蒙 · 认识代码世界' },
  { start: 7, end: 12, label: '变量与基本类型' },
  { start: 13, end: 18, label: '类型深入' },
  { start: 19, end: 26, label: '条件判断' },
  { start: 27, end: 35, label: '循环结构' },
  { start: 36, end: 43, label: '函数' },
  { start: 44, end: 51, label: '数据结构' },
  { start: 52, end: 56, label: '模块与错误处理' },
  { start: 57, end: 62, label: '综合实战' },
];

function renderMap() {
    const grid = document.getElementById('level-grid');
    const progress = document.getElementById('map-progress');
    progress.textContent = `${state.completedLevels.size}/${TOTAL_LEVELS}`;

    let html = '';
    for (let i = 1; i <= TOTAL_LEVELS; i++) {
      // Check for phase label
      const phase = phases.find(p => p.start === i);
      if (phase) {
        html += `<div class="phase-label">${phase.label}</div>`;
      }

      let cls = 'locked';
      let icon = i;
      if (state.completedLevels.has(i)) {
        cls = 'completed';
        icon = i;
      } else if (i === state.currentLevel) {
        cls = 'current';
        icon = i;
      } else if (i < state.currentLevel) {
        cls = 'completed';
        icon = i;
      }

      const clickable = (cls !== 'locked') ? `onclick="openLevel(${i})"` : '';
      html += `<div class="level-node ${cls}" ${clickable}>${icon}</div>`;
    }
    grid.innerHTML = html;
  }

  // ===== MISSION BRIEFING =====
  function showBriefing(n) {
    const level = LEVELS[n];
    if (!level || !level.briefing) return;
    const briefing = level.briefing;

    document.getElementById('briefing-tag').textContent = '⚠ 任务简报';
    document.getElementById('briefing-icon').textContent = level.icon || '📋';
    document.getElementById('briefing-title').textContent = level.title;
    document.getElementById('briefing-subtitle').textContent = level.phase;

    document.getElementById('briefing-body').innerHTML = `
      <div class="narrative">${briefing.narrative}</div>
      <div class="objective-box">
        <strong>🎯 任务目标：</strong>${briefing.objective}
      </div>
      ${briefing.tip ? `<p style="margin-top:12px;font-size:12px;color:var(--text-muted);">💡 ${briefing.tip}</p>` : ''}
    `;

    const overlay = document.getElementById('overlay-briefing');
    overlay.classList.remove('closing');
    overlay.style.display = 'flex';
  }

  function animateCloseBriefing(callback) {
    const overlay = document.getElementById('overlay-briefing');
    overlay.classList.add('closing');
    setTimeout(() => {
      overlay.classList.remove('closing');
      overlay.style.display = 'none';
      if (callback) callback();
    }, 280);
  }

  function closeBriefing() {
    animateCloseBriefing(() => showView('map'));
  }

  function dismissBriefing() {
    animateCloseBriefing(() => {
      try {
        renderChallenge(state.currentLevel);
        showView('challenge');
      } catch(e) {
        console.error('renderChallenge failed:', e);
        showView('map');
      }
    });
  }

  // ===== OPEN LEVEL =====
  function openLevel(n) {
    if (n > state.currentLevel && !state.completedLevels.has(n)) return;
    state.currentLevel = n;
    state.hintRevealed = false;
    // Show briefing first, challenge will be shown after dismissal
    if (LEVELS[n] && LEVELS[n].briefing) {
      showBriefing(n);
    } else {
      renderChallenge(n);
      showView('challenge');
    }
  }

  // ===== CHALLENGE RENDERING =====
  function renderChallenge(n) {
    const level = LEVELS[n];
    if (!level) {
      document.getElementById('knowledge-panel').style.display = 'none';
      document.getElementById('challenge-story').innerHTML = '';
      document.getElementById('code-editor').value = '# 关卡建设中...';
      updateLineNumbers();
      document.getElementById('terminal-body').innerHTML = '<span class="info">此关卡尚未开放</span>';
      document.getElementById('hint-text').textContent = '本关暂无提示';
      document.getElementById('hint-btn').classList.add('used');
      return;
    }

    // Level title bar
    document.getElementById('level-num').textContent = '第' + n + '关';
    document.getElementById('level-heading').textContent = level.title;

    // Knowledge panel — only for levels that introduce new concepts
    if (level.practice || !level.knowledge || !level.knowledge.concept) {
      document.getElementById('knowledge-panel').style.display = 'none';
    } else {
      document.getElementById('knowledge-panel').style.display = 'block';
      document.getElementById('knowledge-body').classList.remove('collapsed');
      document.getElementById('kn-toggle').classList.remove('collapsed');
    }
    if (level.knowledge && level.knowledge.concept) {
      const k = level.knowledge;
      document.getElementById('kn-title').textContent = k.concept;
      document.getElementById('kn-phase').textContent = level.phase;

      let rulesHTML = '';
      if (k.rules) {
        rulesHTML = k.rules.map(r =>
          `<div class="key-rule"><strong>${r.title}</strong>${r.text}</div>`
        ).join('');
      }

      let watchOutHTML = '';
      if (k.watchOut) {
        watchOutHTML = `<div class="watch-out">⚠️ <strong>常见陷阱：</strong>${k.watchOut}</div>`;
      }

      // Check if example contains literal \n (multi-line example for CN punctuation)
      const exampleLines = k.example.split('\n');
      const exampleCode = exampleLines.length > 1
        ? exampleLines.join('<br>')
        : k.example;

      document.getElementById('knowledge-body').innerHTML = `
        <p>${k.intro}</p>
        <div class="example-block">
          <div class="example-code">${exampleCode}</div>
          ${k.exampleOutput ? `<div class="example-output">${escapeHtml(k.exampleOutput)}</div>` : ''}
        </div>
        ${rulesHTML}
        ${watchOutHTML}
      `;
    }

    // Story reminder
    const prefix = level.practice ? '🎯 实战任务' : '🎯 任务目标';
    document.getElementById('challenge-story').innerHTML = `${prefix}：${level.story}`;

    // Editor
    document.getElementById('code-editor').value = level.starterCode;
    document.getElementById('editor-filename').textContent = `level${n}.py`;
    updateLineNumbers();

    // Terminal
    document.getElementById('terminal-body').innerHTML = '<span class="info">代码就绪，点击「▶ 运行代码」开始</span>';

    // Hint
    state.hintRevealed = false;
    document.getElementById('hint-text').textContent = '需要提示吗？点击「💡 思路引导」';
    document.getElementById('hint-text').classList.remove('revealed');
    document.getElementById('hint-btn').classList.remove('used');

    // Warning
    document.getElementById('cn-warning').classList.remove('show');
  }

  // ===== HINT =====
  function toggleKnowledge() {
    const body = document.getElementById('knowledge-body');
    const btn = document.getElementById('kn-toggle');
    body.classList.toggle('collapsed');
    btn.classList.toggle('collapsed');
  }

  function showHint() {
    const level = LEVELS[state.currentLevel];
    if (!level) return;
    state.hintRevealed = true;
    document.getElementById('hint-text').innerHTML = level.hint;
    document.getElementById('hint-text').classList.add('revealed');
    document.getElementById('hint-btn').classList.add('used');
    document.getElementById('hint-btn').textContent = '✅ 已查看';
  }

  // ===== LINE NUMBERS & EDITOR EVENTS =====
  function updateLineNumbers() {
    const editor = document.getElementById('code-editor');
    const lines = editor.value.split('\n');
    const ln = document.getElementById('line-numbers');
    ln.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
  }

  document.getElementById('code-editor').addEventListener('input', function() {
    updateLineNumbers();
    // Detect Chinese punctuation in code only (skip comments)
    const syntaxOnly = codeOnly(this.value);
    const found = detectCNPunctuation(syntaxOnly);
    showCNWarning(found);
  });
  document.getElementById('code-editor').addEventListener('scroll', function() {
    document.getElementById('line-numbers').scrollTop = this.scrollTop;
  });

  // Handle tab key in editor
  document.getElementById('code-editor').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;
      this.value = this.value.substring(0, start) + '    ' + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 4;
      updateLineNumbers();
    }
  });

  function showAchievement(ach) {
    document.getElementById('ach-icon').textContent = ach.icon;
    document.getElementById('ach-name').textContent = ach.name;
    document.getElementById('overlay-achievement').style.display = 'flex';
  }

  function showTaskComplete() {
    document.getElementById('ach-icon').textContent = '✅';
    document.getElementById('ach-name').textContent = '任务完成！';
    document.getElementById('overlay-achievement').style.display = 'flex';
  }

  function closeAchievement() {
    document.getElementById('overlay-achievement').style.display = 'none';
    // Auto-navigate to next level or map
    goMap();
  }

  // ===== UTILS =====