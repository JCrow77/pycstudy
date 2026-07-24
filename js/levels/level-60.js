LEVELS[60] = { id:60, title:"综合项目：导航计算器", phase:"综合实战", icon:"🧭",
  briefing: { narrative:"发射窗口6小时后打开——星球引力与目标轨道夹角最小。构建导航计算器：math算逃逸速度，三角函数算最佳仰角，循环模拟10步上升轨迹。", objective:"用math计算逃逸速度和发射角分量，for循环模拟10秒轨迹，if检查每步安全状态，打印轨迹表格。", tip:"math算轨道→for模拟轨迹→if判断安全。" },
  knowledge: { concept:"导航计算器", intro:"综合运用math模块、循环和条件判断：math计算物理量，for循环模拟时间步进，if判断每步是否在安全区间。", example:"import math\ng=9.8;r=6371000\nv=math.sqrt(2*g*r)\nangle=math.radians(45)\nvy=v*math.sin(angle)\nfor t in range(10):\n    h=vy*t-0.5*g*t**2\n    if h>0:s=\"安全\"\n    else:s=\"危险\"\n    print(f\"t={t}s h={h:.0f}m {s}\")", exampleOutput:"t=0s h=0m 安全\nt=1s h=7903m 安全\n...", rules:[{title:"公式",text:"v=sqrt(2gr) | vx=v*cos(theta) | vy=v*sin(theta) | h=vy*t-0.5*g*t**2"}], watchOut:"高度不能为负（已坠落）！用if判断h>0。" },
  story:"构建导航计算器。import math。计算逃逸速度v_escape=sqrt(2*9.8*6371000)，45度转弧度，计算水平和垂直分量。for循环10步(t=0到9)，每步计算高度h=vy*t-0.5*g*t**2和速度v=sqrt(vx**2+(vy-g*t)**2)。if判断h>0且v>8000→\"安全\"，否则→\"危险\"。打印轨迹表格。",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'逃逸速度: 11175 m/s\\n轨迹模拟:\\nt=0s 高度=0m 速度=11175m/s 危险\\nt=1s 高度=7897m 速度=11168m/s 安全\\nt=2s 高度=15784m 速度=11161m/s 安全\\nt=3s 高度=23661m 速度=11154m/s 安全\\nt=4s 高度=31528m 速度=11147m/s 安全\\nt=5s 高度=39386m 速度=11140m/s 安全\\nt=6s 高度=47233m 速度=11133m/s 安全\\nt=7s 高度=55071m 速度=11126m/s 安全\\nt=8s 高度=62899m 速度=11119m/s 安全\\nt=9s 高度=70718m 速度=11112m/s 安全'}],
  hint:"import math。用 sqrt 算逃逸速度，用 radians 转弧度，用 sin/cos 算分量。for 循环10步，每步用物理公式算高度和速度，if 判断是否安全。"
};
