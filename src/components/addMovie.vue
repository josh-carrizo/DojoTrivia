<template>
<div class="addmovie">
    <h3>Add New Show</h3>
        <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="8">
            <b-form @submit.prevent="addShow">
              <b-row>
                  <b-col cols="6" class="input-field">
                    <input id="title" required="required" type="text" class="validate" v-model="addTitle">
                    <label for="title">Title</label>
                  </b-col>
                  <b-col cols="6" class="input-field">
                    <input id="network" required="required" type="text" class="validate" v-model="addNetwork">
                    <label for="network">Network</label>
                  </b-col>
              </b-row>      
              <b-row>
                <b-col cols="6" class="input-field">
                  <input id="genres" required="required" type="text" class="validate" v-model="addGenres">
                  <label for="genres">Genres Separated w/space</label>
                </b-col>
                <b-col cols="6" class="input-field">
                  <input id="numberOfSeasons" type="number" required="required" class="validate" v-model="addNumber">
                  <label for="numberOfSeasons">Number of Seasons</label>
                </b-col>
              </b-row>
              <b-row> 
                <b-col cols="6" class="switch">
                    <label>
                    No, isn't current
                    <input type="checkbox" v-model="addCurrent" >
                    <span class="lever"></span>
                    Is current
                    </label>
                </b-col>
                <b-button variant="dark" class="btn waves-effect waves-light col s6 right" type="submit" name="action">ADD doJOSHow
                </b-button>
              </b-row>  
            </b-form>
          </b-col>
          <b-col cols="2"></b-col>
        </b-row>
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