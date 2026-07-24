LEVELS[6] = { id:6, title:"当代码报错时", phase:"启蒙 · 认识代码世界", icon:"🚨",
  briefing: { narrative:"啪——终端屏幕突然变红。一串你不认识的英文跳了出来。别慌，这不是飞船爆炸的信号，只是你的代码有个小错误。学会读懂错误信息，是每个程序员的必修课。", objective:"找出代码中的<strong>三处错误</strong>并修正，让程序正常运行。", tip:"错误信息不是敌人，它是在帮你——它告诉你去第几行找问题。" },
  knowledge: { concept:"认识错误信息", intro:"代码写错时 Python 会<strong>报错</strong>并显示错误信息。错误信息通常包含：<strong>文件名</strong>、<strong>行号</strong>（告诉你去哪找）、<strong>错误类型</strong>和<strong>描述</strong>。常见错误：<br>• <code>SyntaxError</code> — 语法错误（拼写、标点、结构不对）<br>• <code>NameError</code> — 名字错误（变量或函数名拼错了）", example:"# 错误示例：\nprint(\"你好)      # 缺少右引号 → SyntaxError\npirnt(\"你好\")    # 函数名拼错 → NameError\nprint(\"你好\")     # ✅ 正确", exampleOutput:"SyntaxError: ... was never closed\nNameError: name pirnt is not defined", rules:[{title:"如何读报错",text:"① 看最后一行 — 错误类型是什么 ② 看上面的行号 — 去哪找 ③ 想想自己犯过类似的错没有"}], watchOut:"初学者最常见的三个错误：① 引号不成对 ② 函数名拼错 ③ 用了中文标点。每次报错先检查这三样。" },
  story:"下面代码有3个错误，找出来并修正它们。<br><br>需要修正的代码：<br>① <code>print(\"系统诊断开始)</code> — 缺少右引号<br>② <code>prnit(\"扫描模块...\")</code> — print拼成了prnit<br>③ <code>print(\"诊断完成\"）</code> — 结尾是中文引号",
  starterCode:`# === 故障诊断 ===
# 任务：下面代码有 3 个错误，修正它们！

print("系统诊断开始)
prnit("扫描模块...")
print("诊断完成"）
`,
  testCases:[{stdin:'',expected:"系统诊断开始\n扫描模块...\n诊断完成"}],
  hint:"第一行少了右引号，第二行 print 拼成了 prnit，第三行结尾是中文引号。",
  practice:true
};
