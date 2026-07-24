LEVELS[19] = { id:19, title:"是与非：比较运算与布尔值", phase:"条件判断", icon:"⚖️",
  briefing: { narrative:"飞船的警报系统建立在最简单的问题之上——氧气低于 18% 吗？温度等于 40 度吗？这些问题的答案只有两个：是（True），或否（False）。就像开关只有开和关、门只有锁和开。这是计算机做决策的基石——布尔值。", objective:"学会使用<strong>比较运算符</strong>（> < >= <= == !=）对数据进行比较，理解<strong>布尔值（bool）</strong>——True 和 False。", tip:"比较运算的结果永远只有 True 或 False 两种——就像判断题只能打钩或打叉。" },
  knowledge: { concept:"比较运算与布尔值", intro:"<strong>比较运算符</strong>用于比较两个值的大小或相等关系，结果是<strong>布尔值（bool）</strong>——<code>True</code>（真）或 <code>False</code>（假）。<br><br>六种比较：<br>• <code>&gt;</code> 大于<br>• <code>&lt;</code> 小于<br>• <code>&gt;=</code> 大于等于<br>• <code>&lt;=</code> 小于等于<br>• <code>==</code> 等于（双等号！）<br>• <code>!=</code> 不等于", example:"print(5 > 3)    # True\nprint(5 == 3)   # False\nprint(5 != 3)   # True\nprint(10 >= 10) # True", exampleOutput:"True\nFalse\nTrue\nTrue", rules:[{title:"运算符速记",text:"<code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code> <code>==</code> <code>!=</code><br>注意 <code>==</code> 是判断相等（双等号），<code>=</code> 是赋值！初学者最容易把 <code>==</code> 写成 <code>=</code>。"}], watchOut:"<code>=</code> 是赋值，<code>==</code> 才是判断相等！写成 <code>if x = 5:</code> 会报 SyntaxError。另外 <code>True</code> 和 <code>False</code> 首字母<strong>必须大写</strong>，小写的 true/false 不是布尔值。" },
  story:"判断以下三个比较，分别打印结果：<br>① 17 是否小于 18？<br>② 38 是否等于 38？<br>③ 0 是否不等于 0？<br>分别用 <code>print()</code> 输出比较结果。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"True\nTrue\nFalse"}],
  hint:"print(17 < 18) → True，print(38 == 38) → True，print(0 != 0) → False。注意 == 是双等号，!= 是一个叹号一个等号。"
};
