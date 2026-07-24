LEVELS[15] = { id:15, title:"逐字逐句：字符串索引与 len()", phase:"类型深入", icon:"🔍",
  briefing: { narrative:"通讯阵列截获了一段来历不明的短波信号：\"SOS-EXILE-7\"。这段信号隐藏着关键信息——\"EXILE\"（流放者）。你需要用索引精确定位片段、用 len() 测量信号长度。如同手术刀般精确地从 12 个字符中取出你需要的第 4 到第 8 个字符。", objective:"学会用<strong>索引（[]）</strong>访问字符串中的单个字符、用<strong>切片（[a:b]）</strong>提取子串，以及用 <code>len()</code> 获取字符串长度。", tip:"Python 的索引从 0 开始数——第 1 个字符是 [0]，第 5 个字符是 [4]。切片 [a:b] 左闭右开，取 a 到 b-1。" },
  knowledge: { concept:"字符串索引、切片与 len()", intro:"字符串中的每个字符都有一个<strong>编号（索引）</strong>，从 <strong>0</strong> 开始。<br><br>• <code>s[0]</code> — 取第 1 个字符<br>• <code>s[4:9]</code> — <strong>切片</strong>：取索引 4 到 8 的字符（不含 9）<br>• <code>len(s)</code> — 返回字符串一共有多少个字符<br><br>索引也可以是负数：<code>s[-1]</code> 是最后一个字符。", example:"s = \"SOS-EXILE-7\"\nprint(s[0])   # S\nprint(s[4:9]) # EXILE\nprint(len(s)) # 12", exampleOutput:"S\nEXILE\n12", rules:[{title:"索引从0开始",text:"<code>s[0]</code> 是第一个字符。<br>切片 <code>s[a:b]</code> 取索引 <code>a</code> 到 <code>b-1</code>（左闭右开）。<br><code>len()</code> 返回字符总数。<br>负数索引：<code>s[-1]</code> 是最后一个，<code>s[-3:]</code> 取最后三个。"}], watchOut:"索引超出范围会报 <code>IndexError</code>！比如 <code>\"abc\"[5]</code> 不存在。另外切片 <code>s[a:b]</code> 不会报错——即使 b 超出范围，Python 也只会取到字符串末尾。" },
  story:"信号内容：<code>\"SOS-EXILE-7\"</code><br>① 用<strong>切片</strong>取出索引 4 到 8 的字符（\"EXILE\"）<br>② 用 <code>len()</code> 获取信号总长度<br>分别打印：提取片段和信号长度。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"提取片段: EXILE\n信号长度: 12"}],
  hint:"signal[4:9] 取索引 4,5,6,7,8，即 \"EXILE\"（注意:9 不包含 9）。len(signal) 返回 12。输出可以用 f-string 或逗号拼接。",
  achievement:{id:"py_l15",icon:"🔍",name:"类型侦探"}
};
