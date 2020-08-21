import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

import Home from '@/components/Home.vue'
import Registro from '@/components/Registro.vue';
import login from '@/components/login.vue';
import playTrivia from '@/components/playTrivia.vue';
import finishTrivia from '@/components/finishTrivia.vue';
import addQuestion from '@/components/addQuestion.vue';
import NotFound from '@/components/NotFound.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
      {
        path: '/', 
        component: Home,
        meta: { requiresAuth: true }
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
        path:'/playTrivia',
        component: playTrivia,
        name: 'playTrivia',
        meta: { requiresAuth: true }
      },
      {        
        path:'/finishTrivia',
        component: finishTrivia,
        name: 'finishTrivia',
        meta: { requiresAuth: true }
      },
      {        
        path:'/addQuestion',
        component: addQuestion,
        meta: { requiresAuth: true }

      },
      {
        path: '*', 
        component: NotFound
      }
    ]
  })

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  if (to.meta.requiresAuth && currentUser == null) {
    next('/login')
  } else {
    next()
  }
})
  
  export default router;