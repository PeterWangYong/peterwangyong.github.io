(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{456:function(e,t,n){"use strict";n.r(t);var i=n(42),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[e._v("#")]),e._v(" 链表")]),e._v(" "),n("p",[e._v("链表将一串零散的内存连接在一起，是天然的动态结构。")]),e._v(" "),n("p",[e._v("链表的两个元素：节点和指针。")]),e._v(" "),n("p",[e._v("节点用于存储具体的数据，指针用于指向节点")]),e._v(" "),n("p",[e._v("指针分为后继指针next和前驱指针prev，next指向下一个节点，prev指向前一个节点")]),e._v(" "),n("p",[e._v("根据指针的指向特点，链表分为：单链表，循环链表，双向链表，双向循环链表")]),e._v(" "),n("p",[e._v("单链表必：包含节点和next，头结点记录链表的基地址，next指向下一个节点，尾节点的next指向NULL")]),e._v(" "),n("p",[e._v("循环链表：单链表的尾节点不再指向NULL，而是指向头结点")]),e._v(" "),n("p",[e._v("双向链表：每个节点具备prev和next两个指针，prev指向前一个节点，next指向后一个节点，头结点prev和尾结点的next指向NULL")]),e._v(" "),n("p",[e._v("双向循环链表：双向链表的头结点prev执行尾结点，尾结点的next指向头节点")]),e._v(" "),n("h2",{attrs:{id:"使用链表实现lru算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用链表实现lru算法"}},[e._v("#")]),e._v(" 使用链表实现LRU算法")]),e._v(" "),n("p",[e._v("常用的缓存淘汰算法包括：先进先出策略 FIFO（First In，First Out）、最少使用策略 LFU（Least Frequently Used）、最近最少使用策略 LRU（Least Recently Used）。")]),e._v(" "),n("p",[e._v("单链表中前面表示最近使用，后面表示最近未使用。")]),e._v(" "),n("p",[e._v("查询一个元素，如果查到了，则将该元素移动至头部")]),e._v(" "),n("p",[e._v("如果没查到：")]),e._v(" "),n("ul",[n("li",[e._v("如果空间足够，则添加元素至头部")]),e._v(" "),n("li",[e._v("如果空间不够，则删除尾部节点，再添加元素至头部")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class LRU {\n  private LinkedList<Integer> linkedList= new LinkedList<>();\n\n  public LinkedList<Integer> get(Integer e) {\n    if (linkedList.contains(e)) {\n      linkedList.remove(e);\n      linkedList.addFirst(e);\n      return linkedList;\n    } else if (linkedList.size() >= 5) {\n      linkedList.removeLast();\n    }\n    linkedList.addFirst(e);\n    return linkedList;\n  }\n\n  public static void main(String[] args) {\n    LRU lru = new LRU();\n    for (int i = 0; i < 5; i++) {\n      System.out.println(lru.get(i));\n    }\n    for (int i = 0; i < 5; i++) {\n      System.out.println(lru.get(i));\n    }\n  }\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);