## 1、JavaScript 是什么？

JavaScript 简称：JS，是一种轻量级的网页脚本语言，在浏览器段执行，解释运行，不需要进行编译，可以插入到网页中控制网页的行为和动作。

## 2、JavaScript 和 Java 的区别？

##### 两门语言没有任何关联，你可以理解为：周杰伦和周杰的区别，它俩只是名字很像而已。

JavaScript 是一门网页脚本语言，在浏览器端运行；

Java 是一门后端高级编程语言，在 Java 虚拟机中运行；

## 3、JavaScript 和 TypeScript 的区别？

TypeScript 是一种由微软开发的开源、跨平台的编程语言。

TypeScript 是 JavaScript 的超集，是 JavaScript 语言的一种扩展语言，它最终也会被编译为 JavaScript 代码。

## 4、JavaScript 和 ECMAScript 的区别？

ECMAScript 是一种由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言标准，JavaScript 脚本语言则是基于 ECMAScript 标准的一种实现。

## 5、JavaScript 和 ES6 的区别？

ES6 全称为：ECMAScript 2015，或者：ECMAScript 6.0，于 2015 年正式发布，是 JavaScript 的下一个版本的规范标准，ES6 极大的增加了语言的可用性。

## 6、ES6 现在完全代替 ES5 吗？

目前还不能，如图所示：

![](/images/JavaScript/6_1.jpg)

数据来源：https://caniuse.com/es6

![](/images/JavaScript/6_2.jpg)

虽然现在大部分浏览器都支持 ES6，并且主流的最新版本都支持的不错了，但不一定所有浏览器都完美支持，完全代替 ES5 还是有风险的。

## 7、JavaScript 由哪三部分组成？

##### JavaScript 由以下 3 部分组成：

##### 1、ECMAScript（核心）

它是 JavaScript 的核心，规定了语言的组成部分。

##### 2、DOM（文档对象模型）

通过 DOM 提供的 API 可以完成对页面节点的操作。

##### 3、BOM（浏览器对象模型）

通过 BOM 可以访问和操作当前窗口的浏览器对象模型。

## 8、JavaScript 文件是什么扩展名？

##### JavaScript 文件的扩展名是.js

在网页项目中会一个专门的文件夹存储 JavaScript 文件，如 script

## 9、JavaScript 文件怎么进行引入？

同样使用 script 标签，即可以编写 JavaScript 代码，还可以引入外部 JavaScript 文件。

![](/images/JavaScript/9.jpg)

## 10、JavaScript 代码怎么进行定义？

JavaScript 语言需要使用 script 标签进行定义，可以写在 HTML 的 head 或者 body 体内。

比如，打开网页时弹出一个提示：

![](/images/JavaScript/10.jpg)

## 11、JavaScript 支持那些基本数据类型？

JavaScript 支持的基本数据类型：

| 名称      | 数据类型 | 描述                                             |
| --------- | -------- | ------------------------------------------------ |
| String    | 字符串   | 表示文本数据，用引号（单引号或双引号）括起来     |
| Number    | 数字     | 表示数值数据，包括整数和浮点数                   |
| Boolean   | 布尔值   | 表示逻辑值，只有两个可能的值：`true`和`false`    |
| Null      | 空值     | 表示空或无值                                     |
| Undefined | 未定义   | 表示未定义的值                                   |
| Object    | 对象     | 表示复杂数据类型，可以包含多个键值对             |
| Array     | 数组     | 表示有序集合，包含多个元素                       |
| Symbpl    | 符号     | 表示唯一的标识符，用于创建对象属性的键，ES6+支持 |

## 12、JavaScript 支持哪些引用数据类型？

##### JavaScript 支持 3 种引用数据类型：

1、对象（Object）

2、数组（Array）

3、函数（Function）

## 13、JavaScript 有哪些不含值的数据类型？

##### JavaScript 有 2 种不含值的数据类型：

1、null（空）

2、undefined（未定义）

## 14、JavaScript 有哪几种声明变量的方式？

##### 有以下 3 种定义方式：

|          | var    | let    | const  |
| -------- | ------ | ------ | ------ |
| 作用域   | 函数级 | 块级   | 块级   |
| 变量提升 | 存在   | 不存在 | 不存在 |
| 修改值   | 可以   | 可以   | 不可以 |

其中，let 和 const 是 ES6 才开始支持的。

## 15、JavaScript 中 == 和 === 的区别？

== 只比较值是否相等，=== 比较值和类型是否都相等；

![](/images/JavaScript/15.jpg)

显然===要更严格。

## 16、JavaScript 中的 NaN 是指什么？

**NaN**全称为：Not a Number，表示不是数字类型，即错误的数字类型，在非数字之间进行运算、或者进行非数字转换都会返回 NaN。

![](/images/JavaScript/16.jpg)

## 17、JavaScript 变量可以赋值为 null 吗？

JavaScript 中变量可以赋值为 null：

> var param = null;

这一点和 Java 相同，表示一个变量不再指向任何对象的地址，可以用来主动释放一个变量的引用对象。

