import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Concact',
    component: () => import('@/components/Contact.vue'),
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: () => import('@/components/AboutMe.vue'),
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/components/Skills.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/components/Projects.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // 如果目标路由包含 hash（如 #section-id），滚动到对应的元素
      return {
        el: to.hash,
        behavior: "smooth", // 平滑滚动
      };
    }
    // 如果没有 hash，滚动到页面顶部
    return { top: 0, behavior: "smooth" };
  },
})
export default router;
