## 1、Spring 框架是什么？

Spring 框架是一个开源的 Java EE 框架，它是目前最流行的企业级开发框架之一。

Spring 框架是由 Rod Johnson 于 2002 年创建的，皆在提供一种简单、灵活、易于扩展的开发模式，帮助开发人员快速搭建企业级应用。

Spring 使用基本的 Java Bean 来完成以前只可能由 EJB 完成的事情，Spring 的用途不仅限于服务器端的开发，从简单性、可测试性和松耦合的角度而言，任何 Java 应用都可以从 Spring 中受益。

## 2、Spring 常用的注解有哪些？

Spring 中常用的注解如下表所示：

| 注解              | 作用                                                        |
| ----------------- | ----------------------------------------------------------- |
| @Autowired        | 自动装配 Bean 对象，可以用在字段、方法和构造函数上。        |
| @Component        | 将类定义为 Spring Bean，并由 Spring 托管。                  |
| @Controller       | 声明类为 Spring MVC 控制器。                                |
| @Service          | 声明类为业务逻辑组件。                                      |
| @Repository       | 声明类为数据访问组件。                                      |
| @Configuration    | 声明类为 Spring 配置类，用于定义 Bean。                     |
| @Bean             | 在 Spring 配置类中定义 Bean。                               |
| @Value            | 注入属性值或外部配置文件中的值。                            |
| @Qualifier        | 当存在多个相同类型的 Bean 时，使用该注解指定要注入的 Bean。 |
| @Scope            | 指定 Bean 的作用域。                                        |
| @PostConstruct    | 在 Bean 的初始化方法中执行。                                |
| @PreDestroy       | 在 Bean 的销毁方法中执行。                                  |
| @RequestMapping   | 映射 URL 到控制器方法。                                     |
| @PathVariable     | 将 URL 中的占位符映射到方法参数中。                         |
| @RequestParam     | 将自定义的请求参数映射到方法参数中。                        |
| @ResponseBody     | 在 HTTP Body 中输出数据。                                   |
| @ExceptionHandler | 定义异常处理方法。                                          |

等等。。。

## 3、Spring 框架的好处有哪些？

Spring 框架的优点如下：

##### 1、轻量级

Spring 框架设计得非常轻量，而且模块化的设计方式让开发人员可以根据自己的需求选择需要的模块，避免了不必要的冗余和复杂性。

##### 2、IOC 容器

Spring 框架通过 IOC 容器管理 Bean，可以将 Bean 的创建和依赖关系的管理交由 Spring 容器负责，从而简化了开发人员的工作。

##### 3、面向切面编程（AOP）

Spring 框架提供了 AOP 支持，可以在程序运行期间动态地对方法进行增强，实现了横切关注点的解耦，从而提高了代码的可维护性和可扩展性。

##### 4、事务管理

Spring 框架提供了强大的事务管理支持，可以通过声明式事务管理和编程式事务管理来实现，让开发人员可以轻松地管理事务。

##### 5、高度集成性

Spring 框架可以与其他框架无缝集成，例如 Struts、Hibernate、MyBatis 等，让开发人员可以更加方便地使用这些框架，提高开发效率和应用程序的可扩展性。

##### 6、松耦合

Spring 框架采用松耦合的设计方式，使得应用程序中的各个模块可以独立开发、测试和部署，提高了系统的可维护性和可扩展性。

##### 7、易于测试

Spring 框架采用面向接口的编程方式，可以很方便地进行单元测试和集成测试，提高了测试的效率和质量。

## 4、Spring 由哪些主要模块组成？

Spring 框架是一个轻量级的集成式开发框架，可以和任何一种框架集成在一起使用，可以说是一个大的全家桶。

Spring 从 1.x 发展到现在的 6.x 可以说是越来越强大，下面来看看 Spring 都包含哪些核心的模块吧。

![](/images/Spring/4.jpg)

Spring 框架由多个模块组成，每个模块都提供了不同的功能，开发人员可以根据自己的需要选择使用。

##### 以下是 Spring 框架的主要模块：

##### 1、Spring Core：

Spring Core 模块时 Spring 框架的核心，提供了 IOC（Inversion of Control，控制反转）和 DI（Dependency Injection，依赖注入）功能。

Spring Core 可以将 Bean 的创建和依赖关系的管理交由 Spring 容器负责，从而简化了开发工作。

##### 2、Spring AOP：

Spring AOP（Aspect-Orented Programming，面向切面编程）模块时 Spring 框架的 AOP 实现，提供了面向编程的支持，让开发人员可以将与业务逻辑无关的横切关注点进行封装和复用，从而提高了代码的可维护性和扩展性。

##### 3、Spring MVC：

Spring MVC 模块是 Spring 框架的 Web 框架，提供了基于 MVC 设计模式的支持，让开发人员可以轻松地开发 Web 应用程序。

##### 4、Spring DAO：

Spring DAO（Data Access Object，数据访问对象）模块是 Spring 框架的数据访问模块，提供了对 JDBC、ORM（Object-Relational Mapping，对象关系映射）等技术的支持，让开发人员可以方便地进行数据访问。

**5、Spring ORM：**

Spring ORM 模块是 Spring 框架地 ORM 模块，提供了对 Hibernate、JPA（Java Persistence API）、MyBatis 等 ORM 框架的支持，让开发人员可以方便地进行对象关系映射操作。

##### 6、Spring Test：

Spring Test 模块是 Spring 框架的测试模块，提供了对 JUnit、TestNG 等测试框架的支持，让开发人员可以方便地进行单元测试和集成测试。

除了以上主要模块外，Spring 还提供了很多其他的模块，例如 Spring Security（安全模块）、Spring Integration（集成模块）、Spring Batch（批处理模块）等，大家可以根据具体的需求选择需要的模块。

## 5、Spring IOC 容器是什么？

##### Spring IOC（Inversion of Control）即控制反转：

指的是将创建对象的控制权进行转移，由 Spring IOC 进行负责创建对象，装配对象，配置对象，管理对象（通过依赖注入 DI）之间的依赖关系，并且管理这些对象的整个生命周期。

## 6、Spring IOC 的好处有哪些？

使用 IOC 的一些好处如下：

##### （1）降低组件之间的耦合度

Spring IOC 通过将组件之间的依赖关系交给容器管理，从而减少组件之间的耦合度，是的组件更加独立、可重用和可维护。

##### （2）管理对象的生命周期

Spring IOC 容器负责管理应用中的对象生命周期，包括对象的创建、初始化、销毁等过程，使得对象的生命周期更加可控，也更加符合业务需求。

##### （3）提高代码的可测试性

通过 Spring IOC，我们可以轻松地将对象替换成 Mock 对象或者其他测试用的对象，从而提高了代码的可测试性。

##### （4）提高代码的可维护性

Spring IOC 使得应用程序的组件之间的依赖关系变得清楚明了，容易理解和维护，降低了代码的复杂度。

##### （5）方便实现切面编程

Spring AOP 基于 Spring IOC 实现，使得切面逻辑可以很方便的插入到应用程序中的各个位置，从而实现代码的解耦和功能的复用。

## 7、Spring 中的 BeanFactory 是什么？

BeanFactory 是 Spring 框架中最基本的接口，也是 Spring 容器的底层接口之一，负责管理 Bean 的生命周期、配置元信息、依赖关系、AOP、事件等，它是 Spring 的核心组件之一。

##### BeanFactory 的主要作用如下：

- 加载 Bean 的定义文件，并创建 Bean 实例；
- 负责 Bean 的生命周期，包括初始化、装配、销毁等操作；
- 实现依赖注入和 AOP 等高级功能；
- 提供基础的事件和异常处理机制；

## 8、Spring 中的 ApplicationContext 是什么？

Spring 中的 ApplicationContext 是 Spring 框架的核心容器，是管理 Bean 的高级容器。他可以读取配置文件、管理 Bean 的生命周期、装配 Bean 之间的关系，并提供了许多企业级应用所需要的服务，如 JNDI、EJB 集成、远程访问等。

ApplicationContext 提供了许多高级特性，如：事件传播、国际化支持、Bean 生命周期的控制等。

##### 具体定义可以参考官网定义：

> The `ApplicationContext` is the central interface within a Spring application for providing configurationinformation to the application. It is read-only at run time, but can be reloaded if necessary and supported by the application. A number of classes implement the `ApplicationContext` interface, allowing for a variety of configuration options and types of applications.

The `ApplicationContext` provides:

- Bean factory methods for accessing application components.
- The ability to load file resources in a generic fashion.
- The ability to publish events to registered listeners.
- The ability to resolve messages to support internationalization.
- Inheritance from a parent context.

## 9、Spring 常用的 ApplicationContext 有哪些？

Spring 中常用的 ApplicationContext 有以下几种：

| ApplicationContext                 | 描述                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------ |
| ClassPathXmlApplicationContext     | 从类路径下的 XML 文件中加载上下文                                                    |
| FileSystemXmlApplicationCOntext    | 从文件系统中的 XML 文件中加载上下文                                                  |
| AnnotationConfigApplicationContext | 根据注解创建上下文                                                                   |
| WebApplicationContext              | 用于 Web 应用程序的上下文                                                            |
| XmlWebApplicationContext           | 用于 Web 应用程序的 XML 上下文                                                       |
| StaticApplicationContext           | 不依赖于外部资源的 ApplicationContext 实现                                           |
| GenericApplicationContext          | 可以集成任何 BeanFactory 或 ApplicationContext 实现                                  |
| GenericXmlApplicationContext       | 从 XML 你文件中加载上下文定义，并可以集成任何 BeanFactory 或 ApplicationContext 实现 |

。。。

## 10、Spring 中的 BeanFactory 和 ApplicationContext 的区别？

BeanFactory 和 ApplicationContext 都是 Spring 容器的核心接口，但是在实现和功能上有所不同同。

