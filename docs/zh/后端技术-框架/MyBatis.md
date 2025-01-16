## 1、MyBatis 是什么框架？

MyBatis 是一款优秀的 Java 持久层框架，其前身是 iBatis，它支持自定义 SQL、存储过程以及高级映射。

MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作，MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

## 2、MyBatis 和 iBatis 有什么关系？

> iBatis 是一个流行的 Java ORM 框架，它在 2010 年被 Apache 软件基金会接管，改名为 Apache iBatis。2010 年，iBatis 已经停止维护与更新，同年迁移到了 Google 托管，并更名为 MyBatis，后来已经迁移到了 Github。

所以，MyBatis 可以看作是 iBatis 的一个分支，最大的不同之处在于命名空间的变化，MyBatis 在命名空间上采用了自己的名称，而 iBatis 采用了 org.ibatis 的命名空间。

此外，MyBatis 的功能要更强大，在性能、规范、注解支持等方面都进行了改进。

## 3、什么是 ORM？

ORM（**Object-Relational Mapping**）是指对象关系映射，它是一种编程技术，将面向对象的编程语言与关系型数据库之间建立起了一种映射关系，使得程序员可以通过编写面向对象的代码来完成与数据库的交互。

> ##### ORM 的基本思想是：
>
> 将关系型数据库中的数据表映射为面向对象编程语言中的类，将数据表中的每一行数据映射为类中的一个对象，将数据表中的每一列映射为类中的一个属性。
>
> ORM 框架可以自动完成对象与数据表之间的映射，并提供了一系列的 API，使得开发人员可以使用面向对象的方式来访问和操作数据库。

## 4、常用的 ORM 框架有哪些？

常用的 ORM 框架如下所示：

- Hibernate
- MyBatis（半自动 ORM）
- Spring Data JPA（底层为 Hibernate）
- JOOQ

## 5、MyBatis 和 ORM 的区别？

ORM 是一种将对象模型映射到关系数据库模型的技术，MyBatis 属于半自动 ORM 框架。

## 6、MyBatis 为什么是半自动 ORM 映射？

Hibernate 在查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取，它是全自动 ORM 映射的。

MyBatis 在查询关联对象或关联集合对象时，需要手动编写 SQL 来完成，而不是自动生成 SQL 语句的机制，所以是半自动 ORM 映射。

## 7、MyBatis 框架的应用场景？

##### MyBatis 框架的应用场景：

1）专注于 SQL 本身，复杂 SQL 语句较多。

2）对性能的要求很高，或者需求变化较多的项目，MyBatis 支持二级缓存，可用于提升性能。

3）对 ORM 框架有学习成本要求的项目，MyBatis 可快速上手。

## 8、MyBatis 有哪些优点？

##### MyBaits 的优点：

1）基于 SQL 语句编程，相当灵活，不会对应用程序或者数据库的现有设计造成任何影响，SQL 写在 XML 里，解除 SQL 与程序代码的耦合，便于统一管理；

2）提供 XML 标签，支持编写动态 SQL 语句，并可重用；

3）提供映射标签，支持对象与数据库的 orm 字段关系映射；

4）提供对象关系映射标签，支持对象关系组建维护；

3）与 JDBC 相比，减少了 50% 以上的代码量，消除了 JDBC 大量冗余的代码，不需要手动开关连接；

4）MyBatis 使用 JDBC 来连接数据库，所以很好的与各种数据库兼容；

5）MyBatis 能够与 Spring 很好的集成；

## 9、MyBatis 有哪些缺点？

##### MyBatis 的缺点：

1）SQL 语句的编写工作量非常巨大；

2）SQL 语句依赖于具体数据库，所以移植性非常差；

3）SQL 写在 XML 中，调试比较困难；

## 10、JDBC 是什么？

JDBC 是**Java Database Connectivity** 的缩写，是 Java 语言访问关系型数据库的标准接口，它提供了一套 APl，用于在 Java 程序中与关系型数据库进行交互，而不需要关心底层特定数据库的细节。

JDBC API 提供了一些标准的接口和类，可以在 JaVa 应用中连接、查询和更新关系型数据库中的数据。

## 11、JDBC 有哪些核心对象？

在 JDBC 中，有以下几个核心对象：

| 核心对象          | 描述                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DriverManager     | JDBC 的核心对象之一，负责创建和管理 JDBC 驱动程序，可以使用`getconnection()`方法获取数据库连接。                                  |
| Connection        | 表示 JDBC 中数据库连接的核心对象，它负责与数据库建立连接，并提供了一系列的操作方法，例如执行 SQL 语句、提交事务、设置自动提交等。 |
| Statement         | 表示 JDBC 中 SQL 语句的核心对象，它可以执行静态 SQL 语句，例如查询和更新操作。                                                    |
| PreparedStatement | 表示 JDBC 中预编译 SQL 语句的核心对象，它可以将 SQL 语句预编译，并设置占位符的值，然后执行 SQL 语句并返回结果。                   |
| ResultSet         | 表示 JDBC 中查询结果的核心对象，它提供了一系列的方法，可以遍历查询结果，并获取查询结果的各个列的值。                              |

这些对象相互协作，完成了 JDBC 中连接数据库、执行 SQL 语句、获取查询结果等功能。

## 12、JdbcTemplate 和 JDBC 的区别？

JdbcTemplate 是 Spring 框架提供的 JDBC 模板，可以直接注入 JdbcTemplate 使用，它在 JDBC 的基础上做了深度封装，简化了使用 JDBC 的复杂操作，还有助于避免常见的错误。

## 13、MyBatis 和 JDBC 的区别？

MyBatis 是对 JDBC 的封装，它消除了几乎所有的 JDBC 代码和参数的手工设置。

##### MyBatis 的优势如下：

1、优化连接的频繁获取和释放。

2、可使用 XML 编写 SQL，可以更灵活的动态进行 SQL 处理，维护性也更好。

3、支持对结果集进行对象映射、缓存等性能优化。

## 14、MyBatis 和 JdbcTemplate 怎么选？

两者都是手动编写 SQL，但 JdbcTemplate 是写在 Java 代码中，修改需要重新编译，而 MyBatis 可以配置在 xml 文件中，修改无需重新编译，方便统一维护，所以一般都会使用 MyBatis。

另外，如果是小型、简单的系统也可以考虑使用 JdbcTemplate，使用 SpringJdbcTemplate 的开发效率要比 MyBatis 高。

## 15、JPA 是什么框架？

JPA 是**Java Persistence API** 的缩写，即 Java 持久化 APl，它是 Java EE 规范的一部分，用于定义 Java 对象和关系型数据库之间的映射关系。JPA 规范定义了一些接口和注解，可以使开发人员通过 JaVa 代码操作数据库，避免了直接使用 JDBC 进行数据库操作的繁琐和易错。

> ##### JPA 的基本思想是：
>
> 将 Java 类映射到关系型数据库中的表，将 Java 类中的字段映射到表中的列，使得开发人员可以通过操作 Java 对象来实现对数据库的访问。

## 16、Spring Data JPA 和 JPA 的区别？

Spring Data JPA 框架的底层用的是 Hibernate，可以理解为 Hibernate 更上一层的封装，它的目的就是为了更容易的使用 JPA。

Spring Data JPA 在 JPA 的基础上进行了进一步的封装，提供了更高层次的抽象和更多的接口方法，使得开发更加方便，它可以更加灵活地处理复杂查询场景，或者需要使用 Spring 提供的一些特性，如事务管理、缓存等。

## 17、Hibernate 和 JPA 的区别？

JPA 是持久化规范，而 **Hibernate**、TopLink、OpenJPA 等都是 JPA 这种规范的标准实现框架。

## 18、MyBatis 和 JPA 的区别？

JPA 是一个全自动的 ORM 框架的规范，提供对象与数据库的自动映射，Hibernate 是这种规范的标准实现。而 MyBatis 是一个半自动的 ORM 框架，需要手动编写 SQL，提供数据库与结果集的映射，和 JPA 没有什么关系。

