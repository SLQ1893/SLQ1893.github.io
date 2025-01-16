## 1、Linux 是什么？

Linux 全称：GNU/Linux，是一种自由和开放源码的类 Unix 操作系统。

Linux 继承了 Unix 以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

## 2、Linux 和 Unix 的区别？

##### 1、开源情况

Unix 是商业不开源的，核心并不公开；

Linux 是免费开源的，源代码公开自由使用。

##### 2、硬件适用

在硬件方面，Linux 要求比 Unix 要低，没有 Unix 那么苛刻，Linux 安装比 Unix 更容易。

Unix 系统大多是与硬件配套的，也就是说，大多数 Unix 系统如 AIX、HP-UX 等是无法安装在 x86 服务器和个人计算机上的，而 Linux 则可以运行在多种硬件平台上。

## 3、Linux 系统有哪些优势？

##### Linux 系统有以下 6 个优势：

1、跨平台的硬件支持

2、丰富的软件支持

3、多用户多任务

4、可靠的安全性

5、良好的稳定性

6、完善的网络功能

7、支持良好的界面

## 4、Linux 怎么查看内核版本？

##### 1、cat /proc/version

![](/images/Linux/4_1.jpg)

##### 2、uname -a

![](/images/Linux/4_2.jpg)

## 5、RedHat、CentOS、Ubuntu 有什么区别？

CentOS 是 RedHat 的重编译、修复后的免费版本，两者使用同样的源代码，RedHat 是商业版本，需要付费使用，而 CentOS 则是免费使用。

CentOS 并不包含封闭源代码软件，追求稳定，娱乐性不多，适合服务器、老手使用。

Ubuntu 是一个以桌面应用为主的 Linux 开源操作系统，属于 Debian 系，软件管理 deb，apt-get，更新频繁，软件多，有自带商店，可以从商店里直接下载，界面友好，适合新手入门。

## 6、Linux 的体系结构是怎样的？

如图：

![](/images/Linux/6.jpg)

Linux 的体系结构可以分为两大块：

##### 1、用户空间（User Space）

用户空间又包括：

- 用户的应用程序（User Applications）
- C 库（C Library）。

##### 2、内核空间（Kernel Space）

内核空间又包括：

- 系统调用接口（System Call Interface）
- 内核（Kernel）
- 平台架构相关的代码（Architecture-Dependent Kernel Code）

## 7、Linux 内核是指什么？主要功能是？

如图所示：

![](/images/Linux/7.jpg)

**Linux 内核是指：Linux Kernel**，它是 Linux 操作系统的主要组件，也是计算机硬件与其进程之间的核心接口，它负责两者之间的通信，还要尽可能高效地管理资源。

##### Linux 内核有 4 个主要功能：

- 内存管理
- 进程管理
- 设备驱动程序
- 系统调用和安全防护

## 8、Linux 和 Windows 正反斜杠的区别？

Windows：

> "/"是表示参数，"\"是表示本地路径

Linux：

> "/"表示路径，"\"表示转义。

## 9、Linux 环境变量配置有哪几种方式？

环境变量配置文件

| 用户         | 环境变量配置文件                                   |
| ------------ | -------------------------------------------------- |
| 所有用户     | /etc/profile/<br/>/etc/bashrc<br/>/etc/environment |
| root         | /.bashrc/.bash-profile                             |
| 非 root 用户 | /home/非 root 用户名/.bashrc                       |

更新环境变量

> source /etc/profile
>
> or
>
> . /etc/profile

## 10、Linux 如何查看、修改 hosts？

文件路径：/etc/hosts

![](/images/Linux/10.jpg)

## 11、Linux 怎么查看、修改主机名？

查看主机名：

> $ hostname
>
> iZwz9a0zvcp4lincq62kekZ

修改主机名：

> $ sudo vim /etc/hostname

修改后需要重启生效：

> $ sudo reboot

## 12、Linux 怎么查看当前系统时间？

使用`date`命令。

## 13、Linux 安装软件有哪几种方式？

##### Linux 系统下安装软件一般有 3 种方法：

##### （1）rpm 工具

redhat package manager，手动安装，难点在于包的依赖关系。

rpm 包类似于 Windows 下的.exe 文件，安装路径和文件名基本都是固定的。

> rpm -ivh [rpm 完整包名]

##### （2）yum 工具

Python 开发出来的工具，操作对象 rpm 包，能自动解决软件包的依赖关系，是最常用的方式。

> yum install -y [包名简称]

##### （3）源码包

需要通过编译器把该源码包编译成可执行的文件，安装难度大。

> ./configure----> make--->make install

## 14、Linux 怎么查看某个命令的全路径？

使用`which`命令，比如：

![](/images/Linux/14.jpg)

