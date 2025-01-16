## 1、HTML、CSS、JavaScript 之间的关系？

##### 网页开发语言三剑客：HTML + CSS + JavaScript

HTML 语言定义了网页的内容，CSS 定义了网页的布局和样式，JavaScript 定义了网页的行为和动作。

## 2、H5 是什么？

HTML 诞生于 1990 年，HTML4 在 1997 年成为互联网网页标准。

H5 = HTML5（**HyperText Markup Language5**）是下一代 HTML 标准，2014 年 10 月由万维网联盟（W3C）完成标准制定，H5 在之前 HTML4 的基础上进行了一系列的改进，H5 的语法特征也更加明显。

## 3、H5 的诞生是为了解决什么问题？

HTML5 将视频、音频、图像、动画以及与设备的交互都进行了规范，设计的目的就是为了在各种移动设备上支持多媒体运行。

## 4、H5 和 HTML 的区别？

##### 1、文档声明

HTML：

```html
<!DOCTYPE html PUBLIC "-//w3c//DTD HTML 4.01//EN" "http://www.w3.org/TR/xhtml4/strict.dtd">
<!DOCTYPE html PUBLIC "-//w3c//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

HTML5：

```html5
<!DOCTYPE html>
```

H5 更简洁易懂。

##### 2、结构语义

HTML 没有体现结构语义化的标签，如：

```html
<div id="site">java面试题</div>
```

HTML5 添加了许多具有语义化的标签，如：

```html
<article>
  <aside>
    <audio>
      <bdi> ...</bdi>
    </audio>
  </aside>
