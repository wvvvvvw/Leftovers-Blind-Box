import { defineStore } from 'pinia';
import { store } from '@/store';

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      navBarHeight: 0 as number,
      statusBarHeight: 0 as number,
    };
  },
  getters: {
    getNavBarHeight(): number {
      return this.navBarHeight;
    },
    getStatusBarHeight(): object {
      return this.statusBarHeight;
    },
  },
  actions: {
    setNavBarHeight(navBarHeight: number) {
      this.navBarHeight = navBarHeight;
    },
    setStatusBarHeight(statusBarHeight: number) {
      this.statusBarHeight = statusBarHeight;
    },
  },
});

// Need to be used outside the setup
export function useGlobalData() {
  return useGlobalStore(store);
}
