## 1、Spring Cloud 是什么？

##### 简介

Spring Cloud 是目前主流的微服务技术框架，它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。

Spring 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。

##### 特性

Spring Cloud 专注于提供良好的开箱即用经验的典型用例和可扩展性机制覆盖。

- 分布式/版本化配置
- 服务注册和发现
- 路由
- service to service 调用
- 负载均衡
- 断路器
- 分布式消息传递

##### 前景

Spring Cloud 对于中小型互联网公司来说是一种福音，因为这类公司往往没有实力或者没有足够的资金投入去开发自己的分布式系统基础设施，使用 Spring Cloud 一站式解决方案能在从容应对业务发展的同时大大减少开发成本。

同时，随着近几年微服务架构和 Docker 容器概念的火爆，也会让 Spring Cloud 在未来越来越"云"化的软件开发风格中立有一席之地，尤其是在目前五花八门的分布式解决方案中提供了标准化的、全站式的技术方案，意义可能会堪比当前 Servlet 规范的诞生，有效推进服务端软件系统技术水平的进步。

## 2、Spring Cloud 有哪些优势？

Spring Cloud 作为构建和管理微服务的一套框架，提供了许多优势来帮助开发者有效地处理分布式系统的复杂性。

##### 简化分布式系统开发

Spring Cloud 基于 Spring Boot，继承了 Spring Boot 的便捷性，允许开发者用最少的配置搭建起一个分布式系统。

##### 服务治理和配置管理

提供了服务发现、配置中心等组件，如 Eureka、Consul、Zookeeper 和 Spring Cloud Config，帮助服务互相发现并管理各自的配置。

##### 通信简化

通过 Feign、Ribbon 和 Load Balancer 等组件简化了服务间的通信，实现负载均衡和服务调用的简化。

##### 安全性

集成了 Spring Security 和 OAuth2，支持服务的安全访问和敏感数据保护。

##### 容错和熔断

提供了 Hystrix、Resilience4j 等熔断器组件，帮助服务在遇到故障时进行快速失败，避免级联故障。

##### 消息驱动的微服务

集成了 Spring Cloud Stream、RabbitMQ 和 Kafka 等消息中间件，支持基于事件驱动的微服务架构。

##### API 网关

Spring Cloud Gateway 提供了一种简单有效的方式来路由到 API，并为每个服务提供跨域支持、安全性、监控/度量和弹性。

##### 全面的监控和跟踪

支持 Sleuth 和 Zipkin 等分布式跟踪系统，以及 Micrometer 的度量收集，帮助监控服务间的调用和延迟。

##### 弹性和可伸缩性

与 Kubernetes 和 Docker 等现代部署技术兼容，支持在云环境中的自动扩展和管理。

##### 社区和生态

作为 Spring 生态系统的一部分，Spring Cloud 享有强大的社区支持和丰富的资源，包括文档、教程和第三方库。

## 3、Spring Cloud 和 Spring Boot 的关系？

##### Spring Cloud 和 Spring Boot 的关系：

1、Spring Cloud 完全基于 Spring Boot，它利用了 Spring Boot 的快速开发特性来简化微服务的开发和部署，所有的 Spring Cloud 组件都可以通过 Spring Boot 的方式进行配置和启动。

2、在微服务架构中，Spring Boot 负责提供快速开发的基础设施，如应用的初始化、配置、监控等，而 SpringCloud 则提供高层次的服务治理框架，如服务注册与发现、配置中心、消息总线等。

总之，Spring Boot 和 Spring Cloud 是紧密协作的关系，Spring Boot 提供了微服务的开发基础,而 SpringCloud 则在此基础上提供了微服务治理的能力，二者共同简化了分布式系统的开发和管理，是构建微服务架构不可或缺的一部分。

## 4、Spring Cloud 有哪些重要的组件？

Spring Cloud 提供了一套完整的微服务解决方案，包含了多个重要的组件，如服务发现、配置管理、消息通信、负载均衡、断路器等。

##### Spring Cloud Netflix

- **Eureka**：服务注册与发现组件，提供服务注册中心，让服务实例注册自己的信息，以及发现其他服务的位置。
- **Hystrix**：断路器组件，提供服务间调用的保护，防止服务故障导致的级联失败。
- **Ribbon**：客户端负载均衡工具，提供对服务调用的负载均衡。
- **Zuul**：API 网关组件，用于请求路由、过滤和监控。

##### Spring Cloud Config

配置管理工具，提供集中化的外部配置支持。

##### Spring Cloud Bus

事件、消息总线，用于在集群中传播状态的变化，如配置更新。

##### Spring Cloud Gateway

新一代的 API 网关，支持路由、过滤和转发，用来替代 Zuul。

##### Spring Cloud OpenFeign

声明式的 REST 客户端，简化了微服务之间的 HTTP 调用。

##### Spring Cloud Sleuth

为微服务架构提供分布式跟踪解决方案，和 Zipkin 集成实现全链路跟踪。

##### Spring Cloud Stream

构建消息驱动微服务的框架，简化了消息中间件的使用。

##### Spring Cloud Security

提供安全相关的解决方案，支持 OAuth2 和 JWT 等。

##### Spring Cloud Circuit Breaker

断路器模式的抽象层，支持多种断路器实现。

完整版参考：https://spring.io/projects/spring-cloud

## 5、Spring Cloud 和 Dubbo 的区别？

##### 和 Dubbo 对比下：

---

| 组件         | Dubbo                                | Spring Cloud                |
| ------------ | ------------------------------------ | --------------------------- |
| 服务注册中心 | Zookeeper、Nacos、Kubernetes Service | Spring Cloud Netflix Eureka |
| 服务调用方式 | RPC, REST API                        | REST API                    |
| 服务网关     | Higress、APISIX、Shenyu、Envoy       | Spring Cloud Gateway        |
| 断路器       | Sentinel、Resilience4j、Hystrix      | Spring Cloud CircuitBreaker |
| 分布式配置   | Zookeeper、Nacos、Apollo             | Spring Cloud Config         |
| 服务跟踪     | Zipkin、Skywalking、OpenTelemetry    | Spring Cloud Sleuth         |
| 消息总线     | 无                                   | Spring Cloud Bus            |
| 数据流       | 无                                   | Spring Cloud Stream         |
| 批量任务     | 无                                   | Spring Cloud Task           |
| ...          | ...                                  | ...                         |

## 6、Spring Cloud 版本号怎么理解？

##### Spring Cloud 多版本号

---

![](/images/Spring Cloud/6_1.jpg)

这么多不同的版本，它们都有什么区别，我们开发微服务到底使用哪一个版本呢？这些版本与 Spring Boot 版本又是一个怎样的依赖关系？带着这些问题，我们必须把它一一搞清楚，不然总会让你很头疼。。

首先 Spring Cloud 是一个由很多子项目组成的庞大项目，Spring Cloud 的主要项目如下：

> Spring Cloud Config
>
> Spring Cloud Netflix
>
> Spring Cloud Bus
>
> Spring Cloud Cluster
>
> Spring Cloud Security
>
> ...

更多请参考官方说明：

https://projects.spring.io/spring-cloud/

然而，这些子项目都有不同的发布阶段，为了管理主项目和子项目的依赖关系，以及为了避免和子项目版本的冲突和误解，主项目版本命名并没有采用和子项目数字版本化的形式，而是采用了英文名称。

英文命名方式也比较有意思，SpringCloud 采用了英国伦敦地铁站的名称来命名，并由地铁站名称字母 A-Z 依次类推的形式来发布迭代版本。

由上可知，Spring Cloud 的第一个版本“Angel"就不觉得奇怪了，接着“Brixton"就是第二个版本。当一个项目到达发布临界点或者解决了一个严重的 BUG 后就会发布一个“service Release"版本，简称 SR（X）版本，× 代表一个递增数字。

##### 由此我们可以得出“FinchleyM9”就是目前最新的开发版本，“EdgwareSR3"是最新稳定版本。

##### Spring Cloud 版本依赖关系

下图揭示了主项目和子项目版本的依赖关系。

![](/images/Spring Cloud/6_2.jpg)

##### Spring Cloud & Spring Boot 依赖关系

![](/images/Spring Cloud/6_3.jpg)

- Finchley 是基于 Spring Boot 2.0.x 构建的，不支持 Spring Boot 1.5.x
- Dalston 和 Edgware 是基于 Spring Boot 1.5.x 构建的，不支持 Spring Boot 2.0.x
- Camden 构建于 Spring Boot 1.4.x，但依然能支持 Spring Boot 1.5.x

注意：Brixton 和 Angel 版本在 2017 年 7 月已经停止更新选代了，我们就不关注它的版本依赖关系了。

Spring Cloud 正处理高速发展期，版本发布更新太快，项目更新版本还要考虑兼容性等各种问题，让人很头疼!后续我会慢慢揭开这些面纱。。

##### 2020 最新版本号：

---

