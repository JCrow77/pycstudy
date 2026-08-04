LEVELS[17] = { id:17, title:"优雅的拼接：f-string 格式化", phase:"类型深入", icon:"✨",
  briefing: { narrative:"你已经厌倦了用 + 号拼接字符串——每次遇到数字还得先转成 str，又容易漏掉空格。屏幕上弹出一条新提示：\"Python 3.6+ f-string — 用花括号直接在字符串里嵌入变量。\"你试了一下，如同在文字中开了一扇任意门——变量直接放进花括号，数字不用转，格式还可以控制。", objective:"学会使用 <strong>f-string</strong>（<code>f\"...\"</code>）在字符串中直接嵌入变量和表达式，告别繁琐的 + 号拼接。", tip:"f-string 是 Python 最优雅的字符串格式化方式——在字符串前加 f，花括号里直接写变量名。" },
  knowledge: { concept:"f-string 格式化", intro:"<strong>f-string</strong>（格式化字符串字面量）是 Python 3.6+ 提供的一种简洁的字符串格式化方式。<br><br>用法：在字符串前加一个 <code>f</code>，然后在花括号 <code>{}</code> 里直接写变量名或表达式，Python 会自动替换成对应的值。<br><br>还可以在花括号里加<strong>格式说明</strong>：<code>{变量:.2f}</code> 保留两位小数，<code>{变量:,}</code> 加千位分隔符。", example:"name = \"飞船\"\noxygen = 21\ntemp = 36.5\nprint(f\"{name} 氧气 {oxygen}% 温度 {temp}°C\")\nprint(f\"温度保留一位: {temp:.1f}\")", exampleOutput:"飞船 氧气 21% 温度 36.5°C\n温度保留一位: 36.5", rules:[{title:"f-string 格式",text:"<code>f\"文字 {变量} 文字\"</code> — 花括号里直接写变量名。<br><code>{变量:.2f}</code> 保留两位小数。<br><code>{变量:.0f}</code> 不显示小数。<br>花括号里还可以写表达式：<code>{a + b}</code>"}], watchOut:"f-string 只在 Python 3.6 及以上版本可用。另外别忘了字符串前面的 <code>f</code>——没有 f 的话花括号就是普通文字，不会被替换。" },
  story:"用 f-string 格式化输出三行传感器报告。<br>变量已给出：<code>oxygen = 21</code>，<code>temp = 36.5</code>，<code>fuel = 85</code>。<br>输出格式：<code>氧气: 21%, 温度: 36.5°C, 燃料: 85 单位</code>",
  starterCode:`oxygen = 21
temp = 36.5
fuel = 85

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'氧气: 21%, 温度: 36.5°C, 燃料: 85 单位'}],
  hint:"写 print(f\"氧气: {oxygen}%, 温度: {temp}°C, 燃料: {fuel} 单位\")。花括号里的变量会被自动替换成对应的值，不用 str() 转换。"
};
