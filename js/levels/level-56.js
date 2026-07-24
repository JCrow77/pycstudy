LEVELS[56] = { id:56, title:"安全网：try/except 异常处理", phase:"模块与错误处理", icon:"🛡️",
  briefing: { narrative:"外星能源网络极不稳定——有时正常输出，有时毫无征兆抛错导致整个监控程序崩溃。不能让一个传感器临时故障中断发射倒计时。try/except像安全网。", objective:"用try/except包裹三处可能出错的代码，捕获异常后打印友好中文提示不让程序崩溃。", tip:"try: 可能出错的代码 → except 错误类型: 备选方案。" },
  knowledge: { concept:"try/except 异常处理", intro:"try/except让程序在遇到错误时不崩溃，而是优雅地处理异常。try块放可能出错的代码，except块捕获特定错误类型并执行备选方案。", example:"try:\n    num=int(\"abc\")\nexcept ValueError:\n    print(\"转换失败\")\nprint(\"程序继续\")", exampleOutput:"转换失败\n程序继续", rules:[{title:"语法",text:"try:→可能出错代码→except 错误类型:→出错时执行→程序继续不崩溃"}], watchOut:"except后要指定错误类型（如ValueError），不要用裸except捕获所有——会隐藏真正的bug！" },
  story:"用try/except包裹：①int(\"abc\")处理ValueError ②10/0处理ZeroDivisionError ③列表索引越界处理IndexError。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"输入不是有效数字\n不能除以零\n索引超出范围"}],
  hint:"try: 可能出错的代码 → except 错误类型: print友好提示。"
};
