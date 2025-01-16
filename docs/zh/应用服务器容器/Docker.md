## 1、什么是虚拟化技术？

虚拟化技术可以将一台物理服务器虚拟为多台逻辑服务器，每台逻辑服务器可运行不同的操作系统，系统内的应用程序也相互隔离不受影响，从而显著提高服务器的运行效率。

## 2、常用的虚拟化技术有哪些？

**常用的虚拟化技术有**：OpenStack、KVM、VMWare

## 3、LXC 是什么？

LXC 是指：Linux Container，即 Linux 内核容器技术。

LXC 利用 cgroup 与 namespace 的功能，将 Linux 进程进行沙盒化，使得进程之间可以相互隔离，并且能够控制各进程的资源分配。

## 4、Docker 是什么？

Docker 是现在最主流的开源容器，遵循 Apache 2.0 协议，使用 GO 语言进行开发，始于 2013 年，现已加入 Linux 基金会。

我们可以将 Docketr 理解为一个轻量级的沙盒，Docker 容器完全使用沙盒机制，每个容器内都有其独立运行的环境和组件，容器之间是相互隔离互不影响的，也可以进行容器间的通信。

## 5、Docker 可以代替 LXC 吗？

可以。

虽然 Docker 并不是用来替代 LXC 的，Docker 一开始的底层就是 LXC，但现在 Docker 已经开发了自己的直接使用核心 namespaces 和 cgroup 的工具：libcontainer。

## 6、Docker 和 LXC 的区别？

LXC 是一个系统容器，而 Docker 是一个应用程序容器。

Docker 比 LXC 有更多更强的功能：

- 可移植性
- 以应用为中心
- 自动构建
- 组件重用
- 镜像共享
- 工具生态圈
- ...

## 7、k8s 是什么？

k8s 是 kubernetes 的缩写，是一个开源的容器集群管理系统，可以实现容器集群的自动化部署、自动扩缩容、维护等功能。

## 8、Docker 和 k8s 到底是什么关系？

Docker 是一个开源的应用容器引擎，kubernetes 是用来管理 Docker 集群的，可以实现 Docker 容器集群的自动化部署、自动扩缩容、维护等功能。

Kubernetes 不仅仅支持 Docker，还支持其他容器技术。

## 9、Docker 和传统虚拟机的区别？

如图所示：

![](/images/Docker/9.jpg)

具体对比如下：

| 对比项   | VM             | Docker         |
| -------- | -------------- | -------------- |
| 启动速度 | 分钟级         | 秒级           |
| 部署难度 | 复杂           | 简单           |
| 磁盘占用 | GB 级          | MB 级          |
| 隔离性   | 完全隔离       | 完全隔离       |
| 资源占用 | 资源多，重量级 | 资源少，轻量级 |

## 10、Docker 有哪些优势？

##### Docker 的优势：

1、启停非常快，以秒、毫秒为单位的；

2、隔离性好，容器之间没有任何依赖；

3、更高效的资源利用，使用成本非常低；

4、一次构建处处运行，可轻松迁移和扩展；

...

## 11、Docker 是免费的吗？

Docker 有社区版、企业版。社区版是开源免费的，企业版是收费的，当然也会有更牛逼的特性和服务，一般的应用社区版的足够了。

## 12、Docker 的核心思想是什么？

Docker 的核心思想是：“**Build once，Run anywhere**”，即：**一次构建，处处运行**，这里可以是一个操作系统，一个 Web 应用，或者一个数据库服务等。

## 13、Docker 的应用场景有哪些？

##### Docker 的应用场景有：

![](/images/Docker/13.jpg)

（1）简化配置

（2）代码流水线（Code Pipline）管理

（3）提高开发生产率

（4）隔离应用

（5）整合服务器

（6）调适能力

（7）多租户环境

（8）快速部署

## 14、Docker 的架构模式是怎样的？

