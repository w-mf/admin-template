import { createRouter, createWebHistory } from 'vue-router';
import { useNavTabsStore } from '~/stores/navTabs';
import nProgress from '~/utils/nprogress';
import type { IRoute } from './router.d';

const ListContainer = () => import('~/layout/BodyContainer.vue');
// 主要路由
export const routes: IRoute[] = [
  {
    path: '/home',
    component: () => import('~/views/Home.vue'),
    meta: {
      isMenu: true,
      permissionCode: 'home',
      icon: 'HomeFilled',
      title: '首页',
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('~/layout/Layout.vue'),
      redirect: '/home',
      children: [
        ...routes,
        {
          path: '/error/:code',
          component: () => import('~/views/Error.vue'),
          meta: {
            isMenu: false,
            title: '异常',
          },
        },
        { path: '/:pathMatch(.*)', component: ListContainer, redirect: '/error/404' },
      ],
    },
    {
      path: '/login',
      component: () => import('~/views/Login.vue'),
    },
  ],
});
router.beforeEach((to) => {
  const navTabsStore = useNavTabsStore();
  // navTab 忽略路由的路由
  const ignorePath = ['/login'];
  if (!ignorePath.includes(to.path)) {
    navTabsStore.onAddNavTab({ text: (to.meta.title as string) || '', path: to.path });
    navTabsStore.setActiveTab(to.path);
  }
  nProgress.start();
});
router.afterEach(() => {
  nProgress.done();
});

export default router;
