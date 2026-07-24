LEVELS[12] = { id:12, title:"小心！input() 的陷阱", phase:"变量与基本类型", icon:"⌨️",
  briefing: { narrative:"交互面板亮了，光标一闪一闪地等你输入。你手动敲入氧气浓度\"21\"，飞船系统却弹出一行红字：\"类型错误！无法对字符串做加法。\"你愣住了——我明明输入的是数字啊？原来 <code>input()</code> 返回的永远是<strong>字符串</strong>，即使你输入的是数字。", objective:"学会使用 <code>input()</code> 获取用户输入，并用 <code>int()</code> 把字符串转成数字进行运算。", tip:"input() 就像收银台——不管客人递过来的是纸币还是硬币，它都先当成\"一张纸\"收下。你得自己辨别。" },
  knowledge: { concept:"input() 函数与类型转换", intro:"<strong>input()</strong> 让程序接收用户的键盘输入。但它有一个重要特性：<strong>无论用户输入什么，返回的都是字符串（str）</strong>。<br><br>如果要对输入做数学运算，必须先用 <code>int()</code>（转整数）或 <code>float()</code>（转小数）转换类型。<br><br><strong>input(\"提示文字\")</strong> 里的提示文字会在等待输入时显示给用户。", example:"s = input(\"输入数字: \")\n# s 是 str 类型，不是 int！\nnum = int(s)\nprint(num + 10)", exampleOutput:"输入数字: 5\n15", rules:[{title:"input() 使用流程",text:"① <code>变量 = input(\"提示\")</code> 获取输入<br>② 输入永远是 <code>str</code> 字符串<br>③ 用 <code>int()</code> 或 <code>float()</code> 转成数字<br>④ 再做数学运算"}], watchOut:"<code>input()</code> 返回的永远是字符串(str)！即使用户输入数字，也必须用 <code>int()</code> 或 <code>float()</code> 转换后才能做数学运算。如果忘了转换，<code>\"21\" + 5</code> 会报 TypeError。" },
  story:"用 input() 获取用户输入的氧气浓度，注意类型转换陷阱。<br><br>要求：<br>① 用 <code>input(\"请输入氧气浓度: \")</code> 获取输入（返回的是字符串！）<br>② 用 <code>int()</code> 将输入的字符串转为整数<br>③ 将转换后的值加 5<br>④ 打印结果，格式：<code>补给后氧气浓度: XX</code><br><br>测试输入为：<code>21</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'补给后氧气浓度: 26'}],
  hint:"先写 raw = input(\"请输入氧气浓度: \") 获取字符串输入。再写 oxygen = int(raw) 转成整数。最后打印 oxygen + 5，用 f-string 或逗号拼接输出文字和结果。"
};
