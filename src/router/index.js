import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/home/MainPage.vue';
import ShopPage from '../components/shop/ShopPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
});

export default router;