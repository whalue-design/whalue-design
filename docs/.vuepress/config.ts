import type { UserConfig, DefaultThemeOptions } from "vuepress";

const config: UserConfig<DefaultThemeOptions> = {
  base: "/docs/",
  lang: "zh-CN",
  title: "whalue-design",
  description: "whalue design for vue",

  themeConfig: {},

  port: 9527,
  bundlerConfig: {
    chainWebpack: (config: any) => {
      config.module
        .rule("less")
        .oneOf("normal")
        .use("less-loader")
        .options({ lessOptions: { javascriptEnabled: true } })
        .end()
        .end()
        .oneOf("modules")
        .use("less-loader")
        .options({ lessOptions: { javascriptEnabled: true } });
    },
  },
};

export default config;
