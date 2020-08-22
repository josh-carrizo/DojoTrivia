<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link class="link-inicio" v-bind:to="{path: '/'}">
        <b-icon variant="light" icon="house-door-fill" /> 
        <span class="text-white home">Home </span>
      </router-link>
      <b-navbar-brand toggleable="lg" type="dark" variant="info" v-if="User">  |  </b-navbar-brand>  
      <router-link v-if="User" class="link-inicio" v-bind:to="{path: '/addQuestion'}">
        <b-navbar-brand toggleable="lg" type="dark" variant="info" v-if="User">Add Question</b-navbar-brand>
      </router-link> 

      <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-brand  v-if="User">Hi {{ User.displayName }} !</b-navbar-brand>     
          <b-button variant="#6f42c1" class="mb-2" @click.prevent="logout" v-if="User">
            <b-icon icon="person-fill" variant="light" aria-hidden="true"  class="btn"/><span class="text-white"> Logout </span>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    User() {
      return this.$store.state.User;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logOut');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

.home{
  margin-right: 1em;
}

</style>
