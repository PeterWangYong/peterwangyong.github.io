(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{405:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" MongoDB")]),t._v(" "),a("h2",{attrs:{id:"什么是mongodb？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是mongodb？"}},[t._v("#")]),t._v(" 什么是MongoDB？")]),t._v(" "),a("h2",{attrs:{id:"为什么使用mongodb？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用mongodb？"}},[t._v("#")]),t._v(" 为什么使用MongoDB？")]),t._v(" "),a("h3",{attrs:{id:"优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优势"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),a("p",[t._v("面向开发者的易用+高效数据库")]),t._v(" "),a("ul",[a("li",[t._v("简单直观：以自然的方式来建模，以直观的方式来与数据库交互。")]),t._v(" "),a("li",[t._v("结构灵活：弹性模式从容响应需求的频繁变化。")]),t._v(" "),a("li",[t._v("快速开发：做更多的事，写更少的代码。")]),t._v(" "),a("li",[t._v("JSON结构和对象模型接近，开发代码量低。")]),t._v(" "),a("li",[t._v("JSON动态模型意味着更容易响应新的业务需求。")]),t._v(" "),a("li",[t._v("复制集提供99.999%高可用。")]),t._v(" "),a("li",[t._v("分片架构支持海量数据和无缝扩容。")])]),t._v(" "),a("h2",{attrs:{id:"安装部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[t._v("#")]),t._v(" 安装部署")]),t._v(" "),a("h3",{attrs:{id:"docker-compose部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose部署"}},[t._v("#")]),t._v(" docker-compose部署")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("docker-compose.yml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mongo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mongo\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MONGO_INITDB_ROOT_USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MONGO_INITDB_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" password\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 27017"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /data/mongodb/db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data/db\n")])])])]),t._v(" "),a("li",[a("p",[t._v("启动容器")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker-compose up -d\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"本地安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地安装"}},[t._v("#")]),t._v(" 本地安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /data/db\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /app\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel70-4.2.1.tgz \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xf mongodb-linux-x86_64-rhel70-4.2.1.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(":/app/mongodb-linux-x86_64-rhel70-4.2.1/bin\nmongod --dbpath /data/db --port "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v(" --logpath /data/db/mongod.log --fork –bind_ip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n")])])]),a("h3",{attrs:{id:"使用mongo-shell连接数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用mongo-shell连接数据库"}},[t._v("#")]),t._v(" 使用mongo-shell连接数据库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mongodb://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("username:password@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("host1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",host2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":port2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(",hostN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":portN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("?options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("h3",{attrs:{id:"数据库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[t._v("#")]),t._v(" 数据库操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("show dbs \nuse mock "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果数据库不存在则创建数据库")]),t._v("\nshow collections\ndb.createCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name, options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建集合")]),t._v("\ndb "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前数据库")]),t._v("\ndb.collection.drop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.dropDatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[t._v("#")]),t._v(" 查询")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("db."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询所有")]),t._v("\ndb.collection.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"year"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1975")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单条件查询")]),t._v("\ndb."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"year"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1989")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Batman"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and查询")]),t._v("\ndb."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$and")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Batman"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and的另一种形式")]),t._v("\ndb."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$or")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or查询")]),t._v("\ndb."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" /^B/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正则表达式查询")]),t._v("\ndb.collection.find"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"category"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"action"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", title: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"新增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增"}},[t._v("#")]),t._v(" 新增")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("db."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".insertOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JSON"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".insertMany"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JSON"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("JSON"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[t._v("#")]),t._v(" 修改")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("db.coll.updateOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("from: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"China"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.coll.updateMany"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$set")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("from: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"China"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[t._v("#")]),t._v(" 删除")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("db.coll.remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndb.coll.remvoe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除所有记录")]),t._v("\ndb.coll.remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 报错")]),t._v("\n")])])]),a("h2",{attrs:{id:"mongoose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongoose"}},[t._v("#")]),t._v(" mongoose")])])}),[],!1,null,null,null);s.default=e.exports}}]);