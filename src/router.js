import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/chat',
      name: 'Chat',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Chat.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        }
        next({ name: 'Welcome' });
      },
    },
  ],
});
