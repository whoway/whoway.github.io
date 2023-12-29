(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{320:function(t,r,i){"use strict";i.r(r);var s=i(14),v=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"数据库基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库基础"}},[t._v("#")]),t._v(" 数据库基础")]),t._v(" "),r("h2",{attrs:{id:"目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#目录"}},[t._v("目录")])]),r("li",[r("a",{attrs:{href:"#_1-数据设计基础"}},[t._v("1.数据设计基础")])]),r("li",[r("a",{attrs:{href:"#_2-红黑树"}},[t._v("2.红黑树")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-2-红黑树笔记"}},[t._v("2.2.红黑树笔记")])])])]),r("li",[r("a",{attrs:{href:"#_3-数据库的三大范式"}},[t._v("3.数据库的三大范式")])])])]),r("p"),t._v(" "),r("p",[t._v("[TOC]")]),t._v(" "),r("h2",{attrs:{id:"_1-数据设计基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据设计基础"}},[t._v("#")]),t._v(" 1.数据设计基础")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%E6%AD%A5%E9%AA%A4.png",alt:"数据库设计步骤"}})]),t._v(" "),r("h2",{attrs:{id:"_2-红黑树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-红黑树"}},[t._v("#")]),t._v(" 2.红黑树")]),t._v(" "),r("ul",[r("li",[t._v("维基百科-"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("红黑树的应用"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"_2-2-红黑树笔记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-红黑树笔记"}},[t._v("#")]),t._v(" 2.2.红黑树笔记")]),t._v(" "),r("blockquote",[r("p",[t._v("红黑树变色、自旋、自平衡原理")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/01.png",alt:"01"}})]),t._v(" "),r("ul",[r("li",[t._v("本节课的重点是，自旋和变色")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rb002.png",alt:"rb002"}})]),t._v(" "),r("ul",[r("li",[t._v("注意：红黑树新插入的节点『必须』是红色！")]),t._v(" "),r("li",[t._v("每个叶子节点都是黑色的空节点（NIL）！")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbb03.png",alt:"rbb03"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbb04.png",alt:"rbb04"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbb05.png",alt:"rbb05"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbb06.png",alt:"rbb06"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbb07.png",alt:"rbb07"}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("NIL的颜色必须是黑色的，在Java里面，他的值是NULL，因为这个叶子节点是虚拟出来的。")]),t._v(" "),r("p",[t._v("（这个是为了用来满足性质4的）")])])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbb08.png",alt:"rbb08"}})]),t._v(" "),r("p",[t._v("很显然有2个属性；\n1）不能有两个连续的红色")]),t._v(" "),r("p",[t._v("2）红色节点，他必须有父节点，而且这个父节点一定是黑色的。")]),t._v(" "),r("p",[t._v("3）红色节点不能为根节点（性质2），所以红色节点只能为"),r("strong",[t._v("子节点")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210702200325816.png",alt:"image-20210702200325816"}})]),t._v(" "),r("ul",[r("li",[t._v("叶子节点就是上面的，黑色椭圆")]),t._v(" "),r("li",[t._v("红色非平衡和黑色完美平衡（中庸），红黑树是不完美平衡的")]),t._v(" "),r("li",[t._v("AVL却是完美平衡")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rb10.png",alt:"rb10"}})]),t._v(" "),r("ul",[r("li",[t._v("因为左边这样的AVL，不稳定，他这个时候退化为链表了。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rb11.png",alt:"rb11"}})]),t._v(" "),r("p",[t._v("新增一个节点，你就要看看这棵树是否违反了我们红黑树的性质，然后，让他自己来平衡。")]),t._v(" "),r("p",[t._v("我们任何新增的红黑树的节点，默认都是新加"),r("strong",[t._v("红色")]),t._v("的节点。（因为这个不会影响性质5）")]),t._v(" "),r("p",[t._v("自平衡就是一个调整的过程。")]),t._v(" "),r("p",[t._v("具体的：")]),t._v(" "),r("p",[t._v("你新增的这个节点后，你去编代码的时候，你只需要考虑。从当前节点的三代！！")]),t._v(" "),r("p",[t._v("超过第4代就不管了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210702200621045.png",alt:"image-20210702200621045"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210702200632828.png",alt:"image-20210702200632828"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rb.png",alt:"rb"}})]),t._v(" "),r("p",[t._v("你祖父母都降级了，所以给他一个好处，就是把B节点给他了。")]),t._v(" "),r("p",[t._v("（只要有旋转，就会有"),r("strong",[t._v("一条线")]),t._v("互换的。）")]),t._v(" "),r("p",[r("strong",[t._v("旋转节点的圆心，一定是他的子节点！")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210702200729288.png",alt:"image-20210702200729288"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbleft.png",alt:"rbleft"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbleft2.png",alt:"rbleft2"}})]),t._v(" "),r("ul",[r("li",[t._v("上面的旋转，根本可以不分左边还是右边旋转。")]),t._v(" "),r("li",[t._v("下面是红黑树的操作：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210703091105553.png",alt:"image-20210703091105553"}})]),t._v(" "),r("p",[t._v("CRUD")]),t._v(" "),r("p",[t._v("c-"),r("strong",[t._v("新增")])]),t._v(" "),r("p",[t._v("查找很简答--------------")]),t._v(" "),r("p",[t._v("r-读，"),r("strong",[t._v("查找")])]),t._v(" "),r("p",[t._v("U-更新（查找到后改就）")]),t._v(" "),r("p",[t._v("D-删除（复杂）")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbcase.png",alt:"rbcase"}})]),t._v(" "),r("ul",[r("li",[t._v("上面是我编程的时候的很多case的。")]),t._v(" "),r("li",[t._v("上面是做红黑树的所有情况。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbcreate.png",alt:"rbcreate"}})]),t._v(" "),r("p",[t._v("直系CPG在一条线上，/或者\\")]),t._v(" "),r("p",[t._v("三角关系是，不在一条直线上（也2种）")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210703091322201.png",alt:"image-20210703091322201"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210703091336549.png",alt:"image-20210703091336549"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210703091344050.png",alt:"image-20210703091344050"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210703091354784.png",alt:"image-20210703091354784"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/rbtrac.png",alt:"rbtrac"}})]),t._v(" "),r("ul",[r("li",[t._v("三角关系，其实就是先转换为三点一线关系。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20210703091444837.png",alt:"image-20210703091444837"}})]),t._v(" "),r("h2",{attrs:{id:"_3-数据库的三大范式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库的三大范式"}},[t._v("#")]),t._v(" 3.数据库的三大范式")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("第一范式：当关系模式R的所有属性都不能再分解为更基本的数据单位时，称R是满足第一范式，即属性不可分")])]),t._v(" "),r("li",[r("p",[t._v("第二范式：如果关系模式R满足第一范式，并且R得所有非主属性都完全依赖于R的每一个候选关键属性，称R满足第二范式")])]),t._v(" "),r("li",[r("p",[t._v("第三范式：设R是一个满足第一范式条件的关系模式，X是R的任意属性集，如果X非传递依赖于R的任意一个候选关键字，称R满足第三范式，即非主属性不传递依赖于键码")])])])])}),[],!1,null,null,null);r.default=v.exports}}]);