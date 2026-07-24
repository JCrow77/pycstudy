LEVELS[58] = { id:58, title:'综合项目：飞船状态面板', phase:'综合实战', icon:'🖥️',
  briefing: { narrative:'发射控制中心需要统一状态面板。五个子系统——生命维持(65)、导航(82)、通讯(45)、推进器(90)、外星能量护盾(30)——每个独立报告状态。', objective:'字典存储5个子系统，for循环遍历，if转为文字等级，f-string格式化打印，统计危险系统数量。', tip:'dict存数据→for遍历→if判断等级→f-string输出。' },
  knowledge: { concept:'飞船状态面板', intro:'综合运用字典、循环、条件判断构建状态面板。', example:'systems={"life":65,"nav":82}\ndanger=0\nfor n,v in systems.items():\n    if v>=80:lv="正常"\n    elif v>=50:lv="警告"\n    else:lv="危险";danger+=1\n    print(f"{n}:{v}% {lv}")', exampleOutput:'life:65% 警告\nnav:82% 正常', rules:[{title:'等级划分',text:'>=80→正常 | >=50→警告 | <50→危险'}], watchOut:'.items()遍历字典同时获取键和值。' },
  story:'构建飞船状态面板。预填字典：systems = {"生命维持": 65, "导航": 82, "通讯": 45, "推进器": 90, "护盾": 30}。用for遍历，if/elif/else判断等级(>=80正常/>=50警告/<50危险)，用danger统计危险系统数量(初始=0)，最后打印危险系统数量。',
  starterCode:`systems = {"生命维持": 65, "导航": 82, "通讯": 45, "推进器": 90, "护盾": 30}

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'生命维持: 65% 警告\n导航: 82% 正常\n通讯: 45% 危险\n推进器: 90% 正常\n护盾: 30% 危险\n\n危险系统: 2 个'}],
  hint:'for name,val in systems.items(): → if/elif/else判断 → print → danger累加。'
};
