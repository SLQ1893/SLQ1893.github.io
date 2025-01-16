## 1、你怎么理解负载均衡？

负载均衡，英文名称为：Load Balance，就是将请求分配到多个服务器上运行，加强网络的数据处理能力，从而提高了应用的吞吐能力，也提高了应用的性能、高可用性、容灾能力。

最简单的理解，没有负载均衡，单机挂了怎么办？

## 2、什么是 Nginx？

Nginx 是一个轻量级、高性能的 Web 服务器/反向代理服务器，其特点是占有内存少，并发能力强，它可以非常高效的实现反向代理、负载均衡，在高并发情况下，Nginx 也是 Apache 服务器的一个不错的替代品。

## 3、Nginx 有哪些应用场景？除了负载均衡还能做什么？

##### Nginx 功能很强大，主要包括以下功能：

1、HTTP 服务器；

2、动静分离；

3、正向代理；

4、反向代理；

5、负载均衡；

6、资源缓存；

7、限流；

8、黑、白名单；

## 4、Nginx 性能为什么这么高？

这是因为 Nginx 的事件处理机制：异步非阻塞事件处理机制，它使用了 epoll 模型，将要处理的连接都放入队列中，然后只对队列中的连接进行处理，而不需要遍历轮询所有的连接。

## 5、Nginx 是单线程还是多线程？

Nginx 实现了对 epoll 的封装，采用的是**多进程和单线程**以及多路 IO 复用模型。

这样不仅能提高病发率，而且进程之间是相互独立的，一个进程挂了不会影响到其他进程。

## 6、Nginx 负载均衡算法有哪些？

Nginx 有 5 种负载均衡算法：

![](/images/Nginx/6_1.jpg)

##### 1、轮询（默认）

每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。

##### 2、权重（weight）：

指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。

![](/images/Nginx/6_2.jpg)

如图，权重设置越大，被访问的几率越大。

##### 3、ip_hash（IP 绑定）

![](/images/Nginx/6_3.jpg)

每个请求按访问 IP 哈希分配，同一个 IP 的请求转发到同一台固定服务器。

##### 4、fair（第三方）

按后端服务器的响应时间分配请求，响应时间短的优先分配。

![](/images/Nginx/6_4.jpg)

##### 5、url_hash（第三方）

按访问 url 的 hash 结果来分配请求，是每个 url 定向到同一个后端服务器，后端服务器为缓存时比较有效。

例：在 upstream 中加入 hash 语句，server 语句中不能写入 weight 等其他的参数，hash_method 是使用的 hash 算法。

![](/images/Nginx/6_5.jpg)

## 7、Nginx 常用命令有哪些？

启动：nginx

指定配置文件启动 nginx -c /usr/local/nginx/conf/nginx.conf

停止：nginx -s stop 或 nginx -s quit

重启：nginx -s reload 或 service nginx reload

查看当前版本：nginx -v

查看命令行帮助：nginx -h

## 8、Nginx 如何配置 http 服务？

Server 模块 http 配置示例：

![](/images/Nginx/8.jpg)

## 9、Nginx 如何配置 https 服务？

Server 模块 https 配置示例：

![](/images/Nginx/9.jpg)

## 10、Nginx 如何实现请求重定向？

如把 http 请求重定向至 https：

![](/images/Nginx/10.jpg)

## 11、Nginx 如何自定义错误返回信息？

参考配置如下：

![](/images/Nginx/11.jpg)

503 错误自定义返回错误信息。

## 12、Nginx 如何分开管理配置文件？

可以把配置分离到新的配置文件，然后引入即可：

![](/images/Nginx/12.jpg)

## 13、Nginx 怎么实现 Session Stick？

##### 有两种做法：

（1）使用基于 ip_hash 的负载均衡算法，即相同 IP 的请求转发到同一台服务器；如果 Nginx 不是最前端的负载均衡的话，可能也是被分流之后的，这种方法就不推荐使用，因为不能获取准确的客户端 IP。

（2）使用 Nginx 的扩展模块：nginx-sticky-module，用来实现基于 Cookie 的 Session Sticky 的功能，推荐使用这种方法。

