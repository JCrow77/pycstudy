LEVELS[24] = { id:24, title:"逻辑的捷径：and / or / not", phase:"条件判断", icon:"🔗",
  briefing: { narrative:"嵌套 if 层层缩进让你眼花缭乱。Python 有三个逻辑运算符——and、or、not——让你在一行内组合多个条件，一行替代两层嵌套。代码从此简洁又优雅。", objective:"用 <strong>and / or</strong> 逻辑运算符重写判断逻辑，一行组合两个条件，告别层层嵌套。", tip:"and 是两个条件都成立才行，or 是至少一个成立就行。" },
  knowledge: { concept:"逻辑运算符 — and / or / not", intro:"三个逻辑运算符帮你在一行内组合多个条件：<br>• <code>and</code> — <strong>并且</strong>：两个条件<strong>都成立</strong>，整体才成立<br>• <code>or</code> — <strong>或者</strong>：两个条件<strong>至少一个成立</strong>，整体就成立<br>• <code>not</code> — <strong>取反</strong>：把 True 变 False，False 变 True", example:"temp = 42\npressure = 80\n\nif temp > 40 and pressure < 100:\n    print(\"高温预警\")\nelif temp > 40 or pressure < 100:\n    print(\"需要关注\")\nelse:\n    print(\"一切正常\")", exampleOutput:"高温预警", rules:[{title:"and 和 or 的区别",text:"<code>and</code>：必须两个都 True 才 True<br><code>or</code>：只要有一个 True 就 True<br>打个比方：and 像串联电路（一个断就全断），or 像并联电路（一路通就通）。"},{title:"运算优先级",text:"<code>not</code> 优先级最高，<code>and</code> 其次，<code>or</code> 最低。如果不确定，用括号明确。"}], watchOut:"注意不要把 <code>and</code> 和 <code>or</code> 搞混！\"燃料不足<strong>并且</strong>氧气不足\"和\"燃料不足<strong>或者</strong>氧气不足\"——差一个字，结果完全不同。" },
  story:"飞船传感器读数：<strong>fuel = 15</strong>，<strong>oxygen = 25</strong>。<br>用 and/or 重写判断逻辑，替代嵌套 if。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'单一警告'}],
  hint:"用 and 连接两个条件检查\"都成立\"，用 or 连接两个条件检查\"至少一个成立\"。if 和 elif 各用不同的运算符。"
};