</article>
```

##### 3、绘图

HTML5 可以使用`<canvas>`元素在网页上简单绘制图像。

##### 4、音视频

HTML 只能使用 Flash 播放器支持音频和视频。

HTML5 使用`<audio>`和`<video>`元素来支持音频和视频，这也是其最大的区别。

## 5、Servlet 是什么？

Servlet，全称 Java Servlet，是 Sun 公司制定的一种用来扩展 Web 服务器端功能的组件规范，也就是 Java 编写的服务器端程序，可用于实现 HTTP 接口或者生成动态 Web 内容。

Servlet 是运行在 Web 服务器中的 Java 类，它可以接收来自客户端浏览器的 HTTP 请求，并生成相应的 HTTP 响应结果。

Servlet 可以与 JavaServer Pages（JSP）、JavaServer Faces（JSF）等技术一起使用，来实现 Web 应用的开发。

## 6、Servlet 的生命周期是怎样的？

Servlet 生命周期可被定义为从创建直到销毁的整个过程。

##### 以下是 Servlet 遵循的过程：

- Servlet 构造初始化。
- Servlet 初始化后调用**init()**方法。
- Servlet 调用**service()**方法来处理客户端的请求。
- Servlet 销毁前调用**destroy()**方法。
- 最后，Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。

![](/images/WEB/6.jpg)

## 7、Servlet 有哪些核心的方法？

##### 1、init

服务器装入 Servlet 时执行，在 Servlet 的生命周期中，仅执行一次。

##### 2、service

每收到一个请求时，service()方法就被调用。

##### 3、doGet

接收 GET 请求。

##### 4、doPost

接收 POST 请求。

##### 5、destroy

服务器停止且卸装 Servlet 时执行该方法，在 Servlet 的生命周期中，仅执行一次。

##### 6、getServletConfig

该方法返回一个 ServletConfig 对象，该对象用来返回初始化参数和 ServletContext（Servlet 的环境信息）。

##### 7、getServletInfo

它提供有关 Servlet 的信息，如作者、版本、版权等。

## 8、Servlet 有哪几种作用域？

Servlet 中的三大作用域如下图所示：

![](/images/WEB/8.jpg)

## 9、Servlet 是线程安全的吗？

##### Servlet 不是线程安全的！！！

尽量别定义全局类型的变量，要把变量分别定义在 doGet()和 doPost()等方法内。

## 10、Servlet 支持异步处理吗？

Servlet3 开始支持，来看使用示例：

![](/images/WEB/10.jpg)

访问 localhost:8080/test

页面首先输出

```java
servlet started.
servlet end.
```

过了 5 秒后再输出

```java
hello servlet3.
```

可以看出 servlet 立马返回了，但没有关闭响应流，只是把 response 响应传给了线程，线程再继续输出，我们可以将比较费资源消耗时间的程序放到异步去做，这样很大程度上节省了 servlet 资源。

SpringMVC3.2 开始也加入了 servlet3 异步处理这个特性，有兴趣的同学可以研究下。

从上面的 servlet 注解也可以看出来，servlet3 完全解放了 web.xml 配置，通过注解可以完全代替 web.xml 配置。

## 11、Servlet 是单例还是多例？

在 Servlet 规范中，对于 Servlet 单例与多例定义如下：

> "Deloyment Descriptor", controls how the servlet container provides instances of the servlet. For a servlet not hosted in a distributed environment(the default), the servlet container must use only one instance per servlet declaration. However, for a servlet implementing the SingleThreadModel interface, the servlet container may instantiate multiple instances to handle a heavy request load and serialize requests to particular instance.

上面规范提到，如果一个 Servlet 没有被部署在分布式的环境中，一版 web.xml 中声明的一个 Servlet 只对应一个实例。

而如果一个 Servlet 实现了 SingleThreadModel 接口，就会被初始化多个实例。

## 12、Servlet 中的请求和响应对象，是单例还是多例？

在 Web 服务器运行期间，每个 Servlet 只会创建一个实例对象，它是单例的。

然而，针对每个 HTTP 请求，Web 服务器都会调用所请求 Servlet 实例的 service 方法，然后重新创建一个 HttpServletRequest 对象和一个 HttpServletResponse 对象，所以它们是多例的。

## 13、Servlet 一次请求的流程是怎样的？

具体如下图所示：

![](/images/WEB/13.jpg)

（1）首先浏览器向 Web 服务器发送了一个 HTTP 请求。

（2）Web 服务器根据收到的请求，创建目标 Servlet 实例对象并调用 init 方法初始化。

（3）Web 服务器创建一个 HttpServletRequest 和 HttpServletResponse 对象。

（4）调用 service 方法处理请求消息，并将请求对象（HttpServletRequest）和响应对象（HttpServletResponse）作为参数传递进去，然后读取 HttpServletRequest 请求信息，并将处理后的响应数据写入到 HttpServletResponse 对象中。

（5）service 方法处理完后返回。

（6）读取响应信息。

## 14、Servlet 和 JSP 有什么区别？

##### 主要有以下 4 点区别：

（1）JSP 是 Servlet 的扩展，JSP 编译后是“Servlet”类，所以本质上就是 Servlet；

（2）Servlet 是在 Java 代码中嵌入 HTML 代码，JSP 是在 HTML 代码中嵌入 Java 代码；

（3）Servlet 可用入接收和处理客户端请求，JSP 仅适用于页面内容展示；

（4）Servlet 偏重于业务逻辑，而 JSP 偏重于视图；

## 15、JSP 是什么？

JSP 全称 Java Server Pages，它使用 JSP 标签在 HTML 网页中插入 Java 代码，是一种动态网页开发技术。

## 16、JSP 有哪些内置对象？

##### JSP 一共有 9 个内置对象：

（1）request：获取客户端请求的信息

（2）response：向客户端发出响应

（3）session：保存客户端会话信息

（4）out：管理客户端输出

（5）application：表示整个应用环境信息

（6）config：表示 Servlet Config 信息

（7）exception：表示页面中发生的异常信息

（8）pagecontext：表示当前 JSP 页面上下文信息

（9）page：表示当前 JSP 页面本身

## 17、JSP 有哪些基本动作？

##### JSP 一个有以下 6 种基本动作：

（1）include：引入一个文件

（2）forward：转发请求

（3）useBean：创建 bean 实例

（4）setProperty：设置 JavaBean 的属性

（5）getProperty：获得 JavaBean 的属性

（6）plugin：插入 Java Applet 或 JavaBean

## 18、JSP 有哪几种作用域？

JSP 有以下 4 种作用域：

（1）page：表示当前页面对象

（2）request：表示当前请求对象

（3）session：表示当前会话对象

（4）application：表示当前应用对象

## 19、JSP 有哪些常用指令？

##### JSP 常用的指令有 3 种：

（1）page：定义页面的一些属性

（2）include：引入一个静态的 JSP 页面

（3）taglib：引入一个标签库

## 20、forward 和 redirect 的区别？

##### 主要有以下 4 点区别：

（1）forward 是请求转发，而 redirect 是请求重定向；

（2）forward url 在地址栏不会发生改变，redirect 则会发生改变；

（3）forward 可以共享 request 里的数据，redirect 则不能；

（4）forward 比 redirect 效率更高；

## 21、如何实现隐藏的表单域？

在 form 表单中定义一个 hidden 类型输入框。

代码如下：

```html
<input type="hidden" name="java" value="java面试题" />
```

表单隐藏域只是肉眼不可见，但可以通过检查看到网页源码，所以并不能保证数据安全性。

## 22、什么是 AJAX？它的作用是什么？

AJAX 是一种用于创建快速动态网页的技术，它可以在浏览器与服务器之间实现异步数据交互，不需要刷新整个页面即可更新部分页面内容。

AJAX 的主要作用如下：

##### （1）网页局部刷新

在传统的 Web 应用中，每次进行数据交互都需要刷新整个页面，用户体验不佳。而 AJAX 可以实现局部刷新，只更新页面的一部分内容，从而提高了用户的体验。

##### （2）提高页面响应速度

AJAX 可以异步地发送请求和接收响应，不会阻塞页面的其他操作，可以大大提高页面响应速度。

##### （3）提高用户交互性

通过 AJAX，可以实现实时数据的获取和呈现，从而提高用户交互性。

##### （4）减轻服务器压力

通过 AJAX，可以实现动态加载数据，不需要每次请求整个页面，减轻服务器的负担。

## 23、AJAX 应用和传统 Web 应用有什么不同？

传统的 Web 应用通过浏览器向服务器发送请求，服务器返回完整的 HTML 页面，**每次与服务器交互都需要刷新整个页面，用户体检较差**。AJAX 应用则可以通过**异步请求**与服务器交互，**只更新部分页面内容**，不需要刷新整个页面，可以提高用户体验。

AJAX 应用与传统 Web 应用的主要区别：

##### 异步请求：

传统的 Web 应用通过同步请求与服务器交互，需要等待服务器返回完整的 HTML 页面。而 AJAX 应用可以通过异步请求与服务器交互，只更新部分页面内容，不需要刷新整个页面，可以提高用户体验。

##### 数据交互：

传统的 Web 应用主要使用表单来向服务器传递数据，而 AJAX 应用则可以使用 JSON 格式来传递数据，提高了数据交互的效率和灵活性。

##### 安全性：

由于 AJAX 应用可以直接向服务器发送异步请求，因此需要注意安全性问题，防止恶意攻击。

## 24、AJAX 的工作原理是什么？

AJAX 的工作原理：

- 浏览器端使用 JavaScript（XHR，即 XMLHttpRequest 对象）向服务器发送异步请求；
- 服务器接收到请求后，处理请求并生成所需要的数据；
- 服务器将生成的数据以 XML、JSON 或 HTML 等格式返回给浏览器；
- 浏览器接收到服务器返回的数据后，使用 JavaScript 处理并更新部分网页内容。

## 25、怎么优化 Web 前端的性能？

一般网站优化都是优化后台，如接口的响应时间、SQL 优化、后台代码性能优化、服务器优化等。高并发情况下，对前端 web 优化也是非常重要的。

下面说说几种常见的优化措施：

##### 1、HTML CSS JS 位置

一般需要将 CSS 放页面最上面，即 HEAD 部分，而将 JS 代码放页面底部。因为页面需要加载为 CSS 才进行渲染，而 JS 如果不是在页面加载之前就执行就要放到页面最底部，一面在页面展示之前因 JS 过多加载而影响页面渲染速度。

##### 2、引用文件位置

有一些插件需要引用到远程的图片、CSS、JS、图标等，如果远程的资源连接网速不佳，如国外的某些资源，会造成网页阻塞，同样也会造成页面展示问题，尽量能把引用远程的资源能本地化。

##### 3、减少后台请求

每个请求都是耗费资源影响系统性能的，所以，能减少后台请求就减少。如，尽量的将同一个资源（图片、JS、CSS 等）合并成一个文件，页面只要请求一次即可，这样就节省了很多 http 连接的开销及往返的时间损耗。

另外一方面，如果是关于抽奖、摇一摇、秒杀等功能，可以限制发往后台的频率，如前端操作 10 次才往后端发一次请求，这样从前端就做到了后台的流量控制，把流量控制到访问的最外层是最好的，尽量不要让请求落到底层。

##### 4、压缩传输

http 压缩可以对纯文本可以压缩至原内容的 40%，从而节省了 60%的数据传输，GZIP 是一种常用的压缩编码。因此，对文本类型的资源如 CSS、JS、HTML 启用 GZIP 压缩加速 http 传输速度。

##### 5、减少 cookie 传输

cookie 会包含在每次请求和响应中，如果 cookie 过多会影响 http 响应速度，所以高并发情况下尽量控制 cookie 的传输量，nginx 对 cookie 传输默认是做了限制的。另外，像 CSS、JS、图片等静态资源可以启用单独域名，禁用 cookie 对静态资源的传输，这样就能大大提高效率。

##### 6、浏览器缓存

高并发情况下，可以将一些不怎么变动的东西缓存到浏览器 cache 中，或者一些活动内容可以提前将内容在客户端缓存起来，以免活动开始大量请求涌入服务器。

##### 7、CDN

之前的文章有讲过 CDN 的概念，它就是一个静态内容分发网络，本质就是静态资源的缓存，可以将静态资源放到 CDN 上，这样，用户就能离自己最近的地方获取到资源，大大提高了用户访问速度。

##### 8、反向代理

常用的反向代理 nginx 除了负载均衡功能，他也可以通过配置缓存功能来加速请求响应速度，当用户第一次访问的时候静态资源就可以被缓存到反向代理服务器上，这样其他用户的请求就能直接从反向代理服务器直接获取返回，这样也起到了静态资源缓存的作用。

## 26、什么是 MVC？分别代表什么？

##### MVC 是指：

- M：业务模型（Model）
- V：用户界面（View）
- C：控制器（Controller）

使用 MVC 模式的目的是将 M 和 V 的实现代码分离，从而使同一个程序可以使用不同的表现形式。

其中，View 的定义比较清晰，就是用户界面。

## 27、你知道的 MVC 框架有哪些？

我知道的有以下几款：

- Struts / Struts2
- Spring MVC（国内主流）
- JSF
- JFinal
- Grails
- Play
- ...

## 28、拦截器和过滤器的区别？

##### 有几点最主要的区别：

（1）过滤器是 Servlet 容器的组件，所以需要依赖 Servlet 容器；拦截器则是在具体的框架中实现，如：Spring MVC，不用依赖 servlet 容器；

（2）过滤器拦截的是 web.xml 配置的 Servlet 请求，而拦截器则是 Spring 中配置的请求；

（3）拦截器可以无缝使用 Spring IOC，而过滤器则不能；

（4）过滤器的执行顺序要早于拦截器，返回要晚于拦截器；

## 29、Cookie 和 Session 的区别？

##### 主要有以下 5 点区别：

（1）Cookie 保存在客户端浏览器中，而 Session 保存在服务器端；

（2）Cookie 只能通过保存在客户端浏览器中实现，而 Session 可以通过 Tomcat、Redis、数据库等各种第三方实现；

（3）Cookie 中保存的数据不安全，Cookie 可以被篡和伪造改以进行各种欺骗攻击；而 Session 中的数据是保存在服务端的，安全可靠；

（4）Session 过多会影响服务器性能，而 Cookie 则不会；

（5）Cookie 单个大小限制是：4K，而 Session 则受内存等存储媒介限制；

## 30、Session 一定要依赖 Cookie 吗？如果 Cookie 被禁用，Session 还能保持吗？

##### 答案：不一定。

因为 Session 不是一定要依赖 Cookie，如果 Cookie 被禁用，可以两种解决方案：

##### （1）可以使用 URL 重写技术来维护 Session 会话

如常用的 urlrewriter 框架，可以重写 URL，可以在每次的 HTTP 请求 URL 中携带用来标识 Session 参数 jsessionid，如：

> http://www.slq.com/hello;jsessionid=xxx

（2）使用表单隐藏字段来存储和传递 Session 参数 jsessionid

## 31、什么是跨域？

跨域是指在浏览器中，Web 应用程序从一个域名的网页去请求另一个域名的资源时，浏览器会阻止这个跨域请求，这种请求被称为跨域请求。

跨域请求的产生是由于浏览器的同源策略，即浏览器限制了来自不同源的网页之间的交互，从而保障了 Web 应用程序的安全性。

跨域的严格一点来说就是只要**协议，主机名，端口**有任何一个的不同，就被当作是跨域。

下面是一个跨域的例子：

| 主机名       | 协议 | 页面       |
| ------------ | ---- | ---------- |
| www.slq.com  | http | index.html |
| test.slq.com | http | test.html  |

在上面的例子中，因为主机名不同，当http://www.slq.com/index.html页面中通过AJAX请求访问http://test.slq.com/test.html时，就会产生跨域请求。

## 32、为什么会出现跨域的情况？

现实工作开发中经常会有跨域的情况，因为公司会有很多项目，也会有很多子域名名，各个项目或者网站之间需要相互调用对方的资源，这样就避免不了跨域请求。

## 33、跨域有哪些解决方案？

##### 实现跨域有以下几种方案：

- 服务器端运行跨域设置 CORS 等于\*；
- 在单个接口使用注解@CrossOrigin 设置跨域；
- 使用 jsonp 设置跨域；
- nginx 设置 Access-Control-Ofigin\*

## 34、Web 项目开发要注意哪些安全问题？怎么防范？

Web 开发需要注意以下安全问题：

- SQL 注入攻击
- 跨站脚本攻击（XSS）
- 跨站请求伪造（CSRF）
- 会话固定攻击
- 文件上传漏洞

## 35、什么是 SQL 注入攻击？

SQL 注入即通过 WEB 表单域插入非法 SQL 命令，当服务器端构造 SQL 时采用拼接形式，非法 SQL 与正常 SQL 一并构造并在数据库中执行。

简单的 SQL 注入的例子：

> 例 1：test123456 or 1=1;

加上 or 1=1，如果没有防止 SQL 注入，这样攻击者就能成功登录。

> 例 2：test123456',drop table xxx-

这样会删除一个表，-后面的就是注释

## 36、怎么防御 SQL 注入攻击？

##### 常见的防御手段：

##### 1、禁止采用 SQL 拼接的形式

这也是最重要的一点，要采用参数化的形式。

如 Mybatis 参数占位符要使用##，它会给参数默认带上单引号，所有输入的字符当作一个参数来处理，而不是命令，不要使用$$，它不会带单引号有 SQL 注入的风险。

##### 2、过滤或转义特殊字符

特殊字符包括如：单引号、杠等，或者使用正则表达式过滤如：drop table、delete...、update...等危害数据库安全的请求，前后端都要采用措施。

##### 3、数据库用户权利最小化

不要使用最大权限的管理员进行连接，为每个应用使用独立的所在库的账号进行连接，这样使权利最小化。

##### 4、发生异常不要使用错误回显

即显示默认的服务器 500 错误，把代码及表名信息直白显示在网页上，这样攻击者就能通过恶意操作使网页出现 500 错误从而看到数据库表名等内部信息。

##### 5、加密存储敏感信息

用户敏感信息如省份证、手机号、邮箱、卡号等一定要加密存储，而且要妥善保密密钥。

## 37、什么是 XSS 攻击？

XSS 全称为：**Cross Site Script**，即跨站点脚本攻击。

XSS 攻击时最为普遍且中招率最多的 web 攻击方式，一般攻击者通过在网页而已植入攻击脚本来篡改网页，在用户浏览网页时就能执行恶意的操作，像 html、css、img 都有可能被攻击。

像前不久微信貌似就中招，好像是在朋友圈发送一个带有脚本的链接，然后通过点击该链接就会弹出一个提示，虽然没有造成什么影响，但这是 XSS 攻击最鲜明的特点。

---

##### XSS 现在主要分为以下两种攻击类型：

##### 1、反射型漏洞

这种类型攻击者一般通过在网页中嵌入含有恶意攻击脚本的链接，或者通过发送带脚本的链接给受害者，这个脚本链接是攻击者自己的服务器，用户通过点击该链接就能达到攻击的目的。

如：

```html
http://www.slq.com/p=
<script src="...">
```

这样受害者的网页就潜入了这段脚本，受害者通过点击链接触发攻击脚本。

新浪微博曾经就出现过一次较为严重的 XSS 攻击事件，攻击者通过发送一个带有链接的微博诱导用户点击，通过点击脚本链接大量用户自动发送某些不良信息和死信并自动关注攻击者的微博账号，这是典型的反射性漏洞。

这次新浪微博事件显然是一次推广营销而已，并没有严重影响新浪的服务，然而现实中攻击者可以通过窃取用户 cookie 获取用户名密码等重要信息来伪造用户交易、窃取用户的财产等影响用户财产安全的恶意行为。

##### 2、存储型漏洞

这种类型是影响最为广泛的且危害网站安全自身的攻击方式，攻击者通过上传恶意脚本到网站服务器或保存到数据库中，恶意脚本就会包含在网页中，这样会导致所以浏览该网页的用户有中招的可能。

这种攻击类型一般常见在博客、论坛等网站中。

## 38、怎么防御 XSS 攻击？

常见的防御手段：

##### 1、危险字符过滤

即对用户输入的危险字符进行转义，如>转义为"&gt"，<转译为"&lt"，如果被转义有误解，可以对`<script src="" >`这种类型的才进行转义，这样就能避免大部分的 XSS 攻击。

##### 2、使用 http only 的 cookie

httpOnly 由微软在 IE 中提出，禁止用户在浏览器中通过脚本访问带有 httpOnly 的 cookie。

有了这个特性，如果是用户敏感信息保存在 cookie 中的，可以通过在 cookie 加下 httpOnly 属性避免 XSS 攻击 cookie 造成用户信息泄露。

## 39、什么是 CSRF 攻击？

CSRF 全称：**Cross Site Request forgery**，即跨站点请求伪造攻击。

攻击者通过跨站点进行伪造用户的请求进行合法的非法操作，其攻击手法是通过窃取用户 Cookie 或服务器 Session 获取用户身份，在用户不知情的情况下在攻击者服务器模拟伪造用户真实的请求。

## 40、怎么防御 CSRF 攻击？

##### 常见的防御手段：

既然是跨站点攻击，所以防御的手段无非是识别请求的来源是否合法。

##### 1、检查 referer

referer 是 http header 的请求头属性，标识了请求的来源地址，通过检查这个属性可以判断请求地址是否合法域名。很多网站的防盗链功能就是这麽做的，如果不是本站的域名请求就拒绝其链接，或者返回一个允许在外站显示的公共图片。

##### 2、检查表单 token

在跳转到每个表单时，每次都随机生成一个不固定的 token 值用于回传验证，所以如果是用户正常提交的话肯定会包含这个值，而这个值不存在 cookie 中攻击者拿不到这个值，自然提交的请求是不合法的。

如果不适用 cookie 的前提下也可以设置 cookie 为 httpOnly 禁止脚本获取到 cookie 信息。

##### 3、检查验证码

使用验证码，简单粗暴，判断请求的验证码是否但用户体验会非常差，用户不希望所有的操作都要输入验证码，所以，不是非常重要的环节建议不要使用验证码。

## 41、什么是会话固定攻击？

##### 什么是会话固定攻击？

会话固定攻击（session fixation attack）是利用应用系统在服务器的会话 ID 固定不变机制，借助他人用相同得会话 ID 获取认证和授权，然后利用该会话 ID 劫持他人的会话以成功冒充他人，造成会话固定攻击。

##### 看下面 Session Fixation 攻击的一个简单例子：

![](/images/WEB/41.jpg)

##### 整个攻击流程是：

1、攻击者 Attacker 能正常访问该应用网站；

2、应用网站服务器返回一个会话 ID 给他；

3、攻击者 Attacker 用该会话 ID 构造一个该网站链接发给受害者 Victim；

4-5、受害者 Victim 点击该链接，携带攻击者的会话 ID 和用户名密码正常登录了该网站，会话成功建立；

6、攻击者 Attacker 用该会话 ID 成功冒充并劫持了受害者 Victim 的会话。

##### 攻击分析

攻击的整个过程，会话 ID 是没变过的，所以导致此漏洞。

## 42、怎么防御会话固定攻击？

##### 1、登录重建会话

Session ID 使用一次即作废，每次登录后都重置会话 ID，并生成一个新的会话 ID，这样攻击者就无法用自己的会话 ID 来劫持会话。

核心代码如下：

```java
// 会话失效
session.invalidate();

