LEVELS[43] = { id:43, title:"函数复用实战②：系统诊断重构", phase:"函数", icon:"🏗️",
  briefing: { narrative:"你的代码库变成灾难——一个200行的\"上帝函数\"包揽所有系统检查。必须拆解成五个职责单一的小函数，由干净的调度函数按序调用。干净的架构，在紧急时刻能救命。", objective:"将一段所有逻辑写在一起的函数重构为5个独立函数+1个调度函数。", tip:"每个函数只检查一个系统。" },
  knowledge: { concept:"函数重构", intro:"当一个函数做了太多事情，应该拆分成多个小函数。每个小函数只做一件事，然后一个调度函数按顺序调用它们。", example:"def check_engine():\n    print(\"引擎: 正常\")\ndef check_brake():\n    print(\"刹车: 正常\")\ndef run():\n    check_engine()\n    check_brake()\nrun()", exampleOutput:"引擎: 正常\n刹车: 正常", rules:[{title:"重构原则",text:"一个函数只做一件事 | 函数名应描述其功能 | 调度函数不包含具体逻辑"}], watchOut:"拆分后每个函数都很短，容易测试和修改。" },
  story:"将检查逻辑拆分成5个独立函数，每个检查一个系统。<br><br>预填变量：<code>o2=85, temp=28, fuel=90, comm=72, shield=55</code><br><br>要求：<br>① 定义5个函数：<code>check_o2(val)</code>、<code>check_temp(val)</code>、<code>check_fuel(val)</code>、<code>check_comm(val)</code>、<code>check_shield(val)</code><br>② 每个函数用if/elif/else判断：>=80→\"正常\"、>=50→\"警告\"、<50→\"危险\"<br>③ 定义 <code>run_all_checks()</code> 调度函数，依次调用5个检查函数，传入对应变量",
  starterCode:`o2 = 85
temp = 28
fuel = 90
comm = 72
shield = 55

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'氧气: 85 → 正常\n温度: 28 → 危险\n燃料: 90 → 正常\n通讯: 72 → 警告\n护盾: 55 → 警告'}],
  hint:"每个函数用if/elif/else判断等级并print。调度函数中依次调用5个函数。",
  practice:true
};
