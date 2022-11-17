<img src="_media/MyBatis-Plus-logo.svg" width="100px">

# MyBatis-Plus

> Mybatis的增强工具
> 
> 只做增强不做改变，为简化开发、提高效率而生

?> 官网：[MyBatis-Plus](https://baomidou.com/)

!> 本文中的示例使用的是本文写作时MyBatis-Plus的最新版本，为 `3.5.2`。

## 快速入门

?> <b>特性</b>



?> <b>支持数据库</b>

- MySQL，Oracle，DB2，H2，HSQL，SQLite，PostgreSQL，SQLServer，Phoenix，Gauss ，ClickHouse，Sybase，OceanBase，Firebird，Cubrid，Goldilocks，csiidb

- 达梦数据库，虚谷数据库，人大金仓数据库，南大通用(华库)数据库，南大通用数据库，神通数据库，瀚高数据库

### 安装

> MyBatis-Plus 3.0版本基于JDK8，提供了`lambda`形式的调用，因此您的JDK版本必须大于8。

- Spring Boot工程
```maven
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>最新版本</version>
</dependency>
```

- Spring工程
```maven
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus</artifactId>
    <version>最新版本</version>
</dependency>
```

!> 引入MyBatis-Plus依赖之后就不要再次引入MyBatis或MyBatis-Spring依赖了，以避免因版本差异导致的问题。

### 配置

- Spring Boot工程

配置`MapperScan`注解
```java
@SpringBootApplication
@MapperScan("com.slq.mybatisplus.mapper")
public class MyBatisPlusApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyBatisPlusApplication.class, args);
    }
}
```

- Spring工程

配置`MapperScan`注解
```xml
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <property name="basePackage" value="com.baomidou.mybatisplus.samples.quickstart.mapper"/>
</bean>
```
调整 SqlSessionFactory 为 MyBatis-Plus 的 SqlSessionFactory
```xml
<bean id="sqlSessionFactory" class="com.baomidou.mybatisplus.extension.spring.MybatisSqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

### 注解

- `@TableName`

表名注解，标识实体类对应的数据库表名
```java
@TableName("sys_user")
public class User {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```

- `@TableId`

主键注解，使用在实体类主键字段上
```java
@TableName("sys_user")
public class User {
    @TableId
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```

| 属性  | 类型   | 必须指定 | 默认值      | 描述         |
| ----- | ------ | -------- | ----------- | ------------ |
| value | String | 否       | ""          | 主键字段名   |
| type  | Enum   | 否       | IdType.NONE | 指定主键类型 |

- `IdType`

指定主键类型，是`TableId`注解`type`属性的值

| 值            | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| AUTO          | 数据库 ID 自增                                               |
| NONE          | 无状态，该类型为未设置主键类型（注解里等于跟随全局，全局里约等于 INPUT） |
| INPUT         | insert 前自行 set 主键值                                     |
| ASSIGN_ID     | 分配 ID(主键类型为 Number(Long 和 Integer)或 String)(since 3.3.0),使用接口`IdentifierGenerator`的方法`nextId`(默认实现类为`DefaultIdentifierGenerator`雪花算法) |
| ASSIGN_UUID   | 分配 UUID,主键类型为 String(since 3.3.0),使用接口`IdentifierGenerator`的方法`nextUUID`(默认 default 方法) |
| ID_WORKER     | 分布式全局唯一 ID 长整型类型(please use `ASSIGN_ID`)         |
| UUID          | 32 位 UUID 字符串(please use `ASSIGN_UUID`)                  |
| ID_WORKER_STR | 分布式全局唯一 ID 字符串类型(please use `ASSIGN_ID`)         |





### 快速测试

- 添加测试依赖

  ```maven
  <dependency>
      <groupId>com.baomidou</groupId>
      <artifactId>mybatis-plus-boot-starter-test</artifactId>
      <version>最新版本</version>
  </dependency>
  ```

- 编写测试用例

  通过 `@MybatisPlusTest` 可快速编写 Mapper 对应的测试类，实现快速测试代码 。

  ```java
  @MybatisPlusTest
  public class MybatisPlusSampleTest {
  
      @Autowired
      private UserMapper userMapper;
  
      @Test
      void testInsert() {
          User user = new User("mark", 23, "test6@baomidou.com");
          userMapper.insert(user);
          System.out.println(user.getId());
      }
  }
  ```


## 核心功能

### 代码生成器（新）





## 扩展




## 插件