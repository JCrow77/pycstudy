LEVELS[27] = { id:27, title:"重复的力量：for+range()", phase:"循环结构", icon:"🔁",
  briefing: { narrative:"反应堆启动需要倒数计时。for循环配合range()高效重复执行——每一次迭代，离点火更近一秒。", objective:"用 for i in range() 打印10到1的倒数，最后打印点火。", tip:"range(开始,结束,步长) — 不包含结束值。" },
  knowledge: { concept:"for 循环 + range()", intro:"for 循环用来重复执行代码。range()生成一串整数，for逐个取出。", example:"for i in range(5):\n    print(f\"循环第{i+1}次\")\nprint(\"循环结束！\")", exampleOutput:"循环第1次\n循环第2次\n循环第3次\n循环第4次\n循环第5次\n循环结束！", rules:[{title:"range语法",text:"range(开始,结束,步长) — 开始包含，结束不包含，步长可负。"}], watchOut:"range()不包含结束值！倒数时步长必须写负数。" },
  story:"用 <code>for</code> 循环打印发射倒数计时。<br><br>要求：<br>① 用 <code>for i in range(10, 0, -1)</code> 让 i 从10递减到1<br>② 每次循环 <code>print(i)</code> 打印当前数字<br>③ 循环结束后打印 <code>\"点火！\"</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n点火！'}],
  hint:"range(10,0,-1) 让 i 从10递减到1。在循环里 print(i)，循环结束后（不缩进）再打印点火。"
};