Docker 使用客户端/服务端（C/S）架构模式，使用远程 API 来管理和常见 Docker 容器。

![](/images/Docker/14.jpg)

## 15、Docker 是如何实现资源隔离的？

Docker 本身就是服务器中的一个进程，Docker 使用的是 Linux 内核和内核功能（例如 cgroup 和 namespace）来分隔进程实现资源隔离的，通过 cgroup 实现资源限制，通过 namespace 实现资源隔离。

## 16、Docker 支持非 Linux 操作系统吗？

Docker 支持所有主流的操作系统，如：Linux/Mac/Windows，所有主流的云服务也支持 Docker，所以，我们可以将应用及依赖、环境信息等打包到一个 Docker 容器中，可以很轻松的实现应用发布、迁移等。

## 17、Docker 为什么能支持 Windows 系统？

Docker 使用的是基于 Linux 上的 namespace 和 cgroup 功能，因此 Docker 容器理论上无法在其他操作系统上运行。

##### 那么 Docker 为什么能在非 Linux 上运行的呢？

原理就是，Docker 在非 Linux 操作系统（Windows、macOS）中安装了一个 Linux 虚拟机，然后在虚拟机内运行 Docker 容器。

## 18、Docker 为什么不适合部署 MySQL？

Docker 可以部署 MySQL，但一般情况下不建议在 Docker 中部署 MySQL，主要有以下几个原因：

##### 1、数据持久化问题

Docker 容器的生命周期和它们存储的数据紧密相关的，当容器被删除时，所有保存在容器内部的数据也会丢失。虽然可以通过挂在外部存储卷（Volumes）到容器来实现数据持久化，但这增加了配置复杂性。

##### 2、性能问题

虽然 Docker 的性能开销相对较小，但在数据库这种对 IO 性能要求极高的应用中，即使是微小的性能损失也可能会导致问题。

##### 3、安全问题

虽然 Docker 提供了一定级别的隔离，但运行在容器中的数据库仍然需要仔细配置，以确保只有授权的客户端可以访问，同时也会增加配置复杂性。

## 19、Docker 如何查看版本号？

安装完后使用`docker -v`命令进行可以查看 Docker 版本：

![](/images/Docker/19_1.jpg)

使用`docker version`还可以看到完整版本信息：

![](/images/Docker/19_2.jpg)

看到 Docker 版本信息表示安装成功了。

## 20、Docker 镜像层是什么？

Docker 镜像是由一系列自读层构建的，而每个层代表镜像 Dockerfile 文件中的一条指令。

## 21、Docker 容器层是什么？

Docker 每个容器运行时，都会有自己的一个读写层，叫做**容器层**，容器层中保存着容器运行的相关数据，所有数据变化的操作都是在这个读写层中完成，容器被删除时，容器层也会被删除。

## 22、Docker 的三大核心组件是什么？

Docker 三大核心组件：

（1）Docker 仓库

（2）Docker 镜像

（3）Docker 容器

## 23、Docker 仓库、镜像、容器的区别？

**仓库**是用来存放镜像的，**镜像**是一个独立且完整的文件系统，**容器**时镜像的运行时实例。

## 24、Docker 仓库是什么？

仓库是集中存储 Docker 镜像文件的地方，分为**公开、私有**两种仓库。

最大的公开仓库是官方的 Docker Hub：

> https://registry.hub.docker.com/

## 25、Docker 容器是什么？

**Docker 容器**是用来真正运行程序的，它是动态的，一个镜像可以实例化多个容器。

## 26、Docker 镜像是什么？

Docker 镜像它是一个独立且完整的文件系统（包含运行应用程序所需的代码、运行时、库、环境变量和配置文件等），它是静态的，不包含任何动态数据，其内容在构建之后也不会被改变。

## 27、Docker 常用命令说几个？

##### 常用的有：

docker images 列出所有镜像

docker ps -a 列出容器

docker pull 拉取指定镜像

