LEVELS[57] = { id:57, title:"综合项目：生存天数计算器", phase:"综合实战", icon:"⏰",
  briefing: { narrative:"地震频率指数增长——昨天3次，今天8次。能源网络输出功率一周下降40%。精确计算剩余物资生存天数，取最小值——那是最晚发射日期。", objective:"用函数分别计算四种物资可撑天数，列表存储，min()取最小值，f-string输出每种物资天数和最终生存天数。", tip:"每种物资单独计算，取短板（最小值）。" },
  knowledge: { concept:"生存天数计算", intro:"综合运用函数、列表、min()：①每种物资用公式计算天数 ②结果存列表 ③取最小值 ④f-string格式化输出。", example:"o2=1200/50\nfood=90/3\nwater=200/8\nfuel=(500-200)/30\ndays=[o2,food,water,fuel]\nprint(f\"氧气:{o2:.0f}天 食物:{food:.0f}天\")\nprint(f\"最终:{min(days):.0f}天\")", exampleOutput:"氧气:24天 食物:30天\n水:25天 燃料:10天\n最终:10天", rules:[{title:"计算方式",text:"天数=(存量-预留)/日耗 | 取min找短板 | f-string格式化"}], watchOut:"燃料天数不要忘记减去发射预留的200单位！" },
  story:"计算四种物资各自能撑多少天，取最小值作为最终生存天数。<br><br><strong>要求：</strong><br>① 定义函数 <code>calc_days(stock, daily, reserve=0)</code>，返回 <code>(stock - reserve) / daily</code><br>② 分别计算：氧气 <code>calc_days(1200, 50)</code>、食物 <code>calc_days(90, 3)</code>、水 <code>calc_days(200, 8)</code>、燃料 <code>calc_days(500, 30, 200)</code>（注意燃料有发射预留200）<br>③ 将四个结果存入列表 <code>days</code><br>④ 用 <code>min(days)</code> 取最小值<br>⑤ 用 f-string 依次打印每种物资的天数（取整 <code>:.0f</code>）和最终生存天数",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'氧气: 24天\n食物: 30天\n水: 25天\n燃料: 10天\n最短生存: 10天'}],
  hint:"先定义函数 calc_days(stock, daily, reserve=0)，然后分别调用四次，结果存列表。用 min() 找最小值。",
  practice:true
};
