(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{456:function(t,l,i){"use strict";i.r(l);var s=i(14),a=Object(s.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"工程协助术语"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#工程协助术语"}},[t._v("#")]),t._v(" 工程协助术语")]),t._v(" "),l("h2",{attrs:{id:"目录"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),l("p"),l("div",{staticClass:"table-of-contents"},[l("ul",[l("li",[l("a",{attrs:{href:"#目录"}},[t._v("目录")])]),l("li",[l("a",{attrs:{href:"#_1-基线是什么"}},[t._v("1.基线是什么？")])]),l("li",[l("a",{attrs:{href:"#_2-代码风格-格式修改为gnu风格"}},[t._v("2.代码风格[格式修改为GNU风格]")])]),l("li",[l("a",{attrs:{href:"#_3-c函数库-libc-glibc-uclibc-newlib"}},[t._v("3.C函数库 （libc,glibc,uClibc,newlib）")])]),l("li",[l("a",{attrs:{href:"#_4-什么是伪指令"}},[t._v("4.什么是伪指令？")])]),l("li",[l("a",{attrs:{href:"#_5-如何理解指令压缩的寄存器约定"}},[t._v("5.如何理解指令压缩的寄存器约定？")])]),l("li",[l("a",{attrs:{href:"#_6-cost-model-「代价模型」"}},[t._v("6.cost model「代价模型」")])])])]),l("p"),t._v(" "),l("p",[t._v("[TOC]")]),t._v(" "),l("h2",{attrs:{id:"_1-基线是什么"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-基线是什么"}},[t._v("#")]),t._v(" 1.基线是什么？")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://blog.csdn.net/lucky_girl11/article/details/70153840",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于基线版本、基线那点事儿"),l("OutboundLink")],1)])]),t._v(" "),l("p",[t._v("基线”是一个很常见的术语，在配置管理和项目管理里面都能看到，而且还有很多衍生的术语")]),t._v(" "),l("ul",[l("li",[t._v("例如基线提升、基线化、基线审计等。 现在我觉得我们通常看到的“基线”这个术语有两个意思：")])]),t._v(" "),l("h2",{attrs:{id:"_2-代码风格-格式修改为gnu风格"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码风格-格式修改为gnu风格"}},[t._v("#")]),t._v(" 2.代码风格[格式修改为GNU风格]")]),t._v(" "),l("ul",[l("li",[t._v("比如需求：华为那边的要求")]),t._v(" "),l("li",[t._v("[格式修改为GNU风格]\n"),l("ul",[l("li",[t._v("1.使用indent软件调整风格")]),t._v(" "),l("li",[t._v("2.人工检查")])])])]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("indent "),l("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-gnu")]),t._v(" libgcc2.c "),l("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" 2021huwei.c\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("h2",{attrs:{id:"_3-c函数库-libc-glibc-uclibc-newlib"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_3-c函数库-libc-glibc-uclibc-newlib"}},[t._v("#")]),t._v(" 3.C函数库 （libc,glibc,uClibc,newlib）")]),t._v(" "),l("ul",[l("li",[l("strong",[t._v("glibc")]),t._v("和"),l("strong",[t._v("libc")]),t._v("都是Linux下的C函数库")]),t._v(" "),l("li",[l("strong",[t._v("libc")]),t._v("是Linux下的"),l("strong",[t._v("ANSI C")]),t._v("的函数库\n"),l("ul",[l("li",[t._v("ANSI C是基本的C语言函数库，包含了C语言最基本的库函数")])])]),t._v(" "),l("li",[l("strong",[t._v("glibc")]),t._v("是Linux下的"),l("strong",[t._v("GUN C")]),t._v("的函数库\n"),l("ul",[l("li",[t._v("GNU C是"),l("strong",[t._v("一种ANSI C的扩展实现")])])])])]),t._v(" "),l("p",[t._v("uClibc 是一个面向嵌入式Linux系统的小型的C标准库。最初uClibc是为了支持uClinux而开发，这是一个不需要内存管理单元（MMU）的Linux版本。uClibc比一般用于Linux发行版的C库GNU C Library (glibc)要小得多， uClibc专注于嵌入式Linux。很多功能可以根据空间需求进行取舍")]),t._v(" "),l("p",[t._v("Newlib是一个面向嵌入式系统的C运行库。最初是由Cygnus Solutions收集组装的一个源代码集合，取名为newlib，现在由Red Hat维护，目前的最新的版本是2.1.0。对于与GNU兼容的嵌入式C运行库，Newlib并不是唯一的选择，但是从成熟度来讲，newlib是最优秀的。newlib可移植性强，具有可重入特性、功能完备等特点，已广泛应用于各种嵌入式系统中。Cygwin目前使用Newlib来作为它的C标准库")]),t._v(" "),l("h2",{attrs:{id:"_4-什么是伪指令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_4-什么是伪指令"}},[t._v("#")]),t._v(" 4.什么是伪指令？")]),t._v(" "),l("ul",[l("li",[l("strong",[t._v("汇编器")]),t._v("的作用不仅仅是从处理器能够理解的指令产生目标代码，还能翻译一 些扩展指令，这些指令对汇编程序员或者编译器的编写者来说通常很有用。这类指令在巧妙 配置常规指令的基础上实现，称为"),l("strong",[t._v("伪指令")])])]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20220312212239.png",alt:"neg"}})]),t._v(" "),l("ul",[l("li",[t._v("比如这样的"),l("strong",[t._v("neg")]),t._v("伪指令，我们实际上「直接把他当做sub XXX」这样的来看待「代码体积就行」")])]),t._v(" "),l("h2",{attrs:{id:"_5-如何理解指令压缩的寄存器约定"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何理解指令压缩的寄存器约定"}},[t._v("#")]),t._v(" 5.如何理解指令压缩的寄存器约定？")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20220312213105.png",alt:"sub"}})]),t._v(" "),l("ul",[l("li",[t._v("压缩")])]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20220312213128.png",alt:"csub"}})]),t._v(" "),l("ul",[l("li",[t._v("c.sub是（7-9）是3位，只能用x8-x15这8（2^3）个\n"),l("ul",[l("li",[t._v("仔细看rd=8+rd'「这些是上面的来源」")])])])]),t._v(" "),l("h2",{attrs:{id:"_6-cost-model「代价模型」"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-cost-model「代价模型」"}},[t._v("#")]),t._v(" 6."),l("code",[t._v("cost model")]),t._v("「代价模型」")]),t._v(" "),l("ul",[l("li",[t._v("inline代价模型")])]),t._v(" "),l("blockquote",[l("p",[t._v("精细化cost model能够获得很多优化")])])])}),[],!1,null,null,null);l.default=a.exports}}]);