## 14、Nginx master 和 work 进程的区别？

master 是 Nginx 的主进程，只能有一个，主要用来管理 worker 进程的，以及读取配置文件等其他工作。

work 是 Nginx 的工作进程，可以有多个，但一般不要大于服务器 CPU 的总核心数量，尽量避免了多个 worker 进程抢占同一个 CPU 的情况。

![](/images/Nginx/14.jpg)

## 15、Nginx 如何隐藏响应头中的版本号？

可以配置 nginx 不再显示版本号：

![](/images/Nginx/15_1.jpg)

效果如下：

![](/images/Nginx/15_2.jpg)

nginx 字样也不要显示的话，需要修改源码重新编译。

## 16、Nginx 如何配置黑、白名单？

##### 白名单设置：

![](/images/Nginx/16_1.jpg)

##### 黑名单设置：

![](/images/Nginx/16_2.jpg)

## 17、Nginx 如何实现限流？

##### Nginx 提供两种限流方式：

##### （1）控制请求速率

可以使用 ngx_http_req_module 模块控制请求处理速率，它使用的是漏桶限流算法，具体可以参考官网文档，

![](/images/Nginx/17_1.jpg)

##### （2）限制并发连接数

可以使用 ngx_http_limit_conn_module 模块限制并发连接数。

配置示例：

![](/images/Nginx/17_2.jpg)

## 18、Nginx 如何开启压缩？

Nginx 可以开启 gzip 压缩，可以压缩网页上的 css、js 等静态资源，从而大大节约带宽，从而提高传输效率和网页展示速度。

##### 开启的配置如下：

在 http 或 server 模块添加以下配置：

![](/images/Nginx/18_1.jpg)

效果如下：

![](/images/Nginx/18_2.jpg)

## 19、Nginx 如何缓存静态资源？

参考配置如下：

![](/images/Nginx/19_1.jpg)

效果如下：

![](/images/Nginx/19_2.jpg)

## 20、Nginx 如何实现后端服务健康检查？

##### 主要有两种方式：

（1）通过 Nginx 的自带模块

ngx_http_proxy_module 和 ngx_http_upstream_module；

（2）通过 nginx_upstream_check_module 模块（推荐使用）

## 21、Nginx 有哪些优化措施？

##### Nginx 常用优化配置：

1、工作线程数配置为 CPU 核心数一致；

2、配置每个进程允许的最多连接数；

3、启用 gzip 压缩，提高页面的加载速度；

4、启用静态资源缓存，可以大幅提升性能；

5、禁用页面静态资源请求的日志记录；

6、启用 HTTP2 协议；

7、合理配置 HTTP 连接超时时间，默认是 60s；

。。。

## 22、Nginx 如何实现服务高可用？

一台 Nginx 会出现单点故障，生产环境需要实现 Nginx 高可用。

##### 主要实现方案：Nginx ＋ Keeplived

两台 Nginx，一主一备，同时只有主 Nginx 提供服务，每台 Nginx 都装有 Keeplived 软件并启动服务。

##### 实现原理：

1、Nginx 主节点不断地向备节点发送心跳，以通知备节点自己还活着；

2、当主节点发生故障时，备节点就无法收到主节点的心跳消息，于是备节点就会接管主节点的 IP 资源及服务；

3、当原来的主节点恢复时，备节点又会停止服务并恢复到原来的备用节点角色；

## 23、Nginx 挂了一台 Tomcat 会怎样？

如果请求发送到这台挂了的 Tomcat，会有一个连接超时时间（proxy_connect_timeout），默认超时时间时 1 分钟，1 分钟如果没有相应，就回去连接另外一台 Tomcat 服务器。

另外，Nginx 可以提出挂掉的 Tomcat 服务器，不在接收新的请求。

## 24、Nginx 如何剔除挂掉的 Tomcat？

Nginx 有自带的健康检查功能，能剔除挂掉的 Tomcat 服务器以不在访问的服务器列表中。

## 25、OpenResty 是什么？

