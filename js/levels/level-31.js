LEVELS[31] = { id:31, title:"选择武器：while vs for", phase:"循环结构", icon:"⚔️",
  briefing: { narrative:"信号每12小时重复共20轮——固定次数，for领地。反应堆升温直到核心3000度才停——不知多少轮，while主场。次数已知用for，条件未知用while。", objective:"分别用for和while实现两种不同场景的循环。", tip:"次数已知→for range() | 条件未知→while。" },
  knowledge: { concept:"for vs while", intro:"for：知道要循环多少次。while：不知道次数，直到某条件为止。", example:"# for — 次数已知\nfor i in range(3):\n    print(f\"第{i+1}次播报\")\n\n# while — 条件未知\ntemp = 100\nwhile temp < 200:\n    temp += 20\n    print(f\"温度: {temp}\")", exampleOutput:"第1次播报\n第2次播报\n第3次播报\n温度: 120\n温度: 140\n温度: 160\n温度: 180\n温度: 200", rules:[{title:"选择指南",text:"\"做N次\"→for range(N) | \"做到某条件\"→while | \"遍历元素\"→for item in seq"}], watchOut:"能用for解决的问题不要用while——for更简洁，且不会忘记计数器导致死循环。" },
  story:"①for循环模拟20轮信号接收 ②while循环模拟升温：1000→每次+200→直到>=3000。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'信号接收中...第1轮\n信号接收中...第2轮\n信号接收中...第3轮\n信号接收中...第4轮\n信号接收中...第5轮\n信号接收中...第6轮\n信号接收中...第7轮\n信号接收中...第8轮\n信号接收中...第9轮\n信号接收中...第10轮\n信号接收中...第11轮\n信号接收中...第12轮\n信号接收中...第13轮\n信号接收中...第14轮\n信号接收中...第15轮\n信号接收中...第16轮\n信号接收中...第17轮\n信号接收中...第18轮\n信号接收中...第19轮\n信号接收中...第20轮\n当前温度: 1200\n当前温度: 1400\n当前温度: 1600\n当前温度: 1800\n当前温度: 2000\n当前温度: 2200\n当前温度: 2400\n当前温度: 2600\n当前温度: 2800\n当前温度: 3000'}],
  hint:"第一部分用 for 循环固定20次。第二部分设 temp=1000，while temp<3000 时每次加200。"
};
