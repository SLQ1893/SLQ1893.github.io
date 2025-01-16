## 1、Netty 是什么？

Netty 是目前最流行的由 JBOSS 提供的一个 Java 开源框架 NIO 框架，Netty 提供异步的、事件驱动的网络应用程序框架和工具，用以快速开发高性能、高可靠性的网络服务器和客户端程序。

Netty 的所有 IO 操作都是异步非阻塞的，通过 Future-Listener 机制，用户可以方便的主动获取或者通过通知机制获得 IO 操作结果。

## 2、Netty 有什么优势？

Netty 是完全基于 NIO 实现的，所以 Netty 也是非阻塞的。

##### 相比 JDK 原生 NIO，Netty 有以下优势：

1、API 使用简单，易上手，开发门槛低；

2、功能强大，预置了多种编解码，支持多种主流协议；

3、定制能力强，可以对通信框架进行灵活地扩展；

4、性能高，Netty 是所有 Netty 框架中综合性能最优的；

5、成熟、稳定、社区活跃，不需要再为 NIO 的 BUG 而烦恼；

## 3、Netty 为什么传输那么快？

Netty 为什么传输快，是因为利用了 NIO 的一个特性-零拷贝，他避免了没有必要的拷贝，从而加快了传输速度。

## 4、Netty 和 Tomcat 有什么区别？

Tomcat 是一个专门的 Servlet 容器，即基于 http 协议的 Web 服务器。

Netty 则是一个异步 NIO 通信框架，也可以基于自定义编码和解码实现 http、web socket 等自定义协议。

## 5、Netty 在哪些技术中有应用到？

常见的比如说有阿里的 Dubbo、RocketMQ，它们主要都是基于 Netty 实现连接通信的。

## 6、Netty 有哪些核心组件？

##### Netty 有以下几个核心组件：

1、Channel（IO 操作通道，处理基本的 I/O 操作）

2、ChannelHandler（通道处理器，用来处理各种事件）

3、ChannelPipeline（通道处理流水线，ChannelHandler 的处理容器）

4、ChannelFuture、ChannelFutureListener（处理异步操作结果）

5、EventLoop（事件驱动模型）

## 7、Netty 支持哪几种 Reactor 线程模型？

##### Netty 支持以下几种 Reactor 线程模型：

##### 1、Reactor 单线程模型

所有的 IO 操作都在一个线程中完成。

##### 2、Reactor 多线程模型

由一个 NIO 线程负责监听服务端，并接收客户端的连接请求，再由另外一组 NIO 线程来处理 IO 的读写操作。

##### 3、主从 Reactor 多线程模型

有多个 NIO 线程接收客户端的连接请求，可以解决上面的单个 NIO 线程接收连接请求的性能问题；

可以通过配置启动参数来使用不同的线程模型。

## 8、Netty 中的线程组描述一下？

##### Netty 服务端有 2 个 NioEventLoopGroup 线程组：

- bossGroup 老板线程组：用于处理客户端的连接请求；
- workerGroup 工作线程组：用来处理 IO 事件；

来张网上盛传的 Netty 框架图：

![](/images/Netty/8.jpg)

## 9、Netty Boss 线程数设置多少比较合适？

如果服务端只监听了一个端口，一般设置 1 个就行。

如果服务端只监听也多个端口，就需要设置成对应的端口数。

## 10、Netty 线程组默认生成多少个线程？

如源码所示：

```java
private static final int DEFAULT_EVENT_LOOP_THREADS
```

如果没有指定数量，也没有指定"-Dio.netty.eventLoopThreads = x"这个 JVM 参数，那么这个线程组的默认线程数为 CPU\*2。

## 11、Netty 有哪几种发送消息的方式？

Netty 有两种发送消息的方式：

1、写入 Channel 当中，消息会从 ChannelPipline 的末尾开始流动，会经过所有的 ChannelHandler；

2、写入与 ChannelHandler 所关联的 ChannelHandlerContext 当中，消息将从 ChannelPipleline 中的下一个 ChanelHandler 开始流动；

