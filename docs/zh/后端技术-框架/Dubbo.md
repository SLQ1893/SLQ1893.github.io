## 1、Dubbo 是什么框架？

Apache Dubbo 是一款易用、高性能的 **WEB** 和 **RPC** 框架，同时为构建企业级微服务提供服务发现、流量治理、可观测、认证鉴权等能力、工具与最佳实践。

Apache Dubbo 最初是为了解决阿里巴巴内部的微服务架构问题而设计并开发的，在十多年的时间里，它在阿里巴巴公司内部的很多业务系统得到了非常广泛的应用。

最在 2008 年，阿里巴巴就将 Dubbo 捐献到开源社区，它很快成为了国内开源服务框架选型的事实标准框架，得到了业界更广泛的应用。

在 2017 年，Dubbo 被正式捐献 Apache 软件基金会并成为 Apache 顶级项目，开始了一段新的征程。

## 2、为什么要用 Dubbo？

因为是阿里开源项目，国内很多互联网公司都在用，已经经过很多线上考验。

在云原生时代，Dubbo 相继衍生出了 **Dubbo3、Proxyless Mesh** 等架构与解决方案，在易用性、超大规模微服务实践、云原生基础设施适配、安全性等几大方向上进行了全面升级。

另外，Dubbo3 已在阿里巴巴内部微服务集群全面落地，用于升级运行多年的 HSF2 框架，**包括电商核心、阿里云等核心系统已经全面运行在 Dubbo3 之上**。

Dubbo 内部使用了 Netty、Zookeeper、Redis 等组件，保证了高性能高可用性。

使用 Dubbo 可以将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，可用于提高业务复用灵活扩展，使前端应用能更快速的响应多变的市场需求。

下面这张图可以很清楚的诠释，最重要的一点是，分布式架构可以承受更大规模的并发流量。

![](/images/Dubbo/2_1.jpg)

下面是 Dubbo 的服务治理图。

![](/images/Dubbo/2_2.jpg)

## 3、Dubbo 里面有哪几种节点角色？

Dubbo 中的节点角色如下表：

| 节点      | 角色说明                               |
| --------- | -------------------------------------- |
| Provider  | 暴露服务的服务提供方                   |
| Consumer  | 调用远程服务的服务消费方               |
| Registry  | 服务注册与发现的注册中心               |
| Monitor   | 统计服务的调用次数和调用时间的监控中心 |
| Container | 服务运行容器                           |

## 4、Dubbo 停止维护了吗？

Dubbo 在 2014 年开始停止维护过几年，2017 年开始重新维护，并捐献给了 Apache 成为顶级项目，现在发展也还不错，推出了全新的 Dubbo 3.x。

## 5、Dubbo 必须依赖的包有哪些？

Dubbo 最低依赖只需要 JDK，最新版本要求 JDK 8 及以上，推荐使用 JDK 17。

## 6、Dubbo 支持哪些注册中心？推荐哪种？

Dubbo 2.7 提供的注册中心有如下几种：

- Zookeeper (推荐)
- Redis
- Nacos
- Etcd
- Consul
- ......

Dubbo 3.0 开始默认仅提供以下注册中心支持：

- **Zookeeper (推荐)**

- Nacos

## 7、Dubbo 内置了哪几种服务容器？

Dubbo 内置了以下 3 种服务容器：

- Spring Container
- Jetty Container
- Log4j Container

Dubbo 服务容器的加载内容，可通过容器扩展点进行扩展。

## 8、Dubbo 需要 Web 容器吗？

不需要，因为 Dubbo 的服务容器是一个独立的启动程序，它只是一个简单的 Main 方法，并加载一个简单的 Spring 容器，用于暴露服务。

Web 容器主要是用来响应 HTTP 请求以及静态页面的，所以，**Dubbo 服务不需要 Tomcat、JBoss 等 Web 容器的功能**，没必要用 Web 容器去加载服务，如果硬要用 Web 容器去加载服务，**会增加复杂性，也浪费资源**。

## 9、Dubbo 的服务注册和发现流程？

Dubbo 的架构图：

![](/images/Dubbo/9.jpg)

该图来自 Dubbo 官网，供你参考，如果你说你熟悉 Dubbo，面试官经常会让你画这个图，记好了。

##### 调用关系：

1、服务提供者在启动时，向注册中心注册自己提供的服务。

