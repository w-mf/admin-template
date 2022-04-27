import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface INavTab {
  text: string;
  path: string;
}

export const useNavTabsStore = defineStore(
  'navTabs',
  () => {
    const activeTab = ref<INavTab['path']>('/home');
    const navTabs = ref<INavTab[]>([]);

    function setActiveTab(val: INavTab['path']) {
      activeTab.value = val;
    }
    function onAddNavTab(val: INavTab) {
      if (val.path === '/home') return;
      if (navTabs.value.findIndex((item) => item.path === val.path) === -1) {
        navTabs.value.push(val);
      }
    }
    function onDelNavTab(val: Array<INavTab['path']>) {
      let index = 0;
      val.forEach((path) => {
        index = navTabs.value.findIndex((item) => item.path === path);
        if (index > -1) {
          navTabs.value.splice(index, 1);
        }
      });
    }
    return {
      activeTab,
      setActiveTab,

      navTabs,
      onAddNavTab,
      onDelNavTab,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'navTabs',
          storage: sessionStorage,
        },
      ],
    },
  },
);
