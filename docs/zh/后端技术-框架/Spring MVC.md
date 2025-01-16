## 1、Spring MVC 框架有什么用？

Spring MVC 它是一个基于 Java 的 MVC 框架，是 Spring 全家桶的一部分，可用于构建 Web 应用程序。它提供了一个设计良好的架构，使得开发者能够轻松地创建灵活、松散耦合的 Web 应用程序。

Spring MVC 有助于分离应用程序的不同方面，如输入逻辑，业务逻辑和 UI 逻辑，同时在所有这些元素之间提供松散耦合。

## 2、Spring MVC 框架有哪些优势？

Spring MVC 框架的优势，不完整统计如下。

##### 1、无缝集成

Spring MVC 是 Spring 框架的一个模块，可以天然与 Spring 框架的其他模块（例如 Spring TX、Spring AOP 等）进行无缝集成。

##### 2、松散耦合

Spring MVC 框架使用松散耦方式，可以灵活地替换组件或修改应用程序的配置，而无需修改代码。这样可以提高代码的可维护性、可扩展性和可重用性。

##### 3、MVC 架构

Spring MVC 使用 MVC 架构，将应用程序分为三个组件，即模型（Model）、视图（View）和控制器（Controller），分工明确，代码清晰，易于维护和扩展。

##### 4、功能丰富

Spring MVC 提供了许多功能，例如数据绑定、表单验证、异常处理、国际化、RESTful API 等，可以满足各种 Web 应用程序的需求。

##### 5、社区支持

Spring MVC 框架有广泛的用户群体和活跃的社区支持，可以获取大量的文档、教程和代码示例，加速开发过程，减少学习成本。

## 3、Spring MVC 和 Struts2 的区别？

##### 主要有以下几点区别：

1、Spring MVC 是基于方法的拦截，即一个方法映射一个 URL，是单例模式；而 Struts2 是基于类的拦截，每次请求就会创建一个 Action，是多例模式。

2、 Spring MVC 的入口是 Servlet, 即: DispatcherServlet, 而 Struts2 的入口是 Filter, 即: StrutsPrepareAndExecuteFilter。

3、Spring MVC （Spring 3.0）可以做到 0 配置文件，而 Struts2 则不行。

4、Spring MVC 开发效率、性能、安全性都要远高于 Struts2。

## 4、SpringMVC 中的 DispatcherServlet 是什么？

DispatcherServlet 是 Spring MVC 框架的核心组件之一，是 Spring MVC 的前端控制器，也是一个 Servlet。

DispatcherServlet 它是整个请求处理流程的核心，它负责接收所有的客户端请求，根据请求的 URL 调用对应的控制器，然后将控制器返回的视图名交给视图解析器进行解析，并最终将渲染结果返回给客户端。

## 5、SpringMVC 的请求流程是怎样的？

##### DispatcherServlet 的工作流程图：

![](/images/Spring MVC/5.jpg)

1、客户端发送的请求被前端控制器 DispatcherServlet 捕获。

2、DispatcherServlet 根据 servlet.xml 配置对请求 URL 进行解析，得到请求资源标识符（URI），然后根据该 URI 调用 HandlerMapping 获得该 Handler 配置的所有相关的对象。

3、返回一个 HandlerExecutionChain 执行链对象。

4、DispatcherServlet 根据该 Handler 选择一个合适的 HandlerAdapter，并开始执行拦截器（Handlerlnterceptor）的 **前置处理（preHandler）**方法。

5、提取 Request 中的模型数据填充 Handler 入参，并开始执行 Handler (Controller)。

- 将请求数据转换成对象，将对象转换为指定的响应信息
- 对请求数据进行转换
- 对请求数据进行格式化
- 验证数据有效性并将结果存储到 BindingResult 或 Error 中

6、Handler 执行完成后，向 HandlerAdapter 返回一个 ModelAndView 对象。

7、HandlerAdapter 然后向 DispatcherServlet 返回 ModelAndView 对象，并开始执行拦截器（Handlerlinterceptor）的**后置处理(postHandler)** 方法。

8、根据返回的 ModelAndView 选择一个适合的 ViewResolver。

9、ViewResolver 返回一个 View 视图对象给 DispatcherServlet。

10、使用 Model 和 View 开始渲染视图。

11、视图负责将渲染结果呈现给客户端页面。

## 6、Spring MVC 有哪些处理组件？

##### 主要有以下几个组件：

- **DispatcherServlet**：是 Spring MVC 的核心组件，用于接收 HTTP 请求并将请求分派到相应的控制器（Controller）进行处理
- **HandlerMapping**：根据请求 URL 和 HTTP 方法，将请求映射到相应的控制器处理器对象（Handler）。
- **HandlerAdapter**：负责将请求交给控制器处理器对象（Handler）进行处理，并将处理结果封装为 ModelAndView 对象返回
- **Controller**：用于处理来自 DispatcherServlet 的请求，并返回相应的视图（View）。
- **ViewResolver**：用于将逻辑视图名解析为具体的视图实现。
- **View**：用于将模型数据渲染成 HTML 或其他格式的响应，以返回给客户端。
- **Model**：用于存储控制器（Controller）返回给视图（View）的数据。
- **Handlerlnterceptor**：用于在请求被处理之前或之后，拦截和修改请求或响应。
- **ExceptionHandler**：用于处理控制器（Controller）抛出的异常，以返回适当的错误响应。

