LEVELS[26] = { id:26, title:"条件判断实战②：故障逻辑修复", phase:"条件判断", icon:"🔧",
  briefing: { narrative:"上一班工程师留下的自动判断代码充满逻辑错误——比较方向写反、elif死分支、边界值遗漏。逐行审查，找出所有逻辑漏洞并修复它们。", objective:"找出代码中的<strong>5个逻辑bug</strong>并修复。", tip:"仔细读每一个比较符号的方向。" },
  knowledge: { concept:"条件判断调试", intro:"逻辑bug往往不是语法错误，而是<strong>思路错误</strong>。常见bug：比较方向反了、漏掉等号、分支顺序错、and/or搞混、死分支。", example:"修复前代码有5个bug，修复后输出\"系统正常\"", exampleOutput:"修复后正确输出", rules:[{title:"调试清单",text:">和<方向对吗？>=漏了吗？条件从大到小排了吗？and/or用对了吗？有没有死分支？"}], watchOut:"边界值最易出错。温度=40算正常还是高温？用>40而不是>=40，40度就被漏掉！" },
  story:"下面代码有5个逻辑bug，找出并修复它们，让程序输出 <strong>\"系统正常\"</strong>。<br><br>变量：<code>temp = 25</code>、<code>fuel = 82</code><br><br>需要修正的bug代码：<br><code>if temp < 40: print(\"温度过高\")</code> — 比较方向反了<br><code>if fuel > 80: print(\"燃料充足\")</code> — 应该是elif<br><code>elif fuel < 50: print(\"燃料不足\")</code> — 漏了边界值<br><code>elif temp > 50: print(\"温度异常\")</code> — 死分支<br><code>if temp > 20 or fuel > 60: print(\"系统正常\")</code> — 逻辑错误",
  starterCode:`# === 故障逻辑修复 ===
# 下面代码有5个bug，修正它们！

temp = 25
fuel = 82

if temp < 40:
    print("温度过高")
if fuel > 80:
    print("燃料充足")
elif fuel < 50:
    print("燃料不足")
elif temp > 50:
    print("温度异常")
if temp > 20 or fuel > 60:
    print("系统正常")
`,
  testCases:[{stdin:'',expected:"系统正常"}],
  hint:"逐一检查：temp<40方向反了、第二个if应是elif、fuel<50漏了=、死分支需调顺序、or应改为and。",
  practice:true
};
