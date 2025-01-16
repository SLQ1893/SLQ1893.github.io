## 1、Spring Boot 是什么？

Spring Boot 是由 Pivotal 团队在 2013 年开始研发、2014 年 4 月发布第一个版本的全新开源的轻量级框架。

它不仅继承了 Spring 框架原有的优秀特性，而且还通过简化配置来进一步简化了 Spring 应用的整个搭建和开发过程。

另外 SpringBoot 通过集成大量的框架使得依赖包的版本冲突，以及引用的不稳定性等问题得到了很好的解决。

## 2、Spring Boot 有哪些优缺点？

#### Spring Boot 的优点

##### 1、独立运行

Spring Boot 内嵌了各种 Servlet 容器，比如：Tomcat、Jetty 等，现在不再需要打成 war 包部署到容器中，Spring Boot 只要打成一个可执行的 jar 包就能独立运行，a 所有的依赖包都在一个 jar 包内。

##### 2、简化配置

比如 spring-boot-starter-web 启动器自动依赖其他组件，减少了 Maven 的配置。

##### 3、自动配置

Spring Boot 能根据当前类路径下的类、jar 包来自动配置 Bean，如添加一个 spring-boot-starter-web 启动器就能拥有 web 的功能，无需其他配置。

##### 4、无代码生成和 XML 配置

Spring Boot 配置过程中无代码生成，也无需 XML 配置文件就能完成所有配置工作，这一切都是借助于条件注解完成的，这也是 Spring4.x 的核心功能之一。

##### 5、应用监控

Spring Boot 提供一系列端点可以监控服务及应用，做健康检测。

#### SpringBoot 的缺点

##### 1、自动配置的双刃剑

Spring Boot 的自动配置是其最受欢迎的特性之一，但也有缺点：

- 对于新手，或者不了解其背后实现机制的开发者来说，自动配置隐藏了太多的细节，在需要调整配置或排查问题时就会很棘手。
- 如何不理解默认的的自动配置行为，过度依赖自动配置，可能会导致应用在未预期的方式下运行。

##### 2、版本升级和依赖管理

Spring Boot 的版本管理和依赖更新会带来潜在的问题，在 Spring Boot 升级其依赖或内部实现时，有时会引 l 入破坏性的变更或新的默认配置，这可能会影响现有应用的行为或需要进行代码修改以适应新版本。

## 3、Spring Boot 框架的核心思想是什么？

Spring Boot 整个框架的核心思想是：**约定优（大）于配置**。

##### 那么怎么理解约定优于配置呢？

百度百科定义：

> 约定优于配置（convention over configuration），也称作按约定编程，是一种软件设计范式，旨在减少软件开发人员需做决定的数量，获得简单的好处，而又不失灵活性。

总结就是两点：

1、约定一些推荐的默认配置；

2、开发人员只需要规定不符约定的部分；

这样做的好处就是，如果约定的默认配置符合我们的要求，省略即可，反之，再进行额外配置。

从 Spring Boot 中提供的默认的配置文件（application.properties/yml），再到默认值自动配置，都可以看出约定带来的便利，以及节省大量的配置。

来看下 Spring Boot 中一个自动配置的源码实例吧：

```java
@configuration
@conditionalonclass{{ Servlet.class, StandardservletMultipartResolver.class, Multipartconfigelement.class }}
@conditionalonProperty(prefix = "spring.servlet.multipart", name == "enabled", matchifMissing = true)
@ConditionalonWebApplication(type = Type.SERVLET)
@EnableconfigurationProperties(MultipartProperties.class)

public class MultipartAutoconfiguration {
    private final MultipartProperties multipartProperties;

    public MultipartAutoconfiguration(MultipartProperties multipartProperties) {
        this.multipartProperties = multipartProperties;
    }

    @Bean
    @conditionalonMissingBean
    public MultipartconfigElement multipartconfigElement() {
        return this.multipartProperties.createMultipartconfig();
    }

    @Bean(name = DispatcherServlet.MULTIPART_RESOLVER_BEAN_NAME)
    @conditionalonMissingBean(MultipartResolver. class)
    public StandardservletMultipartResolver multipartResolver() {
        StandardservletMultipartResolver multipartResolver = new StandardservletMultipartResolver();
        multipartResolver.setResolvelazily(this.multipartProperties.isResolvelazily());
        return multipartResolver;
    }
}

@configurationProperties(prefix = "spring.servlet.multipart", ignoreUnknownFields = false)
public class Multipartproperties {
    private boolean enabled = true;

    private string location;

    private String maxFilesize = "1MB";

    private String maxRequestsize = "10MB";

    private String filesizeThreshold = "0";

    private boolean resolvelazily = false;
}
```

这是一个文件上传的自动配置类，约定了：

1、约定了配置参数以`spring.servlet.multipart` 前缀开始；

2、约定了很多默认配置，如：默认上传文件大小为 1M；

3、约定了所有的参数配置类名都是\*_Properties；_

4、约定了所有的自动配置类名都是\*AutoConfiguration；

5、约定了所有自动配置类配置在：/META-INF/spring.factories；

等等..

这样我们做一个文件上传操作几乎不用写任何配置了，除非满足不了需求，如：现在文件上传 1M 太小了，再加一行自定义配置即可，我们也可以按约定编写其他自动配置。

如果还不能理解，再来看 Maven 怎么做的，Maven 简直把约定大于配置的思想体现淋漓尽致。

![](/images/Spring Boot/3_1.jpg)

![](/images/Spring Boot/3_2.jpg)

Maven 规定了哪个目录放什么文件，哪个文件做什么用，Maven 会自动去处理，不需要我们再额外配置，其实我们也没有额外配置的需要，至少 R 哥我现在还没有遇到过。如果这些目录都让你来通过配置文件来配置，而每个项目配置的又不一样，你会不会想要崩溃？

其实这也不是新技术，只是一种设计思想，早在 JDK 1.5 中添加的《Java 注解》就是很好的体现。

## 4、Spring Boot 有哪些核心模块？

##### Spring Boot 的核心模块

---

下面我们大概来了解一下 Spring Boot 的核心模块。

##### 1、spring-boot

这是 Spring Boot 的主模块，也是支持其他模块的核心模块，主要包含以下几点：

1、提供了一个启动 Spring 应用的主类，并提供了一个相当方便的静态方法，它的主要是作用是负责创建和刷新 Spring 容器的上下文；

2、内嵌式的并可自由选择搭配的 WEB 应用容器，如：`Tomcat` ，`Jetty` ， `Undertow` 等；

3、对配置外部化的支持；

4、提供一个很方便的 Spring 容器上下文初始化器，包括合理记录日志默认参数的支持。

##### 2、spring-boot-autoconfigure

Spring Boot 能根据类路径下的内容自动一些公共大型应用，提供的`@EnableAutoConfiguration` 注解就能启用 Spring 功能的自动配置。

自动配置功能可以推断用户可能需要加载哪些 Spring Bean,如：如果类路径下有 有 `HicaricP` 这个连接池的包，此时并未提供任何有效连接池的配置，那么 Spring Boot 就知道你可能需要一个连接池，并做相应配置。如果用户配置了其他连接池，那么 Spring Boot 会放弃自动配置。

##### 3、 spring-boot-starters

Starters，我们叫它启动器好了，它是包括一系列依赖的描述符。简单的说就是，它可以一站式的帮你打包 Spring 及相关技术应用，而不需要你到处找依赖和示例配置代码，它都帮你做好了。

例如，第一章我们在介绍 Spring Boot 的时候就说了`spring-boot-starter-web` 这个启动器，你只要引引用了这个启动器应用，就会自动配置 WEB 应用的能力。

`spring-boot-starters`这个启动器这主要提供了`spring-boot`，`spring-context`，`spring-beans` 这三个 Spring 模块而已。

##### 4、spring-boot-cli

这是 Spring Boot 的命令行工具，用于编译和运行`Groovy`源程序，可以十分简单的编写并运行一个应用程序。它也能监控你的文件，一旦有变动就会自动重新编译和重新启动应用程序。

##### 5、 spring-boot-actuator

这是 Spring Boot 提供的执行端点，你可以更好的监控及和你的应用程序交互。这个模块提供了像健康端点、环境端点、Spring Bean 端点等。

##### 6、 spring-boot-actuator-autoconfigure

这个原理同上，为 Spring Boot 执行端点提供自动配置。

##### 7、spring-boot-test

Spring Boot 测试模块，为应用测试提供了许多非常有用的核心功能。

##### 8、 spring-boot-test-autoconfigure

这个原理同上，为 Spring Boot 测试模块提供自动配置。

##### 9、spring-boot-loader

这个模块可以用来构建一个单独可执行的 jar 包，使用`java -jar`就能直接运行。一般不会直接使用这个来打包，使用 Spring Boot 提供的 Maven 或者 Gradle 插件就行了。

##### 10、 spring-boot-devtools

开发者工具模块，主要为 Spring Boot 开发阶段提供一些特性，如修改了代码自动重启应用等。这个模块的功能是可选的，只限于本地开发阶段，当打成整包运行时这些功能会被禁用。

## 5、SpringBoot 的核心配置文件有哪些？

Spring Boot 应用中的配置参数主要在`application` 配置文件中。

除了`application`配置文件，这里还介绍另外一种`bootstrap`配置文件，但它不能独立于 Spring Boot 应用而独立生效，它属于 Spring Cloud 环境，需要引 l 入 Spring Cloud 依赖。

`bootstrap`配置文件会优先于`application`配置文件加载，它主要用于从额外的资源来加载配置参数，通常用来加载外部配置，如 Spring Cloud 用于加载配置中心的配置参数，也可以用来定义系统不会被改变的参数，它们默认不能被本地相同的配置所覆盖。