## 7、Spring MVC 的 HandlerMapping 作用？

HandlerMapping 是 Spring MVC 中的处理映射器，它是一个接口：

![](/images/Spring MVC/7_1.jpg)

Spring MVC 提供了一系列 HandlerMapping 实现，类结构类如下：
![](/images/Spring MVC/7_2.jpg)

##### HandlerMapping 的作用有三个：

1、请求 URL 到控制器类（Controller）的映射注册；

2、根据请求 URL 找到对应的控制器类（Controller）；

3、拦截器的注册；

## 8、Spring MVC 的 HandlerAdapter 作用？

HandlerAdapter 的作用是负责将请求交给控制器处理器对象（Handler）进行处理，并将处理结果封装为 ModelAndView 对象返回。

HandlerAdapter 是 Spring MVC 中的处理器适配器，它是一个接口：

![](images/Spring MVC/8_1.jpg)

Spring MVC 提供了一系列 HandlerAdapter 实现，类结构类如下：

![](/images/Spring MVC/8_2.jpg)

Spring MVC 有多个 HandlerAdapter 的实现类可供选择，默认情况下，Spring MVC 会根据请求 URL 和处理器（Handler）的类型，选择合适的 HandlerAdapter 实现类来处理请求。如果需要自定义控制器方法的调用和响应处理逻辑，可以实现 HandlerAdapter 接口来进行定制。

## 9、Spring MVC 中 HandlerMapping 和 HandlerAdapter 的区别？

HandlerMapping 负责确定并找到对应的控制器类（Controller）处理当前请求，返回对应的控制器处理器对象（Handler）。

HandlerAdapter 负责使用控制器处理器对象（Handler）来处理请求，并返回 ModelAndView 对象。

## 10、SpringMVC 怎么实现 RESTful API？

创建一个控制器类，然后提供一个用于处理 RESTfuI API 的映射方法，如下面的示例：

```java
@Restcontroller
public class Usercontroller {
    @GetMapping("/users/{id}")
    public User getuser(@pathvariable("id") Long id) {
        // .
    }
}
```

映射请求方法的注解可以是 @GetMapping、@PostMapping、@DeleteMapping 等等。。

## 11、Spring MVC 怎么获取当前 request？

##### 1、使用成员变量直接注入对象，不会有线程安全问题。

```java
@Autowired
private HttpservletRequest request;
```

##### 2、直接在方法上定义 request 参数，可直接使用。

```java
@RequestMapping("/javastack/login")
public String login(HttpservletRequest request) {
    request...
}
```

> Response/ Session 对象的获取方式同上。

## 12、Spring MVC 常用的注解有哪些？

##### 常用的的一些 Spring MVC 注解：

- **@Component**：用在类上，用于注册一个普通的 Spring Bean。
- **@Controller**：用在类上，用于注册一个控制器。
- **@RestController**：用在类上，用于注册一个控制器，相当于**@Controller** + **@ResponseBody**。
- **@Service**：用在类上，用于注册一个服务层标识的 Bean。
- **@Repository**：用在类上，用于注册为一个 DAO 层标识的 Bean。
- **@RequestMapping**：用在类、方法上，映射 URL 的访问路径。
- **@GetMapping**：用在方法上，映射一个 GET 请求的 URL。
- **@PostMapping**：用在方法上，映射一个 POST 请求的 URL。
- **@ResponseBody**：用在类、方法上，方法以 http body 形式响应数据。
- **@PathVariable**：用在方法参数上，从 URL 路径上绑定参数。
- **@RequestParam**：用在方法参数上，接收指定名称的请求参数。
- **@RequestBody**：用在方法参数上，表示从 http body 接收参数。
- ...

## 13、SpringMVC 中的拦截器是什么？有哪些应用场景？

Spring MVC 框架中的拦截器，主要用于在请求处理的不同阶段中，拦截请求并执行特定的操作。

拦截器在 DispatcherServlet 接收到请求之后，但在控制器处理请求之前执行。拦截器可以在请求处理的任何阶段执行逻辑，例如在请求处理之前、之后或之间。在每个阶段，拦截器也还可以修改请求和响应。

> ##### 拦截器的常用应用场景：
>
> 拦截器可以用于实现登录身份验证、字符编码处理、字符过滤、日志记录、安全性检查和性能监控等功能。

## 14、SpringMVC 拦截器怎么定义？

Spring MVC 定义拦截器，只需要实现 **Handlerlnterceptor** 接口，然后注册到 Spring 容器中。

定义拦截器示例代码如下:

```java
@component
public class TestInterceptor implements HandlerInterceptor {
    //在请求到达控制器之前执行
    @override
    public boolean preHandle(HttpservletRequest request, HttpservletResponse response, Object handler) throws Exception {
        System.out.printin("preHandle method is calling...");
        // 返回true 表示继续执行后续的拦截器或控制器;
        //返回faLse 表示拦截语求;
        return true;
    }

    //在请求到达控制器之后，视图渲染之前执行
    @override
    public void postHandle(HttpservletRequest request, HttpservletResponse response, object handler, ModelAndview modelAndview) throws Exception {
        //
    }

    //在请求完成之后，视图渲染之后执行
    @override
    public void aftercompletion(HttpservletRequest request, HttpservletResponse response, Object handler, Exception ex) throws Exception {
        //
    }
}
```

## 15、SpringMVC 拦截器有哪些流程方法？都必须实现吗？

Spring MVC 拦截器**Handlerlnterceptor** 接口中的三个流程方法：

- **preHandle**：返回 true 表示不拦截，继续执行后续的拦截器，false 表示拦截请求。
- **postHandle**：在请求到达控制器之后，视图渲染之前执行，无返回值（void）；
- **afterCompletion**：在请求完成之后，视图渲染之后执行，无返回值（void）；

> 这三个流程方法不是必须实现的，可以根据需要选择实现。如果 preHandle 方法不实现的话，默认返回 true，其他两个方法不实现,则不会有任何动作。

## 16、pringMVC 多个拦截器的执行顺序是怎样的？

在 Spring MVC 中，多个拦截器可以组成一个拦截器链（Interceptor Chain），**默认情况下，按照拦截器的配置顺序来执行**，也可以支持自定义拦截器的执行顺序。

## 17、SpringMVC 如何自定义拦截器执行顺序？

> 拦截器的执行顺序可以通过配置文件或代码进行修改，可以通过实现**Ordered** 接口或使用 **@Order** 注解来改变拦截器执行顺序。

如果实现了 Ordered 接口，getOrder 返回的整数值越小，优先级越高。

```java
public class LoginInterceptor implements HandlerInterceptor, Ordered {
    @override
    public int getorder() {
        return 1;
    }
    // ...
}
```

如果使用了 @Order 注解，可以在拦截器类上添加 @Order 注解，并指定一个整数值表示该拦截器的执行顺序，整数值越小，优先级越高。

```java
@order(1)
public class LoginInterceptor implements HandlerInterceptor {
	// ...
}
```

不指定数字，默认为最低优先级：

```java
int LOWEST_PRECEDENCE = Integer.MAX_VALUE;
```

## 18、Spring MVC 中 @RestController 和@Controller 的区别？

它们两个都用于定义控制器：

- **@Controller**：定义一个控制器，所有请求方法都跳转页面形式；
- **@RestController**：它是**@Controller and+@ResponseBody** 注解的组合，直接返回数据，而不是跳转页面，比如常用的要返回 JSON 格式的数据，不用每个方法都加 **@ResponseBody** 注解。

## 19、Spring MVC 中 @RestControllerAdvice 和 @ControllerAdvice 的区别？

它们两个都用于处理全局异常：

- **@ControllerAdvice**：可以通过组合使用 **@ExceptionHandler、@InitBinder 和 @ModelAttribute** 注解来实现多种全局处理功能。
- **@RestControllerAdvice**：它是**@ControllerAdvice + @ResponseBody**注解的组合，直接返回带有异常信息的数据，而不是跳转页面，比如常用的要返回 JSON 格式的数据。

## 20、Spring MVC 中 @SessionAttributes 和@SessionAttribute 的区别？

一个单数，一个复数，但两者作用却相反。。

- **@SessionAttributes**：用在控制器类上，是将 Model 中的数据设置到 Session 中。
- **@SessionAttribute**：用在控制器方法参数上，设置方法参数的值从 Session 中获取。

## 21、SpringMVC 中的@RequestMapping 注解有啥用？

Spring MVC 中的 @RequestMapping 注解，它是一个用于映射请求 URL 的注解，可用于将特定 HTTP 请求映射到控制器类或者方法。

比如下面映射一个请求示例：

```java
@RequestMapping("/javastack/test")
public string test(string param) {
}
```

如果访问 /javastack/test 请求，Spring MVC 就会执行这个方法。

## 22、Spring MVC 中的@RequestMapping 注解有哪些用法？

@RequestMapping 注解有两种用法：

- **类级别**：映射请求的 URL，作用于类所有方法；
- **方法级别**：映射请求的 URL，作用于当前方法；

如果同时定义在类和方法上：

- 类级别(比如：/api)
- 方法级别(比如：/users/111)

此时，则最终映射路径为：/api/users/111。

## 23、Spring MVC 中 Model 和 ModelAndView 的区别？

Model、ModelMap 和 Map 仅用于在控制器和视图之间传递数据。

**ModelAndView=Model + View**，即除了传递模型数据之外，还可以支持视图跳转等设置，比如设置视图名称、错误信息等，让控制器能够更加灵活地控制请求的处理和响应。

## 24、Spring MVC 中 Model、ModelMap 和 Map 的区别？

在一个方法中同时注入这三种类型，调试一下：