2、服务消费者在启动时，向注册中心订阅自己所需的服务。

3、注册中心将服务提供者的地址列表返回给服务消费者，如果有变更，注册中心将基于长连接异步推送变更数据给消费者。

4、服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。

5、服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。

## 10、Dubbo 服务暴露的过程？

Dubbo 会在 Spring 实例化完 Bean 之后，在刷新容器最后一步发布 ContextRefreshEvent 事件的时候，通知实现了 ApplicationListener 的 ServiceBean 类进行回调 onApplicationEvent 事件方法，Dubbo 会在这个方法中调用 ServiceBean 父类 ServiceConfig 的 export 方法，而该方法真正实现了服务的（异步或者非异步）发布。

## 11、Dubbo 有哪几种配置方式？

##### 1、Spring 配置方式

Dubbo 采用全 Spring 配置方式，透明化接入应用，对应用没有任何 API 侵入，只需用 Spring 加载 Dubbo 的配置即可，Dubbo 基于 Spring 的 Schema 扩展进行加载。

##### 2、Java API 配置方式

API 属性与配置项一对一。比如：`ApplicationConfig.setName("xx")` 对应`<dubbo:application name="XXX" />`

##### 3、Spring Boot 配置方式

在 Dubbo Spring Boot 开发中，你只需要增加几个注解，并配置`application.properties`或`application.yml`文件即可完成 Dubbo 服务定义。

## 12、Dubbo 核心的配置有哪些？

| 标签                 | 用途         | 解释                                                                                             |
| -------------------- | ------------ | ------------------------------------------------------------------------------------------------ |
| <dubbo:service/>     | 服务配置     | 用于暴露一个服务，定义服务的元信息，一个服务可以用多个协议暴露，一个服务也可以注册到多个注册中心 |
| <dubbo:reference/>   | 引用配置     | 用于创建一个远程服务代理，一个引用可以指向多个注册中心                                           |
| <dubbo:protocol/>    | 协议配置     | 用于配置提供服务的协议信息，协议由提供方指定，消费方被动接受                                     |
| <dubbo:application/> | 应用配置     | 用于配置当前应用信息，不管该应用是提供者还是消费者                                               |
| <dubbo:module/>      | 模块配置     | 用于配置当前模块信息，可选                                                                       |
| <dubbo:registry/>    | 注册中心配置 | 用于配置连接注册中心相关信息                                                                     |
| <dubbo:monitor/>     | 监控中心配置 | 用于配置连接监控中心相关信息，可选                                                               |
| <dubbo:provider/>    | 提供方配置   | 当 ProtocolConfig 和 ServiceConfig 某属性没有配置时，采用此缺省值，可选                          |
| <dubbo:consumer/>    | 消费方配置   | 当 ReferenceConfig 某属性没有配置时，采用此缺省值，可选                                          |
| <dubbo:method/>      | 方法配置     | 用于 ServiceConfig 和 ReferenceConfig 指定方法级的配置信息                                       |
| <dubbo:argument/>    | 参数配置     | 用于指定方法参数配置                                                                             |

##### 配置之间的关系见下图：

![](/images/Dubbo/12.jpg)

## 13、Provider 可以配置 Consumer 哪些属性？

##### 以下几个仅供参考，如：

1）**timeout**：方法调用超时

2）**retries**：失败重试次数，默认重试 2 次

3）**loadbalance**：负载均衡算法，默认随机

4）**actives**：消费者端，最大并发调用限制

## 14、Dubbo 启动时依赖的服务不可用会怎样？

Dubbo 缺省会在启动时检查依赖的服务是否可用，不可用时会抛出异常，阻止 Spring 初始化完成，以便上线时，能及早发现问题，默认`check="true"`。

可以通过`check="false”`关闭检查，比如，测试时，有些服务不关心，或者出现了循环依赖，必须有一方先启动。

另外，如果你的 Spring 容器是懒加载的，或者通过 API 编程延迟引用服务，请关闭 check，否则服务临时不可用时，会抛出异常，拿到 null 引用，如果`check="false"`，总是会返回引 l 用，当服务恢复时，能自动连上。

##### 如：通过 spring 配置文件

关闭某个服务的启动时检查（没有提供者时报错）：

```xml
<dubbo:reference interface="com.foo.BarService" check="false" />
```

关闭所有服务的启动时检查（没有提供者时报错）：