也可以使用`whereis`命令。

## 15、Linux 怎么查看一个命令的使用手册？

使用`man`命令：

> man nginx

![](/images/Linux/15.jpg)

或者也可以使用`--help`，比如：

> ls --help

## 16、Linux 怎么查看某个命令的相关文件全路径？

使用`whereis`命令：

> whereis nginx

![](/images/Linux/16.jpg)

## 17、Linux 普通用户怎么以管理员身份执行？

Linux 中的 sudo 命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。

##### 天骄 sudo 权限：

> vim /etc/sudoers

```
### Allow root run any commands anywhere
root   ALL=(ALL)    ALL
slq    ALL=(ALL)    ALL
# sudo  不用输入密码
# slq  ALL=(ALL)  NOPASSWD: ALL
```

使用的时候在命令前面加上 sudo 即可。

## 18、Linux 命令 su 和 sudo 的区别？

su 是用来切换用户的，需要输入目标用户的密码。

sudo 则可以通过 root 的身份执行命令，只需要输入自己的密码，而不需要 root 的密码，可以用来保护 root 密码不被公开。

## 19、Linux 的 root 和 home 目录有什么不同？

##### /root：

系统管理员的主目录

##### /home：

普通用户的主目录，比如普通用户 R 的主目录就是：/home/R

## 20、Linux 系统 root 和普通用户的区别？

root 属于独一无二的超级管理员，root 用户拥有所有的系统权限；

普通用户则有很大的权限限制，很多操作都需要以 root 的身份执行。

## 21、Linux 怎么区分 root 和普通用户？

![](/images/Linux/21.jpg)

$：表示普通用户

#：表示 root 用户

## 22、Linux 怎么切换用户？

1、切换用户的命令为：su username

2、从普通用户切换到 root 用户，还可以使用命令：sudo su

## 23、Linux 怎么修改用户密码？

使用 passwd 命令，如修改当前用户密码：

> $ passwd

修改指定用户密码（使用 sudo 或者切换到 root 用户才行）：

> $ sudo passwd username

## 24、Linux 中的 bash 是什么？

bash 是 Bourne Again Shell 的缩写，是 Linux 默认的标准 shell，也是大家常说的系统内核。

bash 也是 Unix/Linux 上常见的 Shell 脚本解释器，既然 bash 是标准的 shell，那么就有非标准的 sh，csh，ksh 等等，我们常说有多少种 Shell，其实说的是 Shell 脚本解释器，Shell 是一种脚本语言，那么，就必须有解释器来执行这些脚本，bash 是基于 Bourne Shell 创建的，并且吸收了 C Shell 和 Korn Shell 的一些特性，而且 bash 完全兼容 sh，也就是说，用 sh 写的脚本可以不加修改的在 bash 中执行。

## 25、Linux 中的 Shell 是什么？

Shell 是一个用 C 语言编写的程序，它是用户使用 Linux 的桥梁。

Shell 既是一种脚本语言，又是一种程序设计语言，一般称为：Shell 脚本，用来在 Linux 系统中处理任务。

## 26、Linux 常用的文件目录都有哪些？

如表所示：

| 目录   | 描述                           |
| ------ | ------------------------------ |
| /      | 表示 root 文件系统顶级目录     |
| /bin   | 包含用户的可执行文件           |
| /boot  | 包含启动 Linux 系统所需信息    |
| /dev   | 连接系统的硬件设备文件目录     |
| /etc   | 本地系统配置文件目录           |
| /home  | 用户主目录所在顶级目录         |
| /lib   | 包含启动系统所需要的共享库文件 |
| /media | 挂载外部可移动设备             |
| /mnt   | 普通文件系统的临时挂载         |
| /opt   | 可选文件目录                   |
| /root  | 表示 root 用户的主目录         |
| /sbin  | 系统二进制文件                 |
| /tmp   | 临时目录                       |
| /usr   | 用户可共享的文件目录           |
| /var   | 可变数据文件存储目录           |

## 27、Linux 中的文件系统怎么理解？

在 Linux 系统中，可以把一切资源都看作是一种**文件**，比如：网络接口卡、磁盘驱动器、打印机、输入输出设备、普通文件或是目录等，它们都被看作是一个文件。

Linux 文件系统是一种树状结构：

![](/images/Linux/27.jpg)

顶层目录是：/

## 28、Linux 怎么显示目录下的文件？

##### 使用`ls`命令：

> ls [选项] 目录名称

##### 常用选项有：

-a：显示全部的文件

-l：列出文件和目录信息

-t：以时间排序

## 29、Linux 中 ll 和 ls 命令的区别？

ll：列出当前文件或目录的详细信息，含有时间、读写权限、大小、时间等信息。

