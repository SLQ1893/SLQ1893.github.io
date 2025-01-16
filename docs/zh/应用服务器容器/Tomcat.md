## 1、Tomcat 是什么？

Apache Tomcat，简称为**Tomcat**，它是一个开源的、轻量级的 Servlet 容器和 Web 服务器。它由 Apache Software Foundation 维护和开发，是一个用于运行 Java Servlet 和 Java Server Pages(JSP)的 Web 应用程序的容器。

简单来说，Tomcat 是一个用来部署 Java 动态应用程序（能运行 Servlet、JSP）的开源容器，它在 Java 开发社区中非常流行，也是事实上的 Servlet 容器标准。

## 2、Tomcat 和 Apache HTTP 服务器有什么区别？

Apache Tomcat 是一个 Java 应用程序容器，它支持动态内容的生成，只要用于运行 Java Servlet 和 Java Server Pages(JSP)的 Java Web 应用程序。

Apache HTTP 服务器则是一个通用的 Web 服务器，它不具备 Java Servlet 容器功能，它主要用于提供静态内容服务（静态网页、图片、CSS、JavaScript 等）和反向代理功能，但也还支持动态内容服务。

## 3、Tomcat 默认端口是多少？怎么修改？

Tomcat 默认 HTTP 端口是：8080，默认 HTTPS 端口是：8443。

##### 修改方法：

修改 tomcat/conf/server.xml 配置文件：

```xml
<Connector
           connectionTimeout="20000"
           port="8080"
           protocol="HTTP/1.1"
           redirectPort="8443"
           uriEncoding="utf-8" />

<Connector
           port="8443"
           protocol="HTTP/1.1"
           maxThreads="150"
           SSLEnabled="true"
           scheme="https"
           secure="true"
           clientAuth="false"
           sslProtocol="TLS"
           keystorePass="123456"/>
```

## 4、Tomcat 有哪些目录及其作用？

**/bin**：脚本和命令目录；

**/conf**：配置文件目录；

**/lib**：运行时加载的 jar 包目录；

**/logs**：日志目录；

**/webapps**：Web 应用程序发布目录；

**/work**：存储编译后的文件目录（如 JSP 编译后的文件）；

## 5、Tomcat 的主要配置文件有哪些？

Tomcat 的主要配置文件位于 tomcat/conf 目录中。

**server.xml**

server.xml 包含了 Tomcat 服务器的全局配置信息，包含连接器(Connectors)、虚拟主机(Virtual Hosts)、资源、安全设置、日志配置等。

**web.xml**

web.xml 用于配置 Web 应用程序的通用部署描述符，包括 Servlet 映射、过滤器配置、编码配置、默认的首页等。

**tomcat-users.xml**

tomcat-users.xml 用于配置 Tomcat 的用户、角色和访问控制，这个文件定义了哪些用户可以访问 Tomcat 的管理界面和 Web 应用程序，以及他们拥有的角色和权限。

**logging.properties**

logging.properties 用于配置 Tomcat 的日志记录行为，包括日志级别、日志文件位置等。

## 6、Tomcat 中的 web.xml 和项目中的 web.xml 的区别？

##### Tomcat 中的 web.xml：

- Tomcat 中的 web.xml 是全局 web.xml，它位于 tomcat/conf 目录下；
- **全局 web.xml 对所有项目生效**，用于定义 Tomcat 的默认全局行为。

##### 项目中的 web.xml：

- 项目中的 web.xml 位于每个 Web 应用程序的 WEB-INF 目录下；
- **项目中的 web.xml 只对该项目生效**，用于配置特定的行为。

**总结一下：**

当 Tomcat 启动时，它会首先加载全局的 web.xml，然后加载每个项目中的 web.xml，如果项目中存在 web.xml，则项目中的 web.xml 配置会覆盖 Tomcat 的全局配置。

所以，每个项目可以有自己独特的配置，而不受全局 web.xml 的影响。

## 7、Tomcat 的总体架构是怎样的？

> Tomcat 的总体架构是怎样的？画图说明，以及介绍 Server、Service、Connector、Container、Engine、Host、Context、Wrapper 之间的作用和联系。

