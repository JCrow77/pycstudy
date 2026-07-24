LEVELS[23] = { id:23, title:"层层深入：嵌套 if", phase:"条件判断", icon:"🧅",
  briefing: { narrative:"真正的危机往往不是单一的。燃料低本身还可以接受——但如果同时氧气也不足，那就是灾难。嵌套if让你能评估层层叠加的条件。地表扫描仪更新数据：地下空腔的温度比周围岩层高了整整15度。", objective:"用嵌套if判断燃料和氧气的双重状态，输出四级警报。", tip:"外层if先判断，内层if在缩进里。" },
  knowledge: { concept:"嵌套 if", intro:"嵌套if就是在if块里面再写if。外层条件先判断，只有外层通过才会检查内层。", example:"fuel = 15\noxygen = 16\nif fuel < 20:\n    print(\"燃料偏低\")\n    if oxygen < 18:\n        print(\"双重危机！\")\n    else:\n        print(\"仅燃料不足\")\nelse:\n    print(\"燃料正常\")", exampleOutput:"燃料偏低\n双重危机！", rules:[{title:"嵌套规则",text:"内层if完全缩进在外层if里面。每多一层嵌套就多缩进4个空格。"}], watchOut:"嵌套层数太多会让代码很难读。一般不建议超过3层嵌套。" },
  story:"外层判断 fuel=15<20，内层判断 oxygen=16<18。打印\"燃料偏低\"和\"双重危机！\"。",
  starterCode:`fuel = 15
oxygen = 16

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'燃料偏低\n双重危机！'}],
  hint:"先写外层 if fuel < 20，在里面再写一个 if oxygen < 18。内层的 if 需要比外层多缩进一级。"
};