因此，对比`application`配置文件，`bootstrap`配置文件具有以下几个特性：

- `bootstrap`由父`ApplicationContext`加载，比`application`优先加载；
- `bootstrap`里面的参数不能被覆盖；

一般的 Spring Boot 应用使用`application`配置文件即可，除非用到了 Spring Cloud，并遇到了以下几个应用场景：

- 使用了外部化配置中心；
- 一些固定的不能被覆盖的参数；

## 6、bootstrap 和 application 配置的区别？

为什么会有这两种配置文件呢？大家都清楚它们的区别和具体使用场景吗？

##### bootstrap / application 的区别

特意去翻了下 Spring Boot 的官方文档，没有找到关于这两种文件的具体定义，然后再翻了下 Spring Cloud 的官方文档找到了它们的区别。

> http://cloud.spring.io/spring-cloud-static/Edgware.SR3/single/spring-cloud.html#thebootstrapapplicationcontext

认真阅读了下文档，原文大概意思是这样。

> Spring Cloud 构建于 Spring Boot 之上，在 Spring Boot 中有两种上下文，一种是 bootstrap,另外一种是 application, bootstrap 是应用程序的父上下文，也就是说 bootstrap 加载优先于 applicaton。bootstrap 主要用于从额外的资源来加载配置信息，还可以在本地外部配置文件中解密属性。这两个上下文共用一个环境，它是任何 Spring 应用程序的外部属性的来源。bootstrap 里面的属性会优先加载，它们默认也不能被本地相同配置覆盖。

##### 因此，对比 application 配置文件，bootstrap 配置文件具有以下几个特性。

- boostrap 由父 ApplicationContext 加载，比 applicaton 优先加载
- boostrap 里面的属性不能被覆盖

## 7、application 配置文件的应用场景？

application 是 Spring Boot 的主要配置文件：

- 提供 SpringBoot 项目的应用参数
- Spring Boot 自动化配置参数

## 8、bootstrap 配置文件的应用场景？

bootstrap 配置文件有以下几个应用场景。

- 使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息
- 一些固定的不能被覆盖的属性
- 一些加密/解密的场景

以下这个截图是一个国外网友问了一个 Spring Cloud 工程师得到的回答。

![](/images/Spring Boot/8.jpg)

做过 Spring Cloud 微服务的朋友应该对 bootstrap 的应用十分清楚，我们也有 Spring Cloud 的实战教程，在 Spring 专题中都能看到。

## 9、SpringBoot 的配置文件有哪几种格式？

.properties 和.yml，它们的区别主要是书写格式不同。

1）.properties

```properties
app.user.name = javastack
```

2）.yml

```yaml
app:
	user:
		name: javastack
```

另外，.yml 格式不支持`@PropertySource`注解导入配置。

## 10、SpringBoot 的核心注解是哪个？

Spring Boot 启动类上面的注解是：**@SpringBootApplication**，它也是 Spring Boot 的核心注解。

## 11、SpringBootApplication 注解包含哪几个子注解？

主要组合包含了以下 3 个注解：

![](/images/Spring Boot/11.jpg)

**@SpringBootConfiguration**：组合了 @Configuration 注解，实现配置文件的功能。

**@EnableAutoConfiguration**：打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： @SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })。

**@ComponentScan**：Spring 组件扫描。

## 12、SpringBoot 最核心的注解有哪些？

##### Spring Boot 最核心的 25 个注解

---

##### 1、@SpringBootApplication

这是 Spring Boot 最最最核心的注解，用在 Spring Boot 主类上，标识这是一个 Spring Boot 应用，用来开启 Spring Boot 的各项能力。

其实这个注解就是`@SpringBootConfiguration`、`@EnableAutoConfiguration`、`@ComponentScan` 这三个注解的组合，也可以用这三个注解来代替`@SpringBootApplication` 注解。

##### 2、@EnableAutoConfiguratizon

允许 Spring Boot 自动配置注解，开启这个注解之后，Spring Boot 就能根据当前类路径下的包或者类来配置 SpringBean。

如：当前类路径下有 Mybatis 这个 JAR 包，`MybatisAutoconfiguration` 注解就能根据相关参数来配置 Mybatis 的各个 Spring Bean。

##### 3、 @Configuration

这是 Spring 3.0 添加的一个注解，用来代替 applicationContext.xml 配置文件，所有这个配置文件里面能做到的事情都可以通过这个注解所在类来进行注册。

##### 4、 @SpringBootConfiguration

这个注解就是 @Configuration 注解的变体，只是用来修饰是 Spring Boot 配置而已，或者可利于 Spring Boot 后续的扩展。

##### 5、 @ComponentScan

这是 Spring 3.1 添加的一个注解，用来代替配置文件中的 component-scan 配置，开启组件扫描，即自动扫描包路径下的 @Component 注解进行注册 bean 实例到 context 中。

##### 6、@Conditional

这是 Spring 4.0 添加的新注解，用来标识一个 Spring Bean 或者 Configuration 配置文件，当满足指定的条件才开启配置。

##### 7、 @ConditionalOnBean

组合`@Conditional` 注解，当容器中有指定的 Bean 才开启配置。

##### 8、 @ConditionalOnMissingBean

组合`@Conditional` 注解，和`@ConditionalonBean` 注解相反，当容器中没有指定的 Bean 才开启配置。

##### 9、@ConditionalOnClass

组合`@Conditional` 注解，当容器中有指定的 Class 才开启配置。

##### 10、 @ConditionalOnMissingClass

组合`@Conditional` 注解，和`@ConditionalonMissingClass`注解相反，当容器中没有指定的 Class 才开启配置。

##### 11、@ConditionalOnWebApplication

组合`@Conditional`注解，当前项目类型是 WEB 项目才开启配置。

当前项目有以下 3 种类型。

![](/images/Spring Boot/12_1.jpg)

##### 12、@ConditionalOnNotWebApplication

组合`@Conditional` 注解，和`@CconditionalonwebAppication` 注解相反，当前项目类型不是 WEB 项目才开启配置。

##### 13、@ConditionalOnProperty

组合`@Cconditional` 注解，当指定的属性有指定的值时才开启配置。

##### 14、@ConditionalOnExpression

组合`@Conditional` 注解，当 SpEL 表达式为 true 时才开启配置。

##### 15、@ConditionalOnJava

组合`@Conditional` 注解，当运行的 Java JVM 在指定的版本范围时才开启配置。

##### 16、@ConditionalOnResource

组合`@Conditional`注解，当类路径下有指定的资源才开启配置。

##### 17、@ConditionalOnJndi

组合`@Conditional` 注解，当指定的 JNDI 存在时才开启配置。

##### 18、@ConditionalOnCloudPlatform

组合`@Conditional`注解，当指定的云平台激活时才开启配置。

##### 19、 @ConditionalOnSingleCandidate

组合`@Conditional` 注解，当指定的 class 在容器中只有一个 Bean，或者同时有多个但为首选时才开启配置。

##### 20、 @ConfigurationProperties

用来加载额外的配置（如.properties 文件），可用在`@Configuration`注解类，或者`@Bean` 注解方法上面。

##### 21、@EnableConfigurationProperties

一般要配合`@ConfigurationProperties` 注解使用，用来开启对 `@ConfigurationProperties` 注解配置 Bean 的支持。

##### 22、@AutoConfigureAfter

用在自动配置类上面，表示该自动配置类需要在另外指定的自动配置类配置完之后。

如 Mybatis 的自动配置类，需要在数据源自动配置类之后。

![](/images/Spring Boot/12_2.jpg)

##### 23、 @AutoConfigureBefore

这个和`@AutoconfigureAfter` 注解使用相反，表示该自动配置类需要在另外指定的自动配置类配置之前。

##### 24、@lmport

这是 Spring 3.0 添加的新注解，用来导入一个或者多个`@configuration` 注解修饰的类，这在 Spring Boot 里面应用很多。

##### 25、@lmportResource

这是 Spring 3.0 添加的新注解，用来导入一个或者多个 Spring 配置文件，这对 Spring Boot 兼容老项目非常有用，因为有些配置无法通过 Java Config 的形式来配置就只能用这个注解来导入。

## 13、SpringBoot 怎么根据指定条件注册 bean？

可以使用一系列的**条件注解**，当**满足指定的条件**才开启注册 bean。

参考面试题：Spring Boot 有哪些条件注解？

## 14、SpringBoot 有哪些条件注解？

##### 1、@Conditional

这是 Spring 4.0 添加的新注解，用来标识一个 Spring Bean 或者 Configuration 配置文件，当满足指定的条件才开启配置。

##### 2、 @ConditionalOnBean

组合`@Conditional` 注解，当容器中有指定的 Bean 才开启配置。

##### 3、 @ConditionalOnMissingBean

组合`@Conditional` 注解，和@ConditionalonBean 注注解相反，当容器中没有指定的 Bean 才开启配置。

##### 4、@ConditionalOnClass

组合`@Conditional` 注解,当容器中有指定的 Class 才开启配置。

##### 5、@ConditionalOnMissingClass

组合`@Conditional` 注解，和`@ConditionalonClass`注解相反，当容器中没有指定的 Class 才开启配置。

##### 6、 @ConditionalOnWebApplication

组合`@Conditional`注解，当前项目类型是 WEB 项目才开启配置。

当前项目有以下 3 种类型。

![](/images/Spring Boot/14.jpg)

##### 7、@ConditionalOnNotWebApplication

组合`@Conditional`注解，和`@ConditionalonwebApplication` 注解相反，当前项目类型不是 WEB 项目才开启配置。

