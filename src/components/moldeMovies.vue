<template>
  <div class="hello">
    <!--tabla de datos-->
    <div class="row">
      <div class="col s2 m2"></div>
      <div class="col s8 m8">

        <table class="striped centered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Network</th>
              <th>Current</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(show, i) in shows" v-bind:key="i" >
              <td>   <router-link class="link-inicio" v-bind:to="{path: '/infoShow/' + show.id}">{{ show.title }}</router-link></td>
              <td>{{ show.network }}</td>
              <td>
                <span v-if="show.isCurrent">
                  <img class="true_false" src="https://www.shareicon.net/data/256x256/2017/05/09/885834_ok_512x512.png">
                </span>
                <span v-else><img class="true_false" src="https://cdn.iconscout.com/icon/free/png-256/false-delete-remove-cross-wrong-36-32770.png">
                </span>
              </td>
              <td>
                <router-link class="link-Action" v-bind:to="{path: '/ActionShow/' + show.id +'/edit'}">
                  <b-icon icon="pencil-square"/>
                </router-link>
                <div @click.prevent="deleteShow(show.id)"><b-icon icon="trash"/></div>
              </td>
              <!--<td>{{ show.numberOfSeasons }}</td>
              <td><span v-for="(genre, i) in show.genres" :key="i">{{ genre }} </span></td>-->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <router-link class="link-inicio" v-bind:to="{path: '/addMovie'}">
        <div>
            <b-button pill variant="outline-danger" block >Do you want add another movie? Click Here!</b-button>
        </div>
    </router-link>
    <div class="col s2 m2"></div>
  </div>
</template>

<script>
import { db } from '@/firebase';  
export default {
  name: 'Principal',
  props: {
    msg: String
  },
  data() {
    return {
      shows: [],       // to start, the list is empty
        
        addTitle: '',
        addNetwork: '',
        addNumber: '',
        addCurrent: '',
        addGenres:[]
    }
  },
  firestore() {           // adding this key/function
    return {
      shows: db.collection('shows')
    }
  },
  methods:{
     deleteShow(id) {
      console.log(id);
      const respuesta = confirm('¿Do you want to delete this show?');
      //if(!respuesta){return;}
      if (respuesta == false) { return; }
      db.collection("shows").doc(id).delete();
    
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.true_false{
  width: 1.3rem;
}
</style>