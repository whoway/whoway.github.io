(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{417:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flang-clang-llvm工程经验积累"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flang-clang-llvm工程经验积累"}},[t._v("#")]),t._v(" flang-clang-llvm工程经验积累")]),t._v(" "),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h2",{attrs:{id:"llvm工具篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#llvm工具篇"}},[t._v("#")]),t._v(" LLVM工具篇")]),t._v(" "),s("ul",[s("li",[t._v("llvm-as - 汇编器，将 .ll 汇编成字节码。")]),t._v(" "),s("li",[t._v("llvm-dis - 反汇编器，将字节码编成可读的 .ll 文件。")]),t._v(" "),s("li",[t._v("opt - 字节码优化器。")]),t._v(" "),s("li",[t._v("llc - 静态编译器，将字节码编译成汇编代码。")]),t._v(" "),s("li",[t._v("lli - 直接执行 LLVM 字节码。")]),t._v(" "),s("li",[t._v("llvm-link - 字节码链接器，可以把多个字节码文件链接成一个。")]),t._v(" "),s("li",[t._v("llvm-ar - 字节码文件打包器。")]),t._v(" "),s("li",[t._v("llvm-lib - LLVM lib.exe 兼容库工具。")]),t._v(" "),s("li",[t._v("llvm-nm - 列出字节码和符号表。")]),t._v(" "),s("li",[t._v("llvm-config - 打印 LLVM 编译选项。")]),t._v(" "),s("li",[t._v("llvm-diff - 对两个进行比较。")]),t._v(" "),s("li",[t._v("llvm-cov - 输出 coverage infomation。")]),t._v(" "),s("li",[t._v("llvm-profdata - Profile 数据工具。")]),t._v(" "),s("li",[t._v("llvm-stress - 生成随机 "),s("code",[t._v(".ll")]),t._v(" 文件。")]),t._v(" "),s("li",[t._v("llvm-symbolizer - 地址对应源码位置，定位错误。")]),t._v(" "),s("li",[t._v("llvm-dwarfdump - 打印 DWARF。")])]),t._v(" "),s("h3",{attrs:{id:"调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试工具"}},[t._v("#")]),t._v(" "),s("strong",[t._v("调试工具")])]),t._v(" "),s("ul",[s("li",[t._v("bugpoint - 自动测试案例工具")]),t._v(" "),s("li",[t._v("llvm-extract - 从一个 LLVM 的模块里提取一个函数。")]),t._v(" "),s("li",[t._v("llvm-bcanalyzer - LLVM 字节码分析器。")])]),t._v(" "),s("h3",{attrs:{id:"开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发工具"}},[t._v("#")]),t._v(" "),s("strong",[t._v("开发工具")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("==FileChec==k - 灵活的模式匹配文件验证器。")])]),t._v(" "),s("li",[s("p",[t._v("tblgen - C++ 代码生成器。")])]),t._v(" "),s("li",[s("p",[t._v("lit - LLVM 集成测试器。")])]),t._v(" "),s("li",[s("p",[t._v("llvm-build - LLVM 构建工程时需要的工具。")])]),t._v(" "),s("li",[s("p",[t._v("llvm-readobj - LLVM Object 结构查看器。")])])]),t._v(" "),s("h2",{attrs:{id:"_1-flang⭐️源码目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-flang⭐️源码目录结构"}},[t._v("#")]),t._v(" 1.flang⭐️源码目录结构")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("whoway@VMwhoway:~/work/flang/flang-flang_20210324$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n/home/whoway/work/flang/flang-flang_20210324\nwhoway@VMwhoway:~/work/flang/flang-flang_20210324$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nCMakeLists.txt  docs  include  lib  LICENSE.txt  README.md  runtime  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("  tools  utils\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_1-1-代码结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-代码结构"}},[t._v("#")]),t._v(" 1.1.代码结构")]),t._v(" "),s("p",[t._v("Flang的源代码主要是ANSI C98和一些c++。Fortran例程存在于运行时库中。文档维护在"),s("code",[t._v("nroff (' ' *.n ' ')")]),t._v("文件中，可以用"),s("code",[t._v("' ' -DLLVM_INCLUDE_DOCS=on ' '")]),t._v("构建。")]),t._v(" "),s("p",[t._v("这里列出了主要的目录，其中一些在下面有更详细的解释:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("lib，包括由flang1、flang2和Fortran运行时库共享的**辅助库。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("runtime")]),t._v("** - Fortran运行库。")])]),t._v(" "),s("li",[s("p",[t._v("tools/flang1** - flang1, Fortran到==ILM==的翻译工具。")])]),t._v(" "),s("li",[s("p",[t._v("tools/flang2** - flang2, ILM到LLVM的IR转换器。")])]),t._v(" "),s("li",[s("p",[t._v("tools/include/symtab** - ' ' gbldefs.h ' '(有此名称的三个头文件之一!)和global.h(四个头文件之一)\n文件。")])]),t._v(" "),s("li",[s("p",[t._v("utils**—errmsggen (errmsg.cpp)实用程序，用于生成两个errmsggen .h文件(一个用于flang1，一个用于f\nLang2)，错误消息文本。")]),t._v(" "),s("p",[t._v("“自由”的目录结构")])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-flang-glossary-术语表-docs-glossary-rst"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-flang-glossary-术语表-docs-glossary-rst"}},[t._v("#")]),t._v(" 1.2.Flang glossary（术语表）-docs/glossary.rst")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th")])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ADT")]),t._v(" "),s("td",[t._v("Abstract Data Types.")])]),t._v(" "),s("tr",[s("td",[t._v("ASD")]),t._v(" "),s("td",[t._v("数组下标描述符（Array Subscript Descriptor）——保存数组的维数，请参见' ' ast.h ' ' '")])]),t._v(" "),s("tr",[s("td",[t._v("AST")]),t._v(" "),s("td",[t._v("Abstract Syntax Tree.")])]),t._v(" "),s("tr",[s("td",[t._v("BE")]),t._v(" "),s("td",[t._v("“后端”的缩写(在代码和注释中大量使用)")])]),t._v(" "),s("tr",[s("td",[t._v("FE")]),t._v(" "),s("td",[t._v("“frontend”的缩写(在代码和注释中大量使用)")])]),t._v(" "),s("tr",[s("td",[t._v("ILM")]),t._v(" "),s("td",[t._v("(Intermediate Language Macros.  )可执行语句的表示。这是flang1的输出，是flang2的输入。")])]),t._v(" "),s("tr",[s("td",[t._v("ILI")]),t._v(" "),s("td",[t._v("Intermediate Language Instructions.  中间语言指令。flang2用于优化的IR。")])]),t._v(" "),s("tr",[s("td",[t._v("ILT")]),t._v(" "),s("td",[t._v("ILI语句的终端节点，与源语言语句对应。ilt的序列表示一个块。ilt有到下一个和上一个的链接。")])]),t._v(" "),s("tr",[s("td",[t._v("IPA")]),t._v(" "),s("td",[t._v("InterProcedural Analysis(过程间分析) https://en.wikipedia.org/wiki/Interprocedural_optimization")])]),t._v(" "),s("tr",[s("td",[t._v("IR")]),t._v(" "),s("td",[t._v("中间表示。一种通用术语，可指多种表现形式。")])]),t._v(" "),s("tr",[s("td",[t._v("PGI")]),t._v(" "),s("td",[t._v("旧版Fortran编译器，Flang前端基于它。PGI编译器和工具已经演变成NVIDIA HPC SDK。")])]),t._v(" "),s("tr",[s("td",[t._v("SD")]),t._v(" "),s("td",[t._v("静态描述符(与指针一起使用。“ptr sd“美元)")])]),t._v(" "),s("tr",[s("td",[t._v("STB")]),t._v(" "),s("td",[t._v("Symbol TaBle, created symbol after symbol as identified by the parser 符号表，创建一个又一个由解析器识别的符号")])]),t._v(" "),s("tr",[s("td",[t._v("SHD")]),t._v(" "),s("td",[t._v("SHape Descriptor 形状描述符——保存数组和跨步的上下边界")])]),t._v(" "),s("tr",[s("td",[t._v("STD")]),t._v(" "),s("td",[t._v("STatement Descriptor - a larger, more generic structure describing the parsed code elements。See "),s("code",[t._v("ast.h")]),t._v(" for full members list. 语句描述符——一个更大、更通用的结构，描述解析的代码元素。完整成员列表见' ' ast.h ' '。")])]),t._v(" "),s("tr",[s("td",[t._v("TBAA")]),t._v(" "),s("td",[t._v("Type Based Alias Analysis基于类型的别名分析")])]),t._v(" "),s("tr",[s("td",[t._v("TPV")]),t._v(" "),s("td",[t._v("Target Processor Value (used in "),s("code",[t._v("semant.c")]),t._v(")目标处理器值(在' ' semantic .c ' '中使用)")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-docs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-docs"}},[t._v("#")]),t._v(" 1.3.docs/")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("whoway@VMwhoway:~/work/flang/flang-flang_20210324/docs$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nCMakeLists.txt  debugging_flang.rst  doxygen.intro  index.rst                  libpgmath.rst\nconf.py.in      doxygen.cfg.in       glossary.rst   introduction_to_flang.rst\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"doxygen-intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doxygen-intro"}},[t._v("#")]),t._v(" doxygen.intro")]),t._v(" "),s("div",{staticClass:"language-txt line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("/// LLVM项目的一部分，在Apache License v2.0下，LLVM例外。\n/// license信息请参见https://llvm.org/LICENSE.txt。\n/// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception\n///\n/ / / @mainpage轮缘\n///\n/// @section main_intro介绍\n///欢迎来到flang项目。\n///\n///这个文档描述了@b内部软件\n///向上法兰，而不是@b外部使用法兰。没有说明\n///这里关于如何使用flang，只有组成软件的api。为\n///使用说明，请参见程序员指南或参考资料\n/ / /手册。\n///\n/// @section main_warning警告\n///该文档直接从doxygen的源代码生成。\n///由于flang一直处于积极的开发中，您将要\n///读取是过时的!\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"_2-clang⭐️源码目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-clang⭐️源码目录结构"}},[t._v("#")]),t._v(" 2.clang⭐️源码目录结构")]),t._v(" "),s("h2",{attrs:{id:"_3-llvm⭐️源码目录功能简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-llvm⭐️源码目录功能简介"}},[t._v("#")]),t._v(" 3.Llvm⭐️源码目录功能简介")]),t._v(" "),s("h3",{attrs:{id:"一、docs目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、docs目录"}},[t._v("#")]),t._v(" "),s("strong",[t._v("一、docs目录")])]),t._v(" "),s("p",[t._v("这个目录下存放Llvm各个模块的==相关介绍文档。==")]),t._v(" "),s("h3",{attrs:{id:"二、examples目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、examples目录"}},[t._v("#")]),t._v(" "),s("strong",[t._v("二、examples目录")])]),t._v(" "),s("p",[t._v("这个目录是一些使用LLVM IR和JIT的简单例子。")]),t._v(" "),s("h3",{attrs:{id:"三、include目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、include目录"}},[t._v("#")]),t._v(" 三、include目录")]),t._v(" "),s("p",[t._v("include 目录主要是包含llvm做为lib的c++和c的api头文件。在include下还有三个主要的子目录：")]),t._v(" "),s("p",[t._v("【1】include/llvm")]),t._v(" "),s("p",[t._v("所有LLVM特定的头文件和头文件子目录。子目录对应LLVM各个部分：Analysis，CodeGen，Target，Transforms，etc...")]),t._v(" "),s("p",[t._v("【2】include/llvm/Support")]),t._v(" "),s("p",[t._v("LLVM提供的通用支持工具的lib头文件目录。例如，一些C++ STL小工具和命令行选项相关的lib的头文件会放在该文件夹里。")]),t._v(" "),s("p",[t._v("【3】include/llvm/Config")]),t._v(" "),s("p",[t._v("由cmake配置的头文件。他们包括标准UNIX和C的头文件。源码可以引入这些自动处理的头文件。#include that cmake generates")]),t._v(" "),s("h3",{attrs:{id:"四、lib目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、lib目录"}},[t._v("#")]),t._v(" 四、lib目录")]),t._v(" "),s("p",[t._v("这个目录下存放着大部分的源码，将源码放进库中，可以使得LLVM能在一些工具间分享代码。")]),t._v(" "),s("p",[t._v("【1】lib/IR/")]),t._v(" "),s("p",[t._v("核心LLVM源文件，实现了核心的类比如：Instruction和BasicBlock")]),t._v(" "),s("p",[t._v("【2】lib/AsmParser/")]),t._v(" "),s("p",[t._v("解释汇编语言的源码")]),t._v(" "),s("p",[t._v("【3】lib/Bitcode/")]),t._v(" "),s("p",[t._v("读写字节码的源码")]),t._v(" "),s("p",[t._v("【4】lib/Analysis/")]),t._v(" "),s("p",[t._v("各种分析程序的源码，例如：Call-Graphs，Induction-Variables，Natural-Loop-Identification，etc")]),t._v(" "),s("p",[t._v("【5】lib/Transforms/")]),t._v(" "),s("p",[t._v("IR-to-IR 程序转换，例如：主动死代码消除，稀疏有条件常量传播，内联，循环不变码变化，死全局消除...")]),t._v(" "),s("p",[t._v("【6】lib/Target/")]),t._v(" "),s("p",[t._v("Target目录是目标平台指令集相关内容，内部代码量很大，具体芯片指令，版本等相关信息都在其中，最新的专有功能，比如AMD,NVIDIA相关的显卡计算目标代码生成也在其中。")]),t._v(" "),s("p",[t._v("【7】lib/CodeGen/")]),t._v(" "),s("p",[t._v("代码生成的主要部分：指令选择器，指令调度以及寄存器分配。")]),t._v(" "),s("p",[t._v("【8】lib/ExecutionEngine/")]),t._v(" "),s("p",[t._v("用于直接在JIT解释器中执行字节码的库。")]),t._v(" "),s("p",[t._v("【9】lib/Support/")]),t._v(" "),s("p",[t._v("对应于llvm/include/ADT和llvm/include/Support的头文件。")]),t._v(" "),s("h3",{attrs:{id:"五、projects目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、projects目录"}},[t._v("#")]),t._v(" "),s("strong",[t._v("五、projects目录")])]),t._v(" "),s("p",[t._v("这个==目录严格上来说并不是llvm的一部分==，是附属于llvm。这个目录可以存放用户自己利用llvm，构建的系统。")]),t._v(" "),s("h3",{attrs:{id:"六、test目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、test目录"}},[t._v("#")]),t._v(" "),s("strong",[t._v("六、test目录")])]),t._v(" "),s("p",[t._v("LLVM基础结构上的特性和回归测试以及其他健全性检查。它们旨在快速运行并覆盖很多领域，而不会很低效。")]),t._v(" "),s("h3",{attrs:{id:"七、tools目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、tools目录"}},[t._v("#")]),t._v(" "),s("strong",[t._v("七、tools目录")])]),t._v(" "),s("p",[t._v("这个目录下存放的是由之前介绍过的库文件build而成的可执行文件（工具），这是用户交互的主要部分。")]),t._v(" "),s("h2",{attrs:{id:"_4-llvm源码阅读网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-llvm源码阅读网站"}},[t._v("#")]),t._v(" 4.llvm源码阅读网站")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://codebrowser.dev/llvm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codebrowser.dev/llvm/"),s("OutboundLink")],1)])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("bolt/")])]),t._v(" "),s("li",[s("p",[t._v("==clang/==")])]),t._v(" "),s("li",[s("p",[t._v("clang-tools-extra/")])]),t._v(" "),s("li",[s("p",[t._v("compiler-rt/")])]),t._v(" "),s("li",[s("p",[t._v("cross-project-tests/")])]),t._v(" "),s("li",[s("p",[t._v("==flang/==")])]),t._v(" "),s("li",[s("p",[t._v("libc/")])]),t._v(" "),s("li",[s("p",[t._v("libclc/")])]),t._v(" "),s("li",[s("p",[t._v("libcxx/")])]),t._v(" "),s("li",[s("p",[t._v("libcxxabi/")])]),t._v(" "),s("li",[s("p",[t._v("libunwind/")])]),t._v(" "),s("li",[s("p",[t._v("lld/")])]),t._v(" "),s("li",[s("p",[t._v("lldb/")])]),t._v(" "),s("li",[s("p",[t._v("==llvm/==")])]),t._v(" "),s("li",[s("p",[t._v("llvm-libgcc/")])]),t._v(" "),s("li",[s("p",[t._v("llvm_build/")])]),t._v(" "),s("li",[s("p",[t._v("mlir/")])]),t._v(" "),s("li",[s("p",[t._v("==openmp/==")])]),t._v(" "),s("li",[s("p",[t._v("polly/")])]),t._v(" "),s("li",[s("p",[t._v("pstl/")])]),t._v(" "),s("li",[s("p",[t._v("third-party/")])]),t._v(" "),s("li",[s("p",[t._v("utils/")])])]),t._v(" "),s("h2",{attrs:{id:"_666-fortran经验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_666-fortran经验"}},[t._v("#")]),t._v(" 666.Fortran经验")]),t._v(" "),s("h3",{attrs:{id:"_1-字符串结合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符串结合"}},[t._v("#")]),t._v(" 1.字符串结合")]),t._v(" "),s("div",{staticClass:"language-fortran line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-fortran"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("program")]),t._v(" main\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implicit none")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" cStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fdafa'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" iInt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" temp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(I4)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" iInt\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" name \nname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("temp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("cStr\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" cStr\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" iInt\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" temp\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end program")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("div",{staticClass:"language-fortran line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-fortran"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("program")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'inte'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("integer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" temp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v(" tst\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(I4)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" num\n\ntst"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("trim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("temp\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" tst\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end program")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);