##### 8、 @ConditionalOnProperty

组合`@Cconditional` 注解，当指定的属性有指定的值时才开启配置。

##### 9、@ConditionalOnExpression

组合`@Conditional` 注解，当 SpEL 表达式为 true 时才开启配置。

##### 10、@ConditionalOnJava

组合`@Conditional` 注解，当运行的 Java JVM 在指定的版本范围时才开启配置。

##### 11、@ConditionalOnResource

组合`@conditional` 注解，当类路径下有指定的资源才开启配置。

##### 12、@ConditionalOnJndi

组合`@Conditional` 注解，当指定的 JNDI 存在时才开启配置。

##### 13、@ConditionalOnCloudPlatform

组合`@Conditional`注解，当指定的云平台激活时才开启配置。

##### 14、@ConditionalOnSingleCandidate

组合`@Conditional` 注解，当指定的 class 在容器中只有一个 Bean，或者同时有多个但为首选时才开启配置。

## 15、SpringBoot 有哪两种方式集成？

##### Spring Boot 依赖

---

使用 Spring Boot 很简单，先添加基础依赖包，有以下两种方式

##### 1、继承 spring-boot-starter-parent 项目

![](/images/Spring Boot/15_1.jpg)

##### 2、导入 spring-boot-dependencies 项目依赖

![](/images/Spring Boot/15_2.jpg)

##### SpringBoot 依赖注意点

---

##### 1、属性覆盖只对继承有效

> This only works if your Maven project inherits (directly or indirectly) from spring-boot-dependencies. If youhave added spring-boot-dependencies in your own dependencyManagement section withimport you have to redefine the artifact yourself instead of overriding the property.

Spring Boot 依赖包里面的组件的版本都是和当前 Spring Boot 绑定的，如果要修改里面组件的版本，只需要添加如下属性覆盖即可，但这种方式只对继承有效，导入的方式无效。

![](/images/Spring Boot/15_3.jpg)

如果导入的方式要实现版本的升级，达到上面的效果，这样也可以做到，把要升级的组件依赖放到 Spring Boot 之前。

![](/images/Spring Boot/15_4.jpg)

> Each Spring Boot release is designed and tested against a specific set of third-party dependencies. Overridingversions may cause compatibility issues.

需要注意，要修改 Spring Boot 的依赖组件版本可能会造成不兼容的问题。

##### 2、资源文件过滤问题

使用继承 Spring Boot 时，如果要使用 Maven resource filter 过滤资源文件时，资源文件里面的占位符为了使${}和 Spring Boot 区别开来，此时要用@...@包起来，不然无效。另外，@...@占位符在 yaml 文件编辑器中编译报错，所以使用继承方式有诸多问题，坑要慢慢趟。

## 16、SpringBoot 需要独立的容器运行吗？

可以不需要，Spring Boot 内置了 Tomcat/ Jetty/ Undertow 容器。

## 17、SpringBoot 支持哪几种内嵌容器？

Spring 支持的内嵌式容器有：Tomcat、Jetty、Undertow

## 18、SpringBoot 中的默认内嵌容器是？

Spring Boot 默认的内嵌容器是：**Tomcat**

## 19、SpringBoot 中的内嵌容器可以替换么？

可以，如换成 Jetty：

![](/images/Spring Boot/19.jpg)

## 20、SpringBoot 最大连接数和最大并发数是多少？

这个主要问的是 Spring Boot 嵌入式容器，Spring Boot 默认嵌入式容器为 Tomcat，要知道最大连接数和最大并发数，可以查看参数类：

> org.springframework.boot.autoconfigure.web.ServerProperties.Tomcat

以 Spring Boot 3.1.0 为示例， Tomcat 版本为 10.1.8。

查看该参数类源码：

```java
@ConfigurationProperties(prefix ="server" ,ignoreUnknownFields = true)
public class ServerProperties {
    public static class Tomcat {
        private final Threads threads = new Threads();
        private int maxConnections = 8192;
        private int acceptcount = 100;
        // ...
    }

    public static class Threads {
        private int max = 200;
        private int minSpare = 10;
        // ..
    }
}
```

可以通过以下参数自定义：

```yaml
server:
	tomcat:
	#最大连接数
		max-connections: 8192
		#最大队列长度(超过最大连接数时进入队列的请求数)
		accept-count: 100
		threads:
			#最小线程数
			min-spare: 10
			#最大线程数 (最大并发数)
			max: 200
```

以上配置的都是默认值，可自行修改。

## 21、Spring Boot 自动配置原理是什么？

##### 自动配置原理

---

Spring Boot 的自动配置原理是通过**条件化配置**和 Spring 的**注解机制**来实现的，当应用启动时，Spring Boot 会自动扫描应用中的依赖，根据依赖自动配置 Spring 应用程序上下文，以便开箱即用。

![](/images/Spring Boot/21_1.jpg)

##### Spring Boot 自动配置的关键步骤：

- Spring Boot 会扫描应用中的所有类路径下的 META-INF/spring.factories 文件，这个文件包含了 Spring Boot 自动配置的核心。

- Spring Boot 将读取到的自动配置类加载到 Spring 应用程序上下文中，这些自动配置类都实现了 AutoConfiguration 自动配置接口。

- Spring Boot 根据条件进行自动配置，它会检查一些条件，如果这些条件满足，则启用相应的自动配置类。

- Spring Boot 自动配置类会向 Spring 容器中添加需要的 Bean 定义和组件，这些 Bean 定义和组件是根据应用的配置和 Spring Boot 的默认值创建的。

- Spring Boot 还提供了一些 Starter 依赖，这些 Starter 依赖包含了一些常用的库和框架，可以帮助我们更方便地进行开发。这些 Starter 依赖会自动引 l 入相关的依赖，使我们能够更快地进行开发。

  ***

  ##### 自动配置加载源码

  ***

  Spring Boot 的自动配置注解是 @EnableAutoConfiguration，从注解上面的 @lmport 的类可以找到下面自动加载自动配置的映射：

  ```java
   org.springframework.core.io.support.SpringFactoriesLoader.loadFactoryNames(Class<?>, ClassLoader)
  ```

  ```java
  public static List<String> loadFactoryNames(Class<?> factoryclass, Classloader classloader) {
      String factoryclassName = factoryclass.getName();
      try {
          Enumeration<URL> urls = (classLoader != null ? classLoader.getResources(FACTORIES_RESOURCE_LOCATIoN) :lassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
          List<String> result = new ArrayList<String>();
          while (urls.hasMoreElements()) {
              URL url = urls.nextElement();
              Properties properties = PropertiesLoaderUtils.loadProperties(new UrlResource(url));
              String factoryclassNames = properties.getProperty(factoryClassName);
              result.addAll(Arrays.asList(StringUtils.commaDelimitedListToStringArray(factoryClassNames)));
          }
          return result;
      }
      catch (IOException ex) {
          throw new IllegalArgumentException("Unable to load [" + factoryClass.getName() + "] factories from location [" + FACTORIES_RESOURCE_LOCATION + "]", ex);
      }
  }
  ```

  这个方法会加载类路径及所有 jar 包下 META-INF/spring.factories 配置中映射的自动配置的类：

  ```java
  public static final String FACTORIES_RESOURCE_LOCATION = "META-INF/spring.factories";
  ```

  查看 Spring Boot 自带的自动配置的包：spring-boot-autoconfigure-xxx.RELEASEjar，打开其中的 META-INF/spring.factories 文件会找到自动配置的映射：

  > org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
  >
  > org.springframework.boot.autoconfigure.admin.SpringApplicationAdminJmxAutoConfiguration,\
  >
  > org.springframework.boot.autoconfigure.aop.AopAutoConfiguration, \
  >
  > org.springframework.boot.autoconfigure.amqp.RabbitAutoconfiguration,\
  >
  > org.springframework.boot.autoconfigure.batch.BatchAutoconfiguration,\
  >
  > org.springframework.boot.autoconfigure.cache.CacheAutoconfiguration,\
  >
  > org.springframework.boot.autoconfigure.cassandra.CassandraAutoconfiguration,\
  >
  > org.springframework.boot.autoconfigure.cloud.cloudAutoconfiguration, \
  >
  > ....

  再来看看数据源自动配置的实现注解：

```java
@Configuration
@ConditionalonClass({ Datasource.class, EmbeddedDatabaseType.class })
@EnableConfigurationProperties(DataSourceProperties.class)
@Import({ Registrar.class, DataSourcePoolMetadataProvidersConfiguration.class })
public class DataSourceAutoConfiguration {
	// ...
}
```

@Configuration 和 @ConditionalOnClass 就是自动配置的核心，首先它得是一个配置文件，其次根据类路径下是否有这个类去自动配置。

> ##### 需要注意的是：
>
> 自动配置加载源码，不同的的版本可能大有不同，尤其在 Spring Boot 2.7.× 及 3.x 中，具体见下面的说明，以及对应的版本的源码。

---

##### Spring Boot 2.7+ 新变化

---

Spring Boot 2.7 中的自动配置注册有了一个比较大的调整，之前都是写在下面 文件中的：

> META-INF/spring.factories

现在改名了：

> META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports

![](/images/Spring Boot/21_2.jpg)

另外格式也变了，Spring Boot 2.7 中直接每一行是一个自动配置类：

![](/images/Spring Boot/21_3.jpg)

编写格式确实是比之前方便多了。

> ##### 需要注意的是：
>
> 为了向后兼容，META-INF/spring.factories 虽然现在被标识废弃了，但在 2.7.x 仍然可以使用，后续会被彻底删除，建议使用新的规范。

##### Spring Boot 3.0 新变化

---