docker push 推送镜像至仓库

docker rmi 删除镜像

docker rm 删除容器

...

## 28、Dockerfile 文件有什么用？

Dockerfile 是创建 Docker 镜像的基本配置文件，本身是一个文本文件，也是构建 Docker 项目的基石。

## 29、Dockerfile 最常见的指令有哪些？

##### Dockerfile 最常见的指令有：

from：指定基础镜像

arg：指定参数

add：添加资源

label：为镜像指定标签

run：运行指定的命令

cmd：容器启动时要运行的命令

entrypoint：入口配置

---

示例：

```dockerfile
# 添加Java 8镜像来源
FROM java:8

# 添加参数
ARG JAR_FILE

# 添加Spring Boot包
ADD target/${JAR_FILE} app.jar

# 执行启动命令
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app.jar"]
```

## 30、Dockerfile 中 copy 和 add 的区别？

`add`和`copy`都是复制文件/文件夹。

`add`可以从网络/本地复制，`copy`仅支持从本地复制。

`copy`语义更明确，官方推荐使用`copy`。

## 31、Docker 怎么检索镜像？

你可以在 Docker Hub 上搜索镜像：

> https://registry.hub.docker.com/

![](/images/Docker/31_1.jpg)

也还可以通过命令检索：

```dockerfile
docker search mysql
```

结果如下：

![](/images/Docker/31_2.jpg)

## 32、Docker 怎么下载镜像？

下载命令为：

> docker pull 镜像名:tag

其**tag**为版本，可选的，默认不写为`latest`。

下载示例：

```dockerfile
docker pull mysql
```

![](/images/Docker/32.jpg)

## 33、Docker 镜像定义是哪个文件？

Docker 镜像使用的是 Dockerfile 文件进行定义。

## 34、Docker 怎么构建镜像？

Docker 通过 build 命令来构建镜像：

> docker build -t jartto-docker-demo

表示基于当前目录的 Dockerfile 来构建镜像，-t 指定镜像名。

## 35、Docker 构建镜像有哪些需要注意的？

构建镜像的几个原则：

（1）选择最精简的基础镜像；

（2）清理镜像构建的中间产物；

（3）减少镜像的层数；

（4）充分利用镜像构建缓存；

（5）优化网络请求；

...

## 36、Docker 镜像怎么加速？

推荐几个国内的镜像加速服务：

| 名称     | 地址                                               |
| -------- | -------------------------------------------------- |
| 官方中国 | https://registry.docker-cn.com                     |
| 科大     | https://docker.mirrors.ustc.edu.cn/                |
| 阿里云   | https://help.aliyun.com/document_detail/60750.html |
| 网易     | https://hub-mirror.c.163.com/                      |
| 七牛云   | https://reg-mirror.qiniu.com                       |

## 37、Docker 怎么获取镜像列表？

使用命令：

> docker images

![](/images/Docker/37.jpg)

RESPOSITORY：镜像名

TAG：为镜像版本，`least`表示最新版本

IMAGE_ID：镜像 ID

CREATED：为该镜像创建时间

SIZE：镜像大小

## 38、Docker 怎么删除指定镜像？

删除指定镜像：

> docker rmi image-id

## 39、Docker 如何导出所有镜像？

逐个导出：

```shell
#!/bin/bash
IMAGES_LIST=($(docker images | sed '1d' | awk '{print $1}'))
IMAGES_NM_LIST=($(docker images | sed '1d' | awk '{print $1"-"$2}' | awk -F/ '{print $NF}'))
IMAGES_NUM=${#IMAGES_LIST[*]}
for((i=0;i<$IMAGES_NUM;i++))
do
  docker save "${IMAGES_LIST[$i]}" -o "${IMAGES_NM_LIST[$i]}".tar.gz
done
```

导出为压缩包：

```shell\
#!/bin/bash
IMAGES_LIST=($(docker images | sed '1d' | awk '{print $1":"$2}'))
docker save ${IMAGES_LIST[*]} -O all-images.tar.gz
```