- BeanFactory 是 Spring 的基础 Bean 工厂，是 Spring 框架中最基本的接口，提供了最简单的容器的实现，是 Spring 框架的底层容器，负责创建 Bean、装配 Bean、管理 Bean 的生命周期等基本功能。
- ApplicationContext 是 BeanFactory 的子接口，提供了更多的企业级功能，如：国际化支持、Bean 生命周期控制、事件传播、AOP 等高级功能。在加载配置文件时，ApplicationContext 会预先实例化所有单例 Bean，提供更快的访问和响应速度。

与 ApplicationContext 相比，BeanFactory 是一种更加基础的容器实现，它提供了最基本的 IOC 功能，而 ApplicationContext 则提供了更多的企业级高级功能。

| BeanFactory                | ApplicationContext       |
| -------------------------- | ------------------------ |
| 它使用懒加载               | 它使用即时加载           |
| 它使用语法显示提供资源对象 | 它自己创建和管理资源对象 |
| 不支持国际化               | 支持国际化               |
| 不支持基于依赖的注解       | 支持基于依赖的注解       |

## 11、Spring 获取 ApplicationContext 的方法？

##### 1、直接注入

```java
@Resource
private ApplicationContext ctx;
```

##### 2、实现 ApplicationContextAware 接口（推荐）

```java
@Component
public class SpringContextHolder implements ApplicationContextAware {
    public static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) {
        SpringContextHtolder.applicationContext = applicationContext;
    }

    public static Object getBean(String beanName) {
        return (Object) applicationContext.getBean(beanName);
    }
}
```

##### 3、继承 WebApplicationObjectSupport、ApplicationObjectSupport

继承加强耦合性，不推荐。

##### 4、WebApplicationContextUtils 工具类

```java
ApplicationContext ctx = WebApplicationContextUtils.getWebApplicationContext(request.getSession().getServletContext());
```

##### 5、从当前线程绑定获取

```java
ApplicationContext ctx = ContextLoader.getCurrentWebApplicationContext();
```

## 12、Spring 依赖注入是什么？

##### Spring（Dependency Injection，DI）即依赖注入：

它即不用自己手动创建对象、设置对象的关系，这一切都由 Spring IOC 完成对象创建及 Spring DI 完成依赖注入管理，从而达到对象的构建、组装和管理的目的。

依赖注入可以帮助开发人员将应用程序的配置和业务逻辑分离，从而使得应用程序更加灵活、易于扩展和维护。通过将对象之间的依赖关系交付给 Spring 容器管理，可以使得对象的创建和销毁、属性的设置、以及对象之间的协作变得更加简单和自动化。

## 13、Spring 依赖注入有哪几种方式？

在 Spring 中，依赖注入有以下几种方式：

##### （1）构造器注入

通过构造函数进行依赖注入，通过构造函数来初始化对象，构造函数的参数就是需要注入的依赖对象。

##### （2）Setter 方法注入

通过 Setter 方法进行依赖注入，Spring 容器在实例化 Bean 后，会调用对应的 Setter 方法为属性赋值。

##### （3）字段注入

通过相关注解或 XML 配置文件将依赖注入到类的字段中，在字段上添加注解或 XML 配置文件中进行配置即可。

## 14、Spring 可以注入 null 和空字符串吗？

可以的，比如在使用@Autowired 注解注入的时候，可以通过 required 参数指定要注入的对象不一定必须存在。

```java
@Autowired(required = false)
private User user;
```

默认为 true，表示注入的对象不能为空，否则抛出异常。

> 这个开关只是控制是否可为 null，那么空字符串肯定是可以的。

## 15、Spring Bean 支持哪几种作用域？

Spring Bean 支持的几种作用域：

| 作用域                | 描述                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------- |
| **singleton（默认）** | 单例作用域，每个 IOC 容器中只存在一个实例。                                                  |
| prototype             | 多例作用域，每次请求都会创建一个新的实例。                                                   |
| request               | 请求作用域，每次 HTTP 请求都会创建一个新的实例， 该实例仅在当前 HTTP 请求内有效。            |
| session               | 会话作用域，每次 HTTP 会话后会创建一个新的实例，该实例仅在当前 HTTP 会话内有效。             |
| application           | 应用作用域，每个 Web 应用程序都有一个唯一的实例，该势力在整个 Web 应用程序的生命周期内有效。 |

## 16、Spring Bean 生命周期是怎样的？

Spring Bean 容器的生命周期如下：

1、Spring 容器根据配置中的 Bean 定义中实例化 Bean。

2、Spring 使用依赖注入填充所有属性，如 Bean 中所定义的配置。

3、如果 Bean 实现 BeanNameAware 接口，则工厂通过传递 Bean 的 ID 来调用 setBeanName()。

4、如果 Bean 实现 BeanFactoryAware 接口，工厂通过传递自身的实例来调用 setBeanFactory()。

5、如果存在与 Bean 关联的任何 BeanPostProcessors，则调用 postProcessBeforeInitialization 方法。

6、如果为 Bean 指定了 init 方法，那么将调用它。

7、如果存在与 Bean 关联的任何 BeanPostProcessors，则将调用 postProcessAfterInitialzation()方法。

8、如果 Bean 实现 DisposableBean 接口，当 Spring 容器关闭时，会调用 destroy()。

9、如果为 Bean 指定了 destroy 方法（的 destroy-method 属性），那么将调用它。

## 17、Spring Bean 默认是单例还是多例？

Spring Bean 默认是单例的，即每次从容器中获取该 Bean 时，都会返回同一个实例。

> 如果需要每次获取该 Bean 时都返回一个新的实例，可以将该 Bean 的作用域设置为 prototype。

## 18、Spring Bean 为什么默认为单例？

##### 主要有以下几个原因：

（1）减少对象的创建和销毁；从而提高应用程序的性能，也能降低资源消耗；

（2）可以确保对象状态的一致性和可控性；

## 19、Spring Bean 怎么配置为多例模式？

在 Spring 中，默认情况下，**Bean 是单例模式**，即每个 Bean 只会被创建一次并保存在容器中。如果需要将 Bean 配置为多例模式，可以使用**@Scope**注解来实现：

```java
@Bean
@Scope("prototype")
public User user() {
    return new User();
}
```

或者也可以直接定义在类上：

```java
@Component
@Scope("prototype")
public class User {
    ...
}
```

## 20、Spring Bean 是线程安全的吗？

Spring Bean 不是线程安全的，因为 Spring Bean 是默认单例的，即在整个应用程序中只有一个 Bean 实例，如果多线程同时使用一个 Bean 实例，就可能产生线程安全问题。

为了确保多线程安全，需要采用一些技术手段来保护 Bean 实例，例如：

- 使用线程安全的数据结构；
- 使用 synchronized 关键字；
- ...

## 21、Spring Bean 怎么设置为默认 Bean？

可以在定义@Bean 的方法上，或者@Component 组件的类上加上@Primary 注解，表示是主要的 bean，即默认 bean，这样在使用@Autowired 注解按类型注入时，如果出现多个相同类型的 Bean 注入时不会报错。

使用示例如下：

```java
@Primary
@Bean
public User user1 {
    return new User();
}

@Bean
public User user2 {
    return new User();
}
```

## 22、Spring 怎么防止相同类型 Bean 注入异常？

> 当有多个相同类型的 Bean 可以注入时，Spring 默认使用**byType**自动装配机制，如果存在多个符合条件的 Bean，则会抛出**NoUniqueBeanDefinitionException**异常。

##### 为了避免这种情况，可以使用以下方法：

1、使用@Autowired 注解时，需要结合@Qualifier 注解指定名称；

2、使用@Primary 注解设置一个主要（默认）Bean。

3、使用@Resource 注解代替@Autowired，它可以单独指定 Bean 的 class、名称。

## 23、Spring 如何在 Bean 初始化时进行操作？

##### 1、@PostConstruct 注解

通过 Java 提供的@PostConstruct 注解：

```java
public class User {
    @PostConstruct
    public void init() {
        ...
    }
}
```

##### 2、InitializingBean 接口

通过实现 Spring 提供的 InitializingBean 接口，并重写其 afterPropertiesSet 方法：

```java
public class User implements InitializingBean {
    ...

        @Override
        public void afterPropertiesSet() throws Exception {
        ...
    }
}
```

##### 3、initMethod 方法

##### 通过在 Bean 配置上指定 initMethod 方法：

```java
@Bean(initMethod = "init")
public User user() {
    return new User();
}
```

初始化顺序是：

> 类构造器 > @PostConstruct > InitializingBean > initMethod

## 24、Spring 如何在 Bean 销毁时进行操作？

##### 1、@PreDestroy 注解

通过 Java 提供的@PreDestroy 注解：

```java
public class User {
    @ProDestroy
    public void destroy() {
        ...
    }
}
```

##### 2、DisposableBean 接口

通过实现 Spring 提供的 DisposableBean 接口，并重写其 destroy 方法；

```java
public class User implements DisposableBean {
    ...
        @Override
        public void destroy() throws Exception {
        ...
    }
}
```

##### 3、destroyMethod 方法

通过在 Bean 配置上指定 destroyMethod 方法：

```java
@Bean(destroyMethod = "destroy")
public User user() {
    return new User();
}
```

---

##### 销毁顺序是：

> @PreDestroy > DisposableBean > destroyMethod

## 25、Spring 中@Component、@Service、@Repository、@Controller 的区别？

在 Spring 中，@Component、@Service、@Repostory、@Controller 注解都用于标记类，表明这些类的作用和用途。

它们的作用和区别如下：

##### @Component 注解

@Component 是最普通的 Spring 组件，可以标记任何类为 Spring 组件，它将被 Spring 自动扫描并注册为 Bean。

##### @Service 注解

@Service 用于标记业务逻辑组件，用于实现应用程序的业务逻辑，它将被 Spring 自动扫描并注册为 Bean。

##### @Repository 注解

@Repository 用于标记数据访问组件，如 DAO 类，它将被 Spring 自动扫描并注册为 Bean，并且会转换 DAO 类中的异常，是它们成为 Spring DataAccessException 层次结构的一部分。