```java
@RequestMapping("/javastack/test")
public String test(Model model, ModelMap modelMap, Map<string, object> map) {
    model.addAttribute("from1"，"小程序：Java面试库");
    modelMap.addAttribute("from2", "小程序: Java面试库");
    map.put("from3"，"小程序：Java面试库");
    return "index";
}
```

调试结果如下：
![](/images/Spring MVC/24_1.jpg)

这三个都是使用的同一个对象：BindingAwareModelMap，继续关系图如下：

![](/images/Spring MVC/24_2.jpg)

Model 定义的是一个模型接口，ModelMap 则是 Map 的实现，继承的 LinkedHashMap。

它们三个都是 BindingAwareModelMap 类的抽象，都能向页面传递参数，但使用方法上略有区别。Model 相对简单，只能添加参数，而 ModelMap 实现了 Map，所以，它们两个可以对模型中的参数进行增删改查等复杂操作，但是 ModelMap 要比 Map 功能更强大。

> ##### 功能从弱到强依次是：
>
> Model -> Map -> ModelMap

所以，如果只是简单的传递参数，使用其中任何一种都行。如果要对模型中的参数进行增删改查等复杂操作，使用 ModelIMap 或者 Map，或者统一使用 ModelMap，一劳永逸!

## 25、Spring MVC 怎么把 Model 数据共享给 Session？

可以在控制器类上使用**@SessionAttributes** 注解，它支持根据指定参数名称，或者参数类型共享 Model 中的数据。

示例代码例如：

```java
@SessionAttributes(value = {"name"}, types = {Integer.class})
@Restcontroller
@slf4j
public class Test {
    @RequestMapping("/javastack/test")
    public String test(Model model, Httpsession session) {
        model.addAttribute("name", "公众号： Java技术栈");
        model.addAttribute("fee1", 999);
        model.addAttribute("fee2", 1.33);

        log.info("name is {}", session.getAttribute("name"));
        log.info("fee1 is {}", session.getAttribute("fee1"));
        log.info("fee2 is (}", session.getAttribute("fee2"));
        return "ok";
    }
}
```

这里使用@SessionAttributes 注解指定了 Model 中的 name 属性，以及类型为 Integer 的属性才存储到 Session 中。

连续调用两次接口，看下日志：

```java
ame is null
fee1 is null
fee2 is null
name is公众号：Java技术栈
fee1 is 999
fee2 is null
```

第一次请求全部为 null 是正常的，因为第一次请求时数据还没有存储到 Session。

第一次请求 fee2 为 null，是因为它默认是 double 类型，没有设置共享到 Session。

## 26、Spring MVC 怎么映射一个控制器类？

##### 有两种处理方式：

1、如需正常视图跳转模式，在控制器类上使用@Controller 注解。

2、如果整个类的请求方法是要在 http body 中输出结果（一般为 JSON 格式数据），可以在控制器类上使用 @RestController 注解，相当于 **@Controller** + **@ResponseBody**。

示例代码如下：

```java
@controllerpublic class Test {
}
```

## 27、SpringMVC 控制器是单例模式还是？

Spring MVC 中的控制器（Controller）默认情况下是：**单例模式（Singleton）**，也就是说，Spring MVC 容器只会创建一个控制器实例,并在整个应用程序生命周期中重复使用该实例来处理请求。

## 28、SpringMVC 控制器为什么默认为单例模式？

默认单例模式的好处：

- **减少资源占用**：控制器单例可以避免在每个请求上创建新的对象实例，减少了系统资源的占用。
- **提高应用程序性能**：单例控制器可以使用对象池技术，提高对象的重用效率，从而提高应用程序的性能。
- **方便状态管理**：控制器单例可以方便地管理控制器的状态，避免多个控制器实例之间的状态冲突和同步问题。

使用多例模式，会带来更多的资源开销和性能问题，所以需要谨慎使用。

## 29、SpringMVC 控制器是线程安全的吗？怎么保证并发安全性？

Spring MVC 控制器（Controller）默认是单例模式，所以不是线程安全的，不要在 Controller 中定义及共享成员变量，否则会出现变量值错乱。

##### 解决方法：

1）可以使用 ThreadLocal 线程副本包装一下。

2）将 Controller 改为多例模式。

```java
@Scope("prototype")
```

## 30、SpringMVC 可以用在控制器上的注解有？

##### 可以用在控制器类上的注解举例：

- @Controller
- @RestController
- @ResponseBody
- @RequestMapping
- @ControllerAdvice
- @RestControllerAdvice
- @SessionAttributes
- @CrossOrigin
- ...

## 31、Spring MVC 怎么定义全局数据？

可以使用 **@ModelAttribute** 注解定义控制器中的全局数据，该注解可用于方法、方法参数上，用法有很多，以下是常用的用法。

```java
@Restcontroller
@slf4j
public class Test {

    @ModelAttribute("user")
    private User userModel() {
        User userInfo = new User("公众号：Java技术栈", Randomutils.nextInt(1000, 9999), "中国");
        return userinfo;
    }

    @ModelAttribute
    private void requestModel(@RequestParam(required = false) string name, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("address", "china");
    }

    @RequestMapping("/javastack/test1")
    public User testi(@ModelAttribute("user") User user) {
        return user;
    }

    @RequestMapping("/javastack/test2")
    public User test2(Model model) {
        User user = (User) model.getAttribute("user");
        return user;
    }

    @RequestMapping("/javastack/test3")
    public string test3(Model model) {
        String name = (String) model.getAttribute("name");
        String address = (String) model.getAttribute("address");
        return name + "," + address;
    }
}
```