## 19、MyBatis 和 JPA 怎么选？

国内一般用 **MyBatis**，主要是 SQL 编写灵活，易于调试，如果是 CRUD 业务简单的系统也可以考虑使用 JPA（即标准实现：Hibernate）。

两者的对比可以参考： MyBatis 和 Hibernate 的区别？

## 20、MyBatis 和 Hibernate 的区别？

区别主要在一下几个方面体现：

##### 1、学习难度

MyBatis 学习相比 Hibernate 更简单，支持原生 SQL，Hibernate 需要 JPA 知识，学习难度较大。

##### 2、运行效率

MyBatis 支持原生 SQL 自定义查询字段更加灵活，基本属于 JDBC 操作。Hibernate 是对 JDBC 更复杂的封装，每次查询需要完整的映射，对待复杂的查询通过 HQL 语句生成的 SQL 语句效率不能保证，所以 MyBatis 会比 Hibernate 稍快。

##### 3、映射方式

MyBatis 是半自动化 ORM 框架，需要手动映射，对象关系映射配置灵活。

Hibernate 是全自动化 ORM 框架，需要配置完整的对象关系映射，对象关系维护的更好。

##### 4、数据库移植

MyBatis 是直接写对应数据库的原生 SQL，所以在数据移植方面没有 Hibernate 好，Hibernate 自动生成 SQL 能适应更多的数据库，并且能反向生成表。

##### 5、后期维护

MyBatis 是直接管理 XML 映射文件中的 SQL，所以后期维护比 Hibernate 更方便。

> ##### 一句话总结：
>
> MyBatis：小 I 巧、方便、高效、简单、直接、半自动化。
>
> Hibernate：强大、方便、高效、复杂、间接、全自动化。

## 21、MyBatis 有哪些核心组件？

MyBatis 的核心组件包括：

| 组件                     | 描述                                           |
| ------------------------ | ---------------------------------------------- |
| SqlSessionFactoryBuilder | 用于创建 SqlSessionFactory 的构建器            |
| SqlSessionFactory        | 用于创建 SqlSession 的工厂                     |
| SqlSession               | 用于执行 SQL 语句和管理事务的接口              |
| Mapper                   | 用于定义 SQL 语句的接口                        |
| Configuration            | MyBatis 的全局配置类，包括数据库连接池、缓存等 |
| Executor                 | 用于执行 SQL 语句的执行器                      |
| StatementHandler         | 用于处理 SQL 语句的处理器                      |
| ResultSetHandler         | 用于处理查询结果的处理器                       |
| TypeHandler              | 用于处理 Java 类型和数据库类型之间的转换       |
| Plugin                   | 用于对 MyBatis 的核心组件进行拦截和扩展        |
| BoundSql                 | 封装了 SQL 语句和参数映射信息的对象            |

## 22、MyBatis 中 StatementHandler 和 MappedStatement 区别？

StatementHandler 和 MappedStatement 是 MyBatis 中两个不同的概念，但它们两个是密切相关的，它们共同完成了从 Mapper 映射文件到最终的 JDBC 操作的整个过程。

简单来说，**MappedStatement 主要负责维护 SQL 语句的相关信息，而 StatementHandler 则负责将 SQL 语句解析、执行和结果映射等具体操作实现。**

## 23、MyBatis 常用的 TypeHandler 有哪些？

MyBatis 中常用的 TypeHandler 如下表：

| TypeHandler           | 对应的 JDBC 类型 | 对应的 Java 类型        |
| --------------------- | ---------------- | ----------------------- |
| ArrayTypeHandler      | ARRAY            | 数组                    |
| BigDecimalTypeHandler | DECIMAL          | java.math.BigDecimal    |
| BiglntegerTypeHandler | DECIMAL          | java.math.Biglnteger    |
| BlobTypeHandler       | BLOB             | byte 或 java.sql.Blob   |
| BooleanTypeHandler    | BOOLEAN          | Boolean 或 boolean      |
| ByteTypeHandler       | TINYINT          | Byte 或 byte            |
| CharacterTypeHandler  | CHAR 或 VARCHAR  | Character 或 char       |
| ClobTypeHandler       | CLOB             | String 或 java.sql.Clob |
| DateTypeHandler       | DATE             | java.util.Date          |
| DoubleTypeHandler     | DOUBLE           | Double 或 double        |
| FloatTypeHandler      | FLOAT            | Float 或 float          |
| IntegerTypeHandler    | INTEGER          | Integer 或 int          |
| LongTypeHandler       | BIGINT           | Long 或 long            |
| ShortTypeHandler      | SMALLINT         | Short 或 short          |
| String TypeHandler    | VARCHAR          | String                  |

更多可以查看 BaseTypeHandler 的实现类。

> ##### 需要注意的是：
>
> 如果 MyBatis 没有提供合适的 TypeHandler，可以通过实现 TypeHandler 接口来自定义类型转换逻辑。

## 24、MyBatis 怎么实现自定义的 TypeHandler？

在 MyBatis 中，可以通过实现 **TypeHandler** 接口来实现自定义的 TypeHandler，具体实现逻辑可以参考 MyBatis 内置的 TypeHandler 实现源码。

如**DoubleTypeHandler**实现源码：

```java
public class DoubleTypeHandler extends BaseTypeHandler<Double> {
    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, Double parameter, JdbcType jdbcType) throws SQLException {
        ps.setDouble(i, parameter);
    }

    @Override
    public Double getNullableResult(ResultSet rs, String columnName) throws SQLException {
        double result = rs.getDouble(columnName);
        return result == 0 && rs.wasNull() ? null : result;
    }

    @override
    public Double getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
      double result = rs.getDouble(columnIndex);
        return result == 0 && rs.wasNull() ? null : result;
    }

    @Override
    public Double getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        double result = cs.getDouble(columnIndex);
        return result == 0 && cs.wasNull() ? null : result;
    }
}
```

然后在启用自定义 TypeHandler：

```xml
<typeHandlers>
    <typeHandler handler-"cn.javastack.CustomTypeHandle" javaType-"cn.javastack.XXx"/>
</typeHandlers>
```

也可以在映射文件或注解中显示指定 typeHandler 属性：

```xml
<resultMap id="userResultMap" type="User">
    <id column="id" property="id"/>
    <result column="name"  property="name" typeHandler="cn.javastack.CustomTypeHandler"/>
    <result column="age" property="age"/>
</resultMap>
```

或者在 @Result 注解中指定：

```java
@Results({
    @Result(column = "name", property ="name" typeHandler = CustomTypeHandler.class),
    @Result(column = "age", property ="age")
})
public interface UserMapper {
    // ...
}
```

## 25、MyBatis 执行流程是怎样的？

MyBatis 执行流程图大概如下：

![](/images/MyBatis/25.jpg)

1）根据 MyBatis 配置文件创建 SqlSessionFactory 工厂对象。

2）创建 SqISession 会话对象，该对象中包含了执行 SQL 语句的所有方法，其中包括 SQL 的类型、ID、参数等信息。

3）创建 Executor 执行器对象，它会根据 SqISession 传递的参数动态地生成需要执行的 SQL 语句，同时负责查询缓存的维护。

4）通过 StatementHandler 对象执行 SQL 语句，并使用 ParameterHandler 处理参数。

5）通过 ResultSetHandler 和 TypeHandler 将结果集映射为 Java 对象或列表并返回给用户。

## 26、MyBatis 中的 SqlSession 是线程安全的吗？

SqISession 是一个接口，不存在线程安全之说。

一般说的 SqISession 线程安全是指它的实现类，比如 MyBatis 中的 SqISession 默认实现类 **DefaultSqlSession 并不是线程安全的，SqISessionManager 和 SqlSessionTemplate 是线程安全的。**

## 27、MyBatis 中的 SqlSession 有哪些实现类？

SqlSession 接口主要有两个常用的实现类：

##### 1、DefaultSqlSession

DefaultSqlSession 是 SqlSession 接口的默认实现类，它是线程不安全的。