ls：仅列出当前文件名或目录名

##### ll 是”ls -l“的别名，可以理解为 ll 和 ls -l 的功能是相同的。

## 30、Linux 怎么以树形结构展示目录内容？

使用`tree`命令，如果没有则需要安装：

> yum -y install tree

![](/images/Linux/30.jpg)

## 31、Linux 怎么挂载一个 cdrom？

将光盘插入 cdrom，Linux 并不会自动挂载，必须使用 mount 命令来完成挂载，mount 用于挂载 Linux 系统外的文件。

```
mkdir  -p  /mnt/cdrom
# o auto、-o  noauto：打开/关闭自动挂上模式
mount -o auto /dev/cdrom/   /mnt/cdrom
ll   /mnt/cdrom
```

创建目录--->开始挂载--->查看内容。

## 32、Linux 怎么创建文件？

可以使用`touch`命令：

> touch 文件名

也可以使用`vim`命令：

> vim 文件名

然后保存退出即可。

## 33、Linux 怎么创建目录？

##### mkdir 命令的基本格式为：

> mkdir [-mp] 目录名

**-m**：用于手动配置所创建目录的权限，而不适用默认权限。

**-p**：递归创建所有目录，如可以一次性创建/home/slq/java 这个三级目录。

## 34、Linux 怎么切换目录？

使用 cd 命令，如：

> cd /usr/local

## 35、Linux 怎么进入含有空格的目录？

如果有 Spring 和 Spring Boot 两个目录，输入`cd  Spring Boot`优先会进入 Spring 目录（第一个目录）。

##### 有以下几种解决方法：

##### 1、使用转义符

> cd Spring\ Boot

##### 2、使用单引号

> cd 'Spring Boot'

#### 3、使用\*匹配符

> cd Spring \*Boot

## 36、Linux 怎么切换到上 N 级目录？

返回上一级目录：cd ...

返回上两级目录：cd .../...

以此类推。。。

## 37、Linux 怎么切换到之前所在的目录？

使用`cd -`命令。

## 38、Linux 怎么切换到当前用户主目录？

有两种方法：

- cd
- cd ~

## 39、Linux 怎么查看当前目录所在路径？

使用`pwd`命令，如：

```
$ pwd
/usr/local
```

## 40、Linux 怎么拷贝整个目录？

如拷贝整个 test 目录：

> cp -rf test test2

-r：递归复制目录下的所有目录和文件

-f：强制复制

## 41、Linux 怎么拷贝文件？

使用`cp`命令（copy）：

> cp test.txt test2.txt

复制 test.txt 为 test2.txt，目录中会存在两份文件。

## 42、Linux 怎么重命名文件？

使用`mv`命令，mv 不但可以移动文件位置，目标是“文件”类型时还能改名：

> mv test.txt test2.txt

把 test.txt 重命名为 test2.txt。

或者使用`rename`命令：

> rename from to file

## 43、Linux 怎么移动文件位置？

使用`mv`命令（move）：

> mv 1.txt .../

把 1.txt 文件移动到上一层目录下。

## 44、Linux 怎么删除整个目录及所有文件？

如删除 test 整个目录：

> rm -rf test

-r：递归删除目录下的所有目录和文件

-f：强制删除

## 45、Linux 怎么删除指定的文件？

使用 rm 命令（remove）：

> rm -i test.log

-i：删除前需要确认

## 46、Linux 怎么查看目录大小？

使用 du 命令（du = disk usage）

- -h：--human-readable 以可读方式打印容量大小；
- -s：--summarize 显示总大小；

1、查看当前目录大小

> $ du -sh

2、查看当前目录下所有子目录的大小

> $ du -sh \*

3、查看指定目录大小

> $ du -sh ./images

## 47、Linux 怎么查看文件的大小？

使用 ll 命令，会显示当前目录所有文件及大小：

![](/images/Linux/47_1.jpg)

不过显示的是字节数，不方便计算具体大小。

如果要以更友好的方式显示，自动以**KB/MB**方式显示文件的大小，可以使用**ls -lh**或者**ll -lh**命令，使用示例如下：

![](/images/Linux/47_2.jpg)

后面的文件名可以省略，就会显示当前目录所有文件。

## 48、Linux 如何查找指定名称的文件？

如查找文件名为 wx.log 的文件：

> find -iname wx.log

-name：表示按名称查找。

-i：表示忽略大小写。

## 49、Linux 如何查找超过 10M 的文件？

如查找当前目前大小 10M 的文件：

> find ./ -type f -size +10M

##### -type：指定文件类型

- f -----普通文件
- l -----符号连接
- d -----目录
- c -----字符设备
- b -----块设备
- s -----套接字
- p -----Fifo

