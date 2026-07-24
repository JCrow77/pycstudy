LEVELS[39] = { id:39, title:"多重输入：多个参数", phase:"函数", icon:"🌐",
  briefing: { narrative:"导航计算机需要同时接收三个空间坐标(x,y,z)来计算飞船与母星地球的直线距离。返回值是一个巨大数字——家，真的很远。", objective:"定义接收三个参数的函数，计算空间距离并return。", tip:"参数用逗号分隔，可以定义任意多个。" },
  knowledge: { concept:"多个参数", intro:"函数可以有多个参数，用逗号分隔。定义时写参数名，调用时按顺序传值。", example:"def volume(w, h, d):\n    return w * h * d\nv = volume(3, 4, 5)\nprint(f\"体积: {v}\")", exampleOutput:"体积: 60", rules:[{title:"多参数语法",text:"def 函数名(p1, p2, p3): → 调用: 函数名(v1, v2, v3) — 按顺序对应"}], watchOut:"参数数量必须匹配！定义3个参数但只传2个值会报错。" },
  story:"定义函数 calc_distance(x, y, z)，接收三个空间坐标参数。<br><br>计算公式：空间距离 = (x² + y² + z²) 的平方根，即 <code>(x**2 + y**2 + z**2) ** 0.5</code><br><br>要求：<br>① 用 <code>def</code> 定义函数，<code>return</code> 返回计算结果<br>② 调用函数，传入 (150000000, 0, 80000000)<br>③ 用 f-string 打印结果，格式如 <code>距离地球: 170000000.0 公里</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'距离地球: 170000000.0 公里'}],
  hint:"def 定义三个参数的函数。函数体内用 **2 求平方，用 **0.5 求平方根（代替 sqrt）。外部调用并打印。"
};
