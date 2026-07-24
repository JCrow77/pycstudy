LEVELS[47] = { id:47, title:"键值配对：dict 字典基础", phase:"数据结构", icon:"📖",
  briefing: { narrative:"每个殖民地不只是一个名字——有丰富信息：人口、资源、恒星光谱、建立年代。字典能按\"键\"查找\"值\"，像微型数据库。", objective:"创建含5个键值对的殖民地档案字典，用键名访问并打印其中3个信息。", tip:"dict[\"键名\"] — 用键查找对应的值。" },
  knowledge: { concept:"dict 字典", intro:"字典(dict)存储键值对，用{}创建。每个键(key)对应一个值(value)，通过键来访问值——就像用\"名字\"查\"电话号码\"。", example:"colony = {\"name\":\"KEPLER\",\"pop\":5000}\nprint(colony[\"name\"])", exampleOutput:"KEPLER", rules:[{title:"语法",text:"创建: {键:值, 键:值} | 访问: dict[\"键\"] | 添加: dict[\"新键\"]=值"}], watchOut:"字典的键必须唯一！访问不存在的键会报KeyError。" },
  story:"创建殖民地档案字典，含name/population/resource/star_type/established五个键值对。访问并打印name、resource、star_type。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"殖民地: KEPLER-442B\n资源: 氦-3\n恒星: K型主序星"}],
  hint:"colony={\"name\":\"KEPLER-442B\",...} → print(colony[\"name\"])等。"
};
