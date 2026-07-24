LEVELS[1] = { id:1, title:"你的第一行代码", phase:"启蒙 · 认识代码世界", icon:"🖥️",
  briefing: { narrative:"逃生舱的舱门在你身后重重关上。飞船残骸散落在暗红色的地表上，空气中弥漫着烧焦的金属味。你踉跄着走向驾驶舱，唯一的亮光来自角落里的那台终端——它还活着，屏幕微弱地闪烁着。", objective:"用 <code>print()</code> 向终端发送激活信号 <strong>\"系统启动\"</strong>，唤醒飞船主控电脑。", tip:"这是你与飞船交流的第一步。别怕，终端在等你。" },
  knowledge: { concept:"print() 函数", intro:"<code>print()</code> 是 Python 里用来<strong>在屏幕上输出文字</strong>的函数。括号里放你想说的话，用英文双引号 <code>\" \"</code> 包起来。", example:"print(\"你好，世界！\")", exampleOutput:"你好，世界！", rules:[{title:"语法格式",text:"<code>print(\"要输出的内容\")</code> — 括号、引号都必须是<strong>英文输入法</strong>下的！"}], watchOut:"中文引号 <code>\"\"</code> 和英文引号 <code>\"\"</code> 长得不一样，Python 只认英文引号！写代码前一定要切换到英文输入法。" },
  story:"用 <code>print()</code> 向终端发送激活信号。<br><br>要求：输出内容为 <strong>\"系统启动\"</strong>。<br>语法：<code>print(\"要输出的内容\")</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'系统启动'}],
  hint:"print() 把要输出的文字放在括号和引号里。你要向飞船发送什么信号？",
  achievement:{id:"py_hello",icon:"🥚",name:"破壳而出"}
};
