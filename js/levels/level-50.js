LEVELS[50] = { id:50, title:"独一无二：set 集合", phase:"数据结构", icon:"🎯",
  briefing: { narrative:"23个殖民地共享有限资源类型，但记录大量重复。你真正需要：总共用了多少种不同资源？集合自动去重。两个殖民地资源set做交集和并集，看出贸易关系。", objective:"创建两个含重复元素的列表转set，做交集(&)找共同资源，并集(|)找所有资源。", tip:"set自动去重。&求交集，|求并集。" },
  knowledge: { concept:"set 集合", intro:"集合(set)是无序、不重复的元素集合。用{}或set()创建。自动去重是最大特点。支持交集(&)、并集(|)、差集(-)等集合运算。", example:"a={1,2,3,3}\nb={2,3,4}\nprint(a&b)\nprint(a|b)", exampleOutput:"{2,3}\n{1,2,3,4}", rules:[{title:"集合运算",text:"& 交集(共有) | | 并集(全部) | - 差集(A有B没有) | ^ 对称差(只在一边)"}], watchOut:"set是无序的！每次打印顺序可能不同。空集合必须用set()，不能用{}——{}是空字典！" },
  story:"使用集合(set)分析两个殖民地的资源。<br><br>数据：<br>• 殖民地A资源列表：<code>[\"水\", \"铁\", \"氦-3\", \"水\", \"铁\"]</code>（有重复）<br>• 殖民地B资源列表：<code>[\"铁\", \"氦-3\", \"钛\", \"钛\"]</code>（有重复）<br><br>要求：<br>① 用 <code>set()</code> 将两个列表转为集合 <code>a</code> 和 <code>b</code>，观察去重效果<br>② 用 <code>a & b</code>（交集）找共同资源<br>③ 用 <code>a | b</code>（并集）找所有资源<br>④ 打印三个结果",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'A区资源: {\'水\', \'铁\', \'氦-3\'}\\nB区资源: {\'铁\', \'氦-3\', \'钛\'}\\n共同资源: {\'铁\', \'氦-3\'}\\n所有资源: {\'水\', \'铁\', \'氦-3\', \'钛\'}'}],
  hint:"a=set(a_list); b=set(b_list) → print(a & b) → print(a | b)。",
  achievement:{id:"py_l50",icon:"🗄️",name:"数据库大师"}
};
