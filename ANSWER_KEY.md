# 星际求生 · 62关答案参考

## 第1关：你的第一行代码

```python
print("系统启动")
```

> 🏆 成就：破壳而出

---

## 第2关：输入法警觉训练

```python
print("信号正常")
```

> 🏆 成就：火眼金睛

---

## 第3关：发送多条信息

```python
print("系统就绪", "氧气正常", "通讯在线")
```

---

## 第4关：让报告更整齐

```python
print("系统就绪\n氧气正常\n通讯在线")
```

---

## 第5关：代码里的备忘录

```python
# 开始记录系统日志
print("开始记录日志")
# 报告系统状态
print("系统状态：正常")
# 日志保存完毕
print("日志保存完毕")
```

> 🏆 成就：语法学徒

---

## 第6关：当代码报错时

```python
print("系统诊断开始")
print("扫描模块...")
print("诊断完成")
```

---

## 第7关：给数据贴标签

```python
oxygen = 21
print(oxygen)
```

---

## 第8关：变量起名有规矩

```python
temp = 36
fuel = 85
speed = 0
print(temp, fuel, speed)
```

---

## 第9关：Python 是个计算器

```python
fuel = 500
daily = 30
print(fuel // daily)
print(fuel % daily)
```

---

## 第10关：小数点也很重要

```python
s1 = 36.5
s2 = 37.2
s3 = 36.8
print((s1 + s2 + s3) / 3)
```

> 🏆 成就：数据掌握者

---

## 第11关：文字也是数据

```python
a = "氧气传感器"
b = "温度传感器"
c = "燃料传感器"
print(a + " " + b + " " + c)
```

---

## 第12关：小心！input() 的陷阱

```python
o2 = int(input("请输入氧气浓度: "))
print(f"补给后氧气浓度: {o2 + 5}")
```

---

## 第13关：数据鉴定术：type()

```python
print(type(42))
print(type(3.14))
print(type("oxygen"))
print(type(True))
```

---

## 第14关：变形术：类型转换

```python
r1 = "18"
r2 = "36.5"
r3 = "85"
total = int(r1) + float(r2) + float(r3)
print(f"传感器总和: {total}")
```

---

## 第15关：逐字逐句：字符串索引与 len()

```python
s = "SOS-EXILE-7"
print(f"提取片段: {s[4:9]}")
print(f"信号长度: {len(s)}")
```

> 🏆 成就：类型侦探

---

## 第16关：文字整理术：字符串方法

```python
s = "  HelP-Me-EXILE  "
print(s.strip().lower().replace("-", " "))
```

---

## 第17关：优雅的拼接：f-string 格式化

```python
o = 21
t = 36.5
f = 85
print(f"氧气: {o}%, 温度: {t}°C, 燃料: {f} 单位")
```

---

## 第18关：小综合①：生存数据仪表盘

```python
t = float(input())
p = int(input())
r = float(input())
print(f"温度: {t}°C")
print(f"气压: {p} hPa")
print(f"辐射: {r:.1f} mSv")
```

---

## 第19关：是与非：比较运算与布尔值

```python
print(17 < 18)
print(38 == 38)
print(0 != 0)
```

---

## 第20关：命运的岔路口：if 单分支

```python
oxygen = 17
if oxygen < 18:
    print("警告：氧气不足！")
```

> 🏆 成就：逻辑觉醒

---

## 第21关：两条路：if/else 双分支

```python
temp = 42
if temp >= 40:
    print("高温警告")
else:
    print("温度正常")
```

---

## 第22关：多重选择：if/elif/else

```python
oxygen = 16
if oxygen >= 20:
    print("优良")
elif oxygen >= 18:
    print("正常")
elif oxygen >= 15:
    print("偏低")
else:
    print("危险")
```

---

## 第23关：层层深入：嵌套 if

```python
fuel = 15
oxygen = 16
if fuel < 20:
    print("燃料偏低")
    if oxygen < 18:
        print("双重危机！")
```

---

## 第24关：逻辑的捷径：and / or / not

```python
fuel = 15
oxygen = 25
if fuel < 20 and oxygen < 18:
    print("双重危机")
elif fuel < 20 or oxygen < 18:
    print("单一警告")
else:
    print("一切正常")
```

---

## 第25关：条件判断实战：环境异常分类

```python
temp = 55
dist = 8
rate = 7
if temp > 50 and dist < 10 and rate > 5:
    print("危险")
elif temp > 40 or rate > 3:
    print("预警")
elif temp > 30 or dist < 20:
    print("观察")
else:
    print("安全")
```

