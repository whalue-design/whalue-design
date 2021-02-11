import { createApp } from "vue";
import WhalueDesign from "@whalue-design/whalue-design";
import App from "./app.vue";
import "@whalue-design/theme-chalk/src/index.less";

const app = createApp(App);

app.use(WhalueDesign);

app.mount("#app");
