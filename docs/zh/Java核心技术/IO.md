## 1、什么是 IO？

Java 中的 I/O 主要是指使用 Java 进行输入、输出操作，包括但不限于以下几种：

- 磁盘文件读写
- 网络数据读写
- 内存数据读写

Java 中的 I/O 操作核心库在 java.io 和 java.nio 包下面，它们提供了全面的 IO 操作接口和实现类，IO 读写是以“**流**"为基础进行输入输出的，当程序读写数据时，就会开启一个通向来源对象（读）的流，以及通用目标对象（写）的流，数据在输入和输出介质中“**流**"动，所以叫“**流**"。

## 2、什么是 BIO？

BlO 就是指 IO，即传统的 Blocking IO，即同步并阻塞的 IO，相关类在 java.io 包下面。

BlO 也是 JDK 1.4 之前的唯一选择，依赖于 ServerSocket 实现，服务器实现模式为一个请求对应一个线程，如果线程数不够连接，则会等待空余线程或者拒绝连接，如下图所示:

![](/images/IO/2.jpg)

所以 BIO 在高并发情况下效率是很低的，也不可靠，一般只应用于连接数比较小且固定架构的应用，但 API 也比较容易使用。

## 3、什么是 NIO？

NIO 就是指 JDK 1.4 推出来的 Non-Blocking IO，即同步非阻塞的 IO，相关类在 java.nio 包下面。

NIO 提供了高速的 IO 操作，它加入了 Buffer、Channel、Selector 等概念，它是基于事件驱动的，采用了 Reactor 模式，它使用一个线程管理所有的 Socket 通道，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有 IO 请求时才启动一个线程进行处理。

NIO 会将连接放到一个数组中，然后再不断主动的查看数组中的连接有没有数据发过来，一般只适用于连接数目较大但连接时间短的应用，如聊天应用等。

如下图所示：

![](/images/IO/3.jpg)

## 4、什么是 AIO？

AIO 指的是 NIO 2.0，JDK 1.7 开始推出，它是异步非阻塞的 IO。

NIO 虽然是非阻塞的，但是它的 IO 操作还是同步的。AIO 引 I 入了异步通道的概念，客户端的连接请求和发送数据的请求使用不同的线程来处理，它不是当 IO 准备好时才通知线程（NIO），而是当 IO 操作完成后才通知服务端程序启动线程去处理，相同于一个回调，·般适用于连接数较多且连接时间长的应用。

## 5、你怎么理解 IO、BIO、NIO、AIO？

| 对比项   | BIO (IO) | NIO                   | AIO        |
| -------- | -------- | --------------------- | ---------- |
| JDK      | AlI      | JDK 1.4+              | JDK 1.7+   |
| IO 模型  | 同步阻塞 | 同步非阻塞 (多路复用) | 异步非阻塞 |
| 线程数   | 1:1      | 1:N                   | O:N        |
| 编程难度 | 简单     | 复杂                  | 复杂       |
| 可靠性   | 差       | 好                    | 好         |
| 吞吐量   | 低       | 高                    | 高         |

## 6、你怎么理解同步 IO 和异步 IO？

同步 IO 和异步 IO 是指在计算机系统中进行数据读写时，应用程序和操作系统之间的不同通信方式。

**同步 IO（Synchronous IO）**是指在读写数据时，应用程序必须等待操作系统完成数据读写操作后才能继续执行下一步操作。这种方式简单易用，但因为必须等待数据读写完成，所以当遇到瓶颈时会造成系统性能下降。

**异步 IO（Asynchronous Io）**是指在读写数据时，应用程序不必等待操作系统完成数据读写操作，可以继续执行其他任务。在数据读写完成后，操作系统会通知应用程序，以便应用程序进行后续处理。这种方式能够提高系统的并行能力和吞吐量，但实现起来相对复杂。

---

Java 中的 BIO、NIO 是同步的，AIO（NIO 2.0） 是异步的。

## 7、你怎么理解阻塞 10 和非阻塞 IO？

阻塞 IO 和非阻塞 IO 是指在计算机系统中进行数据读写时，应用程序是否等待读写操作完成的方式。

**阻塞 IO（BlockingIO）**是指当应用程序请求读写操作时，应用程序必须等待操作完成才能继续执行其他操作。这种方式简单易用，但性能很差，当读写操作长时间不能完成，应用程序就会被阻塞，不能继续执行其他任务。

**非阻塞 IO（Non-blocking IO）**是指当应用程序请求读写操作时，如果读写操作不能立即完成，应用程序不会等待，而是直接返回并继续执行其他任务。这种方式能够提高系统的并行能力和吞吐量，但实现起来相对复杂。

---

Java 中的 BIO 是阻塞的，NIO 和 AIO（NIO 2.0）是非阻塞的。

## 8、IO 中的输入流和输出流有什么区别？

**输入流**：是从数据源读取数据的流，例如从文件、网络套接字等读取数据。

**输出流**：是将数据写入数据目的地的流，例如写入文件、网络套接字等。

## 9、常用的 10 类有哪些？

如下图所示：

![](/images/IO/9.jpg)

Java 提供的所有流类位于 java.io 包中，都分别继承自以下四种抽象流类：

##### InputStream

---

继承自 InputStream 的流都是用于向程序中输入数据的，且数据单位都是字节（8 位）。

##### OutputStream

---

继承自 OutputStream 的流都是程序用于向外输出数据的，且数据单位都是字节（8 位）。