每次调用一次控制器中的请求，都会先执行一次 **@ModelAttribute** 注解的方法，然后把全局数据提前放到 Model 中，然后在方法参数上又可以使用**@ModelAttribute**注解绑定 Model 中设置的数据。

> 如果要全局使用，可以新建一个**@ControllerAdvice** 注解的类，然后将**@ModelAttribute** 方法放在该类中即可，这样就不需要在每个 Controller 中定义了。

## 32、SpringMVC 可以用在方法上的注解有？

##### 可以用在方法上的注解举例：

- @RequestMapping
- @GetMapping
- @PostMapping
- @ResponseBody
- @ResponseStatus
- @ModelAttribute
- @lnitBinder
- @ExceptionHandler
- @CrossOrigin
- ...

## 33、Spring MVC 可以用在方法参数上的注解有？

##### 可以用在方法参数上的注解举例：

- @PathVariable
- @RequestPart
- @RequestParam
- @RequestHeader
- @RequestBody
- @RequestAttribute
- @ModelAttribute
- @SessionAttribute
- @Cookievalue
- ...

## 34、SpringMVC 中的数据绑定是什么？

Spring MVC 中的数据绑定，主要用于将请求参数绑定到 Java 对象上，数据绑定器支持各种数据类型，并可以自定义数据类型转换器以支持其他数据类型。

数据绑定也支持注解，可以在 Java 对象的属性上使用注解，以指定属性的名称、是否必需、格式和校验规则等。当请求参数与 Java 对象属性匹配时，数据绑定将自动将请求参数绑定到 Java 对象属性上。

## 35、SpringMVC 获取请求参数有哪些方式？

##### 常用的有以下几种方式：

1、直接从 request 对象中获取；

2、在方法上定义参数，参数名称需要与请求参数一致；

3、在方法上使用 @RequestParam 注解绑定自定义请求参数；

4、在方法上定义一个普通 Bean 类对象接收参数；

5、使用 @PathVariable 注解绑定 URL 上的参数；

6、使用 @RequestBody 注解绑定参数，一般用于 JSON 参数到普通 Bean 类对象的绑定；

等等..

## 36、SpringMVC 方法参数名和传入的不一致怎么处理？

可以在方法参数上使用**@RequestParam** 注解，它可以指定具体的参数名。

示例代码如下所示：

```java
@Restcontroller
@s1f4j
public class Iest {
    @RequestMapping("/javastack/test")
    public void test(@Requestparam(value = "param",required = false,defaultvalue = "公众号: Java技术栈") string name) {
        log.info("name is {}", name);
    }
}
```

参数说明：

- **name/value**：表示请求传递过来具体参数名称，可以不用和变量名称对应，比如这里传过来是“**param**"，接收的变量名称是"name"；
- **rquired**：是否必需，默认为 true，如果不存在参数，又不指定默认值，就会报错；
- **defaultValue**：指定不存在参数时的默认值。

## 37、Spring MVC 方法参数值怎么从 URL 中获取？

可以在方法参数上使用**@PathVariable** 注解，它可以获取 URL 中指定占位符中的参数。

示例代码如下所示：

```java
@Restcontroller
@s1f4j
public class Test {
    @RequestMapping("/javastack/test/{type}/{id}")
    public void test(@pathvariable("type") String type, @pathvariable("id") string id) {
        log.info("type is f)", type);
        log.info("id is f)", id);
    }
}
```

比如访问请求：

> http://localhost:8080/javastack/test/java/10001

输出结果：

> type is java
>
> id is 10001

另外，默认情况下，@PathVariable 获取参数是必须存在的（required = true），不然报错，可以修改为 false。

## 38、SpringMVC 方法参数值怎么从 Header 中获取？

可以在方法参数上使用 **@RequestHeader** 注解，它可以获取 HTTP Header 中指定的参数。

示例代码如下所示：

```java
@Restcontroller
@s1f4j
public class Test {
    @RequestMapping("/javastack/test")
    public void test(@RequestHeader(value = "user-agent", required = false, defaultvalue == "chrome") String userAgent) {
        log.info("userAgent is {}", userAgent);
    }
}
```

参数说明：

- **name/ value**：表示从 Header 中取值的参数名称，这里获取 Header 中的 user-agent 参数；
- **required**：是否必需，默认为 true，如果不存在参数，又不指定默认值，就会报错；
- **defaultValue**：指定 Header 中不存在参数时的默认值。

## 39、SpringMVC 方法参数值怎么从 Request 请求域中获取？

可以使用 **@RequestAttribute** 注解，示例代码如下：