> 🏆 成就：逻辑大师

---

## 第26关：条件判断实战②：故障逻辑修复

```python
temp = 25
fuel = 82
if temp > 40:
    print("温度过高")
elif fuel > 80:
    print("燃料充足")
elif fuel <= 50:
    print("燃料不足")
if temp > 20 and fuel > 60:
    print("系统正常")
```

---

## 第27关：重复的力量：for+range()

```python
for i in range(10, 0, -1):
    print(i)
print("点火！")
```

---

## 第28关：逐字扫描：for 遍历字符串

```python
signal = "#H#E#L#P#M#E#"
result = ""
for ch in signal:
    if ch.isalpha():
        result += ch
print(result)
```

---

## 第29关：序列扫描：for 遍历列表

```python
words = ["OLIIMARA","TRAPPED","TWO","THOUSAND","CYCLES","BENEATH","SURFACE"]
for i in range(len(words)):
    print(f"信号词{i+1}: {words[i]}")
```

---

## 第30关：永不停歇：while 循环基础

```python
counter = 0
while counter < 3:
    print(f"第{counter+1}次：我们是OLIIMARA，被困在这里...")
    counter += 1
```

> 🏆 成就：信号破译者

---

## 第31关：选择武器：while vs for

```python
for i in range(1, 21):
    print(f"信号接收中...第{i}轮")
temp = 1000
while temp < 3000:
    temp += 200
    print(f"当前温度: {temp}")
```

---

## 第32关：紧急控制：break 和 continue

```python
signals = ["OK","#CORRUPT#","OK","#CORRUPT#","OK","END-TRANSMISSION","OK"]
for s in signals:
    if s == "#CORRUPT#": continue
    if s == "END-TRANSMISSION": break
    print(s)
```

---

## 第33关：网格扫描：嵌套循环

```python
for i in range(5):
    for j in range(5):
        if i == 2 and j == 2:
            print("*", end=" ")
        else:
            print(f"({i},{j})", end=" ")
    print()
```

---

## 第34关：循环实战①：绘制外星图腾

```python
for i in range(1,6):
    print("*"*i)
print()
for i in range(1,6):
    print(" "*(5-i)+"*"*(2*i-1))
print()
for i in range(1,6):
    print(" "*(5-i)+"*"*(2*i-1))
for i in range(4,0,-1):
    print(" "*(5-i)+"*"*(2*i-1))
```

---

## 第35关：循环实战②：气候数据分析

```python
temps = [22,24,26,25,28,30,32,31,35,38,40,42,41,39,37,35,33,30,28,29,31,34,38,42,45,43,41,39,40,42]
total = 0
max_t = temps[0]
min_t = temps[0]
abnormal = 0
for t in temps:
    total += t
    if t > max_t: max_t = t
    if t < min_t: min_t = t
    if t > 40: abnormal += 1
avg = total / len(temps)
print(f"平均温度: {avg:.1f}")
print(f"最高温度: {max_t}")
print(f"最低温度: {min_t}")
print(f"异常天数: {abnormal}")
```

> 🏆 成就：循环大师

---

## 第36关：打造你的工具：def 定义函数

```python
c = 36.5
def celsius_to_fahrenheit():
    f = c * 9 / 5 + 32
    print(f"{c}°C = {f}°F")
celsius_to_fahrenheit()
```

---

## 第37关：万能工具：参数传递

```python
def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32
print(f"0°C = {celsius_to_fahrenheit(0)}°F")
print(f"36.5°C = {celsius_to_fahrenheit(36.5)}°F")
print(f"100°C = {celsius_to_fahrenheit(100)}°F")
```

---

## 第38关：结果返还：return 返回值

```python
def add(a, b):
    return a + b
result = add(8, 7)
print(result)
```

---

## 第39关：多重输入：多个参数

```python
def calc_distance(x, y, z):
    return (x**2 + y**2 + z**2) ** 0.5
print(f"距离地球: {calc_distance(150000000, 0, 80000000)} 公里")
```

---

## 第40关：预设方案：默认参数

```python
def calc_supply(days, daily=30):
    return days * daily
print(f"默认消耗: {calc_supply(10)}")
print(f"自定义消耗: {calc_supply(10, 50)}")
```

> 🏆 成就：系统架构师

---

## 第41关：看不见的围墙：作用域

