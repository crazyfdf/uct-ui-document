const path = require("path");
const glob = require("globby");
const cwd = path.join(__dirname, "..");
const { parse } = require("vue-docgen-api");

const { renameComponentMd } = require("./fileinit.js");
var vuePressConfig = async () => {
  renameComponentMd(cwd + "/components");
  // 首页
  const index = ["/index.md"];
  // 指南
  const docGuide = glob.sync("guide/uct-*/*.md", { cwd }).map(f => "/" + f); //.substr(10)
  // 组件
  const docComponents = glob.sync("components/uct-*/*.md", { cwd }).map(f => "/" + f); //.substr(10)
  // 工具
  const docTools = glob.sync("tools/uct-*/*.md", { cwd }).map(f => "/" + f); //.substr(10)
  // 模板

  const components = await Promise.all(
    glob
      .sync("../../components/**/[a-z].{vue,jsx,ts,tsx}", { cwd, absolute: true })
      .map(async path => {
        return {
          name: (await parse(path)).displayName.replace(/[^a-zA-Z0-9_]/g, ""),
          path,
        };
      })
  );
  console.log(docComponents);
  //引入fs文件目录模块
  return {
    dest: path.join(__dirname, "/dist"),
    base: "/",
    title: "UCT UI",
    themeConfig: {
      search: true,
      editLinks: true,
      nav: [
        // 导航栏配置
        { text: "指南", link: "/guide/index" },
        { text: "工具", link: "/tools/index" },
        { text: "组件", link: "/components/index" },
        { text: "模板", link: "/templates/index" },
        { text: "github", link: "https://github.com/crazyfdf/uct-ui" },
        { text: "gitee", link: "https://gitee.com/huolingmengling/uct-ui" },
      ],
      sidebar: {
        index,
        "/guide/": [
          {
            title: "指南", // 必要的
            path: "/guide", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            // collapsable: false, // 可选的, 默认值是 true,
            // sidebarDepth: 1, // 可选的, 默认值是 1
            children: docGuide,
          },
        ],
        "/components/": [
          {
            title: "组件", // 必要的
            path: "/components", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            // collapsable: false, // 可选的, 默认值是 true,
            // sidebarDepth: 1, // 可选的, 默认值是 1
            children: docComponents,
          },
        ],
        "/tools/": [
          {
            title: "工具", // 必要的
            path: "/tools", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            // collapsable: false, // 可选的, 默认值是 true,
            // sidebarDepth: 1, // 可选的, 默认值是 1
            children: docTools,
          },
        ],
        // "/templates/": [""],
        //  "/components/": docFiles
      },
      markdown: {
        // 为每个代码块显示行号
        lineNumbers: true,
      },
    },
    plugins: [
      ["live"],
      [
        "@vuepress/register-components",
        "@vuepress/nprogress",
        {
          //热更新时进行检测文件 但是.md文件如何进行更改后就无法进行热更新检测了
          components,
          componentsDir: "../../components",
        },
      ],
    ],
  };
};
vuePressConfig();
module.exports = vuePressConfig;
