LEVELS[7] = { id:7, title:"给数据贴标签", phase:"变量与基本类型", icon:"🏷️",
  briefing: { narrative:"氧气传感器传来了一串数字：21。但这个 21 必须存起来——你接下来要反复用到它，总不能每次都看一眼传感器。你需要一个\"变量\"：像贴了标签的盒子，把数据放进去，随时取出来用。", objective:"创建你的第一个<strong>变量</strong>，存储氧气浓度值，然后用 <code>print()</code> 输出它。", tip:"变量就是给一个值起名字。就像你把\"21\"放进贴了\"oxygen\"标签的盒子。" },
  knowledge: { concept:"变量 — 给数据起名字", intro:"<strong>变量</strong>是 Python 存储数据的方式。用 <code>=</code> 号把数据\"赋值\"给一个名字：<code>变量名 = 值</code>。之后用这个名字就代表那个值。", example:"oxygen = 21        # 创建变量，存 21\nprint(oxygen)      # 输出变量 → 21\nprint(oxygen + 1)  # 还可以做运算 → 22", exampleOutput:"21\n22", rules:[{title:"赋值格式",text:"<code>变量名 = 值</code> — 等号右边是数据，左边是你给它的名字。注意：= 不是数学里的\"等于\"，是\"把右边的值赋给左边\"。"}], watchOut:"print(oxygen) 和 print(\"oxygen\") 完全不同！带引号的是输出纯文字 \"oxygen\" 四个字母；不带引号的是输出变量里存的值！" },
  story:"创建一个变量 <strong>oxygen</strong>，赋值为 <strong>21</strong>，然后打印它。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"21"}],
  hint:"先写 oxygen = 21 创建变量，再写 print(oxygen) 输出。注意 print(oxygen) 没有引号——你要输出变量里存的值，不是\"oxygen\"这个词。"
};
