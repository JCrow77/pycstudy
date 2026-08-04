LEVELS[59] = { id:59, title:"综合项目③：物资管理系统", phase:"综合实战", icon:"📦",
  briefing: { narrative:"发射前最后物理难关——重量管理。每一克多余重量都增加致命风险。完整物资管理系统：列表存储物品字典。那些外星文物总重47kg，优先级：你把它设成1。", objective:"列表+字典构建物资管理系统：添加、查找、移除低优先级、计算总重。", tip:"list存dict→函数封装操作→总重计算。" },
  knowledge: { concept:"物资管理系统", intro:"综合运用列表和字典：每个物品用dict存储属性，所有物品放入list，用函数封装增删查操作。", example:"items=[{\"name\":\"水\",\"weight\":50,\"priority\":1}]\ndef add(n,w,p):\n    items.append({\"name\":n,\"weight\":w,\"priority\":p})\ndef total():\n    return sum(i[\"weight\"] for i in items)", exampleOutput:"80", rules:[{title:"设计思路",text:"物品→dict(属性) | 仓库→list(物品) | 操作→函数封装"}], watchOut:"函数内部可以直接访问外部定义的列表变量（只要不重新赋值）。" },
  story:"构建物资管理系统，管理飞船货物清单。<br><br>预填数据：<code>items</code> 列表，包含5个物品字典，每个字典含 <code>name</code>（名称）、<code>weight</code>（重量kg）、<code>priority</code>（优先级1-5）。<br><br>要求定义4个函数：<br>① <code>add_item(name, weight, priority)</code>：向items追加新物品字典<br>② <code>search_item(name)</code>：遍历items，找到name匹配的物品并返回<br>③ <code>remove_low_priority(threshold)</code>：过滤保留priority<=threshold的物品<br>④ <code>calc_total_weight()</code>：用sum()计算所有物品总重量<br><br>最后：添加\"急救包\"(weight=15, priority=1)，搜索\"外星文物\"并打印，移除priority>2的物品，打印清单和总重量。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'找到: 外星文物, 重量: 47kg\\n当前物资清单:\\n  水: 50kg\\n  食物: 30kg\\n  氧气罐: 80kg\\n  外星文物: 47kg\\n  急救包: 15kg\\n总重量: 222kg'}],
  hint:"items列表已预填。定义4个函数：add_item用append、search_item用for循环匹配、remove_low_priority用列表推导式过滤、calc_total_weight用sum。",
  practice:true
};
