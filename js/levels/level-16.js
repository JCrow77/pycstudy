LEVELS[16] = { id:16, title:"文字整理术：字符串方法", phase:"类型深入", icon:"🧹",
  briefing: { narrative:"又一条信号传来，但格式乱七八糟：\"  HelP-Me-EXILE  \"——首尾有多余空格，大小写混乱，单词之间用减号连接。你需要用字符串方法这把手术刀来整理它。upper()、lower()、strip()、replace()——四种方法如同四种工具，各司其职。", objective:"学会使用四种常用字符串方法：<code>strip()</code> 去空格、<code>lower()</code> 转小写、<code>upper()</code> 转大写、<code>replace()</code> 替换字符。", tip:"字符串方法可以链式调用——像流水线一样，一道工序接一道工序。" },
  knowledge: { concept:"字符串方法", intro:"字符串方法是对字符串进行操作的<strong>内置函数</strong>，用 <code>.</code> 语法调用：<code>字符串.方法名()</code><br><br>常用四种：<br>• <code>.strip()</code> — 去掉首尾空白字符（空格、换行等）<br>• <code>.lower()</code> — 把所有字母变成小写<br>• <code>.upper()</code> — 把所有字母变成大写<br>• <code>.replace(\"旧\",\"新\")</code> — 把旧文字替换成新文字<br><br>方法可以<strong>链式调用</strong>：<code>\" A \".strip().lower()</code>", example:"\" Hello \".strip()    → \"Hello\"\n\"HELLO\".lower()      → \"hello\"\n\"hello\".upper()      → \"HELLO\"\n\"A-B\".replace(\"-\",\" \") → \"A B\"", exampleOutput:"Hello\nhello\nHELLO\nA B", rules:[{title:"方法链",text:"可以连续调用多个方法：<code>s.strip().lower().replace(\"-\", \" \")</code>——从左到右依次处理，像流水线一样。每个方法返回处理后的新字符串，原始字符串不变。"}], watchOut:"字符串方法<strong>不会修改原字符串</strong>——它们返回一个新的字符串。如果不把结果存回变量（或直接 print），原来的字符串不会变。还有，方法名后面一定加括号 <code>()</code>，忘记括号不会报错但也不会执行。" },
  story:"信号内容：<code>signal = \"  HelP-Me-EXILE  \"</code><br>用方法链依次处理：<br>① <code>strip()</code> 去掉首尾空格<br>② <code>lower()</code> 全部转小写<br>③ <code>replace(\"-\", \" \")</code> 把减号换成空格<br>最终输出：<code>help me exile</code>",
  starterCode:`signal = "  HelP-Me-EXILE  "

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'help me exile'}],
  hint:"写 signal.strip().lower().replace(\"-\", \" \") 然后打印。方法链从左到右依次执行：先去空格，再变小写，最后把 - 换成空格。"
};