```xml
<dubbo:consumer check="false" />
```

关闭注册中心启动时检查（注册订阅失败时报错）：

```xml
<dubbo:registry check="false" />
```

## 15、Dubbo 都支持什么协议，推荐用哪种？

Dubbo 2.7 提供的序列化协议有如下几种：

- **Dubbo (推荐)**
- RMI
- Hessian
- Http / Rest
- Webservice
- Thrift
- gRPC
- ...

Dubbo 3.0 开始默认仅提供以下序列化协议支持：

- Dubbo2
- **Triple (推荐)**
- gRPC
- Http/Rest

## 16、Dubbo 支持什么通信框架？默认哪种？

Dubbo 默认使用 **Netty** 框架，也是推荐的选择，另外内容还集成有 **Mina、Grizzly**。

## 17、Dubbo 支持的序列化方式有哪些？

Dubbo 2.7 提供的序列化协议有如下几种：

- **Hessian2（默认）**
- Fastjson
- Kryo
- FST
- JDK
- Protostuff
- Protocol Buffers
- Avro
- Gson

Dubbo 3.0 开始默认仅提供以下序列化协议支持：

- **Hessian2（默认）**
- JDK
- rotocol Buffers

Dubbo 3.2 开始默认提供以下序列化协议支持：

- Hessian2
- **Fastjson2（默认）**
- JDK
- Protocol Buffers

处于安全性考虑，从 Dubbo 3.3 开始将默认仅提供以下序列化协议支持：

- Fastjson2（默认）
- Hessian2
- Protocol Buffers

## 18、Dubbo 有哪些集群容错方案，默认哪种？

在集群调用失败时，Dubbo 提供了多种容错方案，缺省为 **failover** 重试。

![](/images/Dubbo/18.jpg)

| 容错方案          | 说明                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Failover Cluster  | 失败自动切换，当出现失败，重试其它服务器。通常用于读操作，但重试会带来更长延迟。可通过`retries="2"`来设置重试次数（不含第一次）。   |
| Failfast Cluster  | 快速失败，只发起一次调用，失败立即报错。通常用于非幂等性的写操作，比如新增记录。                                                    |
| Failsafe Cluster  | 失败安全，出现异常时，直接忽略。通常用于写入审计日志等操作。                                                                        |
| Failback Cluster  | 失败自动恢复，后台记录失败请求，定时重发。通常用于消息通知操作。                                                                    |
| Forking Cluster   | 并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读操作，但需要浪费更多服务资源。可通过`forks="2"`来设置最大并行数。 |
| Broadcast Cluster | 广播调用所有提供者，逐个调用，任意一台报错则报错。通常用于通知所有提供者更新缓存或日志等本地资源信息。                              |
| Available Cluster | 调用目前可用的实例（只调用一个），如果当前没有可用的实例，则抛出异常。通常用于不需要负载均衡的场景。                                |
| Mergeable Cluster | 将集群中的调用结果聚合起来返回结果。                                                                                                |
| ZoneAware Cluster | 多注册中心订阅的场景，注册中心集群间的负载均衡。                                                                                    |

## 19、Dubbo 有哪些负载均衡策略，默认哪种？

在集群负载均衡时，Dubbo 提供了多种均衡策略，默认为`Weighted Random`基于权重的随机负载均衡策略，可通过调整配置项启用。

| 算法                          | 特性                    | 备注                                                 |
| ----------------------------- | ----------------------- | ---------------------------------------------------- |
| Weighted Random LoadBalance   | 加权随机                | 默认算法，默认权重相同                               |
| RoundRobin LoadBalance        | 加权轮询                | 借鉴于 Nginx 的平滑加权轮询算法，默认权重相同,       |
| LeastActive LoadBalance       | 最少活跃优先＋ 加权随机 | 背后是能者多劳的思想                                 |
| Shortest-Response LoadBalance | 最短响应优先＋ 加权随机 | 更加关注响应速度                                     |
| ConsistentHash LoadBalance    | 一致性哈希              | 确定的入参，确定的提供者，适用于有状态请求           |
| P2C LoadBalance               | Power of Two Choice     | 随机选择两个节点后，继续选择"连接数"较小的那个节点。 |
| Adaptive LoadBalance          | 自适应负载均衡          | 在 P2C 算法基础上，选择二者中 load 最小的那个节点    |

