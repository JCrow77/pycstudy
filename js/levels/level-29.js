LEVELS[29] = { id:29, title:"序列扫描：for 遍历列表", phase:"循环结构", icon:"📋",
  briefing: { narrative:"提取出的字母拼出奇怪的词：\"HELPME\"。信号中包含七个词排列成序列。for循环遍历这个外星词序列。", objective:"用for循环遍历列表，逐行打印每个外星词汇。", tip:"for item in list — 遍历列表中每个元素。" },
  knowledge: { concept:"for 遍历列表", intro:"列表(list)是Python存储有序数据的容器。for循环可以遍历列表中的每个元素。", example:"items = [\"A\",\"B\",\"C\"]\nfor i in range(len(items)):\n    print(f\"第{i+1}个: {items[i]}\")", exampleOutput:"第1个: A\n第2个: B\n第3个: C", rules:[{title:"列表基础",text:"创建: items=[\"A\",\"B\"] | 遍历: for item in items: | 索引访问: items[0]"}], watchOut:"列表用方括号[]，不是圆括号()！" },
  story:"遍历外星词汇列表。<br><br>预填数据：<code>words = [\"OLIIMARA\",\"TRAPPED\",\"TWO\",\"THOUSAND\",\"CYCLES\",\"BENEATH\",\"SURFACE\"]</code><br><br>要求：<br>① 用 <code>for i in range(len(words)):</code> 遍历索引<br>② 每行打印格式：<code>信号词{i+1}: {words[i]}</code>",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'信号词1: OLIIMARA\n信号词2: TRAPPED\n信号词3: TWO\n信号词4: THOUSAND\n信号词5: CYCLES\n信号词6: BENEATH\n信号词7: SURFACE'}],
  hint:"用 range(len(words)) 遍历索引。第i个元素的索引是i，但显示时要+1（因为索引从0开始）。"
};