##### Reader

---

继承自 Reader 的流都是用于向程序中输入数据的，且数据单位都是字符（16 位）。

##### Writer

---

继承自 Writer 的流都是程序用于向外输出数据的，且数据单位都是字符（16 位）。

## 10、为什么需要 NIO？用 IO 和线程池不行吗？

> ##### 面试官问：
>
> 为什么要用 NIO？用 IO 和线程池不行吗？比如，我搞一个最大为 1000 大小的线程池？

不行，因为 I0 是同步并阻塞的，就算搞 1000 个线程的线程池，如果这 1000 个线程只是连接了，但并不发送数据，然后造成阻塞，然后这个线程池就不能接受别的请求了，这不是影响了后面的线程吗？

所以，如果是用户量和连接量小的应用，用 IO 怎么搞都无所谓，但如果用户量和连接量多，同时连接几万、几十万这样，不可能一直加线程处理的，服务器早就崩了。

## 11、IO 有哪三大件组成？它们之间的关系是怎样的？

NIO 的三大件：Channel、Buffer、Selector，如下图所示：

![](/images/IO/11.jpg)

##### Channel (通道)

---

1） Channel 可以同时进行读写；

2）Channel 可以实现异步读写数据；

3）Channel 可以从 Buffer 读取数据，也可以写数据到 Buffer；

##### Selector (选择器)

---

1）Selector 通过检测多个注册的 Channel 上是否有事件发生，如果有事件发生，便获取事件然后进行相应的处理，这样就可以只用一个单线程去管理多个 Channel，也就是管理多个连接和请求。

2）只有在连接真正有读写事件发生时，才会进行读写，并且不需要为每个连接都创建一个线程，也不用去维护多个线程，避免了多线程之间的上下文切换成本，这样就大大地减少了系统的开销。

##### Buffer(缓冲区)

---

缓冲区本质上是一个可以读写数据的内存块，Channel 提供从文件、网络读取数据的渠道，但是读取或写入的数据都必须经由 Buffer。

---

##### NIO 三大件之间的关系：

1）Selector 对应一个线程，一个线程对应多个 Channel，Selector 会根据不同的 Event（事件）在各个 Channel 上切换，程序切换到哪个 Channel 是由 Event 决定的。

2）每个 Channel 都会对应一个 Buffer，Buffer 就是一个内存块，底层对应一个数组。

3）数据的读取写入通过 Buffer，Buffer 既可以读，也可以写。

## 12、NlO 与 Netty 有什么关系？

Netty 是一个基于 NIO 的网络通信框架，可以说 NIO 是 Netty 的基础。

Netty 诞生的主要目的是为了简化网络编程，提高编程效率。Netty 封装了 NIO 中的繁琐细节，并且提供了很多高级特性，如简单的事件驱动、高效的内存管理等，让开发者可以更专注于实际的业务逻辑实现。

## 13、NIO 是如何实现多路复用的？

在 NIO 中，多路复用是通过使用 Selector 实现的，Selector 允许一个线程同时处理多个通道的 I/O 事件。

下面是 NIO 实现多路复用的简单流程：

- 建一个 Selector 对象。
- 将需要处理的通道注册到 Selector 中，并设置感兴趣的事件（比如：读、写、连接）。
- 调用 Selector 的 select() 方法，阻塞地等待就绪的通道。
- 通过调用 selectedKeys()方法获取已经就绪的通道。
- 遍历就绪的通道，处理相应的 I/O 事件。
- 关闭处理完毕的通道，以及 Selector 对象。

## 14、NlO 中的 Scatter 和 Gather 分别是什么？

NIO 中的 scatter 和 gather 指的在多个缓冲区上实现的 I/O 操作，比如从通道中读取数据到多个缓冲区，或从多个缓冲区中写入数据到通道。

**scatter（分散）**：指的是从通道中读取数据并写下到多个缓冲区，该过程可以理解为数据分散。

![](/images/IO/14_1.jpg)

**gather（聚集）**：指的是从多个缓冲区中读取数据并写入到同一个通道，该过程可以理解为数据聚焦。

![](/images/IO/14_2.jpg)

scatter 和 gather 经常用于需要将传输的数据分开处理的场合，比如，传输一个由消息头和消息体组成的消息，就可以将消息头和消息体内容分散到不同的 Buffer 中，这样可以很方便灵活的处理。

## 15、为什么不建议使用 Java 原生 NIO？

主要有以下几点：

1、JavaNIO 类库设计很复杂，非常难用，学习成本很高；

2、需要熟练掌握 Java 多线程和网络编程，才能编写高质量的 NIO 应用；

3、Java NIO 可能还存在着性能 bug...

##### 主要还是因为 Netty 的出现，要比 Java 原生 NIO 要更好用、更易用、高性能。

## 16、什么是比特(Bit)、字节(Byte)、字符(Char)？

##### Bit

---

Bit 是最小的二进制单位，是计算机的操作部分，取值 0 或者 1。

##### Byte

---

Byte 是计算机操作数据的最小单位，由 8 位 Bit 组成，取值范围-128 ～ 127。

##### Char

---

Char 是用户可读写的最小单位，在 Java 里面由 16 位 Bit 组成，取值范围 0 ～ 65535。

## 17、Java 有哪几种类型的流？

##### 按数据流向分：

