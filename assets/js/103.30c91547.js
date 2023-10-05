(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{395:function(s,a,n){"use strict";n.r(a);var t=n(14),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux磁盘disk和分区分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux磁盘disk和分区分析"}},[s._v("#")]),s._v(" Linux磁盘disk和分区分析")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mount | column -t                              # 查看挂接的分区状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l                            # 查看所有分区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# swapon -s                                          # 查看所有交换分区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hdparm -i /dev/hda                          # 查看磁盘参数(仅适用于IDE设备)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dmesg | grep IDE                             # 查看启动时IDE设备检测状况")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h                                                       # 查看各分区使用情况")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-1-磁盘-du和df的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-磁盘-du和df的区别"}},[s._v("#")]),s._v(" 2.1.磁盘-du和df的区别")]),s._v(" "),a("p",[s._v("​\tLinux df（英文全拼："),a("strong",[s._v("disk free")]),s._v("） 命令用于显示目前在 Linux 系统上的文件系统"),a("strong",[s._v("磁盘使用情况")]),s._v("统计")]),s._v(" "),a("p",[s._v("df 命令的全称是"),a("code",[s._v("Disk Free")]),s._v(" ，显而易见它是统计磁盘中空闲的空间，也即空闲的磁盘块数。它是通过文件系统磁盘块分配图进行计算出的。\ndu 命令的全称是 "),a("code",[s._v("Disk Used")]),s._v(" ，统计磁盘有已经使用的空间。它是直接统计各文件各目录的大小，而不是从硬盘获得信息的。")]),s._v(" "),a("ul",[a("li",[s._v("du和df不一致情况模拟，两者还是有很大区别的，有时候其输出结果甚至非常悬殊")])]),s._v(" "),a("p",[s._v("2.1 du的工作原理")]),s._v(" "),a("p",[s._v("du命令会对待统计文件逐个调用fstat这个系统调用，获取文件大小。它的数据是基于文件获取的，所以有很大的灵活性，不一定非要针对一个分区，可以跨越多个分区操作。如果针对的目录中文件很多，du速度就会很慢了。")]),s._v(" "),a("p",[s._v("2.2 df的工作原理")]),s._v(" "),a("p",[s._v("df命令使用的事statfs这个系统调用，直接读取分区的超级块信息获取分区使用情况。它的数据是基于分区元数据的，所以只能针对整个分区。由于df直接读取超级块，所以运行速度不受文件多少影响。")]),s._v(" "),a("p",[s._v("3 du和df不一致情况模拟")]),s._v(" "),a("p",[s._v("常见的df和du不一致情况就是文件删除的问题。当一个文件被删除后，在文件系统目录中已经不可见了，所以du就不会再统计它了。然而如果此时还有运行的进程持有这个已经被删除了的文件的句柄，那么这个文件就不会真正在磁盘中被删除，分区超级块中的信息也就不会更改。这样df仍旧会统计这个被删除了的文件。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-llvm在80g的硬盘上-几乎满了的一次诊断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-llvm在80g的硬盘上-几乎满了的一次诊断"}},[s._v("#")]),s._v(" 2.2.llvm在80G的硬盘上-几乎满了的一次诊断")]),s._v(" "),a("p",[a("code",[s._v("df -h")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@ubuntu:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\nFilesystem                   Size  Used Avail Use% Mounted on\nudev                          16G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   16G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".2G  636K  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".2G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /run\n/dev/mapper/ubuntu--vg-root   77G   64G⭐  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(".3G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),s._v("% /\ntmpfs                         16G   24K   16G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /dev/shm\ntmpfs                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/lock\ntmpfs                         16G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   16G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/sda1                    512M  328K  512M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /boot/efi\ntmpfs                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".2G     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".2G   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/user/0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"查看当前目录下-文件夹大小情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前目录下-文件夹大小情况"}},[s._v("#")]),s._v(" 查看当前目录下-文件夹大小情况")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("du -h --max-depth=1")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@ubuntu:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -h --max-depth=1")]),s._v("\n44K\t./work\n20K\t./.local\n44K\t./beifen\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0K\t./.cache\n354M\t./.vscode-server\n104K\t./exp\n61G\t./huawei ⭐\n16K\t./.ssh\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(".0K\t./.gnupg\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(".0K\t./.ansible\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(".0K\t./.vim\n61G\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"查看指定目录的大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看指定目录的大小"}},[s._v("#")]),s._v(" 查看指定目录的大小")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("# du -sh <目录名>")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@ubuntu:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -sh huawei/")]),s._v("\n59G\thuawei/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@ubuntu:~"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fdisk -l   # 查看所有分区")]),s._v("\nDisk /dev/sda: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" GiB⭐, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("85899345920")]),s._v(" bytes, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("167772160")]),s._v(" sectors\nUnits: sectors of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisklabel type: gpt\nDisk identifier: 162A1967-DB00-4554-B407-ECD56031888D\n\nDevice       Start       End   Sectors  Size Type\n/dev/sda1     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050623")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1048576")]),s._v("  512M EFI System\n/dev/sda2  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1050624")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("167770111")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("166719488")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("79")]),s._v(".5G Linux LVM ⭐\n\n\nDisk /dev/mapper/ubuntu--vg-root: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("78.6")]),s._v(" GiB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("84330676224")]),s._v(" bytes, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("164708352")]),s._v(" sectors\nUnits: sectors of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\n\n\nDisk /dev/mapper/ubuntu--vg-swap_1: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("980")]),s._v(" MiB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1027604480")]),s._v(" bytes, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2007040")]),s._v(" sectors\nUnits: sectors of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"什么是磁盘阵列技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是磁盘阵列技术"}},[s._v("#")]),s._v(" 什么是磁盘阵列技术")])])}),[],!1,null,null,null);a.default=e.exports}}]);