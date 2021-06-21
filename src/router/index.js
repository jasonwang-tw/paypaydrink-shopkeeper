import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: index,
    redirect: '/shop_1',
    children: [
      {
        path: 'shop_1',
        component: () => import('../views/shop/page.vue'),
      },
      {
        path: 'shop_2',
        component: () => import('../views/shop/page.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',  //gh-page
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router;
