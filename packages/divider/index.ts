import type { SFCWithInstall } from "@whalue-design/utils/types";

import { App } from "vue";
import Divider from "./src/index.vue";

Divider.install = (app: App): void => {
  app.component(Divider.name, Divider);
};

const _Divider: SFCWithInstall<typeof Divider> = Divider;

export default _Divider;