> 最新 Spring Boot 3.0 中，老的自动配置文件 META-INF/spring.factories 已经正式被废除了，虽然配置文件还在,但仅保留系统级的组件注册，不再作为应用级的自动配置类加载了，也就是说，它已经不能再注册自定义的自动配置类了，必须使用新的自动配置文件规范进行注册。

## 22、Spring Boot 开启自动配置的注解是？

Spring Boot 开启自动配置注解是：**@EnableAutoConfiguration**

## 23、Spring Boot 自动配置的类在哪注册？

在 jar 包或者应用本身的 META-INF/spring.factories 文件中注册：

> org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\cn.javastack.config.EnvAutoConfig

## 24、Spring Boot 自动配置报告怎么查看？

怎么查看自己加的自动配置类有没有被加载，或者查看所有自动配置激活的和未激活的可以通过以下几种试查看。

1、spring-boot:run 运行的在对话框 Enviroment 中加入 debug=true 变量

2、 java -jar xx.jar --debug

3、main 方法运行，在 VM Argumanets 加入-Ddebug

4、直接在 application 文件中加入 debug=true

5、如果集成了 spring-boot-starter-actuator 监控，通过 autoconfig 端点也可以查看。

启动后会在控制台看到以下自动配置报告信息：

![](/images/Spring Boot/24.jpg)

Positive matches：已经启用的自动配置

Negative matches：未启用的自动配置

从报告中看到自己添加的 EnvAutoConfig 已经自动配置了。

## 25、Spring Boot 怎么排除某些自动配置？

Spring Boot 提供的自动配置非常强大，某些情况下，自动配置的功能可能不符合我们的需求，需要我们自定义配置，这个时候就需要排除/禁用 SpringBoot 某些类的自动化配置了。

比如：数据源、邮件，这些都是提供了自动配置的，我们需要排除 Spring Boot 的自动化配置，交给我们自己来自定义，该如何做呢？

##### 方法 1

使用`@SpringBootApplication` 注解的时候，使用 exclude 属性进行排除指定的类：

```java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class, MailSenderAutoConfiguration.class})
public class Application {
	// ...
}
```

自动配置类不在类路径下的时候，使用 excludeName 属性进行排除指定的类名全路径：

```java
@SpringBootApplication(excludeName = {"org·springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration", "org·springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration"})
public class Application {
    // ...
}
```

这个注解集成了`@EnableAutoConfiguration`注解及其里面的参数。

##### 方法 2

单独使用`@EnableAutoConfiguration`注解的时候：

```java
@...
@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class, MailSenderAutoConfiguration.class})
public class Application {
    // ...
}
```

自动配置类不在类路径下的时候，使用 excludeName 属性进行排除指定的类名全路径：

```java
@..
@EnableAutoConfiguration(excludeName = {"org-springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration","org-springframework.boot  autoconfigure.mail.MailSenderAutoConfiguration"})
public class Application {
    // ...
}
```

##### 方法 3

使用 Spring Cloud 和`@SpringCloudApplication`注解的时候：

```java
@...
@EnableAutoConfiguration (exclude = {DataSourceAutoConfiguration.class, MailSenderAutoConfiguration.class})
@SpringCloudApplication
public class Application {
    // ...
}
```

Spring Cloud 必须建立在 Spring Boot 应用之上，所以这个不用多解释了。

##### 方法 4

终极方案，不管是 Spring Boot 还是 Spring Cloud 都可以搞定，在配置文件中指定参数`spring.autoconfigure.exclude`进行排除：

> pring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoconfiguration,\org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration

或者还可以这样写：

> pring.autoconfigure.exclude[e]=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration spring.autoconfigure.exclude[1]=org.springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration

如果你用的是 yaml 配置文件，可以这么写：

```yaml
spring:
	autoconfigure:
		exclude:
			org.springframework.boot.autoconfigure.jdbc.DataSourceAutoconfiguration
			org-springframework.boot.autoconfigure.mail.MailSenderAutoConfiguration
```

## 26、Spring Boot 怎么开启和关闭自动配置？

通过 spring.boot.enableautoconfiguration 参数

![](/images/Spring Boot/26.jpg)

默认为 true，即开启自动配置状态。

关闭自动配置：

```properties
 spring.boot.enableautoconfiguration=false
```

## 27、Spring Boot 的目录结构是怎样的？

Spring Boot 与传统项目最大的区别是，传统项目都是打成 WAR 包部署到服务器上面，需要额外的 Servlet 容器,而 Spring Boot 则可以直接打成 jar 包，并内置集成了 Servlet 容器，通过命令 java -jar xx.jar 则可以直接运行,不需要独立的 Servlet 容器。

打成可执行 jar 包后，我们来看下其中的`META-INF/MANIFEST.MF` 文件。

![](/images/Spring Boot/27_1.jpg)

其中有一个`Start-Class`便是这个 jar 包的入口类，这个入口类推荐是放在一个项目的顶层包中，其他所有的类都放在其子包下面，目录结构如以下所示。

![](/images/Spring Boot/27_2.jpg)

这个目录结构是主流及推荐的做法，而在主入口类上加上@SpringBootApplication 注解来开启 Spring Boot 的各项能力，如自动配置、组件扫描等。

![](/images/Spring Boot/27_3.jpg)

如果你不想这么做，你也可以充分利用`@EnableAutoConfiguration` 和 `@ComponentScan` 注解自定义你的行为，不过这不是推荐的做法。

## 28、Spring Boot 中的 Starters 是什么？

Starters 可以理解为启动器，它包含了一系列可以集成到应用里面的依赖包，你可以一站式集成 Spring 及其他技术，而不需要到处找示例代码和依赖包。

如你想使用 Spring JPA 访问数据库，只要加入 spring-boot-starter-data-jpa 启动器依赖就能使用了。

Starters 包含了许多项目中需要用到的依赖，它们能快速持续的运行，都是一系列得到支持的管理传递性依赖。

## 29、Spring Boot Starters 有什么命名规范？

Spring Boot 官方的启动器都是以 spring-boot-starter-*命名的，*代表了一个特定的应用类型。

第三方的启动器不能以 spring-boot 开头命名，它们都被 Spring Boot 官方保留。一般一个第三方的应该这样命名，像 mybatis 的 mybatis-spring-boot-starter。

## 30、Spring Boot Starters 官方有哪些分类？

##### Spring Boot starters

---

##### 1、 application starters

你还在手写配置引入框架？建议看看这个表格。

这一个表格是 Spring Boot 所有应用程序级的 Starters，一起来看都有哪些。

| Starter 名称                                | Starter 描述                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| spring-boot-starter                         | 核心 Starter，包括自动配置、日志及 YAML 支持等                                                          |
| spring-boot-starter-activemq                | 集成 Apache ActiveMQ，基于 JMS 的消息队列                                                               |
| spring-boot-starter-artemis                 | 集成 Apache Artemis，基于 JMS 的消息队列                                                                |
| spring-boot-starter-amqp                    | 集成 Spring AMQP 和 Rabbit MQ 的消息队列                                                                |
| spring-boot-starter-aop                     | 集成 Spring AOP 和 Aspect 面向切面编程                                                                  |
| spring-boot-starter-batch                   | 集成 Spring Batch (批处理)                                                                              |
| spring-boot-starter-cache                   | 集成 Spring Cache(缓存)                                                                                 |
| spring-boot-starter-data-cassandra          | 集成 Cassandra（分布式数据库）和 Spring Data Cassandra                                                  |
| spring-boot-starter-data-cassandra-reactive | 集成 Cassandra（分布式数据库）和 Spring Data Cassandra Reactive                                         |
| spring-boot-starter-data-couchbase          | 集成 Couchbase (文档型数据库)和 Spring Data Couchbase                                                   |
| spring-boot-starter-data-couchbase-reactive | 集成 Couchbase（文档型数据库））和 Spring Data Couchbase Reactive                                       |
| spring-boot-starter-data-elasticsearch      | 集成 Elasticsearch（搜索引擎）和 Spring Data Elasticsearch                                              |
| spring-boot-starter-data-solr               | 集成 Apache Solr（搜索引擎）结合 Spring Data Solr                                                       |
| spring-boot-starter-data-jdbc               | 集成 Spring Data JDBC                                                                                   |
| spring-boot-starter-data-jpa                | 集成 Spring Data JPA 结合 Hibernate                                                                     |
| spring-boot-starter-data-ldap               | 集成 Spring Data LDAP                                                                                   |
| spring-boot-starter-data-mongodb            | 集成 MongoDB（文档型数据库）和 Spring Data MongoDB                                                      |
| spring-boot-starter-data-mongodb-reactive   | 集成 MongoDB（文档型数据库）和 Spring Data MongoDB Reactive                                             |
| spring-boot-starter-data-ne04j              | 集成 Neo4j（图形数据库）和 Spring Data Neo4j                                                            |
| spring-boot-starter-data-r2dbc              | 集成 Spring Data R2DBC                                                                                  |
| spring-boot-starter-data-redis              | 集成 Redis（内存数据库）结合 Spring Data Redis 和 Lettuce 客户端                                        |
| spring-boot-starter-data-redis-reactive     | 集成 Redis（内存数据库）结合 Spring Data Redis reactive 和 Lettuce 客户端                               |
| spring-boot-starter-data-rest               | 集成 Spring Data REST 暴露 Spring Data repositories 输出 REST 资源                                      |
| spring-boot-starter-thymeleaf               | 集成 Thymeleaf 视图构建 MVC web 应用                                                                    |
| spring-boot-starter-freemarker              | 集成 FreeMarker 视图构建 MVC web 应用                                                                   |
| spring-boot-starter-groovy-templates        | 集成 Groovy 模板视图构建 MVC web 应用                                                                   |
| spring-boot-starter-hateoas                 | 集成 Spring MVC 和 Spring HATEOAS 构建超媒体 RESTful Web 应用程序                                       |
| spring-boot-starter-integration             | 集成 Spring Integration                                                                                 |
| spring-boot-starter-jdbc                    | 集成 JDBC 结合 HikariCP 连接池                                                                          |
| spring-boot-starter-jersey                  | 集成 JAX-RS 和 Jersey 构建 RESTful web 应用，是 spring-boot-starter-web 的一个替代 Starter              |
| spring-boot-starter-jooq                    | 集成 jOOQ 访问 SQL 数据库，是 spring-boot-starter-data-jpa 或者 spring-boot-starter-jdbc 的替代 Starter |
| spring-boot-starter-json                    | 用于读写 JSON                                                                                           |
| spring-boot-starter-jta-atomikos            | 集成 Atomikos 实现 JTA 事务                                                                             |
| spring-boot-starter-jta-bitronix            | 集成 Bitronix 实现 JTA 事务（从 2.3.0 开始标识为 Deprecated)                                            |
| spring-boot-starter-mail                    | 集成 Java Mail 和 Spring 框架的邮件发送功能                                                             |
| spring-boot-starter-mustache                | 集成 Mustache 视图构建 web 应用                                                                         |
| spring-boot-starter-security                | 集成 Spring Security                                                                                    |
| spring-boot-starter-oauth2-client           | 集成 Spring Security's OAuth2/OpenlD 连接客户端功能                                                     |
| spring-boot-starter-oauth2-resource-server  | 集成 Spring Security's OAuth2 资源服务器功能                                                            |
| spring-boot-starter-quartz                  | 集成 Quartz 任务调度                                                                                    |
| spring-boot-starter-rsocket                 | 构建 RSocket 客户端和服务端                                                                             |
| spring-boot-starter-test                    | 集成 JUnit Jupiter, Hamcrest 和 Mockito 测试 Spring Boot 应用和类库                                     |
| spring-boot-starter-validation              | 集成 Java Bean Validation 结合 Hibernate Validator                                                      |
| spring-boot-starter-web                     | 集成 Spring MVC 构建 RESTful web 应用，使用 Tomcat 作为默认内嵌容器                                     |
| spring-boot-starter-web-services            | 集成 Spring Web Services                                                                                |
| spring-boot-starter-webflux                 | 集成 Spring Reactive Web 构建 WebFlux 应用                                                              |
| spring-boot-starter-websocket               | 集成 Spring WebSocket 构建 WebSocket 应用                                                               |

