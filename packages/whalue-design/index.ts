import type { App } from "vue";
import type { InstallOptions } from "@whalue-design/utils/config";

import { setConfig } from "@whalue-design/utils/config";
import isServer from "@whalue-design/utils/isServer";
import { version } from "./version";
import dayjs from "dayjs";

import WdDivider from "@whalue-design/divider";

if (!isServer && !(window as any).dayjs) {
  (window as any).dayjs = dayjs;
}

const defaultInstallOpt: InstallOptions = {
  size: "" as ComponentSize,
  zIndex: 3000,
};

const components = [WdDivider];

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt);
  app.config.globalProperties.$WHALUE = option;
  setConfig(option);

  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { WdDivider, install, version };

export default {
  install,
  version,
};
