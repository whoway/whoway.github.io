(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{447:function(_,v,a){"use strict";a.r(v);var t=a(13),s=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"编译原理笔记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译原理笔记"}},[_._v("#")]),_._v(" 编译原理笔记")]),_._v(" "),v("ul",[v("li",[_._v("中国大学MOOC，"),v("a",{attrs:{href:"https://www.icourse163.org/course/NUDT-1003101005?from=searchPage",target:"_blank",rel:"noopener noreferrer"}},[_._v("编译原理"),v("OutboundLink")],1)]),_._v(" "),v("li",[_._v("哔哩哔哩，编译原理-"),v("a",{attrs:{href:"https://www.bilibili.com/video/BV12741147J3?from=search&seid=14680691575079128415&spm_id_from=333.337.0.0",target:"_blank",rel:"noopener noreferrer"}},[_._v("国防科技大学"),v("OutboundLink")],1),_._v("「抢先观看」")])]),_._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[_._v("#")]),_._v(" 目录")]),_._v(" "),v("blockquote",[v("p",[_._v("课程内容：介绍程序设计语言编译程序构造的基本原理和 基本实现技术")])]),_._v(" "),v("p",[_._v("[TOC]")]),_._v(" "),v("h2",{attrs:{id:"第1讲-引论"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第1讲-引论"}},[_._v("#")]),_._v(" 第1讲 引论")]),_._v(" "),v("h3",{attrs:{id:"_1-1-什么是编译程序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是编译程序"}},[_._v("#")]),_._v(" 1.1 什么是编译程序")]),_._v(" "),v("ul",[v("li",[_._v("翻译程序(Translator)：把某一种语言程序(称为"),v("strong",[_._v("源语言程序")]),_._v(")等价地转换 成另一种语言程序(称为"),v("strong",[_._v("目标语言程序")]),_._v(")的程序")]),_._v(" "),v("li",[_._v("编译程序(Compiler)：把某一种"),v("strong",[_._v("高级语言程序")]),_._v("等价地转换成另一种 "),v("strong",[_._v("低级语言程序")]),_._v("(如汇编语言或机器语言程序)的程序\n"),v("ul",[v("li",[_._v("诊断编译程序(Diagnostic Compiler)")]),_._v(" "),v("li",[_._v("优化编译程序(Optimizing Compiler)")]),_._v(" "),v("li",[_._v("交叉编译程序(Cross Compiler)")]),_._v(" "),v("li",[_._v("可变目标编译程序(Retargetable Compiler)")])])]),_._v(" "),v("li",[_._v("解释程序(Interpreter)：把源语言写的源程序作为输入，但"),v("strong",[_._v("不产生目标 程序")]),_._v("，而是"),v("strong",[_._v("边解释边执行")]),_._v("源程序")])]),_._v(" "),v("h3",{attrs:{id:"_1-2-为什么要学习编译原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-为什么要学习编译原理"}},[_._v("#")]),_._v(" 1.2 为什么要学习编译原理")]),_._v(" "),v("ul",[v("li",[_._v("理解计算系统")]),_._v(" "),v("li",[_._v("设计计算系统")]),_._v(" "),v("li",[_._v("训练计算思维(Computational Thinking)\n"),v("ul",[v("li",[_._v("方法论的提取：Jeannette M. Wing, "),v("a",{attrs:{href:"https://www.cs.cmu.edu/~15110-s13/Wing06-ct.pdf",target:"_blank",rel:"noopener noreferrer"}},[_._v("Computational Thinking"),v("OutboundLink")],1),_._v(", Communications of ACM, Vol.49, No.3, 2006, pp.33-35.")])])])]),_._v(" "),v("div",{staticClass:"language-txt line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-txt"}},[v("code",[_._v("包括一系列广泛的计算机科学的思维方法\n 抽象(Abstraction)\n 自动化\n 问题分解\n 递归\n 权衡\n 保护、冗余、容错、纠错和恢复\n 利用启发式推理来寻求解答\n 在不确定情况下的规划、学习和调度\n ...\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br"),v("span",{staticClass:"line-number"},[_._v("6")]),v("br"),v("span",{staticClass:"line-number"},[_._v("7")]),v("br"),v("span",{staticClass:"line-number"},[_._v("8")]),v("br"),v("span",{staticClass:"line-number"},[_._v("9")]),v("br"),v("span",{staticClass:"line-number"},[_._v("10")]),v("br")])]),v("p",[_._v("编译理论与技术")]),_._v(" "),v("ul",[v("li",[_._v("计算机科学与技术中"),v("strong",[_._v("理论")]),_._v("和"),v("strong",[_._v("实践")]),_._v("相结合的最好典范")]),_._v(" "),v("li",[_._v("ACM图灵奖数据"),v("a",{attrs:{href:"https://amturing.acm.org/bysubject.cfm",target:"_blank",rel:"noopener noreferrer"}},[_._v("网站"),v("OutboundLink")],1)])]),_._v(" "),v("h4",{attrs:{id:"图灵机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图灵机"}},[_._v("#")]),_._v(" 图灵机")]),_._v(" "),v("ul",[v("li",[_._v(" 抽象(Abstraction)")])]),_._v(" "),v("div",{staticClass:"language-txt line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-txt"}},[v("code",[_._v(" 一条无限长的纸带\n 一个读写头\n 一个状态寄存器\n 一套控制读写头工作的规则\n\n图灵机\n 邱奇-图灵论题(The Church-Turing thesis)\n 所有计算或算法都可以由一台图灵机来执行\n 可计算=图灵可计算\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br"),v("span",{staticClass:"line-number"},[_._v("6")]),v("br"),v("span",{staticClass:"line-number"},[_._v("7")]),v("br"),v("span",{staticClass:"line-number"},[_._v("8")]),v("br"),v("span",{staticClass:"line-number"},[_._v("9")]),v("br")])]),v("h3",{attrs:{id:"_1-3-编译过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-编译过程"}},[_._v("#")]),_._v(" 1.3 编译过程")]),_._v(" "),v("h3",{attrs:{id:"_1-4-编译程序的结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-编译程序的结构"}},[_._v("#")]),_._v(" 1.4 编译程序的结构")]),_._v(" "),v("h3",{attrs:{id:"_1-5-编译程序的生成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-编译程序的生成"}},[_._v("#")]),_._v(" 1.5 编译程序的生成")]),_._v(" "),v("h3",{attrs:{id:"_1-6-小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-小结"}},[_._v("#")]),_._v(" 1.6 小结")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20210910103401.png",alt:"image-20210910103401045"}})]),_._v(" "),v("ul",[v("li",[_._v("遍(pass)")]),_._v(" "),v("li",[_._v(' 所谓"遍"， 就是对源程序或源程序的中间表示 从头到尾扫描一次')]),_._v(" "),v("li",[_._v(" 阶段与遍是不同的概念\n"),v("ul",[v("li",[_._v(" 一遍可以由若干段组成")]),_._v(" "),v("li",[_._v(" 一个阶段也可以分若干遍来完成")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20210910103536.png",alt:"image-20210910103536862"}})]),_._v(" "),v("h2",{attrs:{id:"第2讲-高级程序设计语言概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第2讲-高级程序设计语言概述"}},[_._v("#")]),_._v(" 第2讲 高级程序设计语言概述")]),_._v(" "),v("h3",{attrs:{id:"_2-1-常用的高级程序设计语言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-常用的高级程序设计语言"}},[_._v("#")]),_._v(" 2.1 常用的高级程序设计语言")]),_._v(" "),v("p",[_._v("程序本质上是一定字符集上的字符串")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("语法")]),_._v("：一组规则，用它可以形成和产生一个合式(well-formed)的程序")])]),_._v(" "),v("h4",{attrs:{id:"词法规则-单词符号的形成规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#词法规则-单词符号的形成规则"}},[_._v("#")]),_._v(" 词法规则：单词符号的形成规则")]),_._v(" "),v("ul",[v("li",[_._v(" 单词符号是语言中具有独立意义的最基本结构")]),_._v(" "),v("li",[_._v(" 一般包括：常数、标识符、基本字、算符、界符等")]),_._v(" "),v("li",[_._v(" 描述工具："),v("strong",[_._v("有限自动机")])])]),_._v(" "),v("h4",{attrs:{id:"语法规则-语法单位的形成规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#语法规则-语法单位的形成规则"}},[_._v("#")]),_._v(" 语法规则：语法单位的形成规则")]),_._v(" "),v("ul",[v("li",[_._v("语法单位通常包括：表达式、语句、分程序、过程、 函数、程序等;")]),_._v(" "),v("li",[_._v(" 描述工具：上下文无关文法")])]),_._v(" "),v("h3",{attrs:{id:"_2-2-程序设计语言的定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-程序设计语言的定义"}},[_._v("#")]),_._v(" 2.2 程序设计语言的定义")]),_._v(" "),v("h3",{attrs:{id:"_2-3-高级程序设计语言的一般特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-高级程序设计语言的一般特性"}},[_._v("#")]),_._v(" 2.3 高级程序设计语言的一般特性")]),_._v(" "),v("h3",{attrs:{id:"_2-4-小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-小结"}},[_._v("#")]),_._v(" 2.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第3讲-高级程序设计语言的语法描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第3讲-高级程序设计语言的语法描述"}},[_._v("#")]),_._v(" 第3讲 高级程序设计语言的语法描述")]),_._v(" "),v("p",[_._v("3.1 上下文无关文法")]),_._v(" "),v("p",[_._v("3.2 文法与语言")]),_._v(" "),v("p",[_._v("3.3 语法树与二义性")]),_._v(" "),v("p",[_._v("3.4 形式语言鸟瞰")]),_._v(" "),v("p",[_._v("3.5 小结")]),_._v(" "),v("h2",{attrs:{id:"第4讲-词法分析1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第4讲-词法分析1"}},[_._v("#")]),_._v(" 第4讲 词法分析1")]),_._v(" "),v("p",[_._v("4.1 词法分析概述")]),_._v(" "),v("p",[_._v("4.2 词法分析器的设计")]),_._v(" "),v("p",[_._v("4.3 小结")]),_._v(" "),v("h2",{attrs:{id:"第5讲-词法分析2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第5讲-词法分析2"}},[_._v("#")]),_._v(" 第5讲 词法分析2")]),_._v(" "),v("p",[_._v("5.1 词法规则形式化——正规集与正规式")]),_._v(" "),v("p",[_._v("5.2 确定有限自动机")]),_._v(" "),v("p",[_._v("5.3 非确定有限自动机")]),_._v(" "),v("p",[_._v("5.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第6讲-词法分析3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第6讲-词法分析3"}},[_._v("#")]),_._v(" 第6讲 词法分析3")]),_._v(" "),v("p",[_._v("6.1 有限自动机的等价性")]),_._v(" "),v("p",[_._v("6.2 正规式与有限自动机的等价性")]),_._v(" "),v("p",[_._v("6.3 词法分析程序自动生成")]),_._v(" "),v("p",[_._v("第1次单元测试")]),_._v(" "),v("h2",{attrs:{id:"第7讲-语法分析-自上而下分析1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第7讲-语法分析-自上而下分析1"}},[_._v("#")]),_._v(" 第7讲 语法分析——自上而下分析1")]),_._v(" "),v("p",[_._v("7.1 自上而下分析的基本问题")]),_._v(" "),v("p",[_._v("7.2 LL(1)文法——消除文法的左递归")]),_._v(" "),v("p",[_._v("7.3 LL(1)文法——消除回溯")]),_._v(" "),v("p",[_._v("7.4  FIRST和FOLLOW集合的构造")]),_._v(" "),v("p",[_._v("7.5 小结")]),_._v(" "),v("h2",{attrs:{id:"第8讲-语法分析-自上而下分析2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第8讲-语法分析-自上而下分析2"}},[_._v("#")]),_._v(" 第8讲  语法分析——自上而下分析2")]),_._v(" "),v("p",[_._v("8.1 构造递归下降分析器")]),_._v(" "),v("p",[_._v("8.2 扩充的巴科斯范式和语法图")]),_._v(" "),v("p",[_._v("8.3 JavaCC简介")]),_._v(" "),v("p",[_._v("8.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第9讲-语法分析-自上而下分析3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第9讲-语法分析-自上而下分析3"}},[_._v("#")]),_._v(" 第9讲  语法分析——自上而下分析3")]),_._v(" "),v("p",[_._v("9.1 预测分析程序")]),_._v(" "),v("p",[_._v("9.2 预测分析表的构造")]),_._v(" "),v("p",[_._v("9.3 小结")]),_._v(" "),v("h2",{attrs:{id:"第10讲-语法分析-自下而上分析1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第10讲-语法分析-自下而上分析1"}},[_._v("#")]),_._v(" 第10讲  语法分析——自下而上分析1")]),_._v(" "),v("p",[_._v("10.3 分析过程描述")]),_._v(" "),v("p",[_._v("10.4 算符优先文法")]),_._v(" "),v("p",[_._v("10.5 构造优先关系表")]),_._v(" "),v("p",[_._v("10.6 算符优先分析算法")]),_._v(" "),v("p",[_._v("10.7 小结")]),_._v(" "),v("p",[_._v("10.1 自下而上分析")]),_._v(" "),v("p",[_._v("10.2 短语与直接短语")]),_._v(" "),v("h2",{attrs:{id:"第11讲-语法分析-自下而上分析2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第11讲-语法分析-自下而上分析2"}},[_._v("#")]),_._v(" 第11讲 语法分析——自下而上分析2")]),_._v(" "),v("p",[_._v("11.1 句柄和规范归约")]),_._v(" "),v("p",[_._v("11.2 LR分析法")]),_._v(" "),v("p",[_._v("11.3 小结")]),_._v(" "),v("h2",{attrs:{id:"第12讲-语法分析-自下而上分析3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第12讲-语法分析-自下而上分析3"}},[_._v("#")]),_._v(" 第12讲 语法分析——自下而上分析3")]),_._v(" "),v("p",[_._v("12.1 活前缀")]),_._v(" "),v("p",[_._v("12.2 构造识别活前缀的DFA")]),_._v(" "),v("p",[_._v("12.3 构造LR(0)分析表")]),_._v(" "),v("p",[_._v("12.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第13讲-语法分析-自下而上分析4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第13讲-语法分析-自下而上分析4"}},[_._v("#")]),_._v(" 第13讲 语法分析——自下而上分析4")]),_._v(" "),v("p",[_._v("13.1 SLR(1)分析法")]),_._v(" "),v("p",[_._v("13.2 LR(1)分析法")]),_._v(" "),v("p",[_._v("13.3 LR分析器产生工具")]),_._v(" "),v("p",[_._v("13.4 小结")]),_._v(" "),v("p",[_._v("第2次单元测试")]),_._v(" "),v("h2",{attrs:{id:"✅第14讲-属性文法和语法制导翻译1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#✅第14讲-属性文法和语法制导翻译1"}},[_._v("#")]),_._v(" ✅第14讲 属性文法和语法制导翻译1")]),_._v(" "),v("p",[_._v("14.1 属性文法")]),_._v(" "),v("p",[_._v("14.2 属性计算")]),_._v(" "),v("h2",{attrs:{id:"第15讲-属性文法和语法制导翻译2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第15讲-属性文法和语法制导翻译2"}},[_._v("#")]),_._v(" 第15讲 属性文法和语法制导翻译2")]),_._v(" "),v("p",[_._v("15.1 S-属性文法")]),_._v(" "),v("p",[_._v("15.2 L-属性文法")]),_._v(" "),v("p",[_._v("15.3 翻译模式")]),_._v(" "),v("p",[_._v("15.4 递归下降翻译器的设计")]),_._v(" "),v("p",[_._v("15.5 小结")]),_._v(" "),v("h2",{attrs:{id:"第16讲-语义分析和中间代码生成1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第16讲-语义分析和中间代码生成1"}},[_._v("#")]),_._v(" 第16讲 语义分析和中间代码生成1")]),_._v(" "),v("p",[_._v("16.1 中间语言")]),_._v(" "),v("p",[_._v("16.2 常用的中间语言形式")]),_._v(" "),v("p",[_._v("16.3 小结")]),_._v(" "),v("p",[_._v("第3次单元测试")]),_._v(" "),v("h2",{attrs:{id:"第17讲-语义分析和中间代码生成2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第17讲-语义分析和中间代码生成2"}},[_._v("#")]),_._v(" 第17讲 语义分析和中间代码生成2")]),_._v(" "),v("p",[_._v("17.1 赋值语句的翻译")]),_._v(" "),v("p",[_._v("17.2 数组元素引用的翻译")]),_._v(" "),v("p",[_._v("17.3 类型转换")]),_._v(" "),v("p",[_._v("17.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第18讲-语义分析和中间代码生成3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第18讲-语义分析和中间代码生成3"}},[_._v("#")]),_._v(" 第18讲 语义分析和中间代码生成3")]),_._v(" "),v("p",[_._v("18.1 布尔表达式及其计算")]),_._v(" "),v("p",[_._v("18.2 按数值表示法翻译布尔表达式")]),_._v(" "),v("p",[_._v("18.3 带优化翻译布尔表达式")]),_._v(" "),v("p",[_._v("18.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第19讲-语义分析和中间代码生成4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第19讲-语义分析和中间代码生成4"}},[_._v("#")]),_._v(" 第19讲 语义分析和中间代码生成4")]),_._v(" "),v("p",[_._v("19.1 常用的控制语句")]),_._v(" "),v("p",[_._v("19.2 控制语句的属性文法")]),_._v(" "),v("p",[_._v("19.3 控制语句的属性计算")]),_._v(" "),v("p",[_._v("19.4 一遍扫描翻译控制语句")]),_._v(" "),v("p",[_._v("19.5 一遍扫描翻译控制语句示例")]),_._v(" "),v("p",[_._v("19.6 小结")]),_._v(" "),v("p",[_._v("第4次单元测试")]),_._v(" "),v("h2",{attrs:{id:"第20讲-符号表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第20讲-符号表"}},[_._v("#")]),_._v(" 第20讲 符号表")]),_._v(" "),v("p",[_._v("20.1 符号表的组织与操作")]),_._v(" "),v("p",[_._v("20.2 符号表的内容")]),_._v(" "),v("p",[_._v("20.3 利用符号表分析名字的作用域")]),_._v(" "),v("p",[_._v("20.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第21讲-运行时存储空间组织1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第21讲-运行时存储空间组织1"}},[_._v("#")]),_._v(" 第21讲 运行时存储空间组织1")]),_._v(" "),v("p",[_._v("21.1 参数传递")]),_._v(" "),v("p",[_._v("21.2 目标程序运行时的活动")]),_._v(" "),v("p",[_._v("21.3 静态存储管理")]),_._v(" "),v("h2",{attrs:{id:"第22讲-运行时存储空间组织2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第22讲-运行时存储空间组织2"}},[_._v("#")]),_._v(" 第22讲 运行时存储空间组织2")]),_._v(" "),v("p",[_._v("22.1 动态存储管理概述")]),_._v(" "),v("p",[_._v("22.2 非嵌套过程语言的动态存储管理")]),_._v(" "),v("p",[_._v("22.3 嵌套过程语言的动态存储管理--静态链方法")]),_._v(" "),v("p",[_._v("22.4 嵌套过程语言的动态存储管理--Display表方法")]),_._v(" "),v("p",[_._v("22.5 小结")]),_._v(" "),v("h2",{attrs:{id:"第23讲-优化1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第23讲-优化1"}},[_._v("#")]),_._v(" 第23讲 优化1")]),_._v(" "),v("p",[_._v("23.1 优化概述")]),_._v(" "),v("p",[_._v("23.2 局部优化--基本块划分")]),_._v(" "),v("p",[_._v("23.3 局部优化--基本块优化")]),_._v(" "),v("h2",{attrs:{id:"第24讲-优化2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第24讲-优化2"}},[_._v("#")]),_._v(" 第24讲 优化2")]),_._v(" "),v("p",[_._v("24.1 循环优化概述")]),_._v(" "),v("p",[_._v("24.2 代码外提")]),_._v(" "),v("p",[_._v("24.3 强度消弱")]),_._v(" "),v("p",[_._v("24.4 小结")]),_._v(" "),v("h2",{attrs:{id:"第25讲-目标代码生成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第25讲-目标代码生成"}},[_._v("#")]),_._v(" 第25讲 目标代码生成")]),_._v(" "),v("p",[_._v("25.1 目标代码生成概述")]),_._v(" "),v("p",[_._v("25.2 目标机器模型")]),_._v(" "),v("p",[_._v("25.3 简单代码生成器")]),_._v(" "),v("p",[_._v("25.4 待用信息和活跃信息")]),_._v(" "),v("p",[_._v("25.5 变量地址描述和寄存器描述")]),_._v(" "),v("p",[_._v("25.6 代码生成与寄存器分配算法")]),_._v(" "),v("p",[_._v("25.7 小结")])])}),[],!1,null,null,null);v.default=s.exports}}]);