用到哪个技术就引 l 用哪个技术的 Starter，Spring Boot 助你快速集成，别再手写配置了。

##### 2、 production starters

除了上面的应用程序级 starters，还有下面的生产级 Starters 能被用于线上/生产功能：

| Starter 名称                 |                                                                 |
| ---------------------------- | --------------------------------------------------------------- |
| spring-boot-starter-actuator | 集成 Spring Boot Actuator，提供生产功能以帮助监控和管理应用程序 |

这个意味着和任何技术、任何业务没关系，只要用了 Spring Boot 框架，上了生产环境就能使用，也不是只有生产才能使用，只是在生产环境使用更能体验它的意义。

##### 3、 technical starters

除了应用程序和生产 Starters，Spring Boot 还包括下面的技术类 Starters，用于帮助你排除或者替换指定的框架或技术：

| Starter 名称                      | Starter 描述                                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| spring-boot-starter-jetty         | 集成 Jetty 作为内嵌的 servlet 容器，可用于替代 spring-boot-starter-tomcat                                  |
| spring-boot-starter-l0g4j2        | 集成 Log4j2 日志框架，可用于替代 spring-boot-starter-logging                                               |
| spring-boot-starter-logging       | 集成 Logback 日志框架，这个也是默认的日志 Starter                                                          |
| spring-boot-starter-reactor-netty | 集成 Netty 作为内嵌的响应式 HTTP 服务器                                                                    |
| spring-boot-starter-tomcat        | 集成 Tomcat 作为内嵌的 servlet 容器，这也是默认的 servlet 容器 starter 被集成 spring-boot-starter-web 里面 |
| spring-boot-starter-undertow      | 集成 Undertow 作为内嵌的 servlet 容器，可用于替代 spring-boot-starter-tomcat                               |

这个表格的技术也很熟悉了，Spring Boot 默认内嵌 Servlet 容器为 Tomcat，如果你想换成 Jetty、Undertow 或者其他容器，又或者你想换成其他的日志框架，都在这个表格里。

> https://docs.spring.io/spring-boot/docs/

## 31、SpringBoot 怎么自定义一个 Starter？

##### 一、自定义 Starter 必备组件

---

一个完整的 Spring Boot Starter 需要包含以下组件：

- 包含自动配置代码的自动配置模块；
- Starter 模块提供对自动模块的依赖关系，和相关依赖库，以及任何需要用到的依赖。简而言之，就是，添加一个 Starter 就应该提供使用该 Starter 所需的一切；

##### 二、创建一个自定义 Starter

---

这个自定义 Starter 就实现一个根据属性的值是否配置 Bean。

###### 1、创建自动配置类

![](/images/Spring Boot/31_1.jpg)

这个自动配置类很简单，就是根据是否有`javastack.starter.enabled=true`这个参数的值再配置一个 Bean。

`TestService` 示例如下：

![](/images/Spring Boot/31_2.jpg)

这个类就有一个方法`getServiceName`，它就返回一个字符串：`Java技术栈`。

###### 2、允许自动配置

创建`META-INF/spring.factories` 文件，添加这个允许自动配置的类。

![](/images/Spring Boot/31_3.jpg)

##### 三、测试这个自定义 Starter

---

上面的自定义 Starter 项目建好后，可以来测试一下它是否生效了。

-般是把它打成 jar 包上传到 Maven 仓库，供其他同事调用，这里我们本报打完包之后再引用它。

###### 1、添加依赖

新建一个 Spring Boot 测试项目，添加这个自定义 Starter 依赖，Maven 依赖如下：

![](/images/Spring Boot/31_4.jpg)

###### 2、添加测试方法

![](/images/Spring Boot/31_5.jpg)

这个方法的作用是，项目启动后，调用`TestService`的实例方法，输出方法的值。

###### 3、开启配置

我们知道这个自定义 Starter 中需要有`javastack.starter.enabled=true`这个参数的值的，所以我们在`application.yml`配置文件中添加这个配置：

```yaml
javastack:
	starter:
		enabled: true
```

###### 4、运行测试

运行 Application 类的 main 方法，最后会输出结果：Java 技术栈。

当我们把配置改为：

```yaml
 javastack:
 	starter:
 		enabled: false
```

此时，运行报错，因为没有这个实例啊，自动配置类只有为 true 时才会配置。

## 32、SpringBoot 有哪几种运行方式？

今天介绍 3 种运行 Spring Boot 应用的方式，看大家用过几种？

##### 1、在 IDE 中运行

在 Eclipse、IDEA 中直接运行，又有以下两种方式。

- ###### jar 包方式

Spring Boot 默认采用 jar 包内嵌 Tomcat、Jetty 等 Server 的方式，并需要提供一个含有 main 方法的主类。这个时候，直接在 IDE 中运行这个 main 方法就能启动 Spring Boot 应用了。

![](/images/Spring Boot/32_1.jpg)

- ###### war 包方式

如果你的应用改装成了 war 包方式部署，这个时候就需要在 IDE 中配置 Server，然后在 Server 中加入你的 Spring Boot 项目，最后运行这个 Server 即可。

##### 2、打包运行

当你的 Spring Boot 准备提测或者上线，都需要打成 jar 包或者 war 包运行，war 包方式这里不说直接丢到 Server 里面运行即可，这里介绍直接运行 jar 包的方式。

> $ java -jar javastack-0.0.1-SNAPSHOT.jar

这种方式也支持开启远程调试，如：

> $ java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n -jar javastack-0.0.1-SNAPSHOT.jar

##### 3、用插件运行

可以在 IDE 或者命令行中使用 Maven 和 Gradle 插件来运行 Spring Boot 应用。

1. Maven Plugin

> $ mvn spring-boot:run

更多详情请访问以下官方链接。

> https://docs.spring.io/spring-boot/docs/current/maven-plugin/

2. Gradle Plugin

> $ gradle bootRun

更多详情请访问以下官方链接。

> https://docs.spring.io/spring-boot/docs/current/gradle-plugin/reference/html/

最后来一张 Maven 的截图。

![](/images/Spring Boot/32_2.jpg)

##### 总结

在 IDE 中推荐使用插件的方式来运行，因为可以集成更多的插件化的功能，如：热部署、区别不同环境配置等。

在非 IDE 中请使用`java -jar`的方式，或者直接打包在 Server 中运行！

## 33、Spring Boot 支持哪些应用打包方式？

![](/images/Spring Boot/33.jpg)

如上图所示，支持：

- jar
- war

## 34、Spring Boot 默认的打包方式是？

默认是打 jar 包，可以修改 Maven 的 pom.xml 中的 packaging 参数。

## 35、Spring Boot 应用怎么 Debug 调试？

Spring Boot 项目在使用 Spring Boot Maven 插件执行启动命令`spring-boot:run`的时候，如果设置的断点进不去，要进行以下的设置。

##### 官方解决方案：

> By default, the run goal runs your application in a forked process. If you need to debug it, you should addthe necessary JVM arguments to enable remote debugging. The following configuration suspend the process until a debugger has joined on port 5005:

直接看怎么做吧！

##### 1、添加 JVM 参数