Spring Cloud 版本重大变革，变更了版本号的命名方式。

从 Spring Cloud 2020.0.0-M1 开始，Spring Cloud 废除了这种英国伦敦地铁站的命名方式，而使用了全新的“日历化”版本命名方式。

![](/images/Spring Cloud/6_4.jpg)

官宣如下：

> https://spring.io/blog/2020/04/17/spring-cloud-2020-0-0-m1-released

##### 什么是日历化版本？

英文名称：Calendar Versioning

日历化版本不是基于任意的数字，而是基于项目的发布日期的版本控制约定，随着时间的推移，版本会越来越好。

这种基于日期的版本命名方式被称为“日历化版本”（CalendarVersioning），或者可以简称 CalVer。

详细的介绍参考：

> https://calver.org/

我们来看下 Spring Cloud 是如何开始使用日历化版本的。

Spring Cloud 使用了 `YYYY.MINOR.MICRO`的命名规则：

- YYYY：表示 4 位年份；
- MINOR：代表一个递增的数字，每年以 O 开始递增；
- MICRO：代表版本号后缀，就和之前使用的`.0`类似于`.RELEASE`一样，`.2`类似于`.SR2`。

预发布版本的后缀分隔符也从``.`变更为`-`，如：`2020.0.0-M1`和`2020.0.0-RC2`命名所示。

同时，Spring Cloud 将停止给快照版本添加`BUILD-`前缀，如：`2020.0.0-SNAPSHOT`命名所示。

但是，英国伦敦地铁站的命名没有彻底废除，Spring Cloud 将继续使用它作为版本代号，当前代号：`Ilford`，只是发布到 Maven 仓库的版本将不再使用这些名称。

最后就再来欣赏下 Maven 下的 Spring Cloud 新老版本号命名方式：

老版本命名：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-dependencies</artifactId>
    <version>Hoxton.SR6</version><type>pom</type><scope>runtime</scope></dependency>
```

新版本命名：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-dependencies</artifactId>
    <version>2020.0.0-M2</version>
    <type>pom</type><scope>runtime</scope>
</dependency>
```

使用日历化版本命名方式，我个人觉得会更方便，可以更清楚的看出当前版本的年份，看到字母、纯数字方式的版本号都不知道自己多久没升级了。

## 7、Spring Cloud Eureka 保护机制是什么？

##### 自我保护背景

---

首先对 Eureka 注册中心需要了解的是 Eureka 各个节点都是平等的，没有 ZK 中角色的概念，即使 N-1 个节点挂掉也不会影响其他节点的正常运行。

默认情况下，如果 Eureka Server 在一定时间内（默认 90 秒）没有接收到某个微服务实例的心跳，Eureka Server 将会移除该实例。但是当网络分区故障发生时，微服务与 Eureka Server 之间无法正常通信，而微服务本身是正常运行的，此时不应该移除这个微服务，所以引入了自我保护机制。

##### 自我保护机制

---

官方对于自我保护机制的定义：

> https://github.com/Netflix/eureka/wiki/Understanding-Eureka-Peer-to-Peer-Communication

自我保护模式正是一种针对网络异常波动的安全保护措施，使用自我保护模式能使 Eureka 集群更加的健壮、稳定的运行。

自我保护机制的工作机制是，如果 15 分钟内低于 85% 的客户端有响应，那么 Eureka 就认为客户端与注册中心出现了网络故障，Eureka Server 自动进入自我保护机制，此时会出现以下几种情况：

1、Eureka Server 不再从注册列表中移除因为长时间没收到心跳而应该过期的服务。

2、Eureka Serve r 仍然能够接受新服务的注册和查询请求，但是不会被同步到其它节点上，保证当前节点依然可用

3、当网络稳定时，当前 Eureka Server 新的注册信息会被同步到其它节点中。

因此 Eureka Server 可以很好的应对因网络故障导致部分节点失联的情况，而不会像 ZK 那样如果有一半不可用的情况会导致整个集群不可用而变成瘫痪。

##### 自我保护开关

---

Eureka 自我保护机制，通过配置`eureka.server.enable-self-preservation`为 true 打开，为 false 禁用自我保护机制，默认打开状态，建议生产环境打开此配置。

##### 开发环境配置

---

开发环境中如果要实现服务失效能自动移除，只需要修改以下配置。

##### 1、注册中心关闭自我保护机制，修改检查失效服务的时间。

```properties
eureka:
	server:
	enable-self-preservation: false
	eviction-interval-timer-in-ms: 3000