##### @Controller 注解

@Controller 用于标记 Spring MVC 控制器，用于处理 HTTP 请求和响应。

> **@Service、@Repository、@Controller**这三个注解其实上是**@Component**注解的一个变种，它组合了**@Component**注解，可用于标识不同的 MVC 层或者实现更多的功能。

## 26、Spring 中的@Bean 与@Component 注解的区别？

@Bean 用在方法上，用于手动创建一个实例，@Component 用于类上，用于自动扫描自动生成一个实例。

@Bean 注解使用示例：

```java
@Bean
public User user() {
    User user = new User();
    ...
        return user;
}
```

@Component 注解使用示例：

```java
@Component
public class User {
    ...
}
```

@Bean 手动创建方式更灵活，这两个注解一般都会结合使用。

## 27、Spring 中的@Bean 与@Component 注解用在同一个类上，会怎么样？容器中有几个 Bean？

正常情况下，Spring 容器里面只可能有一个唯一名字的 Bean 的，如果名字相同的情况下，就要看下面这个参数决定了。

在 Spring Boot 中可以通过以下参数控制是否覆盖：

> spring.main.allow-bean-definition-overriding=true

即是否允许 Bean 覆盖，不允许情况下会抛出异常，如果允许，则谁覆盖谁要看 Spring 容器 Bean 的初始化的顺序了。

##### 默认为 true，即允许覆盖，容器中只有一个 Bean。

## 28、Spring 中的@Autowired 注解有什么用？

Spring 中的@Autowired 注解可以用于自动装配 Bean，当在一个对象中声明了一个字段、方法或构造函数时，使用@Autowired 注解，可以让 Spring 容器自动将符合条件的 Bean 注入到指定的对象中。

## 29、Spring 中的@Autowired 注解都有哪些用法？

> @Autowired 注解可以用于方法、构造函数和属性的注入，具体使用方式如下。

##### 1、@Autowired 自动装配属性

```java
@Service
public class UserService {
    // 自动装配 UserDao 类型的 Bean
    @Autowired
    private UserDao userDao;

    // ...
}
```

##### 2、@Autowired 自动装配构造函数

```java
@Service
public class UserService {

    private UserDao userDao;

    // 自动装配 UserDao 类型的 Bean
    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    // ...
}
```

##### 3、@Autowired 自动装配方法

```java
@Service
public class UserService {

    private UserDao userDao;

    // 自动装配 UserDao 类型的 Bean
    @Autowired
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    // ...
}
```

## 30、Spring 中的@Autowired 注解默认按什么方式装配？

@Autowired 注解默认按**byType**自动装配机制，即根据“**类型**”来自动装配 Bean。

如果有多个符合条件的 Bean，默认按类型装配就会产生冲突，从而抛出**NoUniqueBeanDefinitionException**异常，此时，可以使用**@Qualifier**注解指定需要注入的 Bean 的名称，或使用**@Primary**注解制定一个首要、默认的 Bean。

## 31、Spring 中的@Autowired 注入 request 线程安全吗？

Spring 中的@Autowired 注入 request 是线程安全的，包括注入 response、session 对象。

这是因为 Spring 并不是真正注入一个 request 对象，而是注入了一个代理对象，当真正需要使用 request 对象时通过该代理对象获取真正的 request 对象。

## 32、Spring 中使用@Resource、@Autowired、@Inject 的区别？

@Resource、@Autowired、@Inject 都是用来注入 Bean 的，他们来源于不同的程序中。

| 注解       | 包                               | 来源         |
| ---------- | -------------------------------- | ------------ |
| @Resource  | javax.annotation                 | Java JSR-250 |
| @Inject    | javax.inject                     | Java JSR-330 |
| @Autowired | org.springframework.bean.factory | Spring 2.5+  |

JSR 是 Java Specification Requests 的缩写，意思是 Java 规范提案，是指向 JCP（Java COmmunity Process）提出新增一个标准化技术规范的正是请求，JSR 已成为 Java 界的一个重要标准。

##### 三者的区别

##### @Resource

它有两个关键的属性：name-名称，type-类型

1、如果指定了 name、type，则从 Spring 容器中找一个名称和类型相对应的一个 bean，找不到则报错。

2、如果只指定了 name，则从 Spring 容器中找一个名称和 name 一样的 bean，找不到则报错。

3、如果只指定了 type，则从 Spring 容器中找一个类型和 type 一样的 bean，找不到或者找到多个则报错。

4、如果没有指定参数，则默认找字段名称装配，找到则按类型装配，找不到则报错。

##### @Autowired

默认按类型装配，找不到或者找到多个则报错。如果要按名称装配，需要结合 Spring 另外一个注解**Quailfier("name")**使用。

默认必须装配 requred=true，如果可以为空，可以设置为 false，在 Spring4+结合 jdk8+的情况下还可以使用 Optional 和 flase 同等的效果，如：

```java
@Autowired
private Optional<UserService> userService;
```

##### @Inject

和@Autowired 类似，可以完全代替@Autowired，但这个没有 required 属性，要求 Bean 必须存在。

如果要按名称装配，需要结合 javax 另外一个注解**Named("name")**使用。

## 33、Spring 为什么不推荐使用@Autowired 字段注入？应该怎么使用？

比如，在 Controller 层使用`@Autowired`注入一个字段；

```java
@Autowired
private OrderService orderService;
```

这样写在 IDEA 中就会给出警告提示：

![](/images/Spring/33.jpg)

警告提示：

> Field injection is not recommended
>
> 即使用`@Autowired`字段注入是不推荐的。

##### 为什么不推荐`@Autowired`字段注入？

主要有以下几个原因：

1、如果要注入的 Bean 不存在，默认会抛出空指针异常。

2、final 类型的字段一般是在其定义时或者在类构造器中进入初始化，所以`@Autowired`不能注入 final 类型的字段。

3、随意使用`@Autowired`注入字段，类的耦合性太强了，大概率会违反类的单一职责原则。

4、随意使用`@Autowired`注入字段，当两个或多个类相互依赖时，就会发生循环依赖问题。

...

---

基于以上原因，一般推荐使用类的构造器或者 setters 方法进行注入。

##### 构造器注入：

```java
private final OrderService orderService;

@RequiredArgsConstructor
@Controller
public class CheckoutController {
    ...
}
```

将成员变量定义 final，可以在类上使用 Lombok 的`@RequireArgsConstructor`注解自动生成构造器，无需自己生成。

##### setters 方法注入：

```java
private OrderService orderService;

@Autowired
public void setOrderService(OrderService orderService) {
    this.orderService = orderService;
}
```

如果还想基于字段注入，又不想被 IDEA 警告提示，可以在 IDEA 中设置关闭警告，或者使用 J2EE 规范的`@Resource`注解。

## 34、Spring 中的@Required 注解有什么用？

Spring 中的**@Required 注解用于标注 Bean 属性的 seter 方法，表示该属性是必须的**，否则会抛出 BeanInitializationException 异常。

使用@Required 注解可以让 Spring 在装配 Bean 的过程中检查是否正确配置了属性，确保 Bean 被正确初始化，从而在运行期间避免出现未初始化的属性而导致程序出错。

> 需要注意的是：
>
> @Required 注解只能用于 setter 方法上，而不能用于字段或构造函数。

使用示例：

```java
public class User {

    private String name;

    // 使用@Required注解标注setter方法
    @Required
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
```

## 35、Spring 中的@Qualifier 注解有什么用？

Spring 中的**@Qualifier 注解是一种限定符注解**，用于限定在 Spring 容器中存在多个同类型的 Bean 时，指定需要注入哪一个 Bean。

@Qualifier 注解通常与@Autowired 注解一起使用，当多个 Bean 的类型相同或者有相同的父类或接口时，可以通过@Qualifier 注解来指定需要注入的 Bean，防止系统启动出错。

比如下面的代码：

```java
@Service
public class UserService {

    @Qualifier("userDao1")
    @Autowired
    private UserDao userDao1;
    // ...
}
```

在上面的代码中， @Autowired 注解默认按类型装配，如果有多个相同类型的 Bean 时，通过@Qualifier 指定需要注入名称为“userDao1”的 Bean。

## 36、Spring 怎么注入 Java 集合类型？

在 Spring 中注入 Java 集合类型，可以通过@Autowired 和@Qualifier 注解实现。

如下面的注入 List 命令示例：

```java
@Component
public class Test {
    @Autowired
    @Qualifier("userList")
    private List<String> userList;

    // ...
}


@Configuration
public class AppConfig {
    @Bean
    @Qualifier("userList")
    public List<String> userList() {
        return Arrays.asList("Jack", "Tom", "Sunny");
    }
}
```

## 37、Spring 中的 Bean 有多个实现类，怎么指定注入？

假如`UserService`接口有以下两个实现类：

- UserServiceImpl
- UserServiceSpecImpl

```java
public interface UserService {
    ...
}

@Service("userServiceImpl")
public class UserServiceImpl implements UserService {
    ...
}

@Service("userServiceSpecImpl")
public class UserServiceSpecImpl implements UserService {
    ...
}
```

比如，要指定注入第二个实现类 UserServiceSpecImpl，可以有以下几种方法：

1、在成员变量上使用`@Autowired + @Qualifier("userServiceSpecImpl")`来指定注入，这里指定的是实现类 Bean 的名称。

2、在成员变量上使用`@Resource(type = UserServiceSpecImpl.class)`来指定注入，这里指定的是实现类的 class 类。

3、在成员变量上使用`@Resource(name = "userServiceSpecImpl")`来指定注入，这里指定的是实现类 Bean 的名称。

4、如果要指定某个 Bean 为默认的，可以在`@service`实现类上组合使用`@Primary`注解修饰，然后使用`@Autowired`注入即可。

## 38、Spring 装配是指什么？

