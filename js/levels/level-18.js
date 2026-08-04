LEVELS[18] = { id:18, title:"小综合①：生存数据仪表盘", phase:"类型深入", icon:"📊",
  briefing: { narrative:"环境传感器完成了首轮全面扫描。温度、气压、辐射——三个数据源同时涌入。你要整合所有类型知识：用 input() 接收参数、用 int()/float() 转换类型、用字符串方法和 f-string 排版，最后生成一张工整的生存数据仪表盘。报告底部一行小字引起了你的注意：「注意：地下300米处检测到不规则空腔结构」。", objective:"综合运用本阶段所有知识：<code>input()</code> 接收输入、<code>float()/int()</code> 类型转换、<strong>f-string</strong> 格式化输出，生成一张完整的传感器数据报告。", tip:"这是本阶段的综合测验——把前面学到的类型知识串在一起，就像组装一台完整的仪器。" },
  knowledge: { concept:"综合运用：从输入到格式化输出", intro:"前面学过的知识点全部串联起来：<br>① <strong>input()</strong> — 从用户获取数据（返回字符串）<br>② <strong>类型转换</strong> — int() 转整数，float() 转浮点数<br>③ <strong>f-string</strong> — 优雅地格式化输出<br>④ <strong>字符串方法</strong> — 整理文本格式<br><br>完整流程：<code>接收文字 → 转数字 → 计算/整理 → f-string 输出</code>", example:"raw_temp = input(\"温度: \")\ntemp = float(raw_temp)\nraw_pressure = input(\"气压: \")\npressure = int(raw_pressure)\nprint(f\"报告\\n温度: {temp}°C\\n气压: {pressure} hPa\")", exampleOutput:"温度: 36.5\n气压: 1013\n（输入两个值后输出格式化报告）", rules:[{title:"数据处理流水线",text:"<code>input()</code> → 返回 str<br>→ <code>float()</code> / <code>int()</code> 转换<br>→ 放入 f-string 格式化<br>→ <code>print()</code> 输出"}], watchOut:"<code>input()</code> 返回 str！温度是浮点数需用 <code>float()</code>，气压是整数需用 <code>int()</code>。别忘了在 f-string 的字符串前加 <code>f</code>。辐射值保留一位小数用 <code>{变量:.1f}</code>。" },
  story:"综合运用学到的类型知识，生成一份格式化环境报告。<br><br>要求：<br>① 用 <code>input()</code> 依次接收三个值：<strong>温度</strong>（浮点数）、<strong>气压</strong>（整数）、<strong>辐射</strong>（浮点数）<br>② 用 <code>float()</code> 和 <code>int()</code> 转换类型<br>③ 用 <code>f-string</code> 格式化输出，辐射值保留1位小数<br>④ 输出格式：<br>🌡️ 温度: XX°C<br>📊 气压: XX hPa<br>☢️ 辐射: XX μSv/h",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'36.5\n1013\n0.8',expected:'温度: 36.5°C\n气压: 1013 hPa\n辐射: 0.8 mSv'}],
  hint:"分别用 raw1 = input(\"温度: \") 等获取三个输入。temp = float(raw1)、pressure = int(raw2)、rad = float(raw3) 转换类型。最后用 f-string 输出，辐射写 {rad:.1f}。",
  practice:true
};
