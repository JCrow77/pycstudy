LEVELS[54] = { id:54, title:"混沌之美：random 模块实战", phase:"模块与错误处理", icon:"🎲",
  briefing: { narrative:"星球磁场随机波动，为充分测试系统在极端条件下表现，你需要模拟随机条件。外星遗迹中还有一道概率之门——只有随机数落在0.3-0.7之间才会开启。", objective:"使用randint、choice、random()完成三个随机模拟并打印结果。", tip:"import random — randint(范围)、choice(列表)、random()0~1小数。" },
  knowledge: { concept:"random 模块", intro:"random模块生成随机数：randint(a,b)随机整数、choice(list)随机选元素、random()生成0~1之间的小数。", example:"import random\nprint(random.randint(1,100))\nprint(random.choice([\"晴\",\"雨\"]))\nprint(random.random())", exampleOutput:"42\n雨\n0.73", rules:[{title:"三个常用函数",text:"randint(a,b)→a到b随机整数 | choice(list)→随机选元素 | random()→0.0到1.0随机小数"}], watchOut:"random每次运行结果不同！这是正常的。用于模拟和测试非常方便。" },
  story:"①randint(1,100)生成随机读数 ②choice选天气 ③random()测概率之门(0.3~0.7开门)，重复5次。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"传感器读数: 42\n天气: 风暴\n概率之门测试:\n第1次: 门开了\n第2次: 门关着\n第3次: 门开了\n第4次: 门关着\n第5次: 门开了"}],
  hint:"代码已预填。注意random每次运行结果不同！多运行几次观察变化。"
};
