<template>
<div class="addQuestion">
    <h3>Add New Question</h3>
    <b-row>
      <b-col></b-col>
      <b-col cols="6">
      <b-form @submit.prevent="addQuestion">
        <div class="mt-2">Question</div>
          <b-form-input  v-model="question" required placeholder="Enter your question"></b-form-input>
        <div class="mt-2">Correct Answer</div>
          <b-form-input  v-model="correctAnswer" required placeholder="Enter your question"></b-form-input>
        <div class="mt-2">Fake Answer 1</div>
          <b-form-input  v-model="fake1" required placeholder="Enter your question"></b-form-input>
        <div class="mt-2">Fake Answer 2</div>
          <b-form-input  v-model="fake2" required placeholder="Enter your question"></b-form-input>
        <div class="mt-2">Fake Answer 3</div>
          <b-form-input  v-model="fake3" required placeholder="Enter your question"></b-form-input>
        <br>
        <b-button variant="info"  type="submit">ADD QUESTION</b-button>
      </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
</div>
</template>
<script>
import { db } from '@/firebase';  

export default {
  name: 'addQuestion',
  props: {
    msg: String
  },
  data() {
    return {
      question: '',
      correctAnswer: '',
      fake1: '',
      fake2: '',
      fake3: ''
    }

  },
  methods:{
    addQuestion(){
        let sortAnswers = [
          { 
            text: this.correctAnswer,
            isCorrect: true
          },
          { 
            text: this.fake1,
            isCorrect: false
          },
          { 
            text: this.fake2,
            isCorrect: false
          },
          { 
            text: this.fake3,
            isCorrect: false
          }
        ]
        sortAnswers = sortAnswers.sort(() => 0.5 - Math.random());

        console.log('Funciona AddQuestion')
        db.collection('questions').add({
          question: this.question,
          sortAnswers : sortAnswers

        });
          this.question= '',
          this.correctAnswer= '',
          this.fake1= '',
          this.fake2= '',
          this.fake3= ''
    }
  }
}
</script>
