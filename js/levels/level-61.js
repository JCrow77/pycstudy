LEVELS[61] = { id:61, title:"综合项目⑤：自动诊断系统", phase:"综合实战", icon:"🤖",
  briefing: { narrative:"距发射1小时。不能手动检查每个系统——任何遗漏都是致命的。自动诊断：字典存子系统名和检测函数，for循环逐个运行，try/except包裹。故障超2次触发发射中止。外星能源网络发出最后脉冲——\"保重\"。", objective:"构建自动诊断：dict存5个子系统及检测函数，for循环调用，try/except捕获异常，故障>2次中止发射。", tip:"dict存系统→for循环检测→try/except保护→累计故障→判定。" },
  knowledge: { concept:"自动诊断系统", intro:"综合运用dict、for循环、函数、try/except：字典存储系统名和检测函数，循环逐个测试，异常处理确保单个故障不影响全局。", example:"def chk():return True\nsystems={\"A\":chk}\nfails=0\nfor n,f in systems.items():\n    try:\n        if f():print(f\"{n}:OK\")\n        else:fails+=1;print(f\"{n}:FAIL\")\n    except:\n        fails+=1\nif fails>2:print(\"中止\")", exampleOutput:"A:OK", rules:[{title:"架构",text:"系统名→检测函数映射(dict) | 统一调度→for循环 | 异常隔离→try/except | 计数判定→>2→中止"}], watchOut:"try/except确保一个系统故障不会导致整个诊断崩溃。" },
  story:"构建自动诊断系统，依次检测5个子系统。<br><br>预填模块：已 <code>import random</code>。<br><br>要求：<br>① 用字典 <code>systems</code> 存储5个子系统，键为系统名，值为 lambda 检测函数：<code>{\"氧气\": lambda: random.random()>0.2, \"温度\": lambda: random.random()>0.3, \"燃料\": lambda: random.random()>0.1, \"通讯\": lambda: random.random()>0.4, \"护盾\": lambda: random.random()>0.5}</code><br>② 用 <code>for name, test in systems.items()</code> 遍历<br>③ 每个系统用 <code>try/except</code> 包裹：调用 <code>test()</code>，返回True→打印\"正常\"，返回False→故障计数+1，抛异常→异常+1<br>④ 用变量 <code>fails = 0</code> 记录故障次数<br>⑤ 遍历结束后：fails > 2 → 打印\"发射中止\"，否则 → 打印\"所有系统正常，准备发射\"",
  starterCode:`import random

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'(随机输出，检查包含正常/故障/发射结果即可)'}],
  hint:"创建字典存储系统名和检测函数（用 lambda）。for 循环遍历字典，每个系统用 try/except 包裹。用变量记录故障次数，最后 if 判断是否超过阈值。",
  practice:true
};