##### 2、 SqISessionManager

SqlSessionManager 是 MyBatis 提供的一个线程安全的 SqlSession 实现类，用于解决多线程环境下 SqlSession 线程安全问题。

SqlSessionManager 内部维护了一个 ThreadLocal，用于为每个线程提供独立的 SqlSession 实例，从而避免了多个线程共用一个 SqlSession 导致的线程安全问题;

```java
public class SqlsessionManager implements SqlsessionFactory, SqlSession {
    private final SqlSessionFactory sqlsessionFactory;
    private final Sqlsession sqlSessionProxy;
    private final Threadlocal<SqlSession> localsqlsession = new ThreadLocal<>();
}
```

SqlSessionManager 中的 SQL 操作都是调用 SqlSessionProxy 代理对象中的方法，在创建该代理对像的时候使用的 InvocationHandler 对象是 SqISessionlnterceptor 类，部分源码如下：

```java
private class SqlSessionInterceptor implements InvocationHandler {
    public SqlsessionInterceptor() {
    }
  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        SqlSession sqlSession = (Sqlsession)SqlsessionManager.this.localSqlSession.get();
        if (sqlsession != null) {
            try {
                return method.invoke(sqlsession, args);
            } catch (Throwable var9) {
                throw ExceptionUtil.unwrapThrowable(var9);
            }
        } else {
                qlSession auto5qlSession = SqlsessionManager.this.openSession();
        }
    }
}
```

##### 3、 SqlSessionTemplate

SqlSessionTemplate 是 Spring 提供的 MyBatis-Spring 整合的组件之一它也是 SqlSession 接口的一个实现类,它是线程安全的。

SqlSessionTemplate 的 SQL 操作也是使用了 SqlSessionlnterceptor，还使用了线程安全的 SqlSessionUtils 和 DataSourceUtils 工具，它实现了 SqISession 的自动管理，支持事务提交和回滚等功能，避免了手动管理 SqlSession 的繁琐。

## 28、MyBatis 中的 DefaultSqlSession 为什么不是线程安全的？

如源码注释所示：

```java
public class DefaultsqlSession implements SqlSession {
    private final Configuration configuration;
    private final Executor executor;
    private final boolean autocommit;
    private boolean dirty;
    private List<Cursor<?>> cursorList;
}
```

如源码所示，它持有了多个共享变量比如 Configuration 和 Executor 等，如果它们在多线程环境下同时使用可能会导致数据不一致、并发问题等异常情况。

## 29、MyBatis 中 SqlSessionTemplate 与 SqlSessionManager 的区别？

在 MyBatis 中，SqlSessionTemplate 和 SqISessionManager 都是用来管理 SqlSession 的类，它俩都是线程安全的。

> ##### 区别如下：
>
> SqlSessionTemplate 是一个 Spring 框架提供的类，它是基于 MyBatis 的 SqISession 实现的，用于在 Spring 环境中，通过 Spring 的事务管理器来管理 SqISession 实例的生命周期。
>
> 而 SqlSessionManager 是 MyBatis 提供的类，主要用于非 Web 应用程序或者没有使用 Spring 的 Web 应用程序。

## 30、MyBatis 中的缓存机制有啥用？

MyBatis 的缓存分为两级：**一级缓存、库二级缓存**，MyBatis 可以将数据库查询的结果缓存到内存中，下次查询时直接从内存中获取，避免了频繁对数据库的访问，从而提升查询效率。

##### 数据查询流程：

1）在同一个 SqISession 中，如果执行了相同的查询语句，MyBatis 会首先检查一级缓存中是否存在缓存的结果，如果存在，则直接返回缓存的结果，否则会执行查询并将查询结果缓存到一级缓存中。

2）在新的 SqlSession 中，如果二级缓存开启，先判断二级缓存有没有数据，如果有就直接返回；如果没有，就查询一级缓存，如果有就返回，没有就查询数据库。

## 31、MyBatis 一级缓存和二级缓存的区别？

一级缓存

一级缓存是一个在 SqlSession 内部共享的缓存区域，即 SqlSession 级别的缓存，它是基于对象引用实现的，它会缓存查询出来的结果对象，当 SqlSession 提交、关闭以及其他的更新数据库的操作发生后，一级缓存就会清空。

二级缓存

二级缓存是 Mapper 级别的缓存，二级缓存是跨 SqISession 的，同一个 Mapper 产生的 SqlSession 都共享一个二级缓存，即不管 SqlSession 是否相同，只要 Mapper 的 Namespace 相同就能共享数据。

二级缓存中存储的是数据，当命中二级缓存时，通过存储的数据构造对象返回。

> ##### 需要注意的是：
>
> 只有当一级缓存 SqISession 对象使用完并提交或者关闭时，才会提交到二级缓存中。

## 32、MyBatis 一级缓存和二级缓存是什么数据结构？

##### 一级缓存

---

一级缓存，即本地缓存，一级缓存使用了一个 **HashMap** 集合对象来保存结果。

源码如下：

```java
public abstract class BaseExecutor implements Executor {
    private static final Log log = LogFactory.getlog(BaseExecutor.class);
    protected Transaction transaction;
    protected Executor wrapper;

    protected ConcurrentLinkedQueue<DeferredLoad> deferredLoads;
    protected Perpetualcache localcache;
    protected Perpetualcache localoutputParametercache;
    protected Configuration configuration;

    protected int querystack;
    private boolean closed;

    protected BaseExecutor(configuration configuration, Transaction transaction) {
        this.transaction = transaction;
        this.deferredloads = new ConcurrentLinkedQueue<>();
        this.localcache = new Perpetualcache("Localcache");
        this.localoutputParametercache = new Perpetualcache("LocaloutputParametercache");
        this.closed = false;
        this.configuration = configuration;
        this.wrapper = this;
    }
}
```

它使用的是 PerpetualCache 缓存类型，源码如下：

```java
public class Perpetualcache implements Cache {
    private final string id;
    private final Map<object, object> cache = new HashMap<>();
}
```

##### 二级缓存

---

二级缓存则需要看 Mapper 映射文件中使用的什么缓存类型，默认为 LRU，LruCache 使用的是 LinkedHashMap 集合对象来保存结果。

如源码所示：

```java
public class XMLMapperBuilder extends BaseBuilder {
    // ...
    private void cacheElement(xNode context) {
        if (context != null) {
            String type = context.getstringAttribute("type", "PERPETUAL");
            Class<? extends Cache> typeclass = typeAliasRegistry.resolveAlias(type);
            //没有配置默认为LRU
            String eviction = context.getstringAttribute("eviction", "LRU");

            Class<? extends Cache> evictionclass = typeAliasRegistry.resolveAlias(eviction);
            Long flushinterval = context.getlongAttribute("flushinterval");
            Integer size = context.getintAttribute("size");
            boolean readwrite = lcontext.getBooleanAttribute("readonly", false);
            boolean blocking = context.getBooleanAttribute("blocking", false);
            Properties props = context.getchildrenAsProperties();
            builderAssistant.useNewcache(typeclass, evictionclass, flushinterval, size, readwrite, blocking, props);
        }
    }
}
```

然后在 Configuration 配置类中会有别名注册：

```java
public class Configuration {
    public configuration() {
        // ...
        typeAliasRegistry.registerAlias("PERPETUAL", Perpetualcache.class);
        typeAliasRegistry.registerAlias("FIFo", Fifocache.class);
        typeAliasRegistry.registerAlias("LRu", Lrucache.class);
        typeAliasRegistry.registerAlias("soFT", Softcache.class);
        typeAliasRegistry.registerAlias("WEAK", Weakcache.class);
    }
}
```

然后通过别名获取具体的缓存 class 类，再通过类构造器反射的方式创建缓存实例。

> 更多缓存的实现及数据结构，可以参考面试题《MyBatis 中的缓存有哪些实现类型？》

## 33、MyBatis 中的缓存有哪些实现类型？

MyBatis 缓存接口 Cache 的几种实现类：