- **输入流**：程序可以从中读取数据的流；
- **输出流**：程序能向其中写入数据的流；

---

##### 按数据传输单位分：

- **字节流**：以字节为单位传输数据的流；
- **字符流**：以字符为单位传输数据的流；

---

##### 按功能分：

- **节点流**：用于直接操作目标设备的流；
- **过滤流**：是对一个已存在的流的封装，提供了强大且灵活的读写功能；

## 18、字节流和字符流的区别？

##### 字节流

---

1）字节流在操作的时候不会用到缓冲区；

2）字节流可用于处理任何类型的对象，包括二进制对象；

3）字节流处理单元为 1 个字节，分别为字节和字节数组，不能处理 Unicode 字符;

> InputStream 是所有字节输入流的祖先，而 OutputStream 是所有字节输出流的祖先。

##### 字符流

---

1）而字符流在操作的时候会用到缓冲区；

2）而字符流只能处理字符或者字符串；

3）字符流处理的单元为 2 个字节的 Unicode 字符，分别为字符、字符数组或字符串。

> Reader 是所有读取字符串输入流的祖先，而 Writer 是所有输出字符串的祖先。

---

在硬盘上的所有文件都是以字节形式存在的（图片，声音，视频），而字符值在内存中才会形成，所以字符流是由 Java 虚拟机将字节转化为 2 个字节的 Unicode 字符为单位的字符而成的。

## 19、字节流怎么转换成字符流？

##### 字节输入流转换成字符输入流：

可以通过 InputStreamReader 类实现，这个类的构造函数可以传入一个 InputStream 对象。

##### 字节输出流转换成字符输出流：

可以通过 OutputStreamWriter 类实现，这个类的构造函数可以传入一个 OutputStream 对象。

## 20、InputStream 和 Reader 有什么区别？

InputStream 和 Reader 是 Java 中两种不同类型的输入流，主要区别如下。

##### 1）数据类型

InputStream 读取的是字节数据，而 Reader 读取的是字符数据。

##### 2）字符编码

InputStream 只能读取字节数据，仅支持最基本的 AsCll 编码，也不能对字符进行编码。

Reader 支持更多的字符集，例如 UTF-8，UTF-16 等，也可以在读取字符数据时指定字符编码，这使得它更适合处理文本数据。

##### 3）使用场景

InputStream 适用于读取非文本数据，例如二进制文件（图像，音频，视频），而 Reader 适用于读取文本数据。

总之，当需要读取字节数据时，使用 InputStream 比较好，当需要读取字符数据时，使用 Reader 适宜。

## 21、BufferedReader 和 Reader 有什么区别？

Reader 是 Java 中字符输入流的一个抽象父类，而 BufferedReader 是 Reader 的子类。

##### 两者最大的区别在于：

1）Reader 不能实例化使用，而 BuferedReader 可以实例化使用。

2）BufferedReader 使用缓冲区读取字符数据，BufferedReader 提供了读取一行数据的方法`readLine()`，它可以一次读取大量的字符，而 Reader 每次只能读取一个字符。

3）由于 BufferedReader 使用缓冲区，它的读取效率比 Reader 高。所以，如果需要读取大量的字符数据，并且希望读取的效率较高，可以使用 BufferedReader。

## 22、PrintStream 和 PrintWriter 的区别？

1）PrintWriter 可以接收一个 Writer 流，PrintStream 不能；

2）PrintStream 可以自动 flush，而 PrintWriter 默认不能自动 flush；

3）PrintWriter 不包含用于写入原始字节的方法，因此程序应该使用未编码的字节流；

## 23、FileWriter 和 BufferedWriter 的区别？

主要区别如下：

1）网上很多答案都说 FileWriter 没有缓冲区，其实是误导性的。FileWriter 也是有缓冲区的，如果使用的 Writer 类的 write 方法，大小为 1024 个字节，而如果使用的是 StreamEncoder 类的 write 方法，缓冲区为 8192 个字节，并且它们都不支持修改；而 BufferedWriter 默认缓冲区大小为 8192 个字节，并且支持自定义。

2）BufferedWriter 的效率要比 FileWriter 高不少，因为 FileWriter 每调用一次 write 方法就会调用一次 OutputStreamWriter#write 方法并进行一次转码，而 BufferedWriter 只有在缓冲区满了才会调用 OutputStreamWriter#write 方法并进行一次转码，这就是 BufferedWriter 高效的原因。

## 24、FileWriter 和 BufferedWriter 怎么选？

如果只是一次性写入文件，使用哪个效率都没啥影响。

如果需要多次写入文件，应使用 BufferedWriter，性能更好，它可以避免频繁执行 OutputStreamWriter 的 write 方法而导致转码影响性能。

## 25、PrintStream 是什么流？

PrintStream 即打印流，它是一种过滤流，它继承了 FilterOutputStream 过滤流类：

![](/images/IO/25.jpg)

PrintStream 打印流为其他输出流添加了额外的功能，能够方便地打印各种形式的数据，PrintStream 只负责输出数据，不负责数据的输入。

> PrintStream 可以自动 flush，PrintStream 永远不会抛出 IOException。

## 26、PrintWriter 是什么流？

PrintWriter 是 PrintStream 的扩展，它继承了 Writer 类，并实现了 PrintStream 类中的所有打印方法，它不包含用于写入原始字节的方法，因此程序应该使用未编码的字节流。

![](/images/IO/26.jpg)

