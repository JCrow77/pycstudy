LEVELS[49] = { id:49, title:'永恒的坐标：tuple 元组', phase:'数据结构', icon:'🔒',
  briefing: { narrative:'外星数据库中每个殖民地母星的三维坐标被存储为不可修改的序列——他们称之为"锚点"。元组一旦创建就不可更改(immutable)。', objective:'创建元组存储坐标，访问元素，尝试修改（会报错），对比列表的可变性。', tip:'元组=不可修改的列表。用圆括号()创建。' },
  knowledge: { concept:'tuple 元组', intro:'元组(tuple)与列表几乎一样，但一旦创建就不能修改——不能添加、删除、或改变元素。用圆括号()创建。', example:'home=(12500,8400,31000)\nprint(home[0])\ntry:\n    home[0]=999\nexcept TypeError:\n    print("不可修改")', exampleOutput:'12500\n不可修改', rules:[{title:'tuple vs list',text:'tuple: ()创建，不可改，适合保护不变数据 | list: []创建，可改，适合动态数据'}], watchOut:'元组只有一个元素时也要加逗号：t=(42,)。不加逗号t=(42)就是普通的整数42！' },
  story:'创建元组home=(12500,8400,31000)。打印每个坐标。用try/except尝试修改home[0]=99999（捕获TypeError），打印"元组不可修改！"。再创建列表coords并成功修改coords[0]=99999后打印。',
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'12500\n8400\n31000\n元组不可修改！\n[99999, 8400, 31000]'}],
  hint:'home=(12500,8400,31000) → print坐标 → try: home[0]=99999 → except TypeError: print("元组不可修改！") → coords=[12500,8400,31000]; coords[0]=99999; print(coords)。'
};
