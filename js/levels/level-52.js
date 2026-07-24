LEVELS[52] = { id:52, title:"打开武器库：import 导入模块", phase:"模块与错误处理", icon:"📦",
  briefing: { narrative:"Python真正力量不在于你写了多少代码，而在于能调用多少前人写好的代码。import math——一行命令将整个数学武器库搬进程序。站在巨人肩膀上。", objective:"import math，使用sqrt()、pi、ceil()、floor()完成计算并打印。", tip:"import 模块名 → 模块名.函数名()。" },
  knowledge: { concept:"import 导入模块", intro:"Python有丰富的内置模块。import语句导入模块后，用\"模块名.函数名()\"调用其中的函数。", example:"import math\nprint(math.sqrt(144))\nprint(math.pi)\nprint(math.ceil(3.14))\nprint(math.floor(3.14))", exampleOutput:"12.0\n3.141592653589793\n4\n3", rules:[{title:"常用模块",text:"math—数学 | random—随机 | time—时间 | os—操作系统"}], watchOut:"不import就直接用会报NameError！import通常写在文件最顶部。" },
  story:"导入math模块，使用其中的数学函数。<br><br>要求：<br>① <code>import math</code> 导入数学模块<br>② 使用四个函数并打印结果：<br>• <code>math.sqrt(144)</code> — 计算平方根<br>• <code>math.pi</code> — 圆周率<br>• <code>math.ceil(3.14)</code> — 向上取整<br>• <code>math.floor(3.14)</code> — 向下取整",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'12.0\n3.141592653589793\n4\n3'}],
  hint:"import math → print(math.sqrt(144)) → print(math.pi) → print(math.ceil(3.14)) → print(math.floor(3.14))。"
};
