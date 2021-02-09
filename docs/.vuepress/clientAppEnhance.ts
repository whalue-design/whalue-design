import type { ClientAppEnhance } from "@vuepress/client";

import { WDDivider } from "@whalue-design/whalue-design";

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.component("WDDivider", WDDivider);
};

export default clientAppEnhance;
