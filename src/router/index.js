import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue'
import Registro from '@/components/Registro.vue';
import login from '@/components/login.vue';
import Success from '@/components/Success.vue';
import moldeMovies from '@/components/moldeMovies.vue';
import addMovie from '@/components/addMovie.vue';
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
        path:'/Success',
        component: Success,
        name: 'Success',
      },
      {        
        path:'/mMovies',
        component: moldeMovies
      },
      {        
        path:'/addMovie',
        component: addMovie
      },
      {
        path: '*', 
        component: NotFound
      }
    ]
  })