LEVELS[22] = { id:22, title:"多重选择：if/elif/else", phase:"条件判断", icon:"🌳",
  briefing: { narrative:"飞船状态不只是\"安全\"和\"危险\"两极——四级分级响应系统需要更精细的判断：优良（>=20%）、正常（>=18%）、偏低（>=15%）、危险（<15%）。if/elif/else 像一棵决策树，从上到下逐一检查条件，第一个匹配的就执行，后面的全跳过。", objective:"学会使用 <strong>if/elif/else 多分支</strong>结构处理多个条件的判断——如氧气四级分级系统。", tip:"elif 是 \"else if\" 的缩写——如果前面的条件不成立，再试试这个条件。可以写多个 elif。" },
  knowledge: { concept:"if/elif/else 多分支", intro:"当需要判断<strong>多个条件</strong>时，使用 <strong>if/elif/else</strong>：<br>• <code>if 条件1:</code> — 第一优先级<br>• <code>elif 条件2:</code> — 第二优先级（前面不成立才检查）<br>• <code>elif 条件3:</code> — 可以写多个 elif<br>• <code>else:</code> — 所有条件都不成立时执行<br><br><strong>执行逻辑：</strong>从上到下依次检查，<strong>第一个成立的条件执行后，跳过其余所有分支</strong>。", example:"oxygen = 16\nif oxygen >= 20:\n    print(\"氧气优良\")\nelif oxygen >= 18:\n    print(\"氧气正常\")\nelif oxygen >= 15:\n    print(\"氧气偏低\")\nelse:\n    print(\"氧气危险\")", exampleOutput:"氧气偏低", rules:[{title:"执行顺序很重要！",text:"条件按书写顺序从上到下检查。第一个成立的执行后，后面的全被跳过。<br>因此条件要从<strong>最严格</strong>到<strong>最宽松</strong>排列。如果把 <code>&gt;=15</code> 放在 <code>&gt;=20</code> 前面，16 也会被归为\"偏低\"而不会走到\"优良\"。"}], watchOut:"<strong>顺序是关键！</strong>多分支条件必须按优先级从高到低排列。如果顺序搞反——比如先把 <code>&gt;=15</code> 放在前面——那么即使氧气是 20，也会被第一个条件捕获，输出\"偏低\"而不是\"优良\"。另外 elif 不能单独出现，必须以 if 开头。" },
  story:"变量 <code>oxygen = 16</code> 已给出。<br>写四级判断：<br>• 如果氧气 <strong>&gt;= 20</strong>：打印 <code>氧气优良</code><br>• 否则如果 <strong>&gt;= 18</strong>：打印 <code>氧气正常</code><br>• 否则如果 <strong>&gt;= 15</strong>：打印 <code>氧气偏低</code><br>• 否则：打印 <code>氧气危险</code>",
  starterCode:`oxygen = 16

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'氧气偏低'}],
  hint:"条件从大到小排列：先 >=20，再 >=18，再 >=15，最后 else。每个分支下写对应的 print。"
};
