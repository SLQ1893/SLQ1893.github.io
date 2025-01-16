import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "SLQ1893",
  titleTemplate: ":title - 面试之巅",
  description: "",
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  themeConfig: {
    logo: "/巅峰之战.png",

    siteTitle: "面试之巅",

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    nav: nav(),

    socialLinks: [
      { icon: "github", link: "https://github.com/SLQ1893/SLQ1893.github.io" },
    ],

    sidebar: {
      "/zh/": { base: "/zh/", items: sidebarGuide() },
    },

    editLink: {
      pattern:
        "https://github.com/SLQ1893/SLQ1893.github.io/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2023-${new Date().getFullYear()} <a href="https://github.com/SLQ1893">SLQ1893</a>`,
    },

    docFooter: {
      prev: "上一章节",
      next: "下一章节",
    },

    outline: {
      label: "面试题导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],

    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        rel: "stylesheet",
      },
    ],

    [
      // 添加百度统计
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bd55bab321026f5bb62034d17262886f";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
        `,
    ],

    [
      // 自动跳转 https
      "script",
      {},
      `
        if (location.protocol !== 'https:' && location.hostname != 'localhost') {
            location.href = 'https://' + location.hostname + location.pathname + location.search;
        }
        `,
    ],
    [
      "script",
      { async: "", defer: "", src: "https://www.hcw3.cn/api/texiao/baozha.js" },
    ],
  ],
});

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "首页", link: "/" },
    {
      text: "个人博客",
      items: [
        { text: "CSDN", link: "https://blog.csdn.net/SLQ1893" },
        { text: "博客园", link: "https://www.cnblogs.com/SLQ1893" },
      ],
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Java核心技术",
      base: "/zh/Java核心技术/",
      collapsed: false,
      items: [
        { text: "基础", link: "基础" },
        { text: "集合", link: "集合" },
        { text: "多线程", link: "多线程" },
        { text: "IO", link: "IO" },
        { text: "JVM", link: "JVM" },
        { text: "进阶", link: "进阶" },
      ],
    },
    {
      text: "后端技术-框架",
      base: "/zh/后端技术-框架/",
      collapsed: false,
      items: [
        { text: "Spring", link: "Spring" },
        { text: "Spring MVC", link: "Spring MVC" },
        { text: "Spring Boot", link: "Spring Boot" },
        { text: "Spring Cloud", link: "Spring Cloud" },
        { text: "MyBatis", link: "MyBatis" },
        { text: "Nacos", link: "Nacos" },
        { text: "Sentinel", link: "Sentinel" },
        { text: "Dubbo", link: "Dubbo" },
        { text: "Zookeeper", link: "Zookeeper" },
        { text: "后端技术", link: "后端技术" },
      ],
    },
    {
      text: "数据库-NoSQL",
      base: "/zh/数据库-NoSQL/",
      collapsed: false,
      items: [
        { text: "MySQL", link: "MySQL" },
        { text: "Redis", link: "Redis" },
        { text: "Elasticsearch", link: "Elasticsearch" },
      ],
    },
    {
      text: "架构-设计模式",
      base: "/zh/架构-设计模式/",
      collapsed: false,
      items: [
        { text: "分布式", link: "分布式" },
        { text: "设计模式", link: "设计模式" },
        { text: "架构模式", link: "架构模式" },
      ],
    },
    {
      text: "消息队列",
      base: "/zh/消息队列/",
      collapsed: false,
      items: [
        { text: "消息队列", link: "消息队列" },
        { text: "RabbitMQ", link: "RabbitMQ" },
        { text: "Kafka", link: "Kafka" },
        { text: "RocketMQ", link: "RocketMQ" },
      ],
    },
    {
      text: "应用服务器容器",
      base: "/zh/应用服务器容器/",
      collapsed: false,
      items: [
        { text: "Tomcat", link: "Tomcat" },
        { text: "Netty", link: "Netty" },
        { text: "Nginx", link: "Nginx" },
        { text: "Docker", link: "Docker" },
      ],
    },
    {
      text: "计算机",
      base: "/zh/计算机/",
      collapsed: false,
      items: [
        { text: "操作系统", link: "操作系统" },
        { text: "Linux", link: "Linux" },
        { text: "计算机网络", link: "计算机网络" },
      ],
    },
    {
      text: "前端技术框架",
      base: "/zh/前端技术框架/",
      collapsed: false,
      items: [
        { text: "WEB", link: "WEB" },
        { text: "JavaScript", link: "JavaScript" },
      ],
    },
    {
      text: "更多面试题",
      base: "/zh/更多面试题/",
      collapsed: false,
      items: [
        { text: "数据结构和算法", link: "数据结构和算法" },
        { text: "开发工具", link: "开发工具" },
        { text: "编程题", link: "编程题" },
        { text: "非技术面", link: "非技术面" },
      ],
    },
  ];
}
