LEVELS[10] = { id:10, title:"小数点也很重要", phase:"变量与基本类型", icon:"📏",
  briefing: { narrative:"精确导航需要精确的数字。飞船的三个温度传感器返回了 36.5°C、37.2°C、36.8°C——都带小数点。生命的界限往往就在那零点几度之间，你需要学会处理<strong>浮点数</strong>。", objective:"学会使用 <strong>float 浮点数</strong>（小数），计算三个温度传感器的平均值。", tip:"整数和浮点数混合运算时，Python 自动把结果转成浮点数。" },
  knowledge: { concept:"浮点数 float", intro:"<strong>浮点数（float）</strong> 就是带小数点的数字。Python 里直接写 <code>36.5</code> 就是浮点数。整数（int）和浮点数（float）可以混合运算，结果自动变浮点数。<br><br><strong>算术都适用：</strong> <code>+ - * / // % **</code> 对 float 也一样好用，只是除法的行为不同。", example:"temp = 36.5         # float\nprint(temp + 0.5)   # → 37.0\nprint(100 / 3)      # → 33.333...（自动小数）\nprint(100 // 3.0)   # → 33.0（整除，但结果还是 float）", exampleOutput:"37.0\n33.333333333333336\n33.0", rules:[{title:"int vs float",text:"整数 <code>int</code>：没有小数点，精确<br>浮点数 <code>float</code>：有小数点，可能有微小误差（计算机用二进制存小数，偶尔会像 0.1+0.2=0.300...04 这样）"}], watchOut:"浮点数计算偶尔会有很小的精度误差（如 <code>0.1+0.2=0.30000000000000004</code>），这是所有编程语言共有的现象，不影响日常使用。" },
  story:"飞船三个温度传感器读数需要计算平均值。<br><br>变量：<code>s1 = 36.5</code>，<code>s2 = 37.2</code>，<code>s3 = 36.8</code><br><br>要求：<br>① 计算三数之和除以3：<code>(s1 + s2 + s3) / 3</code><br>② 用 <code>print()</code> 打印平均温度",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'36.833333333333336'}],
  hint:"平均值 = (s1 + s2 + s3) / 3。括号里的加法先算，再除以 3。",
  achievement:{id:"py_l10",icon:"🔤",name:"数据掌握者"}
};