> PrintWriter 默认不能自动 flush，PrintWriter 永远不会抛出 IOException。

## 27、System.out 是什么流？

如下图所示：

![](/images/IO/27.jpg)

System.out 使用的是 PrintStream 打印流，System.err 也是一样的。

```java
public static final Printstream err = null;
```

## 28、什么是 Filter 流？

Filter 流是一种 IO 流，叫过滤流，也叫包装流，是一种过滤字节或字符的数据流。它的主要作用是用来对已存在的流增加一些额外的功能，基本 IO 流只能读取字节或者字符，而过滤流可以读取整数值、双精度值、给目标文件增加行号等等。

## 29、Filter 流可以分为哪几类？

Filter 流可以分为字节过滤流和字符过滤流：

- 字节过滤流类： FilterlnputStream 和 FilterOutputStream；
- 字符过滤流类：FilterReader 和 FilterWriter；

## 30、Filter 流有哪些常用的实现类？

比如有以下几个常用的 FilterlnputStream 实现类：

| 类                    | 功能                                                        |
| --------------------- | ----------------------------------------------------------- |
| LineNumberlnputStream | 给目标文件增加行号，已标识废除，被 LineNumberReader 代替    |
| DatalnputStream       | 可以读取 Java 基本数据类型的数据，如 readlnt、areadFloat 等 |
| BufferedlnputStream   | 字节缓冲输入流，可以提高 IO 效率                            |

## 31、缓冲区和缓存有什么区别？

这两个完全是不同的概念。

计算机中的缓存（Cache）通常是指高速缓存存储器，是为了加快 CPU 和主存之间的数据传输速度而设置的一级存储器，它的作用是将 CPU 频繁访问的数据保存在本地，以避免因为内存访问速度慢而影响系统性能。另外，还有浏览器缓存、内存数据缓存（比如:Redis）、各种形式的缓存等等。

缓冲区（Buffer）则是一种 IO 中的临时存储区，在数据传输过程中起到缓冲作用，以确保不会因为传输速率不匹配而导致数据丢失或错误。例如，当快速生成的数据要写入磁盘时，可以先写入缓冲区，等待磁盘准备好后再进行数据输出。

所以，缓存是为了提高系统性能而设置的，而缓冲区则是 IO 中为了确保数据传输的正确性和顺序而设置的。

## 32、什么是缓冲流？

缓冲流是一种特殊的流，它对读写操作进行了缓存，以提高读写性能。缓存流可以在读写操作时缓存数据，并在缓存满后一次性写入或读取数据，从而减少系统 I/O 次数，提高读写性能。

缓冲流提供了一个缓冲区，缓冲流读取到数据后不会马上输出到目标流，而是等缓冲到指定大小的数据后再一次性写出去，默认的输入/输出缓冲区大小为 8192 个字节。

## 33、缓冲流有什么优势？

##### 缓冲流的优势：

- 高了流的工作效率；
- 如果是写入到磁盘，可以减少磁盘的读取次数，降低磁盘损耗；

## 34、缓冲流可以分为哪几类？

缓冲流可以分为字节缓冲流和字符缓冲流：

- 字节缓冲流类： BufferedlnputStream 和 BufferedOutputStream ;

- 字符缓冲流类：日 BufferedReader 和 BufferedWriter；

## 35、什么是回退流？

回退输入流是一种可以回退已经读取字节的输入流，对于一个正常输入流来说，都是采用从头到尾的顺序读取的，而回退流（回退输入流）则是 Java 中输入流的一种特殊操作，它可以使读取的字节或字符回到输入流的缓冲区，以便下一次读取可以重新获取相同的数据。

## 36、回退流分为哪几类？

回退流同样分为字节流和字符流，回退流的实现类是 PushbacklnputStream 和 PushbackReader 类，使用时，需要先创建一个回退流对象，然后使用 unread 方法在输入流的缓冲区中回退数据。

**PushbacklnputStream**：将读取的数据返回到输入流的缓冲区中，以便以后读取。

**PushbackReader**：将读取的数据返回到输入流的缓冲区中，以便以后读取。与 PushbacklnputStream 不同的是，PushbackReader 可以处理字符，而不是字节。

如下面的示例：

```java
PushbackInputstream in = new PushbackInputstream(new FileInputstream("input.txt"));
int data = in.read();
if (data == '') {
    in.unread(data);
}
```

如果读取到的数据是“."，则使用 unread()方法将数据回退到输入流的缓冲区中，以便下一次读取可以重新获取它。

## 37、IO 流中的 flush 是指什么？

flush 即冲刷方法，它是定义在 OutputStream 和 Writer 这两个输出流类里面的方法，它的主要功能是把缓冲区的数据强制写入到目标对象，缓冲区的默认大小是 8192 字节。

## 38、IO 流中的 close 和 flush 的区别？

1）**flush 是强制刷新缓冲区**，缓冲区的默认大小是 8192 字节，当达到 8192 个字节后就会自动 flush，而如果小于 8192 个字节，流不会触发自动 flush 操作。**close 是关闭流**，close 默认会进行一次 flush 操作；

2）flush 之后，流还可以接着写入，而 close 之后，流就不能再写入了;

## 39、所有 IO 流都需要 flush 操作吗？

不是的，flush 它是定义在 OutputStream 和 Writer 这两个输出流类里面的方法，所以，flush 操作只涉及 IO 输出流，不涉及 IO 输入流，只有当这些 IO 输出流中的实现类使用了缓冲区，才需要 flush 操作，然后数据从缓冲区冲刷到目标的。