##### -size：指定文件的大小

- b -----块（512 字节）
- c -----字节
- w -----字（2 字节）
- k -----千字节
- M -----兆字节
- G -----吉字节

## 50、Linux 怎么在文件夹中查找指定内容？

在一个文件夹中递归查找包含指定字符串的文件，比如在当前目录查找所有包含”github“的文件：

> grep github -r .

![](/images/Linux/50.jpg)

## 51、Linux 怎么在文件中查找指定内容？

使用 grep 命令，比如在文件中搜索所有包含”avatar“的内容：

> grep avatar README.md

![](/images/Linux/51.jpg)

## 52、Linux 怎么显示文件内容？

使用`cat`命令：

> cat slq.txt

带行号显示：

> cat -n slq.txt

显示多个文件：

> cat -n slq.txt slq2.txt

## 53、Linux 怎么分页查看文件内容？

使用`more`命令，如每页显示 10 行：

> more -10 slq.log

![](/images/Linux/53.jpg)

按**Space**键：显示下一页内容。

按**Enier**键：显示下一行内容。

按**B**键：显示上一屏内容。

按**Q**键：推出命令。

---

也可以使用 less 命令，功能和用法类似。

## 54、Linux 中的 more 和 less 命令的区别？

两个都可以用来分页浏览文件内容，功能类似。不同的是 more 会显示百分比：

![](/images/Linux/54_1.jpg)

而 less 命令不会显示百分比：

![](/images/Linux/54_2.jpg)

less 命令可以用上下方向键进行控制。

## 55、Linux 怎么查看文件最后 5 行 内容？

使用`tail`命令：

> tail -n 5 slq.txt

不用-n 参数，默认显示最后 10 行。

## 56、Linux 怎么查看文件实时内容？

使用 tail -f 命令实现显示追加内容：

> tail -f slq.log

查看日志后 5 行，并实时显示追加内容：

> tail -f -n 5 slq.log

## 57、Linux 怎么查看文件类型？

使用`file`命令：

![](/images/Linux/57_1.jpg)

![](/images/Linux/57_2.jpg)

## 58、Linux 怎么计算和验证文件的 MD5 值？

生成 MD5：

> md5sum slq.txt > slq.md5

验证 MD5：

> md5sum -c slq.md5

如果 slq.txt 文件内容发生变化则会提示验证失败。

## 59、Linux 怎么压缩、解压？

##### 一、tar

tar 压缩：

> tar -zcvf slq.tar ./slq

tar 解压缩：

> tar -zxvf slq.tar -C /tmp

-C 指定解压缩目录，不是必须的。

##### 二、zip

zip 压缩：

> zip -r slq.zip ./slq

-r 表示目前下的所有子目录和文件

unzip 解压缩：

> unzip -d /test slq.zip

-d 指定解压的目录，默认不指定为当前目录

##### 三、gzip

gzip 压缩：

> gzip \*.java

gzip 不能用来压缩目录。

gunzip 解压缩：

> gunzip test.gz

## 60、Linux vim 和 vi 命令的区别？

它们都是多模式编辑器，不同的是 vim 是 vi 的升级版本，它不仅兼容 vi 的所有指令，而且还有一些新的特性在里面。

## 61、Linux vim 命令怎么使用？

Vim 是 Linux 一个文本编辑器。

##### 常用选项：

- i 切换到输入模式，以输入字符
- x 删除当前光标所在处的字符
- :切换到底线命令模式，以在最底一行输入命令
- :q 退出文件
- :q!不保存数据，强制退出
- :wq 保存退出文件

## 62、Linux 中的 vim 命令有哪几种模式？

vim 命令有三种模式：

（1）普通模式（模式）

（2）编辑模式（按 i 键进入）

（3）命令模式（按 : 输入命令）

## 63、Linux 中的链接有哪几种形式？

##### Linux 系统中的链接分两种：

- 硬链接（Hard Link）
- 符号链接/软链接（Symbolic Link）

## 64、Linux 中的硬链接怎么理解？

硬链接相当于文件的另一个形态，硬链接文件和源文件都指向同一个文件实体，只能同时删除源文件和所有的硬链接文件，源文件才会真正删除。

可以给重要的文件设置硬链接，防止该文件被误删除。

## 65、Linux 中的软连接怎么理解？

软链接相当于 Windows 系统中快捷方式，即源文件的一个引用，如果删除源文件，软链接文件则无法正常访问。

## 66、Linux 如何查看链接指向的源文件？

一般指的是查看软链接指向的真实源文件，使用`readlink`命令：

```
$ readlink  -f test
/home/slq/test.txt
```

## 67、Linux 中的两种链接的区别？

总结如下：

![](/images/Linux/67.jpg)

