LEVELS[32] = { id:32, title:"紧急控制：break 和 continue", phase:"循环结构", icon:"🛑",
  briefing: { narrative:"翻译外星信号时某些数据块已完全损坏——全是乱码，必须跳过(continue)。信号末尾有终止码\"END-TRANSMISSION\"，收到后必须立即停止(break)。损坏数据块比例正在逐轮上升——信号源在衰减。", objective:"用continue跳过损坏数据，用break终止循环。", tip:"continue=跳过本次 | break=退出整个循环。" },
  knowledge: { concept:"break 和 continue", intro:"break：立即退出整个循环。continue：跳过本次迭代的剩余代码，直接进入下一次循环。", example:"signals = [\"OK\",\"#CORRUPT#\",\"OK\",\"END-TRANSMISSION\",\"OK\"]\nfor s in signals:\n    if s == \"#CORRUPT#\": continue\n    if s == \"END-TRANSMISSION\": break\n    print(s)", exampleOutput:"OK\nOK", rules:[{title:"区别",text:"continue→只跳过当前这一轮 | break→彻底退出整个循环"}], watchOut:"break/continue只对当前所在的最内层循环生效！" },
  story:"处理外星信号流，跳过损坏数据，在终止码处停止。<br><br>预填数据：<code>signals = [\"OK\",\"#CORRUPT#\",\"OK\",\"#CORRUPT#\",\"OK\",\"END-TRANSMISSION\",\"OK\"]</code><br><br>要求：<br>① 用 <code>for s in signals:</code> 遍历<br>② 用 <code>if s == \"#CORRUPT#\": continue</code> 跳过损坏数据<br>③ 用 <code>if s == \"END-TRANSMISSION\": break</code> 在终止码处退出循环<br>④ 正常信号用 <code>print(s)</code> 打印",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'OK\nOK\nOK'}],
  hint:"代码已预填。运行观察：continue跳过损坏数据，break在终止码处停止。"
};