![](/images/Nginx/25.jpg)

如图，OpenResty 是一个基于 Nginx 与 Lua 的高性能 Web 平台，是由国人**张亦春**发起的开源项目（也有商业产品），其内部集成了大量精良的 Lua 库、第三方模块，可用于方便地搭建能够处理超高并发、扩展性极高地动态 Web 应用、Web 服务和动态网关。

OpenResty 通过汇聚分钟设计精良地 Nginx 模块（主要由 OpenResty 团队自主开发），可以使用 Lua 脚本语言调动 Nginx 支持地各种 C 以及 Lua 模块，快速构造出足以胜任 10K 乃至 1000K 以上单机并发连接地高性能 Web 应用系统。

OpenResty 地目标是让你的 Web 服务直接跑在 Nginx 服务内部，充分利用 Nginx 地非阻塞 I/O 模型，不仅仅对 HTTP 客户端请求，甚至于对远程后端诸如 MySQL、PostgreSQL、Memcached 以及 Redis 等都进行一致地高性能响应。

##### 目前，OpenResty 主要由 OpenResty 软件基金会和 OpenResty Inc.公司提供支持。

## 26、OpenResty 和 Nginx 地区别？

OpenResty 是对 Nginx 的封装，并且集成了 Lua 库和第三方 Nginx 模块，并且提供了大量组件，如：MySQL、Redis 等，使得 Nginx 开发 Web 应用更方便。

## 27、OpenResty 和 Nginx 怎么选？

如果不是深度用户，只是简单的使用 Nginx 负载均衡、缓存、限流，使用 Nginx 救助够了。

如果要使用到 Nginx + Lua 脚本，或者第三方模块，或者开发高性能的 Web 应用，使用 OpenResty 会更好，OpenResty 现在在国内使用特别多，很多大厂都在用。

## 28、OpenResty 可以代替 Nginx 么？

OpenResty 是基于 Nginx、Lua 开发的，完全可以代替 Nginx 使用。

## 29、Tengine 是什么？

Tengine 即 Taobao-Enging，是由淘宝网发起的 Web 服务器项目，与 2011 年开源，完全兼容 Nginx，并在 Nginx 的基础上，针对大访问量网站的需求，添加了很多高级功能和特性。

Tengine 的性能和稳定性已经在阿里的诸多大型的网站中得到了很好的检验，如淘宝网、天猫商城，另外在某些大厂也有在用 Tengine 的。

## 30、Tengine 和 Nginx 怎么选？

##### 性能方面：

Tengine 相比 Nginx 默认配置，提升 200%的处理能力。

Tengine 相比 Nginx 优化配置，提升 60%的处理能力。

##### 功能方面：

##### 特性

![](/images/Nginx/30.jpg)

大型公司注重优化的考虑用 Tengine，中小型公司用 Nginx 足够了，Nginx 文档和资料更丰富。

## 31、Tengine 可以代替 Nginx 吗？

可以，Tengine 完全兼容 Nginx。

![](/images/Nginx/31.jpg)

## 32、OpenResty 和 Tengine 的区别是什么？

##### OpenResty 和 Tengine 都和阿里有点关联：

- OpenResty 是前淘宝工程师章亦春主导开源的项目；
- Tengine 是淘宝的一个开源项目；

区别就是，它们都是基于 Nginx 构建的两个不同的开源版本，OpenResty 最大的亮点是丰富的第三方模块及对 Lua 的良好支持，而 Tengine 则是融入了淘宝自身的一些业务带来的新特性及淘宝内部大量的优化。

## 33、Keepalibed 是什么？

Keepalived 最初是专为 LVS 负载均衡软件而设计的一个软件，用来管理并监控 LVS 集群系统中各个服务节点的状态。

Keepalived 后来又加入了可以实现高可用的**VRRP**（）功能，即：**虚拟路由器冗余协议**，所以 Keepalived 还被用作其他服务（例如：Nginx、Haproxy、MySQL 等）的高可用解决方案。

## 34、LVS 是什么？

