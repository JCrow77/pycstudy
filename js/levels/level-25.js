LEVELS[25] = { id:25, title:"条件判断实战：环境异常分类", phase:"条件判断", icon:"🌡️",
  briefing: { narrative:"地下空腔的温度持续上升。地表扫描发现了七处热异常点。你需要建造自动分类系统：根据温度、距离、变化速度三个维度，将每个异常点归入四级。", objective:"根据温度、距离、变化速度三个维度综合评估，输出异常等级。", tip:"最危险的条件优先检查。" },
  knowledge: { concept:"综合条件判断", intro:"把最危险的条件组合放在判断链的最前面，确保它们被优先捕获。", example:"score = 85\nif score >= 90:\n    print(\"优秀\")\nelif score >= 75:\n    print(\"良好\")\nelif score >= 60:\n    print(\"及格\")\nelse:\n    print(\"不及格\")", exampleOutput:"良好", rules:[{title:"等级规则",text:"危险：温度>50 且 距离<10 且 速度>5 | 预警：温度>40 或 速度>3 | 观察：温度>30 或 距离<20 | 安全：其余"}], watchOut:"判断顺序不能乱！最危险的条件必须放在最前面。" },
  story:"temp=55, dist=8, rate=7。规则：temp>50且dist<10且rate>5→\"危险\"；temp>40或rate>3→\"预警\"；temp>30或dist<20→\"观察\"；其余→\"安全\"。按危险→预警→观察→安全的顺序写if/elif/else。",
  starterCode:`temp = 55
dist = 8
rate = 7

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'危险'}],
  hint:"最危险的条件放最前面：三个条件用 and 连接。第二级用 or。顺序是危险→预警→观察→安全。",
  achievement:{id:"py_l25",icon:"🧠",name:"逻辑大师"},
  practice:true
};