第 2 种方法会经过更少的 ChannelHandler，而不是所有，除非必要，一般建议使用第 2 种提升性能。

## 12、Netty 支持哪些超时时间设置？

##### Netty 支持一下 3 种超时时间设置：

1、readerldleTime（读数据超时时间）

2、writerldleTime（写数据超时时间）

3、alldleTime（读或写超时时间）

## 13、Netty 如何拒绝非法连接？

如果有黑、白名单列表，那么可以使用 IpFilterRuleHandler 类进行过滤。

如果没有，就需要再通道连接的时候进行身份验证，以拒绝非法连接。

## 14、Netty 如何一直保持长连接？

一般在建立连接后，客户端需要在服务端设置的超时时间范围内，每 N 秒给服务器发送一次心跳，以保持长连接，否则服务器会关闭连接。

如果客户端自己掉线了，可以使用指定的重连策略进行重连操作。

## 15、Netty 如何分别用户对应的通道？

一般在内存中维护一个 ConcurrentHashMap<String, String>，用于绑定用户与通道之间的关系。

对应关系：userId <> Channelld

## 16、Netty 如何实现集群高可用？

##### 参考方案如下：

1、利用 Zookeeper 临时节点特性，维护 Netty 的生命周期等信息；

2、提供一个 WEB 接口，返回当前负载最小的 Netty 服务器（IP/端口）；

3、客户端根据接口获取返回的 Netty 服务器（IP/端口）信息，再进行连接；

## 17、Netty 如何保证连接的安全性？

##### 可以使用以下 3 种安全措施：

1、使用 SSL 协议；

2、使用 IP 地址黑名单；

3、使用安全的加密算法认证；

## 18、Netty 高性能表现在哪些方面？

##### 主要表现在以下几个方面：

1、基于 NIO，异步非阻塞通信；

2、支持零拷贝技术；

3、高效的 Reactor 线程模型；

4、高效的并发编程；

5、支持多种内存管理策略；

6、无锁串形化读写处理；

7、支持多种高性能序列化协议；

8、灵活配置 TCP 参数；

## 19、Netty 是如何实现高效并发编程的？

##### 主要使用了以下几个技术：

1、读写锁的应用；

2、CAS 及相关原子类的应用；

3、线程安全的容器的应用；

4、vilatile 轻量级锁的应用；

5、不依赖于线程的优先级；

## 20、Netty 无锁串形化设计是指什么？

Netty 无锁串形化设计是为了提高性能，即一个消息的处理都尽量在一个县城内串行化完成，而不需要切换线程，避免了多线程并发处理下的锁竞争性能损耗。

## 21、Netty 中的零拷贝体现哪些方面？

##### Netty 中的零拷贝体现在以下 3 个方面：

1、Netty 的接收和发送 ByteBuffer，使用了堆外直接内存进行 Socket 读写；

2、Netty 可以同时操作多个 ByteBuffer 对象，就像操作单个 Buffer 一样；

3、Netty 中的文件传输使用了 transferTo 方法，它可以将文件缓冲区的数据直接发给目标 Channel；

这 3 种情况都可以避免不必要的内存拷贝，提升传输效率。

## 22、Netty 中的内存池的作用是？

因为堆外直接内存的分配和回收工作是非常耗时的，为了提高性能、节省内存，Netty 提供了内存池机制，可以重用缓冲区 Buffer，循环利用 ByteBuffer。

## 23、Netty 如何解决拆包粘包问题？

##### 1、固定长度

使用：FixedLengthFrameDecoder

##### 2、通过分隔符

使用：

- LineBasedFrameDecoder（通过换行符）
- DelimiterBasedFrameDecoder（通过指定分隔符）

##### 3、通过记录数据包的长度

使用：LengthFieldBasedFrameDecoder

##### 4、自定义拆包和粘包

通过：MessageToByteEncoder、ByteToMessageDecoder

## 24、Netty 编码、解码用什么框架？

##### 主要有以下几大序列化框架：

1、JDK 原生序列化（不推荐）

2、Google 的 Protobuf