```java
@Controller
@s1f4j
public class Test {
    @RequestMapping("/javastack/test1")
    public String testl(HttpservletRequest request) {
        request.setAttribute("value","公众号： Java技术栈");
        return "forward:/javastack/test2";
    }

    @RequestMapping("/javastack/test2")
    public String test2(@RequestAttribute(name "value",, required = false) string name) {
        log.info("name is ()", name);
        return name;
    }
}
```

请求 test1，request 设置 setAttribute 参数值，然后跳转 test2，test2 方法参数上使用 @RequestAttribute 注解接收。

## 40、SpringMVC 方法参数值怎么从 Session 中获取？

可以在方法参数上使用 **@SessionAttribute** 注解，它可以把 Session 中的参数值绑定到方法参数上。

示例代码如下所示：

```java
@Restcontroller
@s1f4j
public class Test {

    @RequestMapping("/javastack/test")
    public void test(@sessionAttribute(value = "name", required = false) string name) {
        log.info("name is ()", name);
    }
}
```

参数说明：

- **name/ value**：表示从 Session 中取值的参数名称；
- **required**：是否必需，默认为 true，这里改为 false，因为系统首次启动没有值就会报错；

## 41、SpringMVC 方法参数值怎么从 Cookie 中获取？

可以在方法参数上使用 **@CookieValue** 注解，它可以把 Cookie 中的参数值绑定到方法参数上。

示例代码如下所示：

```java
@Restcontroller
@s1f4j
public class Test {
    @RequestMapping("/javastack/test")
    public void test(@cookievalue(value = "name", required = false, defaultvalue ="公众号：Java技术栈") String name) {
        log.info("name is {}", name);
    }
}
```

参数说明：

- **name/value**：表示从 Cookie 中取值的参数名称；
- **required**：是否必需，默认为 true，如果不存在参数，又不指定默认值，就会报错；
- **defaultValue**：指定 Cookie 中不存在参数时的默认值。

## 42、SpringMVC 怎么接收日期类型参数？

接收 Date 日期类型参数，需要使用 **@InitBinder** 注解创建自定义数据绑定器，不然会抛出异常。

使用示例如下所示：

```java
@Restcontroller
@s1f4j
public class Test {
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        //是否严格限制日期转换
        sdf.setlenient(false);
        //是否允许输入空值
        binder.registercustomEditor(Date.class, new CustomDateEditor(sdf, true));
    }

    @RequestMapping("/javastack/test")
    public User test(user user) {
        return user;
    }
}
```

这样，传入 2023-12-12 这样格式的日期就能成功绑定到 User 对象中的 Date 类型的参数上了。

> 如果要全局使用，可以新建一个**@ControllerAdvice**注解的类，然后将**@lnitBinder**方法放在该类中即可，这样就不需要在每个 Controller 中定义了。

## 43、Spring MVC 怎么接收 JSON 格式的数据？

使用对象接收 JSON 格式数据，需要在方法参数上使用 **@RequestBody** 注解接收，参数名称要一致，如果不一致，需要用**@JsonProperty**注解指定自定义的参数名称。

**@RequestBody 使用示例：**

```java
@Restcontroller
@s1f4j
public class Test {
    @RequestMapping("/javastack/test")
    public void test(@RequestBody User user) {
        log.info("user is {}", user);
    }
}
```

##### @JsonProperty 使用示例：

```java
@Data
public class User {
    @sonProperty(value ="value")
    private string name;
    private int id;
    private string address;
}
```

##### 请求格式示例：

![](/images/Spring MVC/43.jpg)

## 44、Spring MVC 怎么在方法上接收多个参数？

##### Spring MVC 接收多个参数的方法：

1、方法上定义多个参数，要和请求中传入的参数名称和类型要一致。如果不一致，可以利用相关注解指定自定义的参数名称，或者从 URL 路径、Session、Cookie、Header 等地方获取自定义参数的值。

2、方法上定义一个对象，使用正常 form 表单提交参数的形式，对象中的变量要和请求中传入的参数名称和类型要一致。如果不一致，考虑第三种方法。

3、方法上定义一个对象，从 HTTP Body 传入的复杂参数，比如：JSON 格式，需要在方法参数上使用 **@RequestBody** 注解接收，参数名称要一致，如果不一致，需要用**@JsonProperty** 注解指定自定义的参数名称。

## 45、Spring MVC 怎么上传文件？

上传文件可以使用 **@RequestPart** 注解，绑定方法上 **MultipartFile** 文件类型的参数。

示例代码如下所示：

```java
@Restcontroller
@s1f4j
public class Test {
    @RequestMapping(value"/javastack/upload", method = RequestMethod.POST)
    public String uploadFile(@RequestPart("file") MultipartFile file) throws IoException {
        return Ioutils.tostring(file.getInputstream(), Standardcharsets.UF_8);
    }
}
```

发送请求示例：

![](/images/Spring MVC/45.jpg)

注意，Content-Tpye 要为 multipart/form-data 类型，当客户端发送 multipart/form-data 格式的请求时，Spring MVC 会自动将请求参数绑定到方法的参数中。

## 46、SpringMVC 怎么进行请求转发？

##### 1、使用 forward 关键字

```java
@RequestMapping(value="/javastack/test")
public String testForward(HttpservletRequest request) {
    //传递语求参故
    request.setAttribute("from", "公众号： Java技术栈") ;
    return "forward: /javastack/index";
}
```

