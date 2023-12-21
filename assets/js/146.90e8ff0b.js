(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{571:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-守护进程-daemon-解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-守护进程-daemon-解析"}},[s._v("#")]),s._v(" Linux 守护进程（daemon）解析")]),s._v(" "),t("p",[s._v("守护进程是后台运行的、系统启动是就存在的、不予任何终端关联的，用于处理一些系统级别任务的特殊进程。实现一个守护进程，其实就是将普通进程按照上述特性改造为守护进程的过程。")]),s._v(" "),t("h2",{attrs:{id:"相关基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关基本概念"}},[s._v("#")]),s._v(" 相关基本概念")]),s._v(" "),t("h3",{attrs:{id:"_1-作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-作业"}},[s._v("#")]),s._v(" 1.作业")]),s._v(" "),t("p",[s._v("作业（job）是用户完成某项任务而启动的进程，一个作业既可以只包含一个进程，也可以包含多个进程，进程之间互相协作完成任务。")]),s._v(" "),t("p",[s._v("例如下列命令就是一个作业，它包括多个命令，在执行时 Shell 将启动两个进程：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/filesystems "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xfs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里会执行 cat 和 grep 两个进程")]),s._v(" "),t("h3",{attrs:{id:"_2-进程组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-进程组"}},[s._v("#")]),s._v(" 2.进程组")]),s._v(" "),t("p",[s._v("进程组是一个或者多个进程的集合。一般由某个程序 fork 出一个家族来构成进程组，或者由管道命令建立作业构成进程组。")]),s._v(" "),t("p",[s._v("每个进程组有一个进程组 ID，进程组中的第一个进程叫做组长进程。进程组的进程组 ID 与组长进程的进程 ID 相等。")]),s._v(" "),t("p",[s._v("进程可以调用 setpgid 函数加入一个现有的进程组或者创建一个新的进程组。")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<unistd.h>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * 将 pid 进程的进程组 ID 设置为 pgid\n * 当 pid 为 0 时，则使用调用进程的进程 ID\n * 成功返回 0，失败返回 -1\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setpgid")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid_t pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pid_t pgid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"_3-终端登录过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-终端登录过程"}},[s._v("#")]),s._v(" 3. 终端登录过程")]),s._v(" "),t("h3",{attrs:{id:"_4-会话-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-会话-session"}},[s._v("#")]),s._v(" 4. 会话（session）")]),s._v(" "),t("p",[s._v("当我们打开一个新的终端时，总会创建一个新的 session。这表明 session 是我们和 shell 交互的一个过程。打开终端时创建的 shell 进程叫做该 session 的会话首进程（session leader）")]),s._v(" "),t("p",[s._v("打开终端时创建的 shell 进程通常会 open "),t("code",[s._v("/dev/tty+数字")]),s._v(" 或者 "),t("code",[s._v("/dev/pts+数字")]),s._v(" 文件，这些文件通常与实际的终端设备或者虚拟终端设备关联，比如嵌入式设备，一般会与串口相关联。这些设备称之为"),t("strong",[s._v("控制终端（controlling terminal）")]),s._v("。与控制终端连接的会话首进程被称为"),t("strong",[s._v("控制进程（controlling process）")])]),s._v(" "),t("p",[s._v("通常，会话开始于用户登录，终止于用户退出，期间的所有进程都属于这个会话。一个会话一般包含一个会话首进程、一个前台进程组和多个个后台进程组，控制终端可有可无；需要注意的是，前台进程组只有一个，后台进程组可以有多个，这些进程组共享同一个控制终端。")]),s._v(" "),t("p",[t("img",{attrs:{src:"image.png",alt:"Alt text"}})]),s._v(" "),t("p",[s._v("前台进程组中的进程可以向终端设备进行读、写操作。该进程组的 ID 等于控制终 会话中除了会话首进程和前台进程组以外的所有进程，都属于后台进程组。该进程组中的进程只能向终端设备进行写操作。")]),s._v(" "),t("h3",{attrs:{id:"孤儿进程组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#孤儿进程组"}},[s._v("#")]),s._v(" 孤儿进程组")]),s._v(" "),t("h2",{attrs:{id:"setsid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setsid"}},[s._v("#")]),s._v(" setsid")]),s._v(" "),t("h2",{attrs:{id:"控制终端-controlling-terminal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制终端-controlling-terminal"}},[s._v("#")]),s._v(" 控制终端(controlling terminal)")]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("Linux/Unix 系统编程手册（下册）第 34 章")]),s._v(" "),t("li",[s._v("Unix 环境高级编程（第三版）第 9 章")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/sparkdev/p/12146305.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux session(会话)"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/mijichui2153/article/details/81394387",target:"_blank",rel:"noopener noreferrer"}},[s._v("创建守护进程的步骤"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);