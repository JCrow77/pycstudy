LEVELS[53] = { id:53, title:"数学武器库：math 模块实战", phase:"模块与错误处理", icon:"🧮",
  briefing: { narrative:"发射轨道计算终于提上日程。逃逸速度需要sqrt，轨道倾角需要sin/cos/radians，减速距离需要ceil确保安全冗余。每个公式里都藏着回家的希望。", objective:"用math计算弧度转换、三角函数值、逃逸速度、向上取整。", tip:"radians()度转弧度，sin/cos算三角，sqrt算根号。" },
  knowledge: { concept:"math 模块实战", intro:"math模块提供丰富数学函数：radians(度)转弧度、sin/cos(弧度)算三角、sqrt()算平方根、ceil()向上取整。", example:"import math\nangle=math.radians(45)\nv=math.sqrt(2*9.8*6371000)\nprint(f\"sin45={math.sin(angle):.2f}\")\nprint(f\"逃逸: {math.ceil(v)}\")", exampleOutput:"sin45=0.71\n逃逸: 11176", rules:[{title:"关键函数",text:"radians(d)→度转弧度 | sin(r)→正弦 | cos(r)→余弦 | sqrt(x)→平方根 | ceil(x)→向上取整"}], watchOut:"三角函数参数必须是弧度不是度！先用radians()转换。" },
  story:"用 math 模块完成导航计算。<br><br>要求：<br>① <code>math.radians(45)</code> 将45°转弧度，打印结果（保留2位小数，标签\"弧度:\"）<br>② <code>math.sin()</code> 和 <code>math.cos()</code> 计算正弦余弦（保留2位小数，标签\"sin45:\"和\"cos45:\"）<br>③ <code>math.sqrt(2 * 9.8 * 6371000)</code> 计算逃逸速度（保留2位小数，标签\"逃逸速度:\"）<br>④ <code>math.ceil()</code> 向上取整（标签\"取整:\"）",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'弧度: 0.79\nsin45: 0.71\ncos45: 0.71\n逃逸速度: 11174.60\n取整: 11175'}],
  hint:"import math → angle=math.radians(45) → print(f\"弧度: {angle:.2f}\") → 类似方式打印sin/cos/逃逸速度/ceil。"
};
