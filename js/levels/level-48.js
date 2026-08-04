LEVELS[48] = { id:48, title:"深度探秘：dict 遍历与嵌套", phase:"数据结构", icon:"🔬",
  briefing: { narrative:"外星数据库完整结构浮出水面：母星包含多个殖民区域，每个区域又是独立字典。字典里嵌套字典。这个文明遍布数十星系——到底在逃离什么？", objective:"遍历嵌套字典结构，打印每个区域的名称和人口，汇总总人口。", tip:"用.items()同时获取键和值进行遍历。" },
  knowledge: { concept:"嵌套字典遍历", intro:"字典可以用.items()方法遍历键值对。嵌套字典需要逐层访问：外层的值本身又是一个字典，需要再次用键访问。", example:"data={\"z1\":{\"name\":\"A区\",\"pop\":1000},\"z2\":{\"name\":\"B区\",\"pop\":2000}}\ntotal=0\nfor k,z in data.items():\n    print(f\"{z[\"name\"]}:{z[\"pop\"]}人\")\n    total+=z[\"pop\"]\nprint(f\"总:{total}\")", exampleOutput:"A区:1000人\nB区:2000人\n总:3000", rules:[{title:"遍历方法",text:"dict.items()→同时获取键和值 | dict.keys()→只获取键 | dict.values()→只获取值"}], watchOut:"访问嵌套字典时，先通过外层键进入内层字典，再用内层键取值。" },
  story:"遍历嵌套字典结构。<br><br>要求：<br>① 创建嵌套字典 <code>colonies</code>：<br><code>{\"zone1\": {\"name\": \"α区\", \"population\": 5000},</code><br><code> \"zone2\": {\"name\": \"β区\", \"population\": 3200},</code><br><code> \"zone3\": {\"name\": \"γ区\", \"population\": 1800}}</code><br>② 用 <code>for key, zone in colonies.items()</code> 遍历<br>③ 打印每个区域名称和人口<br>④ 汇总总人口并打印",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'α区: 5000人\nβ区: 3200人\nγ区: 1800人\n总人口: 10000'}],
  hint:"for key,zone in colonies.items(): → print → total+=zone[\"population\"]。"
};
