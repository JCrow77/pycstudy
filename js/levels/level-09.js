LEVELS[9] = { id:9, title:"Python 是个计算器", phase:"变量与基本类型", icon:"🔢",
  briefing: { narrative:"飞船的燃料显示器坏了。你只知道初始有 500 单位燃料，每天消耗 30 单位。你需要手动算出能飞多少天、剩多少——Python 可以当计算器用，比你按计算器快多了。", objective:"学会使用整数（<code>int</code>）的<strong>算术运算</strong>：加减乘除、整除、取余、幂运算。", tip:"整除 // 和取余 % 是 Python 独特的运算符，解决\"分几份、剩多少\"类问题特别方便。" },
  knowledge: { concept:"整数 int 与算术运算", intro:"Python 可以直接做数学运算，运算符和数学里用的很像：<br><code>+</code> 加 <code>-</code> 减 <code>*</code> 乘 <code>/</code> 除（有小数）<br><code>//</code> <strong>整除</strong>（去小数） <code>%</code> <strong>取余数</strong> <code>**</code> 幂（次方）", example:"print(10 + 3)    # → 13\nprint(10 - 3)    # → 7\nprint(10 * 3)    # → 30\nprint(10 / 3)    # → 3.333...\nprint(10 // 3)   # → 3  （整除，不要小数）\nprint(10 % 3)    # → 1  （余数）\nprint(2 ** 10)   # → 1024 （2的10次方）", exampleOutput:"13\n7\n30\n3.3333333333333335\n3\n1\n1024", rules:[{title:"关键区分",text:"<code>/</code> 是普通除法（有小数），<code>//</code> 是整除（扔掉小数部分）。<code>%</code> 是取余数（模运算），不是百分比！"}], watchOut:"<code>10 / 3</code> 结果是 <code>3.333...</code>（浮点数），不是 <code>3</code>！想要整数结果用 <code>10 // 3</code>。" },
  story:"飞船有500单位燃料，每天消耗30单位。<br><br>变量：<code>fuel = 500</code>，<code>daily = 30</code><br><br>要求：<br>① 用 <code>//</code>（整除）计算能飞多少天<br>② 用 <code>%</code>（取余）计算剩余多少燃料<br>③ 分别打印两个结果",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'16\n20'}],
  hint:"用 fuel // daily 算天数（整除），fuel % daily 算剩余（取余）。分别用 print() 输出结果。"
};