## 40、IO 流关闭之前，一定要 flush 操作吗？

使用 close 关闭流之前不需要 flush 操作，因为 close 关闭流会自动刷新（flush）一次，如缓冲流的 close 方法源码所示：

![](/images/IO/40_1.jpg)

![](/images/IO/40_2.jpg)

## 41、IO 流关闭之前，什么时候需要 flush 操作？

> 一般的开发规范，建议 close 关闭流之前都进行一次 flush 操作。

来看以下两点：

1）有的流实现类默认没有开启自动 flush，比如：PrintWriter。

2）缓冲流虽然 close 时会自动 flush，但有时候时候忘记 close 关闭流，这就导致部分数据丢失。

## 42、怎么反复读取输入流中的内容？

在 Java 中，流（IO）通常是一次性的，读取完毕后无法再次读取，如果需要反复读取流中的内容，可以有以下两种方法。

##### 1、把流中的数据缓存起来

将内容缓存到一个可重复读取的数据结构中以实现多次读取，比如以下示例：

```java
byte[] bytes = XxInputstream.readAllBytes();
```

##### 2、标记重置

在读取前标记初始位置，读取完之后再重置到初始位置，比如以下示例：

> xxInputstream.mark(0);
>
> // 第一次读取
>
> ....
>
> // 重置
>
> xxInputstream.reset():
>
> // 第二次读取
>
> ...

## 43、Java 序列化是什么？

Java 序列化技术是将对象转变成一串由二进制字节组成的数组，可以通过将二进制数据保存到磁盘或者传输网络，磁盘或者网络接收者可以在对象的属类的模板上来反序列化类的对象，达到对象持久化的目的，如下图所示：

![](/images/IO/43.jpg)

我们的对象并不只是存在内存中，还需要传输网络，或者保存起来下次再加载出来用，所以需要 Java 序列化技术。

## 44、Java 有哪两种序列化方式？

在 Java 中有两种实现序列化的方式，**Serializable** 和 **Externalizable**，可能大部分人只知道 Serializable 而不知道 Externalizable。

> ##### 这两种序列化方式的区别是：
>
> 实现了 Serializable 接口的对象的属性是自动序列化的，实现 Extermalizable 的对象的属性则需要手动序列化，即通过 writeExternal 和 readExternal 方法手动进行。
>
> 具体见 Serializable 和 Externalizable 的编程题。

## 45、序列化 ID（serialVersionUID）的作用是？

serialVersionUID 是 Java 序列化的一个版本标识符，在进行 Java 序列化和反序列化时，Java 虚拟机会检查序列化类的版本是否与反序列化类的版本匹配。

Java 中的序列化机制就是通过判断原始序列化对象和当前类的 serialVersionUID 变量的值来验证版本是否一致的，如果一致，则反序列化成功，如果不一致，则反序列化失败，抛出序列化运行时异常（InvalidClassException）。

## 46、序列化 ID（serialVersionUID）格式是怎样的？怎么生成？

序列化 ID 定义格式如下：

```java
@Serial
private static final long serialVersionU1D = 6697450461076091955L;
```

可以手动生成，也可以在开发工具中一键生成，JDK 14+建议添加 @Serial 注解标识，但不是必须的。

## 47、序列化 ID（serialVersionUID）一定要显示声明吗？

强烈建议显示声明 serialVersionUID 变量并赋值，但不是必须的。

如果不显示声明 serialVersionUID，JVM 将会根据算法自动生成一个 serialVersionUID 变量以作序列化版本比较用。

## 48、序列化 ID（serialVersionUID）默认生成的有什么问题？

可能存在以下问题：

1）如果类被修改，则默认生成的 serialVersionUID 值可能会被再次更改，因此可能导致反序列化失败。

2）默认生成的 serialVersionUID 计算对类详细信息十分敏感，而类详细信息可能会根据编译器的实现而有所不同，因此可能导致反序列化失败。

所以，为避免这些问题，建议在任何实现 Serializable 接口的类中显式声明一个 serialVersionUID 字段。

## 49、序列化 ID（serialVersionUID）一定要唯一吗？

序列化 ID（serialVersionUID）值不一定要唯一，多个类可以使用相同的 serialVersionUID 值，因为这个值只是用于标识某个类的版本，而不是用于标识具体的某个类，类与类之间是隔离的。

比如，我们在项目中经常看到这样写：

```java
private static final long serialversionuiD = 1L;
```

这样是没问题的，可以正常序列化/反序列化。

## 50、同一个类的不同对象可以有不同的 serialVersionUID 值吗？

不可以，serialVersionUID 是类的静态字段，所以它是与类相关联的，而不是与类的各个实例对象相关联的。

serialVersionUID 用作可序列化类的版本标识符，并在反序列化期间用于验证序列化对象的发送方和接收方是否已为该对象加载与序列化兼容的类，单个类只有一个 serialVersionUID，无论该类存在多少个实例对象，所以反序列化时，同一类的不同对象的 serialVersionUID 值必须相同，不然不同的就会反序列化失败。

## 51、序列化 ID（serialVersionUID）可以修改吗？什么时候需要？

##### 需要修改 serialVersionUID 的情况如下：

