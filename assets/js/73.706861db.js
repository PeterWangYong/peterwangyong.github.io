(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{421:function(t,a,s){"use strict";s.r(a);var n=s(42),o=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gil全局解释器锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gil全局解释器锁"}},[t._v("#")]),t._v(" GIL全局解释器锁")]),t._v(" "),s("p",[t._v("GIL，是最流行的 Python 解释器 CPython 中的一个技术术语。它的意思是全局解释器锁，本质上是类似操作系统的 Mutex。每一个 Python 线程，在 CPython 解释器中执行时，都会先锁住自己的线程，阻止别的线程执行。")]),t._v(" "),s("p",[t._v("Python 的线程，的的确确封装了底层的操作系统线程，在 Linux 系统里是 Pthread（全称为 POSIX Thread），而在 Windows 系统里是 Windows Thread。另外，Python 的线程，也完全受操作系统管理，比如协调何时执行、管理内存资源、管理中断等等。")]),t._v(" "),s("p",[t._v("么，为什么 CPython 需要 GIL 呢？这其实和 CPython 的实现有关。下一节我们会讲 Python 的内存管理机制，今天先稍微提一下。")]),t._v(" "),s("p",[t._v("CPython 使用引用计数来管理内存，所有 Python 脚本中创建的实例，都会有一个引用计数，来记录有多少个指针指向它。当引用计数只有 0 时，则会自动释放内存。")]),t._v(" "),s("p",[t._v("什么意思呢？我们来看下面这个例子：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getrefcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("这个例子中，a 的引用计数是 3，因为有 a、b 和作为参数传递的 getrefcount 这三个地方，都引用了一个空列表。")]),t._v(" "),s("p",[t._v("这样一来，如果有两个 Python 线程同时引用了 a，就会造成引用计数的 race condition，引用计数可能最终只增加 1，这样就会造成内存被污染。因为第一个线程结束时，会把引用计数减少 1，这时可能达到条件释放内存，当第二个线程再试图访问 a 时，就找不到有效的内存了。")]),t._v(" "),s("p",[t._v("所以说，CPython  引进 GIL 其实主要就是这么两个原因：")]),t._v(" "),s("p",[t._v("一是设计者为了规避类似于内存管理这样的复杂的竞争风险问题（race condition）；")]),t._v(" "),s("p",[t._v("二是因为 CPython 大量使用 C 语言库，但大部分 C 语言库都不是原生线程安全的（线程安全会降低性能和增加复杂度）。")]),t._v(" "),s("p",[t._v("CPython 中还有另一个机制，叫做 check_interval，意思是 CPython 解释器会去轮询检查线程 GIL 的锁住情况。每隔一段时间，Python 解释器就会强制当前线程去释放 GIL，这样别的线程才能有执行的机会。")]),t._v(" "),s("blockquote",[s("p",[t._v("通过这种方式交替执行线程，实现“伪并行”")])])])}),[],!1,null,null,null);a.default=o.exports}}]);