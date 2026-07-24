LEVELS[37] = { id:37, title:"万能工具：参数传递", phase:"函数", icon:"🔧",
  briefing: { narrative:"上一关函数只能转换硬编码的值——太局限了。给函数加上参数，它就能适应任何输入，像可调节万能扳手。", objective:"定义带参数c的函数，用return返回结果，外部调用三次不同温度。", tip:"参数写在def语句的括号里。" },
  knowledge: { concept:"函数参数", intro:"参数让函数可以接收外部数据。定义时在括号里写参数名，调用时传入实际值。", example:"def greet(name):\n    print(f\"你好，{name}！\")\ngreet(\"船长\")\ngreet(\"工程师\")", exampleOutput:"你好，船长！\n你好，工程师！", rules:[{title:"参数语法",text:"def 函数名(参数1, 参数2): → 调用: 函数名(值1, 值2)"}], watchOut:"调用函数时必须传入对应数量的参数！定义了两个参数却只传一个会报TypeError。" },
  story:"定义函数 celsius_to_fahrenheit(c)，接收摄氏度参数c，返回对应的华氏度值。<br><br>转换公式：华氏度 = 摄氏度 × 9 / 5 + 32<br><br>要求：<br>① 用 <code>def</code> 定义函数，<code>return</code> 返回计算结果<br>② 外部调用三次，分别传入 0、36.5、100<br>③ 每次调用用 f-string 打印格式化结果，格式如 <code>0°C = 32.0°F</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'0°C = 32.0°F\n36.5°C = 97.7°F\n100°C = 212.0°F'}],
  hint:"def 定义带参数 c 的函数，函数体内 return 计算结果。外部调用三次，每次传入不同参数值，用 f-string 打印。"
};
