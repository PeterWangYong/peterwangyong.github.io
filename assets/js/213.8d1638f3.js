(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{561:function(p,t,r){"use strict";r.r(t);var e=r(42),x=Object(e.a)({},(function(){var p=this,t=p.$createElement,r=p._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[r("h1",{attrs:{id:"rpx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpx"}},[p._v("#")]),p._v(" rpx")]),p._v(" "),r("h2",{attrs:{id:"pt和px"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pt和px"}},[p._v("#")]),p._v(" pt和px")]),p._v(" "),r("p",[p._v("pt指的是移动端的逻辑分辨率，px指的是物理分辨率。")]),p._v(" "),r("p",[p._v("比如iphone6的逻辑分辨率是375x667，物理分辨率是750x1334，每个逻辑分辨率下有2个物理分辨率。")]),p._v(" "),r("h2",{attrs:{id:"rpx-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpx-2"}},[p._v("#")]),p._v(" rpx")]),p._v(" "),r("p",[p._v("rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。"),r("strong",[p._v("规定屏幕宽为750rpx。")])]),p._v(" "),r("p",[p._v("微信开发者工具里"),r("code",[p._v('<image style="width:200px;height:500px">')]),p._v("中的px指的其实是"),r("strong",[p._v("逻辑分辨率")]),p._v("，而设计师给出的设计图中的px指的是"),r("strong",[p._v("物理分辨率")]),p._v("，因而存在一个换算关系。")]),p._v(" "),r("p",[p._v("通常设计师需要在iphone6的物理像素750x1334为视觉稿进行设计，而在小程序中使用rpx为单位。")]),p._v(" "),r("p",[p._v("iphone6下，1px = 1rpx = 0.5pt，只有在iphone6的物理分辨率下1px才对应1rpx，而在iphone6 plus下1px = 0.6rpx，所以推荐在iphone6的物理分辨率下进行设计。")]),p._v(" "),r("p",[p._v("使用rpx，小程序会自动在不同的分辨率下进行转换，而使用px为单位则不会。")]),p._v(" "),r("p",[p._v("rpx是小程序提供的一个标准，在不同的机型下会对应不同的显示大小pt，这个单位的设计就是根据iphone6的物理和逻辑分辨率进行设计的。")]),p._v(" "),r("h2",{attrs:{id:"为什么要在iphone6的物理分辨率下进行设计？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么要在iphone6的物理分辨率下进行设计？"}},[p._v("#")]),p._v(" 为什么要在iphone6的物理分辨率下进行设计？")]),p._v(" "),r("p",[p._v("因为在iphone6下，1rpx = 0.5pt，这是小程序的标准，而对于iphone6而言，1px = 0.5pt，所以导致 1px = 1rpx的整数换算关系，比较方便使用。如果是在iphone6 plus上，1rpx = 0.552pt，而对于iphone6 plus而言，1px = 0.33pt，所以导致 1px = 0.6rpx，换算比较麻烦。")]),p._v(" "),r("p",[p._v("由于小程序"),r("strong",[p._v("规定屏幕宽为750rpx")]),p._v("。因而 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5pt = 1物理像素。")])])}),[],!1,null,null,null);t.default=x.exports}}]);