(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{328:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mysql理论类知识总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql理论类知识总结"}},[t._v("#")]),t._v(" Mysql理论类知识总结")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("font "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background:yellow"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("font "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background: MediumSpringGreen"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#目录"}},[t._v("目录")])]),s("li",[s("a",{attrs:{href:"#_1-学习方法论"}},[t._v("1.学习方法论")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-为什么-mysql-采用-b-树作为索引"}},[t._v("2.为什么 MySQL 采用 B+ 树作为索引？")])]),s("li",[s("a",{attrs:{href:"#mysql-给主键列设置自增属性的代码例子"}},[t._v("mysql 给主键列设置自增属性的代码例子")])]),s("li",[s("a",{attrs:{href:"#实现【事务】必须要遵守-4-个特性"}},[t._v("实现【事务】必须要遵守 4 个特性？")])]),s("li",[s("a",{attrs:{href:"#进阶-innodb-引擎通过什么技术来保证事务的这四个特性的呢"}},[t._v("进阶-InnoDB 引擎通过什么技术来保证事务的这四个特性的呢？")])]),s("li",[s("a",{attrs:{href:"#_2-并行事务会引发哪3个问题"}},[t._v("2.并行事务会引发哪3个问题？")])]),s("li",[s("a",{attrs:{href:"#_3-请你说一说mysql的四种隔离状态-隔离级别"}},[t._v("3.请你说一说mysql的四种隔离状态（隔离级别）")])]),s("li",[s("a",{attrs:{href:"#面试扩展"}},[t._v("面试扩展：")])]),s("li",[s("a",{attrs:{href:"#_4进阶问题-这四种隔离级别具体是如何实现的呢"}},[t._v("4进阶问题-这四种隔离级别具体是如何实现的呢？")])]),s("li",[s("a",{attrs:{href:"#_4-2-请你介绍一下mysql的mvcc机制"}},[t._v("4.2.请你介绍一下mysql的MVCC机制")])]),s("li",[s("a",{attrs:{href:"#最左匹配原则的原理"}},[t._v("最左匹配原则的原理")])])])]),s("li",[s("a",{attrs:{href:"#各种索引的-术语"}},[t._v("各种索引的-术语")]),s("ul",[s("li",[s("a",{attrs:{href:"#⭐️覆盖索引⭐️是什么、如何使用覆盖索引"}},[t._v("⭐️覆盖索引⭐️是什么、如何使用覆盖索引")])]),s("li",[s("a",{attrs:{href:"#⭐️索引的分类"}},[t._v("⭐️索引的分类")])])])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-学习方法论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-学习方法论"}},[t._v("#")]),t._v(" 1.学习方法论")]),t._v(" "),s("p",[t._v("分清楚概念中『逻辑上的』和『实现层面上的』")]),t._v(" "),s("p",[t._v("将数据结构和算法中的『逻辑结构』和『物理结构』的概念，转移到『数据库』的学习")]),t._v(" "),s("ul",[s("li",[t._v("如上：\n"),s("ul",[s("li",[s("strong",[t._v("逻辑")]),t._v("上有：隔离级别")]),t._v(" "),s("li",[s("strong",[t._v("物理实现")]),t._v("上有：MVCC啥的")])])]),t._v(" "),s("li",[t._v("优点："),s("font",{staticStyle:{background:"yellow"}},[t._v("将各种术语概念连接在一起，以后就能少被网上层次不齐的资料概念带偏")])],1)]),t._v(" "),s("h3",{attrs:{id:"_2-为什么-mysql-采用-b-树作为索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么-mysql-采用-b-树作为索引"}},[t._v("#")]),t._v(" 2.为什么 MySQL 采用 B+ 树作为索引？")]),t._v(" "),s("h4",{attrs:{id:"mysql的范围查询啥意思"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql的范围查询啥意思"}},[t._v("#")]),t._v(" mysql的范围查询啥意思？")]),t._v(" "),s("p",[t._v("MySQL的范围查询是指通过指定一个数值范围来筛选数据的查询方式。可以使用 BETWEEN AND 操作符或者 IN 操作符来实现。")]),t._v(" "),s("p",[t._v("使用 BETWEEN AND 操作符，在 WHERE 子句中指定一个"),s("strong",[t._v("数值范围")]),t._v("，MySQL 会返回"),s("strong",[t._v("该范围")]),t._v("内所有符合条件的记录。例如，下面的 SQL 语句将从表中选择 age 字段值在 18 到 30 之间的记录：")]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("复制代码SELECT * FROM Persons WHERE age BETWEEN 18 AND 30;\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("使用 IN 操作符，可以指定"),s("strong",[t._v("多个数值范围")]),t._v("，MySQL 会返回匹配任意一个指定范围的所有符合条件的记录。例如，下面的 SQL 语句将从表中选择 age 字段值等于 18 或 21 或 25 的记录：")]),t._v(" "),s("div",{staticClass:"language-mysql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("复制代码SELECT * FROM Persons WHERE age IN (18, 21, 25);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("以上内容参考了 [1] 和 [2]。")]),t._v(" "),s("h4",{attrs:{id:"什么叫自增主键索引-举个例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么叫自增主键索引-举个例子"}},[t._v("#")]),t._v(" 什么叫自增主键索引，举个例子")]),t._v(" "),s("p",[t._v("​\t自增主键索引是指在数据库表中，使用"),s("strong",[t._v("自增长的数字")]),t._v("作为主键，并且为该主键创建索引。举个例子，比如一个用户表，其中id字段为自增主键索引，每次插入新用户时，"),s("strong",[t._v("id会自动递增")]),t._v("，同时该字段也被索引，方便快速查询。")]),t._v(" "),s("p",[t._v("​\t自增主键索引是一种特殊的索引类型，它是在一个表中为主键添加 AUTO_INCREMENT 属性后所创建的一类索引。自增主键索引可以大幅提高插入数据的性能，并且还可以保证数据的唯一性。")]),t._v(" "),s("p",[t._v("​\t举个例子，考虑下面这样一个表：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("复制代码CREATE TABLE Persons (\n  id INT(11) NOT NULL AUTO_INCREMENT,\n  name VARCHAR(50) NOT NULL,\n  age INT(3) NOT NULL,\n  PRIMARY KEY (id)\n);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("在该表中，我们为 id 字段添加了 AUTO_INCREMENT 属性，并将其作为主键。这样，每次往表中插入数据时，MySQL 都会自动生成一个唯一的 id 值并填充到 id 字段中。")]),t._v(" "),s("p",[t._v("同时，由于 id 字段被定义为主键，也会自动创建一个以 id 为索引字段的索引（即自增主键索引），该索引会对 id 字段进行排序，并且能够快速定位到指定的数据记录。")]),t._v(" "),s("p",[t._v("举个例子，如果我们要查询 id 为 1000 的数据记录，MySQL 可以直接从自增主键索引中查找到该记录所在的页码和页内偏移量，然后再跳转到对应的磁盘块上读取实际的数据记录，从而减少了磁盘 I/O 操作次数，提高了查询效率。")]),t._v(" "),s("h4",{attrs:{id:"那我普通的列能不能设置自增呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#那我普通的列能不能设置自增呢"}},[t._v("#")]),t._v(" 那我普通的列能不能设置自增呢？")]),t._v(" "),s("p",[t._v("数据库中普通列如何设置自增")]),t._v(" "),s("p",[t._v("自增属性只能用于"),s("strong",[t._v("主键列")]),t._v("或"),s("strong",[t._v("唯一索引列")]),t._v("上，因此普通的列不能设置自增。")]),t._v(" "),s("p",[t._v("这是因为自增属性的本质就是在每次插入数据时自动生成一个唯一值，从而保证主键或唯一索引的唯一性。如果在一个普通的列上定义自增属性，那么该列的值将与其他记录的该列值相同，不能满足唯一性要求，也就失去了自增属性的意义。")]),t._v(" "),s("p",[t._v("当然，你可以通过使用触发器（Trigger）或自定义函数（User-Defined Functions）等手段来模拟实现自增属性，但这些方法会带来额外的性能开销和复杂性，不如直接使用主键或唯一索引来实现自增功能更加方便和高效。")]),t._v(" "),s("h3",{attrs:{id:"mysql-给主键列设置自增属性的代码例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-给主键列设置自增属性的代码例子"}},[t._v("#")]),t._v(" mysql 给主键列设置自增属性的代码例子")]),t._v(" "),s("p",[t._v("当我们定义一个学生表时，可以通过以下 MySQL 代码给 "),s("code",[t._v("id")]),t._v(" 列设置自增属性：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("复制代码CREATE TABLE student (\n  id INT(11) NOT NULL AUTO_INCREMENT,\n  name VARCHAR(50),\n  age INT(3),\n  PRIMARY KEY (id)\n);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("以上代码中，我们在 "),s("code",[t._v("id")]),t._v(" 列上使用了 "),s("code",[t._v("AUTO_INCREMENT")]),t._v(" 关键字来设置其自增属性，并将其作为主键。这样，每当向 "),s("code",[t._v("student")]),t._v(" 表中插入一条新的记录时，"),s("code",[t._v("id")]),t._v(" 列的值会自动递增，从而保证了每个学生记录都有唯一的 "),s("code",[t._v("id")]),t._v(" 值。")]),t._v(" "),s("p",[t._v("需要注意的是，定义主键时必须使用 "),s("code",[t._v("NOT NULL")]),t._v(" 约束来确保主键值的唯一性，因为在 MySQL 中，主键列默认是不能包含 "),s("code",[t._v("NULL")]),t._v(" 值的。如果希望允许 "),s("code",[t._v("NULL")]),t._v(" 值，可以在定义列时显式地指定 "),s("code",[t._v("NULL")]),t._v("，并且将其与其他列一起作为复合主键来使用。")]),t._v(" "),s("h3",{attrs:{id:"实现【事务】必须要遵守-4-个特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现【事务】必须要遵守-4-个特性"}},[t._v("#")]),t._v(" 实现【事务】必须要遵守 4 个特性？")]),t._v(" "),s("p",[s("strong",[t._v("原子性（Atomicity）")]),t._v("：一个事务中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节，而且事务在执行过程中发生错误，会被回滚到事务开始前的状态，就像这个事务从来没有执行过一样，")]),t._v(" "),s("p",[s("strong",[t._v("持久性（Durability）")]),t._v("：事务处理结束后，对数据的修改就是永久的，即便系"),s("strong",[t._v("统故障也不会丢失")]),t._v("「因为有"),s("font",{staticStyle:{background:"yellow"}},[t._v("redo日志")]),t._v("」")],1),t._v(" "),s("p",[s("strong",[t._v("隔离性（Isolation）")]),t._v("：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致，因为多个事务同时使用相同的数据时，不会相互干扰，每个事务都有一个完整的数据空间，对其他并发事务是隔离的。")]),t._v(" "),s("p",[s("strong",[t._v("一致性（Consistency）")]),t._v("：是指事务操作前和操作后，数据满足"),s("font",{staticStyle:{background:"yellow"}},[t._v("「完整性约束」")]),t._v("，数据库保持一致性状态。")],1),t._v(" "),s("ul",[s("li",[t._v("我的理解：事务操作前到后的"),s("strong",[t._v("状态")]),t._v("，通过逆向操作，是"),s("font",{staticStyle:{background:"yellow"}},[t._v("可逆的")]),t._v("！")],1)]),t._v(" "),s("h3",{attrs:{id:"进阶-innodb-引擎通过什么技术来保证事务的这四个特性的呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶-innodb-引擎通过什么技术来保证事务的这四个特性的呢"}},[t._v("#")]),t._v(" 进阶-InnoDB 引擎通过什么技术来保证事务的这四个特性的呢？")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("持久性")]),t._v("是通过 redo log （重做日志）来保证的；")]),t._v(" "),s("li",[s("strong",[t._v("原子性")]),t._v("是通过 "),s("strong",[t._v("undo log（回滚日志）")]),t._v(" 来保证的；")]),t._v(" "),s("li",[s("strong",[t._v("隔离性")]),t._v("是通过 MVCC（多版本并发控制） 或锁机制来保证的；（我觉得还有啥也不管的，马不停蹄的读）")]),t._v(" "),s("li",[s("font",{staticStyle:{background:"yellow"}},[t._v("一致性")]),t._v("则是通过持久性+原子性+隔离性来保证；")],1)]),t._v(" "),s("h3",{attrs:{id:"_2-并行事务会引发哪3个问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-并行事务会引发哪3个问题"}},[t._v("#")]),t._v(" 2.并行事务会引发哪3个问题？")]),t._v(" "),s("ul",[s("li",[t._v("详细介绍一下什么是脏读、不可重复读、幻读")])]),t._v(" "),s("p",[t._v("3种问题，因为MySQL 服务端是允许多个客户端连接的，这意味着 MySQL 会出现"),s("strong",[t._v("同时处理多个事务")]),t._v("的情况。")]),t._v(" "),s("h4",{attrs:{id:"问题严重程度从1-3变麻烦"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题严重程度从1-3变麻烦"}},[t._v("#")]),t._v(" 问题严重程度从1->3变麻烦！")]),t._v(" "),s("p",[t._v("​\t我们提到，当多个事务并发执行时可能会遇到「脏读、不可重复读、幻读」的现象，这些现象会对事务的一致性产生不同程序的影响。")]),t._v(" "),s("ul",[s("li",[t._v("脏读：读到"),s("strong",[t._v("其他事务未提交")]),t._v("的数据；")]),t._v(" "),s("li",[t._v("不可重复读：前后"),s("strong",[t._v("读取")]),t._v("的数据不一致；")]),t._v(" "),s("li",[t._v("幻读：前后"),s("strong",[t._v("统计")]),t._v("的记录数量不一致。")])]),t._v(" "),s("p",[t._v("严重性排序："),s("font",{staticStyle:{background:"yellow"}},[t._v("幻读>不可重复读>脏读")])],1),t._v(" "),s("h4",{attrs:{id:"_1-脏读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-脏读"}},[t._v("#")]),t._v(" 1.脏读")]),t._v(" "),s("p",[t._v("2个事务操作，A事务读写数后修改数据的时候，B事物进行了读取，然后A事物后续又回滚了，那么B就是读取到了脏数据！")]),t._v(" "),s("p",[s("strong",[t._v("如果一个B事务「读到」了另一个A「"),s("font",{staticStyle:{background:"yellow"}},[t._v("未提交事务")]),t._v("修改过的数据(因为事务 A 是还没提交事务的，也就是它随时可能发生回滚操作，"),s("strong",[t._v("如果在上面这种情况事务 A 发生了回滚，那么事务 B 刚才得到的数据就是过期的数据，这种现象就被称为脏读。")]),t._v(")」，就意味着发生了「脏读」现象。")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-不可重复读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-不可重复读"}},[t._v("#")]),t._v(" 2.不可重复读")]),t._v(" "),s("p",[s("font",{staticStyle:{background:"yellow"}},[t._v("select操作（查询操作）")]),t._v("，在1个事务中进行前后2次查询，发现查询结果不一致！")],1),t._v(" "),s("h4",{attrs:{id:"_3-幻读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-幻读"}},[t._v("#")]),t._v(" 3.幻读")]),t._v(" "),s("p",[s("font",{staticStyle:{background:"yellow"}},[t._v("count操作（统计操作）")]),t._v("，在1个事务中进行前后2次统计，发现结果不一致")],1),t._v(" "),s("p",[s("strong",[t._v("在一个事务内多次查询（统计）某个符合查询条件的「记录数量」，如果出现前后两次查询到的记录数量不一样的情况，就意味着发生了「幻读」现象。")])]),t._v(" "),s("h3",{attrs:{id:"_3-请你说一说mysql的四种隔离状态-隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-请你说一说mysql的四种隔离状态-隔离级别"}},[t._v("#")]),t._v(" 3.请你说一说mysql的四种隔离状态（隔离级别）")]),t._v(" "),s("p",[t._v("​\t我们提到，当多个事务并发执行时可能会遇到「脏读、不可重复读、幻读」的现象，这些现象会对事务的一致性产生不同程序的影响。")]),t._v(" "),s("p",[t._v("​\tSQL 标准提出了四种隔离级别"),s("strong",[t._v("来规避这些现象")]),t._v("，"),s("strong",[t._v("隔离级别越高，性能效率就越低")]),t._v("，这四个隔离级别如下：")]),t._v(" "),s("p",[t._v("✅表示解决了！")]),t._v(" "),s("h4",{attrs:{id:"_4大类-隔离级别从1-4变高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4大类-隔离级别从1-4变高"}},[t._v("#")]),t._v(" 4大类：隔离级别从1->4变高")]),t._v(" "),s("h4",{attrs:{id:"_1-读未提交-read-uncommitted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-读未提交-read-uncommitted"}},[t._v("#")]),t._v(" 1.读未提交（read-uncommitted）")]),t._v(" "),s("p",[t._v("指"),s("strong",[t._v("一个事务还没提交时")]),t._v("，它做的"),s("strong",[t._v("变更")]),t._v("就能被其他事务看到（这啥也没干，放任不管！）")]),t._v(" "),s("p",[t._v("存在的问题：")]),t._v(" "),s("p",[t._v("🚫脏读（定义就是说明这个没解决）")]),t._v(" "),s("p",[t._v("🚫不可重复读（显然，推理容易知道）")]),t._v(" "),s("p",[t._v("🚫幻读（显然，进一步推理也解决不了）")]),t._v(" "),s("h4",{attrs:{id:"_2-读提交-read-committed-名字解决了-读非提交-即脏读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-读提交-read-committed-名字解决了-读非提交-即脏读"}},[t._v("#")]),t._v(" 2.读提交（read committed）-"),s("font",{staticStyle:{background:"yellow"}},[t._v("名字解决了：读非提交（即脏读）")])],1),t._v(" "),s("p",[t._v("指"),s("strong",[t._v("一个事务提交之后")]),t._v("，它做的变更"),s("strong",[t._v("才能")]),t._v("被其他事务看到；（就是比第1级别，约束了一下，必须事务提交了才能被看到）")]),t._v(" "),s("p",[t._v("解决的问题：")]),t._v(" "),s("p",[t._v("✅脏读")]),t._v(" "),s("p",[t._v("存在的问题：")]),t._v(" "),s("p",[t._v("🚫不可重复读（显然，推理容易知道）")]),t._v(" "),s("p",[t._v("🚫幻读（显然，进一步推理也解决不了）")]),t._v(" "),s("h4",{attrs:{id:"_3-可重复读-repeatable-read-名字解决了-不可重复读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-可重复读-repeatable-read-名字解决了-不可重复读"}},[t._v("#")]),t._v(" 3.可重复读（repeatable read）"),s("font",{staticStyle:{background:"yellow"}},[t._v("名字解决了：不可重复读")])],1),t._v(" "),s("p",[t._v("指一个事务"),s("strong",[t._v("执行过程")]),t._v("中看到的数据，一直跟这个事务"),s("strong",[t._v("启动时")]),t._v("看到的数据是一致的，"),s("strong",[s("font",{staticStyle:{background:"yellow"}},[t._v("MySQL InnoDB 引擎的默认隔离级别")])],1),t._v("；")]),t._v(" "),s("p",[t._v("解决的问题：")]),t._v(" "),s("p",[t._v("✅脏读")]),t._v(" "),s("p",[t._v("✅不可重复读")]),t._v(" "),s("p",[t._v("存在的问题：")]),t._v(" "),s("p",[t._v("🚫幻读（显然，进一步推理也解决不了）")]),t._v(" "),s("h3",{attrs:{id:"面试扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试扩展"}},[t._v("#")]),t._v(" 面试扩展：")]),t._v(" "),s("p",[t._v("​\t不同的数据库厂商对 SQL 标准中规定的 4 种隔离级别的支持不一样，有的数据库只实现了其中几种隔离级别，"),s("strong",[t._v("我们讨论的 "),s("font",{staticStyle:{background:"yellow"}},[t._v("MySQL 虽然支持 4 种隔离级别，但是与SQL 标准中规定的各级隔离级别允许发生的现象却有些出入")])],1),t._v("。")]),t._v(" "),s("p",[t._v("​\tMySQL 在「可重复读」隔离级别下，可以"),s("font",{staticStyle:{background:"yellow"}},[t._v("很大程度上避免幻读现象的发生（注意是很大程度避免，并不是彻底避免")]),t._v("），所以 MySQL 并不会使用「串行化」隔离级别来避免幻读现象的发生，因为使用「串行化」隔离级别会"),s("strong",[t._v("影响性能")]),t._v("。")],1),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("MySQL InnoDB 引擎的默认隔离级别虽然是「可重复读」，但是它很大程度上避免幻读现象（并不是完全解决了，详见这篇"),s("a",{attrs:{href:"https://xiaolincoding.com/mysql/transaction/phantom.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章 (opens new window)"),s("OutboundLink")],1),t._v("）")]),t._v("，"),s("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("解决的方案有两种")]),t._v("：")],1),t._v(" "),s("ul",[s("li",[t._v("针对**"),s("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("快照读")]),s("strong",[t._v("（普通 select 语句），是")]),t._v("通过 "),s("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("MVCC 方式")]),t._v("解决了幻读**，因为可重复读隔离级别下，事务执行过程中看到的数据，一直跟这个事务启动时看到的数据是一致的，即使中途有其他事务插入了一条数据，是查询不出来这条数据的，所以就很好了避免幻读问题。")],1),t._v(" "),s("li",[t._v("针对**"),s("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("当前读")]),s("strong",[t._v("（select ... for update 等语句），是")]),t._v("通过 "),s("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("next-key lock（记录锁+间隙锁）")]),t._v("方式解决了幻读**，因为当执行 "),s("code",[t._v("select ... for update")]),t._v(" 语句的时候，会加上 next-key lock，如果"),s("strong",[t._v("有其他事务")]),t._v("在 next-key lock 锁范围内插入了一条记录，那么"),s("strong",[t._v("这个插入语句就会被阻塞，无法成功插入")]),t._v("，所以就很好了避免幻读问题。")],1)]),t._v(" "),s("h4",{attrs:{id:"_4-串行化-serializable-无脑上大锁-啥都能解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-串行化-serializable-无脑上大锁-啥都能解决"}},[t._v("#")]),t._v(" 4.串行化（serializable）"),s("font",{staticStyle:{background:"yellow"}},[t._v("无脑上大锁，啥都能解决")])],1),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("对记录加上读写锁")]),t._v("，在多个事务对这条记录进行读写操作时，如果发生了读写冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行；")]),t._v(" "),s("p",[t._v("解决的问题：")]),t._v(" "),s("p",[t._v("✅脏读")]),t._v(" "),s("p",[t._v("✅不可重复读")]),t._v(" "),s("p",[t._v("✅幻读")]),t._v(" "),s("p",[t._v("不存在，并行化的问题了！")]),t._v(" "),s("h3",{attrs:{id:"_4进阶问题-这四种隔离级别具体是如何实现的呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4进阶问题-这四种隔离级别具体是如何实现的呢"}},[t._v("#")]),t._v(" 4进阶问题-这四种隔离级别具体是如何实现的呢？")]),t._v(" "),s("p",[t._v("（easy）对于「读未提交」隔离级别的事务来说，因为"),s("strong",[t._v("可以读到未提交事务修改的数据")]),t._v("，所以"),s("strong",[t._v("直接「马不停蹄的」读取最新的数据")]),t._v("就好了；")]),t._v(" "),s("p",[t._v("​\t对于「读提交」和「可重复读」隔离级别的事务来说，它们是通过 "),s("strong",[s("font",{staticStyle:{background:"yellow"}},[t._v("Read View （读取视图，大概意思就是当前情况创建1个试图）")]),t._v("来实现的，它们的区别在于"),s("font",{staticStyle:{background:"yellow"}},[t._v("创建 Read View 的时机不同")]),t._v("，大家可以把 Read View 理解成一个数据快照，就像相机拍照那样，定格某一时刻的风景。")],1)]),t._v(" "),s("ul",[s("li",[t._v("「读提交」隔离级别是在「每个语句"),s("font",{staticStyle:{background:"yellow"}},[t._v("执行前")]),t._v("」都会重新生成一个 Read View")],1),t._v(" "),s("li",[t._v("而「可重复读」隔离级别是「"),s("font",{staticStyle:{background:"yellow"}},[t._v("启动事务时")]),t._v("」生成一个 Read View，然后整个事务期间都在用这个 Read View。")],1)]),t._v(" "),s("p",[t._v("注意，"),s("strong",[t._v("执行「开始事务」命令，并不意味着启动了事务")]),t._v("。在 MySQL 有两种开启事务的命令，分别是：")]),t._v(" "),s("ul",[s("li",[t._v("第一种："),s("code",[t._v("begin/start transaction")]),t._v(" 命令；")]),t._v(" "),s("li",[t._v("第二种："),s("code",[t._v("start transaction with consistent snapshot")]),t._v(" 命令；\n"),s("ul",[s("li",[s("font",{staticStyle:{background:"yellow"}},[t._v("consistent snapshot, 一致性快照")])],1)])])]),t._v(" "),s("p",[t._v("这两种开启事务的命令，事务的启动时机是不同的：")]),t._v(" "),s("ul",[s("li",[t._v("执行了 "),s("code",[t._v("begin/start transaction")]),t._v(" 命令后，并"),s("strong",[t._v("不代表事务启动了")]),t._v("。只有在执行这个命令后，执行了增删查改操作的 SQL 语句，才是事务真正启动的时机；")]),t._v(" "),s("li",[t._v("执行了 "),s("code",[t._v("start transaction with consistent snapsho")]),t._v("t 命令，就会"),s("font",{staticStyle:{background:"yellow"}},[t._v("马上启动事务")]),t._v("。")],1)]),t._v(" "),s("p",[t._v("（easy）对于「串行化」隔离级别的事务来说，通过"),s("strong",[t._v("加读写锁的方式")]),t._v("来避免并行访问；")]),t._v(" "),s("h3",{attrs:{id:"_4-2-请你介绍一下mysql的mvcc机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-请你介绍一下mysql的mvcc机制"}},[t._v("#")]),t._v(" 4.2.请你介绍一下mysql的MVCC机制")]),t._v(" "),s("p",[t._v("3个构成！")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("版本链")])]),t._v(" "),s("li",[s("p",[t._v("undo-logo（版本指针）")])]),t._v(" "),s("li",[s("p",[t._v("read view")])])]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("MVCC（Multi-Version Concurrency Control，多版本并发控制）")]),t._v("，MVCC是一种多版本并发控制机制是MySQL的"),s("strong",[t._v("InnoDB存储引擎")]),s("font",{staticStyle:{background:"yellow"}},[t._v("实现")]),s("strong",[t._v("隔离级别")]),t._v("的一种具体方式，用于实现"),s("strong",[t._v("读已提交读")]),t._v("和"),s("strong",[t._v("可重复读")]),t._v("这两种隔离级别。")],1),t._v(" "),s("p",[t._v("​\tMVCC是通过保存数据在某个时间点的"),s("strong",[t._v("快照")]),t._v("来实现该机制，其在每行记录后面保存两个"),s("strong",[t._v("隐藏的列")]),t._v("，分别保存这个行的创建版本号和删除版本号，然后Innodb的MVCC使用到的快照存储在Undo日志中，该日志通过回滚指针把一个数据行所有快照连接起来。")]),t._v(" "),s("h3",{attrs:{id:"最左匹配原则的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最左匹配原则的原理"}},[t._v("#")]),t._v(" 最左匹配原则的原理")]),t._v(" "),s("p",[t._v("​\t最左匹配原则都是针对"),s("strong",[t._v("联合索引")]),t._v("来说的，最左匹配原则就是指在联合索引中，如果你的 SQL 语句中用到了联合索引中的"),s("strong",[t._v("最左边的索引")]),t._v("，那么这条 SQL 语句就可以利用这个联合索引去进行匹配。例如某表现有索引(a,b,c)，现在你有如下语句：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这样可以利用到定义的索引（a,b,c）,用上a,b,c")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这样可以利用到定义的索引（a,b,c）,用上a,b")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这样⭐可以⭐利用到定义的索引（a,b,c）,用上a,c（mysql有查询优化器）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这样也可以利用到定义的索引（a,b,c）,用上a")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这样⭐不可以⭐利用到定义的索引（a,b,c）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这样可以利用到定义的索引（a,b,c），⭐但只用上a索引⭐，b,c索引用不到")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("ul",[s("li",[t._v("显然，联合索引非最左匹配还会导致"),s("strong",[t._v("索引失效")])])]),t._v(" "),s("h2",{attrs:{id:"各种索引的-术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#各种索引的-术语"}},[t._v("#")]),t._v(" 各种索引的-术语")]),t._v(" "),s("h3",{attrs:{id:"⭐️覆盖索引⭐️是什么、如何使用覆盖索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐️覆盖索引⭐️是什么、如何使用覆盖索引"}},[t._v("#")]),t._v(" ⭐️覆盖索引⭐️是什么、如何使用覆盖索引")]),t._v(" "),s("p",[t._v("覆盖索引（Covering Index），又称索引覆盖，是一种索引技术。当我们在执行 SQL 查询时，如果查询的结果集中只包括了那些已经被索引的列，那么可以利用覆盖索引直接从索引中获取数据，而无需回到数据表中进行查询，这样就避免了回表操作，提升了查询效率。")]),t._v(" "),s("p",[t._v("覆盖索引通常具有多列，而其中包括了非索引列。当 SQL 查询只用到了那些被索引列时，MySQL 不必从数据表中读取数据行，只需要通过遍历索引即可获取查询结果。因此，使用覆盖索引可以显著减少磁盘 I/O 操作和 CPU 计算，从而提高查询性能。")]),t._v(" "),s("p",[t._v("覆盖索引不仅适用于 MySQL 数据库，也广泛应用于其他关系型数据库系统。")]),t._v(" "),s("h3",{attrs:{id:"⭐️索引的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐️索引的分类"}},[t._v("#")]),t._v(" ⭐️索引的分类")]),t._v(" "),s("p",[t._v("​\t你知道索引有哪些吗？大家肯定都能霹雳啪啦地说出聚簇索引、主键索引、二级索引、普通索引、唯一索引、hash索引、B+树索引等等。")]),t._v(" "),s("p",[t._v("​\t然后再问你，你能将这些索引分一下类吗？可能大家就有点模糊了。其实，要对这些索引进行分类，要清楚这些索引的使用和实现方式，然后再针对有相同特点的索引归为一类。")]),t._v(" "),s("p",[t._v("​\t我们可以按照四个角度来分类索引。")]),t._v(" "),s("ul",[s("li",[t._v("按「⭐️数据结构」分类："),s("strong",[t._v("B+tree索引、Hash索引、Full-text索引")]),t._v("。")]),t._v(" "),s("li",[t._v("按「物理存储」分类："),s("strong",[t._v("聚簇索引（主键索引）、二级索引（辅助索引）")]),t._v("。")]),t._v(" "),s("li",[t._v("按「⭐️字段特性」分类："),s("strong",[t._v("主键索引、唯一索引、普通索引、前缀索引")]),t._v("。")]),t._v(" "),s("li",[t._v("按「⭐️字段个数」分类："),s("strong",[t._v("单列索引、联合索引")]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"主键索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主键索引"}},[t._v("#")]),t._v(" 主键索引")]),t._v(" "),s("p",[t._v("​\t主键索引就是建立在⭐️主键字段⭐️上的索引，通常在创建表的时候一起创建，一张表最多只有一个主键索引，索引列的值不允许有空值。")]),t._v(" "),s("p",[t._v("在创建表时，创建主键索引的方式如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_column_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"唯一索引⭐️"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引⭐️"}},[t._v("#")]),t._v(" 唯一索引⭐️")]),t._v(" "),s("p",[t._v("唯一索引建立在 ⭐️UNIQUE 字段⭐️上的索引，一张表可以有多个唯一索引，索引列的值必须唯一，但是允许有空值。")]),t._v(" "),s("p",[t._v("在创建表时，创建唯一索引的方式如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_column_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index_column_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("建表后，如果要创建唯一索引，可以使用这面这条命令：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_column_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index_column_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"普通索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通索引"}},[t._v("#")]),t._v(" 普通索引")]),t._v(" "),s("p",[t._v("普通索引就是建立在普通字段上的索引，既不要求字段为主键，也不要求字段为 UNIQUE。")]),t._v(" "),s("p",[t._v("在创建表时，创建普通索引的方式如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_column_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index_column_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("建表后，如果要创建普通索引，可以使用这面这条命令：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index_column_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index_column_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"前缀索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引"}},[t._v("#")]),t._v(" 前缀索引")]),t._v(" "),s("p",[t._v("前缀索引是指对字符类型字段的前几个字符建立的索引，而不是在整个字段上建立的索引，前缀索引可以建立在字段类型为 char、 varchar、binary、varbinary 的列上。")]),t._v(" "),s("p",[t._v("使用前缀索引的目的是为了减少索引占用的存储空间，提升查询效率。")]),t._v(" "),s("p",[t._v("在创建表时，创建前缀索引的方式如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    column_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("建表后，如果要创建前缀索引，可以使用这面这条命令：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INDEX")]),t._v(" index_name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[t._v("哔哩哔哩，"),s("a",{attrs:{href:"https://www.bilibili.com/video/BV15Y4y1i78Y?p=3&spm_id_from=pageDriver&vd_source=ea20f1fccee6fd3f1af7d59cd3ae7575",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL技术内幕-InnoDB存储引擎"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("MySQL 是怎样运行的：从根儿上理解 MySQL")])])])}),[],!1,null,null,null);s.default=e.exports}}]);