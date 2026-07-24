LEVELS[13] = { id:13, title:"数据鉴定术：type()", phase:"类型深入", icon:"🔬",
  briefing: { narrative:"经历了 input() 陷阱之后，你决定再也不盲目相信数据类型了。飞船舱壁上挂着一个手持扫描仪，上面写着\"type() — 数据类型鉴定器\"。把它对准任何一个值，它就能告诉你这东西到底是什么类型。如同随身携带的 DNA 检测仪。", objective:"学会使用 <code>type()</code> 函数查看任意数据的类型——int、float、str、bool。", tip:"不确定一个变量是什么类型？type() 是你的好朋友，一秒揭穿它的真面目。" },
  knowledge: { concept:"type() 函数", intro:"<strong>type()</strong> 是 Python 内置的数据类型鉴定函数。把任何值或变量放进括号里，它就能告诉你这是哪种类型。<br><br>常见结果：<br>• <code>&lt;class 'int'&gt;</code> — 整数<br>• <code>&lt;class 'float'&gt;</code> — 浮点数<br>• <code>&lt;class 'str'&gt;</code> — 字符串<br>• <code>&lt;class 'bool'&gt;</code> — 布尔值", example:"print(type(42))\nprint(type(3.14))\nprint(type(\"hello\"))\nprint(type(True))", exampleOutput:"<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>", rules:[{title:"type() 的用法",text:"<code>type(值)</code> 返回该值的类型。可以直接 <code>print(type(变量))</code> 查看。注意 <code>type()</code> 返回的是一个类型对象，不是普通文字。"}], watchOut:"<code>type()</code> 返回的不是普通文字，而是 <code>&lt;class 'int'&gt;</code> 这样的格式——这是 Python 在告诉你\"这个东西属于 int 这个类\"。不要和普通的 print 输出混淆。" },
  story:"创建四个不同类型的变量：<br>① 整数 <strong>42</strong> → 用 <code>type()</code> 查看<br>② 浮点数 <strong>3.14</strong> → 用 <code>type()</code> 查看<br>③ 字符串 <strong>\"oxygen\"</strong> → 用 <code>type()</code> 查看<br>④ 布尔值 <strong>True</strong> → 用 <code>type()</code> 查看<br>分别打印每个 type() 的结果。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'<class \'int\'>\\n<class \'float\'>\\n<class \'str\'>\\n<class \'bool\'>'}],
  hint:"创建 a = 42, b = 3.14, c = \"oxygen\", d = True。然后 print(type(a)), print(type(b)), print(type(c)), print(type(d))。注意 True 首字母大写，不带引号。"
};
