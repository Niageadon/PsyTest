<template>
<div>
  <div class="row justify-center" >
    <q-form v-if="step === 11"
      class="row justify-center q-gutter-xs"
      @submit="nextStep">
        <div class="column col-md-7 col-xs-12 self-start justify-center q-gutter-md">
          <div class="row justify-center q-gutter-xs">
            <q-input
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col-md-7 col-xs-10" filled v-model="answer.mainWord" label="Main word">
            </q-input>
          </div>
          <div class="row justify-center q-gutter-xs">
            <q-input
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col-md-5 col-xs-10"
                v-for="(word, i) in answer.stepOneWord" :key="i"  filled v-model="answer.stepOneWord[i]">
            </q-input>
          </div>
          <q-btn label="Submit" type="submit" color="primary"></q-btn>
        </div>
    </q-form> <!-- Первый шаг: пишем главное слово и 16 ассоциаций к нему-->

      <q-stepper class="col-md-7 q-mt-lg col-xs-12" v-model="step" ref="stepper" animated>
        <q-step :name="1" title="Select campaign settings">
          <div class="row q-gutter-md justify-center items-center">
            <q-list class="col-5" bordered separator>
              <q-item>
                <q-item-section>{{secondStep.firstWord}}</q-item-section>
              </q-item>
              <q-item>
                <q-item-section>{{secondStep.secondWord}}</q-item-section>
              </q-item>
            </q-list>

            <q-input
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col 4" filled v-model="answer.mainWord" >
            </q-input>
          </div>
        </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn @click="$refs.stepper.next()" color="primary" label="bbb"></q-btn>
          </q-stepper-navigation>
        </template>
      </q-stepper>



  </div>





</div>
</template>

<style>
</style>

<script>
export default {
  name: 'AssociationsMethod',
  data(){
    return{
      step: 1,

      answer:{
        mainWord:'',
        stepOneWord:  ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',],//['','','','','','','','','','','','','','','','',],
        stepTwoWord:  ['','','','','','','','',],
        stepThreeWord:['','','',''],
        stepFourWord: ['',''],
        resultWord: ''
      },

      secondStep:{firstWord:'1', secondWord:'2', resultWord:''},
    }
  },

  methods: {
    nextStep () {
      this.step++;
      switch (this.step) {
        case 1: {this.secondStep.firstWord = this.stepOneWord[0]; this.secondStep.secondWord = this.stepOneWord[1]; break}
        case 2: {
          this.answer.stepTwoWord[0] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[2];
          this.secondStep.secondWord = this.stepOneWord[3]; break}
        case 3: {
          this.answer.stepTwoWord[1] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[4];
          this.secondStep.secondWord = this.stepOneWord[5]; break}
        case 4: {
          this.answer.stepTwoWord[2] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[6];
          this.secondStep.secondWord = this.stepOneWord[7]; break}
        case 5: {
          this.answer.stepTwoWord[3] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[8];
          this.secondStep.secondWord = this.stepOneWord[9]; break}
        case 6: {
          this.answer.stepTwoWord[4] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[10];
          this.secondStep.secondWord = this.stepOneWord[11]; break}
        case 7: {
          this.answer.stepTwoWord[5] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[12];
          this.secondStep.secondWord = this.stepOneWord[13]; break}
        case 8: {
          this.answer.stepTwoWord[6] = this.secondStep.resultWord;
          this.secondStep.firstWord = this.stepOneWord[14];
          this.secondStep.secondWord = this.stepOneWord[15]; break}
      }
    },


  }
}
</script>
