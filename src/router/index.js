import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: index,
    redirect: '/shop_1/data',
    children: [
      {
        path: 'shop_1',
        component: () => import('../views/shop/page.vue'),
        redirect: '/data',
        children: [
          {
            path: 'data',
            component: () => import('../views/shop/data/shop-data.vue'),
          },
          {
            path: 'order',
            component: () => import('../views/shop/order/shop-order.vue'),
            redirect: '/shop_1/order/list',
            children: [
              {
                path: 'list',
                component: () => import('../views/shop/order/list.vue'),
              },
              {
                path: 'detail',
                component: () => import('../views/shop/order/order-detail.vue'),
              }
            ]
          }
        ],
      },
      {
        path: 'shop_2',
        component: () => import('../views/shop/page.vue'),
      },
    ],
  },
  {
    path: '/profile',
    component: () => import('../views/profile.vue'),
  }
];

const router = new VueRouter({
  mode: 'hash',  //gh-page
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router;
