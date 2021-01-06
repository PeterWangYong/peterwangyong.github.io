(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{428:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"迭代器和生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代器和生成器"}},[t._v("#")]),t._v(" 迭代器和生成器")]),t._v(" "),a("h2",{attrs:{id:"python中的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python中的容器"}},[t._v("#")]),t._v(" python中的容器")]),t._v(" "),a("p",[t._v("在 Python 中一切皆对象，对象的抽象就是类，而对象的集合就是容器。")]),t._v(" "),a("p",[t._v("列表（list: [0, 1, 2]），元组（tuple: (0, 1, 2)），字典（dict: {0:0, 1:1, 2:2}），集合（set: set([0, 1, 2])）都是容器。对于容器，你可以很直观地想象成多个元素在一起的单元；而不同容器的区别，正是在于内部数据结构的实现方法。然后，你就可以针对不同场景，选择不同时间和空间复杂度的容器。")]),t._v(" "),a("h2",{attrs:{id:"可迭代对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可迭代对象"}},[t._v("#")]),t._v(" 可迭代对象")]),t._v(" "),a("p",[t._v("所有的容器都是可迭代的（iterable）。这里的迭代，和枚举不完全一样。迭代可以想象成是你去买苹果，卖家并不告诉你他有多少库存。这样，每次你都需要告诉卖家，你要一个苹果，然后卖家采取行为：要么给你拿一个苹果；要么告诉你，苹果已经卖完了。你并不需要知道，卖家在仓库是怎么摆放苹果的。")]),t._v(" "),a("p",[t._v("而可迭代对象，通过 iter() 函数返回一个迭代器，再通过 next() 函数就可以实现遍历。for in 语句将这个过程隐式化，所以，你只需要知道它大概做了什么就行了。")]),t._v(" "),a("p",[a("strong",[t._v("可迭代对象是指实现了"),a("code",[t._v("__iter__()")]),t._v("方法且该方法返回一个迭代器的对象。")])]),t._v(" "),a("p",[a("code",[t._v("__iter__()")]),t._v("方法可以通过"),a("code",[t._v("for..in")]),t._v("或者"),a("code",[t._v("iter()")]),t._v("方法调用")]),t._v(" "),a("h3",{attrs:{id:"如何判断一个对象是否可迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何判断一个对象是否可迭代"}},[t._v("#")]),t._v(" 如何判断一个对象是否可迭代?")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" collections "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Iterable\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Iterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"迭代器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代器"}},[t._v("#")]),t._v(" 迭代器")]),t._v(" "),a("p",[a("strong",[t._v("迭代器是指提供了"),a("code",[t._v("__next__()")]),t._v("方法且该方法返回下一个对象或者抛出StopIteration异常的对象")])]),t._v(" "),a("p",[a("code",[t._v("__next__()")]),t._v("方法可以通过"),a("code",[t._v("next()")]),t._v("函数调用")]),t._v(" "),a("h2",{attrs:{id:"生成器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成器"}},[t._v("#")]),t._v(" 生成器")]),t._v(" "),a("p",[a("strong",[t._v("生成器是懒人版本的迭代器")])]),t._v(" "),a("p",[t._v("生成器只在调用next的时候计算下一个值")]),t._v(" "),a("h3",{attrs:{id:"生成器表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成器表达式"}},[t._v("#")]),t._v(" 生成器表达式")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <class 'generator'>")]),t._v("\n")])])]),a("h3",{attrs:{id:"生成器函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成器函数"}},[t._v("#")]),t._v(" 生成器函数")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" i\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <class 'generator'>")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);