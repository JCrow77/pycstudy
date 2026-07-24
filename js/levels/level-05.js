LEVELS[5] = { id:5, title:"代码里的备忘录", phase:"启蒙 · 认识代码世界", icon:"📝",
  briefing: { narrative:"代码逐渐变多了。你盯着屏幕，开始有点记不清每一行是干嘛的。飞船的维修手册里到处都是工程师的手写批注——你也可以在代码里给自己留笔记。Python 会自动忽略这些笔记，它们只给你自己看。", objective:"学会使用<strong>注释</strong>（<code>#</code>）给代码添加说明，同时保持代码正常运行。", tip:"好的注释就像给未来的自己写备忘录——几周后回头看，你一眼就知道当时在想什么。" },
  knowledge: { concept:"注释（#）", intro:"<strong>注释</strong>是写给人类看的文字，Python 执行代码时会<strong>跳过</strong>它们。用 <code>#</code> 开头的一行就是注释，可以解释代码、记录思路、或者临时禁用某段代码。", example:"# 激活生命维持系统\nprint(\"系统启动\")  # 这行会执行，井号后面的部分被忽略", exampleOutput:"系统启动", rules:[{title:"注释规则",text:"① <code>#</code> 后面的内容被执行忽略 ② 注释可以独占一行，也可以跟在代码后面 ③ 注释里可以写中文，不影响程序"}], watchOut:"<code>#</code> 必须在<strong>英文输入法</strong>下输入！中文的 <code>＃</code>（全角井号）不能用作注释。" },
  story:"用 <code>#</code> 给代码添加注释。<br><br>要求：<br>① 写三行 <code>print()</code>，分别输出\"开始记录日志\"、\"系统状态：正常\"、\"日志保存完毕\"<br>② 每行代码上面加一行 <code>#</code> 注释说明该行的作用<br>③ 注释内容自拟，格式正确即可",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'开始记录日志\n系统状态：正常\n日志保存完毕'}],
  hint:"在 print() 的上一行加一个 # 开头的注释，或者在同一行 print() 的后面加 # 和说明。内容随意，只要格式对就行。",
  achievement:{id:"py_l05",icon:"📖",name:"语法学徒"}
};