```python
status = "正常"
def check():
    status = "异常"
    print(f"函数内部: {status}")
check()
print(f"函数外部: {status}")
def fix():
    global status
    status = "已修复"
fix()
print(f"修改后: {status}")
```

---

## 第42关：函数复用实战①：外星能源转换链

```python
def collect(h): return h * 0.8
def convert(r): return r * 1.5
def regulate(p): return min(p, 120)
def distribute(s): return s * 0.9
def main():
    t = 150
    a = collect(t); b = convert(a); c = regulate(b); d = distribute(c)
    print(f"采集: {a}")
    print(f"转换: {b}")
    print(f"稳压: {c}")
    print(f"分配: {d}")
main()
```

---

## 第43关：函数复用实战②：系统诊断重构

```python
o2=85;temp=28;fuel=90;comm=72;shield=55
def ck(v):
    if v>=80: return "正常"
    elif v>=50: return "警告"
    else: return "危险"
def run():
    print(f"氧气: {o2} -> {ck(o2)}")
    print(f"温度: {temp} -> {ck(temp)}")
    print(f"燃料: {fuel} -> {ck(fuel)}")
    print(f"通讯: {comm} -> {ck(comm)}")
    print(f"护盾: {shield} -> {ck(shield)}")
run()
```

---

## 第44关：有序收纳：list 创建与访问

```python
p = ["KEPLER-442B","TRAPPIST-1E","PROXIMA-B","LHS-1140B","ROSS-128B"]
print(f"第1个星球: {p[0]}")
print(f"第3个星球: {p[2]}")
print(f"星球总数: {len(p)}")
```

---

## 第45关：动态管理：list 方法

```python
p = ["KEPLER","TRAPPIST","PROXIMA","ERROR1","LHS"]
p.append("ROSS"); print(f"添加后: {p}")
p.remove("ERROR1"); print(f"移除后: {p}")
p.sort(); print(f"排序后: {p}")
```

> 🏆 成就：数据收集者

---

## 第46关：精准切割：list 切片

```python
nums = [10,20,30,40,50,60,70,80,90,100]
print(nums[:5])
print(nums[2:7])
print(nums[::2])
print(nums[::-1])
print(nums[-3:])
```

---

## 第47关：键值配对：dict 字典基础

```python
c = {"name":"KEPLER-442B","population":5000,"resource":"氦-3","star_type":"K型主序星","established":2150}
print(f"殖民地: {c["name"]}")
print(f"资源: {c["resource"]}")
print(f"恒星: {c["star_type"]}")
```

---

## 第48关：深度探秘：dict 遍历与嵌套

```python
cols = {"z1":{"name":"α区","pop":5000},"z2":{"name":"β区","pop":3200},"z3":{"name":"γ区","pop":1800}}
t = 0
for k,z in cols.items():
    print(f"{z["name"]}: {z["pop"]}人")
    t += z["pop"]
print(f"总人口: {t}")
```

---

## 第49关：永恒的坐标：tuple 元组

```python
home = (12500, 8400, 31000)
print(home[0])
print(home[1])
print(home[2])
try:
    home[0] = 99999
except TypeError:
    print("元组不可修改！")
c = [12500, 8400, 31000]
c[0] = 99999
print(c)
```

---

## 第50关：独一无二：set 集合

```python
a = set(["水","铁","氦-3","水","铁"])
b = set(["铁","氦-3","钛","钛"])
print(f"A区资源: {a}")
print(f"B区资源: {b}")
print(f"共同资源: {a & b}")
print(f"所有资源: {a | b}")
```

> 🏆 成就：数据库大师

---

## 第51关：数据结构实战：能源网络地图

```python
nodes = ["反应堆","转换器","稳压器","分配器","护盾"]
links = {"反应堆":["转换器","稳压器"],"转换器":["分配器"],"稳压器":["分配器"],"分配器":["护盾"],"护盾":[]}
core = (350, 120, -80)
print(f"节点总数: {len(nodes)}")
print(f"护盾连接节点: {links["护盾"]}")
print(f"核心坐标: {core}")
```

---

## 第52关：打开武器库：import 导入模块

```python
import math
print(math.sqrt(144))
print(math.pi)
print(math.ceil(3.14))
print(math.floor(3.14))
```

---

## 第53关：数学武器库：math 模块实战

```python
import math
a = math.radians(45)
print(f"弧度: {a:.2f}")
print(f"sin45: {math.sin(a):.2f}")
print(f"cos45: {math.cos(a):.2f}")
v = math.sqrt(2 * 9.8 * 6371000)
print(f"逃逸速度: {v:.2f}")
print(f"取整: {math.ceil(v)}")
```

