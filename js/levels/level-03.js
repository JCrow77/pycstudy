LEVELS[3] = { id:3, title:"发送多条信息", phase:"启蒙 · 认识代码世界", icon:"📡",
  briefing: { narrative:"终端亮了！屏幕上闪过一行绿色字符。通讯阵列还有部分功能——你需要同时向指挥中心报告飞船的三项核心状态：主系统状态、氧气水平、通讯链路情况。一次发送，三条信息。", objective:"用<strong>一句</strong> <code>print()</code> 输出三条状态信息，用<strong>逗号</strong>分隔。", tip:"逗号会让 print() 自动在信息之间加一个空格。" },
  knowledge: { concept:"print() 输出多项内容", intro:"<code>print()</code> 可以在一行里输出<strong>多个内容</strong>，用<strong>英文逗号</strong> <code>,</code> 分隔。Python 会自动在每项之间加一个空格。", example:"print(\"系统启动\", \"氧气正常\", \"通讯在线\")", exampleOutput:"系统启动 氧气正常 通讯在线", rules:[{title:"语法格式",text:"<code>print(内容1, 内容2, 内容3, ...)</code> — 逗号分隔，每项都需要自己的引号。"}], watchOut:"逗号必须是英文逗号 <code>,</code>，不是中文逗号 <code>，</code>！中英文逗号的区别：英文窄，中文宽。" },
  story:"用一句 <code>print()</code> 同时输出三条状态信息。<br><br>要求：<br>① 输出三句话：\"系统就绪\"、\"氧气正常\"、\"通讯在线\"<br>② 用英文逗号 <code>,</code> 分隔三个字符串，写在一句 print() 里<br>③ 格式：<code>print(\"系统就绪\", \"氧气正常\", \"通讯在线\")</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'系统就绪 氧气正常 通讯在线'}],
  hint:"写成 print(\"系统就绪\", \"氧气正常\", \"通讯在线\")，每一项用引号包起来，中间用英文逗号隔开。"
};