| 缓存实现类     | 数据结构                               | 功能                                                                                       |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------ |
| PerpetualCache | HashMap                                | 永久缓存，将缓存数据保存在内存中，直到程序关闭或手动清空缓存为止。                         |
| LruCache       | LinkedHashMap                          | 将缓存数据保存在内存中，并按照最近最少使用的原则自动清理缓存，保留最近使用频率较高的数据。 |
| FifoCache      | Deque (双端队列)                       | 先进先出缓存，按照先进先出的原则自动清理缓存，保留最近加入缓存的数据。                     |
| SoftCache      | ReferenceQueue + Deque (SoftReference) | 软引用缓存，允许 JVM 垃圾回收时清理缓存，避免缓存数据占用过多内存。                        |
| WeakCache      | ReferenceQueue + Deque (WeakReference) | 弱引用缓存，和 SoftCache 类似，但使用弱引用的方式来管理缓存，更容易被 JVM 垃圾回收。       |

> 一级缓存默认为 PerpetualCache，二级缓存默认为 LruCache。

## 34、MyBatis 默认会开启缓存机制吗？怎么开启？

MyBatis 默认**会开启一级缓存**，默认**不会开启二级缓存**。

如需要开启二级缓存，需要在 settings 全局参数中配置 cacheEnabled 属性：

```xml
<configuration>
    <settings>
        <setting name="cacheEnabled" value="true"/>
    </settings>
</configuration>
```

然后在要使用二级缓存的\*Mapper.xml 文件中添加 cache 标签：

```xml
<cache/>
```

也可以自定义 cache 标签参数：

```xml
<cache eviction="FIFo" flushInterval="30oee" size="512" readonly="true"/>
```

配置参数说明如下：

| 参数             | 说明                                                           |
| ---------------- | -------------------------------------------------------------- |
| eviction         | 用于指定缓存的清理策略，默认值为 LRU。                         |
| flushlnterval    | 用于指定刷新缓存的时间间隔，默认值为不刷新。                   |
| size             | 用于指定缓存最多可以存储多少个对象，默认值为 1024。            |
| readOnly         | 用于指定缓存是否只读，默认值为 false，表示可读可写。           |
| blocking         | 用于指定缓存是否使用阻塞存储，默认值为 false，表示非阻塞存储。 |
| type             | 用于指定缓存实现的类型，默认值为 PERPETUAL。                   |
| evictionSpooling | 用于指定缓存回收后是否需要将数据写入磁盘，默认值为 false。     |
| flushOnExecute   | 用于指定是否在执行任何查询之后都要清空缓存，默认值为 true。    |
| readWrite        | 用于指定缓存是否可读可写，默认值为 true。                      |
| blockingTimeout  | 用于指定缓存阻塞时间，单位为毫秒，默认值为 5000。              |
| clearOnCommit    | 用于指定是否在事务提交后清空缓存，默认值为 true。              |
| properties       | 用于指定缓存的其他属性。                                       |

## 35、MyBatis 为什么默认不会开启二级缓存？

MyBatis 默认不开启二级缓存是因为以下原因：

- 多个应用程序共享同一个二级缓存，在并发读写的情况下会出现**缓存数据不一致**的问题；
- 对于一些频繁更新的数据，开启二级缓存反而会导致缓存的命中率变低，性能反而下降；
- 二级缓存需要占用额外的内存资源，如果是轻量级应用或单机应用，不开启二级缓存可以降低内存压力，避免资源浪费。

所以，MyBatis 默认不开启二级缓存，需要根据具体情况进行配置。

## 36、MyBatis 中的缓存什么时候会被清理？

##### 一级缓存的清理时机：

- 当关闭 SqlSession 会话时；
- 当提交事务时；
- 手动调用 SqlSession.clearCache() 方法清空一级缓存；

---

##### 二级缓存的清理时机：

- 根据二级缓存配置的缓存间隔刷新缓存；
- 当二级缓存配置了提交事务清除缓存时，如果该操作（insert/update/ delete）对应的结果可能会影响到其他语句的结果，则会清空相应的缓存。比如，如果一个表中的一行数据被更新或删除，则会清空所有使用了该表数据的语句的缓存。

## 37、MyBatis 二级缓存清理策略有哪些？

MyBatis 支持的二级缓存清理策略：

| 清理策略值     | 描述                | 清理时机                           |
| -------------- | ------------------- | ---------------------------------- |
| **LRU (默认)** | Least Recently Used | 最近最少被使用的缓存对象会被清除。 |
| FIFO           | First In, First Out | 以先进先出的顺序清除缓存对象。     |
| SOFT           | 软引用              | 缓存对象有可能被垃圾回收器清除。   |
| WEAK           | 弱引用              | 缓存对象非常容易被垃圾回收器清除。 |

## 38、MyBatis 接口绑定有哪几种方式？

MyBatis 接口与 SQL 映射语句的绑定方式有以下 2 种：

##### 1、基于 XML 配置文件的映射器

---

在 XML 配置文件中编写 SQL 映射语句：

```xml
<mapper namespace-"cn.javastack.UserMapper">
    <select id="getuserById" parameterType="int" resulttype="user">SELECT * FROM user WHERE id = #{id}
    </select>
</mapper>
```

然后通过创建 SqISession 实例并调用 getMapper 方法来执行 SQL 映射语句：

```java
Sqlsession sqlsession = sqlsessionfactory.opensession();
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
User user = userMapper.getuserById(1);
```

> 如果使用 Spring 集成，这里的 UserMapper 可以直接注入使用。

也可以通过 SqlSession 接口的方法直接执行 SQL 映射语句：

```java
Sqlsession sqlsession = sqlsessionFactory.opensession();
User user = sqlsession.selectone("cn.javastack.UserMapper.getuserById", 1);
```

##### 2、基于注解的映射器

---

在接口中使用注解方式编写 SQL 映射语句：

```java
@Mapper
public interface UserMapper {
    @select("SELECT * FROM user WHERE id = #{id}")
    User getuserById(int id);
}
```

然后通过创建 SqISession 实例并调用其方法来执行 SQL 映射语句：

```java
Sqlsession sqlsession = sqlsessionFactory.opensession();
UserMapper userMapper = sqlsession.getMapper(UserMapper.class);
User user = userMapper.getUserById(1);
```

## 39、MyBatis 有哪几种 SQL 编写形式？

MyBatis 有两种 SQL 编写形式：

##### 1、XML 映射文件形式

使用 XML 文件描述 SQL 语句以及映射关系，这也是最初的编写形式，也是最常用的形式之一。

该方式的优点是可以将 SQL 语句和 Java 代码分离，易于维护和修改。

##### 2、注解形式

使用注解描述 SQL 语句以及映射关系，通过在接口的方法上面加上 @Select、@Update 等注解里面编写 SQL 语句。

注解方式的优点是可以将 SQL 语句和 Mapper 接口写在一起，便于查看和理解，适用于简单的 SQL 语句或动态 SQL。

> SQL 语句比较简单，可考虑使用注解，但一般会统一规范使用 XML 形式定义 SQL。

使用方式参考面试题：MyBatis 接口绑定有哪几种方式？

## 40、MyBatis 映射文件中有哪些顶级元素？

MyBatis 映射文件中的顶级元素：

| 元素             | 用途                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `<mapper>`       | 指定映射器接口的命名空间，以及包含的 SQL 语句等信息。                                       |
| `<sql>`          | 定义可重用的 SQL 语句片段，可以在其他 SQL 语句中引引用。                                    |
| `<cache>`        | 配置二级缓存，可以将结果缓存到内存中以提高查询性能。                                        |
| `<resultMap>`    | 将查询结果映射到 Java 对象上，包含一组`<result>`标签和`<association>`、`<collection>`标签。 |
| `<parameterMap>` | ~~将方法参数映射到 SQL 语句中的占位符上，已过时，不推荐使用。~~                             |
| `<select>`       | 定义 SELECT 语句，用于从数据库中查询数据。                                                  |
| `<insert>`       | 定义 INSERT 语句，用于向数据库中插入数据。                                                  |
| `<update>`       | 定义 UPDATE 语句，用于更新数据库中的数据。                                                  |
| `<delete>`       | 定义 DELETE 语句，用于从数据库中删除数据。                                                  |