另外，Dubbo 支持自行**扩展负载均衡策略**。

具体实现上，Dubbo 提供的是客户端负载均衡，即由 Consumer 通过负载均衡算法得出需要将请求提交到哪个 Provider 实例。

Dubbo 支持在服务提供者一侧配置默认的负载均衡策略，这样所有的消费者都将默认使用提供者指定的负载均衡策略，消费者可以自己配置要使用的负载均衡策略，如果都没有任何配置，则默认使用随机负载均衡策略。

同一个应用内支持配置不同的服务使用不同的负载均衡策略，支持为同一服务的不同方法配置不同的负载均衡策略。

## 20、有多个同名服务时，如果连接指定的服务？

这个需求一般是在开发及测试环境下，**经常需要绕过注册中心，只测试指定服务提供者**，这时候可能需要点对点直连，点对点直连方式，将以服务接口为单位，忽略注册中心的提供者列表，A 接口配置点对点，不影响 B 接口从注册中心获取列表。

有以下几种配置方式：

![](/images/Dubbo/20.jpg)

> 为了避免复杂化线上环境，不要在线上使用这个功能，建议只在开发、测试阶段使用。

## 21、Dubbo 支持服务多协议吗？

Dubbo 从设计上不绑定任何一款特定通信协议，支持如 **HTTP/2、REST、gRPC、JsonRPC、Thrift、Hessian2**等几乎所有主流的通信协议。

这样的 Protocol 设计模式给构建微服务带来了最大的灵活性，开发者可以根据需要如性能、通用型等选择不同的通信协议，不再需要任何的代理来实现协议转换，甚至你还可以通过 Dubbo 实现不同协议间的迁移。

![](/images/Dubbo/21.jpg)

Dubbo Protocol 被设计支持扩展，可以将内部私有协议适配到 Dubbo 框架上，进而将私有协议接入 Dubbo 体系，以享用 Dubbo 的开发体验与服务治理能力。

比如 Dubbo3 的典型用户阿里巴巴，就是通过扩展支持 HSF 协议实现了内部 HSF 框架到 Dubbo3 框架的整体迁移。

## 22、Dubbo 服务上线怎么兼容 l 旧版本？

当同一个服务分组下的提供者接口有多个版本实现时，如果直接升级提供者，消费者就会出现不兼容，即找不到日版本的提供者了。

如果兼容旧版本的提供者进行升级，**可以用版本号来进行过渡，不同版本号的服务，它们之间不相互引用。**

##### 按照以下的步骤进行版本迁移：

1、在低压力时间段，先升级一半提供者为新版本，确实依赖旧版本的消费者不会出问题。

2、再将所有消费者升级为新版本。

3、然后将剩下的一半旧版本提供者升级为新版本。

##### 实现代码

---

##### 服务提供者

老版本服务提供者配置：

```xml
<dubbo:service interface="cn.javastack.UserService" version="1.0.o" />
```

新版本服务提供者配置：

```xml
<dubbo:service interface="cn.javastack.UserService" version="2.0.o" />
```

##### 服务消费者

老版本服务消费者配置：

```xml
<dubbo:reference id="userService" interface="cn.javastack.UserService" version="1.0.o" />
```

新版本服务消费者配置：

```xml
<dubbo:reference id="userService" interface="cn.javastack.UserService" version="2.o.0" />
```

##### 不区分版本

如果不需要区分版本，可以按照以下的方式配置

```xml
<dubbo:reference id="userService" interface="cn.javastack.UserService" version="*" />
```

## 23、Dubbo 一个服务接口有多种实现怎么区分？

当一个接口有多种实现时，可以用 group 属性来分组，服务提供方和消费方都指定同一个 group 即可。

比如使用 **@DubboService** 注解，添加 **group** 参数：

```java
@DubboService(group = "userServiceImpl1")
public class UserServiceImpl1 implements UserService {
    // ...
}

@DubboService(group ="userServiceImpl2")
public class UserServiceImpl2 implements UserService {
    // ...
}
```

也可以使用 xml 配置，略。

## 24、Dubbo 可以对结果进行缓存吗？

可以，Dubbo 支持**服务端（提供者端）和客户端（消费者端）的调用结果缓存，用于加速热门数据的访问速度**，支持 XML 配置缓存，同时也提供了声明式缓存，以减少配置缓存的工作量。

