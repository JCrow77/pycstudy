LEVELS[46] = { id:46, title:"精准切割：list 切片", phase:"数据结构", icon:"✂️",
  briefing: { narrative:"外星殖民地时间跨度数万年，你只关心第三到第七纪元。切片像手术刀精准取出列表任意段。外星人用间隔排列编码不同信息层次。", objective:"用切片取出列表的5个不同片段：前5个、中段、间隔、反转、末尾。", tip:"[start:end:step] — start包含，end不包含。" },
  knowledge: { concept:"list 切片", intro:"切片用 [start:end:step] 语法取出列表的一部分。省略start=从头，省略end=到尾，step=步长（负数=反向）。", example:"nums=[10,20,30,40,50]\nprint(nums[:3])\nprint(nums[1:4])\nprint(nums[::2])\nprint(nums[::-1])\nprint(nums[-3:])", exampleOutput:"[10,20,30]\n[20,30,40]\n[10,30,50]\n[50,40,30,20,10]\n[30,40,50]", rules:[{title:"切片公式",text:"[:n]前n个 | [a:b]索引a到b-1 | [::2]隔一个 | [::-1]反转 | [-3:]最后3个"}], watchOut:"切片不修改原列表，而是返回一个新列表！" },
  story:"列表[10,20,30,40,50,60,70,80,90,100]。切片取出：①前5个 ②第3-7个 ③每隔一个 ④反转 ⑤最后3个。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"[10, 20, 30, 40, 50]\n[30, 40, 50, 60, 70]\n[10, 30, 50, 70, 90]\n[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]\n[80, 90, 100]"}],
  hint:"代码已预填。运行观察5种切片操作的结果。"
};