Tomcat 架构图如下：

![](/images/Tomcat/7.jpg)

（1）Tomcat 中只有一个 Server；

（2）一个 Server 可以有多个 Service，Service 是对外提供服务的；

（3）一个 Service 只有一个 Container，Container 用于封装和管理 Servlet，以及处理 request 请求；

（4）一个 Service 可以有多个 Connector，Connector 用于接受请求并将请求封装成 Request 和 Response 来处理；

（5）一个 Service 只能由一个 Engine 引擎，用来管理站点；

（6）一个 Engine 可以有多个 Host，每个 Host 代表一个站点或者叫虚拟主机；

（7）一个 Host 可以有多个 Context，每个 Context 代表一个 Web 应用程序；

（8）一个 Context 有多个 Wrapper，每个 Wrapper 代表封装一个 Servlet；

## 8、Tomcat 有哪几种工作模式？

##### 1、独立模式（默认）

这种模式下，Servlet 容器组件则是 Tomcat 服务器的一部分。

和其他 Java 应用程序一样，Tomcat 也作为一个独立的 Java 应用程序来单独运行，运行 Tomcat 也需要启动一个 Java 虚拟机进程，由该进程来运行 Tomcat 服务器。

##### 2、嵌入式模式

这种模式下，Tomcat 可以嵌入到 Java 应用程序中以嵌入式模式运行，不需要部署独立的 Tomcat 服务器就能运行 Java 应用程序。

##### 3、作为其他 Web 服务器的 Servlet 容器

这种模式下，Tomcat 可以嵌入到其他 Java 应用服务器中，作为其 Servlet 容器，而不必开发自己的 Servlet 容器。

此时 Tomcat 分为以下两部分：

- Web 服务器插件
- Servlet 容器

Web 服务器插件会在其他 Web 服务器进程内部（或者外部）地址空间启动一个 Java 虚拟机，Servlet 容器组件则在这个 Java 虚拟机中运行。

## 9、Tomcat Connector 支持哪几种运行模式？

##### 1、BIO（blocking I/O）

传统的同步阻塞 IO，性能最低。

```xml
<Connector
           port="8080"
           protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443" />
```

##### 2、NIO（non-blocking I/O）

JDK 1.4 开始支持，同步非阻塞 IO，比 BIO 有更好的并发性能。

修改 protocol 参数：

```xml
<Connector
           port="8080"
           protocol="org.apache.coyote.http11.Http11NioProtocol"
           connectionTimeout="20000"
           redirectPort="8443" />
```

##### 3、APR（Apache Portable Runtime）

这种安装起来最困难，它是从操作系统的级别来解决异步的 IO 问题，以 JNI 的形式调用 Apache HTTP 服务器的核心动态链接库来处理文件读取或网络传输操作，从而大大的提高 Tomcat 对静态文件的处理性能。

修改 protocol 参数：

```xml
<Connector
           port="8080"
           protocol="org.apache.coyote.http11.Http11AprProtocol"
           connectionTimeout="20000"
           redirectPort="8443" />
```

## 10、Tomcat 默认 IO 模型是什么？

Tomcat8+版本中默认使用的是 NIO 模式，8 之前的版本默认使用的是 BIO。

## 11、Tomcat 有哪几种部署项目的方式？

##### 1、自动部署

最简单的方式是将 Web 应用程序的 war 包压缩文件(.war)复制到 tomcat/webapps 目录中，Tomcat 将自动检测、解压、并部署 war 包文件，访问根路径既是 war 包名称。

确保以下默认配置支持自动解压和自动部署：

```xml
<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true" />
```

参数解释：

- name：虚拟主机的名称；
- appBase：应用所在根目录；
- unpackWARs：是否自动解压 war 包文件；
- autoDeploy：是否自动部署；

##### 2、自定义部署

另外常用的就是使用自定义部署，把解压后的项目复制到 tomcat/webapps 目录中，然后在 Host 节点配置下新增一个 Context 配置：

```xml
<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">
  <Context path="/test" docBase="examples" debug="0" reloadable="true"></Context>
</Host>
```