> 需要注意的是：其中`<parameterMap>`元素已经过时，不推荐使用，可以使用`parameterType`和`resultType`属性来指定参数和返回值的类型。

## 41、MyBatis 映射时 A 引用了 B，如果 B 在 A 后面会怎样？

MyBatis 在解析 XML 映射文件时，是按照 SQL 定义的顺序来解析的，但它们的定义顺序并不会影响它们最终的解析结果。

> 比如，如果 A 引用 B，B 又在 A 后面定义，它们依然可以被 Mybatis 正确解析的。

##### 解析原理如下：

- MyBatis 在解析 A 时，如果发现没有解析到 B，此时就会把 A 标记为未解析状态，然后继续解析下面内容；
- MyBatis 会继续把剩下的内容解析完，然后再解析之前标记为未解析的内容；比如，在后面解析时，如果已经成功解析到了 B，此时再去解析 A 时就能顺利完成。

## 42、MyBatis 中 Mapper 接口的实现原理是？

在 MyBatis 中，**Mapper 接口的实现原理是通过 Java 动态代理实现的：**

- 在运行时，MyBatis 会根据 Mapper 接口的定义生成一个代理对象，用于实现对 Mapper 接口方法的调用，并和 SqlSession 进行绑定，这样代理对象才能够访问数据库；
- 当调用 Mapper 接口的方法时，实际上是调用了代理对象的对应方法，代理对象会拦截这个方法调用，并将调用转发给实际执行 SQL 操作的 SqISession 对象。

这样一来，我们就可以直接调用 Mapper 接口的方法来执行对应的 SQL 操作，而无需编写 Mapper 实现类。

## 43、MyBatis 中 Mapper 中的 SQL 语句可以重载吗？

##### 答：不可以重载。

因为在 MyBatis 中，\*Mapper.xml 文件是通过 **namespace** 属性与 **Mapper** 接口绑定的，MyBatis 会根据 **namespace + id** 找到对应的方法，所以一个 Mapper.xml 中的 SQL 映射语句 id 必须唯一，如果在同一个 namespace 中定义多个相同 id 的 SQL 映射语句，会导致冲突错误。

如需要定义多个相同功能的 SQL 语句，可以通过在 SQL 语句的名称中**添加后缀或前缀的方式进行区分**，如以下示例代码：

```xml
<mapper namespace="com.example.UserMapper">
  <select id="getuserById" parametertype="int" resultType="com.example.User">
        SELECT * FROM user WHERE id = #{id}
  </select>
    <select id="getuserByName" parameterType="string" resultType="com.example.User">
        SELECT * FROM user WHERE naMe = #{name}
    </select>
</mapper>
```

## 44、MyBatis 配置文件中的 SQLid 是否能重复？

同一个 _Mapper.xml 映射文件中的 id 是不能重复的，参考面试题《MyBatis 中 Mapper 中的 SQL 语句可以重载吗？》_

*如果是不同的*Mapper.xml 映射文件：

- 如果都配置了 namespace，那么 id 可以重复；
- 如果都没有配置 namespace，则 id 不能重复。

> **一句话总结就是**：namespace + id 不能重复。

## 45、MyBatis 支持哪些传参数的方法？

下面给大家总结了以下几种多参数传递的方法。

##### 方法 1：顺序传参法

---

```java
public User selectuser(String name, int deptid);
```

```xml
<select id="selectuser" resultMap="UserResultMap">
    select * from userwhere user_name = #{0} and dept_id = #{1}
</select>
```

`#{}`里面的数字代表你传入参数的顺序。这种方法不建议使用，sql 层表达不直观，且一旦顺序调整容易出错。

##### 方法 2：@Param 注解传参法

---

```java
public User selectuser(@param("userName") string name, int @Param("deptId") deptId);
```

```xml
<select id="selectUser" resultMap="UserResultMap">
    select * from userwhere user_name = #{userName} and dept_id = #{deptId}
</select>
```

`#{}`里面的名称对应的是注解`@Param`括号里面修饰的名称。这种方法在参数不多的情况还是比较直观的，推荐使用。

##### 方法 3：Map 传参法

---

```java
public user selectuser(Map<String, object> params);
```

```xml
<select id="selectuser" parameterType="fava.util.Map" resultMap="UserResultMap">
    select * from userwhere user_name = #{userName} and dept_id = #{deptid}</select>
```

`#{}`里面的名称对应的是`Map`里面的 key 名称。

这种方法适合传递多个参数，且参数易变能灵活传递的情况。

##### 方法 4：Java Bean 传参法

---

```java
public User selectuser(user user);
```

```xml
<select id="selectUser" parameterType="com.test.User" resultMap="UserResultMap">
    select * from userwhere user_name = #{userName} and dept_id = #{deptid} </select>
```

`#{}`里面的名称对应的是`user`类里面的成员属性。

这种方法很直观，但需要建一个实体类，扩展不容易，需要加属性，看情况使用。

## 46、MyBatis 的`### 和`#`传参的区别？

在 MyBatis 中，使用`$`和`#`传参数的区别：

##### 1、处理方式不同

`$`使用的是字符串替换的方式，它会将传入的参数直接替换到 SQL 语句中，所以存在 SQL 注入风险。

`#`使用的是预编译的方式，在传递参数时，它会对参数进行处理，包括类型转换、拼接单引号等，可以有效地防止 SQL 注入。

2、应用场景不同

`$`适用于 SQL 语句中的表名、列名等不能使用预编译语句的场景，如下所示：

```XML
ELECT * FROM ${tableName}
```

而`#`适用于大部分的传参场景：

```XML
ELECT * FROM uSer WHERE id = #{id}
```

> 在大部分情况下，推荐使用`#`，避免 SQL 注入等安全问题，如果要使用`$`，则确保参数不存在 SQL 注入风险。

## 47、MyBatis 可以映射到枚举类吗？

可以的，MyBatis 中自带了两个枚举类型的相互转换类：

- org.apache.ibatis.type.EnumTypeHandler

- org.apache.ibatis.type.EnumOrdinalTypeHandler

可以完成对 VARCHAR、CHAR、INTEGER、BIGINT 等数据类型到 Java 枚举类型的相互映射。

MyBatis 还内置了 VARCHAR、CHAR、INTEGER、BIGINT 等类型的转换器，可以直接将这些类型的数据映射到 Java 枚举类型中。

映射枚举示例如下：

```xml
<resultMap id="userResultMap" type="cn.javastack.entity.User">
    <id property="id" column="id" />
    <result property="name" column="name" />
    <result property="sex" column="gender" javatype="cn.javastack**,enums.SexTypeEnum" />
</resultMap>
```

使用 javaType 指定 Java 枚举类。

## 48、MyBatis 怎么封装动态 SQL？

常用的动态 SQL 标签包括：

| 标签名称                              | 描述                                                   |
| ------------------------------------- | ------------------------------------------------------ |
| `<if>`                                | 条件判断标签，只有当指定条件为真时才生成 SQL 语句      |
| `<choose>`、`<when>`、`<otherwise>`   | 多重条件判断标签，根据条件生成不同的 SQL 语句          |
| `<foreach>`                           | 遍历集合或数组，动态生成重复的 SQL 语句                |
| `<bind>`                              | 定义变量，可用于在 SQL 语句中使用动态变量              |
| `<where>`、`<set>`、`<trim>`、`<sql>` | 用于包装动态 SQL 语句，自动去掉多余的 SQL 关键字和逗号 |

下面是一个简单应用示例：

```java
<select id="getusers" parameterType="com.example.User" resultType="com.example.User">
    SELECT * FROM user
    <where>
        <if test="name != null">
            AND name = #{name}
        </if>
        <if test="age != null">
            AND age = #{age}
        </if>
    </where>
    ORDER BY id DESC
    <if test="limit != null">
        LIMIT #{limit}
    </if>
</select>
```

