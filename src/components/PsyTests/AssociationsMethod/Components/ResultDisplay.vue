<template>
  <div class="row justify-center col-11 q-mt-lg textCenter">
    <div class="row justify-center col-12 q-col-gutter-sm ">
      <q-input class="col-12 text-h4" color="cyan-12"  bg-color="red-10" rounded filled v-model="answer.mainWord" label="Main word"></q-input>

      <div class=" row col-12">
        <div class="row col">
          <div class="col column" v-for="i in 8" :key="i">
            <q-input outlined class="col" v-model="answer.stepOneWord[2*(i-1)]" bg-color="orange-6"></q-input>
            <q-input outlined class="col" v-model="answer.stepOneWord[i+(i-1)]" bg-color="orange-6"></q-input>
          </div>
        </div>
      </div>

       <div class=" row col-12">
         <q-input outlined bg-color="yellow-4" class="col" v-model="answer.stepTwoWord[i-1]" v-for="i in 8" :key="i"></q-input>
       </div>

     <div class=" row col-12">
       <q-input outlined bg-color="light-green" class="col" v-model="answer.stepThreeWord[i-1]" v-for="i in 4" :key="i"></q-input>
     </div>

     <div class=" row col-12">
       <q-input outlined bg-color="cyan-7" class="col" v-model="answer.stepFourWord[i-1]" v-for="i in 2" :key="i"></q-input>
     </div>

     <q-input class="col-12 text-h4" color="grey-10" bg-color="deep-purple-13"  filled v-model="answer.resultWord" label="Result word"></q-input>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ResultDisplay",
    props: {
      answer:{
        default: {
        mainWord:'',
          stepOneWord:  ['','','','','','','','','','','','','','','','',],
          stepTwoWord:  ['','','','','','','','',],
          stepThreeWord:['','','',''],
          stepFourWord: ['',''],
          resultWord: ''
        },
      }
      },
    data(){
      return{


      }
    },

    mounted(){

    }
  }
</script>

<style scoped>

</style>