在 Spring 中，装配指的是**将各个组件（Bean）之间的依赖关系建立起来**，使得这些组件可以相互协作，实现应用程序的功能。装配的目的是将应用程序中的组件组装成一个完整的应用程序，并使它们之间可以协作工作，实现业务逻辑。

## 39、Spring 自动装配有哪些方式？

Spring 主要有以下 3 种自动装配方式：

##### 1）根据类型自动装配(byType)

Spring 将自动按照 Bean 的类型进行自动装配。

##### 2）根据名称自动装配(byName)

Spring 将自动按照 Bean 的名称进行自动装配。

##### 3）构造函数自动装配(Constructor)

Spring 将自动按照构造函数的 Bean 类型进行自动装配。

## 40、Spring 自动装配有什么局限性？

Spring 自动装配方便依赖注入，但它也存在一些局限性：

##### 1）命名冲突

当多个 Bean 的名称相同或者相似时，自动装配可能导致命名冲突，这时需要手动指定注入的 Bean。

##### 2）类型不明确

当自动装配的属性或参数类型不明确时，自动装配可能会失败，需要手动指定注入的 Bean 或者使用更加明确的装配方式。

##### 3）混淆和不透明

使用自动装配时，有时很难看出依赖关系的来源，容易造成混淆和不透明。

##### 4）程序员失去控制

自动装配可能会导致程序员失去对依赖关系的控制，从而影响代码的可维护性和可测试性。

##### 5）可能影响性能

自动装配需要进行反射操作和类型匹配，可能会影响应用程序的性能。

## 41、Spring 循环依赖是指什么？

Spring 循环依赖是指两个或多个 Bean 相互依赖，形成一个循环引 l 用的关系。例如，Bean A 依赖 Bean B，同时 Bean B 也依赖 Bean A，这样就形成了一个循环依赖。

如下代码所示：

UserService：

```java
@service
public class Userservice {
    @Autowired
    Logservice logservice;
}
```

LogService：

```java
@service
public class Logservice {
    @Autowired
    Userservice userservice;
}
```

这两个 Bean 互相引用对方，这就是最直接循环依赖了。

## 42、Spring 允许循环依赖吗？

Spring 默认情况下是允许循环依赖的。

> ##### 需要注意的是：
>
> 循环依赖可能会导致性能和资源的浪费，因此在进行 Bean 的设计和依赖注入时，应该尽可能避免循环依赖的情况。

## 43、Spring 是如何解决循环依赖的？

循环依赖在 Spring 中是一种常见的问题，可能会导致 Bean 的初始化失败或无法注入。为了解决循环依赖的问题，Spring 引入了**三级缓存**机制，在 Bean 的初始化过程中进行处理，以确保 Bean 的正确初始化和注入。

##### 三级缓存主要包括以下三个缓存：

```java
/** cache of singleton objects: bean name to bean instance. */
private final Map<string, object> singletonobjects = new ConcurrentHashMap<>(256);
/** Cache of singleton factories: bean name to objectFactory. */
private final Map<string, objectFactory<?>> singletonFactories = new HashMap<>(16);
/** cache of early singleton objects: bean name to bean instance. */
private final Map<string, object> earlysingletonobjects = new ConcurrentHashMap<>(16);
```

##### 1、singletonObjects—级缓存

一级缓存用于存储已经实例化的 Bean，当一个 Bean 被创建完成后，它会被添加到 singletonObjects 缓存中。

> 该缓存保证了在整个容器中只存在一个实例。

##### 2、earlySingletonObjects 二级缓存

二级缓存用于存储提前暴露的 Bean 实例，即已完成实例化但未完成初始化的 Bean。当一个 Bean 在初始化过程中发现依赖了另一个已实例化但并未完成初始化的半成品 Bean 时，会将该未初始化的半成品 Bean 存储到 earlySingletonObjects 缓存中。

> 该缓存保证了在循环依赖的情况下也能完成 Bean 的初始化。

##### 3、singletonFactories 三级缓存

三级缓步用于存储 Bean 工厂，即用于存储创建的 Bean 的 FactoryBean 实例。 当容器创建一个 Bean 时，会先将该 Bean 的 ObjectFactory 存储到 singletonFactories 缓存中。

---

大概的处理流程如下：

[](/images/Spring/43.jpg)

1、当容器创建一个 Bean 时，会先将该 Bean 的 ObjectFactory 加入到 **singletonFactories** 三级缓存中，并设置一个占位符。

2、Spring 会调用该 Bean 的构造函数或工厂方法创建实例，并对实例进行依赖注入。

3、如果在依赖注入过程中，发现该 Bean 依赖另外一个未实例化的 Bean，会进入该被依赖的 Bean 的实例化流程。

4、如果被依赖的 Bean 在初始化时发现需要依赖原始 Bean，那么会从 **singletonFactories** 三级缓存中获取原始 Bean，并将原始 Bean 存储到 **earlySingletonobjects** 二级缓存中，然后用它创建实例并注入被依赖的 Bean。

5、Spring 会继续设置属性和初始化被依赖的 Bean，被依赖的 Bean 初始化完成后会将其添加到 **singletonobjects** 一级缓存中，并将其从 **earlySingletonobjects** 二级缓存和 **singletonFactories**三级缓存中移除。

6、Spring 会继续设置属性和初始化原始 Bean，当该 Bean 初始化完成后，Spring 会将其添加到 **singletonobjects** 一级缓存中，并将其从**earlySingletonObjects**二级缓存和**singletonFactories**三级缓存中移除。

## 44、Spring 怎么禁用循环依赖？

Spring 可以手动关闭循环依赖：

```java
context = new ClassPathxmlApplicationcontext(getApplicationcontextFiles(), false);
context.setAllowcircularReferences(false);
context.refresh();
```

Spring Boot 可以在配置文件中这样设置：

```properties
spring.main.allow-circular-references=false
```

这样表示 Spring 不允许循环依赖，如果检测到循环依赖，将会抛出异常。

## 45、Spring 为何需要三级缓存解决循环依赖，而不是二级缓存？

##### 二级缓存无法解决 AOP 问题

二级缓存 `earlysingletonobjects`主要用于存放早期的 Bean 引用，也就是说，这个 Bean 实例已经被创建出来了，但可能还没有完全初始化，比如还没进行依赖注入、AOP 代理封装等。

实现 AOP 功能则需要对 Bean 进行代理，当一个 Bean 被 AOP 代理后，它对外暴露的引 l 用将不再是原始的 Bean 实例，而是一个代理对象。

如果只使用二级缓存，当发生循环依赖时，Bean A 依赖 Bean B，在 Bean A 创建的过程中需要 Bean B 的引 l 用，此时 Bean B 可能还没有初始化完成，从二级缓存中获取到的将是 Bean B 的原始引用，而非代理对象。如果后续的操作需要通过代理对象来完成，就会遇到问题，因为此时无法确保获取到的是正确的代理对象。

为什么需要三级缓存

三级缓存`singletonFactories`的引 I 入，就解决了 AOP 这个问题。

三级缓存机制包括**singletonobjects、earlySingletonobjects 和 singletonFactories**三个缓存，其中既包括已经初始化好的 Bean，也包括提前暴露的 Bean 实例和 Bean 工厂。

三级缓存`singletonFactories`它存储的是一个能够生成 Bean 代理对象的工厂（ObjectFactory），这样，即使在 Bean 完全初始化（包括 AOP 代理创建）之前，我们也可以通过这个工厂来按需生成正确的代理对象。

这保证了即使在循环依赖的情况下，每次从容器中获取的都是同一个 AOP 代理对象，从而确保 AOP 相关功能的正常工作。

> 如果没有 AOP 的话，直接用二级缓存就能解决循环依赖问题。

## 46、Spring 能解决哪些形式的循环依赖？哪些不能解决？

Spring 只能通过「**三级缓存**」解决「**单例 setter 方法**」的循环依赖，其他方式的循环依赖不能解决。

不能解决的循环依赖：

##### 1、构造器注入

如果两个或多个 Bean 在构造器中互相依赖对方，Spring 容器在实例化 Bean 时就会发生死锁，因为它们都在等待对方实例化完成才能完成自己的实例化，此时会直接抛出`BeanCurrentlylnCreationException`异常。

##### 2、非单例的循环依赖

Spring 只会缓存单例 Bean，而每次获取 prototype 类型的 Bean 时都会创建一个新实例，所以这就无法使用 Spring 缓存机制来解决循环依赖的问题。

## 47、Spring AOP 是什么？

AOP，全称：Aspect Oriented Programming，中文即：**面向切面编程**。面向切面编程是一种编程范式，它作为 OOP 面向对象编程的一种补充，用于处理系统中分布于各个模块的横切关注点，比如：**事务管理、权限控制、缓存控制、日志打印**等等。

Spring AOP 是 Spring 提供的一种轻量级的 AOP 框架，可以在不改变原有代码的情况下，通过在程序运行期间，**动态地将行为织入到代码中**来实现横切关注点的功能。

Spring AOP 支持多种增强类型，包括**前置增强、后置增强、环绕增强、异常增强以及最终增强**等，Spring AOP 还提供了一些注解和工具类，可以使 AOP 的配置更加简单方便。

## 48、Spring AOP 有什么作用？

Spring AOP 的作用在于分离系统中的各种关注点，将核心关注点和横切关注点进行分离。

使用 Spring AOP 有很多好处，如：

##### 1）提供声明式事务管理

在 Spring 中，可以通过 AOP 的方式声明式地实现事务管理，将事务处理逻辑与业务逻辑分离，使代码更加简洁，同时也提高了代码的可维护性和可重用性。

##### 2）实现安全控制

通过 AOP 可以在不修改业务逻辑的情况下，实现对方法和资源的访问控制，保障应用的安全性。

##### 3）实现缓存机制

AOP 可以在方法执行前检查缓存中是否有对应的数据，如果有，则直接返回缓存中的数据，从而提高应用的性能，比如 Spring 就有提供 Cache 缓存功能。

##### 4）实现日志记录

