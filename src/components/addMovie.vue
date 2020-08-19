<template>
<div class="addmovie">
    <h3>Add New Show</h3>
        <div class="row">
        <div class="col s2 m2" ></div>
            <form class="col s8 m8" @submit.prevent="addShow">
            <div class="row">
                <div class="input-field col s6">
                <input id="title" required="required" type="text" class="validate" v-model="addTitle">
                <label for="title">Title</label>
                </div>
                <div class="input-field col s6">
                <input id="network" required="required" type="text" class="validate" v-model="addNetwork">
                <label for="network">Network</label>
                </div>
            </div>      
            <div class="row">
                <div class="input-field col s6">
                <input id="genres" required="required" type="text" class="validate" v-model="addGenres">
                <label for="genres">Genres Separated w/space</label>
                </div>
                <div class="input-field col s6">
                <input id="numberOfSeasons" type="number" required="required" class="validate" v-model="addNumber">
                <label for="numberOfSeasons">Number of Seasons</label>
                </div>
            </div>
            <div class="row"> 
                <div class="switch col s6">
                    <label>
                    No, isn't current
                    <input type="checkbox" v-model="addCurrent" >
                    <span class="lever"></span>
                    Is current
                    </label>
                </div>
                <button class="btn waves-effect waves-light col s6 right" type="submit" name="action">ADD doJOSHow
                </button>
            </div>  
            </form>
        </div>
        <router-link class="link-inicio" v-bind:to="{path: '/mMovie'}">
            <div>
                <b-button pill variant="outline-danger" block >Do you want watch the movie list? Click Here!</b-button>
            </div>
        </router-link>

</div>
</template>
<script>
import { db } from '@/firebase';  

export default {
  name: 'addMovie',
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
  methods:{
    addShow(){
        
        console.log('Funciona AddShow')
        db.collection('shows').add({
          title: this.addTitle,
          network: this.addNetwork,
          numberOfSeasons: parseInt(this.addNumber),
          isCurrent: this.addCurrent,
          genres: this.addGenres.split(' ')
        });
        this.addTitle= '';
        this.addNetwork= '';
        this.addNumber= '';
        this.addCurrent= null;
        this.addGenres=[];
    }
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