参数解释：

- path：指定 Web 应用在 URL 中的访问路径；
- docBase：指定 Web 应用的根目录或 WAR 文件的路径；
- debug：设置调试级别；
- reloadable：设置是否允许自动重新加载应用；

这样就可以通过/test 来访问部署好的 tomcat/webapps/examples 项目，同时也不会影响自动部署功能。

##### 3、嵌入式部署

如果项目使用的 Spring Boot 框架，并打成可执行的 jar 包，它内部默认内嵌 Tomcat 容器，运行项目 jar 包会自动启动 Tomcat 容器，无需关心部署问题。

## 12、Tomcat 创建 Servlet 类实例的流程是怎样的？

Tomcat 创建 Servlet 类实例的过程主要依赖于 Servlet 规范的实现和 Java 的反射机制。

##### 以下是基本流程：

（1）Tomcat 启动时，它会扫描 Web 应用程序的 web.xml 部署描述文件。

（2）解析 web.xml 文件，使用 Java 类加载机制加载所有注册的 Servlet 类。

（3）使用 Java 反射机制实例化所有 Servlet 类。

（4）调用 Servlet 的 init 方法初始化 Servlet。

（5）调用 Servlet 的 service 方法处理请求。

## 13、Tomcat 怎么支持 https 访问？

##### 1、修改配置文件

打开 tomcat/conf.server.xml 配置文件，把下面这段配置注释取消掉：

```xml
<Connector port="8443"
           protocol="HTTP/1.1"
           maxThreads="150"
           SSLEnabled="true"
           scheme="https"
           secure="true"
           clientAuth="false"
           sslProtocol="TLS"
           keystorePass="123456" />
```

keystorePass 为证书密钥需要手动添加，创建证书时指定的。

##### 2、创建证书

使用 jdk 工具类里面的 keytool 命令来生成证书，按照提示输入响应的信息。

```shell
C:\>keytool -genkey -alias https -keyalg RSA
输入密钥库口令：
您的名字与姓氏是什么？
  [Unknown]: test
您的组织单位名称是什么？
  [Unknown]: test
您的组织名称是什么？
  [Unknown]: test
您所在的城市或区域名称是什么？
  [Unknown]: test
您所在的省/市/自治区名称是什么？
  [Unknown]: test
该单位的双字母国家/地区代码是什么？
  [Unknown]: test
CN=test, OU=test, O=test, L=test, ST=test, C=test
  [否]：y

输入<https>的密钥口令
  （如果和密钥库口令相同，按回车）：
  再次输入新口令：
```

这里的密钥口令就是配置文件中的 keystorePass 配置。

##### 访问 https

> 通过 https://localhost:8443/your-project 就能访问 https 项目。

这种方式只适合本地开启 https 测试，线上环境需要购买商业授权的证书，不过原理都是一样的。

## 14、Tomcat 实现 Session 共享有哪些方式？

##### 1、使用 Tomcat 内置的 Session 复制功能

这种配置最简单，缺点就是当集群数量较多时，Session 复制的时间会比较长，可能会影响业务。

##### 2、使用第三方来存放共享 Session

目前用的较多的是使用 memcached/redis 来管理共享 Session，借助于这些中间件的快速内存存储来进行 Tomcat 的 Session 管理。

##### 3、使用黏性 Session 策略

这就是所谓的 session sticky 策略，同一个用户的 Session 由 nginx 转发给同一个 Tomcat 来处理，处理效率高，缺点就是不适用于强会话要求的场合。

## 15、Tomcat 为什么打破双亲委派模型？

> JDBC、Tomcat 都打破了双亲委派模型，那它们为什么要破坏双亲委派模型呢？

##### 比如 Tomcat，出于下面三类目的：

（1）对于各个 webapp 应用中的 class 和 lib，各个应用、或者一个应用不同版本需要相互隔离，如果采用标准的双亲委派模型，一个应用加载类库后会影响到另一个应用不能加载。另外，对于许多应用，需要有共享的 lib 以便不浪费资源。

