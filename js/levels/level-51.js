LEVELS[51] = { id:51, title:"数据结构实战：能源网络地图", phase:"数据结构", icon:"🗺️",
  briefing: { narrative:"外星文明最后的数据库记录令人不寒而栗。这个星球不是他们的家园，而是逃亡途中的中转站。能源网络中心输出功率每周衰减5%——撑不了太久了。", objective:"综合运用list/dict/tuple/set构建5节点能源网络，查询连接、列出节点、打印核心坐标。", tip:"list存节点，dict存连接，tuple锁坐标，set去重路径。" },
  knowledge: { concept:"数据结构综合", intro:"实战中往往需要组合多种数据结构：list存储有序数据，dict映射关系，tuple保护不变数据，set去重。", example:"nodes=[\"反应堆\",\"转换器\",\"稳压器\",\"分配器\",\"护盾\"]\nlinks={\"反应堆\":[\"转换器\"]}\ncore=(350,120,-80)\nprint(len(nodes))\nprint(links[\"反应堆\"])\nprint(core)", exampleOutput:"5\n转换器\n(350,120,-80)", rules:[{title:"综合思路",text:"list→存节点名 | dict→存连接关系 | tuple→存不变坐标 | set→去重备份路径"}], watchOut:"复杂项目先想清楚用哪种数据结构，再开始写代码。选对数据结构事半功倍。" },
  story:"综合运用list、dict、tuple、set构建能源网络模型。<br><br>预填数据：<code>nodes</code>列表(5个节点)、<code>links</code>字典(连接关系)、<code>core</code>元组(核心坐标)。<br><br>要求：<br>① 用 <code>len(nodes)</code> 打印节点总数<br>② 用 <code>links[\"护盾\"]</code> 查询护盾连接的节点<br>③ 直接打印 <code>core</code> 元组查看核心坐标",
  starterCode:`nodes = ["反应堆","转换器","稳压器","分配器","护盾"]
links = {"反应堆":["转换器","稳压器"],"转换器":["分配器"],"稳压器":["分配器"],"分配器":["护盾"],"护盾":[]}
core = (350, 120, -80)

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"节点总数: 5\n护盾连接节点: []\n核心坐标: (350, 120, -80)"}],
  hint:"print(len(nodes)) → print(links[\"护盾\"]) → print(core)。",
  practice:true
};
