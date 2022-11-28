(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{354:function(_,t,a){"use strict";a.r(t);var v=a(13),s=Object(v.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"深入浅出计算机组成原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入浅出计算机组成原理"}},[_._v("#")]),_._v(" 深入浅出计算机组成原理")]),_._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[_._v("#")]),_._v(" 目录")]),_._v(" "),t("p",[_._v("[TOC]")]),_._v(" "),t("p",[_._v("这么多年一直在开发软件，我深感软件这个行业变化太快了。")]),_._v(" "),t("ul",[t("li",[_._v("语言上，十年前流行 Java，这两年流行 Go；框架上，前两年流行 TensorFlow，最近又流行 PyTorch。")])]),_._v(" "),t("p",[_._v("​    我逐渐发现，学习应用层的各种语言、框架，好比在练拳法招式，可以短期给予你回报，而深入学习“底\n层知识”，就是在练扎马步、核心肌肉力量，是在提升你自己的“根骨”和“资质”\n​\t正所谓“练拳不练功，到老一场空”。\n​    如果越早去弄清楚计算机的底层原理，在你的知识体系中“储蓄”起这些知识，也就意味着你有越长的时间来收获学习知识的“利息”。\n​    虽然一开始可能不起眼，但是随着时间带来的复利效应，你的长线投资项目，就能让你在成长的过程中越走越快。")]),_._v(" "),t("ul",[t("li",[_._v("如果 想要深入理解，甚至设计一台自己的计算机，体系结构是必不可少的一门课，而"),t("strong",[_._v("组成原理")]),_._v("是 "),t("strong",[_._v("计算机体系结构")]),_._v("的一个"),t("strong",[_._v("入门版本")])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20211002151022.png",alt:"2021.10.02"}})]),_._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[_._v("在这个专栏构思之初，我就给自己定了一个交付目标：我要把这些知识点和日常工作、生活以及整个计算机行业的发展史联系起来，教你真正看懂、学会、记住组成原理的核心内容，教你更多地从“为什么”这个角度，去理解这些知识点，而不是只是去记忆“是什么”。\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br")])]),t("h2",{attrs:{id:"_0-开篇词-为什么你需要学习计算机组成原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-开篇词-为什么你需要学习计算机组成原理"}},[_._v("#")]),_._v(" 0.开篇词.为什么你需要学习"),t("code",[_._v("计算机组成原理")]),_._v("？")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("计算机组成中很多组件的设计，都不是凭空发明出来，它们中的很多都来自现实生活中的想 法和比喻。而底层很多硬件设计和开发的思路，其实也和你进行软件架构的开发设计和思路 是一样的。")])]),_._v(" "),t("li",[t("p",[_._v("像《冰与火之歌》里面水舞者教导艾莉亚的一 样，“恐惧比利剑”更伤人。破除对于基础知识“难”的迷信，是迈向更高水平必经的一步。")])])]),_._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[_._v("显然，在硬件和软件之间需要一座桥梁，而“计算机组成原理”就扮演了这样一个角色，它既隔离了软件和硬件，也提供了让软件无需关心硬件，就能直接操作硬件的接口。\n\n这里的计算机组成原理改成操作系统是不是更好，而且感觉这句话说的就是操作系统呀\n\n作者回复: 其实 操作系统也是一个“软件”，而开发操作系统，其实只需要关注到“组成原理”或者说“体系结构”就好了，而不需要真的了解硬件，比如电路层面的实现。操作系统，其实是在“组成原理”所讲到的“指令集”上的一层封装。\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br")])]),t("p",[_._v("体系结构的复兴")]),_._v(" "),t("div",{staticClass:"language-txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-txt"}},[t("code",[_._v("刚开始是做应用开发的，后来去做TVM了？大佬说的这个人谁？\n我是做编译出身的，给AI加速器写过编译器，最近也在研究TVM😁😁😁\n\n作者回复: json同学你好，我原来在做广告系统团队里的同学哦，现在北美做tvm呢，具体名字涉及别人的隐私先不透露啦。过去几年在体系结构和编译器上，又出现了很多新的有意思的主题可以研究呢，可以称之为体系结构的新的复兴\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br")])]),t("h2",{attrs:{id:"_1-冯·诺依曼体系结构-计算机组成的金字塔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-冯·诺依曼体系结构-计算机组成的金字塔"}},[_._v("#")]),_._v(" 1.冯·诺依曼体系结构：计算机组成的金字塔")]),_._v(" "),t("p",[_._v("计算机行业的两大祖师爷之一，除了冯·诺依曼机之外，还有一位就是著名的图灵（Alan Mathison Turing）对应的，我们现在的计算机也叫图灵机（Turing Machine）。那么 图灵机和冯·诺依曼机是两种不同的计算机么？图灵机是一种什么样的计算机抽象呢？")]),_._v(" "),t("ul",[t("li",[_._v("我理解的是"),t("strong",[_._v("冯·诺依曼机")]),_._v("侧重于"),t("strong",[_._v("硬件抽象")])]),_._v(" "),t("li",[_._v("而"),t("strong",[_._v("图灵机")]),_._v("侧重于"),t("strong",[_._v("计算抽象")])])]),_._v(" "),t("h2",{attrs:{id:"_2-一张知识地图-计算机组成原理应该这么学"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-一张知识地图-计算机组成原理应该这么学"}},[_._v("#")]),_._v(" 2.一张知识地图，计算机组成原理应该这么学")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20211220182647.png",alt:"image-20211220182645281"}})]),_._v(" "),t("h2",{attrs:{id:"_3-通过cpu主频-我们来谈谈-性能-究竟是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过cpu主频-我们来谈谈-性能-究竟是什么"}},[_._v("#")]),_._v(" 3.通过CPU主频，我们来谈谈“性能”究竟是什么？")]),_._v(" "),t("h4",{attrs:{id:"_3-1-响应时间-response-time-或者叫执行时间-execution-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-响应时间-response-time-或者叫执行时间-execution-time"}},[_._v("#")]),_._v(" 3.1.响应时间（Response time）或者叫执行时间（Execution time）")]),_._v(" "),t("p",[_._v("想要提升响应时间这个性能指标，你可以理解为让计算机“跑得更快”。")]),_._v(" "),t("p",[_._v("我主要对于“响应时 间”这个性能指标进行抽丝剥茧，拆解成了计算机时钟周期、CPI 以及指令数这三个独立的 指标的乘积，并且为你指明了优化计算机性能的三条康庄大道。也就是，")]),_._v(" "),t("ul",[t("li",[_._v("提升计算机主频")]),_._v(" "),t("li",[t("strong",[_._v("优化 CPU 设计")]),_._v("使得在单个时钟周期内能够执行更多指令")]),_._v(" "),t("li",[_._v("以及通过"),t("strong",[_._v("编译器")]),_._v("来减少需要的指令数")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th"),_._v(" "),t("th",[_._v("解决")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("计算机时钟周期")]),_._v(" "),t("td",[_._v("提升计算机主频")])]),_._v(" "),t("tr",[t("td",[_._v("CPI")]),_._v(" "),t("td",[t("strong",[_._v("优化 CPU 设计")])])]),_._v(" "),t("tr",[t("td",[_._v("指令数")]),_._v(" "),t("td",[_._v("通过"),t("strong",[_._v("编译器")]),_._v("来减少需要的指令数")])])])]),_._v(" "),t("h4",{attrs:{id:"_3-2-是吞吐率-throughput-或者带宽-bandwidth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-是吞吐率-throughput-或者带宽-bandwidth"}},[_._v("#")]),_._v(" 3.2.是吞吐率（Throughput）或者带宽（Bandwidth）")]),_._v(" "),t("p",[_._v("想要提升这个指标，你可以理解为让计算机“搬得更多”")]),_._v(" "),t("h2",{attrs:{id:"_19-建立数据通路-下-指令more运算-cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-建立数据通路-下-指令more运算-cpu"}},[_._v("#")]),_._v(" 19-建立数据通路（下）：指令more运算=CPU")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/20211221080804.png",alt:"image-20211221080801863"}})]),_._v(" "),t("h2",{attrs:{id:"_28-异常和中断-程序出错了怎么办"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_28-异常和中断-程序出错了怎么办"}},[_._v("#")]),_._v(" 28.异常和中断：程序出错了怎么办？👍")]),_._v(" "),t("ul",[t("li",[_._v("过去这么多讲，我们的程序都是自动运行且正常运行的\n"),t("ul",[t("li",[_._v("自动运行的意思是说，我们的程序和指令都是一条 条顺序执行，你不需要通过键盘或者网络给这个程序任何输入")]),_._v(" "),t("li",[_._v("正常运行是说，我们的程序都是能够正常执 行下去的，没有遇到计算溢出之类的程序错误")])])])]),_._v(" "),t("h3",{attrs:{id:"_1-异常-硬件、系统和应用的组合拳"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-异常-硬件、系统和应用的组合拳"}},[_._v("#")]),_._v(" 1.异常：硬件、系统和应用的组合拳")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("一提到计算机当中的异常（Exception），可能你的第一反应就是C++或者Java中的Exception。不过我们今 天讲的，并不是这些软件开发过程中遇到的“软件异常”，而是和硬件、系统相关的“硬件异常”。")])]),_._v(" "),t("li",[t("p",[_._v("当然，“软件异常”和“硬件异常”并不是实际业界使用的专有名词，只是我为了方便给你说明，和C++、 Java中软件抛出的Exception进行的人为区分，你明白这个意思就好。 尽管，这里我把这些硬件和系统相关的异常，叫作“硬件异常”。但是，"),t("strong",[_._v("实际上")]),_._v("，这些异常，"),t("strong",[_._v("既有来自硬件 的，也有来自软件")]),_._v("层面的。")])])]),_._v(" "),t("blockquote",[t("ul",[t("li",[_._v("关于异常和中断，《深入理解计算机系统》的第8章“异常控制流”部分，有非常深入和充分的讲解，推荐 你认真阅读一下")])])]),_._v(" "),t("h2",{attrs:{id:"_29-cisc和risc-为什么手机芯片都是arm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_29-cisc和risc-为什么手机芯片都是arm"}},[_._v("#")]),_._v(" 29.CISC和RISC：为什么手机芯片都是ARM")]),_._v(" "),t("h2",{attrs:{id:"_30-gpu-上-为什么玩游戏需要使用gpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_30-gpu-上-为什么玩游戏需要使用gpu"}},[_._v("#")]),_._v(" 30.GPU（上）：为什么玩游戏需要使用GPU")]),_._v(" "),t("h2",{attrs:{id:"_32-fpga、asic和tpu-上-计算机体系结构的黄金时代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_32-fpga、asic和tpu-上-计算机体系结构的黄金时代"}},[_._v("#")]),_._v(" 32.FPGA、ASIC和TPU（上）：计算机体系结构的黄金时代")]),_._v(" "),t("ul",[t("li",[_._v("==FPGA和ASIC这两种近年来非常时髦的芯片。==")])]),_._v(" "),t("p",[_._v("过去很长一段时间里，大家在讲到高科技、互联网、信息技术的时候，谈的其实都是“软件”。")]),_._v(" "),t("p",[_._v("从1995年 微软发布Windows 95开始，高科技似乎就等同于软件业和互联网。")]),_._v(" "),t("p",[_._v("的确，过去20年计算机工业界的中心都在软件上。似乎硬件对大家来说，慢慢变成了一个黑盒子。虽然必 要，但却显得有点无关紧要")]),_._v(" "),t("p",[_._v("不过，在上世纪70～80年代，计算机的世界可不是这样的。那个时候，计算机工业届最激动人心的，是层出不穷的硬件。无论是Intel的8086，还是摩托罗拉的68000，这样用于个人电脑的CPU，还是直到今天大家 还会提起的Macintosh，还有史上最畅销的计算机Commodore 64，都是在那个时代被创造出来的。")]),_._v(" "),t("p",[_._v("不过，随着计算机主频提升越来越困难。这几年，计算机硬件又进入了一个新的、快速发展的时期")]),_._v(" "),t("h3",{attrs:{id:"_1-fpga"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-fpga"}},[_._v("#")]),_._v(" 1."),t("code",[_._v("FPGA")])]),_._v(" "),t("ul",[t("li",[_._v("而设计一个CPU，往往要以“年”来计。在这个过程 中，硬件工程师们要设计、验证各种各样的技术方案，可能会遇到各种各样的Bug。如果我们每次验证一个 方案，都要单独设计生产一块芯片，那这个代价也太高了。")]),_._v(" "),t("li",[_._v("我们有没有什么办法，不用单独制造一块专门的芯片来验证硬件设计呢？能不能设计一个硬件，通过不同的 程序代码，来操作这个硬件之前的电路连线，通过“编程”让这个硬件变成我们设计的电路连线的芯片呢？")]),_._v(" "),t("li",[_._v("这个，就是我们接下来要说的FPGA，也就是现场可编程门阵列（Field-Programmable Gate Array）")])]),_._v(" "),t("p",[_._v("P代表Programmable，这个很容易理解。也就是说这是一个可以通过编程来控制的硬件。")]),_._v(" "),t("p",[_._v("G代表Gate也很容易理解，它就代表芯片里面的门电路。我们能够去进行编程组合的就是这样一个一个门 电路。")]),_._v(" "),t("p",[_._v("A代表的Array，叫作阵列，说的是在一块FPGA上，密密麻麻列了大量Gate这样的门电路。")]),_._v(" "),t("ul",[t("li",[_._v("最后一个F，不太容易理解。它其实是说，一块FPGA这样的板子，可以进行在“现场”多次地进行编程。 它不像PAL（Programmable Array Logic，可编程阵列逻辑）这样更古老的硬件设备，只能“编程”一 次，把预先写好的程序一次性烧录到硬件里面，之后就不能再修改了。")]),_._v(" "),t("li",[_._v("这么看来，其实“FPGA”这样的组合，基本上解决了我们前面说的想要设计硬件的问题。我们可以像软件 一样对硬件编程，可以反复烧录，还有海量的门电路，可以组合实现复杂的芯片功能。")]),_._v(" "),t("li",[_._v("不过，相信你和我一样好奇，我们究竟怎么对硬件进行编程呢？我们之前说过，CPU其实就是通过晶体管， 来实现各种组合逻辑或者时序逻辑。那么，我们怎么去“编程”连接这些线路呢？")])]),_._v(" "),t("blockquote",[t("p",[_._v("FPGA的解决方案很精巧，我把它总结为这样三个步骤。")])]),_._v(" "),t("ul",[t("li",[_._v("第一，用存储换功能实现组合逻辑。在实现CPU的功能的时候，我们需要完成各种各样的电路逻辑。在 FPGA里，这些基本的电路逻辑，不是采用布线连接的方式进行的，而是预先根据我们在软件里面设计的逻 辑电路，算出对应的真值表，然后直接存到一个叫作LUT（Look-Up Table，查找表）的电路里面。")]),_._v(" "),t("li",[_._v("第二，对于需要实现的时序逻辑电路，我们可以在FPGA里面直接放上D触发器，作为寄存器。这个和CPU里 的触发器没有什么本质不同。不过，我们会把很多个LUT的电路和寄存器组合在一起，变成一个叫作逻辑簇 （Logic Cluster）的东西。在FPGA里，这样组合了多个LUT和寄存器的设备，也被叫做CLB（Configurable Logic Block，可配置逻辑块）。我们通过配置CLB实现的功能有点儿像我们前面讲过的全加器。它已经在最基础的门电路上做了组合，能提供更复杂一点的功能。更复杂的芯片功能，我们不用再从门电路搭起，==可以通过CLB组合搭建出来==。")]),_._v(" "),t("li",[_._v("第三，FPGA是通过可编程逻辑布线，来连接各个不同的CLB，最终实现我们想要实现的芯片功能。\n"),t("ul",[t("li",[_._v("从这个角度来说，FPGA也是“软件吞噬世界”的一个 很好的例子。")])])])]),_._v(" "),t("h3",{attrs:{id:"_2-asic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-asic"}},[_._v("#")]),_._v(" 2."),t("code",[_._v("ASIC")])]),_._v(" "),t("p",[_._v("除了CPU、GPU，以及刚刚的FPGA，我们其实还需要用到很多其他芯片")]),_._v(" "),t("ul",[t("li",[_._v("我们就考虑为这些有专门用途的场景，单独设计一个芯片。这些专门设计的芯片呢，我们称之 为ASIC（Application-Specific Integrated Circuit），也就是专用集成电路。\n"),t("ul",[t("li",[_._v("而我们上一讲所说的早期的图形加速 卡，其实就可以看作是一种ASIC。")])])])]),_._v(" "),t("p",[_._v("因为ASIC的生产制造成本，以及能耗上的优势，过去几年里，有不少公司设计和开发ASIC用来“挖矿”。 这个“挖矿”，说的其实就是设计专门的数值计算芯片，用来“挖”比特币、ETH这样的数字货币。")]),_._v(" "),t("p",[_._v("那么，我们能不能用刚才说的FPGA来做ASIC的事情呢？当然是可以的。我们对FPGA进行“编程”，其实就 是把FPGA的电路变成了一个ASIC。这样的芯片，往往在成本和功耗上优于需要做通用计算的CPU和GPU。")]),_._v(" "),t("ul",[t("li",[_._v("下一讲，我们来看看==Google开发的TPU==，这个近两年"),t("strong",[_._v("最知名的ASIC芯片")]),_._v("的 故事。")])]),_._v(" "),t("h2",{attrs:{id:"_33-解读tpu-设计和拆解一块asic芯片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_33-解读tpu-设计和拆解一块asic芯片"}},[_._v("#")]),_._v(" 33.解读TPU：设计和拆解一块ASIC芯片")]),_._v(" "),t("h2",{attrs:{id:"_34-理解虚拟机-你在云上拿到的计算机是什么样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_34-理解虚拟机-你在云上拿到的计算机是什么样的"}},[_._v("#")]),_._v(" 34.理解虚拟机：你在云上拿到的计算机是什么样的？")]),_._v(" "),t("h2",{attrs:{id:"✔️存储器部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#✔️存储器部分"}},[_._v("#")]),_._v(" ✔️存储器部分")]),_._v(" "),t("h2",{attrs:{id:"_35-存储器层次结构全景-数据存储的大金字塔长什么样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_35-存储器层次结构全景-数据存储的大金字塔长什么样"}},[_._v("#")]),_._v(" 35.存储器层次结构全景：数据存储的大金字塔长什么样")]),_._v(" "),t("h2",{attrs:{id:"_36-局部性原理-数据库性能跟不上-加个缓存就好了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_36-局部性原理-数据库性能跟不上-加个缓存就好了"}},[_._v("#")]),_._v(" 36.局部性原理：数据库性能跟不上，加个缓存就好了")]),_._v(" "),t("h2",{attrs:{id:"_45-机械硬盘-google早期用过的-黑科技"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_45-机械硬盘-google早期用过的-黑科技"}},[_._v("#")]),_._v(" 45.机械硬盘：Google早期⽤过的“⿊科技”")]),_._v(" "),t("ul",[t("li",[_._v("在1991年，我刚接触计算机的时候，很多计算机还没有硬盘。整个操作系统都安装在5⼨或者3.5⼨的"),t("strong",[_._v("软盘")]),_._v(" ⾥\n"),t("ul",[t("li",[_._v("软盘，"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%BD%AF%E7%9B%98",target:"_blank",rel:"noopener noreferrer"}},[_._v("维基百科"),t("OutboundLink")],1),_._v("，"),t("strong",[_._v("软盘")]),_._v("（Floppy Disk，香港作"),t("strong",[_._v("磁碟")]),_._v("，台湾作"),t("strong",[_._v("磁片")]),_._v("，简称“sm”）在台湾也称"),t("strong",[_._v("軟磁碟")])])])]),_._v(" "),t("li",[_._v("不过，很快⼤部分计算机都开始⽤上了直接安装在主板上的机械硬盘")])]),_._v(" "),t("p",[_._v("机械硬盘的生命⼒仍然⾮常顽强。⽆论是作为个⼈电脑的数据盘，还是在数据中⼼⾥⾯⽤作海量数据的存 储，机械硬盘仍然在被⼤量使⽤。不仅如此，随着成本的不断下降，"),t("strong",[_._v("机械硬盘还替代掉了很多传统的存储设 备")]),_._v("，⽐如，以前常常⽤来备份冷数据的"),t("strong",[_._v("磁带")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"_55-理解disruptor-下-不需要换挡和踩刹车的cpu-有多快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_55-理解disruptor-下-不需要换挡和踩刹车的cpu-有多快"}},[_._v("#")]),_._v(" 55.理解"),t("code",[_._v("Disruptor")]),_._v("（下）：不需要换挡和踩刹车的CPU，有多快?")]),_._v(" "),t("h2",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[_._v("#")]),_._v(" 结束语👍")]),_._v(" "),t("ul",[t("li",[_._v("知也无涯，愿你也享受发现的乐趣")]),_._v(" "),t("li",[_._v("Facebook的⽂化⾥⾯喜欢⽤各种⼩标语，其中有⼀条我很喜欢：“"),t("code",[_._v("Done is better than perfect")]),_._v("”。翻译成 中⽂就是，“完成⽐完美更好”。写这个专栏的时候，我对这⼀点的体会特别深刻。在学习更多深⼊知识的 时候，我希望你也可以抱有这样的态度。")]),_._v(" "),t("li",[_._v("与其半途⽽费，不如先囫囵吞枣，硬着头⽪看完再说。新的知识第 ⼀遍没有百分百看懂，⽽随着时间的推移，慢慢领悟成⻓了，这才是⼈⽣的常态。⽽我所⻅到的优秀的⼯程 师⼤都会经历这样的成⻓过程。")]),_._v(" "),t("li",[_._v("在学习HDD硬盘原理的时候，你能知道为什么⽤它来记录⽇志很好，但是拿来作为KV数据库就很糟 糕；在学习CPU Cache的时候，你实际⽤代码体会⼀下它有多快，为什么Disruptor⾥⾯的缓存⾏填充这样 的⼩技巧，能够把性能发挥到极致。")])]),_._v(" "),t("h2",{attrs:{id:"faq第1期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq第1期"}},[_._v("#")]),_._v(" FAQ第1期")]),_._v(" "),t("blockquote",[t("p",[_._v("学与不学，知识就在那里，不如就先学好了")])]),_._v(" "),t("ul",[t("li",[_._v("其实操作系统也是一个“软件”，而开发操作系统，只需要关注到“组成原理”或者“体系结构”就好了，不需要真的了解硬件。")]),_._v(" "),t("li",[_._v("操作系统，其实是在“组成原理”所讲的“指令集”上做一层封装。")]),_._v(" "),t("li",[_._v("体系结构、操作系统、编译原理以及计算机网络，都可以认为是组成原理的后继课程。")]),_._v(" "),t("li",[_._v("体系结构不是一个系统软件，它更多地是讲，如何量化地设计和研究体系结构和指令集。")]),_._v(" "),t("li",[_._v("操作系统、编译原理和计算机网络都是基于体系结构之上的系统软件。其实这几门基础学科，都是环环相扣，相互渗透的，每一门课都不可能独立存在。")])]),_._v(" "),t("blockquote",[t("p",[_._v("“图灵机”和“冯·诺依曼机”的区别")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("在我看来，图灵机就是一个抽象的“思维实验”")])]),_._v(" "),t("li",[t("p",[_._v("而冯·诺依曼机就是对应着这个“思维实验”的“物理实现”。如果我们把“图灵机”当成“灵魂”，代表计算机最抽象的本质，那么“冯诺伊曼机”就是“肉体”，代表了计算机最具体的本质。这两者之间颇有理论物理学家和实验物理学家的合作关系的意思，可谓是一个问题的两面。")])])]),_._v(" "),t("blockquote",[t("p",[_._v("工作多年，如何保持对知识清晰、准确的认识？")])]),_._v(" "),t("p",[_._v("我之前跟很多人聊过，发现工作很多年之后的工程师，在计算机科学的基础知识上，反而比不上很多应届的同学。我总结下来，大概有这么几个因素。")]),_._v(" "),t("ul",[t("li",[_._v("首先，很多工程师只是满足于工作的需求被满足了，没有真的深入去搞清楚一个问题的原理。从网络上搜索一段代码，复制粘贴到自己的程序里，只要能跑就认为问题解决了，并没有深入一行行看明白每行代码到底是做了什么，为什么要这么做。")]),_._v(" "),t("li",[_._v("至于究竟该怎么去掌握知识，其实没有什么特别好的方法。我就说说我一般会怎么做")]),_._v(" "),t("li",[_._v("一方面，遇到疑难问题、复杂的系统时，必须要用更底层更本质的理解计算机运作的方式，去处理问题，自然会去回头把这些基础知识捡起来")]),_._v(" "),t("li",[_._v("另一方面，时不时抽点时间回头看看一些“大部头”的教科书，对我自己而言，本身就很有自我满足感，而这种自我满足感也会促使我不断去读它们，从而形成一个良性循环。")])]),_._v(" "),t("h2",{attrs:{id:"特别加餐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特别加餐"}},[_._v("#")]),_._v(" 特别加餐")]),_._v(" "),t("ul",[t("li",[_._v("Developer Partner,开发伙伴")]),_._v(" "),t("li",[_._v("slogan，口号")])]),_._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),t("ul",[t("li",[_._v("徐文浩，极客时间，《深入浅出计算机组成原理》2019-04-22")])])])}),[],!1,null,null,null);t.default=s.exports}}]);