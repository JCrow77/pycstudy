LEVELS[33] = { id:33, title:"网格扫描：嵌套循环", phase:"循环结构", icon:"🗺️",
  briefing: { narrative:"根据信号中隐藏的三维坐标，锁定了信号源位置——地表下350米，规则长方体结构。外层循环遍历行，内层遍历列，逐行逐列标记每座建筑。", objective:"用嵌套for循环生成5x5网格地图，在信号源位置显示星号。", tip:"外层循环控制行，内层循环控制列。print(x,end=\" \")不换行。" },
  knowledge: { concept:"嵌套循环", intro:"嵌套循环就是循环里面再写循环。外层每执行一次，内层执行完整一轮。适合处理二维数据。", example:"for i in range(5):\n    for j in range(5):\n        if i==2 and j==2:\n            print(\"*\", end=\" \")\n        else:\n            print(f\"({i},{j})\", end=\" \")\n    print()", exampleOutput:"(0,0) (0,1) (0,2) (0,3) (0,4)\n(1,0) (1,1) (1,2) (1,3) (1,4)\n(2,0) (2,1) * (2,3) (2,4)\n(3,0) (3,1) (3,2) (3,3) (3,4)\n(4,0) (4,1) (4,2) (4,3) (4,4)", rules:[{title:"print技巧",text:"print(x, end=\" \") — 打印后不换行加空格 | print() — 只换行"}], watchOut:"内层循环的print要用end=\" \"让同行内容连在一起。内层循环结束后要加空的print()换行！" },
  story:"用嵌套 for 循环生成5x5网格地图。<br><br>要求：<br>① 外层循环 <code>for i in range(5)</code> 控制行<br>② 内层循环 <code>for j in range(5)</code> 控制列<br>③ 在 (2,2) 位置（即 i==2 且 j==2）打印 <code>\"*\"</code>，其余位置打印 <code>(i,j)</code> 格式的坐标<br>④ 内层 print 用 <code>end=\" \"</code> 不换行<br>⑤ 内层循环结束后加一个空 <code>print()</code> 换行",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'(0,0) (0,1) (0,2) (0,3) (0,4) \n(1,0) (1,1) (1,2) (1,3) (1,4) \n(2,0) (2,1) * (2,3) (2,4) \n(3,0) (3,1) (3,2) (3,3) (3,4) \n(4,0) (4,1) (4,2) (4,3) (4,4) '}],
  hint:"两层 for 循环。内层 print 用 end=\" \" 不换行。if 判断 i==2 and j==2 时打印特殊标记。内层结束后需要一个空的 print() 换行。"
};