## 68、Linux 怎么创建硬链接？

##### 创建硬链接：

建立 hello.java 的硬链接 hello

```
ln hello.java hello
```

ln 不带参数表示创建的是硬链接。

## 69、Linux 怎么创建软链接？

##### 创建软链接：

创建 hello.java 的软链接 hello

```
ln -s  hello.java hello
```

## 70、Linux 系统应用的日志存在哪？

Linux 系统应用的日志都在`/var/log`目录下，比如有：

| 日志              | 说明           |
| ----------------- | -------------- |
| /var/log/boot.log | 开启或重启日志 |
| /var/log/cron     | 任务调度日志   |
| /var/log/maillog  | 邮件日志       |
| /var/log/messages | 系统整体日志   |
| /var/log/secure   | 验证和授权日志 |

等等。。。

## 71、Linux 下的权限有哪几种？

##### Linux 有 3 种权限：

- 读取：用户可以读取文件或列出目录
- 写入：用户可以写入新文件到目录的文件
- 执行：用户可以运行文件或查找特定文件一个目录

## 72、Linux 文件调用权限分为哪 3 级？

##### Linux/Uniux 的文件调用权限分为三级：

- 文件所有者（Owner）
- 用户组（Group）
- 其他用户（Other Users）

![](/images/Linux/72_1.jpg)

![](/images/Linux/72_2.jpg)

## 73、Linux 怎么修改文件权限？

##### chmod 改变文件权限

![](/images/Linux/73.jpg)

##### chmod 常见写法：

将档案 file1.txt 设为所有人皆可读取：

```
chmod ugo+r file1.txt
```

将档案 file1.txt 设为所有人皆可读取：

```
chmod a+r file1.txt
```

将档案 file1.txt 与 file2.txt 设为该档案拥有者，与其所属同一个群体者写入，但其他以外的人则不可写入：

```
chmod ug+w,o-w fiel1.txt file2.txt
```

将 ex1.py 设定为只有该档案拥有者可以执行：

```
chmod u+x ex1.py
```

将目前目录下的所有档案与子目录皆设为任何人可读取；

```
chmod -R a+r *
```

数字写法

chmod 755 [fileName] #所有者读写执行，用户组和其他，只有读和执行权限

chmod 777 [fileName] #所有人都有读写和执行权限

## 74、Linux 怎么修改文件所有者和所属组？

使用`chown`命令

##### 语法：

> $ chown [-cfhvR] [--help] [--version]
>
> user[:group] file...

##### 参数：

- user：新的文件拥有者的使用者 ID
- group：新的文件拥有者的使用者组（group）
- -c：显示更改的部分的信息
- -f：忽略错误信息
- -h：修复符号链接
- -v：显示详细的处理信息
- -R：处理指定目录以及其子目录的所有文件
- --help：显示辅助说明
- --version：显示版本

##### 实例：

把/home/slq/test.txt 的所有者设置为 john 用户和组：

> $ chown john:john /home/slq/test.txt

## 75、Linux 怎么查看磁盘的使用情况？

使用`df`命令查看磁盘占用的空间。

使用语法：

> df [选项] ... [FILE]...

一般使用 df -h 组合命令，即以使用人类可读的格式展示。

![](/images/Linux/75.jpg)

## 76、Linux 怎么查看内存的使用情况？

使用`free`命令。

使用语法：

```
free  [-bkmotV]  [-s <间隔秒数>]
```

##### 单位参数说明：

- -b：Byte
- -k：KB
- -m：MB
- -h：以合适的但闻显示内存使用情况，自动计算对应的单位值

## 77、Linux 怎么让进程在后台运行？

##### 一般使用 nohup...&命令：

> nohup java -jar slq.jar > /dev/null 2 > &1
>
> &

`nohup` no hang up，表示不挂断，永远运行`>/dev/null 2>&1`其中 0 表示键盘输入，1 表示标准输出（屏幕），2 表示错误输出，先把标准错误输出（2）重定向到标准输出（1），然后扔到/dev/null 文件中，一般项目中有自定义的日志文件，所以这里表示禁止输入任何内容。

`&`表示在后台运行。

## 78、Linux 怎么查看资源消耗最多的进程？

使用**top**命令，常用的选项按键有：

N - 以 PID 的大小的顺序排列表示进程列表

P - 以 CPU 占用率大小的顺序排列进程列表

M - 以内存占用率大小的顺序排列进程列表

q - 退出 top

## 79、Linux 如何查看系统都开放了哪些端口？

常用命令：

> netstat -lntp

![](/images/Linux/79.jpg)

## 80、Linux 怎么看端口被哪个进程占用？

常用命令：

> netstat -lnpt | grep 8080

![](/images/Linux/80.jpg)