## 18、JavaScript 中的 undefined 是指什么？

**undefined**是所有未赋值变量的默认值，表示变量未声明过、或者声明过但并未赋过值。

如：

> var param;
>
> console.log(typeof param);

输出：

> undefined

## 19、JavaScript 中 null 和 undefined 的区别？

两者的值相同，但类型不同，如下所示：

![](/images/JavaScript/19.jpg)

## 20、JavaScript 怎么判断变量的数据类型？

可以使用 typeof 关键字来判断一个变量的数据类型。

![](/images/JavaScript/20.jpg)

如上，输出了不同变量的数据类型。

## 21、JavaScript 怎么判断数组和日期类型？

Array 和 Date 使用 typeof 判断时，返回的都是 object 类型。

这两种数据类型可以使用**constructor**的方式进行判断。

![](/images/JavaScript/21.jpg)

## 22、JavaScript 可以改变变量的数据类型吗？

可以的，JavaScript 中的一个变量可以有不同的数据类型：

![](/images/JavaScript/22.jpg)

## 23、JavaScript 字符串和数字怎么互相转换？

可以使用 String 和 Number 函数互相转换：

![](/images/JavaScript/23.jpg)

非数字进行转换会返回：NaN

## 24、JavaScript 如何处理 JSON 数据？

JavaScript 提供了两个处理 JSON 数据的方法：

| 方法             | 作用                          |
| ---------------- | ----------------------------- |
| JSON.parse()     | 将 JSON 字符串转换为对象      |
| JSON.stringify() | 将对象/数组转换为 JSON 字符串 |

来演示一下：

![](/images/JavaScript/24.jpg)

## 25、JavaScript 怎么定义一个对象？

创建一个对象可以有以下两种方法。

##### 1、使用 new Object 方式

![](/images/JavaScript/25_1.jpg)

##### 2、直接定义时赋值

![](/images/JavaScript/25_2.jpg)

可以看出，JavaScript 对象其实就是一个 name:value JSON 格式的集合。

## 26、JavaScript 如何遍历一个对象？

使用 for...in...即可：

![](/images/JavaScript/26.jpg)

## 27、JavaScript 如何动态添加删除对象的属性？

添加、修改对象的属性使用 obj.xx = xx，删除对象的属性使用 delete obj.xx。

如下面示例：

![](/images/JavaScript/27.jpg)

## 28、JavaScript 如何定义一个数组？

创建一个数组可以有以下三种方法。

##### 1、使用 new Array 下标的方式

![](/images/JavaScript/28_1.jpg)

##### 2、使用 new Array 构造器的方式

![](/images/JavaScript/28_2.jpg)

##### 3、直接定义时赋值

![](/images/JavaScript/28_3.jpg)

## 29、JavaScript 数组有哪些增删方法？

##### 主要有以下几个方法：

| 方法    | 作用               |
| ------- | ------------------ |
| push    | 尾部添加           |
| unshift | 头部添加           |
| pop     | 尾部删除           |
| shift   | 头部删除           |
| splice  | 指定位置添加、删除 |

## 30、JavaScript 如何遍历一个数组？

1、普通的 for 循环

![](/images/JavaScript/30_1.jpg)

2、for...in...循环

![](/images/JavaScript/30_2.jpg)

3、for...of...（ES6）

![](/images/JavaScript/30_3.jpg)

4、forEach

![](/images/JavaScript/30_4.jpg)

## 31、JavaScript 如何截取一个数组？

可以使用 slice 方法：

![](/images/JavaScript/31.jpg)

slice 不会改变原数组。

## 32、JavaScript 如何把数组转字符串？

使用数组的 join 方法：

![](/images/JavaScript/32.jpg)

## 33、JavaScript 数组怎么同时删除并添加元素？

可以使用 splie 方法：

![](/images/JavaScript/33.jpg)

## 34、JavaScript 如何对数组进行反转？

可以使用 reverse 方法：

![](/images/JavaScript/34.jpg)

## 35、JavaScript 怎么定义一个函数？

JavaScript 使用**function**关键字定义函数：

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

函数既可以是申明，也可以赋值为一个变量：

```javascript
var add = function (num1, num2) {
  return num1 + num2;
};
```

使用方式和 Java 一样，如：add(99, 18)

ES6 中支持定义箭头函数：

> const add = (num1, num2) => num1 + num2;

## 36、JavaScript 回调函数是什么？

回调函数也是一个正常的函数，但不会马上执行，可以通过变量的方式传给另一个函数，在该函数执行回调的时候再执行。

![](/images/JavaScript/36.jpg)

## 37、JavaScript 自调用函数是什么？

自调用函数是指函数加载时会自动调用自己的函数。

使用方式如下：

![](/images/JavaScript/37.jpg)

## 38、JavaScript 有 this 的概念吗？

JavaScript 也有 this 的概念，但和 Java 不同的是，JavaScript 中的 this 表示的范围更广。

JavaScript 中的 this 可以是全局对象、当前对象或者任意对象，取决于函数的调用方式。

