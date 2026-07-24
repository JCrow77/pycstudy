LEVELS[4] = { id:4, title:"让报告更整齐", phase:"启蒙 · 认识代码世界", icon:"📊",
  briefing: { narrative:"通讯中心反馈说你的状态报告\"格式混乱\"——三条信息全挤在一行，看着像乱码。你需要让每条状态独占一行，整洁清晰，像一份真正的舰长报告。", objective:"用转义字符 <code>\\n</code> 让三条状态信息<strong>换行显示</strong>。", tip:"\\n 放在字符串的任何位置，表示\"从这里开始新的一行\"。" },
  knowledge: { concept:"转义字符 \\n（换行）", intro:"<code>\\n</code> 是一个<strong>转义字符</strong>，放在字符串里表示\"从这里换行\"。它不是两个字符，而是一个特殊符号——反斜杠+n 合在一起代表\"新行\"。", example:"print(\"第一行\\n第二行\\n第三行\")", exampleOutput:"第一行\n第二行\n第三行", rules:[{title:"关键点",text:"<code>\\n</code> 必须写在<strong>引号里面</strong>。注意是反斜杠 <code>\\</code>（回车键上方），不是除号 <code>/</code>。"}], watchOut:"不要写成 print(\"a\" \\n \"b\")——\\n 是字符串的一部分，要放在引号里面，不是外面！" },
  story:"用转义字符 <code>\\n</code> 让三条状态信息换行显示。<br><br>要求：<br>① 输出三行：第一行\"系统就绪\"，第二行\"氧气正常\"，第三行\"通讯在线\"<br>② 在 <code>print()</code> 的字符串里插入 <code>\\n</code> 来换行<br>③ 格式类似：<code>print(\"第一行\\n第二行\\n第三行\")</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'系统就绪\n氧气正常\n通讯在线'}],
  hint:"在每条信息之间插入 \\n。例如：\"系统就绪\\n氧气正常\\n通讯在线\"。\\n 是特殊符号，要写在引号里面。"
};
