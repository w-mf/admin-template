import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface INavTab {
  text: string;
  path: string;
}

export const useAppStore = defineStore(
  'app',
  () => {
    const token = ref<string>('');
    const permissionCodes = ref<string[]>([]);
    const userInfo = ref();
    const navTabs = ref<INavTab[]>([]);

    function setToken(val: string) {
      token.value = val;
    }
    function setPermissionCodes(val: string[]) {
      permissionCodes.value = val;
    }
    function setUserInfo(val) {
      userInfo.value = val;
    }
    function logout() {
      token.value = '';
      permissionCodes.value = [];
      window.location.href = '/login';
    }
    function setNavTabs(val: INavTab[]) {
      navTabs.value = val;
    }
    return {
      token,
      permissionCodes,
      userInfo,
      setUserInfo,
      setToken,
      setPermissionCodes,
      logout,
      navTabs,
      setNavTabs,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'app',
          storage: localStorage,
        },
      ],
    },
  },
);