---

在插件`spring-boot-maven-plugin`里面加上 `jvmArguments` 配置。

![](/images/Spring Boot/35_1.jpg)

或者在命令行指定：

![](/images/Spring Boot/35_2.jpg)

![](/images/Spring Boot/35_3.jpg)

最新配置可以参考官方说明：

> https://docs.spring.io/spring-boot/docs/current/maven-plugin/examples/run-debug.html

##### 2、添加一个 Remote

---

在开发工具里面新增一个 Remote 配置：

![](/images/Spring Boot/35_4.jpg)

只需要确定 Host、Port 参数即可。

- Host：地址

localhost：本地启动地址；

- Port：端口

5005：上面命令行指定的端口；

##### 3、开始调试

---

先启动加了`jvmArguments`参数的 Spring Boot 项目：

![](/images/Spring Boot/35_5.jpg)

程序停在监听端口：5005，再 debug 启动 Remote：

![](/images/Spring Boot/35_6.jpg)

再回到项目，开始启动输出日志，然后就可以进行断点调试了。

这就是远程调试了，也能帮你 debug 远程 Spring Boot 应用，但在本地调试要操作两次，略显麻烦。

## 36、SpringBoot 可以配置随机端口吗？

可以的，Spring Boot 支持在系统加载的时候配置随机数。

添加 config/random.properties 文件，添加以下内容：

![](/images/Spring Boot/36_1.jpg)

添加绑定类：

![](/images/Spring Boot/36_2.jpg)

输出如下：

![](/images/Spring Boot/36_3.jpg)

具体的生成细节可以参考 Spring Boot 的配置类：

`org.springframework.boot.context.config.RandomValuePropertySource`

来看下它的源码，实现其实很简单。

![](/images/Spring Boot/36_4.jpg)

其实就是使用了 Java 自带的`java.util.Random`和`java.util.UUID `等工具类，实现很简单，这里就不再详细解析了，大家可以自己去看下这个类的实现。

随机数的生成配置就是这么点了，我知道的是可以随机生成应用程序端口，其他的还真没用到。

## 37、Spring Boot 怎么打一个可执行 Jar 包？

##### 1、添加插件

![](/images/Spring Boot/37_1.jpg)

这里是添加了一个 Maven 打包插件，通过配置可以定制打成的 Jar 包的格式，如：javastack-exec-dev.jar。

如果你是用的 spring-boot-starter-parent 方式来使用 Spring Boot，那就不用写 executions 选项，因为它包括了 executions repackage 构建配置。

这个插件的更多用法参考：

> https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/maven-plugin/usage.html

##### 2、打成 Jar 包

使用 mvn package 命令或者 IDE 中的 Maven 插件都可以打包。

打完包之后，在项目 target 目录就可以看到打成的 Jar 包。

这个 Jar 包除了包括编译完的 class 文件，还内置了 Servlet 容器，并集成了所有需要依赖的其他 Jar 包库，我们来看下这个 Jar 包的目录结构。

![](/images/Spring Boot/37_2.jpg)

在文件\META-INF\MANIFEST.MF 中找到应用程序启动类：

![](/images/Spring Boot/37_3.jpg)

## 38、Spring Boot 怎么运行可执行 Jar 包？

运行命令格式：

> $ java -jar xxx.jar

运行命令演示：

> $ java -jar javastack-exec-dev.jar

![](/images/Spring Boot/38.jpg)

好了，跑起来了。

## 39、Spring Boot 支持 https 配置吗？

##### 支持 HTTPS

---

Spring Boot 配置 SSL 很简单，只需要通过一系列的`server.ssl.*`参数即可完成配置，如下所示。

application.properties 配置文件参考配置：

![](/images/Spring Boot/39_1.jpg)

这边只是提供了一个 SSL 单向验证的演示，更多 SSL 参数配置如下。

![](/images/Spring Boot/39_2.jpg)

> 参数对应的类：org.springframework.boot.web.server.Ssl

上面的例子配置后就能开启 HTTPS 了，默认的 HTTP 协议就不再支持了，Spring Boot 不支持以配置文件配置的方式同时支持 HTTP 和 HTTPS。

##### 如何同时支持？

---

如果你需要同时支持 HTTP 和 HTTPS 这两个协议，就需要把另外一个协议用程序化的方式来配置。因为通过程序的方式配置 HTTP 协议更加简单一点，所以，Spring Boot 推荐的做法是把 HTTPS 配置在配置文件，HTTP 通过程序来配置。

来，下面示例就是通过程序的方式来额外支持 HTTP 协议。

![](/images/Spring Boot/39_3.jpg)

启动 Spring Boot 之后就会看到下面的同时支持两个协议日志。

> Tomcat started on port(s): 8443 (https) 8080 (http) with context path '/'

Spring Boot 支持 HTTPS 如此简单，开发现在把运维的事都做了...

## 40、Spring Boot 怎么注册 Servlet？

##### 一、Spring Boot 注册

---

Spring BoOt 提供了`ServletRegistrationBea` ，`FilterRegistrationBean `，`ServletListenerRegistrationBean` 三个类分别用来注册 Servlet，Filter，Listener，下面是 Servlet 的示例代码。

![](/images/Spring Boot/40_1.jpg)

##### 二、组件扫描注册

---

Servlet 3.0 之前，Servlet、Filter、Listener 这些组件都需要在`web.xml`中进行配置，3.0 之后开始不再需要`web.xml`这个配置文件了，所有的组件都可以通过代码配置或者注解来达到目的。

如下图所示，截图自 Servlet 3.1。

![](/images/Spring Boot/40_2.jpg)

Servlet 3.0 开始提供了这 3 个注解来代替。

**@WebServlet** =>代替 servlet 配置

**@WebFilter** => 代替 filter 配置

**@WebListener** => 代替 listener 配置

##### 配置 Servlet 示例

![](/images/Spring Boot/40_3.jpg)

##### 配置 Filter 示例

![](/images/Spring Boot/40_4.jpg)

Listener 配置方式类似，上面的示例代码一看就懂，这里不再详述。

需要注意的是，为了安全考虑，内嵌服务器不会直接执行 Servlet 3.0 里面的`javax.servlet.ServletContainerInitializer` 接口， 或者 Spring 中的`org.springframework.web.WebApplicationInitializer` 接口，否则会导致终止 Spring BoOt 应用。所以，如果使用的是 Spring Boot 内嵌服务器，需要在配置类上面添加额外的`@ServletComponentScan` 注解来开启 Servlet 组件扫描功能，如果使用的是独立的服务器，则不需要添加，会使用服务器内部的自动发现机制。

##### 三、动态注册

---

如果你想在 Spring Boot 中完成 Servlet、Filter、Listener 的初始化操作，你需要在 Spring 中实现下面这个接口，并注册为一个 bean。

> org.springframework.boot.web.servlet.ServletContextlnitializer

ServletContext 提供了几个动态注册的方法，如下所示。

![](/images/Spring Boot/40_5.jpg)

以下为动态添加 Servlet 示例代码。

![](/images/Spring Boot/40_6.jpg)

## 41、Spring Boot Runner 是什么？

##### Runner 启动器

---

如果你想在 Spring Boot 启动的时候运行一些特定的代码，你可以实现接口 `ApplicationRunner`或者`CommandLineRunner`，这两个接口实现方式一样，它们都只提供了一个 run 方法。

**CommandLineRunner**：启动获取命令行参数。

![](/images/Spring Boot/41_1.jpg)

**ApplicationRunner**：启动获取应用启动的时候参数。

![](/images/Spring Boot/41_2.jpg)

##### 使用方式

![](/images/Spring Boot/41_3.jpg)

或者这样

![](/images/Spring Boot/41_4.jpg)

##### 启动顺序

---

如果启动的时候有多个 ApplicationRunner 和 CommandLineRunner，想控制它们的启动顺序，可以实现`org.springframework.core.Ordered` 接口或者使用`org.springframework.core.annotation.Order` 注解。

## 42、Spring Boot 怎么禁用循环依赖？

Spring Boot 2.6 中已经默认禁止循环依赖了，可以通过 **allowCircularReferences** 来开启、禁止循环依赖。

Spring Boot 可以这样设置：

```yaml
spring:
	main:
		allow-circular-references: false
```

也可以通过 SpringApplication 和 SpringApplicationBuilder 设置，如：

```java
public static void main(String[] args) {
    SpringApplication application = new SpringApplication(Application.class);

    //禁止循环引用
    application.setAllowCircularReferences(false);
    application.run(args);
}
```

## 43、Spring Boot 支持哪些模板引擎？

##### SpringBoot 支持的模板引引擎：

- FreeMarker
- Groovy
- Thymeleaf
- Mustache

## 44、Spring Boot 支持 Velocity 模板引擎吗？

Spring Boot 刚开始的版本是支持的，在后续的版本中已经不再支持 Velocity 了。

## 45、Spring Boot 怎么做单元测试？

##### Spring Boot 的测试类库

SpringBoot 提供了许多实用工具和注解来帮助测试应用程序，主要包括以下两个模块。

- spring-boot-test：支持测试的核心内容。
- spring-boot-test-autoconfigure：支持测试的自动化配置。

开发进行只要使用`spring-boot-starter-test`启动器就能弓 I 入这些 Spring Boot 测试模块，还能引 l 入一些像`JUnit, AssertJ, Hamcrest`及其他一些有用的类库，具体如下所示。

- JUnit：Java 应用程序单元测试标准类库。
- Spring Test & Spring Boot Test：Spring Boot 应用程序功能集成化测试支持。
- Assert：一个轻量级的断言类库。
- Hamcrest：一个对象匹配器类库。
- Mockito：一个 Java Mock 测试框架，默认支付 1.x，可以修改为 2.x。
- JSONassert：一个用于 JSON 的断言库。
- JsonPath：一个 JSON 操作类库。

