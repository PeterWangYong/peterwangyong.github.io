(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{478:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("h2",{attrs:{id:"保存-https-账号密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存-https-账号密码"}},[t._v("#")]),t._v(" 保存 https 账号密码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local credential.helper store\n")])])]),a("h2",{attrs:{id:"基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peterwang'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peterwang@gmail.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --list\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'peterwang'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wangyong@shsnc.com'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --local --list\n")])])]),a("h3",{attrs:{id:"文档相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档相关"}},[t._v("#")]),t._v(" 文档相关")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" readme\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add readme'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 变更文件名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" readme readme.md\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空暂存区和工作目录的变更")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard\n")])])]),a("h3",{attrs:{id:"查看历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看历史"}},[t._v("#")]),t._v(" 查看历史")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简单查看历史")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看最近两次")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -n2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支最近4个分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline --all -n4\n")])])]),a("h3",{attrs:{id:"分支相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支相关"}},[t._v("#")]),t._v(" 分支相关")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于cfca916版本号创建并切换分支temp")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b temp cfca916\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程feature分支创建本地分支命名为feature")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch feature origin/feature\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程feature分支创建本地feature分支并切换")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --track origin/feature\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地分支详细信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -vv\n")])])]),a("h3",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[t._v("#")]),t._v(" 远程仓库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/xxx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送并新建上游分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show origin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程仓库拉取本地没有的数据，比如分支数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送本地feature分支到远程feature分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin feature\n")])])]),a("h3",{attrs:{id:"帮助文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帮助文档"}},[t._v("#")]),t._v(" 帮助文档")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看帮助文档")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" --web log\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);