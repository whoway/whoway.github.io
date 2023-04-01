(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{416:function(s,n,a){"use strict";a.r(n);var t=a(14),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mysql语句工程写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql语句工程写法"}},[s._v("#")]),s._v(" mysql语句工程写法")]),s._v(" "),n("h2",{attrs:{id:"目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),n("p",[s._v("[TOC]")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#目录"}},[s._v("目录")])]),n("li",[n("a",{attrs:{href:"#面试-mysql语法"}},[s._v("面试-Mysql语法")])]),n("li",[n("a",{attrs:{href:"#_1-建立table"}},[s._v("1.建立table")])]),n("li",[n("a",{attrs:{href:"#_2-内连接"}},[s._v("2.内连接")]),n("ul",[n("li",[n("a",{attrs:{href:"#等价于inner-join"}},[s._v("等价于inner join")])]),n("li",[n("a",{attrs:{href:"#坑-自然连接和内连接有什么区别"}},[s._v("坑-自然连接和内连接有什么区别")])])])]),n("li",[n("a",{attrs:{href:"#_3-外连接"}},[s._v("3.外连接")]),n("ul",[n("li",[n("a",{attrs:{href:"#左外连接、左连接"}},[s._v("左外连接、左连接")])]),n("li",[n("a",{attrs:{href:"#右外连接、右连接"}},[s._v("右外连接、右连接")])]),n("li",[n("a",{attrs:{href:"#不支持-全连接"}},[s._v("不支持-全连接")])])])]),n("li",[n("a",{attrs:{href:"#_4-组合查询-union和union-all"}},[s._v("4.组合查询-union和union all")]),n("ul",[n("li",[n("a",{attrs:{href:"#默认会去除相同行"}},[s._v("默认会去除相同行")])]),n("li",[n("a",{attrs:{href:"#保留想同行-union-all"}},[s._v("保留想同行-union all")])])])]),n("li",[n("a",{attrs:{href:"#如何优化慢查询语句"}},[s._v("如何优化慢查询语句")])]),n("li",[n("a",{attrs:{href:"#面试代码题"}},[s._v("面试代码题")]),n("ul",[n("li",[n("a",{attrs:{href:"#_1-查询排名前10的数据"}},[s._v("1.查询排名前10的数据")])]),n("li",[n("a",{attrs:{href:"#sql查询各科成绩前三名"}},[s._v("sql查询各科成绩前三名")])]),n("li",[n("a",{attrs:{href:"#_2-mysql查询第1到2这2条语句"}},[s._v("2.mysql查询第1到2这2条语句")])]),n("li",[n("a",{attrs:{href:"#_3-联表查询"}},[s._v("3.联表查询")])])])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"面试-mysql语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试-mysql语法"}},[s._v("#")]),s._v(" 面试-Mysql语法")]),s._v(" "),n("h2",{attrs:{id:"_1-建立table"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立table"}},[s._v("#")]),s._v(" 1.建立table")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create table student(\n    number INT NOT NULL AUTO_INCREMENT COMMENT '学号',\n    name VARCHAR(5) COMMENT '姓名',\n    major VARCHAR(30) COMMENT '专业',\n    PRIMARY KEY(number)\n)Engine=InnoDB CHARSET=utf8 COMMENT '学生信息表';\n\ncreate table score(\n    number INT COMMENT '学号',\n    subject VARCHAR(30) COMMENT '科目',\n    score TINYINT COMMENT '成绩',\n    PRIMARY KEY(number, subject)\n)Engine=InnoDB CHARSET=utf8 COMMENT '学生成绩表';\n \n \nINSERT into student VALUES(20180101, '张三', '软件学院');\nINSERT into student VALUES(20180102, '李四', '计算机科学与工程');\nINSERT into student VALUES(20180103, '王五', '计算机科学与工程');\n\nINSERT into score VALUES(20180101, 'MySQL是怎样运行的', 78);\nINSERT into score VALUES(20180101, '深入浅出MySQL', 88);\nINSERT into score VALUES(20180102, '深入浅出MySQL', 98);\nINSERT into score VALUES(20180102, 'MySQL是怎样运行的', 100);\nINSERT into score VALUES(20180105, 'MySQL是怎样运行的', 66);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"_2-内连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-内连接"}},[s._v("#")]),s._v(" 2.内连接")]),s._v(" "),n("p",[s._v('内连接（等值连接）AAA inner BBB  XX on\n自连接，自连接可以看成内连接的一种，只是连接的表是自身而已。，\n「employee」 AS e1 INNER JOIN 「employee」 AS e2 ON e1.department = e2.department AND e2.name = "Jim";')]),s._v(" "),n("p",[s._v("内连接和自然连接的区别：内连接提供连接的列，而自然连接自动连接所有同名列。\n交叉连接（CROSS JOIN）：有两种，显式的和隐式的")]),s._v(" "),n("p",[s._v("显式的交叉连接，使用CROSS JOIN。\nSELECT O.ID, O.ORDER_NUMBER, C.ID,\nC.NAME\nFROM ORDERS as O\ncross join\nCUSTOMERS as C\nWHERE O.ID=1;")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT * \nfrom student, score \nwhere student.number=score.number;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("20180101\t张三\t软件学院\t20180101\tMySQL是怎样运行的\t78\n20180101\t张三\t软件学院\t20180101\t深入浅出MySQL\t88\n20180102\t李四\t计算机科学与工程\t20180102\tMySQL是怎样运行的\t100\n20180102\t李四\t计算机科学与工程\t20180102\t深入浅出MySQL\t98")]),s._v(" "),n("ul",[n("li",[s._v("==王五缺考，但是查不到==")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number, student.name, score.subject, score.score\nfrom student, score \nwhere student.number=score.number;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("20180101\t张三\tMySQL是怎样运行的\t78\n20180101\t张三\t深入浅出MySQL\t88\n20180102\t李四\tMySQL是怎样运行的\t100\n20180102\t李四\t深入浅出MySQL\t98")]),s._v(" "),n("h3",{attrs:{id:"等价于inner-join"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#等价于inner-join"}},[s._v("#")]),s._v(" 等价于inner join")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number, student.name, score.subject, score.score\nfrom student\ninner join \nscore \non student.number=score.number;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("20180101\t张三\tMySQL是怎样运行的\t78\n20180101\t张三\t深入浅出MySQL\t88\n20180102\t李四\tMySQL是怎样运行的\t100\n20180102\t李四\t深入浅出MySQL\t98")]),s._v(" "),n("ul",[n("li",[s._v("==王五缺考，但是查不到==")]),s._v(" "),n("li",[s._v("注意：==内连接里面的on，使用和where等价，on语句只有在"),n("strong",[s._v("外连接")]),s._v("才能发挥用途！==")])]),s._v(" "),n("h3",{attrs:{id:"坑-自然连接和内连接有什么区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#坑-自然连接和内连接有什么区别"}},[s._v("#")]),s._v(" 坑-自然连接和内连接有什么区别")]),s._v(" "),n("p",[s._v("自然连接natural join")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("aaa AS A natural join bbb AS B;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("自然连接是基于两个表之间的共同列进行匹配的一种连接方式，它不是内连接（"),n("code",[s._v("INNER JOIN")]),s._v("）的一种。")]),s._v(" "),n("p",[s._v("在自然连接中，MySQL会自动查找两个表中具有相同名称的列，并将它们作为连接条件。因此，自然连接不需要指定连接条件。而在内连接中，我们需要显式地指定要连接的列和连接条件。")]),s._v(" "),n("p",[s._v("虽然自然连接和内连接都会返回匹配的行，但它们的区别在于，自然连接除了返回匹配的行，还会返回两个表中所有其他非重复的列。而内连接只返回符合连接条件的匹配行。")]),s._v(" "),n("p",[s._v("需要注意的是，使用自然连接可能会造成一些潜在的问题。例如，如果两个表中具有相同名称的列包含了不同的数据类型，那么自然连接可能会出现数据类型不匹配的错误。此外，在具有多个匹配列的情况下，自然连接可能会导致意外的结果集。所以，在实际应用中，我们需要仔细考虑是否使用自然连接，或者选择使用其他类型的连接来实现我们的需求。")]),s._v(" "),n("h2",{attrs:{id:"_3-外连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-外连接"}},[s._v("#")]),s._v(" 3.外连接")]),s._v(" "),n("p",[s._v("为了解决==王五缺考，但是查不到==，使用外连接的on，而不是where语句！！")]),s._v(" "),n("p",[s._v("​\t外连接  外连接保留了"),n("strong",[s._v("没有关联")]),s._v("的那些行（OUTER JOIN）\n左外连接 Customers left outer join Orders on Customers.cust_id = Orders.cust_id\n​\t左外连接就是"),n("strong",[s._v("保留左表（此时左边表是-驱动表，右边的是被驱动表）没有关联的行")]),s._v("\n右外连接 RIGHT  OUTER  JOIN")]),s._v(" "),n("p",[s._v("​\t右外连接就是"),n("strong",[s._v("保留右表（此时右边表是-驱动表，左边的是被驱动表）没有关联的行")])]),s._v(" "),n("p",[s._v("全外连接 FULL OUTER JOIN")]),s._v(" "),n("ul",[n("li",[s._v("参考资料：《Mysql是怎样运行的》P183-P185")])]),s._v(" "),n("h3",{attrs:{id:"左外连接、左连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#左外连接、左连接"}},[s._v("#")]),s._v(" 左外连接、左连接")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number, student.name, score.subject, score.score\nfrom student\nleft join \nscore \non student.number=score.number;  #注意！！！没有用where了\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("20180101\t张三\tMySQL是怎样运行的\t78\n20180101\t张三\t深入浅出MySQL\t88\n20180102\t李四\tMySQL是怎样运行的\t100\n20180102\t李四\t深入浅出MySQL\t98\n20180103\t王五\t(NULL)      (NULL)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"右外连接、右连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#右外连接、右连接"}},[s._v("#")]),s._v(" 右外连接、右连接")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number, student.name, score.subject, score.score\nfrom student\nright join \nscore \non student.number=score.number;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("20180101\t张三\tMySQL是怎样运行的\t78\n20180101\t张三\t深入浅出MySQL\t88\n20180102\t李四\tMySQL是怎样运行的\t100\n20180102\t李四\t深入浅出MySQL\t98\n(NULL)  (NULL) MySQL是怎样运行的\t66  #注意是因为，student.number不存在05号，所以才是NULL\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("==总结：左、右外连接，其实只在驱动表的选取方式上不同，在其他方面都一样，所以，优化器会把右外查询转换为左外查询==")])]),s._v(" "),n("h3",{attrs:{id:"不支持-全连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不支持-全连接"}},[s._v("#")]),s._v(" 不支持-全连接")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number, student.name, score.subject, score.score\nfrom student\nfull join \nscore \non student.number=score.number;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("语法报错")])]),s._v(" "),n("p",[s._v("MySQL目前并不支持"),n("code",[s._v("FULL JOIN")]),s._v("语法，但是可以使用其他方式实现"),n("code",[s._v("FULL JOIN")]),s._v("的效果。")]),s._v(" "),n("p",[s._v("一种方法是将"),n("code",[s._v("LEFT JOIN")]),s._v("和"),n("code",[s._v("RIGHT JOIN")]),s._v("合并使用，并使用"),n("code",[s._v("UNION")]),s._v("操作在结果集中去除重复行。")]),s._v(" "),n("h2",{attrs:{id:"_4-组合查询-union和union-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-组合查询-union和union-all"}},[s._v("#")]),s._v(" 4.组合查询-union和union all")]),s._v(" "),n("p",[s._v("​\t组合查询，使用 UNION 来组合两个查询，如果第一个查询返回 M 行，第二个查询返回 N 行，那么组合查询的结果一般为M+N 行\n1、"),n("strong",[s._v("每个查询「必须」包含相同的列")]),s._v("、==表达式==和"),n("strong",[s._v("聚集函数")]),s._v("。\n2、union默认会去除相同行」，如果需要保留相同行，使用 "),n("code",[s._v("union all")]),s._v("\n3、"),n("strong",[s._v("只能包含一个 ORDER BY 子句")]),s._v("，并且必须位于语句的最后")]),s._v(" "),n("h3",{attrs:{id:"默认会去除相同行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认会去除相同行"}},[s._v("#")]),s._v(" 默认会去除相同行")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number\nfrom student\nunion\nSELECT score.number\nfrom score ;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("20180101\n20180102\n20180103\n20180105")]),s._v(" "),n("h3",{attrs:{id:"保留想同行-union-all"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#保留想同行-union-all"}},[s._v("#")]),s._v(" 保留想同行-union all")]),s._v(" "),n("ul",[n("li",[s._v("需要保留相同行，使用 union all")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT student.number\nfrom student\nunion all\nSELECT score.number\nfrom score ;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("20180101\n20180102\n20180103\n20180101\n20180101\n20180102\n20180102\n20180105")]),s._v(" "),n("h2",{attrs:{id:"如何优化慢查询语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何优化慢查询语句"}},[s._v("#")]),s._v(" 如何优化慢查询语句")]),s._v(" "),n("p",[s._v("如何优化慢查询语句")]),s._v(" "),n("p",[s._v("为了优化慢查询语句，我们可以采取以下措施：")]),s._v(" "),n("ol",[n("li",[s._v("了解SQL语句的执行顺序。SQL语句中的各关键词执行顺序如下：首先执行FROM、JOIN来确定表之间的连接关系，得到初步的数据。然后利用WHERE关键字后面的条件对符合条件的语句进行筛选。其中，FROM&JOIN&WHERE用于确定要查询的表的范围，涉及到哪些表。["),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/617907173",target:"_blank",rel:"noopener noreferrer"}},[s._v("1"),n("OutboundLink")],1),s._v("]")]),s._v(" "),n("li",[s._v("分析慢查询语句的执行计划。通过执行计划，我们可以了解SQL查询的具体执行过程，包括表之间的连接方式、索引的使用情况等。同时，根据执行计划的结果，我们还可以进行索引调整、表分区等优化操作。")]),s._v(" "),n("li",[s._v("确认是否存在索引缺失或索引覆盖不全等问题。索引是提高查询效率的重要手段，因此需要对表的设计和索引进行优化。")]),s._v(" "),n("li",[s._v("检查查询条件和连接条件是否合理。在编写SQL查询语句时，需要特别注意查询条件和连接条件的设置是否合理。有时候，一些不必要的查询条件或者错误的连接条件都会导致查询效率低下。")]),s._v(" "),n("li",[s._v("充分利用数据库缓存。在查询过程中，数据库会将频繁查询的数据缓存起来，以便下一次查询时可以快速返回结果。因此，我们需要充分利用数据库缓存，减少不必要的查询。")])]),s._v(" "),n("p",[s._v("以上措施是优化慢查询语句的通用方法，不同的数据库可能还有其他特定的优化方法。例如，在使用SQL Server时，我们可以采用以下方法来解决性能问题：识别并解决受优化器超时影响的慢查询；确定CPU性能过高的问题。["),n("a",{attrs:{href:"https://learn.microsoft.com/zh-cn/troubleshoot/sql/database-engine/performance/troubleshoot-slow-running-queries",target:"_blank",rel:"noopener noreferrer"}},[s._v("2"),n("OutboundLink")],1),s._v("]")]),s._v(" "),n("h2",{attrs:{id:"面试代码题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试代码题"}},[s._v("#")]),s._v(" 面试代码题")]),s._v(" "),n("h3",{attrs:{id:"_1-查询排名前10的数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询排名前10的数据"}},[s._v("#")]),s._v(" 1.查询排名前10的数据")]),s._v(" "),n("h3",{attrs:{id:"sql查询各科成绩前三名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql查询各科成绩前三名"}},[s._v("#")]),s._v(" sql查询各科成绩前三名")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("create table scores(\nname varchar(100),\nsubject varchar(100),\nscore int\n);\ninsert into scores values\n('学生a','java','100'),\n('学生b','java','90'),\n('学生c','java','90'),\n('学生d','java','60'),\n('学生e','java','80'),\n('学生a','python','100'),\n('学生b','python','90'),\n('学生c','python','90'),\n('学生d','python','60'),\n('学生e','python','80');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("MYSQL取表中分数排名前10%的学生信息")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT `name` FROM(\n  select table.`name`, @row_num:=@row_num+1 as row_num\n  from table, (SELECT @row_num:=1) as b\n  ORDER BY score DESC\n) new_table\nwhere new_table.row_num <= @row_num*0.1;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_2-mysql查询第1到2这2条语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql查询第1到2这2条语句"}},[s._v("#")]),s._v(" 2.mysql查询第1到2这2条语句")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT * from Customers limit 0,2; #LIMIT子句限制查询结果的条数, 表示从【LIMIT 初始位置，记录数】\n\n#1、注意1，初始位置是从0开始\n#2、注意2，是初始位置+记录数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DROP TABLE IF EXISTS `Customers`;\n\nCREATE TABLE IF NOT EXISTS `Customers`(\n    cust_id VARCHAR(255) DEFAULT NULL\n);\n\nINSERT `Customers` VALUES ('A'),('B'),('C');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_3-联表查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-联表查询"}},[s._v("#")]),s._v(" 3.联表查询")]),s._v(" "),n("p",[s._v("联表查询在平时的项目中经常遇到,比方我们有如下两张表,从上面两张表可以看出他们存在"),n("code",[s._v("dept id")]),s._v("为关联的关系，所以就会存在如下需求：找出EmployeeTB中员工与DeptTB中部门之间对应关系；")]),s._v(" "),n("ul",[n("li",[s._v("参考资料：https://www.jianshu.com/p/1d02f1e9aad1")])])])}),[],!1,null,null,null);n.default=e.exports}}]);