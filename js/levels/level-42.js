LEVELS[42] = { id:42, title:"函数复用实战①：外星能源转换链", phase:"函数", icon:"⚡",
  briefing: { narrative:"外星文明的核心是能源转换系统——采集地热→转化电力→稳压输出→分配飞船。外星人是模块化设计大师：每个组件独立、可替换、可测试。你也必须如此。", objective:"定义4个函数串联成能源转换链，每个函数做简单运算、返回结果，main()串联调用。", tip:"每个函数只做一件事，然后用main()函数串联。" },
  knowledge: { concept:"函数组合", intro:"模块化设计：每个函数只做一件事（单一职责），然后用主函数按顺序调用它们。这样代码好测试、好修改、好复用。", example:"def double(x): return x*2\ndef add_one(x): return x+1\nresult = add_one(double(5))\nprint(result)", exampleOutput:"11", rules:[{title:"单一职责",text:"每个函数只做一件事。修改一个功能不需要动其他函数。"}], watchOut:"函数之间通过返回值传递数据。前一个函数的return值作为后一个函数的参数传入。" },
  story:"定义4个函数串联成能源转换链，由main()函数依次调用。<br><br>要求：<br>① <code>collect(heat)</code> → 返回 <code>heat * 0.8</code><br>② <code>convert(raw)</code> → 返回 <code>raw * 1.5</code><br>③ <code>regulate(power)</code> → 返回 <code>min(power, 120)</code><br>④ <code>distribute(stable)</code> → 返回 <code>stable * 0.9</code><br>⑤ <code>main()</code>：t=150 → a=collect(t) → b=convert(a) → c=regulate(b) → d=distribute(c) → 打印每步结果",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"采集: 120.0\n转换: 180.0\n稳压: 120\n分配: 108.0"}],
  hint:"每个函数用def定义，return计算结果。main()中依次调用并打印。",
  practice:true
};
