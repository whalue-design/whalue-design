<template>
  <button
    :class="[
      'wd-button',
      type ? `wd-button--${type}` : '',
      buttonSize ? `wd-button--${buttonSize}` : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autoFocus"
    :type="nativeType"
    @click="onClick"
  >
    <i v-if="loading" class="wd-icon-loading"></i>
    <i v-if="!loading && icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import type { PropType } from "vue";
// import type { WdFormContext, WdFormItemContext } from "@whalue-design/form";

import { defineComponent, computed, inject } from "vue";
import { isValidComponentSize } from "@whalue-design/utils/validators";
import { useGlobalConfig } from "@whalue-design/utils/util";

type ButtonType = PropType<
  "default" | "primary" | "success" | "warn" | "danger" | "info" | "text"
>;
type ButtonNativeType = PropType<"button" | "submit" | "reset">;

export default defineComponent({
  name: "WdButton",
  props: {
    type: {
      type: String as ButtonType,
      default: "default",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warn",
          "danger",
          "info",
          "text",
        ].includes(val);
      },
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: "",
      validator: isValidComponentSize,
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    autoFocus: Boolean,
    nativeType: {
      type: String as ButtonNativeType,
      default: "button",
      validator: (val: string) => {
        return ["button", "submit", "reset"].includes(val);
      },
    },
    icon: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
  setup(props, ctx) {
    const $whalue = useGlobalConfig();

    // todo
    // const wdForm = inject(wdFormKey, {} as WdFormContext);
    // const wdFormItem = inject(wdFormItemKey, {} as WdFormItemContext);
    // const buttonSize = computed(() => {
    //   return props.size || wdFormItem.size || $whalue.size;
    // });
    // const buttonDisabled = computed(() => {
    //   return props.disabled || wdForm.disabled;
    // });

    const buttonSize = computed(() => {
      return props.size || $whalue.size;
    });

    const buttonDisabled = computed(() => {
      return props.disabled;
    });

    const onClick = (evt: Event) => {
      ctx.emit("click", evt);
    };

    return {
      buttonSize,
      buttonDisabled,
      onClick,
    };
  },
});
</script>