AOP 可以将日志记录逻辑织入到业务逻辑中，方便跟踪和排查问题。

##### 5）实现性能监控

通过 AOP 可以实现性能监控，例如记录方法的执行时间、调用次数等信息，从而帮助我们分析和优化系统的性能。

## 49、SpringAOP 有哪些实现方式？

Spring AOP 有两种主要的实现方式：

##### 1）Spring AOP

这是 Spring AOP 的默认实现方式，它可以基于 JDK 动态代理或者 CGLIB 来创建代理对象，并在代理对象上织入增强逻辑。

##### 2）@AspectJ

Aspect 是一个开源、主流的 AOP 框架，它可以和 Spring AOP 集成并使用。

使用 Aspect 注解可以让 Spring AOP 支持更加灵活的切面配置，同时也能够实现 Aspect 所支持的一些高级特性，例如切点表达式的灵活性和切面织入的优先级等。

## 50、Spring AOP 和 AspectJ AOP 的区别？

Spring AOP 是 Spring 中的 AOP 实现，使用了基于 JDK（默认）和 CGLIB 的动态代理在运行时生成代理类。

Aspect 提供了全面的 AOP 解决方案，Aspect 可以在编译期、编译后、加载时织入了代理代码，即静态代理，Aspect 功能更强，因为是静态代理，所以性能更好，可以满足比 Spring AOP 更多、更复杂的 AOP 场景，在 Spring 框架中也可以集成 Aspect 框架使用 AOP 编程。

##### Spring AOP 和 Aspect 之间的关键区别：

| Spring AOP                 | AspectJ                                                |
| -------------------------- | ------------------------------------------------------ |
| 在纯 Java 中实现           | 使用 Java 编程语言的扩展实现                           |
| 只能使用运行时织入         | 支持编译时、编译后和加载时织入                         |
| 仅支持方法级编织           | 可以编织字段、方法、构造函数、静态夫、final 类和方法等 |
| 只能在由 Spring 容器中实现 | 可以在所有域对象上实现                                 |
| 仅支持方法执行切入点       | 支持所有切入点                                         |
| 代理是由目标对象创建的     | 在应用程序运行前直接在代码中进行织入                   |
| 比 Aspect 慢很多           | 更好的性能                                             |
| 易于学习和应用             | 相对于 Spring AOP 来说更复杂                           |

## 51、Spring AOP 有哪几种通知注解？

Spring AOP 集成了 Aspect，Aspect 主要有以下 5 种通知类型：

| 通知注解        | 说明                             |
| --------------- | -------------------------------- |
| @Before         | 前置通知，在方法执行之前执行     |
| @Around         | 环绕通知，围绕着方法执行         |
| @After          | 后置通知，在方法执行之后执行     |
| @AfterReturning | 返回通知，在方法返回结果之后执行 |
| @AfterThrowing  | 异常通知，在方法抛出异常之后执行 |

## 52、SpringAOP 通知注解的执行顺序是？

Spring AOP & Aspect 通知注解的执行顺序，Spring 4 和 Spring 5+版本区别很大。

##### 正常执行顺序

---

##### Spring 4.3.13：

> 1. ###### @Around 环绕通知之前
>
> 2. @Before 前置通知
>
> 3. 方法调用
>
> 4. ###### @Around 环绕通知之后
>
> 5. ###### @After 后置通知
>
> 6. @AfterReturning 返回通知

##### Spring 5.2.8+：

> 1. ###### @Around 环绕通知之前
>
> 2. @Before 前置通知
>
> 3. 方法调用
>
> 4. @AfterReturning 返回通知
>
> 5. ###### @After 后置通知
>
> 6. ###### @Around 环绕通知之后

##### 异常执行顺序

---

##### Spring 4.3.13：

> 1. ###### @Around 环绕通知之前
>
> 2. @Before 前置通知
>
> 3. ###### 方法调用 (发生异常)
>
> 4. ###### @After 后置通知
>
> 5. @AfterThrowing 异常通知

##### Spring 5.2.8+ :

> 1. ###### @Around 环绕通知之前
>
> 2. @Before 前置通知
>
> 3. ###### 方法调用 (发生异常)
>
> 4. @AfterThrowing 异常通知
>
> 5. ###### @After 后置通知

---

> 区别总结：
>
> - Spring 5.2.8+中的 **@Around** 环绕通知的逻辑包裹着 **@Before、@AfterReturing、@After** 这些通知注解。
> - 在 **@Before、@AfterReturing、@After** 这三个通知注解中，**@After** 后置通知放在了最后执行（**@AfterReturing 和@After 互换了位置**），相当于 Java 中的 **finally** 语句块。

## 53、编程：使用 SpringAOP 实现一个切面编程功能

> 有一个数字计算服务，要求使用 SpringAOP&Aspect 实现该计算服务的切面编程。

> 本示例代码基于 Spring Boot 3.x

##### 1、添加 Spring AOP 依赖：

```xml
<dependency><groupId>org.springframework.boot</groupId><artifactid>spring-boot-starter-aop</artifactid></dependency>
```

##### 2、创建计算服务接口和实现类：

```java
public interface Calcservice {
    int divide(int x, int y);
}
```

```java
@service
public class CalcserviceImpl implements Calcservice {
    @override
    public int divide(int x, int y) {
        System.out.println("===-====--= Calcservice 被调用了");
        int result = x / y;
        System.out.printin("=.= Calcservice 调用成功");
        return result;
    }
}
```

##### 3、创建一个切面类

使用 Aspect 注解定义切点和通知：

```java
@Aspect
@component
public class CalcAspect {
    @Pointcut("execution(* cn.javastack.springboot.aop.service.calcservice.*(..))")
    private void pointcut() {
    }
    @Before("pointcut()")
    public void before() {
        System.out.println("ss****泉浆**@Before 前置通知");
    }
    @After("pointcut()")
    public void after() {
        System.out.println("******** @After 后置通知");
    }
    @AfterReturning("pointcut()")
    public void afterReturning() {
        System.out.println("@AfterReturning 返回通知");
    }
    @AfterThrowing("pointcut()")
    public void afterthrowing() {
        System.out.println("********@AfterThrowing 异常通知");
    }
    @Around("pointcut()")
    public object around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        object result;
        System.out.println("环绕通知之前");
        result = proceedingJoinPoint.proceed();
        System.out.printin("环绕通知之后");return result;
    }
}
```

在切面类中，使用 @Aspect 注解标识这是一个切面类，使用 @Pointcut 注解定义切点，使用 @Before、@AfterReturning、@AfterThrowing、@After、@Around 注解定义通知。

##### 4、创建一个测试接口

写一个接口测试下：

```java
@RequiredArgsConstructor
@Restcontroller
public class Calccontroller {
    private final calcservice calcservice;

    @GetMapping("/calc/divide")
    public int divide(@RequestParam("param1") int param1,
                      @RequestParam("param2") int param2) {
        return calcservice.divide(paraml, param2);
    }
}
```

##### 访问接口（正常返回）：

> http://localhost:8080/calc/divide?param1=30&param2=3

输出结果：

> 环绕通知之前
>
> \***\*\*\*\***求@Before 前置通知
>
> =========calcservice 被调用了
>
> =========calcservice 调用成功
>
> \***\*\*\*\***@AfterReturning 返回通知
>
> \***\*\*\*\***@After 后置通知
>
> 环绕通知之后

##### 访问接口（发生异常）：

> http://localhost:8080/calc/divide?param1=30&param2=0

输出结果：

> 环绕通知之前
>
> **\*\***\*\*\***\*\***@Before 前置通知
>
> \***\*\*\*\***calcservice 被调用了
>
> \***\*\*\*\***@AfterThrowing 异常通知
>
> \***\*\*\*\***@After 后置通知
>
> 异常信息...

## 54、Spring 支持哪些事务管理类型？

Spring 提供了多种事务管理类型：

##### 1）编程式事务管理

通过编写代码来管理事务，包括事务的开启、提交、回滚等操作，需要手动控制事务的所有细节。

##### 2）声明式事务管理

通过使用 Spring AOP 和事务拦截器来管理事务，无需手动控制事务，而是通过在配置文件中声明事务的属性来实现。声明式事务管理可以使用 XML 或者注解配置。

##### 3）注解驱动事务管理

在声明式事务管理的基础上，增加了对注解的支持，即通过使用 @Transactional 注解来标记需要事务支持的方法，Spring 将自动为这些方法开启事务，并处理事务的提交、回滚等操作。

## 55、Spring 用哪种事务管理类型比较合适？

根据实际情况来选择合适的事务管理：

##### 1）对于简单的事务场景

可以使用注解驱动事务管理，使用 @Transactional 注解即可实现事务管理，简单、方便、易于维护。

##### 2）如果需要更加细粒度地控制事务

可以使用声明式事务管理，可以在配置文件中定义事务属性，提高代码的可读性和可维护性。

##### 3）如果需要更加灵活地控制事务

可以使用编程式事务管理，通过编写代码来管理事务，更加灵活，但是需要手动控制事务的所有细节。

##### 4）如果系统同时使用多种事务管理方式

可以在需要的时候，动态地选择合适的事务管理方式。

## 56、Spring 用什么注解开启事务？

开启事务可以使用 @Transactional 注解，如：

```java
@Transactional
public void saveorder() {
    //
}
```

## 57、Spring 事务的实现原理？

> Spring 的事务管理是基于 AOP 和 JDBC 的事务处理机制实现的。

Spring 的事务实现原理如下：

##### 1）事务管理器实现事务控制

事务管理器负责实现事务控制，包括：**开启事务、提交事务、回滚事务**等操作。

Spring 定义了一个事务管理器接口 **PlatformTransactionManager**，并支持多种事务管理器实现，如 JpaTransactionManager、DataSourceTransactionManager 等，不同的事务管理器对应不同的数据源。

##### 2）Spring AOP 实现事务管理