在上面的示例中，使用了`<if>`标签和`<where>`标签来动态生成 SQL 语句，只有在满足条件时才会添加对应的 SQL 语句片段。

## 49、MyBatis trim 标签有什么用？

MyBatis 中的`<trim>`标签是一个常用的 SQL 拼接标签，用于动态拼接 SQL 语句中的 WHERE 子句、SET 子句或其他语句块。`<trim>`标签可以根据指定的前缀、后缀和子元素来动态生成 SQL 语句片段。

`<trim>`标签的基本语法如下：

```xml
<trim prefix="..." suffix="..." prefixoverrides="..." suffixoverrides="...">
  ...
</trim>
```

以下是 trim 标签中涉及到的属性：

| 属性            | 描述                        |
| --------------- | --------------------------- |
| prefix          | 给 SQL 语句拼接的前缀       |
| suffix          | 给 SQL 语句拼接的后缀       |
| prefixOverrides | 去除 SQL 语句前面指定的字符 |
| suffixOverrides | 去除 SQL 语句后面指定的字符 |

使用示例：

```xml
<select id="xx" resultMap="xx">
    SELECT * FROM test
    <trim prefix="WHERE" prefixOverrides="AND">
        <if test="type != null and type != ''">
            AND type = #{type}
        </if>
        <if test="name != null and name !=''">
            AND name=#{name}
        </if>
    </trim>
</select>
```

这里使用了 prefixOverrides，会自动去除 where 条件前面多余的 AND 关键字。

## 50、MyBatis where 标签有什么用？

MyBatis 中的`<where>`标签用于在 SQL 语句中动态生成 WHERE 子句，它可以根据条件动态生成 WHERE 子句的语法，如果 WHERE 子句中没有任何条件，则该标签将被忽略。

示例代码：

```xml
<select id="xxx" parameterType="xxx" resulttype="java.lang.Integer">
    select * from test t
    <where>
        <if test="type != null and type !=''">
            type = #{type}
        </if>
        <if test="name != null and name != ''">
            name = #{name}
        </if>
    </where>
</select>
```

如果至少有一个条件，`<where>`标签会自动插入一个 where 关键字，并删除多余的 and,or 关键字，避免因为 WHERE 子句开头的 AND 或 OR 关键字造成的 SQL 语法错误，使 SQL 语句更加简洁、易于维护。

> PS：不要再写 1=1 了

## 51、MyBatis 怎么实现分页？

##### 1、使用 RowBounds 对象实现分页

---

MyBatis 中提供了 RowBounds 对象来实现分页，它表示从结果集的指定位置开始获取指定数量的数据。

示例代码：

```xml
<select id="getuserlist" parameterType="map" resulttype="User">
    SELECT * FROM user
</select>
```

在进行分页查询时，可以通过创建 RowBounds 对象来指定分页的起始位置和每页的数据条数：

```java
//起始位置为
int offset = 10;

//每页故据条数为10
int limit = 10;

RowBounds rowBounds :: new RowBounds(offset, limit);
List<User> userList = sqlsession.selectlist("getuserList", null, rowBounds);
```

##### 2、通过 SQL 实现分页

---

如 MySQL 中，可以通过 LIMIT 关键字实现分页，语法为 LIMIT offset, limit，其中 offset 表示分页的起始位置，limit 表示每页的数据条数。

示例如下：

```xml
<select id="getuserList" parameterType="map" resultType="User">
    SELECT * FROM user LIMIT #{offset}, #{limit}
</select>
```

##### 3、使用分页插件

---

可以使用 MyBatis-Plus 框架分页或者 PageHelper 分页插件，可以在不修改原 SQL 语句的情况下实现分页。

使用分页插件的方式简单、方便，但需要引入第三方库，也可能会影响系统性能。

## 52、MyBatis 流式查询有什么用？

> 在查询大数据量时，常常使用的做法就是对数据进行分页，但分页的效率很低下，所以需要 MyBatis 流式查询。

MyBatis 流式查询查询数据的时候，返回的结果集不是一个集合，而是一个迭代器，每次从迭代器中处理查询一条结果，这样就能避免大数据查询导致的内存问题。

MyBatis 流式查询的实现原理是通过游标**（接口：Cursor）**来实现的，它实现了 Iterable 接口，在进行流式查询时，MyBatis 会将查询结果封装成游标对象，并使用 ResultHandler 接口来对游标对象进行操作。

> ##### 需要注意的是：
>
> 流式查询的过程当中，数据库连接是保持打开状态的，因此要注意的是，在执行一个流式查询后，数据库访问框架就不负责关闭数据库连接了，需要应用在取完数据后自己关闭。

流式查询通常用于处理大量数据的场景，**例如大数据量的日志查询、数据清洗等场景**。在这些场景下，一次性加载所有数据可能会导致内存占用过高，甚至导致系统崩溃。使用流式查询可以在保证查询效率的同时，避免这些问题的出现。

## 53、MyBatis 模糊查询 like 语句该怎么写？

##### 1、在 SQL 中直接使用通配符

---

Java：

```java
String name = "%yaya%";
List<User> users = mapper.searchusers(name);
```

SQL 语句：

```xml
<select id="searchusers" parametertype="string" resulttype="cn.javastack.User">
    SELECT * FROM user WHERE name LIKE #{keyWord}
</select>
```

##### 2、使用占位符#进行模糊查询

---

SQL 语句：

```xml
<select id="searchusers" parameterType="string" resultType="cn.javastack.User">
    SELECT * FROM user WHERE name LIKE CONCAT('%', #{keyword}, '%")
</select>
```

> 不建议使用 ${}以免造成 SQL 注入风险。

## 54、MyBatis 如何防止 SQL 注入？

1、不要使用 +号拼接 SQL；

2、使用#传参数，不要使用${}；

3、in 条件中的多个值使用<foreach 循环语法；

4、后端程序应该做好参数检查，防范潜在的攻击；

等等。。

## 55、MyBatis 如何获取自动生成的主键 id？

##### MySQL

---

MySQL 支持主键自动自增，如需在 MyBatis 中使用自增主键获取主键值策略，可以在 insert 语句上设置 useGeneratedKeys="true"参数值，然后使用 keyProperty 参数指定对应的主键参数。

Mapper 文件 insert 语句设置：

```xml
<insert id="adduser" useGeneratedkeys="true" keyProperty="id" databaseId="mysql" ...>
    insert into t_user(id, last_name, email, gender)values (#{id}, #{lastName}, #{email}, #{gender})
</insert>
```

##### Oracle

---

Oracle 不支持主键的自增，但是可以使用序列的方式来实现自增，在插入数据时，主键的值从序列查询获取。

Mapper 文件 insert 语句设置：

```xml
<insert id="adduser" databaseId="oracle">
    <!--
    keyProperty：主键封装 JavaBean 属性
    order="BEFORE"：在插入 SQL 之前运行
    order="AFTER": 在插入 SQL 之后运行
    resuLtType：查出数据类型
  -->
    <selectKey keyProperty="id" order="BEFoRE" resultType="Integer">
        select xx.nextval from dual
    </selectkey>
    <!--插入数据时的主键id是提前从序列中拿到的-->
    insert into t_user(id, last_name, email, gender)values (#{id}, #{lastName}, #{email}, #{gender})
</insert>
```

## 56、MyBatis 实体类中的属性名和表字段名不一样，怎么办？

##### 1、SQL 中使用别名

---

通过在查询的 SQL 语句中定义字段的别名，保持和实体类的属性名一致即可：

```xml
<select id="queryorder" parametertype="int" resultetype="order">
  select
    ...
    order_amount amount
    form orders
    where order_id=#{id};
</select>
```

##### 2、使用 resultMap 自定义映射

---

通过定义一个`<resultMap>`来映射字段名和实体类属性名的一一对应的关系：

