LEVELS[55] = { id:55, title:"深度读心术：读懂高级错误", phase:"模块与错误处理", icon:"🔬",
  briefing: { narrative:"代码越来越复杂，错误种类让人眼花缭乱。ImportError=模块名写错、TypeError=类型用错、ValueError=值不合法、KeyError=键不存在、IndexError=索引越界。读懂它们，找到最后核心指令。", objective:"分析5段含有不同错误类型的代码片段，诊断问题并修改正确。", tip:"学会看错误信息的最后一行——它告诉你错误类型。" },
  knowledge: { concept:"五种常见错误类型", intro:"Python的错误信息包含错误类型，是诊断问题的关键线索。ImportError(模块问题)、TypeError(类型问题)、ValueError(值问题)、KeyError(字典键)、IndexError(索引)。", example:"# import mathh → ImportError: 模块名写错\n# \"hello\"+5 → TypeError: 不能拼接str和int\n# int(\"abc\") → ValueError: 无法转换\n# d[\"x\"] → KeyError: 键不存在\n# lst[99] → IndexError: 索引越界", exampleOutput:"修复后全部正常运行", rules:[{title:"错误对照",text:"ImportError→检查拼写 | TypeError→检查类型 | ValueError→检查值 | KeyError→检查键名 | IndexError→检查索引范围"}], watchOut:"错误信息不是敌人，它精准告诉你去哪找问题。学会读错误比会写代码更重要。" },
  story:"下面5段代码各有一种错误类型。阅读错误提示，逐段诊断并修正代码使其正确运行。<br><br>代码中的错误类型：ImportError（模块名写错）、TypeError（类型错误）、ValueError（值错误）、KeyError（字典键不存在）、IndexError（索引越界）。<br><br>每段修正后应能正常输出结果。",
  starterCode:`# === 错误诊断与修复 ===
# ① ImportError: mathh → math
import math
print(math.sqrt(25))

# ② TypeError: str + float → 用 str()
print("温度: " + str(36.5))

# ③ ValueError: 用 try/except
try:
    num = int("abc123")
    print(num)
except ValueError:
    print(0)

# ④ KeyError: 用 .get()
data = {"name": "星舟"}
print(data.get("age", "星舟"))

# ⑤ IndexError: 用 try/except
nums = [1, 2, 3]
try:
    print(nums[10])
except IndexError:
    print(nums[2])
`,
  testCases:[{stdin:'',expected:'5.0\n温度: 36.5\n0\n星舟\n3'}],
  hint:"代码已预填。逐段阅读，理解每种错误的原因和修复方式。",
  achievement:{id:"py_l55",icon:"🐛",name:"调试专家"}
};
