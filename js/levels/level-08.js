LEVELS[8] = { id:8, title:"变量起名有规矩", phase:"变量与基本类型", icon:"📛",
  briefing: { narrative:"飞船系统弹出一个泛黄的命名规范手册。变量名不是随便起的——不能用空格，不能用数字开头，不能撞上 Python 自己的保留字。你需要学会这些规则，给三个传感器分别创建合法的变量名。", objective:"按照命名规则创建三个变量（温度、燃料、速度），并设为合法有效的名字。", tip:"下划线是变量命名里唯一可以用的\"空格替代品\"。" },
  knowledge: { concept:"变量命名规则", intro:"变量名不是随便起的，Python 有明确的规则：<br>✅ 可以用 <strong>字母、数字、下划线</strong><br>❌ 不能用数字开头<br>❌ 不能有空格<br>❌ 不能用 Python 关键字（如 print、if、for）<br>⚠️ 大小写敏感：<code>Oxygen</code> 和 <code>oxygen</code> 是两个不同的变量", example:"fuel_level = 85   # ✅ 下划线分隔\nspeed2 = 100       # ✅ 数字可以在中间或末尾\ntemp = 36          # ✅ 简短清晰\n\n2nd_speed = 100    # ❌ 数字不能开头\nship speed = 100   # ❌ 不能有空格\nif = 10            # ❌ if 是关键字", exampleOutput:"（前三个可以正常运行，后三个会报错）", rules:[{title:"起名建议",text:"用有意义的英文或拼音，多个单词用下划线连接。好名字：<code>fuel_level</code> <code>oxygen</code> <code>max_speed</code>"}], watchOut:"虽然 Python 允许用中文命名变量（如 温度=36），但<strong>强烈不建议</strong>——切换输入法太容易引入中文标点错误。" },
  story:"创建三个变量存储传感器数据。<br>① 温度 temp = <strong>36</strong><br>② 燃料 fuel = <strong>85</strong><br>③ 速度 speed = <strong>0</strong><br>打印这三个变量。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:"36 85 0"}],
  hint:"变量名用下划线代替空格，比如 ship_temp = 36。打印时用 print(ship_temp, ship_fuel, ship_speed)，变量名不带引号。"
};
