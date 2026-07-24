LEVELS[41] = { id:41, title:"看不见的围墙：作用域", phase:"函数", icon:"🧱",
  briefing: { narrative:"两个工程师各写了函数，都用了名叫data的变量，然后整个系统开始输出匪夷所思的结果。问题出在\"作用域\"：函数内部变量是私有领地。", objective:"理解局部变量和全局变量的区别，演示global关键字。", tip:"函数内定义的变量只在函数内可见。" },
  knowledge: { concept:"作用域", intro:"作用域决定变量的可见范围。函数内部定义的变量是局部变量，只在函数内有效。函数外的变量是全局变量。", example:"x = 10\ndef foo():\n    x = 20\n    print(\"内部:\", x)\nfoo()\nprint(\"外部:\", x)", exampleOutput:"内部: 20\n外部: 10", rules:[{title:"LEGB规则",text:"Local(函数内) → Enclosing(外层函数) → Global(全局) → Built-in(内置)"}], watchOut:"在函数内想修改全局变量？必须先用global关键字声明：global x。否则Python会创建同名局部变量！" },
  story:"创建全局变量status=\"正常\"。函数内创建同名局部status=\"异常\"，分别打印。再用global修改全局。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'函数内部: 异常\n函数外部: 正常\n修改后: 已修复'}],
  hint:"函数内部给 status 赋值会创建局部变量，不影响外部。要修改全局变量，需在函数内用 global 关键字声明。"
};
