(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{573:function(e,r,t){"use strict";t.r(r);var a=t(2),o=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("文章摘抄自 "),r("a",{attrs:{href:"https://qiushao.net/2020/02/22/Android%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E8%BF%9B%E9%98%B6/Android%E7%B3%BB%E7%BB%9F%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android系统开发进阶-系统启动流程概要"),r("OutboundLink")],1),e._v("，稍作修改。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/stingerzou/MyImages//20231204203043.png",alt:""}})]),e._v(" "),r("p",[e._v("(图片来自:http://gityuan.com/android/)")]),e._v(" "),r("p",[e._v("Android 系统启动过程由上图从下往上的一个过程是由 Boot Loader 引导开机，然后依次进入 -> Kernel -> Native -> Framework -> App")]),e._v(" "),r("h2",{attrs:{id:"bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader"}},[e._v("#")]),e._v(" BootLoader")]),e._v(" "),r("p",[e._v("板子上电后，芯片从固化在 ROM 里预设的代码(BOOT ROM)开始执行， BOOT ROM 会加载 Bootloader 到 RAM，然后把控制权交给 BootLoader。BootLoader 的作用是初始化硬件设备，加载内核文件，然后启动内核")]),e._v(" "),r("h2",{attrs:{id:"linux-kernel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux-kernel"}},[e._v("#")]),e._v(" Linux Kernel")]),e._v(" "),r("p",[e._v("Linux 内核负责初始化各种软硬件环境，加载驱动程序，挂载根文件系统(/)等，最重要的是，内核启动完成后，它会在根文件系统中寻找 "),r("code",[e._v("init")]),e._v(" 文件，然后启动 init 进程。")]),e._v(" "),r("h2",{attrs:{id:"init-进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#init-进程"}},[e._v("#")]),e._v(" init 进程")]),e._v(" "),r("p",[e._v("init 进程是 Linux 系统中用户空间的第一个进程，进程号为 1，我们可以说它是 root 进程或者所有进程的父进程。源码路径为: "),r("code",[e._v("Android/system/core/init/")])]),e._v(" "),r("p",[e._v("init 进程的主要工作如下：")]),e._v(" "),r("ul",[r("li",[e._v("挂载虚拟文件系统：如 /sys、/dev、/proc")]),e._v(" "),r("li",[e._v("启动 property 服务")]),e._v(" "),r("li",[e._v("启动 SELinux")]),e._v(" "),r("li",[e._v("解析执行 init.rc 文件")])]),e._v(" "),r("h2",{attrs:{id:"zygote-进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zygote-进程"}},[e._v("#")]),e._v(" zygote 进程")]),e._v(" "),r("p",[e._v("上面提到 init 进程在解析 init.rc 时，会创建 zygote 进程，它是 Android 系统最重要的进程之一。后续 Android 中的 App 进程都是由 zygote 进程 fork 出来的。因此，zygote 是 Android 系统所有应用的父进程。zygote 进程的实际执行文件并不是 zygote，而是 "),r("code",[e._v("/system/bin/app_process")]),e._v("。源码路径为: "),r("code",[e._v("Android/frameworks/base/cmds/app_process/")]),e._v("。　它会调用 "),r("code",[e._v("frameworks/base/core/jni/AndroidRuntime.cpp")]),e._v("　提供的接口启动 java 层的代码　"),r("code",[e._v("frameworks/base/core/java/com/android/internal/os/ZygoteInit.java")]),e._v("。至此，我们就进入到了 java 的世界。")]),e._v(" "),r("p",[e._v("zygote 的主要工作如下：")]),e._v(" "),r("ul",[r("li",[e._v("创建 java 虚拟机 AndroidRuntime")]),e._v(" "),r("li",[e._v("通过 AndroidRuntime 启动 ZygoteInit 进入 java 环境。")])]),e._v(" "),r("p",[e._v("ZygoteInit　的主要工作如下：")]),e._v(" "),r("ul",[r("li",[e._v("创建 socket 服务，接受 ActivityManagerService 的应用启动请求。")]),e._v(" "),r("li",[e._v("加载 Android framework 中的 class、res（drawable、xml信息、strings）到内存。Android 通过在 zygote 创建的时候加载资源，生成信息链接，再有应用启动，fork 子进程和父进程共享信息，不需要重新加载，同时也共享 VM。")]),e._v(" "),r("li",[e._v("启动 SystemServer。")]),e._v(" "),r("li",[e._v("监听 socket，当有启动应用请求到达，fork 生成 App 应用进程。")])]),e._v(" "),r("p",[e._v("zygote 进程的出现是为了能更快的启动应用。因为在 Android 中，每个应用都有对应一个虚拟机实例（AndroidRuntime）为应用分配不同的内存地址。如果 Android 系统为每一个应用启动不同的虚拟机实例，就会消耗大量的内存以及时间。因此，更好的办法应当是通过创建一个虚拟机进程，由该 VM 进程预加载以及初始化核心库类，然后，由该 VM 进程 Fork 出其他虚拟机进程，这样就能达到代码共享、低内存占用以及最小的启动时间，而这个 VM 进程就是 zygote。")]),e._v(" "),r("h2",{attrs:{id:"systemserver-进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#systemserver-进程"}},[e._v("#")]),e._v(" SystemServer 进程")]),e._v(" "),r("p",[e._v("与 Zygote 进程一样，SystemServer 进程同样是 Android 系统中最重要的进程之一。它的源码路径为: "),r("code",[e._v("Android/frameworks/base/services/java/com/android/server/SystemServer.java")])]),e._v(" "),r("p",[e._v("SystemServer 的主要的作用是启动各种系统服务，比如 ActivityManagerService，PackageManagerService，WindowManagerService 以及硬件相关的 Service 等服务，我们平时熟知的各种系统服务其实都是在 SystemServer 进程中启动的，这些服务都运行在同一进程（即 SystemServer 进程）的不同线程中，而当我们的应用需要使用各种系统服务的时候其实也是通过与 SystemServer 进程通讯获取各种服务对象的句柄进而执行相应的操作的。在所有的服务启动完成后，会调用各服务的 service.systemReady(…) 来通知各对应的服务，系统已经就绪。")]),e._v(" "),r("h2",{attrs:{id:"launcher-的启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#launcher-的启动"}},[e._v("#")]),e._v(" Launcher 的启动")]),e._v(" "),r("p",[e._v("Launcher 的启动比较复杂，而且不同版本的 Android 系统启动逻辑可能也不太一样，所以这里就不具体讨论，后续再专门讨论。但我们可以大概说明一下启动的策略。")]),e._v(" "),r("p",[e._v("我们知道　SystemServer　进程再启动的过程中会启动PackageManagerService，PackageManagerService启动后会将系统中的应用程序安装完成。SystemServer启动完所有的服务后，会调用各服务的 service.systemReady(…)。Launcher　的启动逻辑就在 ActivityManagerService.systemReady() 中。")]),e._v(" "),r("h2",{attrs:{id:"bootanimation-退出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootanimation-退出"}},[e._v("#")]),e._v(" BootAnimation 退出")]),e._v(" "),r("p",[e._v("Launcher 启动完之后，我们还看不到 Launcher，因为被 BootAnimation 的画面挡住了。BootAnimation　的退出也比较复杂，后续再详细讨论。大概是第一个应用起来之后，其 ActivityThread 线程进入空闲状态时，会通过某种机制把 BootAnimation 给退出。这里的第一个应用自然就是 Launcher了。这样就能确保在 BootAnimation 退出后，用户看到的不是黑屏，而是我们的桌面了。")]),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("至此，Android系统总算是启动完成了，上面提到的这些步骤都是非常复杂的，每个步骤都可以单独花一篇或者几篇来讨论。现在我们只需要有一个整体的概念就行，其他的细节问题后续再慢慢研究。")]),e._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://qiushao.net/2020/02/22/Android%E7%B3%BB%E7%BB%9F%E5%BC%80%E5%8F%91%E8%BF%9B%E9%98%B6/Android%E7%B3%BB%E7%BB%9F%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android系统开发进阶-系统启动流程概要"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);