1. **添加或删除类中的字段**：当在类中添加或删除字段时，可能会影响序列化的结构，因此需要更新 serialVersionUID。
2. **修改字段的类型**：当修改字段的类型时，可能会影响序列化的结构，因此需要更新 serialVersionUID。
3. **修改类的继承关系**：当修改类的继承关系时，可能会影响序列化的结构，因此需要更新 serialVersionUID。
4. 以上不是必须的，具体看业务需要，来看**《阿里巴巴的 Java 开发手册》**中定义：

![](/images/IO/51.jpg)

如果类只是删除、新增字段，则可以兼容，不需要修改 serialIVersionUID 字段的值，只是多出来的字段会丢失值而已，当然。而如果修改，则直接会导致反序列化失败。

如果修改了类的结构，比如修改了字段的类型，比如从 int 修改为了 String，则会反序列化失败，此时最好是修改 serialVersionUID 字段的值，避免反序列化混乱。

## 52、序列化中的@Serial 注解的作用？

@Serial 注解是 Java14 中引 I 入了一个新注解：

![](/images/IO/52_1.jpg)

它用于标识某个类的某个成员变量、方法是否是序列化机制的一部分，这个注解纯粹是为了更好地进行编译时类型检查，类似于@Override 注解。

相关的方法和成员变量如下所示：

![](/images/IO/52_2.jpg)

这也是为什么在 JDK 14+建议添加 @Serial 注解标识的原因。

注意，这个注解不是添加在要序列化的对象的普通变量和方法上，如：

```java
@Serial
private int id = 0;
```

它们是序列化的对象变量，和序列化机制本身没有关系，所以会提示它不是序列化机制的一部分：

![](/images/IO/52_3.jpg)

## 53、编程：基于 Externalizable 序列化和反序列化一个对象

##### 1、类实现 Externalizable 序列化接口

要基于 Externalizable 接口序列化一个对象，这个对象所在类就必须实现 Java 序列化的接口：

> java.io.Externalizable

```java
public class User implements Externalizable {
    private static final long serialversionUID = 1L;
    public User() {
    }
    private string username;
    private transient string id;
    public String getusername() {
        return username;
    }
    public void setusername(string username) {
        1this.username =username;
    }
    public String getid() {
        return id;
    }
    public void setid(string id) {
        this.id = id;
    }
    @override
    public void writeExternal(objectoutput objectoutput) throws IoException {
        objectoutput.writeobject(id);
    }
    @override
    public void readExternal(objectInput objectInput) throws IOException, ClassNotFoundException {
        id = (string) objectinput.readobject();
    }
}
```

##### 2、序列化/反序列化

```java
public class ExternalizableTest {
    public static void main(string[] args) throws Exception {
        User user = new user();
        user.setusername("Java技术栈");
        user.setid("javastack");
        Objectoutput objectoutput = new objectoutputstream(new Fileoutputstream(new File("javastack")));
        objectoutput.writeobject(user);
        objectinput objectInput = new objectInputstream(new Fileinputstream(new File("javastack")));
        user = (User) objectInput.readobject();
        System.out.printin(user.getusername());
        System.out.printin(user.getid());
        objectoutput.close();objectinput.close();
    }
}
```

输出结果：

> null
>
> javastack

因为 User 类只手动序列化了 id， usermame 没有序列化所以为 null。

> User 中的 id 被 transient 修饰了，为什么还能序列化出来？
>
> 那是因为 User 实现了接口 Externalizable，而不是 Serializable， transient 只作用于 Serializable 接口。

## 54、编程：基于 Serializable 序列化和反序列化一个对象

##### 1、类实现 Serializable 序列化接口

要基于 Serializable 接口序列化一个对象，这个对象所在类就必须实现 Java 序列化的接口：

> java.io.Serializable

```java
public class User implements Serializable {
    private static final long serialversionU1D = -8475669200846811112L;
    private string username;
    private string address;
    public string getusername() {
        return username;
    }
    public void setusername(string username) {
        this.username = username;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(string address) {
        this.address = address;
    }
    @override
    public string tostring() {
        return "user{" +
            "username='\'" + username + '\'' +
            "address='" + address + "\'" +
            '}';
    }
}
```

##### 2、序列化/反序列化

可以借助 commons-lang3 工具包里面的类实现对象的序列化及反序列化，你没有必要自己写。

```java
public class Test {
    public static void main(string[] args) {
        User user = new User();
        user.setusername("Java");
        user.setAddress("china");
        byte[] bytes = Serializationutils.serialize(user);
        User u = Serializationutils.deserialize(bytes);
        system.out.println(u);
    }
}
```

输出：

> User{username='Java', address='china'}

上例通过序列化对象字节到内存然后反序列化，当然里面也提供了序列化磁盘然后再反序列化的方法，原理都是一样的，只是目标地不一样。

---

SerializationUtils 工具类序列化/反序列化方法源码如下：

```java
public static byte[] serialize(final serializable obj) {
    final ByteArrayoutputstream baos = new ByteArrayoutputstream(512);
    serialize(obj, baos);
    return baos.toByteArray();
}
public static void serialize(final serializable obj, final outputstream outputstream) {
    Validate.notNull(outputstream, "outputstream");
    try (objectoutputstream out = new objectoutputstream(outputstream)) {
        out.writeobject(obj);
    } catch (final IoException ex) {
        throw new SerializationException(ex);
    }
}

public static <T> T deserialize(final byte[] objectData) {
    Validate.notNull(objectData, "objectData");
    return deserialize(new ByteArrayInputstream(objectData));
}

public static <T> I deserialize(final Inputstream inputstream) {
    Validate.notNull(inputstream, "inputstream");
    try (objectinputstream in = new objectinputstream(inputstream)) {
        @suppressWarnings("unchecked")
        final T obj = (T) in.readobject();
        return obj;
    } catch (final ClassNotFoundException | IOException ex) {
        throw new SerializationException(ex);
    }
}
```

