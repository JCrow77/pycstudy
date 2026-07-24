LEVELS[38] = { id:38, title:"结果返还：return 返回值", phase:"函数", icon:"📤",
  briefing: { narrative:"只打印不返回的函数，就像告诉了你答案却不让你记下来——出了函数结果就消失。return把结果\"递\"还给调用者，存进变量，供后续使用。", objective:"用return返回计算结果，在函数外部用变量接收并打印。", tip:"return把数据从函数内部传出去。" },
  knowledge: { concept:"return 返回值", intro:"return语句让函数把计算结果\"递\"还给调用者。调用者可以用变量接收返回值，继续使用。", example:"def double(n):\n    return n * 2\nresult = double(5)\nprint(result)\nprint(result + 3)", exampleOutput:"10\n13", rules:[{title:"return vs print",text:"print()只是显示到屏幕 | return是把数据传出去，可以存变量、继续运算"}], watchOut:"return后面的代码不会执行！函数遇到return就立即结束。" },
  story:"定义 add(a,b) 函数用return返回a+b。用result变量接收add(8,7)的返回值，打印result。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'15'}],
  hint:"def 定义函数接收两个参数 a 和 b。函数体内用 return 返回 a+b。外部调用时用变量接收返回值。"
};
