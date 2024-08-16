(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{451:function(s,n,a){"use strict";a.r(n);var t=a(14),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"svn常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#svn常用命令"}},[s._v("#")]),s._v(" SVN常用命令")]),s._v(" "),n("img",{attrs:{src:"https://www.w3cschool.cn/attachments/image/20170803/1501746576743481.jpg"}}),s._v(" "),n("p",[s._v("Apache "),n("strong",[s._v("S")]),s._v("ub"),n("strong",[s._v("v")]),s._v("ersio"),n("strong",[s._v("n")]),s._v(" 通常被缩写成 SVN")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Subversion，n.破坏；颠覆；覆灭；颠覆（活动）")])]),s._v(" "),n("li",[n("p",[s._v("Subversion 在 2000 年由 CollabNet Inc 开发")])])]),s._v(" "),n("h2",{attrs:{id:"_1-环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境搭建"}},[s._v("#")]),s._v(" 1.环境搭建")]),s._v(" "),n("p",[s._v("Subversion 是一个受欢迎的开源的版本控制工具。他在互联网免费提供并且开源。")]),s._v(" "),n("p",[s._v("大多数 "),n("code",[s._v("GNU/Linux")]),s._v(" 发行版系统自带，所以它很有可能已经安装在你的系统上了。可以使用下面命令检查是否安装了。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("svn "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_2-svn的常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-svn的常用命令"}},[s._v("#")]),s._v(" 2.svn的常用命令")]),s._v(" "),n("h3",{attrs:{id:"_2-1-下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-下载"}},[s._v("#")]),s._v(" 2.1.下载")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代码检出，checkout也可以简写为co，这个命令会把服务器上的代码同步到我们电脑上")]),s._v("\n将文件checkout到本地目录\nsvn co svn://svnbucket.com/xxx/xxx\nsvn checkout path（path是服务器上的目录）\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("简写："),n("code",[s._v("svn co")])]),s._v(" "),n("h3",{attrs:{id:"_2-2-添加-提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-添加-提交"}},[s._v("#")]),s._v(" 2.2.添加+提交")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加新文件到版本库")]),s._v("\nsvn add filename\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加当前目录下所有php文件")]),s._v("\nsvn add *.php\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归添加当前目录下的所有新文件")]),s._v("\nsvn add . --no-ignore --force\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交代码")]),s._v('\nsvn commit -m "提交描述"\n\n\n'),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定文件的所有log")]),s._v("\nsvn log test.php\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定版本号的log")]),s._v("\nsvn log -r 100\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销本地文件的修改（还没提交的）")]),s._v("\nsvn revert test.php\nsvn revert -r 目录名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销目录下所有本地修改")]),s._v("\nsvn revert --recursive 目录名\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前工作区的所有改动")]),s._v("\nsvn diff\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前工作区test.php文件与最新版本的差异")]),s._v("\nsvn diff test.php  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定版本号比较差异")]),s._v("\nsvn diff -r 200:201 test.php\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前工作区和版本301中bin目录的差异")]),s._v("\nsvn diff -r 301 bin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前工作区的状态")]),s._v("\nsvn status\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看svn信息")]),s._v("\nsvn info\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文件列表，可以指定-r查看，查看指定版本号的文件列表")]),s._v("\nsvn ls \nsvn ls -r 100\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("h3",{attrs:{id:"_2-3-获取远程更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-获取远程更新"}},[s._v("#")]),s._v(" 2.3.获取远程更新")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新代码# 更新代码，执行此命令后会把其他人提交的代码全部更新到我们自己电脑上，update也可以简写为up")]),s._v("\nsvn up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"分支管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[s._v("#")]),s._v(" 分支管理")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建分支，从主干创建一个分支保存到branches/online1.0")]),s._v("\nsvn "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"描述内容"')]),s._v(" http://svnbucket.com/repos/trunk http://svnbucket.com/repos/branches/online1.0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并主干上的最新代码到分支上")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" branches/online1.0\nsvn merge http://svnbucket.com/repos/trunk \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分支合并到主干")]),s._v("\nsvn merge "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reintegrate")]),s._v(" http://svnbucket.com/repos/branches/online1.0\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\nsvn "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" http://svnbucket.com/repos/branches/online1.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_3-常用的场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用的场景"}},[s._v("#")]),s._v(" 3.常用的场景")]),s._v(" "),n("h3",{attrs:{id:"gcc代码下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gcc代码下载"}},[s._v("#")]),s._v(" gcc代码下载")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("svn co http://路径(目录或文件的全路径)　[本地目录全路径]")])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("svn co svn://gcc.gnu.org/svn/gcc/branches/cfo-branch gcc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[n("a",{attrs:{href:"http://gnu.ist.utl.pt/software/gcc/svn.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("GCC: Anonymous read-only SVN access"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"language-txt line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-txt"}},[n("code",[s._v("svn co svn://gcc.gnu.org/svn/gcc/branches/cfo-branch gcc\n----省略------\nA    gcc/ABOUT-NLS\nA    gcc/README\nA    gcc/INSTALL\nA    gcc/INSTALL/README\nA    gcc/mkdep\n U   gcc\nChecked out revision 280157.\n[root@CentosLinux ~]# ll\ntotal 24\n-rwxr-xr-x  1 root root 9040 Oct  7 11:22 a.out\ndrwxr-xr-x 25 root root 4096 Oct  7 20:29 gcc\n-rw-r--r--  1 root root  436 Oct  7 11:22 main.cc\ndrwxr-xr-x  7 root root 4096 Oct  3 09:27 webserver\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[s._v("SVN，"),n("a",{attrs:{href:"https://www.runoob.com/svn/svn-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("SVN，"),n("a",{attrs:{href:"https://www.w3cschool.cn/svn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("w3cschool"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("SVN 官网："),n("a",{attrs:{href:"https://subversion.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://subversion.apache.org/"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("Github SVN 源码："),n("a",{attrs:{href:"https://github.com/apache/subversion",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/apache/subversion"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("SVNBucket官网："),n("a",{attrs:{href:"https://svnbucket.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://svnbucket.com/"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("SVNBucket源代码："),n("a",{attrs:{href:"https://github.com/gzyunke/svnbucket",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/gzyunke/svnbucket"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=e.exports}}]);