## 81、Linux 怎么对外开放端口？

下面是常用的 CentOS 系统的命令！

##### 查看所有已经开放的端口列表：

> sudo firewall-cmd --list-all

##### 比如开放 MySQL 的 3306 端口：

> sudo firewall-cmd --add-port=3306/tcp --permanent

##### 重新加载配置让起生效：

> sudo firewall-cmd --reload

## 82、Linux 进程间的通信方式有哪些？

##### 主要有以下 6 种方式：

（1）管道（pipe）

（2）信号（signal）

（3）消息队列

（4）共享内存

（5）信号量

（6）套接字（socket）

## 83、Linux 怎么查找某个进程？

使用`ps`命令可以查看进程信息。

##### 常见的选项：

a：显示当前终端下的所有进程信息，包括其他用户的进程。

u：使用以用户为主的格式输出进程信息。

x：显示当前用户在所有终端下的进程。

-e：显示系统内的所有进程信息。

-l：使用长（long）格式显示进程信息。

-f：使用完整的（full）格式显示进程信息。

查找某个进程可以配合 grep 命令使用，如查询 Java 进程：

> ps -ef | grep java

## 84、Linux 怎么查找 Java 进程？

常用的方法有两种：

1、使用 Linux 的 ps 命令：

> ps -ef | grep java

2、使用 jdk 的 jps 命令：

> jps -vml

主要参数说明：

![](/images/Linux/84.jpg)

## 85、Linux 怎么结束某个进程？

使用`kill -9 进程ID`命令，使用示例：

> kill -9 888

## 86、Linux 怎么查看机器负载情况？

##### 1、使用 top 命令：

![](/images/Linux/86_1.jpg)

第一排就是负载信息。

##### 2、使用 uptime 命令：

![](/images/Linux/86_2.jpg)

---

##### 以上信息依次为：

- 系统当前时间
- 系统已运行时间
- 登录用户数
- 系统在过去的 1 分钟、5 分钟和 15 分钟内的平均负载

## 87、Linux 如何查询系统连接数？

参考命令：

> netstat -an | grep ESTABLISHED | wc -l

## 88、Linux 怎么检测主机之间的连通性？

使用 ping 命令：

> ping -c 5 www.slq.com

**-c**：表示检测的次数，不写会一直检测

![](/images/Linux/88.jpg)

## 89、Linux 怎么查看本机网络接口信息？

使用**ifconfig**命令：

> ifconfig -a

![](/images/Linux/89.jpg)

## 90、Linux 怎么查看本机公网 IP？

参考方法：

> curl cip.cc

![](/images/Linux/90.jpg)

## 91、Linux 怎么发送网络请求？

使用 curl 命令：

> curl https://www.slq.com

还可以携带 cookie：

> curl https://www.slq.com --cookie "user=root;pass=1234556"

还有更多用法。

## 92、Linux 怎么从网络下载文件？

使用**wget**命令：

> wget https://www.slq.com/mst/

![](/images/Linux/92_1.jpg)

使用-O 指定文件名称保存：

> wget -O mst.txt https://www.slq.com/mst/

![](/images/Linux/92_2.jpg)

## 93、Linux 怎么远程传输文件？

有以下几种方法：

（1）使用`rz`命令上传文件；

（2）使用 FTP 客户端工具；

（3）使用`scp`命令传输文件；

（4）使用第三方的开源命令工具，比如：rsync，可支持增量同步

## 94、Linux 如何保证登录安全性？

##### 建议的参考方案：

1、禁用 root 远程登录，使用非 root 用户登录；

2、禁用密码形式远程登录，使用证书登录；

3、用户密码使用高强度、复杂的密码；

4、密码设置有效期，定期修改密码；

5、控制台 N 秒不操作自动等出；

6、设置远程连接 IP 黑白名单；

7、修改 SSH 端口号；

8、...

## 95、Linux 都有哪些安全配置？

1、禁用 ping 请求；

2、删除不需要的用户和组；

3、只开发必要的端口；

4、控制服务远程访问权限；

5、禁止 Ctrl+Alt+Delete 重启系统；

6、及时扫描、修复服务器上的系统漏洞；

考虑使用云服务器上的各种安全产品；

8、...

## 96、Linux 防火墙的命令怎么用？

##### 使用 Linux 的 iptables 命令。

比如开放 8080 端口：

> iptables -A INPUT -p tcp --dport 80 -j ACCEP
>
> iptables save

比如拒绝某个 IP 访问 8080 端口：

> iptables -I INPUT -s 180.22.13.121 -p tcp --dport 8080 -j REJECT
>
> iptables save

## 97、Linux 怎么登录远程服务器？

使用 ssh 命令：

> ssh root@121.16.150.10