在要使用事务的方法上添加 **@Transactional** 注解，Spring 在方法执行前会生成代理对象，根据 @Transactional 注解中的属性配置来决定开启事务的方式、隔离级别、超时时间等，然后在方法执行前开启事务，在方法执行后根据方法的执行结果提交或者回滚事务。

##### 3）基于数据库事务实现

JDBC 的事务机制是 Spring 事务的基础，Spring 的事务管理器实现了对 JDBC 的封装和扩展。

当开启事务时，Spring 使用 Connection 对象开启一个数据库事务，将所有的 SQL 操作都放在这个事务中执行，在事务提交或回滚时，将所有的 SQL 操作作为一个整体一起提交或回滚。

## 58、Spring 事务和数据库事务的区别？

Spring 事务和数据库事务的区别：

##### 1）实现机制不同

Spring 事务是在应用层面上实现的，它是基于 AOP 和事务管理器等技术实现的事务控制和管理机制，它可以跨越多个数据库操作（需要使用 JTA、Atomikos 等分布式事务管理器），也可以和非数据库的操作一起工作，具有很大的灵活性和可扩展性。

数据库事务是由数据库本身提供的事务管理机制，是基于数据库引擎实现的，一个事务通常只包含对一个数据库的操作。

> ##### 需要注意的是：
>
> Spring 事务是需要数据库事务支持的，如果数据库不支持事务，Spring 是不能完成事务管理的。

##### 2）控制方式不同

Spring 事务的隔离级别、传播行为和超时时间等是由 Spring 框架提供的，而数据库事务的隔离级别和传播行为是由当前数据库本身提供的。

##### 3）使用场景不同

Spring 事务可以与多种数据访问技术一起使用，如 JDBC、Hibernate、JPA 等，适用于各种复杂的业务场景。

数据库事务只适用于对单个数据库的操作，并且一般使用在对数据完整性要求比较高的场景中。

## 59、Spring 支持哪些常用的事务管理器？

Spring 常用的事务管理器：

| 数据访问技术 | 事务管理器                    | 描述                                    |
| ------------ | ----------------------------- | --------------------------------------- |
| JDBC         | DataSource TransactionManager | 适用于 JDBC 访问关系型数据库的场景      |
| Hibernate    | Hibernate TransactionManager  | 适用于 Hibernate 访问关系型数据库的场景 |
| JPA          | Jpa TransactionManager        | 适用于 JPA 访问关系型数据库的场景       |
| 分布式事务   | JtaTransactionManager         | 适用于需要分布式事务支持的场景          |
| 响应式事务   | Reactive TransactionManager   | 适用于需要响应式事务的场景              |

## 60、Spring 中的@Transactional 事务注解支持哪些参数？

Spring 中 @Transactional 注解常用的参数：

| 参数          | 描述                                               |
| ------------- | -------------------------------------------------- |
| propagation   | 事务的传播行为，默认值为 REQUIRED。                |
| isolation     | 事务的隔离级别，默认值为 DEFAULT。                 |
| timeout       | 事务的超时时间，默认值为-1，表示使用数据库默认值。 |
| readOnly      | 是否为只读事务，默认值为 false。                   |
| rollbackFor   | 触发回滚的异常类型列表，可以是多个异常类型。       |
| noRollbackFor | 不触发回滚的异常类型列表，可以是多个异常类型。     |

## 61、Spring 事务的隔离级别有哪些？

Spring 事务的隔离级别：

| 事务隔离级别       | 描述                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| DEFAULT            | 使用数据库默认的隔离级别。                                                                       |
| READ \_UNCOMMITTED | 事务可以读取未提交的数据，可能导致脏读、不可重复读、幻读等问题。                                 |
| READ_COMMITTED     | 事务只能读取已提交的数据，可以避免脏读问题，但是可能会出现不可重复读和幻读问题。                 |
| REPEATABLE \_READ  | 事务在执行期间可以多次读取相同的数据，并且能够避免脏读和不可重复读问题，但是可能会出现幻读问题。 |
| SERIALIZABLE       | 事务在执行期间对数据进行了加锁，可以避免脏读、不可重复读和幻读问题，但是效率比较低。             |

@Transactional 注解默认的事务隔离级别是 **DEFAULT**。

> ##### 参考枚举类：
>
> org.springframework.transaction.annotation.lsolation

## 62、Spring 事务的传播机制有哪些？

Spring 事务的传播机制：

| 事务传播机制  | 描述                                                     |
| ------------- | -------------------------------------------------------- |
| REQUIRED      | 如果当前存在事务，则加入该事务，否则新建一个事务。       |
| SUPPORTS      | 如果当前存在事务，则加入该事务，否则以非事务方式执行。   |
| MANDATORY     | 如果当前存在事务，则加入该事务，否则抛出异常。           |
| REQUIRES NEW  | 新建一个事务，并且暂停当前事务（如果存在）。             |
| NOT_SUPPORTED | 以非事务方式执行操作，并且暂停当前事务（如果存在）。     |
| NEVER         | 以非事务方式执行操作，如果当前存在事务，则抛出异常。     |
| NESTED        | 如果当前存在事务，则在嵌套事务中执行，否则新建一个事务。 |

@ Transactional 注解默认的事务传播机制是 **REQUIRED**。

> ##### 参考枚举类：
>
> org.springframework.transaction.annotation.Propagation

## 63、Spring 事务默认回滚的异常是什么？

在 Spring 中，事务默认会回滚运行时异常（**RuntimeException**）和其子类异常以及错误（**Error**）和其子类异常。

这是由于运行时异常和错误都是不可预料的异常情况，它们也是不用被强制捕获的，所以可能会导致事务的异常终止，进而影响数据的完整性和一致性，因此 Spring 默认将它们设置为回滚异常。

## 64、Spring 事务怎么指定回滚的异常？

在 @Transactional 注解中指定 rollbackFor 参数，用于指定事务回滚的异常类型：

```java
@Transactional(rollbackFor = JavastackException.class)
```

如果有多个异常类型，可以指定一个异常数组。

## 65、Spring 事务怎么指定不回滚的异常？

可以在 @Transactional 注解中指定 noRollbackFor 参数，用于指定事务不回滚的异常类型：

```java
@Transactional(noRollbackFor = JavastackNoException.class)
```

如果有多个异常类型，可以指定一个异常数组。

## 66、Spring 事务失效的原因有哪些？

##### 1、数据库引擎不支持事务

这里以 MySQL 为例，其 MyISAM 引擎是不支持事务操作的，InnoDB 才是支持事务的引擎，一般要支持事务都会使用 InnoDB。

根据 MySQL 的官方文档：

> https:/dev.mysql.com/doc/refman/5.5/en/storage-engine-setting.html

从 MySQL 5.5.5 开始的默认存储引擎是：InnoDB，之前默认的都是：MyISAM，所以这点要值得注意，底层引擎不支持事务再怎么搞都是白搭。

##### 2、没有被 Spring 管理

如下面例子所示：

```java
@service
public class 0rderserviceImpl implements 0rderservice {
    @Transactional
    public void updateorder(order order) {
        // update order
    }
}
```

如果此时把`@service`注解注释掉，这个类就不会被加载成一个 Bean，那这个类就不会被 Spring 管理了，事务自然就失效了。

##### 3、方法不是 public 的

以下来自 Spring 官方文档：

> When using proxies, you should apply the @Transactional annotation only to methods with public visibility If you do annotate protected, private or package-visible methods with the @Transactional annotation, no error is raised, but the annotated method does not exhibit the configured transactional settings. Consider the use of Aspect (see below) if you need to annotate non-publicmethods.

大概意思就是`@Transactional`只能用于 public 的方法上，否则事务不会失效，如果要用在非 public 方法上，可以开启`Aspect`代理模式。

#### 4、自身调用问题

来看两个示例：

```java
@Service
public class orderserviceImpl implements orderservice {
    public void update(order order) {
        updateorder(order);
    }

    @Transactional
    public void updateorder(order order) {
        // update order
    }
}
```

update 方法上面没有加`@Transactional`注解，调用有`@Transactional `注解的 updateOrder 方法，updateOrder 方法上的事务管用吗？

再来看下面这个例子：

```java
@service
public class orderserviceImpl implements orderService {
    @Transactional
    public void update(order order) {
        updateorder(order);
    }

    @Transactional(propagation = Propagation.REQuIREs_NEW)
    public void updateorder(order order) {
        // update order
    }
}
```

这次在 update 方法上加了`@Transactional`， updateOrder 加了`REQUIRES_NEW`新开启一个事务，那么新开的事务管用么？

这两个例子的答案是：不管用！

因为它们发生了自身调用，就调该类自己的方法，而没有经过 Spring 的代理类，默认只有在外部调用事务才会生效，这也是老生常谈的经典问题了。

##### 5、数据源没有配置事务管理器

```java
@Bean
public PlatformTransactionManager transactionManager(Datasource datasource) {
    return new DatasourceTransactionManager(datasource);
}
```

如上面所示，当前数据源若没有配置事务管理器，那也是白搭！

##### 6、不支持事务

来看下面这个例子：

```java
@Service
public class orderserviceImpl implements orderservice {
    @Transactionalpublic void update(order order) {
        updateorder(order);
    }

    @Transactional(propagation = Propagation.NOT_SUPPoRTED)
    public void updateorder(order order) {
        // update order
    }
}
```

**Propagation.NOT_SUPPORTED**：表示不以事务运行，当前若存在事务则挂起，都主动不支持以事务方式运行了，那事务生效也是白搭！

##### 7、异常被吃了

这个也是出现比较多的场景：

```java
 public class 0rderserviceImpl implements orderservice {
     @Transactional
     public void updateorder(order order) {
         try {
             //
         } catch {
             //
         }
     }
 }
```

把异常吃了，然后又不抛出来，事务怎么回滚吧！

##### 8、异常类型错误

上面的例子再抛出一个异常：

```java
public class 0rder5erviceImpl implements orderservice {
    @Transactional
    public void updateorder(order order) {
        try {
            // update order
        }catch {
            throw new Exception("更新错误");
        }
    }
}
```