下面是 Maven 的依赖关系图。

![](/images/Spring Boot/45_1.jpg)

以上这些都是 Spring Boot 提供的一些比较常用的测试类库，如果上面的还不能满足你的需要，你也可以随意添加其他的以上没有的类库。

##### 测试 SpringBoot 应用程序

添加 Maven 依赖

![](/images/Spring Boot/45_2.jpg)

1、要让一个普通类变成一个单元测试类只需要在类名上加入 @SpringBootTest 和@RunWith(SpringRunner.class) 两个注解即可。

2、在测试方法上加上 @Test 注释。

如果测试需要做 REST 调用，可以 @Autowire 一个 TestRestTemplate。

![](/images/Spring Boot/45_3.jpg)

GET 请求测试

![](/images/Spring Boot/45_4.jpg)

POST 请求测试

![](/images/Spring Boot/45_5.jpg)

文件上传测试

![](/images/Spring Boot/45_6.jpg)

文件下载测试

![](/images/Spring Boot/45_6.jpg)

## 46、Spring Boot 支持哪些日志框架？

Spring Boot 支持 Java Util Logging, Log4j2, Logback 作为日志框架，Log4j 已不支持。

## 47、Spring Boot 默认使用哪个日志框架？

如果使用 Starters 启动器，Spring Boot 将使用 Logback 作为默认日志框架。

## 48、Spring Boot 有哪几种热部署方式？

##### 主要有两种方式：

- Spring Loaded
- Spring-boot-devtools

## 49、Spring Boot 配置加载顺序是怎样的？

使用 Spring Boot 会涉及到各种各样的配置，如开发、测试、线上就至少 3 套配置信息了。Spring Boot 可以轻松的帮助我们使用相同的代码就能使开发、测试、线上环境使用不同的配置。

##### 在 SpringBoot 里面，可以使用以下几种方式来加载配置。本章内容基于 SpringBoot2.0 进行详解。

1、 properties 文件；

2、YAML 文件；

3、系统环境变量；

4、命令行参数；

等等....

##### 我们可以在 SpringBeans 里面直接使用这些配置文件中加载的值，如：

1、使用`@Value`注解直接注入对应的值，这能获取到 Spring 中`Environment`的值；

2、使用`@ConfigurationProperties`注解把对应的值绑定到一个对象；

3、直接获取注入`Environment`进行获取；

配置属性的方式很多，Springboot 使用了一种独有的`PropertySource`可以很方便的覆盖属性的值。

##### 配置属性加载的顺序如下：

![](/images/Spring Boot/49_1.jpg)

##### 数字小的优先级越高，即数字小的会覆盖数字大的参数值，我们来实践下，验证以上配置参数的加载顺序。

1、在主应用程序中添加 Java 系统参数。

![](/images/Spring Boot/49_2.jpg)

2、在 application.properties 文件中添加属性。

```properties
name = javastack-application
```

3、在 application-dev.properties 文件中添加属性。

```properties
name = javastack-application-dev
```

4、添加测试类

![](/images/Spring Boot/49_3.jpg)

运行 test 单元测试，程序输出：

> name is javastack-test

根据以上参数动态调整，发现参数会被正确被覆盖。了解了 Spring Boot 各种配置的加载顺序，如果配置被覆盖了我们就知道是什么问题了。

## 50、Spring Boot 如何定义不同环境配置？

提供多套配置文件，如：

> applcation.properties
>
> application-dev.properties
>
> application-test.properties
>
> application-prod.properties

运行时指定具体的配置文件。

## 51、Spring Boot 怎么兼容老 Spring 项目？

可以兼容，使用`@ImportResource`注解导入老 Spring 项目配置文件。

## 52、Spring Boot 应用有哪些保护手法？

##### 主要有以下几种保护手法：

- 在生产中使用 HTTPS
- 使用 Snyk 检查你的依赖关系
- 升级到最新版本
- 启用 CSRF 保护
- 使用内容安全策略防止 XSS 攻击
- 使用 OpenlD Connect 进行身份验证
- 管理密码？使用密码哈希！
- ...

## 53、Spring Boot 怎么注册事件监听器？

##### 注册事件监听器有两种方式：

1、在资源目录中的 META-INF/spring.factories 文件中自动注册：

> org.springframework.context.ApplicationListener=\ Cn.javastack.springboot.features.listener.JavastackListener

2、如果是监听 Spring 应用上下文（ApplicationContext）创建之后的事件,可以直接在监听器上使用@Component 注解即可，否则需要使用第一种方法的自动注册，因为 ApplicationContext 并未创建，这时的 Bean 是不能被加载的。

## 54、Spring Boot 应用如何监控和健康检查？

**Spring Boot Actuator** 可以帮助我们全方面监控应用，比如健康检查、审计、统计、HTTP 追踪等。

我们可以通过 JMX 或者 HTTP endpoints 来获得相关信息，也可以在 Spring Boot Admin 的配合下进行页面展示，还能和其它外部应用系统系统整合。

## 55、Spring Boot 怎么解决跨域问题？

##### 第一种办法：

![](/images/Spring Boot/55_1.jpg)

这种方式是全局配置的，网上也大都是这种解决办法。

##### 第二种办法：

![](/images/Spring Boot/55_2.jpg)

这种办法，是基于过滤器的方式，方式简单明了，就是在 response 中写入这些响应头。

##### 第三种办法：

使用 @CrossOrigin 注解：

![](/images/Spring Boot/55_3.jpg)

## 56、Spring Boot2.X 有什么新特性？

##### Spring Boot 2.x 主要变更：

- 配置变更
- JDK 版本升级
- 第三方类库升级
- 响应式 Spring 编程支持
- HTTP/2 支持
- 配置属性绑定
- 更多改进与加强...

## 57、Spring Boot 怎么定制启动图案？

##### 启动图案

---

Spring Boot 在启动的时候会显示一个默认的 Spring 的图案，对应的类为 SpringBootBanner。

![](/images/Spring Boot/57_1.jpg)

##### 定制图案

---

很简单,只要在 classpath 目录下创建 banner.txt 即可，把图案放入该文件就行，这是 Spring Boot 默认的图案位置，Spring Boot 会自动加载该文件显示图案。

生成图案的网站：http://patorjk.com

也可以使用图片，更详细的可以研究 Banner 接口及其子类，不过这也没什么卵用，有兴趣的可以深入了解下。当然也支持通过 application 配置文件来定制图案。

![](/images/Spring Boot/57_2.jpg)

## 58、Spring Boot 怎么关闭启动图案？

图案输出有以下几种模式，默认是 CONSOLE 的，即只打印到控制台，也可以输出到日志文件，或者关闭图案。

![](/images/Spring Boot/58_1.jpg)

##### 关闭图案：

![](/images/Spring Boot/58_2.jpg)

## 59、Spring Boot 的默认编码是？

![](/images/Spring Boot/59.jpg)

看源码，默认为：UTF-8

## 60、Spring Boot 怎么指定编码格式？

添加配置即可：

```properties
server.servlet.encoding.charset=GBK
server.servlet.encoding.force=true
```

## 61、Spring Boot FailureAnalyzers 是什么？

Spring Boot 项目是不是经常失败,式显示一大堆的错误信息，如端口重复绑定时会打印以下异常：

![](/images/Spring Boot/61_1.jpg)

这个大家应该很熟悉了吧！

错误信息大家都能看懂，但很不友好，那么，Spring Boot 是怎么实现这样一个异常错误信息输出的呢？今天 R 哥分享一个 Spring Boot 启动失败的简单易懂的玩法，让新来的实习生 1 秒都能看出问题。

如果你对 Spring Boot 还不是很熟悉，或者只是会简单的使用，那还是建议你深入学习下吧，推荐这个 SpringBoot 学习仓库，欢迎 Star 关注：

> https://github.com/javastacks/spring-boot-best-practice

##### Failure Analyzers 介绍

---

Spring Boot 中注册了许多“**Failure Analyzers**"，即“**失败分析器**"，Spring Boot 中的启动失败的场景都是由这些失败分析器拦截处理的。

Spring Boot 提供了 `FailureAnalyzers` 接口：

![](/images/Spring Boot/61_2.jpg)

**这个接口的目的就是**：分析启动失败异常并显示给用户有用的诊断信息。

Spring Boot 内置注册的所有失败分析器在这个文件里面：

> /org/springframework/boot/spring-boot/2.3.5.RELEASE/spring-boot-2.3.5.RELEASE-sources.jar!/META-INF/spring.factories

注册的所有失败分析器列表：

![](/images/Spring Boot/61_3.jpg)

再回到上面的端口重复绑定启动失败异常，就是注册了`PortInUseFailureAnalyzer` 这个失败分析器，可以看到`PortInUseFailureAnalyzer`失败分析器就在注册列表里面。

再来看下`PortInUseFailureAnalyzer`的源码：

![](/images/Spring Boot/61_4.jpg)

只要应用启动过程上抛出了`PortInUseException`异常就会被这个失败分析器拦截并输出可读性的错误信息，现在知道绑定重复绑定错误是怎么输出的了。

##### 自定义 Failure Analyzers

---

从内置的失败分析器中可以发现，所有的分析器都继承了这个抽象基类是：**AbstractFailureAnalyzer**，它实现了 **FailureAnalyzer** 接口，般基于这个抽象基类就可以实现自定义失败分析器的扩展。

如何扩展或者自定义一个**FailureAnalyzer**。

1、重写端口失败分析器