LVS 全称：Linux Virtual Server（Linux 虚拟服务器），是一个虚拟的服务器集群系统，在 1998 年 5 月由国内章文嵩博士成立的开源负载均衡项目，目前已经被集成到 Linux 内核模块中。

LVS 集群采用 IP 负载均衡技术和基于内容请求分发技术，将请求均衡地转发到不同的服务器上进行执行。

LVS 将一组服务器构建成一个高性能的、高可用的虚拟服务器集群，整个集群架构对客户端是透明的，而且无需修改客户端和服务器端的代码。

## 35、LVS 有哪几种工作模式？

##### LVS 有 3 种工作模式：

1、**DR 模式**（直接路由模式：Director Route）

2、**TUN 模式**（隧道模式：tunnel）

3、**NAT 模式**（网络地址转换模式：Network address translation）

其中，DR 模式性能最好，用的最多。

## 36、LVS 有哪些相关的 IP？

##### LVS 相关的几个 IP：

| IP                 | 描述                                     |
| ------------------ | ---------------------------------------- |
| VIP（Virtual IP）  | LVS 服务器上接收外网数据报文的 IP 地址   |
| DIP（Director IP） | LVS 服务器上发送数据报文到 RS 的 IP 地址 |
| RIP（Real IP）     | 真实服务器 IP，简称为 RS（Real Server）  |
| CIP（Client IP）   | 客户端 IP                                |

## 37、HAproxy 是什么？

HAproxy 是一个由 C 语言编写的高可用、开源的负载均衡软件，基于 TCP（第四层）和 HTTP（第七层）应用程序代理，是一个免费、快速并且可靠的一种负载均衡解决方案。

HAProxy 实现了一种**事件驱动，单一进程**模型，此模型支持非常大的并发连接数，所以，HAProxy 一般适用于那些负载稍微大一点的网站。

## 38、LVS、HAproxy、Nginx 的区别？

**LVS**：基于四层的转发；

**HAproxy**：是基于四层和七层的转发，是专业的代理服务器，除了 Web，还可以是 MySQL 等中间件的负载均衡；

**Nginx**：是 WEB 服务器，反向代理服务器，可以做七层的转发；

转发性能：LVS > HAproxy > Nginx

功能便利性：Nginx > HAproxy > LVS

## 39、LVS、HAproxy、Nginx 怎么选？

LVS 稳定性和性能方面都比较强，适用于千万级别流量的大型网站，中/小型网站用**HAproxy/Nginx + Keepalived**完全就够了。

##### 另外，对于一个大型网站来说，三者也可能会配合一起使用，它们分别工作在不同的层级：

- LVS 工作在接入层的最前端，负责大规模流量的分发；
- HAproxy 负责按域名进行分流，还能负责其他中间件（比如：MySQL）的负载均衡；
- Nginx 可作为单机内多实例的转发、分流、静态资源缓存等；

## 40、F5 负载均衡是什么？

F5 是一款由 F5 Networks 公司提供的商业负载均衡设备，可以做 4~7 层负载均衡。

![](/images/Nginx/40.jpg)

F5 的优点就是处理能力要更强，并且与系统无关，功能也非常强大：

> 负载均衡、应用交换、绘画交换、状态监控、智能网络地址转换、通用持续性、响应错误处理、IPv6 网关、高级路由、智能端口镜像、SSL 加速、智能 HTTP 压缩、内容转换、连接加速、高速缓存、Cookie 加密、选择性内容加密、应用攻击过滤、拒绝服务（Dos）攻击和 SYN Flood 保护、防火墙一包过滤、包消毒等...

F5 缺点就是成本太高。

## 41、F5 和 Nginx 负载均衡的区别？

两者没有可比性，可以结合使用，也可以独立使用。

如图：

![](/images/Nginx/41.jpg)

F5 是一款负载均衡硬件设备，处于网络接入的最上游，然后再把请求转发到 Nginx 这样的软负载均衡/反向代理服务器。

F5 属于硬负载均衡器，而 LVS/HAproxy/Nginx 属于软负载均衡器。

##### Nginx 在 2019 年已经被 F5 收购，目前仍开源。
