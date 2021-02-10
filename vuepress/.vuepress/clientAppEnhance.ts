import type { ClientAppEnhance } from "@vuepress/client";

import { WdDivider } from "@whalue-design/whalue-design";
import "@whalue-design/theme-chalk/src/index.less";

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.component(WdDivider.name, WdDivider);
};

export default clientAppEnhance;
