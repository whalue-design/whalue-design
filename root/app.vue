<template>
  <div class="app">
    <wd-divider>123</wd-divider>
    <br />
    <div>
      <wd-button>默认按钮</wd-button>
      <wd-button type="primary">主要按钮</wd-button>
      <wd-button type="success">成功按钮</wd-button>
      <wd-button type="info">信息按钮</wd-button>
      <wd-button type="warn">警告按钮</wd-button>
      <wd-button type="danger">危险按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button plain>朴素按钮</wd-button>
      <wd-button type="primary" plain>主要按钮</wd-button>
      <wd-button type="success" plain>成功按钮</wd-button>
      <wd-button type="info" plain>信息按钮</wd-button>
      <wd-button type="warn" plain>警告按钮</wd-button>
      <wd-button type="danger" plain>危险按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button round>圆角按钮</wd-button>
      <wd-button type="primary" round>主要按钮</wd-button>
      <wd-button type="success" round>成功按钮</wd-button>
      <wd-button type="info" round>信息按钮</wd-button>
      <wd-button type="warn" round>警告按钮</wd-button>
      <wd-button type="danger" round>危险按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button icon="wd-icon-search" circle></wd-button>
      <wd-button type="primary" icon="wd-icon-edit" circle></wd-button>
      <wd-button type="success" icon="wd-icon-check" circle></wd-button>
      <wd-button type="info" icon="wd-icon-message" circle></wd-button>
      <wd-button type="warn" icon="wd-icon-star-off" circle></wd-button>
      <wd-button type="danger" icon="wd-icon-delete" circle></wd-button>
    </div>
    <br />
    <div>
      <wd-button disabled>默认按钮</wd-button>
      <wd-button type="primary" disabled>主要按钮</wd-button>
      <wd-button type="success" disabled>成功按钮</wd-button>
      <wd-button type="info" disabled>信息按钮</wd-button>
      <wd-button type="warn" disabled>警告按钮</wd-button>
      <wd-button type="danger" disabled>危险按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button plain disabled>朴素按钮</wd-button>
      <wd-button type="primary" plain disabled>主要按钮</wd-button>
      <wd-button type="success" plain disabled>成功按钮</wd-button>
      <wd-button type="info" plain disabled>信息按钮</wd-button>
      <wd-button type="warn" plain disabled>警告按钮</wd-button>
      <wd-button type="danger" plain disabled>危险按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button type="primary" :loading="true">加载中</wd-button>
    </div>
    <br />
    <div>
      <wd-button type="text">文字按钮</wd-button>
      <wd-button type="text" disabled>文字按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button size="large">大型按钮</wd-button>
      <wd-button size="medium">中等按钮</wd-button>
      <wd-button>默认按钮</wd-button>
      <wd-button size="small">小型按钮</wd-button>
      <wd-button size="mini">超小按钮</wd-button>
    </div>
    <br />
    <div>
      <wd-button size="large" round>大型按钮</wd-button>
      <wd-button size="medium" round>中等按钮</wd-button>
      <wd-button round>默认按钮</wd-button>
      <wd-button size="small" round>小型按钮</wd-button>
      <wd-button size="mini" round>超小按钮</wd-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="less" scoped>
@import "~@whalue-design/theme-chalk/src/themes/index";

.app {
  padding: @padding-base;
  background-color: @white;
}
</style>
