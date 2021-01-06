(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{497:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),t("h2",{attrs:{id:"什么是-docker？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker？"}},[a._v("#")]),a._v(" 什么是 Docker？")]),a._v(" "),t("p",[a._v("Docker 是免费的虚拟机引擎，可以为任何应用创建一个轻量级的、可移植的容器。")]),a._v(" "),t("h3",{attrs:{id:"docker-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像"}},[a._v("#")]),a._v(" Docker 镜像")]),a._v(" "),t("ol",[t("li",[a._v("Docker 虚拟机镜像是一个只读层，不能写入数据。")]),a._v(" "),t("li",[a._v("我们可以通过 dockerfile 文件，定义需要安装的程序，然后创建出镜像文件。")])]),a._v(" "),t("h3",{attrs:{id:"docker-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器"}},[a._v("#")]),a._v(" Docker 容器")]),a._v(" "),t("ol",[t("li",[a._v("Docker 容器是一个虚拟的实例，里面的内容可读可写。")]),a._v(" "),t("li",[a._v("容器是完全隔离的，我们不用担心部署程序会相互干扰。")]),a._v(" "),t("li",[a._v("一个镜像可以创建出多个容器。")])]),a._v(" "),t("h2",{attrs:{id:"为什么使用-docker？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-docker？"}},[a._v("#")]),a._v(" 为什么使用 Docker？")]),a._v(" "),t("p",[a._v("VM 虚拟机创建的是完整的虚拟系统，所以对占用硬件较高，属于重量级虚拟机。")]),a._v(" "),t("p",[a._v("Docker 虚拟机创建的虚拟实例共用同一个系统内核，对硬件占用较小，属于轻量级虚拟机。")]),a._v(" "),t("h2",{attrs:{id:"安装部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装部署"}},[a._v("#")]),a._v(" 安装部署")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在 CentOS 上安装 Docker 虚拟机")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y docker\nsystemctl start docker\nsystemctl stop docker\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[a._v("#")]),a._v(" 基础命令")]),a._v(" "),t("h3",{attrs:{id:"镜像与容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像与容器"}},[a._v("#")]),a._v(" 镜像与容器")]),a._v(" "),t("ol",[t("li",[a._v("run 从镜像创建并运行一个容器")]),a._v(" "),t("li",[a._v("exec 在容器中执行命令")]),a._v(" "),t("li",[a._v("start/stop 启动和停止容器")]),a._v(" "),t("li",[a._v("pause/unpause 暂停和恢复容器")]),a._v(" "),t("li",[a._v("ps 列出容器")]),a._v(" "),t("li",[a._v("rm/rmi 删除容器/删除镜像")]),a._v(" "),t("li",[a._v("commit 将容器打包为镜像")])]),a._v(" "),t("h3",{attrs:{id:"镜像与仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像与仓库"}},[a._v("#")]),a._v(" 镜像与仓库")]),a._v(" "),t("ol",[t("li",[a._v("search 从 DockerHub 中查询镜像")]),a._v(" "),t("li",[a._v("push 推送镜像到仓库")]),a._v(" "),t("li",[a._v("pull 从仓库拉取镜像到本地")])]),a._v(" "),t("h3",{attrs:{id:"镜像与文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像与文件"}},[a._v("#")]),a._v(" 镜像与文件")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("save 导出镜像为 tar 文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker save -o ./openjdk.ta.gz docker.io/openjdk\n")])])])]),a._v(" "),t("li",[t("p",[a._v("load 从 tar 文件导入镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker load "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" ./openjdk.tar.gz\n")])])])]),a._v(" "),t("li",[t("p",[a._v("build 从 Dockerfile 文件构建镜像")])])]),a._v(" "),t("h2",{attrs:{id:"dockercompose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockercompose"}},[a._v("#")]),a._v(" DockerCompose")]),a._v(" "),t("h3",{attrs:{id:"什么是-dockercompose？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dockercompose？"}},[a._v("#")]),a._v(" 什么是 DockerCompose？")]),a._v(" "),t("h3",{attrs:{id:"为什么使用-dockercompose？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-dockercompose？"}},[a._v("#")]),a._v(" 为什么使用 DockerCompose？")]),a._v(" "),t("h3",{attrs:{id:"安装部署-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装部署-2"}},[a._v("#")]),a._v(" 安装部署")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("下载 docker-compose")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L https://get.daocloud.io/docker/compose/releases/download/1.26.2/docker-compose-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" -s"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" -m"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /usr/local/bin/docker-compose\n")])])])]),a._v(" "),t("li",[t("p",[a._v("给予执行权限")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x /usr/local/bin/docker-compose\n")])])])]),a._v(" "),t("li",[t("p",[a._v("测试安装是否成功")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker-compose --version\n")])])])])]),a._v(" "),t("blockquote",[t("p",[a._v("参考文档：http://get.daocloud.io/#install-compose")])]),a._v(" "),t("h3",{attrs:{id:"docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[a._v("#")]),a._v(" docker-compose.yml")]),a._v(" "),t("p",[a._v("docker-compose.yml 用于配置 docker-compose 要管理的容器信息。")]),a._v(" "),t("p",[a._v("以安装 mongodb 为例：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.1'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mongo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mongo\n    \trestart"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    \tenvironment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("MONGO_INITDB_ROOT_USERNAME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" root\n        \tMONGO_INITDB_ROOT_PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" password\n    \tports"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 27017"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2701")]),a._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" /data/mongodb/db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/data/db\n")])])]),t("h3",{attrs:{id:"基础命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令-2"}},[a._v("#")]),a._v(" 基础命令")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("up 创建和启动容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker-compose up -d\n")])])]),t("p",[a._v("[options]:")]),a._v(" "),t("ul",[t("li",[a._v("-d: 后台运行容器")])])])]),a._v(" "),t("h2",{attrs:{id:"镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[a._v("#")]),a._v(" 镜像加速")]),a._v(" "),t("h3",{attrs:{id:"阿里云镜像加速器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阿里云镜像加速器"}},[a._v("#")]),a._v(" 阿里云镜像加速器")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("获取加速器")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/PeterWangYong/blog-image/raw/master/images/image-20200806140451588.png",alt:"image-20200806140451588"}})])]),a._v(" "),t("li",[t("p",[a._v("修改配置文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/docker/daemon.json\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://xxxxxx.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("重启 docker")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("systemctl restart docker\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);