## 40、Docker 如何查看镜像内的环境变量？

参考命令：

> docker inspect -f '{{range $index, $value:=.Config.Env}}{{println $value}}{{end}}'

![](/images/Docker/40.jpg)

## 41、Docker 如何导入镜像？

参考命令：

> docker load < IMAGE NAME

逐个导入镜像：

```shell
cd ..
for image_name in $(ls ./)
do
  docker load < ${image_name}
done
```

## 42、Docker 怎么设置镜像标签？

参考命令：

> docker tag IMAGE ID IMAGE NAME:TAG

使用示例：

> docker tag 350b08e1d774 spring-boot:1.1

## 43、Docker 中的虚悬镜像是什么？

如图查询虚悬镜像：

> docker images -f dangling=true

![](/images/Docker/43.jpg)

在列表中展示为`<none>`的没有仓库名或没有标签的镜像就是虚悬镜像。

## 44、Docker 虚悬镜像是怎么产生的？

在构建镜像时如果打了一个已经存在的标签，这时，Docker 会移除旧镜像上面的标签，将该标签应用在新的镜像之上，此时旧镜像就没有标签了，就成了**虚悬镜像**了。

## 45、Docker 中的虚悬镜像怎么删除？

##### 1、使用 docker rmi 删除虚悬镜像

> docker rmi $(docker images -q -f dangling=true)

##### 2、使用 docker images prune 命令删除虚悬镜像

删除所有无用的镜像，不包括正在使用的镜像：

> docker images prune

删除所有无用的镜像，包括正在使用的镜像：

> docker images prune --all

删除创建时间超过 24 小时的无用镜像：

> docker images prune --filter "unitil=24h"

## 46、Docker 怎么删除所有镜像？

删除所有镜像：

> docker rmi $(docker images -q)

## 47、Docker 如何进行镜像分析？

##### 可以使用镜像分析工具：

（1）docker 自带的 docker image history 命令；

（2）镜像分析工具 dive；

## 48、Docker 如何判断镜像是否需要瘦身？

可以使用比较流行的镜像分析工具：dive，它可以分析出容器镜像有效率、镜像空间浪费率等指标。

如果分析镜像有效率过低，这种情况显然就需要瘦身。

## 49、Docker 如何进行镜像瘦身？

可以有以下几种方法：

（1）多阶段构建

（2）减少镜像分层

（3）减少容器中不必要的包

## 50、Docker 如何新增一个容器并运行？

新建容器、运行容器都是通过这条命令一次完成的：

> docker run -d -p 80:80 docker/getting-started

这样就等同于镜像新建容器、再运行该容器。

简单解释下各个参数的意思：

![](/images/Docker/50.jpg)

也可以缩简成：

```dockerfile
docker run -dp 80:80 docker/getting-started
```

示例：

```shell
docker run -dp 80:80 docker101tutorial
9df38488adcc2a53dad65691854ffc603e1fb3e25954183b83200809805b0d93
```

启动成功会输出该容器的 ID。

## 51、Docker 怎么启动已停止运行的容器？

参考命令：

```dockerfile
docker start container-name/container-id
```

默认在后台运行。

## 52、Docker 容器有哪几种状态？

##### Docker 容器的几种状态：

created：已创建，但还没有被启动

running：运行中

paused：容器进程被暂停了

restarting：容器进程正在重启中

exited：容器退出运行了

destroyed：容器已被删除

## 53、Docker 如何查看所用容器？

通过`docker ps -a`命令可以查看所有容器。

![](/images/Docker/53.jpg)

## 54、Docker 如何查看所有运行中的容器？

通过`dockers ps`命令可以查看所有正在运行中的容器：

