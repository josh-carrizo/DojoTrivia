import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Home from '@/components/Home.vue'
import Registro from '@/components/Registro.vue';
import login from '@/components/login.vue';
import Success from '@/components/Success.vue';
import moldeMovies from '@/components/moldeMovies.vue';
import addMovie from '@/components/addMovie.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter);

const router = new VueRouter({
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
        meta: { requiresAuth: true }

      },
      {        
        path:'/mMovies',
        component: moldeMovies,
        meta: { requiresAuth: true }
      },
      {        
        path:'/addMovie',
        component: addMovie,
        meta: { requiresAuth: true }

      },
      {
        path: '*', 
        component: NotFound
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record  => record.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})
  
  export default router;