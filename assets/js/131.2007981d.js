(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{408:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"make的写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make的写法"}},[a._v("#")]),a._v(" make的写法")]),a._v(" "),s("ul",[s("li",[a._v("GNU/make的官网："),s("a",{attrs:{href:"https://www.gnu.org/software/make/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.gnu.org/software/make/"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[a._v("#")]),a._v(" 目录")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#目录"}},[a._v("目录")])]),s("li",[s("a",{attrs:{href:"#make和makefile"}},[a._v("make和Makefile")])]),s("li",[s("a",{attrs:{href:"#_1-介绍makefile"}},[a._v("1.介绍Makefile")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-工程场景"}},[a._v("1.1.工程场景")])])])]),s("li",[s("a",{attrs:{href:"#_2-makefile-文件命名和规则"}},[a._v("2.Makefile 文件命名和规则")])]),s("li",[s("a",{attrs:{href:"#_3-工作原理"}},[a._v("3.工作原理")]),s("ul",[s("li",[s("a",{attrs:{href:"#增量编译-✔"}},[a._v("(增量编译)✔")])])])]),s("li",[s("a",{attrs:{href:"#_4-变量"}},[a._v("4.变量")])]),s("li",[s("a",{attrs:{href:"#_5-模式匹配"}},[a._v("5.模式匹配")])]),s("li",[s("a",{attrs:{href:"#_6-函数"}},[a._v("6.函数")])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[a._v("参考资料")])])])]),s("p"),a._v(" "),s("p",[a._v("[toc]")]),a._v(" "),s("h2",{attrs:{id:"make和makefile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make和makefile"}},[a._v("#")]),a._v(" make和Makefile")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("make是一个命令工具，是一个解释makefile中指令的命令工具")])])]),a._v(" "),s("h2",{attrs:{id:"_1-介绍makefile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍makefile"}},[a._v("#")]),a._v(" 1.介绍Makefile")]),a._v(" "),s("p",[a._v("什么是 Makefile")]),a._v(" "),s("p",[a._v("一个工程中的源文件不计其数，其按类型、功能、模块分别放在若干个目录中， Makefile 文件定义了一系列的规则来指定哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为 Makefile 文件就 像一个 Shell 脚本一样，也可以执行操作系统的命令。")]),a._v(" "),s("p",[a._v("Makefile 带来的好处就是“自动化编译” ，一旦写好，只需要一个 make 命令，整 个工程完全自动编译，极大的提高了软件开发的效率。"),s("strong",[a._v("make 是一个命令工具")]),a._v("，是"),s("strong",[a._v("一个 解释Makefile 文件中指令的命令工具")]),a._v("，一般来说，大多数的 IDE 都有这个命令， 比如")]),a._v(" "),s("ul",[s("li",[a._v("Delphi 的 make")]),a._v(" "),s("li",[a._v("Visual C++ 的 nmake")]),a._v(" "),s("li",[a._v("==Linux 下 GNU 的 make==")])]),a._v(" "),s("h3",{attrs:{id:"_1-1-工程场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-工程场景"}},[a._v("#")]),a._v(" 1.1.工程场景")]),a._v(" "),s("ul",[s("li",[a._v("工程场景：当你调试代码的时候，遇到这样的场景，到各种路径，添加环境变量\n"),s("ul",[s("li",[a._v("然后编译的时候一堆的选项，并且生成一堆文件，如何解决麻烦？makefile✔")])])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$gcc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" -gdwarf-2 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Os")]),a._v(" -fno-pic -fno-builtin  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Wall")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-nostdlib")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-std")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("c99 -fno-exceptions "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pipe")]),a._v(" -fno-aggressive-loop-optimizations -Winvalid-pch -fno-short-enums "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-S")]),a._v(" test.c\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-makefile-文件命名和规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-makefile-文件命名和规则"}},[a._v("#")]),a._v(" 2.Makefile 文件命名和规则")]),a._v(" "),s("p",[a._v("文件命名")]),a._v(" "),s("ul",[s("li",[a._v("makefile 或者 Makefile")])]),a._v(" "),s("p",[a._v("Makefile 规则")]),a._v(" "),s("ul",[s("li",[a._v("一个 Makefile 文件中可以有一个或者多个规则")])]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("目标 ...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 依赖 ...\n命令（Shell 命令）\n...\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[a._v("⚫ 目标：==最终要生成的文件==（伪目标除外）")]),a._v(" "),s("li",[a._v("⚫ 依赖：生成目标==所需要==的文件或是目标")]),a._v(" "),s("li",[a._v("⚫ 命令：通过执行命令对"),s("strong",[a._v("依赖")]),a._v("操作生成目标（命令前必须 Tab 缩进）")]),a._v(" "),s("li",[a._v("Makefile 中的其它规则一般都是为第一条规则服务的。")])]),a._v(" "),s("h2",{attrs:{id:"_3-工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-工作原理"}},[a._v("#")]),a._v(" 3.工作原理")]),a._v(" "),s("p",[a._v("命令在执行之前，需要先检查规则中的依赖是否存在")]),a._v(" "),s("ul",[s("li",[a._v("如果存在，执行命令")]),a._v(" "),s("li",[a._v("如果不存在，向下检查其它的规则，检查有没有一个规则是用来生成这个依赖的， 如果找到了，则执行该规则中的命令")])]),a._v(" "),s("h3",{attrs:{id:"增量编译-✔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增量编译-✔"}},[a._v("#")]),a._v(" (增量编译)✔")]),a._v(" "),s("p",[a._v("检测更新，在执行规则中的命令时，会比较目标和依赖文件的时间")]),a._v(" "),s("ul",[s("li",[a._v("如果依赖的时间比目标的时间晚，需要重新生成目标")]),a._v(" "),s("li",[a._v("如果依赖的时间比目标的时间早，目标不需要更新，对应规则中的命令不需要被执行")])]),a._v(" "),s("h2",{attrs:{id:"_4-变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-变量"}},[a._v("#")]),a._v(" 4.变量")]),a._v(" "),s("p",[a._v("◼自定义变量\n变量名=变量值 var=hello\t$(var)")]),a._v(" "),s("p",[a._v("◼ ==预定义变量==")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("AR "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 归档维护程序的名称，默认值为 ar\t\t\tapp:main.c a.c b.c\nCC "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" C 编译器的名称，默认值为 cc\t\t\tgcc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" main.c a.c b.c\nCXX "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" C++ 编译器的名称，默认值为 g++\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 目标的完整名称\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#自动变量只能在规则的命令中使用")]),a._v("\n$"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 第一个依赖文件的名称\t\t\t\tapp:main.c a.c b.c\n$^ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 所有的依赖文件\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("CC"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" $^ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("◼ 获取变量的值")]),a._v(" "),s("div",{staticClass:"language-ma line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$(变量名)\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_5-模式匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-模式匹配"}},[a._v("#")]),a._v(" 5.模式匹配")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("add.o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("add.c\ngcc -c add.c\n\n"),s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("div.o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("div.c\t\t\t%.o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("%.c\ngcc -c div.c\n"),s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("sub.o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("sub.c\ngcc -c sub.c\n"),s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("mult.o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mult.c\ngcc -c mult.c\n"),s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("main.o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("main.c\ngcc -c main.c\n\n"),s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("- %")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 通配符，匹配一个字符串\n- 两个%匹配的是同一个字符串\n\n"),s("span",{pre:!0,attrs:{class:"token target symbol"}},[a._v("%.o")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("%.c\ngcc -c "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$<")]),a._v(" -o "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$@")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h2",{attrs:{id:"_6-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-函数"}},[a._v("#")]),a._v(" 6.函数")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("$(wildcard PATTERN...)")])])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" 功能：获取指定目录下指定类型的文件列表\n\n 参数：PATTERN 指的是某个或多个目录下的对应的某种类型的文件，如果有多个目录，一般使用空格间隔\n\n 返回：得到的若干个文件的文件列表，文件名之间使用空格间隔\n\n 示例：\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("wildcard *.c ./sub/*.c"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n返回值格式: a.c b.c c.c d.c e.c f.c\n\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("patsubst "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(","),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("replacement"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(","),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n 功能：查找"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("text"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("中的单词"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("单词以“空格”、“Tab”或“回车”“换行”分隔"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("是否符合模式"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("，如果匹配的话，则以"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("replacement"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("替换。\n\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("可以包括通配符"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("%"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("，表示任意长度的字串。如果"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("replacement"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("中也包含"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("%"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("，那么，"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("replacement"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("中的这个"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("%"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("将是"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("中的那个%所代表的字串。"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("可以用"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("来转义，以"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("%"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("来表示真实含义的"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("%"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("字符"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n 返回：函数返回被替换过后的字符串\n\n 示例：\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("patsubst %.c, %.o, x.c bar.c"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n返回值格式: x.o bar.o\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br")])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[a._v("陈皓，跟我一起写Makefile\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://seisman.github.io/how-to-write-makefile/overview.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("跟我一起写Makefile1.0"),s("OutboundLink")],1)])])]),a._v(" "),s("li",[a._v("nowcoder上『高性能服务器开发』笔记")])])])}),[],!1,null,null,null);s.default=r.exports}}]);