import { createRouter, createWebHistory } from 'vue-router';

// 主要路由
const routes = [
  {
    path: '/home',
    component: () => import('~/views/Home.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('~/layout/Layout.vue'),
      redirect: '/home',
      children: routes,
    },
    {
      path: '/login',
      component: () => import('~/views/Login.vue'),
    },
  ],
});

export default router;
