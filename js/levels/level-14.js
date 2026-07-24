LEVELS[14] = { id:14, title:"变形术：类型转换", phase:"类型深入", icon:"🔄",
  briefing: { narrative:"三台传感器同时传回数据——但它们全用字符串报告读数：\"18\"、\"36.5\"、\"85\"。系统弹窗：\"类型不匹配，无法求和。\"你需要施展变形术，把这些带引号的数字变回真正的数值。类型转换就像给数据换一件衣服——内容不变，身份变了。", objective:"掌握 <code>int()</code>、<code>float()</code>、<code>str()</code> 三种类型转换函数，能灵活在字符串和数字之间切换。", tip:"类型转换三兄弟：int() 变整数，float() 变小数，str() 变文字。记住方向，别转错了。" },
  knowledge: { concept:"int() str() float() 类型转换", intro:"Python 提供了三种常用的类型转换函数：<br>• <code>int(值)</code> — 把值转成整数（截断小数部分）<br>• <code>float(值)</code> — 把值转成浮点数（带小数点）<br>• <code>str(值)</code> — 把值转成字符串（加引号）<br><br>字符串形式的数字（如 <code>\"18\"</code>）必须先转换成 int 或 float 才能参与数学运算。", example:"int(\"18\")      # → 18\nfloat(\"36.5\")  # → 36.5\nstr(100)       # → \"100\"\nint(3.9)       # → 3（截断，不是四舍五入！）", exampleOutput:"（各转换结果如上注释）", rules:[{title:"转换规则",text:"<code>int(\"18\")</code> → 18 整数<br><code>float(\"36.5\")</code> → 36.5 浮点数<br><code>str(100)</code> → \"100\" 字符串<br><code>float</code> 转 <code>int</code> 会截断小数（不是四舍五入）<br>只有纯数字的字符串才能用 int()/float() 转换"}], watchOut:"<code>int(\"36.5\")</code> 会报错！带小数点的字符串不能直接转 int，必须先用 <code>float()</code> 转成浮点数，再根据需要转 int。另外 <code>int(3.9)</code> 结果是 <code>3</code>，不是 <code>4</code>——它直接截断小数，不是四舍五入。" },
  story:"三台传感器用字符串报告读数，需要转为数字后计算总和。<br><br>预填变量：<code>r1 = \"18\"</code>（字符串），<code>r2 = \"36.5\"</code>（字符串），<code>r3 = \"85\"</code>（字符串）<br><br>要求：<br>① 用 <code>int(r1)</code> 和 <code>float(r2)</code> 和 <code>float(r3)</code> 转换类型<br>② 计算三数之和<br>③ 打印总和，格式：<code>传感器总和: XXX</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'传感器总和: 139.5'}],
  hint:"r1 和 r3 是整数形式的字符串用 int()，r2 有小数点用 float()。求和时 Python 会自动把整数和浮点数统一成浮点数。用 f\"传感器总和: {总和}\" 输出。"
};