让你知道，如果不用工具类，序列化和反序列化就得这么写。

## 55、transient 关键字有什么用？

##### transient 关键字的作用及注意事项：

1）transient 修饰的变量不能被序列化；

2）transient 只能用来修饰普通成员变量；

3）transient 只作用于实现 Serializable 接口；

4）不管有没有 transient 修饰，静态变量都不能被序列化；

## 56、怎么控制类中的某些变量不被序列化？

实现 **Serializable** 接口，用 **transient** 关键字修饰的变量不会被序列化。

如下面的使用示例：

> private transient String address;

具体见编程题：编程实现一个序列化对象部分数据的例子。

## 57、编程实现一个序列化对象部分数据的例子

> 给定一个用户类，只有用户名和 ID 成员变量，要求只序列化和反序列化用户名，ID 不需要序列化。

只序列化部分对象数据，关键是使用 transient 关键字修饰不需要序列化的成员变量。

要序列化的用户类：

```java
public class User implements Serializable {
    private static final long serialversionuID = 1L;
    private string username;
    private transient string id;
    public String getusername() {
        return username;
    }
    public void setusername(string username) {
        this.username = username;
    }
    public string getid() {
        return id;
    }
    public void setid(string id) {
        this.id = id;
    }
}
```

测试程序：

```java
public class TransientTest {
    public static void main(string[] args) throws Exception {
        User user = new User();
        user.setusername("Java技术栈");
        user.setid("javastack");

        System.out.println("\n序列化之前");
        System.out.printin("username: " + user.getusername());
        System.out.printin("id: " + user.getid());

        objectoutputstream os = new objectoutputstream(new Fileoutputstream("d:/user.txt"));
        os.writeobject(user);
        os.flush();
        os.close();

        objectinputstream is = new objectInputstream(new FileInputstream("d:/user.txt"));
        user = (User) is.readobject();
        is.close();

        System.out.println("\n序列化之后");
        System.out.println("username: " + user.getusername());
        System.out.println("id: " + user.getid());
    }
}
```

输出结果：

> 序列化之前
>
> username：Java 技术栈
>
> id: javastack
>
> 序列化之后
>
> username: Java 技术栈
>
> id: null

上面的示例在 id 字段上加了 transient 关键字修饰，反序列化出来之后值为 null，说明了被 transient 修饰的变量不能被序列化。

## 58、序列化一个对象时，有哪些要注意的？

> ##### 序列化注意事项：
>
> - 序列化对象必须实现序列化接口；
>
> - 序列化对象里面的属性是对象的话也要实现序列化接口；
>
> - 类的对象序列化后，类的序列化 ID 不能修改，不然反序列化失败；
>
> - 类的对象序列化后，类的成员变量类型不能修改，不然反序列化失败；
>
> - 类的对象序列化后，类的属性有增加或者删除不会影响序列化，只是值会丢失；
>
> - 如果父类序列化了，子类会继承父类的序列化，子类无需添加序列化接口；
>
> - 如果父类没有序列化，子类序列化了，子类中的属性能正常序列化，但父类的属性会丢失，不能序列化；
>
> - 用 Java 序列化的二进制字节数据只能由 Java 反序列化，不能被其他语言反序列化。如果要进行前后端或者不同语言之间的交互-般需要将对象转变成 JSON/XML 通用格式的数据，再恢复原来的对象；

## 59、静态变量能不能被序列化？

> 静态变量能被序列化吗？

那么，到底静态变量能被序列化吗？废话少说，先动手测试下吧！

要序列化的用户类:

```java
public class User implements Serializable {
    private static final long serialversionuID = 1L;
    public static string username;
    private transient string id;
    public string getusername() {
        return username;
    }
    public string getid() {
        return id;
    }
    public void setid(string id) {
        this.id = id;
    }
}
```

测试程序：

```java
public class TransientstaticTest {
    public static void main(string[] args) throws Exception {
        User user = new User();
        user.username ="Java技术栈1";
        user.setid("javastack");

        System.out.println（"\n序列化之前"）;
        System.out.println("username: " + user.getusername());
        system.out.println("id: " + user.getid());

        objectoutputstream os = new objectoutputstream(new Fileoutputstream("d:/user.txt"));
        os.writeobject(user);
        os.flush();
        os.close();

        //在反序列化出来之前，改变静态变量的值
        user.username ="Java技术栈2";
        objectInputstream is = new objectinputstream(new FileInputstream("d:/user.txt"));
        user = (user) is.readobject();
        is.close();
        System.out.println("\n序列化之后");
        System.out.printin("username:" + user.getusername());
        System.out.println("id: " + user.getid());
    }
}
```

输出结果：

> 列化之前
>
> username：Java 技术栈 1
>
> id: javastack
>
> 序列化之后
>
> username：Java 技术栈 2
>
> id: null

上面把 usermame 改为了 public static，并在反序列化出来之前改变了静态变量的值，结果可以看出序列化之后的值并非序列化进去时的值。

