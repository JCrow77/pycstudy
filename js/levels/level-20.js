LEVELS[20] = { id:20, title:"命运的岔路口：if 单分支", phase:"条件判断", icon:"🔀",
  briefing: { narrative:"比较运算符给出了答案，但你需要根据答案采取行动。if语句让程序做出第一个自主决策：如果氧气低于18%，就发出红色警报。这是你赋予飞船的第一个本能反应。", objective:"用 if 语句判断氧气值，低于18时自动发出警报。", tip:"if后面的冒号和缩进缺一不可。" },
  knowledge: { concept:"if 语句", intro:"if语句让程序能够根据条件做出决策。如果条件为True，就执行缩进的代码块；如果为False，就跳过。", example:"oxygen = 17\nif oxygen < 18:\n    print(\"警告：氧气不足！\")\n    print(\"请立即补充氧气\")", exampleOutput:"警告：氧气不足！\n请立即补充氧气", rules:[{title:"if 语法",text:"if 条件: → 换行 → 缩进4个空格 → 条件成立时执行的代码。冒号和缩进缺一不可！"}], watchOut:"if后面必须有冒号:！下一行必须缩进（按Tab或4个空格）！" },
  story:"用 if 判断 oxygen=17 是否<18，成立时打印\"警告：氧气不足！\"。",
  starterCode:`oxygen = 17

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'警告：氧气不足！'}],
  hint:"用 if 关键字，后面写条件 oxygen < 18，别忘了冒号。条件成立时要执行的代码需要缩进。",
  achievement:{id:"py_l20",icon:"💡",name:"逻辑觉醒"}
};
