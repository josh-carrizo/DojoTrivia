<template>
<div>
  <b-row>
    <b-col></b-col>
    <b-col cols="6">
      <br>
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <router-link class="link-play" v-bind:to="{path: '/playTrivia'}">
        <b-button variant="success"><b-icon icon="controller"></b-icon> Play!</b-button>
      </router-link>
        <br>
        <h6>Click the button above to start the trivia game</h6>
      </b-jumbotron>
    </b-col>
    <b-col></b-col>
  </b-row>
  <!--Table-->
  <b-row>
    <b-col></b-col>
    <b-col cols="10">
      <b-list-group flush class="list my--3">
        <b-list-group-item class="px-0" v-for="(qpoint, i) in qpoints" :key="i">
          <b-row align-v="center" >
            <b-col>
              <small>Name:</small>
              <h5 class="mb-0">{{qpoint.userName}}</h5>
            </b-col>
            <b-col>
              <small>Total Points:</small>
              <h5 class="mb-0">{{qpoint.points}}</h5>
            </b-col>
            <b-col>
              <small>Porcentaje:</small>
              <h5 class="mb-0">{{qpoint.porcentaje}}</h5>
            </b-col>
            <b-col cols="3">
              <small>Actual date:</small>
              <h5 class="mb-0">{{qpoint.fechaActual}}</h5>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-col>
    <b-col></b-col>
  </b-row>
</div>
</template>

<script>
import { db } from '@/firebase';  

export default {
  name:"Home",
  computed: {
    User() {
      return this.$store.state.User;
    }
  },
    firestore() { 
    return {
      qpoints: db.collection('qpoints').orderBy("userName")
    }
  }
}
</script>