```xml
<select id="queryorder" parameterType="int" resultMap="orderResultMap">
    select * from orders where order_id=#{id}
</select>

<resultMap id="orderResultMap" type="order" >
    <id property="id" column="order_id">
  <result property= "orderNo" column="order_no"/>
    <result property="amount" column="order_amount"/>
</reslutMap>
```

## 57、MyBatis 中 jdbcType 和 javaType 的区别？

jdbcType 和 javaType 是 MyBatis 中用于映射数据库列和 Java 对象属性之间的数据类型的两个概念：

- jdbcType 用于定义数据库类型；
- javaType 用于定义 Java 类型；

而 typeHandler 则用于处理 Java 类型和数据库类型之间的转换。

---

jdbcType 和 javaType 的对应关系表：

| jdbcType                | javaType                                                      |
| ----------------------- | ------------------------------------------------------------- |
| ARRAY                   | java.sql.Array                                                |
| BIGINT                  | long                                                          |
| BINARY                  | byte[]                                                        |
| BIT                     | boolean                                                       |
| BLOB                    | byte[]                                                        |
| BOOLEAN                 | boolean                                                       |
| CHAR                    | String                                                        |
| CLOB                    | String                                                        |
| DATALINK                | java.net.URL                                                  |
| DATE                    | java.sql.Date / java.time.LocalDate                           |
| DECIMAL                 | java.math.BigDecimall                                         |
| DOUBLE                  | double                                                        |
| FLOAT                   | float                                                         |
| INTEGER                 | int                                                           |
| JAVA_OBJECT             | Object                                                        |
| LONGNVARCHAR            | String                                                        |
| LONGVARBINARY           | byte[]                                                        |
| LONGVARCHAR             | String                                                        |
| NCHAR                   | String                                                        |
| NCLOB                   | String                                                        |
| NULL                    | null                                                          |
| NUMERIC                 | java.math.BigDecimal                                          |
| NVARCHAR                | String                                                        |
| OTHER                   | Object                                                        |
| REAL                    | float                                                         |
| REF                     | java.sql.Ref                                                  |
| ROWID                   | java.sql.Rowld                                                |
| SMALLINT                | short                                                         |
| SQLXML                  | java.sql.SQLXML                                               |
| STRUCT                  | java.sql.Struct                                               |
| TIME                    | java.sql.Time / java.time.LocalTime                           |
| TIME_WITH_TIMEZONE      | java.time.OffsetTime                                          |
| TIMESTAMP               | java.sql.Timestamp / java.util.Date / java.time.LocalDateTime |
| TIMESTAMP_WITH_TIMEZONE | java.time.OffsetDateTime                                      |
| TINYINT                 | byte                                                          |
| VARBINARY               | byte[]                                                        |
| VARCHAR                 | String                                                        |

这只是一个大致的对应关系表，在实际使用中，需要根据具体情况进行调整和配置。

## 58、MyBatis 什么时候必须指定 jdbcType 和 javaType？

一般情况下，不需要手动指定 jdbcType 和 javaType 属性，MyBatis 可以自动推断数据库列和 Java 对象属性之间的数据类型。

##### 需要指定的场景：

1）当无法自动推断数据类型时，就需要手动指定 jdbcType 和 javaType 属性。比如，数据库列和 Java 对象属性之间的数据类型不一致，需要进行类型转换时。

2）JDBC 要求，如果一个列允许使用 null 值，并且会使用 null 值的参数，就必须要指定 JDBC 类型（jdbcType），否则传递 null 值将出现 1111 异常：

> Caused by: java.sql.SQLException: 无效的列类型: 1111

## 59、什么是预编译？

预编译（**Prepared Statement**）是一种执行 SQL 语句的方式，SQL 语句被提前编译成一种数据库可以理解的格式，然后在执行时将参数传递给该语句，以避免每次执行 SQL 语句时都需要解析和编译 SQL 语句的开销。

在 Java 中，可以使用 PreparedStatement 对象来执行预编译 SQL 语句，可以使用 setXXX()方法设置占位符的值，如以下代码所示：

```java
PreparedStatement ps = conn.prepareStatement("SELECT * FROM user WHERE id = ?");
ps.setint(1, 100);
Resultset rs = ps.executeQuery();
```

这段代码中，PreparedStatement 对象将`SELECT * FROM user WHERE id =?`作为预编译的 SQL 语句，使用 setInt()方法将参数 100 设置为占位符的值,然后执行 SQL 语句并返回查询结果。

## 60、预编译有哪些好处？

预编译的好处主要包括：

##### 1、提高执行效率

预编译 SQL 语句已经被编译成一种数据库可以理解的格式，使用参数占位符，不同参数的执行不需要重新解析和编译 SQL 语句，从而可以提高执行效率。

##### 2、提高安全性

预编译可以防止 SQL 注入攻击，因为预编译的 SQL 语句将参数作为占位符，不会将参数作为 SQL 语句的一部分执行，从而避免了 SQL 注入攻击。

## 61、预编译的实现过程是怎样的？

预编译的实现过程可以分为以下几个步骤：

##### 1、SQL 解析

在预编译过程中，首先需要对 SQL 语句进行解析，将 SQL 语句分解成各个组成部分，例如 SELECT 子句、FROM 子句、WHERE 子句等。

##### 2、SQL 编译

在 SQL 解析后，需要对 SQL 语句进行编译，将 SQL 语句编译成一种数据库可以理解的格式。

##### 3、参数绑定

在编译后，需要将 SQL 语句中的参数绑定到占位符上，例如将 SELECT \* FROM user WHERE id =？ 中的 ？ 替换成参数值。

##### 4、SQL 执行

在参数绑定后，就可以执行 SQL 语句了，数据库会根据预编译后的 SQL 语句执行查询或更新操作，并返回结果。

> 如果再次执行相同的 SQL 语句，那么就不再需要第 1、2 步了，即不需要再解析和编译 SQL 语句了，这就是预编译的好处之一，用于提升性能。

## 62、MyBatis 支持预编译吗？怎么做？

MyBatis 支持预编译(Prepared Statement)的 SQL 语句执行方式，可以通过#{} 语法来指定参数。

预编译的 SQL 语句可以在 MyBatis 的映射文件中定义，也可以在注解中定义。

##### 1、在映射文件中定义

```xml
<select id="selectuserById" resultType="user">
    select * from user where id = #{id}
</select>
```

##### 2、在注解中定义

```xml
@select("select * from user where id = #{id}")
User selectuserById(int id);
```

在上面的 SQL 语句中，使用了`#{id}`语法来指定参数，这样 MyBatis 会将 SQL 语句预编译，并使用`Preparedstatement`对象执行 SQL 语句，避免了 SQL 注入攻击。

## 63、MyBatis 中的事务管理方式？

MyBatis 提供了三种事务管理方式。

##### 1、 JdbcTransaction

---

JdbcTransaction 是 MyBatis 提供的与 JDBC 集成使用的事务管理方式，该事务管理方式是通过 JDBC Connection 对象来管理事务。

JdbcTransaction 的实现原理是基于 JDBC 事务控制机制实现的。

> 如果没有使用 Spring，这是 MyBatis 中可配置使用的事务管理机制。

##### 2、ManagedTransaction

---

ManagedTransaction 是 MyBatis 提供的容器事务管理方式， ManagedTransaction 中的 commit 方法和 rollback 方法都没有实现：

```java
@Override
public void commit() throws sQLException {
    // Does nothing
}

@Override
public void rollback() throws sQLException {
    // Does nothing
}
```

ManagedTransaction 是让容器来管理事务的整个生命周期，提交、回滚操作不会对事务有任何影响。

> 如果 MyBatis 没有配置 Environment 及事务管理器，默认为 ManagedTransaction。

如 DefaultSqlSessionFactory#getTransactionFactoryFromEnvironment 方法源码所示：

```java
private TransactionFactory getTransactionFactoryFromEnvironment(Environment environment) {
    if (environment == null || environment.gettransactionFactory() == null) {
        return new ManagedTransactionFactory();
    }
    return environment.getTransactionFactory();
}
```

