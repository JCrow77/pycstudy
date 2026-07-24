LEVELS[28] = { id:28, title:"逐字扫描：for 遍历字符串", phase:"循环结构", icon:"📡",
  briefing: { narrative:"全频段无线电扫描截获微弱重复信号——混在静电噪音中。遍历信号字符串，跳过噪音符号，只提取字母……拼起来是什么？", objective:"用for循环遍历混合字符串，筛选出字母并拼接成单词。", tip:"isalpha()判断字符是否为字母。" },
  knowledge: { concept:"for 遍历字符串", intro:"字符串可以像列表一样用for循环逐个字符遍历。ch.isalpha()判断字符是否为字母。", example:"text = \"#A#B#C#\"\nresult = \"\"\nfor ch in text:\n    if ch.isalpha():\n        result += ch\nprint(result)", exampleOutput:"ABC", rules:[{title:"字符判断",text:"ch.isalpha()—是字母？ ch.isdigit()—是数字？ ch.isspace()—是空格？"}], watchOut:"isalpha()只认字母！中文汉字也会被识别为True。" },
  story:"遍历字符串提取隐藏信息。<br><br>预填变量：<code>signal = \"#H#E#L#P#M#E#\"</code><br><br>要求：<br>① 创建空字符串 <code>result = \"\"</code><br>② 用 <code>for ch in signal:</code> 遍历每个字符<br>③ 用 <code>if ch.isalpha():</code> 判断是否为字母<br>④ 如果是字母，用 <code>result += ch</code> 拼接到结果中<br>⑤ 最后打印 result",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'HELPME'}],
  hint:"for ch in signal: → if ch.isalpha(): result += ch。最后 print(result)。"
};
