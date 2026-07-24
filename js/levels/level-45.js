LEVELS[45] = { id:45, title:"动态管理：list 方法", phase:"数据结构", icon:"🔧",
  briefing: { narrative:"深入遗迹更深层，记录显示还有更多殖民地(append)，但其中两个被证实为测量误差(remove)，最后按字母重排(sort)。列表是活的，随探索不断变化。", objective:"使用append()添加、remove()移除、sort()排序，每步后打印列表。", tip:"列表的方法可以直接修改列表内容。" },
  knowledge: { concept:"list 方法", intro:"列表有内置方法可以动态修改：append(元素)追加到末尾、remove(元素)删除指定项、sort()原地排序。", example:"items = [\"B\",\"A\"]\nitems.append(\"C\")\nprint(items)\nitems.sort()\nprint(items)", exampleOutput:"[\"B\",\"A\",\"C\"]\n[\"A\",\"B\",\"C\"]", rules:[{title:"常用方法",text:"append(x)—末尾添加 | remove(x)—删除第一个匹配 | sort()—升序排列 | pop()—弹出最后一个"}], watchOut:"remove()删除不存在的元素会报ValueError！sort()只能对同类型元素排序。" },
  story:"使用列表方法管理殖民地名单。<br><br>初始列表：<code>planets = [\"KEPLER\", \"TRAPPIST\", \"PROXIMA\", \"ERROR1\", \"LHS\"]</code><br><br>要求：<br>① 用 <code>planets.append(\"ROSS\")</code> 添加一颗星球，打印列表<br>② 用 <code>planets.remove(\"ERROR1\")</code> 移除错误条目，打印列表<br>③ 用 <code>planets.sort()</code> 按字母排序，打印列表<br>④ 每步操作后用 <code>print(f\"xxx: {planets}\")</code> 打印当前列表",
  starterCode:`# 在这里写你的代码
`,
  testCases:[{stdin:'',expected:'添加后: [\'KEPLER\', \'TRAPPIST\', \'PROXIMA\', \'ERROR1\', \'LHS\', \'ROSS\']\n移除后: [\'KEPLER\', \'TRAPPIST\', \'PROXIMA\', \'LHS\', \'ROSS\']\n排序后: [\'KEPLER\', \'LHS\', \'PROXIMA\', \'ROSS\', \'TRAPPIST\']'}],
  hint:"planets.append(\"ROSS\"); print(...) → planets.remove(\"ERROR1\"); print(...) → planets.sort(); print(...)。",
  achievement:{id:"py_l45",icon:"📦",name:"数据收集者"}
};
