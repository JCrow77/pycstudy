LEVELS[11] = { id:11, title:"文字也是数据", phase:"变量与基本类型", icon:"🔤",
  briefing: { narrative:"屏幕亮起，氧气传感器读数区显示\"21%\"——但它居然是文字，不是数字。飞船系统弹出一条提示：\"字符串 — 由字符组成的序列。\"原来文字也可以像数字一样存储、拼接、传递。你需要学会创建字符串、用引号包裹它们，以及把多段文字连接在一起。", objective:"学会创建<strong>字符串（str）</strong>——用引号包裹文字，并用 <code>+</code> 拼接多个字符串。", tip:"字符串就是用引号包起来的任意文字，包括中文、英文、数字、符号。" },
  knowledge: { concept:"字符串 str", intro:"<strong>字符串（str）</strong> 是 Python 存储文字的方式。用英文引号 <code>\"\"</code> 或 <code>''</code> 把文字包起来，就创建了一个字符串。<br><br>用 <code>+</code> 号可以把多个字符串<strong>拼接</strong>在一起（像拼积木一样）。<br>用 <code>print()</code> 可以输出字符串的内容。", example:"name = \"氧气传感器\"\nprint(name + \" 在线\")", exampleOutput:"氧气传感器 在线", rules:[{title:"语法格式",text:"用英文引号 <code>\"\"</code> 或 <code>''</code> 包裹文字即可创建字符串。多个字符串用 <code>+</code> 拼接，注意自己加空格分隔。"}], watchOut:"字符串必须用<strong>英文引号</strong>包裹。中文引号 <code>\"\"</code> 不是合法的字符串定界符！如果代码报 SyntaxError，先检查引号是不是英文的。" },
  story:"创建三个字符串变量存储传感器名称：<strong>\"氧气传感器\"</strong>、<strong>\"温度传感器\"</strong>、<strong>\"燃料传感器\"</strong>。<br>用 <code>+</code> 拼接成完整句子并打印。<br>输出格式：<code>传感器清单: 氧气传感器 温度传感器 燃料传感器</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"传感器清单: 氧气传感器 温度传感器 燃料传感器"}],
  hint:"用 a = \"氧气传感器\" 创建第一个字符串。拼接时写成 \"传感器清单: \" + a + \" \" + b + \" \" + c，注意中间手动加空格。别忘 print()。"
};