可以使用 request 进行传递参数。

##### 2、使用 ModelAndView

```java
@RequestMapping(value="/javastack/test")
public ModelAndview testForward(HttpservletRequest request) {
    ModelAndview model = new ModelAndview("/javastack/index");

    //传递语求参故
    model.addobject("from","公众号：Java技术栈");
    return model;
}
```

## 47、Spring MVC 怎么进行请求重定向？

#### 1、使用 response 重定向

```java
@RequestMapping(value="/javastack/test")
public String testRedirect (HttpservletResponse response){
    response.sendRedirect("/javastack/index");
    return null;
}
```

##### 2、使用 redirect 关键字

```java
@RequestMapping(value:"/javastack/test")
public String testRedirect() {
    return "redirect:/javastack/index";
}
```

##### 3、使用 ModelAndView

```java
@RequestMapping(value="/javastack/test")
public ModelAndview testRedirect() {
    ModelAndview model = new ModelAndview("redirect:/javastack/index");
    return model;
}
```

## 48、Spring MVC 怎么只接收 POST 请求？

##### 1、在 @RequestMapping 注解中指定 method

```java
@RequestMapping(value="/javastack", method = RequestMethod.POST)
```

> 不指定默认支持: GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE。

##### 2、单独使用 @PostMapping 注解

```java
@PostMapping(value = "/javastack")
```

这里只是拿 POST 举例，其他 HTTP 请求动作也都有单独的注解。

## 49、Spring MVC 怎么限制请求数据格式？

指定**consumes**参数，**consume**是“**消费**”的意思，就是指请求数据格式。

```java
@RequestMapping(value = "/javastack/test", consumes = MediaType.APPLICATION_JSON_VALUE)
```

如上代码所示，指定 consumes 为"**application/json**"，Spring MVC 就只接收处理 Content-Type 为“**application/json**"数据格式的请求。

## 50、Spring MVC 怎么解决请求乱码问题？

##### 1、使用 Spring MVC 框架提供的 CharacterEncodingFilter 字符编码过滤器。

