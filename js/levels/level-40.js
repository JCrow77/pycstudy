LEVELS[40] = { id:40, title:"预设方案：默认参数", phase:"函数", icon:"⚙️",
  briefing: { narrative:"飞船大多数系统运行在标准模式——反应堆功率默认100%。但紧急情况需手动覆盖。默认参数让你设定\"平时用这个值，除非我特别说明\"。", objective:"定义带默认参数的函数，分别用默认和自定义参数调用。", tip:"默认参数：def f(name=默认值) — 不传参就用默认值。" },
  knowledge: { concept:"默认参数", intro:"默认参数让函数的某些参数变成可选的。调用时不传则使用预设的默认值，传了则覆盖。", example:"def welcome(name, title=\"乘客\"):\n    print(f\"欢迎{title}{name}！\")\nwelcome(\"小明\")\nwelcome(\"张总\",\"船长\")", exampleOutput:"欢迎乘客小明！\n欢迎船长张总！", rules:[{title:"语法",text:"def 函数名(参数=默认值): → 调用时可不传该参数"}], watchOut:"有默认值的参数必须放在没有默认值的参数后面！def f(a=1, b): 是语法错误！" },
  story:"定义 calc_supply(days, daily=30)，返回days*daily。调用两次：①只传days=10 ②传days=10, daily=50。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'默认消耗: 300\n自定义消耗: 500'}],
  hint:"定义函数时给 daily 参数设默认值 30。第一次调用只传 days，第二次传两个参数覆盖默认值。",
  achievement:{id:"py_l40",icon:"⚙️",name:"系统架构师"}
};