比如说上面的`PortInUseFailureAnalyzer`输出内容是英文的，不是很直观的看出，我们可以自己实现一个中文的端口失败分析器。

很简单，创建一个失败分析器继承**AbstractFailureAnalyzer**抽象类即可：

![](/images/Spring Boot/61_5.jpg)

重写`analyze`方法，并返回一个`FailureAnalysis`对象，`FailureAnalysis`类的三个主要信息分别是：

![](/images/Spring Boot/61_6.jpg)

即要展示的：可读性的错误描述、建议的检查修复动作、原始异常。

然后在自己的资源目录下创建 META-INF/spring.factories 文件，内容添加：

![](/images/Spring Boot/61_7.jpg)

启动输出：

![](/images/Spring Boot/61_8.jpg)

这样重新实现一下是不是要清楚多了？实习生都能看懂！

##### 2、自定义失败分析器

下面再来自定义一个全新的失败分析器，让大家能更清楚的认识失败分析器。

我们在创建 Bean 的过程中手动抛出一个自定义的异常：

![](/images/Spring Boot/61_9.jpg)

添加一个失败分析器拦截该异常：

![](/images/Spring Boot/61_10.jpg)

添加注册：

![](/images/Spring Boot/61_11.jpg)

启动输出：

![](/images/Spring Boot/61_12.jpg)

如果不注册该失败分析器，这个自定义的异常就不会被内置的失败分析器拦截，就会输出大堆的异常信息，使用失败分析器能很直观的看出是什么错误及怎么修复这个错误。

##### 总结

---

Spring Boot 提供的失败分析器以友好的错误信息和修复建议代替了大堆的错误异常信息，可以帮助我们更直观的定位应用启动故障，你学会了吗？

## 62、Spring Boot 应用如何优雅关闭？

Spring Boot 2.3 有个新特性叫：**Graceful shutdown(优雅关闭)**

之前也分享过这样的文章，现在竟然出品官方姿势了，新功能嘛，肯定得去官方看下，下面是官方的说明：

> Graceful shutdown is supported with all four embedded web servers (Jetty, Reactor Netty, Tomcat, and Undertow) and with both reactive and Servlet-based web applications. When a grace period is configured,upon shutdown, the web server will no longer permit new requests and will wait for up to the grace period for active requests to complete.

优雅关闭支持所有 4 个嵌入式 Web 服务器：Jetty, Reactor Netty, Tomcat, Undertow，以及响应式的和基于 Servlet 的 Web 应用程序。

当配置了一个优雅关闭的缓冲时间，直到应用程序关闭时，Web 服务器都不再允许接收新的请求，缓冲时间是为了等待目前所有进行中的活动请求处理完成。

需要说明的是，Tomcat、Jetty 在网络层会立即停止接收请求，而 Undertow 可以继续接收请求，但会立即返回 503 服务不可用错误。

> 注意：Tomcat 生效版本需要：9.0.33+

##### 怎么开启优雅关闭？

---

下面是 Yaml 文件的配置示例：

![](/images/Spring Boot/62_1.jpg)

##### 源码分析

---

上面介绍了优雅关闭参数的配置方式，下面我们通过源码来看下默认的配置是什么。

##### 先看第一个参数配置接收类：

> org.springframework.boot.autoconfigure.web.ServerProperties

![](/images/Spring Boot/62_2.jpg)

![](/images/Spring Boot/62_3.jpg)

如源码所示，默认为：`IMMEDIATE`，所以优雅关闭是大家根据业务需要手动开启的。

##### 再来看第二个参数配置接收类：

> org.springframework.boot.autoconfigure.context.LifecycleProperties

![](/images/Spring Boot/62_4.jpg)

如源码所示，默认缓冲时间为：**30**秒。

##### 再看下优雅关闭的源码：

![](/images/Spring Boot/62_5.jpg)

根据`Graceful`可以找到几个相关的类，我们进入 Tomcat 的：

> org.springframework.boot.web.embedded.tomcat.GracefulShutdown

![](/images/Spring Boot/62_6.jpg)

![](/images/Spring Boot/62_7.jpg)

`REQUESTS_ACTIVE`说的是在缓冲期结束前连接保持活动状态，也就是虽然官方默认给你 3O 秒的缓存时间来处理囤积请求，如果 30 秒之后还没处理完成，最后 Spring Boot 也会强制关闭应用。

所以需要注意的是，优雅关闭时一定要考虑当时的业务处理量，所设置的缓冲时间是否能处理完正在处理中的业务。

## 63、Spring Boot 3.0 了解多少？

Spring Boot 3.0 这是一个重大的主版本更新，距离上一代的 Spring Boot 2.0 的发布已经过去 4 年多了，SpringBoot 3.0 也是第一个支持 Spring 6.0+ 和 GraalVM 的 Spring Boot 正式版本。

#### SpringBoot3.0 重大新特性

---

时隔四年多，Spring Boot 3.0 这是一个断崖式的版本更新，这四年多的时间，技术日新月异，无疑更新了太多的特性，也修复了海量的 bug 的性能提升，今天 R 哥就聊聊 Spring Boot 3.0 的几个重大新特性。

##### 1、最低环境要求

Spring Boot 3.0 最低要求 Java 17，并向上兼容支持 Java 19。

另外，Spring Boot 3.0 已将所有底层依赖项从 Java EE 迁移到了 Jakarta EE APl，基于 Jakarta EE 9 并尽可能地兼容 Jakarta EE 10。因为早在几年前 Java EE 已经正式更名为 Jakarta，所以，所有相关的名称都变了，包括包名，所以使用了 Java EE 的应用改动也不小。

##### 2、大量依赖升级

Spring Boot 3.0 最低支持的 Spring 框架也变成了 Spring 6.0.2+，虽然是框架自动集成依赖的，但需要注意这点，因为 Spring 6.0 也有不少的底层升级。

除此之外，Spring Boot 管理的大量第三方的技术依赖也有大幅度的的升级。

##### 3、支持 GraalVM 原生镜像

> GraalIVM 是 Oracle 在 2018 年发布的一个全新的通用全栈虚拟机，并具有高性能、跨语言交互等逆天特性 不仅支持了 Java、Scala、Groovy、Kotlin 等基于 JVM 的语言，以及 C、C++等基于 LLVM 的语言，还支持其他像 JavaScript、Ruby、Python 和 R 语言等。

Spring Boot 3.0 应用现在可以支持转换为 GraalVM 原生镜像了，这可以提供显著的内存和启动性能改进，能支持 GraalVM 原生镜像也是整个 Spring 产品组合中的一项重大能力的提升。

> Spring Boot 3.0 最低支持 Graal 22.3+ 和 Native Build Tools Plugin 0.9.17+。

Spring Boot 3.0 支持 GraalVM 原生镜像后，它甚至取代了实验性的 Spring Native 项目：

![](/images/Spring Boot/63.jpg)

##### 4、提高应用可观察性

Spring Boot 3.0 通过 Micrometer 和 Micrometer 追踪提高应用可观察性，支持集成 Micrometer 1.10+，引 I 入了的全新的可观察 API 并自动配置 Micrometer 追踪，包括对 Brave、OpenTelemetry、Zipkin 和 Wavefront 组件的支持。

使用 Micrometer 可观察 APl 时，完成观察后，可将观察数据主动报告给 Zipkin 等组件，并支持自定义追踪参数配置，这个新特性可以更好地帮助我们了解并监控应用的健康状况。

等等..

## 64、Spring Boot 中的 mvnw 是什么？

如图所示：

![](/images/Spring Boot/64.jpg)

如上图所示，在生成的 Demo 项目中，除了常规的项目文件，还有两个特殊的脚本文件：

- mvnw (Linux 版本)
- mvnw.cmd (Windows 版本)

它们是干什么用的？

---

mvnw，全称为：Maven Wrapper，是 apache-mvnd 项目的一个脚本。使用 mvnw 可以快速将 Maven 集成到项目中，即不用自己安装 Maven，帮助快速使用 Maven。

##### 它的作用有两点：

- 想省心，不想自己安装配置 Maven 环境；
- 已有的 Maven 版本不合适，需要使用特定的 Maven 版本；

##### 比如运行项目清理安装命令：

> ./mvnw clean install

就像直接使用 mvn 命令一样，mvnw 只是包了一层而已，底层还是 mvn。

## 65、.Spring Boot CLl 是什么？

Spring Boot CLl 全称即:Spring Boot Command-Line Interface，是一个构造 Spring Boot 项目命令行工具，可用于从 start.spring.io 网站构建新项目或用来密码加密。

它可以运行 Groovy 脚本，它也是 JVM 系语言，拥有和 Java 类似的语法，但它比 Java 要无比简洁，无需太多冗余的项目结构配置代码，从而可以快速构建项目。

Spring Boot 并不一定需要 Spring Boot CLl，但有了 Spring Boot CLl，可以在无需 IDE 的情况下快速启动基于 Spring 的应用程序。

## 66、Spring Boot 版本升级怎么做配置迁移？

在升级 Spring Boot 新版本时，某些配置参数可能已经被改名或者删除了，Spring Boot 提供了一个配置迁移依赖方便开发者快速进行配置迁移，如下面所示：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-properties-migrator</artifactId>
    <scope>runtime</scope>
</dependency>
```

在应用中加入此依赖，就可以分析应用程序的环境并在启动时打印诊断信息，并且可以在运行时进行临时的配置迁移。

下面用一个 SpringBoot 3.0 中的一个变更参数测试了下，效果如下所示：

![](/images/Spring Boot/66.jpg)

Spring Boot 会在启动日志中打印需要替换的 l 日的配置参数和新的配置参数，然后替换后再重试启动测试即可。