然后输入密码即可，然后也可以通过其他客户端工具登录。

## 98、Linux 中的 ssh 和 sshd 的区别？

ssh_config 和 sshd_config 都是 ssh 服务器的配置文件，区别在于：

**ssh_config**是针对客户端的配置文件，

**sshd_config**则是针对服务端的配置文件。

## 99、Linux 怎么修改 ssh 端口号？

修改配置文件：

> sudo vim /etc/ssh/sshd_config

修改端口配置：

> Port 22

重新启动

> service sshd restart

也可以使用 semanage 命令：

```
semanage port -a -t ssh_port_t -p tcp
#PORTNUMBER
```

![](/images/Linux/99.jpg)

## 100、Linux 服务器如何禁止被 ping？

临时禁用配置：

> echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

永久禁用配置：

> echo net.ipv4.icmp_echo_ignore_all=1 >> /etc/sysctl.conf

![](/images/Linux/100.jpg)

临时启用配置：

> echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_all

永久启用配置：

> echo net.ipv4.icmp_echo_ignore_all=0 >> /etc/sysctl.conf

## 101、Linux 怎么禁止 root 远程登录？

修改配置文件：

> vim /etc/ssh/sshd_config

##### 把 PermitRootLogin 值改为 no。

重新启动：

> service sshd restart

## 102、Linux 怎么设置用户密码有效期？

##### 针对未创建新用户

修改配置文件：

> vim /etc/login.defs

```
PASS_MAX_DAYS    90
PASS_MIN_DAYS    0
PASS_MIN_LEN     8
PASS_WARN_AGE    7
```

针对已有用户：

使用 chage 命令：

![](/images/Linux/102.jpg)

设置有效天数（90 天）：

> sudo chage -M 90 slq

查看用户密码设置：

> sudo chage -I slq

## 103、Linux 怎么禁止密码形式远程登录？

修改配置文件：

> vim /etc/ssh/sshd_config

##### 把 PasswordAuthentication 值改为 no。

重新启动：

> service sshd restart

## 104、Linux 怎么以非 root 用户 + 证书登录？

使用 root 用户登录。

##### 创建用户

创建一个用户：

> adduser slq

修改密码：

> passwd slq

添加 sudo 权限：

> vim /etc/sudoers

```\
root    ALL=(ALL)    ALL
slq     ALL=(ALL)    ALL
# sudo 不用输入密码
# slq ALL=(ALL)  NOPASSWD: ALL
```

##### 配置证书

生成 RSA 证书，并把公钥内容复制到 authorized_keys 文件：

```
su slq
cd ~
mkdir .ssh  # 如没有该目录则创建
chmod 700 .ssh
cd ~/.ssh
ssh-keygen -t rsa
cat id_rsa.pub >> authorized_keys
chmod 644 authorized_keys
sudo yum install lrzsz # 安装下载工具
sz id_rsa id_rsa.pub
rm id_rsa id_rsa.pub
```

开启证书登录：

> sudo vim /etc/ssh/sshd_config

修改以下值：

```txt
RSAAuthentication yes # 如没有此项则忽略
PubkeyAuthentication yes
AuthorizedKeysFile  .ssh/authorized_keys

PermitRootLogin no
PasswordAuthentication no
```

> sudo service sshd restart

##### 客户端证书登录

客户端终端登录参考：

修改文件（用户主目录/.ssh/config）：

```
# 解决Mac Ventura 新版本的问题
HostkeyAlgorithms +ssh-rsa
PubkeyAcceptedAlgorithms +ssh-tsa

Host tt
Hostname 118.112.223.10
Port 22
User slq
IdentityFile ~/.ssh/id_rsa
```

打开终端，输入：

> ssh tt

登录成功。

使用工具登录略。

## 105、Linux 怎么控制远程访问权限？

修改这两个文件：

- /etc/hosts.allow（允许服务）
- /etc/hosts.deny（拒绝服务）

---

比如配置只允许某个 IP 段才能访问 SSHD 服务：允许配置：

```
sshd:172.90.180.*
sshd:173.88.66.*
```

拒绝配置：

```
sshd:all
```

> 两个一起配置，当配置冲突时，以 hosts.allow 配置为准。

配置生效：

> service xinetd restart

## 106、Linux 怎么禁用 ctrl-alt-del 重启？

1、备份配置文件：

> cp /usr/lib/systemd/system/ctrl-alt-del.target
>
> /usr/lib/systemd/system/ctrl-alt-del.target.bak

2、删除原配置文件

> rm -rf /usr/lib/systemd/system/ctrl-alt-del.target

3、重新加载配置文件

> init q

## 107、Linux 如何查看尝试登录失败记录？

使用`lastb`命令：