```bash
$ docker ps
CONTAINER ID  IMAGE              COMMAND                  CREATED        STATUS        PORTS  NAMES
9df38488adcc  docker101tutorial  "/docker-entrypoint..."  3 minutes ago  Up 3 minutes  0.0.0.0:80->80/tcp  hopeful_gauss
```

## 55、Docker 怎么查看容器端口映射？

参考命令：

> docker port container-id

如果返回空，代表没有端口映射。

## 56、Docker 怎么查看容器日志？

参考命令：

> docker logs container-id/container-name

![](/images/Docker/56.jpg)

## 57、Docker 怎么进入运行中的容器？

参考命令：

> docker container exec -it CONTAINER ID /bin/bash

## 58、Docker 怎么可交互式运行容器？

方法 1：

> docker run -it IMAGE

方法 2：

> docker start -i CONTAINER ID

## 59、Docker 如何获取运行中的容器进程 ID？

方法 1：

> docker top CONTAINER ID

![](/images/Docker/59_1.jpg)

方法 2：

> docker inspect --format "{{.State.Pid}}" CONTAINER ID

![](/images/Docker/59_2.jpg)

## 60、Docker 如何停止所用运行中的容器？

停止所有运行中的容器：

> docker stop ${docker ps -q}

## 61、Docker 如何停止某个运行中的容器？

停止单个运行中的容器：

> docker stop container-name/container-id

## 62、Docker 怎么删除所有容器？

删除所有容器：

> docker rm ${docker pa -qa}

包括所有运行中的、未运行的。

## 63、Docker 怎么删除某个容器？

删除单个容器：

> docker rm container-id

## 64、Docker 如何导入容器？

参考命令 1：

> docker import -slq:1.0

参考命令 2：

> docker import https://www.slq.com/slq.tar repo

## 65、Docker 如何导出容器？

参考命令：

> docker export CONTAINER ID > xx.tar

## 66、Docker 如何退出交互式容器终端？

方法 1：

> Ctrl + p 然后 Ctrl + q

方法 2：

> Ctrl + c

注意：方法 2 会终止进程，方法 1 不会！

## 67、Docker 容器关闭后数据会丢失吗？

关闭容器，数据不会丢失。

删除容器，数据会丢失。

## 68、docker save 和 docker export 的区别？

docker save 保存的是镜像（image）

docker export 保存的是容器（container）

## 69、Docker 镜像和容器文件的存储位置？

存储位置取决于操作系统：

| 系统    | 目录                                               |
| ------- | -------------------------------------------------- |
| Linux   | /var/lib/docker/                                   |
| Windows | C:\ProgramData\DockerDesktop                       |
| MacOS   | ~/Library/Containers/com.docker.docker/Data/vms/0/ |

## 70、Docker 如何清理系统中的无用数据？

清理所有停止的容器、无用的网络、临时镜像及构建缓存：

> docker system prune

![](/images/Docker/70_1.jpg)

更彻底的清理：

> docker system prune -a

![](/images/Docker/70_2.jpg)

## 71、Docker 如何查看磁盘占用情况？

使用命令：

> docker system df

![](/images/Docker/71.jpg)

## 72、Docker Machine 是什么？

Docker Machine 是一个 Docker 官方管理工具，通过`docker-machine`命令进行管理，使用`docker-machine`命令能够启动、检测、停止和重启被管理的主机，升级 Dockers 客户端和进程，也可以配置 Dockers 客户端与主机通信。

![](/images/Docker/72.jpg)

## 73、Docker Compose 是什么？

Docker Compose 它是一个用于定义和运行多容器的 Docker 官方工具，使用 Docker Compose 可以轻松、高效的管理容器。

## 74、Docker Swarm 是什么？

Docker Swarm 是 Dockers 的集群管理工具，它将 Docker 主机池转变为单个虚拟 Docker 主机。

Docker Swarm 提供了标准的 Docker API，所有任何已经与 Docker 守护程序通信的工具都可以使用 Swarm 轻松地扩展到多个主机。

![](/images/Docker/74.jpg)
