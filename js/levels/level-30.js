LEVELS[30] = { id:30, title:"永不停歇：while 循环基础", phase:"循环结构", icon:"⏳",
  briefing: { narrative:"信号没有结束。七个词后开始重复整段信息——但你不知会重复多少次。for无计可施，你需要while：条件为真就一直执行。翻译完成，屏幕出现：【我们是OLIIMARA。被困在这里。已经两万个周期了。在你们的脚下。】", objective:"用 while 循环重复打印外星信号内容3次（计数器控制）。", tip:"while 条件: — 条件为True就一直循环，别忘了counter+=1。" },
  knowledge: { concept:"while 循环", intro:"while循环在条件为True时持续执行。与for不同，while不需要预先知道循环次数——只要条件满足就继续。", example:"count = 0\nwhile count < 5:\n    print(f\"第{count+1}次报告\")\n    count += 1\nprint(\"报告完毕\")", exampleOutput:"第1次报告\n第2次报告\n第3次报告\n第4次报告\n第5次报告\n报告完毕", rules:[{title:"while语法",text:"while 条件: → 缩进 → 循环体。必须在循环体内改变条件变量（如count+=1），否则无限循环！"}], watchOut:"忘记count+=1会导致死循环！浏览器会卡死。每次写while，第一件事就是确认条件最终会变成False。" },
  story:"用 <code>while</code> 循环重复打印外星信号3次。<br><br>要求：<br>① 初始化 <code>counter = 0</code><br>② 用 <code>while counter < 3:</code> 循环<br>③ 每次循环打印 <code>\"第{counter+1}次：我们是OLIIMARA，被困在这里...\"</code><br>④ 每次循环结束前 <code>counter += 1</code>（很重要！忘记会导致死循环）",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'第1次：我们是OLIIMARA，被困在这里...\n第2次：我们是OLIIMARA，被困在这里...\n第3次：我们是OLIIMARA，被困在这里...'}],
  hint:"while 的条件是 counter < 3。循环体内要做两件事：打印、然后 counter 加1。缺一不可。",
  achievement:{id:"py_l30",icon:"📡",name:"信号破译者"}
};