由以上结果分析可知，静态变量不能被序列化，读取出来的是 usermame 在 VM 内存中存储的值。

## 60、读写文本文件时如何处理字符编码？

InputStream 只能读取字节数据，仅支持最基本的 AsCll 编码，也不能对字符进行编码。

如果需要处理编码问题时，建议使用 Reader，Reader 支持更多的字符集，例如 UTF-8，UTF-16 等，也可以在读取字符数据时指定字符编码，如下面的示例:

```java
BfferedReader reader = new BufferedReader(new InputstreamReader(new FileInputstream(fileName), "UTF-s")));
```

## 61、Java 如何高效率读写大文件？

在 Java 中读写大文件最常见的方法是使用 InputStream 和 OutputStream，如果文件非常大，可以使用一些更高效的方法，比如以下常用的方法：

（1）使用 BufferedlnputStream 和 BufferedOutputStream，以及 BufferedReader 和 BufferedWriter， 它们都是缓冲流，可以提高读写速度。

（2）使用 NIO，Java NIO 的 FileChannel 可以对文件进行快速的读写操作，它的速度比传统的 IO 方式要快。

（3）使用 RandomAccessFile，这个类可以从文件的任意位置读写数据，可以提高读写速度。

（4）分块读写，读写大文件时，可以分块读写，这样可以减少内存的使用。每种方法都有各自的优点和缺点，可以根据需求选择合适的方法。

## 62、Java 有哪些自动创建文件方式？

在 Java 中，以下 IO 流可以自动创建文件：

- FileOutputStream
- FileWriter
- Printwriter
- ...

## 63、java 有哪几种写文件的方式？

##### Java 有以下几种写文件的方式:

##### （1）FileOutputStream

使用该类可以向文件写入字节数据，该类是一个低级别的写文件方法，不能写入文本。

##### （2）BufferedOutputStream

BufferedOutputStream 是字节输出流，与 FileOutputStream 不同的是，它自带了缓冲区的功能，因此性能更好。

##### （3）PrintWriter

使用该类可以向文件写入文本数据，是一种高级别的写文件方法，方便快捷。

##### （4）BufferedWriter

使用该类可以以缓冲的方式向文件写入文本数据，该类提供了一种高效的写文件方式。

##### （5） FileWriter

使用该类可以向文件写入文本数据，是一种比较简单的写文件方式。

##### （6） **Files**

Java NIO 包中的 Files 类可以方便地进行文件读写操作。

## 64、Java 有哪几种文件拷贝的方式？

##### 主要有以下几种方式：

1、利用 java.io 库，通过 FilelnputStream 的 read 读取文件，FileOutputStream 的 write 写入文件；

2、利用 java.nio 库，通过 FileChannel 的 transferTo/ transferFrom 写入文件。

3、使用 Java 自带的工具类：

![](/images/IO/64.jpg)

4、可以使用 Apache 的 IO 工具包下的 IOUtils 工具类。

## 65、编程实现一个读写文件的示例

在 Java 中，可以使用 IO 包中的类读写文件。

如下面的示例，读取文件并将其内容写入另一个文件中：

```java
public class Test {
    public static void main(string[] args) {
        String fileName = "java.txt";
        String content ="小程序：Java面试库";

        //写文件
        try (Filewriter filewriter = new Filewriter(fileName)) {
            Bufferedwriter bufferedwriter = new Bufferedwriter(filewriter);
            bufferedwriter.write(content);
            bufferedwriter.flush();
        }catch (Exception e){
            System.out.printin("写文件出错");
        }
        //读取文件
        StringBuilder filecontent = new StringBuilder();
        try (FileReader fileReader = new FileReader(fileName)) {
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                fileContent.append(line);
                filecontent.append("\n");
            }
        }catch (Exception e) {
            System.out.println("读取文件出错");
        }
        System.out.println("文件内客: " + filecontent);
    }
}
```

输出结果：

![](/images/IO/65.jpg)

## 66、编程实现一个复制文件的示例

如下面的示例，使用 BufferedReader 和 BufferedWriter 来实现文件的复制。

```java
public class Test {
    public static void main(string[] args) {
        String sourcefile = "java.txt";
        String targetfile = "java2.txt";

        try (BufferedReader br = new BufferedReader(new FileReader(sourceFile));
            Bufferedwriter bw = new Bufferedwriter(new Filewriter(targetFile))) {
            string line;
            while ((line = br.readLine()) I= null) {
                bw.write(line);
                bw.newLine();
            }catch (IoException e){
                e.printstackTrace();
            }
        }
    }
}
```

也可以使用 apache/ commons-io 工具包中的 IOutils.copy\*方法快速复制。

## 67、编程比较两个文件的内容是否相等

示例代码如下：

```java
public class Test {
    public static void main(string[] args) throws Exception {
        // JDK原生实现
        byte[] file1 = Files.readAllBytes(Paths.get("java.txt"));
        byte[] file2 = Files.readAllBytes(Paths.get("java2.txt"));
        boolean isEquals1 = Arrays.equals(filel, file2);
        System.out.printf("两个文件内客是否相等：%s\n"， isEquals1);

        //使用IoutiLs工具类
        boolean isEquals2 = Ioutils.contentEquals(new FileInputstream("java.txt"), new FileInputstream("java2.txt"));
        System.out.printf("两个文件内客是否相等：%s"， isEquals2);
    }
}
```
