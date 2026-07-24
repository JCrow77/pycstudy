LEVELS[35] = { id:35, title:"循环实战②：气候数据分析", phase:"循环结构", icon:"📈",
  briefing: { narrative:"采集连续30天环境数据——温度、气压、辐射。计算平均、找极值、统计异常。过去10天三项指标同步恶化。星球在苏醒——或者说，在死亡。", objective:"遍历30个温度数据，计算平均值、最高最低温、异常天数。", tip:"累加求和→算平均 | 比较更新→找极值 | 条件筛选→统计异常。" },
  knowledge: { concept:"数据分析基础", intro:"编程处理数据的三个核心：累加求和(平均值)、比较找极值(最大最小)、条件筛选(统计异常)。", example:"temps = [25,28,42,30,35]\ntotal = sum(temps)\navg = total / len(temps)\nmax_t = max(temps)\nabnormal = sum(1 for t in temps if t > 40)\nprint(f\"平均: {avg:.1f}, 最高: {max_t}, 异常: {abnormal}天\")", exampleOutput:"平均: 32.0\n最高: 42\n最低: 25\n异常: 1天", rules:[{title:"算法思路",text:"求和: total=0→for t in list: total+=t | 极值: max_t=list[0]→for中比较更新 | 统计: counter=0→满足条件+=1"}], watchOut:"max_t初始值不能设为0！如果所有温度都是负数就错了。应初始化为列表第一个元素。" },
  story:"分析30天温度数据。<br><br>预填数据：<code>temps</code> 列表包含30个整数温度值。<br><br>要求：<br>① <strong>平均温度</strong>：创建 <code>total = 0</code>，for循环累加 <code>total += t</code>，最后 <code>avg = total / len(temps)</code>，用 <code>print(f\"平均温度: {avg:.1f}\")</code> 打印（保留1位小数）<br>② <strong>最高温度</strong>：设 <code>max_t = temps[0]</code>，循环中 <code>if t > max_t: max_t = t</code>，打印最高温<br>③ <strong>最低温度</strong>：设 <code>min_t = temps[0]</code>，循环中 <code>if t < min_t: min_t = t</code>，打印最低温<br>④ <strong>异常天数</strong>：设 <code>abnormal = 0</code>，循环中 <code>if t > 40: abnormal += 1</code>，打印异常天数",
  starterCode:`temps = [22,24,26,25,28,30,32,31,35,38,40,42,41,39,37,35,33,30,28,29,31,34,38,42,45,43,41,39,40,42]

# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'平均温度: 34.7\n最高温度: 45\n最低温度: 22\n异常天数: 7'}],
  hint:"创建四个变量（total、max_t、min_t、abnormal），设好初始值。一个 for 循环遍历 temps，循环内做四件事：累加、比较更新最大、比较更新最小、条件判断统计异常。",
  achievement:{id:"py_l35",icon:"🔄",name:"循环大师"},
  practice:true
};