Dubbo 结果缓存可以控制在**接口粒度**和**方法粒度**，如消费者端缓存配置方式如下所示。

##### 提供者端缓存

---

##### 接口粒度

XML 配置方式：

```xml
<bean id="userService" class="cn.javastack.UserServiceImpl"/><dubbo:service interface="cn.javastack.UserService" ref="userService" cache="lru" />
```

注解配置方式：

```java
@DubboService(cache = "lru")
public class UserServiceImpl implements UserService {
    @Override
    public String getUserinfo(String name) {
    }
}|
```

##### 方法粒度

```xml
<bean id="userService" class="cn.javastack.UserServiceImpl"/><dubbo:service interface="cn.javastack.Userservice" ref="userservice" cache="lru" /><dubbo:method name="getUserInfo" cache="lru" /></dubbo:service>
```

注解配置方式：

```java
@DubboService(methods = {@Method(name="getUserInfo",cache = "lru")})
public class UserServiceImpl implements UserService {
    @override
    public String sayHello(String name) {
        // ...
    }
}
```

##### 消费者端缓存

---

##### 接口粒度

XML 配置方式：

```xml
<dubbo:reference interface="cn.javastack.UserService" cache="lru" />
```

注解配置方式：

```java
@DubboReference(cache = "lru")
private UserService userService;
```

##### 方法粒度

```xml
<dubbo:reference interface="cn.javastack.UserService">
    <dubbo:method name="getUserInfo" cache="lru" />
</dubbo:reference>
```

注解配置方式：

```java
@DubboReference(methods = {@Method(name="getUserInfo",cache = "lru")}) private UserService userService;
```

## 25、Dubbo 支持自定义结果缓存策略吗？怎么实现？

Dubbo 支持扩展自定义的缓存策略。

策略接口：

> org.apache.dubbo.cache.CacheFactory

实现该接口：

```java
import org.apache.dubbo.cache.CacheFactory;
public class XxxCacheFactory implements CacheFactory {
    public Cache getCache(URL url, String name) {
        return new XxxCache(url, name);
    }
}
```

```java
import org.apache.dubbo.cache.Cache;
public class XxxCache implements Cache {
    public Cache(URL url, String name) {
        // ...
    }

    public void put(object key, Object value) {
        // ...
    }

    public Object get(object key) {
        // ...
    }
}
```

然后在以下文件中进行注册：

> resources/META-INF/dubbo/org.apache.dubbo.cache.CacheFactory

注册内容为：

> xxX=com.xxx.XxxCacheFactory

xxx 为缓存策略名称。

## 26、Dubbo 支持哪几种结果缓存类型？

目前 Dubbo 3.0+版本内置了以下几种缓存策略：

| 策略名称    | 描述                                                   |
| ----------- | ------------------------------------------------------ |
| Iru         | 基于最近最少使用原则删除多余缓存，保持最热的数据被缓存 |
| lfu         | 基于淘汰使用频次最低的原则来实现缓存策略               |
| expiring    | 基于过期时间原则来实现缓存策略                         |
| threadlocal | 当前线程缓存                                           |
| jcache      | 与 JSR107 集成，可以桥接各种缓存实现                   |

## 27、Dubbo 服务之间的调用是阻塞的吗？

默认是**同步等待结果阻塞**的，但是也**支持异步调用**。

Dubbo 从 2.7.0 开始，所有异步编程接口是以 **CompletableFuture** 为基础实现的。Dubbo 是基于 NIO 的非阻塞实现并行调用，客户端不需要启动多线程即可完成并行调用多个远程服务，相对多线程开销较小，异步调用会返回一个 Future 对象。

异步调用流程图如下：

![](/images/Dubbo/27.jpg)

## 28、Dubbo 支持分布式事务吗？

Dubbo 支持集成 **Seata** 实现分布式事务。

Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务，它提供了 **AT、TCC、SAGA 和 XA** 事务模式，为用户打造一站式的分布式解决方案。

## 29、Dubbotelnet 命令能做什么？

可以通过 Telnet 客户端连接到 Dubbo 服务的端口：

> telnet 17.168.8.123 8090

通过 Telnet 命令对服务进行管理和诊断，通过执行一系列命令来查询服务信息、调用服务方法等，这在开发和问题排查过程中非常方便。

下面是一些常用的 Dubbo Telnet 命令：