（2）与 JVM 一样，要考虑安全性问题，需要使用单独的 ClassLoader 装载 Tomcat 自身的类库，以免被其他程序恶意或无意的破坏。

（3）Tomcat 采用了自己的类加载器来加载日志配置文件和类库，以便避免与应用程序的日志产生冲突。

总结，Tomcat 通过实现自己的类加载器打破了双亲委派模型，是为了解决应用程序和 Tomcat 自身的类库版本冲突问题，以及提供更好的类加载机制、安全和日志机制。

## 16、Tomcat 怎么调优？

##### 1、优化线程池配置

调整 Tomcat 的线程池配置，包括最大线程数和最小空闲线程数等，合理的线程池配置可以提高并发处理能力。

##### 2、优化 JVM 参数

调整 JVM 参数，包括堆大小、垃圾回收策略和线程池配置，以提高性能。

##### 3、启用 GZIP 压缩

在 Tomcat 的 Connector 配置中启用 HTTP 相应内容的 GZIP 压缩，以减小传输数据的大小，节省带宽和提高加载速度。

##### 4、启用缓存

使用 Tomcat 内置或反向代理服务器的缓存功能，以减轻 Tomcat 的负载并提高响应速度。

## 17、Tomcat 中的 maxConnections、acceptCount、maxThreads 的区别？

参数解释：

- maxConnections：是指同一时间，Tomcat 能接收和处理的最大连接数。
- acceptCount：是指达到最大连接数（maxConnections）时，Tomcat 能把额外请求放入队列的最大长度。
- maxThreads：是指 Tomcat 线程池实际处理请求的最大线程数。
- 所以，Tomcat 能够接收和处理的**最大连接数** **= maxConnections + acceptCount**，超过的就会被拒绝，而同时处理请求的个数是和**maxThreads**参数相关的。

> **这三者的区别可以举个例子**：
>
> - 餐厅只有 30 个（maxConnections）桌子
> - 餐厅只能接受 20 人（acceptCount）排队
> - 餐厅只能同时处理 5 桌（maxThreads）订单

## 18、Tomcat 最大连接数默认是多少？怎么修改？

Tomcat 最大连接数默认是**8192**个，可以通过`maxConnections`配置参数修改：

```xml
<Connector
           port="8080"
           protocol="HTTP/1.1"
           maxConnections="500"
           connectionTimeout="20000"
           redirectPort="8443" />
```

这里修改为 500 个，超过限制会进入等待队列，队列也满了就会拒绝请求。

> 对于 NIO/NIO2 请求，如果将 maxConnections 值设置为-1，将禁用 maxConnectins 特性，也就是不限制连接数。

## 19、Tomcat 最大连接队列长度默认是多少？怎么修改？

Tomcat 最大连接队列长度默认是 100 个，可以通过`acceptCount`配置参数修改：

```xml
<Connector
          port="8080"
          protocol="HTTP/1.1"
          maxConnections="500"
          acceptCount="200"
          connectionTimeout="20000"
          redirectPort="8443" />
```

这里修改为 200 个，超过最大连接数（maxConnections）限制会进入等待队列，队列也满了（达到 acceptCount 大小）就会拒绝请求。

## 20、Tomcat 线程池默认是多大？怎么修改？

Tomcat 的线程池配置：

- minSpareThreads：最小线程数，默认为**10**个；
- maxThreads：最大线程数，默认为**200**个；

配置实例如下：

```xml
<Connector
           port="8080"
           protocol="HTTP/1.1"
           minSpareThreads="100"
           maxThreads="1000"
           connectionTimeout="20000"
           redirectPort="8443" />
```

也可以使用`executor`参数指定自定义的线程池：

```xml
<Connector
           port="8080"
           protocol="HTTP/1.1"
           minSpareThreads="100"
           maxThreads="1000"
           executor="tomcatThreadPool"
           connectionTimeout="20000"
           redirectPort="8443" />
<Executor
          name="tomcatThreadPool"
          namePrefix="cataline-exec-"
          minSpareThreads="50"
          maxThreads="500"
          maxQueueSize="100" <!-- 默认为Integer最大值 -->
/>
```

