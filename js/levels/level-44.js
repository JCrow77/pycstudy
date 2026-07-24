LEVELS[44] = { id:44, title:"有序收纳：list 创建与访问", phase:"数据结构", icon:"📋",
  briefing: { narrative:"外星遗迹墙壁上刻着殖民过的星球名字——按发现年代排列，关键前5个依稀可辨：KEPLER-442B、TRAPPIST-1E、PROXIMA-B、LHS-1140B、ROSS-128B。列表是有序数据的容器。索引从0开始，不是1。", objective:"创建5个星球的列表，用索引访问第1个和第3个，用len()打印长度。", tip:"索引从0开始！第一个元素的索引是0。" },
  knowledge: { concept:"list 列表", intro:"列表(list)是Python存储有序数据的容器，用方括号[]创建。每个元素有编号(索引)，从0开始。", example:"planets = [\"地球\",\"火星\",\"木星\"]\nprint(planets[0])\nprint(len(planets))", exampleOutput:"地球\n3", rules:[{title:"索引规则",text:"第1个=索引0 | 负数索引从末尾数：[-1]=最后一个 | len()返回元素总数"}], watchOut:"列表索引超出范围会报IndexError。len=5则索引范围是0~4。" },
  story:"创建5个星球的列表，用索引访问第1个([0])和第3个([2])，用len()打印长度。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"第1个星球: KEPLER-442B\n第3个星球: PROXIMA-B\n星球总数: 5"}],
  hint:"planets=[\"KEPLER-442B\",\"TRAPPIST-1E\",\"PROXIMA-B\",\"LHS-1140B\",\"ROSS-128B\"] → print(planets[0]) → print(planets[2]) → print(len(planets))。"
};
