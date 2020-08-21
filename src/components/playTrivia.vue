<template>
<div class="playTrivia">
  <h1>Trivia</h1>
  <b-form @submit.prevent="finishTrivia">
    <b-form-group v-for="(question, i) in questions.slice(0,3)" :key="i" >
      <span>{{question.question}}</span>
      <b-form-radio name="some-radios" >{{question.sortAnswers[0].text}}</b-form-radio>
      <b-form-radio name="some-radios" >{{question.sortAnswers[1].text}}</b-form-radio>
      <b-form-radio name="some-radios" >{{question.sortAnswers[2].text}}</b-form-radio>
      <b-form-radio name="some-radios" >{{question.sortAnswers[3].text}}</b-form-radio>
    </b-form-group>
    <br>

    <b-button variant="info"  type="submit">Finish Trivia</b-button>
  </b-form>

</div>

</template>

<script>
import { db } from '@/firebase';  
export default {
  name: 'playTrivia',
  computed: {
    User() {
      return this.$store.state.User;
    }
  },
  data () {
    return {
      questions:[],
    }
  },
  firestore() { 
    return {
      questions: db.collection('questions')

    }
  },
  mounted() {
    this.questions = this.questions.sort(() => 0.5 - Math.random())
  },
  methods:{
    finishTrivia(){
      console.log('Finalizamos la trivia')
      db.collection('qpoints').add({
        userName: this.User.displayName,
        points : 3

      });
    this.$store.dispatch('triviaPlayed')

    }
  }
}
</script>

<style>

</style>