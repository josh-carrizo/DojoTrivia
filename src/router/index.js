import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue'
import Registro from '@/components/Registro.vue';
import login from '@/components/login.vue';
import Success from '@/components/Success.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
      {
        path: '/', 
        component: Home,
      },
      {
        path: '/register', 
        component: Registro,
      },
      {
        path: '/login', 
        component: login,
      },
      {        
        path:'/Success/:id',
        component: Success,
        name: 'Success',
      },
      {
        path: '*', 
        component: NotFound
      }
    ]
  })