这样事务也是不生效的，因为默认回滚的是：RuntimeException，如果你想触发其他异常的回滚，需要在注解上配置一下，如：

```java
@Transactional(rollbackFor = Exception.class)
```

这个配置仅限于`Throwable`异常类及其子类。

## 67、Spring 只读事务是什么？

Spring 中的只读事务是一个性能优化的推荐配置，提示数据库驱动现在操作的是一个只读事务，数据库驱动程序就会对事务进行优化，避免对只读数据进行不必要的加锁和事务控制，从而提升应用程序性能，也减少了数据库的压力，毕竟事务处理是会影响性能的。

> ##### 需要注意的是：
>
> 只读事务只有在读取频繁、不需要写入操作的方法才适合，在只读事务中，不要进行更新或删除操作，否则可能会导致数据不一致等异常情况。。

## 68、Spring 只读事务的应用场景？

只读事务通常适用于以下场景：

##### 1、数据查询

当应用程序需要频繁查询数据，而且这些数据只读不写入时，可以使用只读事务，避免不必要的加锁和事务控制，提高数据库的读取性能。

##### 2、数据报表

当需要生成复杂的数据报表时，可以使用只读事务，从而避免对于只读数据进行不必要的加锁和事务控制，提高数据库的读取性能。

##### 3、缓存预热

在应用程序启动时，可以使用只读事务对于数据进行预热，从而提高应用程序的性能。

##### 4、保证数据一致性

在连续的多次查询操作中，同一条 SQL 的多次查询可能出现查询数据前后不一致的问题，为了避免这种情况，就需要启用事务的只读属性。

## 69、Spring 怎么配置只读事务？

在 Spring 中，如果需要将事务配置为只读事务，可以在 @Transactional 注解中指定 readonly 属性为 true。

以下是将事务配置为只读事务的示例：

```java
@Transactional(readonly = true)
public void queryusers() {
    // ...
}
```

## 70、Spring 超时事务是什么？

在 Spring 中，**超时事务是指在一定时间内未能完成事务操作的事务**，当一个事务在执行过程中超过了预设时间，**系统会回滚事务，并抛出超时异常**，以保证事务的完整性和数据一致性。

> ##### 需要注意的是：
>
> 1）对于短时间的事务操作，配置超时事务可能会带来额外的开销和复杂性，所以不建议使用超时事务进行管理。
>
> 2）在使用超时事务时，需要注意事务超时的异常处理，确保系统能够正确处理异常并恢复事务的完整性。

## 71、Spring 怎么配置超时事务？

可以在 @Transactional 注解上进行配置事务超时时间：

```java
@Transactional(timeout = 60)
```

通过 timeout 参数指定事务的超时时间为 60 秒，超过这个时间，事务将被回滚。默认为-1，表示使用数据库默认配置。

> 超时时间过长会占用系统资源，降低系统的性能，超时时间过短则可能导致事务无法完成，影响系统的可靠性。在设置事务超时时间时，需要根据实际情况进行调整，确保能够在超时时间内完成事务操作。

## 72、Spring 超时事务的应用场景？

**超时事务主要是针对耗时较长的事务操作**，例如涉及到大量数据的插入、更新、删除等操作，或需要进行长时间的业务处理和计算的操作。

在这些场景下，由于事务的执行时间较长，可能会导致其他事务的等待时间变长，进而影响系统的性能和可靠性。为了避免这种情况，可以通过设置事务超时时间来限制事务的执行时间，确保事务在一定时间内完成操作。这样可以减少对系统资源的占用，提高系统的性能和可靠性。

## 73、Spring 怎么开启方法异步执行？

##### 开启方法异步执行(@EnableAsync)

---

首先使用 **@EnableAsync** 注解开启 Spring 方法异步执行的能力，需要和注解 @Configuration 配合使用。

```java
@configuration
@EnableAsync
public class Appconfig {

}
```

也可以自定义线程池：

```java
@configuration
@EnableAsync
public class Appconfig implements Asyncconfigurer {
    @overridepublic Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setcorePoolsize(7);
        executor.setMaxPoolSize(42);
        executor.setoueuecapacity(11);
        executor.setThreadNamePrefix("MyExecutor-");
        executor.initialize();
        return executor;
    }
    @override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return MyAsyncUncaughtExceptionHandler();
    }
}
```

方法异步执行（@Async）

---

在要异步执行的方法上使用 @Async 注解，下面是一个没有返回值，一个带有返回值的异步调用的示例。

```java
@Component
public class AsyncTask {
    @Asyncpublic void taski() {
        try {
            Thread.sleep(3000);
        } catch (Interruptedexception e) {
            e.printstackTrace();
        }
    }
    @Async
    public Future<string> task2() {
        try {
            Thread.sleep(3000);
        }catch (InterruptedException e) {
            e.printstackTrace();
        }
        return new AsyncResult<string>("javastack");
    }
}
```

测试代码：

```java
@Runwith(SpringRunner.class)
@SpringBootTest
3public class AsyncTest {
    private final static Logger log =LoggerFactory.getLogger(AsyncTest.class);
    @Autowired
    private AsyncTask asyncTask;

    @Testpublic void testTask1() {
        log.info("start");
        asyncTask.task1();
        log.info("finish");
    }

    @Test
    public void testTask2() {
        log.info("start");
        Future<string> futureasyncTask.task2();
        while (true) {
            f (future.isDone()) {
                try {
                   log.info("result is "+future.get());
                } catch (Exception e) {
                    e.printstackTrace();
                }
                break;
            }
        }
        log.info("finish");
    }
}
```

##### 注意事项

---

##### 1、使用注意

@Async 只能使用到被代理的对象方法上，即代理类的入口方法处，且方法必须是 public 的。

##### 2、事务处理机制

使用 @Async 异步注解不能和 @Transaction 事务注解在同一个方法上同时使用，不然事务注解将无效。要使用事务，需要把事务注解提取到方法里面的子方法上。

## 74、Spring 怎么开启定时任务？

> Spring 3.1 开始让计划任务变得非常简单，只需要几个注解就能快速开启计划任务的支持。

##### 开启定时任务

使用 @EnableScheduling 注解开启定时任务：

```java
@Enablescheduling
@configuration
public class Taskconfiguration {}
```

##### 配置定时任务

---

在要使用计划任务的方法上使用 Scheduled，fixedRate 表示固定频率，cron 即自定义执行表达式，更多用法参考注解 @Scheduled 参数。

配置示例如下：

```java
@service
public class TestTask {
    protected Logger logger = Loggerutils.getlogger(this);
    // 每5秒执行一次
    @Scheduled(fixedRate = 5000)
    public void runPerFiveSeconds() {
        logger.info("fix");
    }
    //每10秒执行一次
    @Scheduled(cron = "0/10 * * * * ?")
  public void runcron() {
        logger.info("cron");
    }
}
```

## 75、Spring 为什么不建议使用默认线程池？

Spring 为什么不建议使用默认线程池，这个问题一般是指 Spring 框架在处理异步任务，异步任务提供了对线程池的支持。

从 @EnableAsync 类源码注释可以看到，@Async 注解默认使用的是：

> org.springframework.core.task.SimpleAsyncTaskExecutor

![](/images/Spring/75.jpg)

为什么不推荐使用的几个原因：

##### 1、性能影响

SimpleAsyncTaskExecutor 并不是一个真正的线程池，因为它并不重用线程。对于每个请求，它都会创建一个新的线程，这就会导致性能问题，尤其是在高负载情况下。

##### 2、资源消耗

由于 SimpleAsyncTaskExecutor 对于每个任务都创建新的线程，这可能导致在短时间内有大量的线程被创建和销毁，增加了资源消耗。

##### 3、不能自定义线程池

SimpleAsyncTaskExecutor 缺少对线程数、队列容量等参数的自定义设置，在复杂或高负载的应用中会存在限制。

## 76、Spring 中的 Aware 接口有啥用？

Spring 中的 Aware 是一组接口，用于提供对于 Spring 容器内部资源的访问，Aware 能让 Bean 感知 Spring 容器的存在，即让 Bean 可以使用 Spring 容器所提供的资源。

如要获取容器中的某个 Bean，可以继承 ApplicationContextAware，让这个 Bean 拥有调用容器服务的能力。

```java
public class SpringAppcontext implements ApplicationContextAware {
    private static Applicationcontext applicationcontext = null;

    @override
    public void setApplicationcontext(Applicationcontext applicationcontext) throws BeansException {
        if (springAppcontext.applicationcontext == null) {
            SpringAppcontext.applicationcontext = applicationcontext;
        }
    }
    public static Applicationcontext getApplicationcontext() {
        return applicationcontext;
    }

    public static object getBean(string name) {
        return getApplicationcontext().getBean(name);
    }

    public static <T> T getBean(Class<T> clazz) {
        return getApplicationcontext().getBean(clazz);
    }

    public static <T> T getBean(string name, Class<T> clazz) {
        return getApplicationcontext().getBean(name, clazz);
    }
}
```

## 77、Spring 常用的 Aware 接口有哪些？

以下是 Spring 常用的 Aware 接口及其作用的表格：

| Aware 接口              | 作用                                  |
| ----------------------- | ------------------------------------- |
| ApplicationContextAware | 获取 ApplicationContext 对象          |
| BeanNameAware           | 获取当前 Bean 的名称                  |
| BeanFactoryAware        | 获取 BeanFactory 对象                 |
| BeanClassLoaderAware    | 获取加载当前 Bean 的 ClassLoader 对象 |
| EnvironmentAware        | 获取 Environment 对象                 |
| ResourceLoaderAware     | 获取 ResourceLoader 对象              |
| ServletConfigAware      | 获取 ServletConfig 对象               |
| ServletContextAware     | 获取 ServletContext 对象              |

