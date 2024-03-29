import Vue from 'vue'
import Vuex from 'vuex';

import '@babel/polyfill'
import 'mutationobserver-shim'

import firebase from 'firebase/app'
import 'firebase/auth'
import VueFirestore from 'vue-firestore'
import './firebase.js'

import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.use(VueFirestore, {key: 'id'})      // adding this use statement

Vue.config.productionTip = false
Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    User: null,
    error: null,
    puntos: null
  },
  mutations:{
    setUser(state, newUser){
      state.User = newUser
    },
    setError(state, newError) {
      state.error = newError
    },
    setPoints(state, datospuntaje){
      state.puntos = datospuntaje
    }
  },
  actions: {
    registerAction(context, datos) {
      firebase.auth()
        .createUserWithEmailAndPassword(datos.email, datos.password)
          .then(function (response) {
            console.log(response)
            firebase.auth().currentUser.updateProfile({
              displayName: datos.name
            })
          })
        
          .then(function (response) {
            console.log(response)
            context.commit('setError', null);
            context.commit('setUser', {email: datos.email, displayName:datos.name});
            router.push('/');
          })
          .catch ((error) => {
            console.log(error)
            context.commit('setError', error.message);
            context.commit('setUser',null);
          })
    },
    logIn(context, datos) {
      firebase
      .auth()
        .signInWithEmailAndPassword(datos.email, datos.password)
          .then(response => {
            console.log(response)
            context.commit('setError', null);
            context.commit('setUser', response.user)
            router.push('/')
          })
          .catch(error => {
            context.commit('setError', error.message)
            context.commit('setUser', null)
          })
    },
    logOut(context){
      firebase
      .auth()
        .signOut()
          .then(() => {
            context.commit('setError', null)
            context.commit('setUser', null)
            router.push('/login')
          })
    },
    triviaPlayed(context, datospuntaje){
      context.commit('setPoints', datospuntaje);
      router.push('/finishTrivia')
    }
  }
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