如果同时设置，Connector 上面的线程池参数就会被忽略。

## 21、Tomcat 线程池和 Java 原生线程池有什么区别？

Tomcat 线程池扩展了 Java 原生线程池，扩展后的机制稍微有不同，下面会以 Tomcat 10.1.8 版本的源码为示例进行分析。

##### 1、工作流程不同

Tomcat 扩展了 ThreadPoolExecutor 和 LinkedBlockingQueue 队列类，见 Tomcat 中的 AbstractEndpoint#createExecutor 类中的创建执行器方法：

```java
public abstract class AbstractEndpoint<S, U> {
    ...
    public void createExector () {
      internalExecutor = true;
        TaskQueuq taskqueue = new TaskQueue();
        TaskThreadFactory tf = new TaskThreadFactory();
        executor = new ThreadPoolExecutor(getMinSpareThreads(), getMaxThreads(), 60, TimeUnit.SECONDS, taskqueue, tf);
        taskqueue.setParent((ThreadPoolExecutor) executor);
    }
}
```

重点来看 TaskQueue#offer 插入队列方法：

```java
public class TaskQueue extends LinkedBlockingQueue<Runnable> {
  ...

      @Override
      public boolean offer(Runnable o) {
      // we can't do any checks
      if (parent == null) {
          return super.offer(o);
      }
      // we are maxed out threads, simply queue the object
      // 如果当前活跃的线程数等于最大线程数，就不能创建新线程了，直接放入队列中
      if (parent.getPoolSizeNoLock() == parent.getMaximumPoolSize()) {
          return super.offer();
      }
      // we have idle threads, just add it to the queue
      // 如果当前提交的任务数小于等于当前活跃的线程数，表示还有空闲线程，直接添加到队列，让线程去执行即可
      if (parent.getSubmittedCount() <= parent.getPoolSizeNoLock()) {
          return super.offer(o);
      }
      // if we have less threads than maximum force creation of a new thread
      // 如果当前活跃的线程数小于最大线程数，此时返回false，表示不是放入队列，而是创建新线程
      if (parent.getPoolSizeNoLock() < parent.getMaximumPoolSize()) {
          return false;
      }
      // if we reached here, we need to add it to the queue
      // 到这里再直接插入队列
      return super.offer(o);
  }
    ...
}
```

如果总线程数达到了 corePoolSize，Tomcat 优先创建新线程，直到 maxPoolSize 满了才会插入队列。而不会像 JDK 那样直接插入队列，队列满了才去创建新线程，这样就避免了在使用无界队列时任务堆积在队列。

> 工作流程区别如下：
>
> - JDK 线程池流程：corePoolSize --> queue --> maxPoolSize --> RejectedExecutionException
> - Tomcat 线程池流程：corePoolSize --> maxPoolSize --> queue --> RejectedExecutionException

##### 2、首次被拒后再次进队列

ThreadPoolExecutor#execute 执行方法源码如下：

```java
public class ThreadPoolExecutor extends AbstractExecutorService {
    ...
        @Override
        public void exectue(Runnable command) {
          submittedCount.incrementAndGet();
        try {
            executeInternal(command);
        } catch (RejectedExecutionException rx) {
            if (getQueue() instanceof TaskQueue) {
                final TaskQueue queue = (TaskQueue) getQueue();
                if (!queue.force(command)) {
                    submittedCount.decrementAndGet();
                    throw new RejectedExecutionException(sm.getString("threadPoolExecutor.queueFull"));
                }
            } else {
                submittedCount.decrementAndGet();
                throw rx;
            }
        }
    }
}
```

如果队列满了，JDK 执行了拒绝策略，Tomcat 会再次尝试将任务插入到队列中，如果插入失败，才最终执行拒绝策略。

## 22、一个 Tomcat 部署多个应用，有几个 JVM？

一个 Tomcat 对应一个进程，**一个进程只会启动一个 JVM**，里面可以部署多个应用。

在 Tomcat 中，每个 Web 应用程序都会有一个独立的 ClassLoader，相互独立，这样可以避免应用程序之间的类冲突问题。