---

##### 3、 SpringManagedTransaction

---

SpringManagedTransaction 是 mybatis-spring 包中提供的与 Spring 集成使用的事务管理方式，它是基于 Spring 事务管理器的事务控制机制实现的，通过 Spring 事务管理器（PlatformTransactionManager）来管理事务。

> 具体参考 Spring 中的事务管理面试题。

## 64、MyBatis 中怎么开启事务？

##### 1、配置事务管理器

---

```xml
<environments default="development">
    <environment id="development">
        <transactionManager type="JDBc"/>
        <datasource type="poOLED">
            <property name="driver" value="${driver}"/>
            <property name="url" value="${url}"/>
            <property name="username" value="${username}"/>
            <property name="password" value="$[password}"/>
        </datasource>
    </environment>
</environments>
```

这里的 transactionManager 可配置 **JDBC** 和 **MANAGED**，见 Configuration 配置类源码：

```java
public configuration() {
    typeAliasRegistry.registerAlias("JDBC", JdbcTransactionFactory.class);
    typeAliasRegistry.registerAlias("MANAGED", ManagedTransactionFactory.class);
}
```

其中，JDBC 才支持事务提交和回滚，MANAGED 默认没有实现事务提交和回滚，需要由其他容器实现。

##### 2、通过 SqlSession 操作事务

---

先配置好 Mapper 映射文件，然后调用 SqISession 的方法来执行 SQL 事务操作：

```java
Sqlsession sqlsession = sqlsessionFactory.opensession();
try {
    //开启事务
    sqlsession.getconnection().setAutocommit(false);

    //执行 SQL 操作
    sqlsession.insert("insertuser", user);

    //提交事务
    sqlsession.getconnection().commit();
} catch (Exception e) {
    //回滚事务
    sqlsession.getconnection().rollback();
} finally {
    //关闭 sqLsession
    sqlsession.close();
}
```

> ##### 需要注意的是：
>
> 如果是使用 Spring 集成 MyBatis，则不是这么使用，需要使用 Spring 的事务管理机制来管理事务。

## 65、MyBatis 事务和 Spring 事务有什么区别？

MyBatis 的事务是基于 **JDBC Connection** 对象实现的，它的事务管理和控制是需要通过**SqISession** 对象手动进行的，所以事务管理的粒度是以 SqlSession 为单位的。

Spring 提供了**声明式事务管理和编程式事务管理**两种方式。其中，常用的声明式事务是基于 **AOP（面向切面编程）**实现的，它的事务管理和控制是自动的，事务的粒度可以是方法级别、类级别或者注解级别，可以更加灵活地控制事务的范围。

> Spring 中的事务管理机制更强大，如果没用 Spring，则可以单独使用 MyBatis 中的 JDBC 事务机制，而如果使用 Spring 集成后，Spring 可以接管对 MyBatis 中的事务管理和控制。

## 66、MyBatis 插件介绍及实现原理？

> 类似面试题：**MyBatis 怎么拦截 SQL 语句？**

MyBatis 的插件机制可以在执行 SQL 语句的过程中，对其进行拦截和修改，从而实现自定义功能，比如，可以实现对 SQL 语句的自定义修改、增加分页功能、增加缓存功能等。

MyBatis 插件机制是通过**动态代理和拦截器（Interceptor）**实现的：

```java
public class Myinterceptor implements Interceptor {
    @Override
    public object intercept(Invocation invocation) throws Throwable {
        //在方法执行前进行拦截和处理
        object result = invocation.proceed();
        //在方法执行后进行拦截和处理
        return result;
    }
    @Override
    public object plugin(object target) {
        //使用JDK动态代理创理代理对象，并返回该代理对象
        return Plugin.wrap(target, this);
    }
    @Override
    public void setproperties(Properties properties) {
        //获取插件在配置文件中的参数值，并进行相应的设置
        String prop1 = properties.getProperty("prop1");
        String prop2 = properties.getProperty("prop2");
        //设置相应的属性
    }
}
```

拦截器必须实现 **Interceptor** 接口，并重写其中的三个方法：

- **intercept**：拦截方法，用于拦截 **Executor、StatementHandler、ResultSetHandler 或 ParameterHandler** 中的方法调用，并进行相应的处理。
- **plugin**：插件方法，用于创建目标对象的代理对象，并返回该代理对象。
- **setProperties**：属性设置方法，用于获取插件在配置文件中的参数值，并进行相应的设置。

然后在`<configuration>`标签下添加`<plugins>`标签，并在其中添加相应的插件配置：

```xml
<configuration>
    <plugins>
        <plugin interceptor="cn.slq.MyInterceptor">
            <property name="prop1" value="value1"/>
            <property name="prop2" value="value2"/>
        </plugin>
    </plugins>
</configuration>
```

## 67、MyBatis 使用了哪些设计模式？

MyBatis 中常用的几种设计模式及其举例：

##### 1、工厂模式

---

MyBatis 使用了工厂模式来创建 SqISession 和其他对象。

在 MyBatis 中，SqISessionFactory 接口是工厂模式的核心接口，它负责创建和管理 SqISession 对象。MyBatis 还提供了 SqlSessionManager 和 SqlSessionFactoryBuilder 两个工厂类，用于创建和管理 SqlSession 对象。

##### 2、代理模式

---

MyBatis 中最重要的一个设计模式是代理模式。

在 MyBatis 中，Mapper 接口是通过动态代理技术实现的，MyBatis 会为每个 Mapper 接口动态生成一个代理对象，代理对象将 Mapper 接口中的方法调用转发给 SqlSession 对象。

##### 3、模板方法模式

---

在 MyBatis 中，BaseExecutor 是一个抽象基类，它定义了执行器的基本结构和算法，包括查询缓存、一级缓存、二级缓存等功能。

BaseExecutor 类还定义了抽象方法 doUpdate()、doQuery0 等，用于具体的 SQL 操作。BaseExecutor 类的子类需要实现这些抽象方法来完成具体的 SQL 操作，实现了模板方法模式。

##### 4、建造者模式

---

在 MyBatis 中， SqlSessionFactoryBuilder 类使用了建造者模式。

SqISessionFactoryBuilder 类负责创建 SqlSessionFactory 对象，它允许用户通过一系列方法来配置 SqlSessionFactory 对象，然后返回创建好的 SqlSessionFactory 对象。

##### 5、观察者模式

---

MyBatis 中的缓存系统使用了观察者模式。

在 MyBatis 中，缓存实现了 Cache 接口，并提供了 clear()、putObject()、getObject()、removeObject()等方法，用于缓存的管理。当缓存中的对象发生变化时，MyBatis 会通过 TransactionalCache 类将变化通知给所有观察者，实现了观察者模式。

## 68、MyBatis-Plus 是什么框架？

MyBatis-Plus，简称 MP，它是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

愿景就是成为 MyBatis 最好的搭档，就像魂斗罗中的 1P、2P，基友搭配，效率翻倍。

##### 特性

---

- 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
- 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作
- 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器
- 支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
- 支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer2005、SQLServer 等多种数据库
- 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器－Sequence），可自由配置，完美解决主键问题
- 支持 XML 热加载：Mapper 对应的 XML 支持热加载，对于简单的 CRUD 操作，甚至可以无 XML 启动
- 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
- 支持自定义全局通用操作：支持全局通用方法注入（Write once, use anywhere ）
- 支持关键词自动转义：支持数据库关键词（order、key.）自动转义，还可自定义关键词
- 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper、Model、Service、Controller 层代码，支持模板引擎，有超多自定义配置等
- 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
- 内置性能分析插件：可输出 Sql 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
- 内置全局拦截插件：提供全表 delete、update 操作智能分析阻断，也可自定义拦截规则，预防误操作
- 内置 Sql 注入剥离器：支持 Sql 注入剥离，有效预防 Sql 注入攻击

##### 框架结构

---

![](/images/MyBatis/68.jpg)
