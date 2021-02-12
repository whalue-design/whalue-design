import { getCurrentInstance } from "vue";

export function useGlobalConfig() {
  const vm: any = getCurrentInstance();

  if ("$whalue" in vm.proxy) {
    return vm.proxy.$whalue;
  }

  return {};
}