![](/images/Linux/107_1.jpg)

##### 根据 IP 统计次数：

> sudo lastb | awk '{print $3}' | sort | uniq -c | sort -n | more

![](/images/Linux/107_2.jpg)

## 108、Linux 如何查看历史登录主机记录？

使用`last`命令：

![](/images/Linux/108.jpg)

## 109、Linux 控制台怎么设置超时自动注销？

##### 针对某个用户

编辑配置文件：

> ~/.bash_profile

添加/修改参数：

> export TMOUT=30

表示该用户 30 秒自动登出。

生效：

> source ~/.bash_profile

##### 针对所有用户

编辑配置文件：

> vim /etc/profile

添加/修改参数：

> export TMOUT=1800

表示该用户 30 分钟自动登出。

生效：

> source /etc/profile

## 110、Linux 系统的任务调度有哪几类？

##### Linux 下的任务调度分为两类：

1、系统任务调度（/etc/crontab）

2、用户任务调度（/var/spool/cron）

## 111、Linux 怎么创建一个任务调度？

新增/编辑/删除调度命令：

> crontab -e

输入以下内容并保存：

> _/1 _ \* \* \* echo 'hi, java 面试题 1' >> ~/task1.txt
>
> _/1 _ \* \* \* echo 'hi, java 面试题 2' >> ~/task2.txt

该任务调度为每分钟向文件中输出内容。

cron 表达式说明：

> minute hour day month week command
>
> 顺序：分 时 日 月 周 命令

查看任务调度：

> crontab -l

![](/images/Linux/111_1.jpg)

验证结果：

![](/images/Linux/111_2.jpg)

## 112、Linux 中的零拷贝是指什么？

##### 零拷贝（zero-copy）：

在内核驱动程序如网络堆栈或者磁盘存储驱动程序处理 I/O 数据的时候，零拷贝技术可以在某种程度上减少甚至完全避免不必要 CPU 数据拷贝操作，大大提高了数据传输的速度和性能。

## 113、Linux 有哪几种 IO 模型？

Linux 系统有 5 种 IO 模型，它们分别是：

- 阻塞 IO
- 非阻塞 IO
- IO 多路复用
- 信号驱动 IO
- 异步 IO

除了异步 IO，其余都属于同步 IO 模型。

## 114、Linux 有哪几种 IO 多路复用机制？

Linux IO 多路复用的机制有 3 种：

- select
- poll
- epoll

## 115、Linux 下 select，poll，epoll 的区别？

在 Linux 中，`select`、`poll`、和`epoll`都是用于处理 I/O 多路复用的机制，用于监视多个文件描述符的状态，以便在有数据可读或可写时进行相应的操作。

它们在不同的情况下具有不同的特点和使用方式：

| 特点 | select | poll | epoll |
| ---- | ------ | ---- | ----- |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |
|      |        |      |       |

需要注意的是，`select`在早期的系统中得到广泛使用，但由于其可扩展性和效率上的限制，后来逐渐被`poll`和`epoll`所取代。在处理大规模并发连接的场景下，`epoll`是最常用的选择，因为它能够以更高效的方式处理大量的连接并实现更好的性能。

## 116、Linux 中的 buffer 和 cache 的区别？

buffer 和 cache 都是内存中的一块区域：

![](/images/Linux/116.jpg)

##### buffer：

buffer（缓冲）是为了提高内存和硬盘（或其他 I/O 设备）之间的数据交换的速度而设计的。

由于磁盘写入速度慢，当 CPU 需要写数据到磁盘时，可以把数据先存入 Buffer，然后 CPU 就可以去干别的事情了，Buffer 中的数据会定期写入磁盘。

##### cache：

从 CPU 角度考虑，cache 是为了提高 CPU 和内存之间的数据交换速度而设计的，比如：一级缓存、二级缓存、三级缓存。

从内存与磁盘读取角度考虑，cache 是操作系统为了提高数据读取效率而设计的，要访问到的数据可以提前放到 cache 中以提高访问速度。

## 117、Linux 怎么在屏幕输出显示信息？

使用`echo`命令，比如：

![](/images/Linux/117.jpg)

不换行的话不需要`-e`进行解析。

## 118、Linux 怎么清屏？

使用`clear`命令。

## 119、Linux 怎么注销退出当前登录用户？

有以下三种常用的方法：

（1）使用`exit`命令；

（2）使用`logout`命令；

（1）使用`ctrl + d`快捷键；

## 120、Linux 系统怎么重启？

系统重启 1：

> shutdown -r now

系统重启 2：

> reboot

## 121、Linux 系统怎么关机？

立即关机：

> shutdown -h now

10 分钟后关机：

> shutdown -h +10

10:00 关机：

> shutdown -h 10:00