| 命令   | 功能                                   | 使用场景                                                                            |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------------- |
| Is     | 列出所有服务接口                       | 当你想了解服务提供者提供了哪些服务接口时。                                          |
| ls -l  | 列出指定服务的所有方法                 | 知道服务接口后，进一步了解这个接口提供了哪些方法时。                                |
| invoke | 调用服务提供者的一个方法               | 在测试或排查问题时，需要直接调用服务的某个方法。                                    |
| cd     | 切换当前服务路径                       | 针对某个具体的服务执行命令时，使用`cd` 切换到该服务，之后直接执行针对该服务的命令。 |
| pwd    | 显示当前服务路径                       | 在使用`cd`命令在不同服务间切换后，确认当前的服务路径。                              |
| status | 查看服务提供者的状态                   | 检查 Dubbo 服务提供者的当前状态，如是否已启动，内存占用情况等。                     |
| help   | 列出所有支持的命令或某个命令的帮助信息 | 不确定可使用哪些命令，或不清楚某个命令的具体用法时。                                |

## 30、Dubbo 支持服务降级吗？

服务降级是指服务在非正常情况下进行应急处理，Dubbo 2.2.0 以上版本支持，推荐使用`Sentinel`限流降级组件。

## 31、Dubbo 如何优雅停机？

优雅停机是指**服务实例能安全平稳的停止，对进行中的业务不产生影响**。

一个 Dubbo 服务可能既作为服务提供者，又是服务消费者，当服务停止时，需要保证以下两点：

- 消费者不会再请求已停止的服务实例
- 该服务实例正在处理的请求能正常处理完成

##### 非 Spring Boot 应用：

Dubbo 是通过 JDK 的 ShutdownHook 来完成优雅停机的，所以如果用户使用`kill -9 PID`等强制关闭指令，是不会执行优雅停机的，只有通过`kill PID`时，才会执行。

##### Spring Boot 应用：

Dubbo 与 Spring Boot 集成（2.3+），需要添加以下配置：

```properties
server:
  shutdown: graceful
```

然后通过 SpringBoot Actuator 提供的`/shutdown`端点优雅停止服务，Dubbo 的 ShutdownHook 会在 SpringBoot 的 ShutdownHook 之前执行。

---

可以设置优雅停机的超时时间，默认超时时间是**10** 秒，如果超时则强制关闭，该参数可在 **dubbo.properties** 文件里配置，配置示例如下：

```yaml
# 停止服务等待时间，单位：毫秒
dubbo.service.shutdown.wait=30000
```

## 32、Dubbo 服务提供者失效自动下线是什么原理？

服务失效踢出基于 Zookeeper 的临时节点原理。

当服务提供者由于某些原因（如网络故障、服务崩溃等）与注册中心（ZooKeeper）的连接断开时，它在注册中心创建的**临时节点**将被自动删除。

服务消费者或是其他服务监控组件会定期从注册中心获取可用的服务列表，当服务提供者的临时节点被删除后，这个服务提供者的信息就不再出现在注册中心的服务列表中，从而实现了服务提供者的自动下线。

## 33、Dubbo 服务调用链过长如何解决？

Dubbo 内置了全链路追踪能力，通过**OpenTelemetry** 协议将跟踪数据导出到一些主流实现如 **Zipkin、Skywallking、Jaeger** 等后端系统，可以实现全链路跟踪数据的分析与可视化展示。

Dubbo 目前借助**MicrometerObservation**完成 Tracing 的所有埋点工作，依赖**Micrometer**提供的各种 Bridge 适配，我们可以实现将 Tracing 导入各种后端系统。

具体工作原理如下。

![](/images/Dubbo/33.jpg)

Dubbo Tracing 还实现了与日志系统的自动关联，即可以将 tracing-id、span-id 等信息自动置入日志 MDC 上下文。

## 34、Duboo 服务读写容错策略怎么做？

读操作建议使用 **Failover** 失败自动切换，默认重试两次其他服务器。

写操作建议使用 **Failfast** 快速失败，发一次调用失败就立即报错。

## 35、Dubbo 的管理控制台能做什么？

##### 管理控制台主要包含：

- 路由规则
- 动态配置
- 服务降级
- 访问控制
- 权重调整
- 负载均衡
- ...

## 36、Dubbo 能集成 Spring Boot 吗？

可以的，项目地址如下：

> https://github.com/apache/dubbo-spring-boot-project

