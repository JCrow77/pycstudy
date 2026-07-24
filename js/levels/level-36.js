LEVELS[36] = { id:36, title:"打造你的工具：def 定义函数", phase:"函数", icon:"🔨",
  briefing: { narrative:"你已经写了十几遍\"摄氏度转华氏度\"公式。函数就像亲手打造的工具：def定义一次，给它一个名字，之后随叫随到。", objective:"用 def 定义温度转换函数，计算并打印结果。", tip:"def 函数名(): → 缩进 → 函数体。" },
  knowledge: { concept:"def 定义函数", intro:"函数是一段可重复使用的代码块。用def定义，给它一个名字，之后调用这个名字就能执行那段代码。", example:"def greet():\n    print(\"你好，船长！\")\ngreet()", exampleOutput:"你好，船长！", rules:[{title:"语法",text:"def 函数名(): → 换行 → 缩进(4空格) → 函数体。调用: 函数名()。"}], watchOut:"def后面必须有冒号:！函数体必须缩进！忘记冒号是初学者最高频的错误。" },
  story:"定义 celsius_to_fahrenheit() 函数，计算 c=36.5 对应的华氏度(f=c*9/5+32)，用f-string打印结果，最后调用函数。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'36.5°C = 97.7°F'}],
  hint:"def 定义函数，函数体内用变量 c 计算 f。最后在函数外部调用这个函数。"
};