通过实现这些 Aware 接口，可以让 Bean 在被 Spring 容器创建时获取到一些相关的对象，从而方便地进行一些操作。比如，通过实现 ApplicationContextAware 接口，可以获取 ApplicationContext 对象，从而可以使用 ApplicationContext 提供的一些功能。

> 这些 Aware 接口也提供了灵活的扩展方式，大家可以根据需要进行扩展和定制。

## 78、Spring 中的@lmport 注解有什么用？

来看看 @lmport 注解的源码：

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Import {
  Class<?>[] value();
}
```

它可以用来导入 Configuration、ImportSelector、ImportBeanDefinitionRegistrar、Component。

##### 1、Configuration

用于直接导入 Configuration 配置类。

##### 2、 ImportSelector

根据条件选择导入不同的配置类，参考@EnableAsync

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import(Asyncconfigurationselector.class)
public @interface EnableAsync {

}
```

##### 3、ImportBeanDefinitionRegistrar

动态注册 Bean， 参考 @EnableAspectUAutoProxy：

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Import(AspectJAutoProxyRegistrar.class)
public @interface EnableAspectJAutoProxy {}
```

##### 4、Component

可以直接导入 component 类。

## 79、Spring 中的@Enable\*注解有什么用？

Spring 中的 **@Enable\***注解是一种元注解，用于启用指定的功能或配置。

比如：EnableAsync、EnableScheduling、EnableAspectJAutoProxy、EnableCaching 等注解，这些注解通常与 @Configuration 注解一起使用，用于启用特定的 Spring 功能或第三方库。

## 80、Spring 中的@Enable\*注解什么原理？

> ##### @Enable 注解实现的原理是：
>
> 通过导入配置类来启用特定的功能或配置，在 **@Enable\***注解的实现类中，通常会声明一个内部类，该内部类使用了 **@lmport** 注解，用于导入特定的配置类，导入的配置类会被 Spring 容器加载并注入到应用程序中，从而启用相应的功能或配置。

来看看计划任务**@EnableScheduling**的源代码：

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(schedulingconfiguration.class)
@Documented
public @interface Enablescheduling {}
```

主要核心的配置就是导入了一个配置文件：**@lmport(SchedulingConfiguration.class)**，所以谜底也就接开了。

## 81、Spring 中的事件监听机制是什么？

Spring、Spring Boot 框架中都内置了许多事件，我们也可以自定义发布应用程序事件，其主要涉及到的几个核心类和接口如下。

##### ApplicationEvent

ApplicationEvent（应用程序事件）它是一个抽象类，相当于观察者模式中的观察目标。

ApplicationEvent 源码如下：

```java
public abstract class ApplicationEvent extends Eventobject {
    private static final long serialversionU1D = 7099057708183571937L;

    private final long timestamp;

    public ApplicationEvent(object source) {
        super(source);
        this.timestamp = System.currentTimeMillis();
    }

    public ApplicationEvent(object source, Clock clock) {
        super(source);
        this.timestamp = clock.millis();
    }

    public final long gettimestamp() {
        return this.timestamp;
    }
}
```

ApplicationEvent 继承自 Java 中的 EventObject 事件对象类，Spring 框架中的所有事件都继承自 ApplicationEvent 类，它是所有事件的父类。

ApplicationEvent 主要的核心是类构造器，它可以初始化一个 source 事件关联对象，以便在事件监听器中获取并通知更新。

##### ApplicationListener

ApplicationListener （应用程序事件监听器）它是一个接口，相当于观察者模式中的观察者。

ApplicationListener 源码如下：

```java
@FunctionalInterface
public interface Applicationlistener<E extends ApplicationEvent> extends Eventlistener {
    void onApplicationEvent(E event);
    static <T> ApplicationListener<PayloadApplicationEvent<T>> forPayload(consumer<T> consumer) {
        return event -> consumer.accept(event.getPayload());
    }
}
```

ApplicationListener 继承自 Java 中的 EventListener 事件监听接口，ApplicationListener 类中只有一个 onApplicationEvent 方法， 当指定监听的事件被发布后就会被触发执行，可以通过 event 获取事件中的关联对象。

##### ApplicationEventPublisher

应用程序事件发布接口，封装了事件发布功能的基础接口。

```java
@Functionalinterface
public interface ApplicationEventpublisher {
    default void publishEvent(ApplicationEvent event) {
        publishevent((object) event);
    }

    void publishevent(object event);
}
```

ApplicationEventPublisher 有一个默认接口方法和接口方法，接口方法需要由具体的子类容器实现。

##### ApplicationContext

ApplicationContext 这个类就再熟悉不过了，它是 Spring 框架中的核心容器。

如下图所示，ApplicationContext 接口继承了 ApplicationEventPublisher 接口，所以常用的 ApplicationContext 就可以用来发布事件。

![](/images/Spring/81.jpg)

以上介绍的 Spring 事件监听发布角色串起来就是，通过 ApplicationEventPublisher 或者 ApplicationContext 容器发布 ApplicationEvent 事件并关联事件对象，然后 ApplicationListener 监听该事件，当事件发布后，监听器就会收执行并获取到事件及关联对象。

## 82、Spring 可以不要 xml 配置文件吗？

Spring 3.0 开始可以不用 xml 文件，可以使用一个 **@Configuration** 注解标识的类就是配置类，用来代替 xml 配置。

通过 @Configuration 注解，可以和 @Bean 注解来配置 Bean 和 Bean 之间的依赖关系，这种配置方式简化了应用程序的配置，提高了应用程序的可维护性和可读性。

比如以下示例：

```java
@configuration
public class Appconfig {
    @Bean
    public User user(usercontact usercontact) {
        User user = new User();
        user.setcontact(usercontact);
        return user;
    }
    @Bean
    public Usercontact usercontact() {
        return new usercontact();
    }
}
```

## 83、Spring 默认支持的缓存框架是什么？

Spring 5 开始，不再支持 Guava Cache，改为默认使用 Caffeine 缓存了，主要是因为 Caffeine 的性能优异。

![](/images/Spring/83.jpg)

## 84、Spring5.0 都有什么新功能？

> ##### Spring 5.0 最低环境要求：
>
> JDK 8+; Servlet 3.1+; Tomcat 8.5+, Jetty 9.4+, Undertow 1.4+

##### Spring5.0 新功能

---

##### 1）响应式编程支持

Spring 5.0 引 I 入了对响应式编程的支持，包括 Reactor 3.1 库和 Reactive Streams 规范。

> Spring WebFlux 是一个基于响应式编程模型的全新 Web 框架，它支持非阻塞 I/O，可以处理大量的并发请求，并提供了更好的性能和可伸缩性。

##### 2）JDK 8+的函数式编程支持

Spring 5.0 支持 JDK 8+ 的函数式编程特性，如 Lambda 表达式、方法引用、函数接口等。这些特性使 Spring 应用程序更加简洁、清晰、易于维护和扩展。

##### 3） Kotlin 支持

Spring 5.0 增强了对 Kotlin 的支持，可以更加方便地在 Spring 应用程序中使用 Kotlin。

##### 4）基于 Java8 的日期和时间 API

Spring 5.0 引 l 入了对 Java 8 的日期和时间 API 的支持，这样可以更好地处理日期和时间。

##### 5）改进了测试框架

Spring 5.0 中的测试框架得到了大幅度的改进，包括支持 JUnit 5、引 l 入了 Reactor Test 支持、改进了集成测试的支持等。

##### 6）Web 安全性改进

Spring 5.0 中引 I 入了基于 Servlet 3.1+ 的 HTTP 请求处理和响应处理，并引 I 入了 Spring Security 5.0，提供了更好的 Web 应用程序安全性支持。

##### 7）Web 容器嵌入改进

Spring 5.0 中引 l 入了 Web 容器嵌入改进，包括 Jetty 9.4、Tomcat 8.5 和 Undertow 1.4 的支持,使得 Spring 应用程序更加灵活、轻量化。

##### 8）废弃和删除的特性

Spring 5.0 废弃了一些过时的特性，如 XML 配置文件中的 DTD 和 XSD 验证、XML 名称空间配置等。此外，还删除了一些已经过时或不再支持的特性,如 WebSphere 6.x、Glassfish 3.x、Portlet 2.x 等。

## 85、Spring Native 是什么框架？

我们都知道，传统的 Spring 应用程序都是必须依赖于 Java 虚拟机（JVM）运行的，Spring Native 的诞生**就是无需 JVM**，它提供了另外一种运行和部署 Spring 应用的方式（目前只支持 Java 和 Kotlin），**通过 GraalVM 将 Spring 应用程序编译成原生镜像**。

## 86、Spring Native 和 JVM 的区别？

##### Spring Native 和 JVM 的区别：

1）Spring Native 构建时会进行应用程序静态分析；

2）Spring Native 构建时会移除未被使用的组件；

3）Spring Native 反射、资源、动态代理需要配置化；

4） Spring Native 构建时的 classpath 是固定不变的；

5）Spring Native 没有类延迟加载，可执行文件包含所有内容都在启动时加载到内存；

6）Spring Native 构建时会运行一些代码；

7） Spring Native 对于 Java 应用程序还存在一些局限性；

## 87、SpringNative 有什么应用场景？

##### SpringNative 应用场景：

1. Spring Cloud 无服务器化（Serverless）；

2）以更廉价持久的方式运行 Spring 微服务；

3）非常适合 Kubernetes 平台，如：VMware Tanzu；

4）为 Spring 应用创建更佳的容器镜像；

## 88、SpringNative 有什么优缺点？

##### Spring Native 优势：

1）**无需 JVM 环境**，Spring Native 应用程序可以作为一个可执行文件独立部署；

2）应用即时启动，一般情况下应用启动时间<100ms；

3）即时的峰值性能；

4）更少的内存消耗；

##### Spring Native 缺点：

Spring Native 应用启动那么快也是有代价的，和 JVM 应用相比：

1）构建更笨重、构建时间更长；

2）更少的运行时优化；

3）很多 Java 功能受限；

4）很多特性还很不成熟；
