(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{323:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"搭建mysql学习环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建mysql学习环境"}},[s._v("#")]),s._v(" 搭建mysql学习环境")]),s._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目录"}},[s._v("目录")])]),a("li",[a("a",{attrs:{href:"#核心环节配置"}},[s._v("核心环节配置")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-核心安装流程"}},[s._v("1.核心安装流程")])]),a("li",[a("a",{attrs:{href:"#其他后续常用操作"}},[s._v("其他后续常用操作")])]),a("li",[a("a",{attrs:{href:"#_2-解决任何密码登陆"}},[s._v("2.解决任何密码登陆")])]),a("li",[a("a",{attrs:{href:"#_3-如何开放安全组了"}},[s._v("3.如何开放安全组了？")])]),a("li",[a("a",{attrs:{href:"#_4-使用navicat-premium连接远程mysql"}},[s._v("4.使用navicat premium连接远程mysql")])])])]),a("li",[a("a",{attrs:{href:"#其他扩充视野"}},[s._v("其他扩充视野")]),a("ul",[a("li",[a("a",{attrs:{href:"#另一个可能导致采用任何密码登录都能通过「但是没遇到过」"}},[s._v("另一个可能导致采用任何密码登录都能通过「但是没遇到过」")])]),a("li",[a("a",{attrs:{href:"#附录-搭建mysql学习环境"}},[s._v("附录-搭建mysql学习环境")])])])])])]),a("p"),s._v(" "),a("p",[s._v("[TOC]")]),s._v(" "),a("h2",{attrs:{id:"核心环节配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心环节配置"}},[s._v("#")]),s._v(" 核心环节配置")]),s._v(" "),a("p",[s._v("在unbuntu上apt安装mysql+解决任何密码登陆+开放云服务器安全组")]),s._v(" "),a("h3",{attrs:{id:"_1-核心安装流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-核心安装流程"}},[s._v("#")]),s._v(" 1.核心安装流程")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/lianghecai52171314/article/details/113807099",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql_secure_installation\n\n注意！我这里选择了强密码，大小写+数字+特殊字符，并且长度大于等于8\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"其他后续常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他后续常用操作"}},[s._v("#")]),s._v(" 其他后续常用操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl status mysql.service "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检查mysql服务状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/init.d/mysql restart "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启mysql命令!!!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-解决任何密码登陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决任何密码登陆"}},[s._v("#")]),s._v(" 2.解决任何密码登陆")]),s._v(" "),a("ul",[a("li",[s._v("解决放啊：linux解决"),a("a",{attrs:{href:"https://blog.csdn.net/wangzhufei/article/details/122868649",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql用任何密码都能登录"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("修改"),a("a",{attrs:{href:"https://www.cnblogs.com/baby123/p/12221405.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("密码强度要够"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Database           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" information_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" performance_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" sys                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql\nReading table information "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" completion of table and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" names\nYou can turn off this feature to get a quicker startup with "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n\nDatabase changed\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("authentication_string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kjhlkjhl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1819")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Your password does not satisfy the current policy requirements\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("authentication_string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xycmd2018XYCMD@"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRows matched: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Changed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Warnings: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xycmd2018XYCMD@'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1054")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("42S22"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Unknown "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'field list'")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  update user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql_native_password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRows matched: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  Changed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Warnings: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("ul",[a("li",[s._v("重庆")])]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[s._v("sudo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@hecs-358761:/usr/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -hlocalhost  -uroot -p")]),s._v("\nEnter password:\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1045")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Access denied "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using password: NO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nroot@hecs-358761:/usr/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -hlocalhost  -uroot -p")]),s._v("\nEnter password:\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1045")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Access denied "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("using password: YES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nroot@hecs-358761:/usr/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -hlocalhost  -uroot -p")]),s._v("\nEnter password:\nWelcome to the MySQL monitor.  Commands end with "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" or "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("g.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_3-如何开放安全组了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何开放安全组了"}},[s._v("#")]),s._v(" 3.如何开放安全组了？")]),s._v(" "),a("h4",{attrs:{id:"_3-1-curl的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-curl的使用"}},[s._v("#")]),s._v(" 3.1.curl的使用")]),s._v(" "),a("ul",[a("li",[s._v("下面的curl成功了，就是开放了安全组了！\n"),a("ul",[a("li",[s._v("但是为什么不能连接呢？")]),s._v(" "),a("li",[s._v("解决方案如下方案：https://blog.csdn.net/eric_sunah/article/details/18567091\n"),a("ul",[a("li",[s._v("我最终采用的改表法")])])])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➜  ~ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.9")]),s._v(".47.180:3306\n*   Trying "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.9")]),s._v(".47.180:3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n* Connected to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.9")]),s._v(".47.180 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.9")]),s._v(".47.180"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GET / HTTP/1.1\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.9")]),s._v(".47.180:3306\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" User-Agent: curl/7.79.1\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Accept: */*\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n* Received HTTP/0.9 when not allowed\n* Closing connection "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ncurl: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Received HTTP/0.9 when not allowed\n\n➜  remote-ssh git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ✗ mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139.9")]),s._v(".47.180 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("\nEnter password:\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1130")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": Host "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'222.244.139.174'")]),s._v(" is not allowed to connect to this MySQL server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"_3-2-改表法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-改表法"}},[s._v("#")]),s._v(" 3.2.改表法")]),s._v(" "),a("p",[s._v('​\t可能是你的帐号不允许从远程登陆，只能在localhost。这个时候只要在localhost的那台电脑，登入mysql后，更改"mysql" 数据库里的 "user" 表里的 "host"项，从"localhost"改称"'),a("code",[s._v("%")]),s._v('"')]),s._v(" "),a("p",[s._v("​\t然后重启：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use mysql\nReading table information "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" completion of table and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" names\nYou can turn off this feature to get a quicker startup with "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n\nDatabase changed\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" update user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRows matched: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Changed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  Warnings: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery OK, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" host, user from user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+-----------+------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" user             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" %         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" root             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" debian-sys-maint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql.session    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql.sys        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"_4-使用navicat-premium连接远程mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用navicat-premium连接远程mysql"}},[s._v("#")]),s._v(" 4.使用navicat premium连接远程mysql")]),s._v(" "),a("h2",{attrs:{id:"其他扩充视野"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他扩充视野"}},[s._v("#")]),s._v(" 其他扩充视野")]),s._v(" "),a("p",[s._v("MySQL修改密码时，报错ERROR 1064 (42000)【新版MySQL修改密码命令有所变更】")]),s._v(" "),a("ul",[a("li",[s._v("参考"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_45242865/article/details/118227786?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-118227786-blog-105611976.235%5Ev27%5Epc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-118227786-blog-105611976.235%5Ev27%5Epc_relevant_multi_platform_whitelistv3&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"}},[s._v("资料"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"另一个可能导致采用任何密码登录都能通过「但是没遇到过」"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#另一个可能导致采用任何密码登录都能通过「但是没遇到过」"}},[s._v("#")]),s._v(" 另一个可能导致采用任何密码登录都能通过「但是没遇到过」")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/wangqing84411433/article/details/107186132",target:"_blank",rel:"noopener noreferrer"}},[s._v("原因"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("若上述配置文件中有skip-grant-tables，则无论输入什么密码，都会通过\n\nroot@iZf8z28a8ucyohw2pxd11dZ:/usr/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep -r skip ./mysql*")]),s._v("\ngrep: ./mysql: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqladmin: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlanalyze: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlbinlog: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlcheck: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysql_config_editor: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\n./mysqld_safe:  --skip-kill-mysqld         Don't try to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" stray mysqld processes\n./mysqld_safe:  --skip-syslog              Log messages to error log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n./mysqld_safe:      --skip-kill-mysqld*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KILL_MYSQLD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n./mysqld_safe:      --skip-syslog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("want_syslog")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngrep: ./mysqldump: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlimport: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysql_migrate_keyring: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqloptimize: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlpump: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlrepair: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\n./mysqlreport:      next "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" /^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("+/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# skip divider lines")]),s._v("\n./mysqlreport:      next "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" /^$/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# skip blank lines")]),s._v("\ngrep: ./mysql_secure_installation: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlshow: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysqlslap: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysql_ssl_rsa_setup: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\ngrep: ./mysql_upgrade: binary "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" matches\nroot@iZf8z28a8ucyohw2pxd11dZ:/usr/bin"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"附录-搭建mysql学习环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录-搭建mysql学习环境"}},[s._v("#")]),s._v(" 附录-搭建mysql学习环境")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @@basedir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  //安装目录\n+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" @@basedir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /usr/     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @@datadir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  //数据目录\n+-----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" @@datadir       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" /var/lib/mysql/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);