```xml
<filter>
    <filter-name>characterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>

<filter-mapping>
    <filter-name>characterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

##### 2、Tomcatserver 配置文件也需要配置相同的编码。

```xml
<Connector URIEncoding="UTF-8" connectionTimeout="20000" port"8080" protocol="HTTP/1.1" redirectPort="8443"/>
```

## 51、SpringMVC 接口的返回类型可以是哪些？

Spring MVC 接口的返回类型可以是：

- ModelAndView （页面和数据）
- String（页面和数据，或者仅返回数据）
- Object 对象（仅返回数据）
- void （页面重定向，或者无返回数据）

## 52、Spring MVC 接口的返回值可以为 void 吗？

##### 返回类型可以是 void：

1）如果存在 **forward** 或者 **sendRedirect** 等形式重定向，可以正常跳转。

2）如果使用了**@RestController** 或者 **@ResponseBody** 注解，不用返回任何值，即没有返回任何数据。

3）如果以上都没有，Spring MVC 会把 URL 当成视图名称来解析，如果存在该视图，就返回给客户端，否则就会报出异常。

## 53、Spring MVC 怎么指定响应数据格式？

指定 **produces** 参数，**produces** 即“**生产**"的意思，就是指响应数据格式。

```java
@RequestMapping(value = "/javastack/test",produces = MediaType.APPLICATION_JSON_VALUE)
```

如上代码所示，指定响应数据格式为：“**application/json**"。

## 54、Spring MVC 怎么返回 JSON 格式数据？

主要有两种情况：

1、在控制器类上使用 @Controller 注解时，在方法上使用 @ResponseBody 注解。

2、在控制器类上使用 @RestController 注解时，~~方法上无需 @ResponseBody 注解~~。

以上是向 http body 中输出数据，如果需要返回 JSON 格式，需要指定 produces：

```java
@RequestMapping(value = "/javastack/test",produces = MediaType.APPLICATION_JsoN_VALUE)
```

XML 格式数据原理同上。

## 55、Spring MVC 怎么向前台页面传递数据？

##### 1、使用 request.setAttribute 方法。

```java
@RequestMapping("/javastack/test")
public String test(HttpservletRequest request) {
    request.setAttribute("from", "公众号： Java技术栈");
}
```

##### 2、使用 ModelAndView 类返回。

```java
@RequestMapping("/javastack/test")
public ModelAndview test(ModelAndview mav) {
    mav.setviewName("javastack");
    mav.addobject("from"，"公众号：Java技术栈");
    return mav;
}
```

##### 3、在方法中使用 Model、ModelMap、Map 参数。

```java
@RequestMapping("/javastack/test")
public string test(Model model, ModelMap mode1Map,Map<string, object> map) {
    model.addAttribute("from1", "公众号：Java技术栈");
    modelMap.addAttribute("from2", "公众号： Java技术栈");
    map.put("from3"，"公众号：Java技术栈");
    return "index";
}
```

这种方式是放在 Request 对象中。

## 56、Spring MVC 中的参数解析器是什么？

Spring MVC 中的参数解析器（Argument Resolver）的作用是，将 URL 请求中的参数解析为方法中的参数，以便在控制器方法中进行使用。

Spring MVC 通过使用不同的参数解析器，可以将请求中的不同类型的数据转换为方法的参数，例如请求参数、URI 路径中的模板参数、请求头中的信息、请求体中的参数等。

## 57、Spring MVC 有哪些常用的参数解析器？

常用的参数解析器包括以下几个：

- **RequestParamMethodArgumentResolver**：用于将请求中的参数解析为方法中的参数；·
- **PathVariableMethodArgumentResolver**：用于将 URl 中的模板参数解析为方法中的参数；
- **ModelAttributeMethodProcessor**：用于将请求中的参数绑定到 Model 模型对象中；
- **SessionAttributeMethodArgumentResolver**：用于将会话中的参数绑定到方法中的参数；
- **RequestHeaderMethodArgumentResolver**：用于将请求头中的参数解析为方法中的参数；
- **RequestResponseBodyMethodProcessor**：用于将请求和响应的参数转换为方法中的参数或返回值；
- **RequestPartMethodArgumentResolver**：用于将请求中的 Multipart 文件解析为方法中的参数；
- ....

## 58、SpringMVC 中的消息转换器是什么？

Spring MVC 中的消息转换器(Message Converter)的作用是，用于在请求和响应之间转换消息，消息转换器可以完成以下功能：

- 将请求的消息（JSON、XML 等）转换成 Java 对象；
- 将 Java 对象转换成响应的消息（JSON、XML 等）。

SpringMVC 通过使用不同的消息转换器，可以在请求和响应之间实现不同数据格式的转换。

这也是为什么 Spring MVC 能直接在方法上接收对象参数，能直接返回对象的原因，让客户端和服务端之间的数据交互更加灵活和方便。

## 59、Spring MVC 有哪些常用的消息转换器？

常用的消息转换器包括以下几个：

- **ByteArrayHttpMessageConverter**：将字节数组转换为消息返回；
- **StringHttpMessageConverter**：将字符串转换为消息返回；
- **ResourceHttpMessageConverter**：将资源文件（如图片、PDF 等）转换为消息返回；
- **MappingJackson2HttpMessageConverter**：将 Java 对象转换为 JSON 格式的消息返回；
- **Jaxb2RootElementHttpMessageConverter**：将 Java 对象转换为 XML 格式的消息返回；
- ......

## 60、Spring MVC 中的视图解析器是什么？

在 Spring MVC 中，视图解析器是通过 ViewResolver 接口实现的。

视图解析器（ViewResolver）用于将控制器方法返回的逻辑视图名称解析为具体的视图（View）类型，例如 JSP、ThymeleafFreemarker 等，以便将其渲染成 HTML、XML、JSON 等形式的输出。

## 61、Spring MVC 有哪些常用的视图解析器？

常用的视图解析器包括以下几个：

- InternalResourceViewResolver：用于解析 JSP 视图；
- FreeMarkerViewResolver：用于解析 FreeMarker 视图；
- ThymeleafViewResolver： 用于解析 Thymeleaf 视图；
- ContentNegotiatingViewResolver：用于根据请求中的 Accept 头信息来选择合适的视图解析器，可以解析多种视图类型，例如 JSON、XML、HTML 等；
- ......

## 62、Spring MVC 异常处理有哪些方案？

##### 1、使用 @ControllerAdvice 注解（常用）

使用@ControllerAdvice 注解定义一个全局的异常处理器，可以捕获所有控制器中抛出的异常。然后定义多个 @ExceptionHandler 修饰的异常处理方法，用于处理不同类型的异常。

示例代码如下所示：

```java
@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MyException.class)
    public ModelAndview handleMyException(MyException ex) {
        ModelAndview modelAndview = new ModelAndview("error");
        modelAndview.addobject("message", ex.getMessage());
        return modelAndview;
    }

    @ExceptionHandler(Exception.class)
    public ModelAndview handleException(Exception ex) {
        ModelAndview modelAndview = new ModelAndview("error");
        modelAndview.addobject("message", ex.getMessage());
        return modelAndview;
    }
}
```

> 如果不是返回 ModelAndView 视图，而是直接返回的对象，可以直接改方法的返回类型，并加上 **@ResponseBody** 注解，也可以使用 **@RestControllerAdvice** 注解。

##### 2、实现 HandlerExceptionResolver 接口

实现 HandlerExceptionResolver 接口定义一个全局的异常处理器，然后可以判断不同的 Exception 实例类型再做出反应。

```java
public class GlobalHandlerExceptionResolver implements HandlerExceptionResolver {
    @Override
    public ModelAndview resolveException(HttpservletRequest request,HttpservletResponse response,object handler, Exception ex) {
        ModelAndview mav = new ModelAndview();
        mav.addobject("message", ex.getMessage());
        mav.setviewName("/error");
        return mav;
    }
}
```

这种因为是实现接口，所以返回的只能是 ModelAndView 视图类型，不能直接返回具体对象。
