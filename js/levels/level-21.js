LEVELS[21] = { id:21, title:"两条路：if/else 双分支", phase:"条件判断", icon:"↔️",
  briefing: { narrative:"只有警报还不够——安全时飞船也应该给出正面反馈。if/else创造了两条分岔路：危险的左边和安全的右边。像一个真正的副驾驶，从不沉默。", objective:"用 if/else 判断温度：高温时警告，正常时报平安。", tip:"else不需要写条件——它自动代表\"所有其他情况\"。" },
  knowledge: { concept:"if/else 双分支", intro:"if/else提供两条路径：条件成立走if分支，不成立走else分支。两者必走其一，永远不会\"无路可走\"。", example:"temp = 42\nif temp >= 40:\n    print(\"高温警告\")\nelse:\n    print(\"温度正常\")", exampleOutput:"高温警告", rules:[{title:"if/else 语法",text:"if 块和 else 块的缩进必须对齐。else 后面也有冒号。else 不需要写条件。"}], watchOut:"else 后面不要加条件！else 就是\"否则\"。写 else temp < 40: 会报错。" },
  story:"用 if/else 判断 temp=42：>=40打印\"高温警告\"，否则打印\"温度正常\"。",
  starterCode:`temp = 42

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'高温警告'}],
  hint:"if 后面写条件 temp >= 40，要执行的代码缩进。else 后面也要有冒号，不需要条件。"
};