```

##### 2、微服务修改减短服务心跳的时间。

```properties
#默认90秒
lease-expiration-duration-in-seconds: 10
#默认30秒
lease-renewal-interval-in-seconds: 3
```

以上配置建议在生产环境使用默认的时间配置。

## 8、Spring Cloud 怎么实现服务注册和发现？

Spring Cloud 提供了一种轻量级的服务注册和发现机制，它允许服务在启动时向注册中心注册自己的位置（IP 地址和端口），并在需要时查询其他服务的位置信息。

常用的服务注册和发现组件有 Eureka、Consul 和 Zookeeper。

以 Eureka 为示例，如下图所示：

![](/images/Spring Cloud/8.jpg)

Spring Cloud 所有服务都注册到 Eureka Server，并通过 Eureka Server 发现服务，而不需要关注服务地址的变化。

Eureka Client 会定期向 Eureka Server 发送心跳，表明自己处于活跃状态，如果 Eureka Server 在一定时间内没有收到某服务实例的心跳，它会将该实例从服务列表中移除。

> 除了 Eureka，Spring Cloud 还支持其他的服务注册和发现解决方案，如 Consul 或 Zookeeper。

## 9、Spring Cloud 如何保证微服务调用安全性？

##### 1、服务安全调用

Spring Cloud Security 这个项目提供了与 Spring Security 的集成，支持 OAuth2 认证和授权，以及基于令牌的安全策略，实现服务间的安全调用。

##### 2、服务发现保护

为服务发现组件如 Eureka 设置安全控制，确保仅授权的服务可以注册和发现。

##### 3、SSL/TLS 加密

使用 SSL/TLS 对服务间的通信进行加密，以确保数据在传输过程中的安全。

##### 4、API 网关集成

将服务发现集成在 API 网关之后，利用 API 网关提供的认证、授权和访问控制机制来增强安全性，服务与服务之间调用就是内网调用了。

## 10、Spring Cloud 服务之间是哪种调用方式？

在 Spring Cloud 微服务架构中，服务之间的调用通常是基于 HTTP REST 或者 RPC 风格，也可以通过消息驱动的方式来进行异步通信。

以下是 Spring Cloud 中服务间进行调用的一些常见方式：

##### HTTP REST 调用

1、 Spring 提供的 RestTemplate 类是进行同步 HTTP REST 调用的主要工具。

2、Spring Cloud OpenFeign 是一个声明式的 HTTP 客户端，它允许开发者通过简单的接口和注解来定义服务调用。

##### RPC 调用

Spring Cloud 可以与 gRPC 集成，gRPC 是一个高性能的、跨语言的 RPC 框架。

##### 消息驱动的异步调用

Spring Cloud Stream 可以为构建消息驱动的微服务提供了绑定到消息中间件的抽象，底层可以基于 RabbitMQ、Kafka 等消息中间件。

## 11、Spring Cloud 怎么实现服务负载均衡？

Spring Cloud 提供了多种方式来实现服务之间的负载均衡：

##### Ribbon

Ribbon 是一个客户端负载均衡器，它可以与 Eureka 等服务发现组件配合使用。

使用 Ribbon 时，客户端会从服务发现组件获取所有可用服务实例的列表，然后根据配置的策略（如轮询、随机等）在这些服务实例中选择一个进行调用。

##### Spring Cloud LoadBalancer

Spring Cloud LoadBalancer 是 Ribbon 的现代替代品，提供了一个简单且可扩展的负载均衡客户端，它是一个框架内的组件，用于给所有在 Spring Cloud 生态系统中想要使用客户端负载均衡的 HTTP 请求提供支持。

##### Spring Cloud OpenFeign

Feign 是一个声明式的 HTTP 客户端，内部集成了 Ribbon，当使用 Feign 时，每个 Feign 客户端都会自动具备负载均衡的能力。

## 12、Spring Cloud Netflix 有哪些组件弃用了？

Spring Cloud Netflix 是 Spring Cloud 项目中的一个子项目，提供了多个微服务开发中常用的组件，但随着微服务生态的发展，一部分组件逐渐被新的解决方案取代，并被 Spring Cloud 官方宣布为弃用。

以下是一些已经或者即将被弃用的 Spring Cloud Netfix 组件：

##### 1、Hystrix

断路器组件，官方已在 Spring Cloud Greenwich 版本后停止更新，并推荐使用 Resilience4j 或 Spring CloudCircuit Breaker 作为替代。

##### 2、Ribbon

客户端负载均衡工具，自 Spring Cloud Netflix 的后续版本开始，官方推荐使用 Spring Cloud LoadBalancer 替代。

##### 3、Zuul 1.x

APl 网关组件，由于 Zuul 2.x 的发布和 Spring Cloud Gateway 的推出，Zuul 1.x 被 Spring Cloud 宣布为弃用。

##### 4、Turbine

聚合 Hystrix 仪表板的实时监控数据，随着 Hystrix 的弃用，Turbine 也逐渐被 MicroMeter 等其他监控工具替代。

##### 5、 Eureka

服务发现组件，**Eureka 2.x 已经停止维护，1.x 虽然还在维护**，但也有风险，可以考虑诸如 Consul 或 Zookeeper 等其他服务发现框架，为未来可能的迁移做好准备。

## 13、Spring Cloud Ribbon 是什么？

Spring Cloud Ribbon 是一个基于 HTTP 和 TCP 的客户端负载均衡工具，它是基于 Netflix 的 Ribbon 实现的，与其他 Spring Cloud 项目如 Eureka、OpenFeign 等紧密集成，可以让我们轻松地将面对服务的 REST 模块请求自动转换成客户端负载均衡的服务调用。

##### 主要功能：

##### 1、客户端负载均衡

Ribbon 主要提供客户端侧的负载均衡，在客户端执行服务实例之间的负载均衡，而不是依赖于服务端。

##### 2、服务发现集成

Ribbon 可以与服务发现工具（如 Eureka）集成，自动从服务注册中心获取服务实例列表，并基于配置的规则进行负载均衡。

##### 3、多种负载均衡策略

Ribbon 提供了多种负载均衡策略，如轮询、随机、响应时间加权等，开发者也可以自定义负载均衡策略。

##### 4、服务调用重试机制

支持在调用服务失败时自动重试，增加了系统的容错性。

> ##### 需要注意的是：
>
> Spring Cloud 在高版本中已经使用 Spring Cloud LoadBalancer 替代 Ribbon 作为客户端负载均衡的标准实现，Spring Cloud LoadBalancer 提供了一个更现代化、功能更丰富的客户端负载均衡框架。
>
> 对于新的项目或正在升级的项目，建议考虑使用 Spring Cloud LoadBalancer。

## 14、.Spring Cloud LoadBalancer 是什么？

在 Spring Cloud 框架中，一开始都是使用 Ribbon 作为其负载均衡组件的，不过现在 Ribbon 已经彻底踢出不再支持，Spring Cloud 搞出了自己的 Spring Cloud LoadBalacer 负载均衡组件，用于替代 Ribbon。

从核心包中也可以看出来：

![](/images/Spring Cloud/14.jpg)

## 15、Spring Cloud LoadBalancer 支持哪些负载均衡策略？

Spring Cloud LoadBalacer 提供了自己负载均衡抽象接口`ReactiveLoadBalancer` ，并且提供了两种策略实现：

- RoundRobinLoadBalancer（轮循）
- RandomLoadBalancer （随机）

![](/images/Spring Cloud/15.jpg)

目前相比`Ribbon`来说负载策略还比较简单。

## 16、Spring Cloud Feign 是什么？

Spring Cloud Feign（现在称为 Spring Cloud OpenFeign）是一个声明式的 Web 服务客户端，它使得编写 Web 服务客户端变得更加简单。

通过使用 Feign，开发者可以通过简单的接口和注解，来定义服务绑定，从而实现对其他服务的 HTTP 请求调用。Feign 的设计目标是尽可能地简化 HTTP API 客户端的编码工作。

#### 主要特性：

##### 1、声明式 REST 客户端

Feign 通过接口和注解提供了一种声明式的方法来调用 HTTP 服务，减少了模板代码的编写。

##### 2、集成 Ribbon 和 Hystrix

Feign 默认集成了 Ribbon（客户端负载均衡器）和 Hystrix（断路器），使得服务调用自带负载均衡和容错能力。

##### 3、易于集成

Feign 可以很容易地与 Spring Cloud 生态系统集成，提供了与 Eureka、Consul 等服务发现组件的无缝集成。

##### 4、自动编码和解码

Feign 自动处理请求和响应的编码和解码。

## 17、Spring Cloud OpenFeign 是什么？

Spring Cloud OpenFeign 是 Spring Cloud 的一个子项目，它是对开源项目 Feign 的增强封装，它简化了与微服务进行通信的过程，OpenFeign 的主要作用是提供了一个简洁的方法来定义服务绑定接口，通过这些接口可以轻松地编写 HTTP 客户端。

Spring Cloud 集成了 Eureka、Spring Cloud CircuitBreaker 以及 Spring Cloud LoadBalancer， 在使用 SpringCloud OpenFeign 时都可以提供负载均衡的 HTTP 声明式客户端。

##### 具体实现原理是：

Spring Cloud OpenFeign 是更高一层的抽象，使用它可以更简单的调用服务接口，只要通过一个接口，然后使用一个注解就能生成动态代理类简单完成复杂的调用过程，就像调用本地接口一样完成远程接口调用。

当一个服务消费者调用通过 OpenFeign 创建的接口时，OpenFeign 通过动态代理的方式将调用转换为 HTTP 请求，并发送给服务提供者，转换过程中，OpenFeign 会根据接口的定义和注解信息来构造请求。

#### 主要特性

##### 1、声明式 HTTP 客户端

使用接口和注解定义 HTTP 请求，无需手动创建 HTTP 请求，简化了代码编写。

##### 2、自动集成 Ribbon

内置集成了 Ribbon 客户端负载均衡器，可以轻松实现对服务的负载均衡。

##### 3、支持 Hystrix

可以与 Hystrix 集成，提供断路器功能，增强了系统的容错能力。

## 18、Spring Cloud OpenFeign 的实现原理是？

Spring Cloud OpenFeign 是一个声明式的 REST 客户端，它主要通过 Java 的**动态代理**技术实现远程服务调用。我们要使用 OpenFeign 必须要定义一个接口：

```java
@Feignclient(name = "userservice")
public interface Userserviceclient {
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable("id") Long id);
}
```

##### 大概的实现原理是：

1、接口上使用`@Feignclient`注解修饰，然后需要在接口上使用 Spring MVC 的注解来声明需要调用的远程服务的 HTTP 请求，比如`@GetMapping`、`@PostMapping`等。

2、当应用启动时，Spring Cloud OpenFeign 的自动配置会扫描带有`@Feignclient`注解的接口，并为每个接口创建一个 Feign 客户端代理对象。

3、当一个服务消费者调用通过 OpenFeign 创建的接口时，OpenFeign 通过动态代理的方式将调用转换为 HTTP 请求，并发送给服务提供者，转换过程中，OpenFeign 会根据接口的定义和注解信息来构造请求。

4、代理对象使用的`RequestTemplate`模板类来构建 HTTP 请求，包括方法、URL、参数和头信息，然后通过 HTTP 客户端（如 Apache HttpClient 或 OkHttp）来发送实际请求。

5、接收到 HTTP 响应后，OpenFeign 会使用配置的解码器（Decoder）将响应转换为接口方法的返回类型,OpenFeign 还支持异常处理和重试机制。

## 19、Spring Cloud OpenFeign 和 Ribbon 的区别？

两者区别如下：

- Ribbon 主要用于提供客户端负载均衡能力，它与服务注册中心结合，动态获取服务实例。
- OpenFeign 是更高层次的框架，OpenFeign 内部使用了 Ribbon，它提供了一个声明式的编程模型，让服务间的 HTTP 请求更加简洁和易于理解。

OpenFeign 关注的是如何通过接口和注解来简化远程 HTTP 调用，而 Ribbon 是 OpenFeign 实现负载均衡的一种方式，所以当你使用 OpenFeign 时，就是间接使用了 Ribbon 的负载均衡能力。

实际开发中一般使用 OpenFeign，更加方便易用。

## 20、Spring Cloud OpenFeign 和 Feign 的区别？

Feign 原本是由 Netflix 提供的一个开源声明式 HTTP 客户端，它的目标是简化 HTTP API 客户端的开发。Feign 通过接口和注解来定义服务调用，减少了手写 HTTP 客户端的工作量。

Spring Cloud OpenFeign 是在 Feign 的基础上，为了在 Spring Cloud 生态系统中更好地使用 Feign 而创建的。Spring Cloud OpenFeign 提供了更完整的集成和自动配置，是构建基于 Spring Cloud 的微服务应用时的首选。

##### 现在新版中都是使用 SpringCloudOpenFeign 了。

## 21、Spring Cloud OpenFeign 和 RestTemplate 的区别？

Spring Cloud OpenFeign 和 RestTemplate 都是 Spring 生态系统中用于服务消费和进行 HTTP 调用的工具，但它们在使用方式上有一些不同。

##### 1、使用场景不同

Spring Cloud OpenFeign 主要用于 Spring Cloud 微服务项目中，需要 Spring Cloud 依赖及环境。

RestTemplate 则可以在任何包含 Spring Web 应用程序中使用，包括 Spring MVC、Spring Boot、SpringCloud。

##### 2、使用方式不同

Spring Cloud OpenFeign 是声明式的 Web 服务客户端，允许开发者通过声明一个接口并使用注解来自动绑定服务提供者的 REST 接口，简化了编写 HTTP 客户端的代码。

RestTemplate 是一种编程式的客户端，需要开发者手动编写代码来手动构建 HTTP 请求及处理响应。

##### 3、使用风格不同

Spring Cloud OpenFeign 更注重接口和约定，使得服务之间的调用就像是本地方法调用。RestTemplate 要更灵活，它允许开发者控制 HTTP 请求和响应的更多细节。

##### 4、功能不同

Spring Cloud OpenFeign 功能更强大，内置了断路器、负载均衡、自定义响应的处理等高级功能，而通过 RestTemplate 则更加简单轻量。

## 22、Spring Cloud OpenFeign 默认使用的什么连接池？可以切换哪些连接池？

Spring Cloud OpenFeign 底层默认使用的是 JDK 的 HttpuRLconnection 原生连接，每次网络请求都会创建一个新的连接，不会使用连接池，不能重用连接，性能上肯定有影响，Spring Cloud OpenFeign 也是支持连接池框架的，可以直接切换提升性能。

Spring Cloud OpenFeign 支持以下几种连接框架：

| 连接框架                | 启用参数                     | 依赖             |
| ----------------------- | ---------------------------- | ---------------- |
| **httpclient (默认)**   | feign.httpclient.enabled     | feign-httpclient |
| HttpComponents Client 5 | feign.httpclient.hc5.enabled | feign-hc5        |
| okhttp                  | feign.okhttp.enabled         | feign-okhttp     |

## 23、Spring Cloud Circuit Breaker 是什么？

Spring Cloud Circuit Breaker 是 Spring Cloud 官方提供的断路器组件，它提供了多个不同断路器实现的抽象,通过抽象层的设计，开发者可以灵活选择适合项目需求的断路器实现。

没错，它只是断路器抽象，不是具体的实现，它提供了统一的 API，底层可以随便切换不同的断路器实现，官方推荐的有以下几种：

- Netfix Hystrix（已停止维护）
- Resilience4J
- Sentinel（Spring Cloud Alibaba 推荐）
- Spring Retry

Spring Cloud Circuit Breaker 为微服务架构提供了一个重要的容错机制，它通过断路器模式帮助微服务应对下游服务的不稳定，保障了系统的整体可靠性。

#### 主要特性

##### 1、容错保护

在远程服务调用、数据库操作等出现高延迟或失败时，断路会自动跳闸，停止进一步的请求调用，转而执行备用逻辑，从而保护应用不被不稳定的服务所影响。

##### 2、快速失败

当断路器打开后，对受保护的服务的调用会立即失败，而不是等待服务超时，这样可以节省资源并快速给予反馈。

##### 3、自动恢复

断路器会自动检测问题服务是否恢复正常，当服务恢复后，断路器会自动关闭，恢复对服务的调用。

## 24、Spring CloudZuul 是什么？

Spring Cloud Zuul 是 Spring Cloud 中的第一代服务网关组件，它提供了 APl 网关的功能。

> ##### 需要注意的是：
>
> Spring Cloud Zuul 现已被官方推出的第二代服务网关组件 Spring Cloud Gateway 取代，不推荐使用了。

## 25、Spring Cloud Gateway 是什么？

Spring Cloud Gateway 是 Spring Cloud Finchley 版推出来的新组件，是 Spring Cloud 官方推出的第二代微服务网关，用来代替旧版的服务网关：Zuul，旨在提供统一的路由方式和简化分布式系统中的复杂性。

Gateway 作为系统的入口，将 API 的路由、请求处理、安全等功能集成在一起。

Spring Cloud Gateway 构建于 Spring 5+，基于 Spring Boot 2.x 响应式的、非阻塞式的 APl。同时，它支持 websockets，和 Spring 框架紧密集成，开发体验相对来说十分不错。

##### 主要功能

##### 1、动态路由

基于 Spring Cloud Gateway 的 Filter 实现，支持动态地路由请求到不同的后端微服务。

##### 2、内置过滤器

内置了多种 GatewayFilter 的实现，如用于修改请求和响应、断路器、重试、限流等。

##### 3、集成 SpringCloud 生态系统

与 DiscoveryClient 集成，自动从 Eureka、Consul 等服务发现组件中获取路由信息。

##### 4、响应式 API

基于 Netty 和 Reactor，提供非阻塞的 APl，并支持长连接、WebSockets 等。

## 26、Spring Cloud Gateway VS Zuul 怎么选？

Spring Cloud Gateway 是 Spring Cloud Finchley 版推出来的新组件，用来代替服务网关：Zuul。

那 Spring Cloud Gateway 和 Zuul 都有哪些区别呢，咱们来比较一下。

##### 1、开源组织

---

Spring Cloud Gateway 是 Spring Cloud 微服务平台的一个子项目，属于 Spring 开源社区，依赖名叫：spring-cloud-starter-gateway。

> https://spring.io/projects/spring-cloud-gateway

Zuul 是 Netflix 公司的开源项目 Spring Cloud 在 Netflix 项目中也已经集成了 Zuul，依赖名叫：spring-cloud-starter-netflix-zuul。

> https://github.com//Netflix/zuul

##### 2、底层实现

---

> https://stackoverflow.com/questions/47092048/how-is-spring-cloud-gateway-different-from-zuul

据 Spring Cloud Gateway 原作者的解释：

Zuul 构建于 Servlet 2.5，兼容 3.x，使用的是阻塞式的 APl，不支持长连接，比如 websockets。另外 Spring Cloud Gateway 构建于 Spring 5+，基于 Spring Boot 2.x 响应式的、非阻塞式的 APl。同时，它支持 websockets，和 Spring 框架紧密集成，开发体验相对来说十分不错。

##### 3、性能表现

---

这个没什么好比的，要比就和 Zuul 2.x 比，Zuul 2.x 在底层上有了很大的改变，使用了异步无阻塞式的 APl，性能改善明显，不过现在 Spring Cloud 也没集成 Zuul 2.x，所以就没什么好比的。

##### 如何选择？

本文说的 Zuul 指 Zuul 1.x，Netflix 早就发布了最新的 Zuul 2.x，但 Spring Cloud 貌似没有整合计划，R 哥看了下目前最新的包，整合的还是 Zuul 1.x。

据了解，正是因为 Zuul 2.x 的不断跳票，Spring Cloud 才釜底抽薪推出了自己的服务网关：Spring CloudGateway，使用起来比 Zuul 更简单，配置更方便，所以说选 Spring Cloud Gateway 没错，毕竟是 Spring Cloud 亲儿子，不会始乱终弃。

## 27、Spring Cloud Gateway 的工作原理是怎样的？

如图所示：

![](/images/Spring Cloud/27.jpg)

1、客户端向 Spring Cloud Gateway 发出请求；

2、如果`Gateway Handler Mapping`确定请求与路由匹配，则将其发送到`Gateway Web Handler`，它通过特定于请求的过滤器链运行请求。

3、过滤器可以在发送代理请求之前和之后运行相关逻辑，在`PRE`前置过滤器执行后发出代理请求，代理请求执行后，再执行`POST`后置过滤器。

> 在没有端口的路由中定义的 URI，HTTP 和 HTTPS URI 的默认端口值 80 和 443。

## 28、Spring Cloud Gateway 中的 Route、Predicate、Filter 分别是指什么？

##### Route（路由）

它是网关的基本构建单元，它由 ID、目标 URl、谓词集合（predicates）和过滤器集合（filters）组成。

##### Predicate（谓词/断言）

这是一个 Java 8 函数谓词，输入类型是 Spring 框架中的`ServerWebExchange`可以匹配来自 HTTP 请求的任何内容，例如标头或参数等。如果谓词匹配为真，则转发路由。

##### Filter（过滤器）

这是使用特定工厂构建的`GatewayFilter`实例，可以在路由转发请求之前、之后修改请求和响应参数。

## 29、Spring Cloud Gateway 常用的 predicates 有哪些？

Spring Cloud Gateway 内置的 10 多种断言工厂，直接使用即可：

![](/images/Spring Cloud/29.jpg)

这个看名称就知道是干嘛，这里随便介绍几个：

| 断言                                                                                  | 说明                                       | 参数               |
| ------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------ |
| AfterRoutePredicateFactory、BeforeRoutePredicateFactory、BetweenRoutePredicateFactory | 时间断言，判断时间是否在 XX 之前、后、之间 | 时间               |
| HeaderRoutePredicateFactory                                                           | 请求头断言，判断请求头是否匹配             | 请求头、值（正则） |
| MethodRoutePredicateFactory                                                           | 请求方法断言，判断请求方法是否匹配         | 方法名（如：POST） |
| PathRoutePredicateFactory                                                             | 路径断言，判断请求路径是否匹配             | 路径               |

## 30、Spring Cloud Gateway 中的过滤器生命周期？

Spring Cloud Gateway 中的过滤器生命周期分为`PRE`和`POST`两种，`PRE`表示过滤器在路由转发之前执行，`POST`表示过滤器在路由转发之后执行。

过滤器可以在发送代理请求之前和之后运行相关逻辑，在`PRE`前置过滤器执行后发出代理请求，代理请求执行后，再执行`POST`后置过滤器。

![](/images/Spring Cloud/30.jpg)

## 31、Spring Cloud Gateway 中的过滤器分为哪几类？

Spring Cloud Gateway 中的过滤器分为局部过滤器和全局过滤器两种。

- 局部过滤器只对指定的路由生效；
- 全局过滤器不用额外配置，所有路由生效。

## 32、Spring Cloud Gateway 常用的全局过滤器有哪些？

Spring Cloud Gateway 框架内置了多种全局过滤器，比如以下几个全局过滤器：

| 全局过滤器                  | 说明                  |
| --------------------------- | --------------------- |
| ForwardPathFilter           | forward://协议过滤器  |
| AdaptCachedBodyGlobalFilter | 缓存 HTTP Body 过滤器 |
| Route ToRequestUrlFilter    | 路由转发过滤器        |
| NettyRoutingFilter          | Netty 路由过滤器      |
| SentinelGatewayFilter       | Sentinel 过滤器       |

## 33、Spring Cloud Gateway 常用的局部过滤器有哪些？

Spring Cloud Gateway 框架内置了多种局部过滤器，常用的都有，比如以下几个局部过滤器：

| 局部过滤器          | 说明                       | 参数           |
| ------------------- | -------------------------- | -------------- |
| AddRequestHeader    | 为请求添加请求头 (Header)  | 请求头名称、值 |
| AddRequestParameter | 为请求添加请求参数         | 参数名称、值   |
| PrefixPath          | 为请求添加前缀             | 前缀路径       |
| StripPrefix         | 转发时移除路径前缀         | 路径层级数     |
| SetStatus           | 设置最终返回的 HTTP 状态码 | HTTP 状态码    |

## 34、Spring Cloud for Alibaba 是什么？

大家都好奇，这和阿里巴巴有什么关系？莫非是给阿里巴巴定制了一个 Spring Cloud ？

##### Spring Cloud for Alibaba 是什么鬼？

---

官方定义如下：

> The Spring Cloud Alibaba project, consisting of Alibaba's open-source components and several AlibabaCloud products, aims to implement and expose well known Spring Framework patterns and abstractions tobring the benefits of Spring Boot and Spring Cloud to Java developers using Alibaba products.

> Spring Cloud for Alibaba，它是由一些阿里巴巴的开源组件和云产品组成的。这个项目的目的是为了让大家所熟知的 Spring 框架，其优秀的设计模式和抽象理念，以给使用阿里巴巴产品的 Java 开发者带来使用 Spring Boot 和 Spring Cloud 的更多便利。

注意：这个项目是由阿里巴巴维护的开源社区项目。

##### 为什么首个版本为 0.2.0？

---

现在 Spring Boot 有两条线，即 Spring Boot 1.x 和 Spring Boot 2.x，所以 0.2.0 即是和 Spring Boot 2.x 兼容的，0.1.0 则是和 Spring Boot 1.x 兼容的。这样就好理解了。

##### 项目组成部分

---

上面说的阿里巴巴开源组件，它的项目前缀是：spring-cloud-alibaba，它有几下几个特性。

- 服务发现
- 配置管理
- 安全高可用性

上面说的阿里巴巴云产品，它的项目前缀是：spring-cloud-alicloud，它有几下几个特性。

- 应用命名服务
- 应用配置管理
- 对象存储服务

##### 如何使用？

---

Spring Cloud for Alibaba 的 Maven 依赖如下：

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>2022.0.0.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

##### 后续计划

---

##### 1、RocketMQ

RocketMQ 是阿里开源的基于 Java 的消息队列中间件，目前 Spring Cloud 集成的消息队列只有 Kafka 和 RabbitMQ, 后续 Spring Cloud Stream 和 Spring Cloud Bus 会集成 RocketMQ, 这个牛逼了，期待。。

##### 2、AliCloud SchedulerX

阿里云 SchedulerX，它是阿里巴巴中间件团队开发的一款分布式任务调度工具，支持循环任务和在指定时间触发任务。

##### 3、 Alicloud SLS

阿里云 SLS，一站式日志管理服务，是一款阿里巴巴集团行之有效的工具，经历了一次又一次的大数据挑战。它能在不污染任何代码的情况下，快速收集、使用、交付、查询和分析日志数据。

##### 4、 Spring Cloud Release Train

Spring Cloud Alibaba 项目将于 2019 年从孵化器毕业，到时会正式加入 Spring Cloud 正式版本轨道上来。

##### 项目源码

---

> https://github.com/spring-cloud-incubator/spring-cloud-alibaba

![](/images/Spring Cloud/34.jpg)

都 1700+ Star 了。

---

其实 Spring Cloud for Alibaba 项目就是为了阿里的项目能很好的结合融入 Spring Boot & Cloud 使用，这个项目目前由阿里维护。

对同时使用 Spring Boot & Cloud 和阿里巴巴项目的人来说无疑带来了巨大的便利，一方面能结合 Spring 无缝接入，另一方面还能使用阿里巴巴的组件，也带来了更多的可选择性。

## 35、Spring Cloud Commons 是什么？

Spring Cloud Commons 是 Spring Cloud 平台的一部分，是为了对微服务中的服务注册与发现、负载均衡、熔断器等功能提供一个抽象功能层代码，这个抽象功能层与具体的实现无关。

这样这些功能具体的实现上可以采用不同的技术去实现，并可以做到在使用时灵活的更换。

##### 主要特性

##### 1、服务发现接口

定义了发现服务实例的通用接口，使得可以在不同的服务发现实现之间切换，如 Eureka、Consul、Zookeeper。

##### 2、负载均衡抽象

提供了负载均衡器的通用抽象，支持在不同的负载均衡实现之间切换。

##### 3、断路器接口

定义了断路器的通用操作和接口，支持不同断路器实现，如 Hystrix、Resilience4j。

##### 4、配置属性抽象

提供了集中配置管理的抽象层，可以透明地与不同的配置服务器协作。

## 36、Spring Cloud Contract 是什么？

Spring Cloud Contract 是一个属于 Spring Cloud 生态系统的项目，旨在提供一种声明式的方式来创建 HTTP 和消息驱动的微服务应用的契约测试。

通过定义 API 和消息通信的预期行为（契约），Spring Cloud Contract 能够生成服务端的测试用例和客户端的测试桩（Stubs），从而确保服务间的交互符合预期。

##### 主要特性：

- **契约驱动的开发**：通过预先定义服务之间互动的契约，可以实现契约驱动的开发，有助于提前发现接口不一致等问题。
- **自动生成测试用例和测试桩**：基于定义的契约自动生成服务端的测试用例和客户端的测试桩，简化了测试准备工作，加快了开发和测试流程。
- **促进服务间的独立开发和测试**：客户端可以使用由契约生成的测试桩进行独立开发和测试，而不需要等待服务端的实现，从而加速了开发周期。
- **提高测试的准确性和可靠性**：生成的测试用例和测试桩严格基于契约，确保了测试的准确性和可靠性，有助于避免服务间交互的潜在问题。

##### 使用场景：

- 在微服务架构中，当多个团队独立开发互相依赖的服务时，使用 Spring Cloud Contract 可以提前定义好服务间的交互契约，确保开发的一致性和可靠性。
- 用于持续集成和持续部署（CI/CD）流程中，自动化测试保证代码更改不会破坏现有的服务间交互。

总之，Spring Cloud Contract 通过契约驱动的开发和测试，促进了微服务架构下服务间的高效、可靠交互，是构建和维护大规模微服务应用的有力工具。

## 37、Spring Cloud Consul 是什么？

Spring Cloud Consul 是 Spring Cloud 提供的一个项目，使用 Consul 的服务注册和发现功能，并提供了一种在 Spring 环境中使用 Consul 的配置管理功能的方式。

##### 主要功能：

##### 1、服务注册和发现

Spring Cloud Consul 可以让应用作为 Consul 的客户端，将自己注册为一个服务，并发现其他已注册的服务，可用来代替 Euraka。

##### 2、分布式配置管理

借助 Consul 的 Key/Value 存储功能，Spring Cloud Consul 提供了一种从 Consul 读取配置信息的方式，这个功能类似于 Spring Cloud Config。

##### 3、分布式锁

借助 Consul 的 Session 机制，实现了分布式锁的功能，可以保证在分布式系统中不同部分或服务之间的操作具有原子性。

##### 4、健康监测

Consul 提供了服务健康检查的机制，Spring Cloud Consul 可以利用这一特性来定期检查应用实例的健康状况,并将状态信息同步给 Consul，这有助于实现故障转移和负载均衡。

## 38、Spring Cloud Connectors 是什么？

Spring Cloud Connectors 是一个为云应用简化服务连接的项目，特别是在 PaaS（平台即服务）环境中，它提供了一种简化的方法来连接和使用服务，如数据库、消息队列服务等，无论这些服务是自托管的还是托管在云提供商如 Heroku、Cloud Foundry 等平台上。

Spring Cloud Connectors 旨在帮助应用在不同的云环境之间保持可移植性，同时简化配置和服务查找的过程。

#### 主要特性

##### 1、服务发现

自动发现云平台上的服务实例，并根据服务类型和配置创建对应的 Spring Bean，简化了服务连接的配置。

##### 2、环境抽象

提供了一个环境抽象层，使得应用可以在不同的云平台上运行而不需要修改代码。

##### 3、服务连接和配置

为常见的服务如数据库、消息队列等提供了易于使用的连接和配置机制。

##### 4、扩展性

开发者可以扩展和定制连接器，以支持新的服务和云平台。

## 39、Spring Cloud Config 是什么？

Spring Cloud Config 是 Spring Cloud 生态系统中的一个核心组件，提供了服务端和客户端支持，用于管理分布式系统中的外部配置，也就是充当配置中心的角色。

#### 主要特性

##### 1、集中配置管理

可以将配置信息存储在集中的位置，支持本地文件系统、Git、SVN 和 Vault 等多种后端存储。

##### 2、动态刷新配置

应用程序可以在不重启的情况下动态刷新配置，使新的配置即时生效。

##### 3、环境与配置的分离

实现了应用程序代码与配置的分离，简化了环境适配和配置变更的处理。

## 40、Spring Cloud Bus 是什么？

Spring Cloud Bus 也是 Spring Cloud 微服务体系中的重要模块，通过 Spring Cloud Bus 模块，我们可以将分布式系统中的所有服务节点与消息驱动连接起来，用于广播状态变更，即变更一个节点的状态，就能广播到所有节点达到所有节点同步变更。

Spring Cloud Bus 可以利用消息队列（比如 RabbitMQ 或 Kafka）来广播这些事件，提供了统一的消息通道，简化了分布式系统消息的传递。

主要功能：

- 配置更改的自动刷新。
- 服务自动发现的状态广播。
- 自定义事件传播。

## 41、Spring Cloud Bus 的应用场景是？

举个例子：

> 在分布式系统中，需要紧急修改某个服务的配置，手动修改了一个节点的配置，需要同步到所有节点。

这时候总不能手动一个个节点同步吧？

所以 Spring Cloud Bus 正是解决了服务所有节点之间广播通信的问题，它是服务节点之间互相通信的桥梁。

## 42、Spring Cloud Stream 是什么？

Spring Cloud Stream 是一个用于构建消息驱动微服务的框架，它基于 Spring Boot 创建，用来简化应用程序通过消息中间件进行连接的过程，提供了一套用于开发消息中间件应用程序的统一配置模型和声明式编程模型。

说白了就是消息队列， Spring Cloud Stream 可以屏蔽 MQ 底层的选型的类型、及不同的 MQ 的底层操作交互差异，降低了切换成本，统一了消息编程模型。

![](/images/Spring Cloud/42.jpg)

#### 主要特性：

##### 1、抽象简化

Spring Cloud Stream 提供了一种简单的抽象来发送和接收消息，把底层的消息中间件对开发者透明化，开发者不需要关心底层的消息实现是 RabbitMQ、Kafka 还是其他消息中间件。

##### 2、消息中间件绑定

它将应用程序与消息中间件进行连接，开发者只需要根据业务需求来定义输入和输出通道，Spring Cloud Stream 会负责与消息中间件进行交互。

##### 3、事件驱动

Spring Cloud Stream 支持事件驱动的消息接口，允许服务通过输入和输出通道来处理消息。

## 43、Spring Cloud Stream 中的 Binder 和 Binding 的区别？

##### Binder

这是一个用于与外部消息中间件集成的组件，用于创建 Binding。

不同的消息中间件产品有自己的 binder 实现，比如：

- Kafka 使用 KafkaMessageChannelBinder
- RabbitMQ 使用 RabbitMessageChannelBinder
- RocketMQ 使用的是 RocketMQMessageChannelBinder

##### Binding

Binding 包括输入 Binding 和输出 Binding 两部分。

Binding 充当消息中间件与应用程序提供者和消费者之间的桥梁，开发者只需要使用 Provider 或 Consumer 来生产或消费数据，无需担心与消息中间件的交互。

Spring Cloud Stream 所有消息类型均由 由 spring-messaging 模块提供，它屏蔽了消息中间件的底层实现。如果要更改消息中间件，只需要在配置文件中配置相关消息中间件信息，修改 Binder 依赖即可。

## 44、Spring Cloud Stream 与 Bus 的区别？

**Spring Cloud Stream** 和 **Spring Cloud Bus** 都是 Spring Cloud 提供的与消息系统集成的项目，但它们的职责和使用场景有所不同：

- **SpringCloud Stream**：它是构建消息驱动微服务的框架，提供了一组用于与消息代理（如 RabbitMQ、Kaka）集成的高级抽象，主要用于处理单个微服务实例的输入和输出消息流。
- **Spring Cloud Bus**：它将分布式的节点用轻量级的消息代理连接起来，可以用来广播集群中的状态变更（例如配置更改）或事件。

总的来说，**SpringCloud Stream**更侧重于通过消息代理处理微服务间的异步消息通讯，而 **Spring Cloud Bus** 则用于在微服务架构下的服务实例之间广播状态或事件，尤其在分布式配置变更场景中更为常见。

两者虽然都使用了消息中间件，但解决的问题和应用场景不同。

## 45、Spring CloudTask 是什么？

Spring Cloud Task 是 Spring Cloud 提供的一个项目，它允许开发者快速构建短生命周期的微服务任务。

一般的服务都是长时间一直保持运行的，但是有很多服务并不需要一直保持运行，所以，Spring Cloud Task 用于开发和运行一个短生命周期的微服务，如一次性的、有限时的操作，比如批处理作业、数据库迁移或其他自动化处理过程。

##### 主要特性：

- **短生命周期**：Spring Cloud Task 设计用于支持短暂的、非长期运行的任务。任务开始执行后会在完成时结束进程。
- **简单集成**：它与 Spring Batch、Spring Boot 以及其他 Spring 项目紧密集成，使得创建和管理任务变得容易。
- **事件监听**：Spring Cloud Task 提供了丰富的任务执行事件，支持任务执行的监听，如任务开始、结束、失败等。
- **记录和管理**：自动记录任务执行的历史记录，包括任务的状态、执行时间等信息，便于监控和管理任务执行情况。
- **可扩展性**：可以与 Spring Cloud Data Flow 集成，支持复杂的任务编排和管理，以及任务的可视化。

##### 使用场景：

- **批处理任务**：如数据导入/导出、文件处理、数据转换等。
- **定时任务**：在特定时间点执行的任务，比如定时数据分析、报告生成等。
- **短暂的后台任务**：比如应用启动时的初始化任务、数据库的临时清理任务等。

## 46、Spring Cloud AWS 是什么？

Spring Cloud AWS 是 Spring Cloud 项目的一个子项目，它提供了对 Amazon Web Services(AWS)云服务的整合支持，通过 Spring Cloud AWS，开发者可以更容易地在 Spring 应用中访问和管理 AWS 提供的各种服务，如计算、存储、消息队列等。

Spring Cloud AWS 通过自动配置和 Spring 编程模型的一致性，简化了在 AWS 环境中运行 Spring 应用的复杂度。

## 47、Spring Cloud CLl 是什么？

Spring Cloud CLI 是一个基于 Spring Boot CLI 的命令行工具，提供了一种快速构建 Spring Cloud 应用的方式。它提供了一些用于创建和管理 Spring Cloud 应用的命令，可以让开发者在命令行环境下快速创建、运行和管理 Spring Cloud 应用。

#### 主要功能

##### 1、快速创建 Spring Cloud 应用

Spring Cloud CLi 提供了用于创建新的 Spring Cloud 项目的命令，可以在命令行下快速创建一个新的 SpringCloud 项目，而无需手动创建项目的目录结构和配置文件。

##### 2、自动配置

Spring Cloud CLI 可以自动化一些常见的配置任务，如服务发现、配置管理等，大大简化了开发者的配置工作。

##### 3、集成 Spring Cloud 组件

Spring Cloud CLI 提供了一些命令用于管理和操作 Spring Cloud 的组件，如 Eureka、Config Server、HystrixDashboard 等。

##### 4、支持 Groovy 脚本

可以使用 Groovy 语言来编写 Spring Cloud 应用程序，简化了代码的编写工作，特别适合进行原型开发和快速实验。

##### 5、命令行应用管理

支持在命令行界面启动、停止和管理应用，便于开发者进行快速的开发测试循环。

##### 使用场景

##### 1、学习和原型开发

对于初学者和开发原型，使用 Spring Cloud CLI 可以快速地启动和运行 Spring Cloud 相关的项目，加快学习和开发过程。

##### 2、小型微服务应用

对于小型和管理相对简单的微服务应用，CLI 提供了一种快速且不需要复杂配置的开发方式。

##### 3、DevOps 和自动化任务

可以在自动化脚本中使用 Spring Cloud CLI 命令来自动化部署和管理 Spring Cloud 应用。

#### 总结

Spring Cloud CLIl 作为一个辅助工具，虽然在生产环境中的应用可能受到限制，但对于快速开发、测试和原型验证等场景仍然是一个非常有用的工具。

## 48、Spring Cloud Function 是什么？

Spring Cloud Function 它是 Spring Cloud 项目中的一个子项目，提供了 Spring 开发人员利用 serverless（无服务器架构）或 FaaS（Function as a Service，功能即服务）的功能的能力。

它抽象出了所有传输细节和基础设施，允许开发人员保留所有熟悉的工具和流程，并专注于业务逻辑。

来写一个简单的 helloWorld 的例子，对任何输入参数前面加一个 hello：

```java
SpringBootApplication
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public Function<String, String> helloworld() {
		return value -> "hello: " + value;
	}
}
```

没错，这里的 Function 就是指 JDK 中的`java.util.Function`

![](/images/Spring Cloud/48.jpg)

它就是 Spring Cloud Function 使用的函数式编程模型的基础。

启动 Spring Boot 项目之后，这个函数就可以被 HTTP/ MQ 形式访问了，不需要再额外的定义额外的类和 Spring MVC 之类的注解，是不是很新颖？

没用过的可以了解下，感兴趣的可以深入研究下 Spring 的 serverless 功能：

> https://spring.io/serverless

它就是 Spring Cloud Function 项目所支撑的。

## 49、Spring Cloud Function 可以通过什么形式暴露？

Spring Cloud Function 可以把`Function`、`Consumer`、`Supplier`类型的接口包装成 Bean，并可以像 Controller 一样通过 HTTP 接口，或者也可以像 MQ 消息（RabbitMQ,Kafka...）的形式暴露出去被外部访问。

Spring Cloud Function 主要可以通过以下形式暴露：

##### 1、HTTP 端点

可以将函数映射为 HTTP 端点，这样就可以通过 HTTP 请求来触发函数的执行。Spring Cloud Function 与 Spring MVC 或 Spring WebFlux 集成，使得函数可以作为 RESTful 接口对外提供服务。

##### 2、消息队列

Spring Cloud Stream 函数可以绑定到消息队列中，通过 Spring Cloud Stream 的绑定机制，函数能够响应消息队列中的消息事件，这样，函数就可以处理来自 Kafka、RabbitMQ 等消息中间件的消息。

## 50、Spring Cloud Sleuth 是什么？

在 Spring Cloud 微服务体系中，链路追踪是通过 Spring Cloud Sleuth 模块完成的，Sleuth 本身不负责存储上下文，而是使用 Brave 作为其追踪库。

Spring Cloud Sleuth 是 Spring Cloud 生态系统中的一个项目，用于在微服务架构下提供分布式跟踪的解决方案。Sleuth 可以帮助开发者理解微服务架构中请求的流转情况，从而对系统中的延迟问题、服务间的调用链路进行诊断和监控。

一次请求可能包含微服务的各个节点，链路追踪即是对每个经过的每个微服务状态信息进行追踪记录、性能监控，并通过 UI 界面展示，以便于能对微服务请求中的问题进行快速分析处理。

##### 主要功能

##### 1、跟踪信息添加

Spring Cloud Sleuth 会自动在微服务发送的每个请求中添加跟踪信息，如跟踪 ID（Trace ID）和跨度 ID（SpanID）。

##### 2、跨服务传递

当请求从一个服务传递到另一个服务时，Sleuth 保证跟踪信息的连续性，以形成完整的调用链路。

##### 3、日志关联

Sleuth 将跟踪信息添加到日志中，方便根据跟踪 ID 关联请求在各服务中的日志记录。

##### 4、与其他系统集成

Sleuth 可以与 Zipkin、ELK（Elasticsearch、Logstash、Kibana）等日志和跟踪系统集成，提供更丰富的数据分析和可视化功能。

> ##### 需要注意的是：
>
> Spring Cloud Sleuth 项目被彻底移除了，项目的核心被移到了 Micrometer Tracing 项目上面去了，而 Micrometer Tracing 正好是 Spring Boot 3.0.0 的首发内容之一，作为可观测性的一部分，它用于实现 Spring Boot 应用的链路跟踪功能。

## 51、Spring Cloud Sleuth 链路日志中都包含哪些信息？

如图所示：

![](/images/Spring Cloud/51.jpg)

链路日志按顺序分别就是：

> [application name,trace id, span id]

## 52、Spring Cloud Sleuth 中的唯一标识是？

在 Spring Cloud Sleuth 中，跟踪分布式系统中的请求所用的唯一标识主要包括以下两个：

##### 1、Trace ID

**Trace ID** 是整个请求链路的唯一标识，它标识了从开始到结束的一次完整请求过程。在这个请求过程中，可能会经过多个服务的多个组件，但它们共享同一个 TraceID，以此表示它们是同一次请求的一部分。

##### 2、Span ID

**Span ID** 代表请求链中的一个特定工作单元或服务调用，每个 Span 都有自己的 ID，并且属于一个 Trace。一个 Trace 中可以包含多个 Span，这些 Span 通过父子关系相互连接，形成了一个完整的调用链路，Span ID 帮助我们定位和分析请求在具体某个服务或操作中的表现。

---

这些唯一标识和信息共同构成了 Spring Cloud Sleuth 跟踪分布式请求的基础，使得在复杂的微服务架构中跟踪、监控和诊断问题变得更加容易。

## 53、.Spring Cloud Sleuth 中的 TracelD 和 SpanlD 的区别？

trace id：追踪 ID，一次请求完整链路的唯一标识，由一组 span 组成的一个树状结构；

span id：基本工作单元 ID，每个微服务都有不同的 span id；

追踪 ID（trace ids）+单元 ID（span ids），这样就能根据这两个信息在聚合日志中找到链路中的所有日志。Spring Cloud Sleuth 这也是借用了`Dapper`中的术语，一次请求对应一唯一标识 trace id，一个 trace id 可以包含多个 span id。如图所示：

![](/images/Spring Cloud/53.jpg)

## 54、Spring Cloud Sleuth 和 Zipkin 的关系是？

在 Spring Cloud 微服务体系中，链路追踪是通过`Spring Cloud Sleuth`模块完成的，然后再通过 HTTP 生成和报告数据给 Zipkin 进行 UI 展示。

Zipkin 是由 Twitter 开源的一个分布式追踪系统，它可以收集、解决微服务中的延迟问题所需的时间数据，包括收集和查找此数据并进行展示。

如果日志中有 trace id 就直接可以展示了：

![](/images/Spring Cloud/54.jpg)

也可以根据其他属性查询，数据展示非常详细。

## 55、Spring Cloud Sleuth 的最新官方替代方案是什么？

Spring Cloud Sleuth 项目被彻底移除了，项目的核心被移到了 Micrometer Tracing 项目上面去了，而 Micrometer Tracing 正好是 Spring Boot 3.0.0 的首发内容之一，作为可观测性的一部分，它用于实现 Spring Boot 应用的链路跟踪功能。

Spring Boot Actuator 模块为 Micrometer Tracing 提供了依赖和自动配置管理，Micrometer Tracing 只是一种链路追踪门面接口，背后需要依赖具体的链路跟踪实现框架，Micrometer Tracer 支持多种链路跟踪实现框架，在 Spring Boot 3.0.0 中实现链路跟踪有以下两种组合方案：

- 使用 OpenTelemetry 结合 Zipkin 或者 Wavefront；
- 使用 OpenZipkin Brave 结合 Zipkin 或者 Wavefront；

所以，升级 Spring Cloud 的小伙伴就要小心了，Spring Cloud 链路跟踪技术解决方案完全变了，Spring CloudSleuth 链路跟踪模块迁移到 Micrometer 相关项目了，老版本的应用已经彻底失效。

## 56、Spring Cloud Sleuth 还建议学吗？为什么？

不建议学了，Spring Cloud 2022.0.0 版本中，Spring Cloud Sleuth 相关项目被移除了：

![](/images/Spring Cloud/56.jpg)

Spring Cloud 2022 版本一共移除了以下三个模块的依赖：

- spring-cloud-sleuth（已移除）
- spring-cloud-cloudfoundry（已移除）
- spring-cloud-cli（已移除）

## 57、Spring Cloud 微服务怎么优雅下线？

不建议使用`kill -9`强制杀进程下线，因为这样是让服务自身硬下线。优雅下线就是让服务状态先变成下线,不让其他服务获取了而已，然后确保其他服务不调用了之后再停止服务自身。

比如说 Nacos，除了在 Nacos 控制台操作，也可以通过服务注册端点主动下线，先暴露`service-registry`端点，然后调用`/actuator/serviceregister`端点下线。

如果是 Eureka，服务可以执行 EurekaAutoServiceRegistration.stop()方法，即该服务会向 Eureka 注册中心进行反注册，Euraka 注册中心在收到请求后，会把该服务从服务注册列表中删除。

## 58、Spring Cloud Alibaba 是什么框架？

Spring Cloud Alibaba 作为 Spring Cloud 的官方顶级项目，也是国内最强微服务框架及事实上的标准，没有之一。

Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案，包含开发分布式应用服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。

Spring Cloud Alibaba 只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里分布式应用解决方案，通过阿里中间件来迅速搭建分布式应用系统。

## 59、Spring Cloud Alibaba 和 Spring Cloud 有什么区别？

Spring Cloud Alibaba 基于 Spring Cloud 构建，只是提供了对 Alibaba 组件的封装而已，比如：**Nacos**、**Sentinel** 等，其最顶层的抽象还是 Spring Cloud，**所以学习 Spring Cloud Alibaba 就是学习 Spring Cloud**。

Spring Cloud Alibaba 技术栈如下：

| 组件       | Spring Cloud                            | Spring Cloud Netflix                  | Spring Cloud Alibaba | 其他                     |
| ---------- | --------------------------------------- | ------------------------------------- | -------------------- | ------------------------ |
| 注册中心   | Service Registry、Service Discovery     | Eureka 1.x、~~Eureka 2.x (停止维护)~~ | Nacos                | Zookeeper Consul         |
| 配置中心   | Spring Cloud Config、Git/ JDBC/ Vaul... | ~~Archaius(停止维护)~~                | Nacos                | Zookeeper Apollo Disconf |
| 服务容错   | Spring Cloud Circuit Breaker            | `Hystrix （停止维护）`                | Sentinel             | Resilience4J             |
| 服务调用   | Spring Cloud OpenFeign RestTemplate     | Feign                                 |                      |                          |
| 负载均衡   | Spring Cloud LoadBalancer               | ~~Ribbon （停止维护）~~               |                      |                          |
| 服务网关   | Spring Cloud Gateway                    | ~~Zuul （停止维护）~~                 |                      | Nginx + Lua Kong         |
| 消息队列   | Spring Cloud Stream、RabbitMQ/ Kafka    |                                       | RocketMQ             |                          |
| 链路追踪   | Spring Cloud Sleuth                     |                                       |                      | Zipkin、SkyWalking       |
| 分布式事务 |                                         |                                       | Seata                |                          |

截止 2024/03，Spring Cloud Alibaba 最新版本为 2022.0.0.0。

| Spring Cloud Alibaba | Spring Cloud          | Spring Boot | JDK |
| -------------------- | --------------------- | ----------- | --- |
| 2022.0.0.0           | Spring Cloud 2022.0.0 | 3.0.2       | 17  |
| 2021.0.4.0           | Spring Cloud 2021.0.4 | 2.6.11      | 8   |
| 2021.0.1.0           | Spring Cloud 2021.0.1 | 2.6.3       | 8   |

Spring Cloud Alibaba 的版本号是跟 Spring Cloud 版本走的，但不会每个版本同步更新，比如 Spring Cloud Alibaba 并没有同步 Spring Cloud2021.0.2, 2021.0.3 版本。

> 版本前 3 位是 Spring Cloud 版本号，最后一位为扩展版本号，比如适配 Spring Cloud 2022.0.0 版本对应的 Spring Cloud Alibaba 第一个版本为：2022.0.0.0，第个二版本为：2022.0.0.1，依此类推。

###60、为什么要学 Spring Cloud Alibaba？

Spring Cloud 和微服务的重要性大家都知道了，Spring Cloud 现在已经成了微服务事实上的标准框架，也是 Java 程序员必须掌握的技术系列之一。

##### 现在 SpringCloudAlibaba 才是国内的主流微服务框架，也涵盖了阿里巴巴这些年开源的重要中间件，它们都经过历年双 11 的洗礼，含金量十足，现在已然成了国内微服务市场的重磅利器。

最重要的是，Spring Cloud Alibaba 早就得到了 Spring Cloud 官方认证：

![](/images/Spring Cloud/60.jpg)

Spring Cloud Alibaba 已经被赫赫列在了 Spring Cloud 官方项目，可以看出 Spring Cloud Alibaba 的重要性。现在阿里开源的 Spring Cloud Alibaba 日益壮大，Spring Cloud Alibaba 也是现在 Spring Cloud 框架选型的必选技术栈之一，Spring Cloud Alibaba 俨然也成了国内微服务框架事实上的标准。

##### 如果你问 Spring Cloud 技术怎么选，选官方认证 Spring Cloud Alibaba 就对了！

另外，Spring Cloud Netflix 早期支持的各种组件，比如：Eureka 2.x、Ribbon、Zuul、Hystrix..等这些，它们都早已停止维护更新了，鉴于此比，**学习 Spring Cloud Alibaba 是目前最正确的姿势。**

## 61、Spring Cloud Alibaba 提供了哪些核心功能？

目前 Spring Cloud Alibaba 提供了如下功能：

##### 1、服务限流降级

支持 WebServlet、WebFlux,OpenFeign、RestTemplate、Dubbo 限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级 Metrics 监控。

##### 2、服务注册与发现

适配 Spring Cloud 服务注册与发现标准，默认集成了 Ribbon 的支持。

##### 3、分布式配置管理

支持分布式系统中的外部化配置，配置更改时自动刷新。

##### 4、RPC 服务

扩展 Spring Cloud 客户端 RestTemplate 和 OpenFeign，支持调用 Dubbo RPC 服务。

##### 5、消息驱动能力

基于 Spring Cloud Stream 为微服务应用构建消息驱动能力。

##### 6、分布式事务

使用 @GlobalTransactional 注解，高效并且对业务零侵入地解决分布式事务问题。

##### 7、阿里云对象存储

阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据。

##### 8、分布式任务调度

提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。

##### 9、阿里云短信服务

覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。

## 62、Spring Cloud Alibaba 包括哪些开源的组件？

Spring Cloud Alibaba 开源组件：

##### 1、Nacos

阿里开源的服务发现、注册、配置中心组件。

##### 2、Sentinel

阿里开源的服务熔断组件，把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。

##### 3、RocketMQ

阿里开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。

##### 4、Seata

阿里开源的高性能微服务分布式事务解决方案。

##### 5、Dubbo

阿里开源的微服务框架，为大规模微服务实践提供高性能 RPC 通信、流量治理、可观测性等解决方案，已捐献给 Apache 顶级项目。

## 63、Dubbo Spring Cloud 是什么框架？

Dubbo Spring Cloud 基于 Dubbo Spring Boot 2.7.1 和 Spring Cloud 2.x 开发，构建在原生的 Spring Cloud 之上，致力于简化 Cloud Native 开发成本，提高研发效能以及提升应用性能等目的。

目前 Dubbo Spring Cloud 仍处于 **preview** 阶段，**不建议**应用于生产环境。如果希望实现 Spring Cloud 应用调用 Dubbo 服务，建议先直接通过 Spring Boot 将 Dubbo 服务暴露为 RESTful APl 的方式以供对外调用。

## 64、Dubbo Spring Cloud 和 Spring Cloud 有什么区别？

Dubbo Spring Cloud 构建在原生的 Spring Cloud 之上，不仅完全覆盖 Spring Cloud 原生特性，而且提供更为稳定和成熟的实现，特性比对如下表所示：

| 功能组件                                           | Spring Cloud                         | Dubbo Spring Cloud                                   |
| -------------------------------------------------- | ------------------------------------ | ---------------------------------------------------- |
| 分布式配置（Distributed configuration）            | Git、Zookeeper、Consul、JDBC         | Spring Cloud 分布式配置+ Dubbo 配置中心[6]           |
| 服务注册与发现(Service registration and discovery) | Eureka、Zookeeper、Consul            | Spring Cloud 原生注册中心[7] + Dubbo 原生注册中心[8] |
| 负载均衡（Load balancing）                         | Ribbon (随机、轮询等算法)            | Dubbo 内建实现 (随机、轮询等算法+权重等特性)         |
| 服务熔断（Circuit Breakers）                       | Spring Cloud Hystrix                 | Spring Cloud Hystrix + Alibaba Sentinel[9] 等        |
| 服务调用（Service-to-service calls）               | Open Feign、RestTemplate             | Spring Cloud 服务调用 + Dubbo @Reference             |
| 链路跟踪（Tracing）                                | Spring Cloud Sleuth[10] + Zipkin[11] | Zipkin、opentracing 等                               |