// 会话重建
session = request.getSession(true);
```

或者定期更换 Session ID，可以增加攻击者的攻击成本，降低攻击的可能性。

##### 2、禁用客户端访问 Cookie

此方法也避免了配合 XSS 攻击获取 Cookie 中的会话信息以达成会话固定攻击，在 Http 响应头中启用 httpOnly 属性，或者在 Tomcat 容器中配置。

##### 3、不使用 Cookie 保存 Session ID

可以使用其他方式保存 Session ID，比如将 Session ID 存储在服务器端的缓存或者数据库中。

## 43、什么是文件上传漏洞？

文件上传漏洞是指攻击者通过某种方式绕过了应用程序的文件上传机制，成功上传恶意文件到服务器上。

这种漏洞通常发生在 Web 应用程序中，攻击者通过上传恶意文件，可以在服务器上执行任意代码，例如在服务器上创建 Web Shell、下载恶意软件等，从而控制服务器或者窃取敏感数据。

文件上传漏洞通常是由于应用程序对上传文件的类型、大小、后缀等没有进行充分的校验，或者上传的文件名可以被恶意构造而导致的。攻击者可以通过在上传文件名中添加可执行文件的后缀、使用压缩文件、通过修改文件格式等方式绕过文件上传校验，上传包含恶意代码的文件到服务器上，从而达到控制服务器的目的。

## 44、怎么防御文件上传漏洞？

防御文件上传漏洞可以采取以下措施：

- 对上传的文件进行类型、大小、后缀等校验；、
- 对上传的文件进行安全扫描；
- 限制上传的文件权限；
- 避免上传文件直接被执行；
- 做好服务器安全加固；
- 定期更新漏洞库和安全补丁；
- 使用第三方文件上传工具，比如 Apache Commons FileUpload，这些工具通常会实现文件上传的安全性检查，避免常见的文件上传漏洞。
