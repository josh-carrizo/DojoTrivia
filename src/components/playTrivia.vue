<template>
<div class="playTrivia">
  <h1>Trivia</h1>
  <b-form @submit.prevent="finishTrivia">
    <b-form-radio-group>
      <br>
      <div>{{selectedQuestion[0].question}}</div>
      <b-form-radio v-model="question0" :value="selectedQuestion[0].sortAnswers[0].isCorrect ? '1' : '0' ">{{selectedQuestion[0].sortAnswers[0].text}}</b-form-radio>
      <b-form-radio v-model="question0" :value="selectedQuestion[0].sortAnswers[1].isCorrect ? '1' : '0' ">{{selectedQuestion[0].sortAnswers[1].text}}</b-form-radio>
      <b-form-radio v-model="question0" :value="selectedQuestion[0].sortAnswers[2].isCorrect ? '1' : '0' ">{{selectedQuestion[0].sortAnswers[2].text}}</b-form-radio>
      <b-form-radio v-model="question0" :value="selectedQuestion[0].sortAnswers[3].isCorrect ? '1' : '0' ">{{selectedQuestion[0].sortAnswers[3].text}}</b-form-radio>
    <br>
    </b-form-radio-group>
    <br>

    <b-form-radio-group>
      <br>
      <div>{{selectedQuestion[1].question}}</div>
      <b-form-radio v-model="question1" :value="selectedQuestion[1].sortAnswers[0].isCorrect ? '1' : '0' ">{{selectedQuestion[1].sortAnswers[0].text}}</b-form-radio>
      <b-form-radio v-model="question1" :value="selectedQuestion[1].sortAnswers[1].isCorrect ? '1' : '0' ">{{selectedQuestion[1].sortAnswers[1].text}}</b-form-radio>
      <b-form-radio v-model="question1" :value="selectedQuestion[1].sortAnswers[2].isCorrect ? '1' : '0' ">{{selectedQuestion[1].sortAnswers[2].text}}</b-form-radio>
      <b-form-radio v-model="question1" :value="selectedQuestion[1].sortAnswers[3].isCorrect ? '1' : '0' ">{{selectedQuestion[1].sortAnswers[3].text}}</b-form-radio>
    <br>
    </b-form-radio-group>
    <br>

    <b-form-radio-group>
      <br>
      <div>{{selectedQuestion[2].question}}</div>
      <b-form-radio v-model="question2" :value="selectedQuestion[2].sortAnswers[0].isCorrect ? '1' : '0' ">{{selectedQuestion[2].sortAnswers[0].text}}</b-form-radio>
      <b-form-radio v-model="question2" :value="selectedQuestion[2].sortAnswers[1].isCorrect ? '1' : '0' ">{{selectedQuestion[2].sortAnswers[1].text}}</b-form-radio>
      <b-form-radio v-model="question2" :value="selectedQuestion[2].sortAnswers[2].isCorrect ? '1' : '0' ">{{selectedQuestion[2].sortAnswers[2].text}}</b-form-radio>
      <b-form-radio v-model="question2" :value="selectedQuestion[2].sortAnswers[3].isCorrect ? '1' : '0' ">{{selectedQuestion[2].sortAnswers[3].text}}</b-form-radio>
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
  data () {
    return {
      questions:[''],
      selectedQuestions:[''],
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
  computed: {
    selectedQuestion() {
      let selectedQuestions = [...this.questions]
      selectedQuestions.sort(() => 0.5 - Math.random())
        return selectedQuestions
    },
    User() {
      return this.$store.state.User;
    }
  },
  methods:{
    finishTrivia() {
      let correctAnswers = 0;
      if (this.question0 == '1'){
        correctAnswers++
      }
      if (this.question1 == '1'){
        correctAnswers++
      }
      if (this.question2 == '1'){
        correctAnswers++
      }

      let porcentaje = (correctAnswers / 3) * 100;
      porcentaje = porcentaje.toFixed(1);

      const fecha = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: true};
      const fechaActual =  fecha.toLocaleDateString("es-CL", options);
            
      console.log(correctAnswers)

      db.collection('qpoints').add({
        userName: this.User.displayName,
        points : correctAnswers + '/3',
        porcentaje: porcentaje + '%',
        fechaActual: fechaActual

      });
    this.$store.dispatch('triviaPlayed')

    }
  }
}
</script>

<style>

</style>