可通过以下网站一键构建：

> https://start.dubbo.apache.org/bootstrap.html

![](/images/Dubbo/36.jpg)

## 37、Dubbo 使用过程中都遇到了些什么问题？

在使用 Dubbo 过程中可能会遇到各种问题，下面是一些常见的情况及其解决思路：

##### 1、服务注册与发现延迟

服务提供者启动并注册到注册中心后，服务消费者可能不能立即发现新的服务实例，导致短时间内调用失败。

> ##### 解决思路：
>
> 首先，确认注册中心的网络状况良好，无延迟和丢包现象。其次，可以检查服务提供者和消费者的日志，确认服务注册与发现的时间点。

##### 2、服务调用超时

服务消费者在调用服务提供者时，可能会因为网络延迟、服务提供者处理能力不足等原因导致调用超时。

> ##### 解决思路：
>
> 首先，检查网络状况，确保网络通畅。其次，分析服务提供者的性能，确认是否存在瓶颈（如数据库访问慢、算法效率低等）。还可以考虑调整 Dubbo 的超时设置，根据实际业务需求合理设置超时时间。

##### 3、服务负载不均

在使用负载均衡策略时，可能会出现某些服务提供者负载过高，而其他提供者负载较低的情况。

> ##### 解决思路：
>
> 主要检查负载均衡策略的配置是否合理，另外，考虑服务提供者的硬件配置和网络环境是否均衡。

##### 4、版本兼容问题

在多版本服务共存时，可能会因为版本不兼容导致调用失败或数据错误。

> ##### 解决思路：
>
> 在服务提供者和消费者的配置中明确指定版本号，确保相互之间的调用是版本兼容的。在进行版本升级时，可以采用平滑升级的策略，逐渐过渡到新版本，避免直接切换造成影响。

##### 5、服务监控与治理

在复杂的分布式系统中，服务的监控和治理变得尤为重要，缺乏有效的监控可能导致问题难以及时发现和定位。

> ##### 解决思路：
>
> 利用 Dubbo 提供的管理控制台对服务进行监控，及时了解服务的调用情况、响应时间和失败率等指标。针对发现的问题，可以通过路由规则、服务降级和限流等治理功能进行处理。

## 38、Dubbo 的源码你有读过吗？

参考回答：

1、首先，我对 Dubbo 的服务注册与发现机制比较感兴趣。

Dubbo 使用注册中心来管理服务的地址信息，服务提供者启动时会向注册中心注册自己的地址信息，服务消费者通过注册中心来发现服务地址。这种设计有效地解耦了服务提供者和消费者，增强了系统的灵活性和可扩展性。

2、其次，我对 Dubbo 的远程调用机制进行了研究。

Dubbo 支持多种协议，如 Dubbo 协议、HTTP 协议等。其中，Dubbo 协议是基于 Netty 实现的，所以 Dubbo 在网络通信方面有很好的性能。

3、另外，我觉得 Dubbo 的 SPI 机制是其扩展性强的一个重要原因。

通过 SPI 机制，Dubbo 可以很容易地扩展新的协议、注册中心等组件，这为自定义扩展提供了可能。

---

通过这样的回答方式，既展示了你对 Dubbo 源码的了解，也体现了你的学习态度和深入钻研的能力，同时留有进一步学习的空间，为面试官提供了继续深入提问的切入点。

## 39、Dubbo 和 SpringCloud 哪个好？

各有各的优势，目前来说，Spring Cloud 用得更多。

##### Spring Cloud 的优势：

- Spring Cloud 能得到更多 Spring 生态的原生支持；
- Spring Cloud 对一些常用的微服务模式做了抽象，比如：服务发现、动态配置、异步消息、批处理任务、定时任务、持久化数据访问，疗等等。
- Spring Cloud 的入门文档和相关示例代码要更完善。

##### Dubbo 的优势：

- 支持更多的通信协议，不仅仅是 HTTP，在通信协议和编码上选择更灵活。
- Dubbo 服务治理能力更强，支持如权重动态调整、标签路由、条件路由等，还支持 Service Mesh 体系。
- Dubbo 可以更好的和阿里巴巴中间件进行融合。

## 40、Dubbo 你们的推荐用法有哪些？

比如有以下推荐用法：

1）在 Provider 端尽量多配置 Consumer 端属性