## 39、JavaScript 有 that 的概念吗？

##### JavaScript 中没有 that，只用 this。

that 一般是 this 的复制重命名而已，为了解决 this 的跨作用域问题。

## 40、JavaScript 如何获取外层的 this？

JavaScript 中的 this 表示的范围很广，同一个函数中的 this 在不同的调用方式下，不一定代表同一个对象，如果想在某些情况一直可以使用当前的 this，可以使用事先变量复制的方式：

> let that = this;

用的时候使用 that 就可以了。

that 是一种约定俗成的复制 this 重命名的用法，相当于复制当前的 this 对象，在超出该 this 作用域的时候可以再拿来使用，防止 this 在不同场景中出现的冲突问题。

如下所示：

![](/images/JavaScript/40.jpg)

如果不使用 that，循环体内是无法获取外层的 this 对象的。

## 41、JavaScript 如何处理异常？

JavaScript 异常处理用法和 Java 类似：

```javascript
try {
} catch (err) {
} finally {
}
```

JavaScript 处理异常时会提供一个 err 对错，err 对象包含**name**（错误名）和**message**（错误消息）两个属性。

## 42、JavaScript 有哪些弹框模式？

##### 1、提示弹框

> window.alert('我是一个提示弹框')

![](/images/JavaScript/42_1.jpg)

##### 2、确认弹框

> window.alert('我是一个确认弹框')

![](/images/JavaScript/42_2.jpg)

##### 3、输入弹框

> window.alert('我是一个输入弹框')

![](/images/JavaScript/42_3.jpg)

以上 window 都可以省略。

## 43、JavaScript 获取页面元素有哪些方法？

##### 主要有以下几种方法：

| 获取方法                         | 获取对象                       |
| -------------------------------- | ------------------------------ |
| document.getElementById()        | 获取指定元素 id 的第一个对象   |
| document.getElementByName()      | 获取所有指定名称的对象集合     |
| document.getElementByTagName()   | 获取所有指定标签名的对象集合   |
| document.getElementByClassName() | 获取所有指定样式类名的对象集合 |

## 44、JavaScript 怎么获取当前网页的 URL？

获取当前网页全路径：

> window.location.href

获取当前网页资源路径：

> window.location.pathname

测试效果如下：

![](/images/JavaScript/44.jpg)

## 45、JavaScript void(0)的作用？

void 代表没有返回值，void(0)表示没有什么效果：

```html
<a href="javascript:void(0)">单击没有什么反应</a>
```

可以用来代替：#，防止页面刷新或者跳转：

```html
<a href="#">点击时会刷新页面或者回到页面顶部</a>
```

## 46、JavaScript 如何重定向到另一个页面？

改变当前的 window.location.href 即可：

> window.location.href = "http://www.slq.com/article/2024/spring-boot-3.2-released";

## 47、JavaScript 如何延时执行任务？

使用 setTimeout 函数：

![](/images/JavaScript/47.jpg)

单位：毫秒。

## 48、JavaScript 如何定时执行任务？

使用 setInterval 函数：

![](/images/JavaScript/48.jpg)

单位：毫秒。

## 49、JavaScript 闭包是指什么？

闭包就是能够读取其他函数内部变量的函数，当一个内部函数被其外部函数之外的变量引用时，就形成了一个闭包。

下面是一个简单的闭包：

![](/images/JavaScript/49.jpg)

## 50、JavaScript 闭包的作用是？

##### 闭包的作用主要有两点：

1、闭包可以读取其他函数内部变量；

2、闭包可以让外部函数的私有变量值一直保存在内存中；

## 51、JavaScript 闭包的用途是？

JavaScript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象一直会保存在内存中。

所以，如果需要在一个模块中定义一些变量，并希望这些变量一直保存在内存中，又不会污染全局变量时，就可以用闭包来定义这个模块。

![](/images/JavaScript/51.jpg)

如上所示，调用 3 次 say 方法，count 的值一直在累加并一直保存在内存中。

## 52、JavaScript 怎么实现模块化编程？

使用 export/import 关键字，ES6 开始支持。

date_utils.js

```javascript
var getDateBetween = function(startDate, endDate) {
    ...
}

export {
  getDateBetween
}
```

引入使用：

```javascript
import { getDateBetween } from 'date_utils.js';
...
var days = getDateBewteen(...)
```

## 53、JavaScript 会有内存泄露问题吗？

JavaScript 是自动内存管理，也会出现很多内存泄露的情况。

## 54、JavaScript 会进行垃圾回收吗？

JavaScript 会进行垃圾回收，它是自动管理内存的，不需要我们手动释放，当对象不再被引用或者对象不能从根上访问到时，这个对象就会被垃圾回收掉。

## 55、JavaScript 有哪些垃圾回收方法？

##### 现在各浏览器主流的两种垃圾回收方法：

1、引用计数

2、标记清除

## 56、JavaScript 如何分析内存泄露问题？

可以借助 Chrome 浏览器的 Memory 模块：

![](/images/JavaScript/56.jpg)