---

## 第54关：混沌之美：random 模块实战

```python
import random as r
print(f"传感器读数: {r.randint(1,100)}")
print(f"天气: {r.choice(['晴天','风暴','辐射','平静'])}")
for i in range(1,6):
    x = r.random()
    print(f"第{i}次: {'门开了' if 0.3<x<0.7 else '门关着'}")
```

---

## 第55关：深度读心术：读懂高级错误

```python
import math
print(math.sqrt(25))
print("温度: " + str(36.5))
try:
    print(int("abc123"))
except ValueError:
    print(0)
print({"name":"星舟"}.get("age","星舟"))
nums = [1,2,3]
try:
    print(nums[10])
except IndexError:
    print(nums[2])
```

> 🏆 成就：调试专家

---

## 第56关：安全网：try/except 异常处理

```python
try:
    int("abc")
except ValueError:
    print("输入不是有效数字")
try:
    10/0
except ZeroDivisionError:
    print("不能除以零")
try:
    [1,2,3][10]
except IndexError:
    print("索引超出范围")
```

---

## 第57关：综合项目①：生存天数计算器

```python
o = 1200/50
f = 90/3
w = 200/8
fu = (500-200)/30
d = [o,f,w,fu]
print(f"氧气: {o:.0f}天")
print(f"食物: {f:.0f}天")
print(f"水: {w:.0f}天")
print(f"燃料: {fu:.0f}天")
print(f"-> 最多生存 {min(d):.0f} 天")
```

---

## 第58关：综合项目：飞船状态面板

```python
sys = {"生命维持":65,"导航":82,"通讯":45,"推进器":90,"护盾":30}
danger = 0
for n,v in sys.items():
    if v>=80: lv="正常"
    elif v>=50: lv="警告"
    else: lv="危险"; danger+=1
    print(f"{n}: {v}% {lv}")
print(f"\n危险系统: {danger} 个")
```

---

## 第59关：综合项目③：物资管理系统

```python
items = [{"name":"水","weight":50,"priority":1},{"name":"食物","weight":30,"priority":1},{"name":"氧气罐","weight":80,"priority":1},{"name":"备用零件","weight":100,"priority":3},{"name":"外星文物","weight":47,"priority":1}]
def add(n,w,p): items.append({"name":n,"weight":w,"priority":p})
def search(n):
    for i in items:
        if i["name"]==n: return i
def remove_low(t):
    global items; items=[i for i in items if i["priority"]<=t]
def total(): return sum(i["weight"] for i in items)
add("急救包",15,1)
r=search("外星文物")
print(f"找到: {r["name"]}, 重量: {r["weight"]}kg")
remove_low(2)
print("当前物资清单:")
for i in items: print(f"  {i["name"]}: {i["weight"]}kg")
print(f"总重量: {total()}kg")
```

---

## 第60关：综合项目：导航计算器

```python
import math
g=9.8;r=6371000
ve=math.sqrt(2*g*r)
a=math.radians(45)
vx=ve*math.cos(a)
vy=ve*math.sin(a)
print(f"逃逸速度: {ve:.0f} m/s")
print("轨迹模拟:")
for t in range(10):
    h=vy*t-0.5*g*t**2
    v=math.sqrt(vx**2+(vy-g*t)**2)
    s="安全" if h>0 and v>8000 else "危险"
    print(f"t={t}s 高度={h:.0f}m 速度={v:.0f}m/s {s}")
```

---

## 第61关：综合项目⑤：自动诊断系统

```python
import random
s={"氧气":lambda:random.random()>0.2,"温度":lambda:random.random()>0.3,"燃料":lambda:random.random()>0.1,"通讯":lambda:random.random()>0.4,"护盾":lambda:random.random()>0.5}
f=0
for n,t in s.items():
    try:
        if t(): print(f"{n}: 正常")
        else: f+=1; print(f"{n}: 故障")
    except: f+=1; print(f"{n}: 异常")
print()
print("发射中止" if f>2 else "所有系统正常，准备发射")
```

---

## 第62关：终极任务：重返太空

```python
for i in range(10,0,-1):
    print(f"T-{i}: 系统正常")
    if i==3: print("去吧。替我们看看星空。")
print("IGNITION!")
print("星星一颗颗亮起来...")
print("你回家了。")
```

> 🏆 成就：重返星空

---