2）在 Provider 端配置合理的 Provider 端属性

3）使用固定端口暴露服务，而不要使用随机端口

4）不要使用 dubbo.properties 文件配置，推荐使用对应 XML 配置，或者使用 Dubbo 专用注解

5）用 Dubbo Admin 监控注册中心上的服务提供方

6）...

## 41、你怎么理解 Dubbo SPl？

**SPI** 全称为 Service Provider Interface，是一种服务发现机制。

SPI 的本质是将接口实现类的全限定名配置在文件中，并由服务加载器读取配置文件，加载实现类。这样可以在运行时，动态为接口替换实现类。正因此特性，我们可以很容易的通过 SPI 机制为我们的程序提供拓展功能。

SPI 机制在第三方框架中也有所应用，比如 Dubbo 就是通过 SPI 机制加载所有的组件。

不过，**Dubbo 并未使用 Java 原生的 SPI 机制，而是对其进行了增强**，使其能够更好的满足需求，在 Dubbo 中，SPI 是一个非常重要的模块。

基于 SPl，我们可以很容易的对 Dubbo 进行拓展，如果大家想要学习 Dubbo 的源码，SPI 机制务必弄懂。

## 42、Dubbo 中有哪些 SPI 扩展？

Dubbo 的 SPl 扩展能力非常灵活，使得 Dubbo 项目很方便的切分成一个一个的子模块，**以实现热插拔特性**，我们可以完全基于自身需求，**替换 Dubbo 原生实现，来满足自身业务需求**。

Dubbo 中的 SPI 扩展如图所示：

![](/images/Dubbo/42.jpg)

##### Dubbo 扩展的使用场景：

- 实现自定义负载均衡策略
- 实现自定义的注册中心
- 实现自定义的过滤器
- ....

Dubbo 内部实现的，和我们自己实现的 SPI 扩展，它都是平等对待的。

## 43、Dubbo 加载 SPI 扩展的流程是怎样的？

Dubbo 加载扩展的整个流程如下：

![](/images/Dubbo/43.jpg)

##### 加载 SPI 扩展的主要步骤为：

- 读取并解析配置文件
- 缓存所有的扩展实现类
- 根据用户指定的扩展名，实例化对应的扩展
- 对扩展实例属性进行 IOC 注入
- 实例化扩展包装类，实现 AOP 特性

## 44、Dubbo 之外，你还了解别的 RPC 框架吗？

除了 Dubbo，市面上还有许多其他优秀的 RPC（Remote Procedure Call）框架，它们各有特色，服务于不同的应用场景和需求。

下面是一些广泛使用的 RPC 框架：

##### 1、gRPC

gRPC 是一个开源、高性能的 RPC 框架，它由 Google 开发，基于 HTTP/2 协议设计，支持多种语言库它使用了一种高效的序列化格式，能够确保数据的紧凑和高效传输。

它适用于需要跨语言调用且对性能有较高要求的微服务架构，特别是在云原生和容器化部署环境中表现突出。

##### 2、Thrift

它由 Facebook 开发，支持跨语言调用，可以用于生成 RPC 客户端和服务端的代码，支持多种传输协议和数据格式。

它适合于需要多语言支持和灵活性较高的系统中，特别是在需要自定义协议和数据格式的场合。

##### 3、 Spring Cloud

它在 Spring Boot 的基础上构建，为微服务架构提供了一整套轻量级的服务治理解决方案，包括服务发现、配置管理、消息路由等。

虽然 Spring Cloud 不是一个纯粹的 RPC 框架，但它提供的 RestTemplate、OpenFeign 等组件可以实现服务间的远程调用。

它适用于使用 Spring 生态构建的微服务系统，尤其是需要丰富服务治理特性的应用。

##### 4、Motan

它是由微博开源的一个轻量级的 RPC 服务框架，它提供了服务注册发现、负载均衡、故障转移等功能。

Motan 设计简洁，适用于轻量级的微服务架构，尤其是对启动时间和运行效率有较高要求的场景。

## 45、Dubbox 是什么？和 Dubbo 有啥区别？

Dubbox 是继 Dubbo 停止维护后，当当网基于 Dubbo 做的一个扩展项目，如加了服务可 Restful 调用，更新了开源组件等。

Dubbo 捐献给 Apache 后，推出了全新的 Dubbo 3，现在已经没有 Dubbox 什么事了。
