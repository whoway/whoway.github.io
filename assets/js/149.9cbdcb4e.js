(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{426:function(a,s,t){"use strict";t.r(s);var r=t(13),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux工程场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux工程场景"}},[a._v("#")]),a._v(" Linux工程场景")]),a._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[a._v('<font style="background:yellow">\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#目录"}},[a._v("目录")])]),s("li",[s("a",{attrs:{href:"#✔️公司ubuntu的环境配置"}},[a._v("✔️公司Ubuntu的环境配置")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-默认使用-sh-而不是-bash-导致的问题"}},[a._v("1.默认使用sh而不是bash导致的问题")])])])]),s("li",[s("a",{attrs:{href:"#✔️代码获取"}},[a._v("✔️代码获取")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-解压缩-tar双后缀"}},[a._v("1.解压缩-tar双后缀")])]),s("li",[s("a",{attrs:{href:"#_2-解压缩-单后缀"}},[a._v("2.解压缩-单后缀")])]),s("li",[s("a",{attrs:{href:"#_3-linux命令-返回上一次目录"}},[a._v("3.linux命令：返回上一次目录")])]),s("li",[s("a",{attrs:{href:"#_4-shell中5种括号的作用-、-、-、-、"}},[a._v("4.shell中5种括号的作用()、(())、[]、[[]]、{}")])]),s("li",[s("a",{attrs:{href:"#_5-rm的记忆法⭐️"}},[a._v("5.rm的记忆法⭐️")])])])]),s("li",[s("a",{attrs:{href:"#✔️代码提交"}},[a._v("✔️代码提交")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-linux-下文件夹的复制、覆盖以及确认问题解决"}},[a._v("1.linux 下文件夹的复制、覆盖以及确认问题解决")])]),s("li",[s("a",{attrs:{href:"#_2-linux你的用户下各种小玩意"}},[a._v("2.Linux你的用户下各种小玩意")])]),s("li",[s("a",{attrs:{href:"#bash-history"}},[a._v(".bash_history")])]),s("li",[s("a",{attrs:{href:"#bash-logout"}},[a._v(".bash_logout")])]),s("li",[s("a",{attrs:{href:"#bashrc"}},[a._v(".bashrc")])]),s("li",[s("a",{attrs:{href:"#gitconfig"}},[a._v(".gitconfig")])]),s("li",[s("a",{attrs:{href:"#profile"}},[a._v(".profile")])]),s("li",[s("a",{attrs:{href:"#viminfo"}},[a._v(".viminfo")])]),s("li",[s("a",{attrs:{href:"#vimrc"}},[a._v(".vimrc")])])])]),s("li",[s("a",{attrs:{href:"#e6-纯键盘操作电脑"}},[a._v("E6.纯键盘操作电脑")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-电脑-纯命令行"}},[a._v("1.电脑+纯命令行")])]),s("li",[s("a",{attrs:{href:"#_2-chrome-插件vimium"}},[a._v("2.chrome+插件vimium")])]),s("li",[s("a",{attrs:{href:"#_3-hunt-and-peck-hap"}},[a._v("3.hunt and peck（hap）")])])])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[a._v("参考资料")])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[a._v("参考资料")])])])]),s("p"),a._v(" "),s("p",[a._v("[TOC]")]),a._v(" "),s("h2",{attrs:{id:"✔️公司ubuntu的环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✔️公司ubuntu的环境配置"}},[a._v("#")]),a._v(" ✔️公司Ubuntu的环境配置")]),a._v(" "),s("h3",{attrs:{id:"_1-默认使用sh而不是bash导致的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认使用sh而不是bash导致的问题"}},[a._v("#")]),a._v(" 1.默认使用"),s("code",[a._v("sh")]),a._v("而不是"),s("code",[a._v("bash")]),a._v("导致的问题")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$SHELL")]),a._v("\n/bin/sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("（1）键盘的方向键，不能上下翻页了")]),a._v(" "),s("p",[a._v("（2）不能够Ctrl+L快捷键")]),a._v(" "),s("p",[a._v("（3）ll也定义了别名，并不存在")]),a._v(" "),s("p",[a._v("（4）TAB不能自动补全")]),a._v(" "),s("p",[a._v("解决方案，改为bash")]),a._v(" "),s("p",[s("font",{staticStyle:{background:"yellow"}},[a._v("非管理员修改shell")])],1),a._v(" "),s("ul",[s("li",[a._v("如果你"),s("strong",[a._v("没有管理员权限")]),a._v(", 那么你"),s("strong",[a._v("只能修改自己的 Shell")]),a._v(", 输入 "),s("font",{staticStyle:{background:"yellow"}},[a._v("chsh")]),a._v(" 命令.")],1)]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("chsh\nEnter the new value, or press ENTER "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" the default\nLogin Shell "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("/bin/sh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(":/bin/bash\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[a._v("这样，你下次"),s("font",{staticStyle:{background:"yellow"}},[a._v("远程登录")]),a._v("也能"),s("strong",[a._v("默认")]),a._v("用bash了")],1)]),a._v(" "),s("h2",{attrs:{id:"✔️代码获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✔️代码获取"}},[a._v("#")]),a._v(" ✔️代码获取")]),a._v(" "),s("h3",{attrs:{id:"_1-解压缩-tar双后缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-解压缩-tar双后缀"}},[a._v("#")]),a._v(" 1.解压缩-tar双后缀")]),a._v(" "),s("ul",[s("li",[a._v("解压缩,解压缩到当前目录")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" temp.tar.gz "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-C")]),a._v(" ./\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[s("font",{staticStyle:{background:"yellow"}},[a._v("记忆法")])],1)]),a._v(" "),s("li",[s("p",[s("font",{staticStyle:{background:"yellow"}},[a._v("第1部分「解决用途」")])],1),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("-c")]),a._v(": 「create」建立压缩档案")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("-x")]),a._v("：解压「"),s("font",{staticStyle:{background:"yellow"}},[a._v("联想记忆：rwx的x是执行，就当“执行”是解压吧")])],1)]),a._v(" "),s("li",[s("p",[s("code",[a._v("-t")]),a._v("：查看内容")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("-r")]),a._v("：向压缩归档文件末尾追加文件")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("-u")]),a._v("：「update」更新原压缩包中的文件")])]),a._v(" "),s("li",[s("p",[a._v("这五个是独立的命令，压缩解压都要用到其中一个，"),s("font",{staticStyle:{background:"pink"}},[a._v("可以和别的命令连用"),s("strong",[a._v("但只能用其中一个")])]),a._v("。下面的参数是根据需要在压缩或解压档案时可选的。")],1)])])]),a._v(" "),s("li",[s("p",[s("font",{staticStyle:{background:"yellow"}},[a._v("第2部分「解决后缀」")])],1),a._v(" "),s("ul",[s("li",[s("code",[a._v("-z")]),a._v("：「对应test."),s("strong",[a._v("tar.gz")]),a._v("，记忆就是尾巴是z」有gzip属性的")]),a._v(" "),s("li",[s("code",[a._v("-j")]),a._v("：「对应test."),s("strong",[a._v("tar.bz")]),a._v("，这个强行记忆」有bz2属性的")]),a._v(" "),s("li",[s("code",[a._v("-Z")]),a._v("：有compress属性的")]),a._v(" "),s("li",[s("code",[a._v("-v")]),a._v("：「常用」显示所有过程")]),a._v(" "),s("li",[a._v("-O：将文件解开到标准输出")])])]),a._v(" "),s("li",[s("p",[s("font",{staticStyle:{background:"yellow"}},[a._v("第3部分「必选，只能放最后！」")])],1),a._v(" "),s("ul",[s("li",[s("code",[a._v("-f")]),a._v(": 使用档案名字，切记，"),s("font",{staticStyle:{background:"pink"}},[a._v("这个参数是"),s("strong",[a._v("最后一个参数")]),a._v("，"),s("strong",[a._v("后面只能接档案名")])]),a._v("。")],1)])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -cf all.tar *.jpg")]),a._v("\n这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -rf all.tar *.gif")]),a._v("\n这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -uf all.tar logo.gif")]),a._v("\n这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -tf all.tar")]),a._v("\n这条命令是列出all.tar包中所有文件，-t是列出文件的意思\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# tar -xf all.tar")]),a._v("\n这条命令是解出all.tar包中所有文件，-t是解开的意思\n\n压缩\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cvf")]),a._v(" jpg.tar *.jpg //将目录里所有jpg文件打包成tar.jpg \n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-czf")]),a._v(" jpg.tar.gz *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz\n\n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cjf")]),a._v(" jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-cZf")]),a._v(" jpg.tar.Z *.jpg   //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rar")]),a._v(" a jpg.rar *.jpg //rar格式的压缩，需要先下载rar "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" linux\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" jpg.zip *.jpg //zip格式的压缩，需要先下载zip "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" linux\n\n\n\n解压\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" file.tar //解压 tar包\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xzvf")]),a._v(" file.tar.gz //解压tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xjvf")]),a._v(" file.tar.bz2   //解压 tar.bz2\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xZvf")]),a._v(" file.tar.Z   //解压tar.Z\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unrar")]),a._v(" e file.rar //解压rar\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" file.zip //解压zip\n\n//解压文件重命名⭐️为temp\nwhoway@XXXXX:~/.vim$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" taglist_46.zip "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" temp\t\t⭐️\nArchive:  taglist_46.zip\n  inflating: teee/plugin/taglist.vim  \n  inflating: teee/doc/taglist.txt\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br"),s("span",{staticClass:"line-number"},[a._v("50")]),s("br"),s("span",{staticClass:"line-number"},[a._v("51")]),s("br")])]),s("h3",{attrs:{id:"_2-解压缩-单后缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压缩-单后缀"}},[a._v("#")]),a._v(" 2.解压缩-单后缀")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("1、"),s("code",[a._v("*.tar")]),a._v(" 用 "),s("code",[a._v("tar -xvf")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("2、"),s("code",[a._v("*.gz")]),a._v(" 用 "),s("code",[a._v("gzip -d")]),a._v("或者"),s("code",[a._v("gunzip")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("3、"),s("code",[a._v("*.tar.gz")]),a._v("和"),s("code",[a._v("*.tgz")]),a._v(" 用 "),s("code",[a._v("tar -xzf")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("4、"),s("code",[a._v("*.bz2")]),a._v(" 用 "),s("code",[a._v("bzip2 -d")]),a._v("或者用"),s("code",[a._v("bunzip2")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("5、"),s("code",[a._v("*.tar.bz2")]),a._v("用"),s("code",[a._v("tar -xjf")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("6、"),s("code",[a._v("*.Z")]),a._v(" 用 "),s("code",[a._v("uncompress")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("7、"),s("code",[a._v("*.tar.Z")]),a._v(" 用"),s("code",[a._v("tar -xZf")]),a._v(" 解压")])]),a._v(" "),s("li",[s("p",[a._v("8、"),s("code",[a._v("*.rar")]),a._v(" 用 "),s("code",[a._v("unrar e")]),a._v("解压")])]),a._v(" "),s("li",[s("p",[a._v("9、"),s("code",[a._v("*.zip")]),a._v(" 用 "),s("code",[a._v("unzip")]),a._v(" 解压")])])]),a._v(" "),s("blockquote",[s("p",[a._v("参考资料："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/iKwmdOxBkaEKItHyZZke9w",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://mp.weixin.qq.com/s/iKwmdOxBkaEKItHyZZke9w"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"_3-linux命令-返回上一次目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux命令-返回上一次目录"}},[a._v("#")]),a._v(" 3.linux命令：返回上一次目录")]),a._v(" "),s("p",[a._v("有时候千辛万苦进入了一个很深层的目录，一不小心输入了cd并回车，有什么办法快速回到刚才所在的目录呢？对于bash来说，只需要很管理的一个命令：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("cd -")])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("该命令等同于cd "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$OLDPWD")]),a._v("，关于这一点在bash的手册页"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可使用命令man bash访问其手册页"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("中有介绍：\n\nAn argument of - is equivalent to "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$OLDPWD")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n并且它还会返回上一次目录的物理路径。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"_4-shell中5种括号的作用-、-、-、-、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-shell中5种括号的作用-、-、-、-、"}},[a._v("#")]),a._v(" 4.shell中5种括号的作用"),s("code",[a._v("()")]),a._v("、"),s("code",[a._v("(())")]),a._v("、"),s("code",[a._v("[]")]),a._v("、"),s("code",[a._v("[[]]")]),a._v("、"),s("code",[a._v("{}")])]),a._v(" "),s("ul",[s("li",[a._v("参考自："),s("a",{attrs:{href:"https://blog.csdn.net/taiyang1987912/article/details/39551385",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/taiyang1987912/article/details/39551385"),s("OutboundLink")],1),a._v(" "),s("ul",[s("li",[a._v("一篇神一般的总结")])])])]),a._v(" "),s("p",[a._v("记忆方法：")]),a._v(" "),s("ul",[s("li",[a._v("2组，"),s("code",[a._v("()")]),a._v("和"),s("code",[a._v("(())")])]),a._v(" "),s("li",[a._v("2组，"),s("code",[a._v("[]")]),a._v("和"),s("code",[a._v("[[]]")])]),a._v(" "),s("li",[a._v("1组，"),s("code",[a._v("{}")])])]),a._v(" "),s("h4",{attrs:{id:"_4-1-单小括号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-单小括号"}},[a._v("#")]),a._v(" 4.1.单小括号 "),s("code",[a._v("()")])]),a._v(" "),s("ul",[s("li",[a._v("①命令组")])]),a._v(" "),s("p",[a._v("括号中的命令将会"),s("strong",[a._v("新开一个子shell")]),a._v("顺序执行，所以括号中的变量不能够被脚本余下的部分使用。")]),a._v(" "),s("p",[a._v("括号中多个命令之间用分号隔开，最后一个命令可以没有分号，各命令和括号之间不必有空格。")]),a._v(" "),s("ul",[s("li",[a._v("②命令替换")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("等同于"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("cmd"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("，shell扫描一遍命令行，发现了"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cmd"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("结构，便将"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("cmd"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("中的cmd执行一次，得到其标准输出，再将此输出放到原来命令。有些shell不支持，如tcsh。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("③用于初始化数组")])]),a._v(" "),s("p",[a._v("如："),s("code",[a._v("array=(a b c d)")])]),a._v(" "),s("h4",{attrs:{id:"_4-2-双小括号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-双小括号"}},[a._v("#")]),a._v(" 4.2.双小括号"),s("code",[a._v("(( ))")])]),a._v(" "),s("ul",[s("li",[a._v("①整数扩展。")])]),a._v(" "),s("p",[a._v('这种扩展计算是整数型的计算，不支持浮点型。((exp))结构扩展并计算一个算术表达式的值，如果表达式的结果为0，那么返回的退出状态码为1，或者 是"假"，而一个非零值的表达式所返回的退出状态码将为0，或者是"true"。若是逻辑判断，表达式exp为真则为1,假则为0。')]),a._v(" "),s("ul",[s("li",[a._v("②只要括号中的运算符、表达式符合C语言运算规则，都可用在"),s("code",[a._v("$((exp))")]),a._v("中，甚至是三目运算符。")])]),a._v(" "),s("p",[a._v("作不同进位(如二进制、八进制、十六进制)运算时，输出结果全都自动转化成了十进制。如："),s("code",[a._v("echo $((16#5f))")]),a._v(" 结果为95 (16进位转十进制)")]),a._v(" "),s("ul",[s("li",[a._v("③单纯用 (( )) 也可"),s("strong",[a._v("重定义变量值")])])]),a._v(" "),s("p",[a._v("比如 a=5; ((a++)) 可将 $a 重定义为6")]),a._v(" "),s("ul",[s("li",[a._v("④常用于算术运算比较，双括号中的变量可以不使用"),s("code",[a._v("$")]),a._v("符号前缀。")])]),a._v(" "),s("p",[a._v("括号内支持多个表达式用逗号分开。 只要括号中的表达式符合C语言运算规则,比如可以直接使用for((i=0;i<5;i++)), 如果不使用双括号, 则为for i in "),s("code",[a._v("seq 0 4")]),a._v("或者"),s("code",[a._v("for i in {0..4}")]),a._v("。再如可以直接使用"),s("code",[a._v("if (($i<5)), 如果不使用双括号, 则为if [ $i -lt 5 ]。")])]),a._v(" "),s("h3",{attrs:{id:"_5-rm的记忆法⭐️"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-rm的记忆法⭐️"}},[a._v("#")]),a._v(" 5.rm的记忆法⭐️")]),a._v(" "),s("h4",{attrs:{id:"_5-1-linux-rm删除-指定文件外⭐️-的其他文件方法汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-linux-rm删除-指定文件外⭐️-的其他文件方法汇总"}},[a._v("#")]),a._v(" 5.1.Linux  rm删除（指定文件外⭐️）的"),s("a",{attrs:{href:"https://blog.51cto.com/lookingdream/1895948",target:"_blank",rel:"noopener noreferrer"}},[a._v("其他文件方法汇总"),s("OutboundLink")],1)]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("XXX@XXXX:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\nABOUT-NLS        solve.cpp cfo-branch.zip     Makefile.def        mkdep         README.SCO      zlib\nXXX@XXXX:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cfo-branch.zip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("solve.cpp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\t\nXXX@XXXX:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\ncfo-branch.zip  solve.cpp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("ul",[s("li",[a._v("我的记忆法：这是数学上集合的概念："),s("code",[a._v("!")]),a._v("表示逻辑的"),s("strong",[a._v("补集")])]),a._v(" "),s("li",[a._v("显然，我们做法是删掉补集就是告诉我们留下里面的")])]),a._v(" "),s("h2",{attrs:{id:"✔️代码提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#✔️代码提交"}},[a._v("#")]),a._v(" ✔️代码提交")]),a._v(" "),s("h3",{attrs:{id:"_1-linux-下文件夹的复制、覆盖以及确认问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-下文件夹的复制、覆盖以及确认问题解决"}},[a._v("#")]),a._v(" 1.linux 下文件夹的复制、覆盖以及确认问题解决")]),a._v(" "),s("ul",[s("li",[a._v("问覆盖")]),a._v(" "),s("li",[a._v("https://blog.csdn.net/QH_JAVA/article/details/51597604")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux gcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ls")]),a._v("\nsolve.cpp\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux gcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cd ..")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ls")]),a._v("\ngcc  myfrp  solve.cpp  webserver\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentosLinux ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cp solve.cpp gcc/")]),a._v("\ncp: overwrite ‘gcc/solve.cpp’? y\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"_2-linux你的用户下各种小玩意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux你的用户下各种小玩意"}},[a._v("#")]),a._v(" 2.Linux你的用户下各种小玩意")]),a._v(" "),s("h3",{attrs:{id:"bash-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash-history"}},[a._v("#")]),a._v(" "),s("code",[a._v(".bash_history")])]),a._v(" "),s("ul",[s("li",[a._v("应用场景：有公司用户为你复现了某代码，可以用这个查看历史")]),a._v(" "),s("li",[a._v("清除linux的history 命令历史记录"),s("code",[a._v("history -c")])]),a._v(" "),s("li",[a._v(".bash_history是bash shell的历史记录文件，里面记录了你在bash shell中输入的所有命令。可通过HISSIZE环境变量设置在历史记录文件里保存记录的条数")])]),a._v(" "),s("h3",{attrs:{id:"bash-logout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash-logout"}},[a._v("#")]),a._v(" "),s("code",[a._v(".bash_logout")])]),a._v(" "),s("ul",[s("li",[a._v("bash_logout在退出shell时被读取。所以我们可把一些清理工作的命令放到这文件中")])]),a._v(" "),s("h3",{attrs:{id:"bashrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bashrc"}},[a._v("#")]),a._v(" "),s("code",[a._v(".bashrc")])]),a._v(" "),s("h3",{attrs:{id:"gitconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitconfig"}},[a._v("#")]),a._v(" "),s("code",[a._v(".gitconfig")])]),a._v(" "),s("h3",{attrs:{id:"profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#profile"}},[a._v("#")]),a._v(" "),s("code",[a._v(".profile")])]),a._v(" "),s("ul",[s("li",[a._v("在 ==/etc目录==的bashrc和profile是系统级（全局）的配置文件，当在==用户主目录==下找不到.bash_profile 和.bashrc时，就会读取这两个文件。")])]),a._v(" "),s("h3",{attrs:{id:"viminfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viminfo"}},[a._v("#")]),a._v(" "),s("code",[a._v(".viminfo")])]),a._v(" "),s("h3",{attrs:{id:"vimrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vimrc"}},[a._v("#")]),a._v(" "),s("code",[a._v(".vimrc")])]),a._v(" "),s("ul",[s("li",[a._v("resource，资源")])]),a._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[a._v("# `.ssh`文件夹\n\n# `.cache`文件夹\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"e6-纯键盘操作电脑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#e6-纯键盘操作电脑"}},[a._v("#")]),a._v(" E6.纯键盘操作电脑")]),a._v(" "),s("h3",{attrs:{id:"_1-电脑-纯命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-电脑-纯命令行"}},[a._v("#")]),a._v(" 1.电脑+纯命令行")]),a._v(" "),s("ul",[s("li",[a._v("Mac或Windows")])]),a._v(" "),s("h3",{attrs:{id:"_2-chrome-插件vimium"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-chrome-插件vimium"}},[a._v("#")]),a._v(" 2.chrome+插件vimium")]),a._v(" "),s("ul",[s("li",[a._v("d向下翻半页")]),a._v(" "),s("li",[a._v("u向上翻半页")]),a._v(" "),s("li",[a._v("B启用浏览器")]),a._v(" "),s("li",[a._v("gs查看源码")]),a._v(" "),s("li",[a._v("r刷新")]),a._v(" "),s("li",[a._v("==o   从URL、书签、历史记录中搜索地址，回车打开==")]),a._v(" "),s("li",[a._v("==x关闭当前页面==")]),a._v(" "),s("li",[s("code",[a._v("shift+/")]),a._v("：打开Vimium帮助，设置。")])]),a._v(" "),s("p",[a._v("j和k和vim一致")]),a._v(" "),s("blockquote",[s("p",[a._v("参考资料：vimium 成神之路，https://zhuanlan.zhihu.com/p/64533566")])]),a._v(" "),s("h3",{attrs:{id:"_3-hunt-and-peck-hap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-hunt-and-peck-hap"}},[a._v("#")]),a._v(" 3.hunt and peck（hap）")]),a._v(" "),s("p",[a._v("如果喜欢使用键盘控制一切，hunt and peck（hap）")]),a._v(" "),s("ul",[s("li",[a._v("激活hap的快捷键是 =="),s("code",[a._v("alt + ;")]),a._v("== ，我们无法直接更改，作者的建议是使用AutoHotKey等类似的程序设置一个自定义热键启动带/hint参数的hap，hint会起到直接激活的作用。")])]),a._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[a._v("键盘")])]),a._v(" "),s("h2",{attrs:{id:"参考资料-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/he520478/article/details/45219279",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux 修改用户默认shell"),s("OutboundLink")],1),a._v("（转）")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/Jerry_1126/article/details/85224737",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux中的shell如何切换"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);