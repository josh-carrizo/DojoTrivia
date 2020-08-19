<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link class="link-inicio" v-bind:to="{path: '/'}">
        <b-icon icon="house-door-fill" />
      </router-link>
     
    <b-navbar-brand  v-if="User">Hi {{ User.displayName }} !</b-navbar-brand>     
    <b-navbar-brand v-else href="#">NavBar</b-navbar-brand>
    <b-button variant="#6f42c1" class="mb-2" v-if="User">
      <b-icon icon="person-fill" aria-hidden="true" @click.prevent="logout" class="btn" href="#"/> Logout 
    </b-button>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link v-if="User" class="link-inicio" v-bind:to="{path: '/mMovies'}">
          <b-nav-item href="#">Movies</b-nav-item>
        </router-link>
        <b-nav-item v-else href="#" disabled>Movies</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
        <div class="logueado" v-if="User">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Edit profile</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>

           <router-link v-else class="link-inicio" v-bind:to="{path: '/login'}">
            <b-button variant="#6f42c1" class="mb-2">
              <b-icon icon="person-fill" aria-hidden="true"/> Login
            </b-button>
          </router-link>
        </b-nav-form>


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

</style>
