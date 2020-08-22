<template>
<div class="playTrivia">
  <h1>Trivia</h1>
  <b-form @submit.prevent="finishTrivia">
    <b-form-radio-group>
      <br>
      <div>{{questions[0].question}}</div>
      <b-form-radio v-model="question0" name="question0" :value="questions[0].sortAnswers[0].isCorrect ? '1' : '0'">{{questions[0].sortAnswers[0].text}}</b-form-radio>
      <b-form-radio v-model="question0" name="question0" :value="questions[0].sortAnswers[1].isCorrect ? '1' : '0'">{{questions[0].sortAnswers[1].text}}</b-form-radio>
      <b-form-radio v-model="question0" name="question0" :value="questions[0].sortAnswers[2].isCorrect ? '1' : '0'">{{questions[0].sortAnswers[2].text}}</b-form-radio>
      <b-form-radio v-model="question0" name="question0" :value="questions[0].sortAnswers[3].isCorrect ? '1' : '0'">{{questions[0].sortAnswers[3].text}}</b-form-radio>
    <br>
    </b-form-radio-group>
    <br>

    <b-form-radio-group>
      <br>
      <div>{{questions[1].question}}</div>
      <b-form-radio v-model="question1" name="question1" :value="questions[1].sortAnswers[0].isCorrect ? '1' : '0'">{{questions[1].sortAnswers[0].text}}</b-form-radio>
      <b-form-radio v-model="question1" name="question1" :value="questions[1].sortAnswers[1].isCorrect ? '1' : '0'">{{questions[1].sortAnswers[1].text}}</b-form-radio>
      <b-form-radio v-model="question1" name="question1" :value="questions[1].sortAnswers[2].isCorrect ? '1' : '0'">{{questions[1].sortAnswers[2].text}}</b-form-radio>
      <b-form-radio v-model="question1" name="question1" :value="questions[1].sortAnswers[3].isCorrect ? '1' : '0'">{{questions[1].sortAnswers[3].text}}</b-form-radio>
    <br>
    </b-form-radio-group>
    <br>

    <b-form-radio-group>
      <br>
      <div>{{questions[2].question}}</div>
      <b-form-radio v-model="question2" name="question2" :value="questions[2].sortAnswers[0].isCorrect ? '1' : '0'">{{questions[2].sortAnswers[0].text}}</b-form-radio>
      <b-form-radio v-model="question2" name="question2" :value="questions[2].sortAnswers[1].isCorrect ? '1' : '0'">{{questions[2].sortAnswers[1].text}}</b-form-radio>
      <b-form-radio v-model="question2" name="question2" :value="questions[2].sortAnswers[2].isCorrect ? '1' : '0'">{{questions[2].sortAnswers[2].text}}</b-form-radio>
      <b-form-radio v-model="question2" name="question2" :value="questions[2].sortAnswers[3].isCorrect ? '1' : '0'">{{questions[2].sortAnswers[3].text}}</b-form-radio>
    <br>
    </b-form-radio-group>
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
      question0: '',
      question1: '',
      question2: ''
      
    }
  },
  firestore() { 
    return {
      questions: db.collection('questions')

    }
  },
  mounted() {
    //this.questions = this.questions.sort(() => 0.5 - Math.random())
    //this.selectedQuestions =[[this.questions[0]],[this.questions[1]],[this.questions[2]]]
  },
  methods:{


    finishTrivia(){    
      
      console.log('Finalizamos la trivia')
      db.collection('qpoints').add({
        userName: this.User.displayName,
        points : (this.question0 + this.question1 + this.question2)

      });
    this.$store.dispatch('triviaPlayed')

    }
  }
}
</script>

<style>

</style>