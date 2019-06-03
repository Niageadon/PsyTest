<template>
  <div>


    <div class="row justify-center">


      <q-input :dense="true" class="col-md-8 col-xs-11 q-my-lg text-h5">Filter</q-input>

      <q-card style="cursor: pointer" @click="showRecord(i)" v-for="(i, index) in arrData" :key="index" dark bordered class="card q-ma-xs bg-grey-9 my-card col-md-4 col-xs-11">
        <q-card-section>
          <div class="text-h6">Main word: {{i.mainWord}}</div>
          <div class="text-h7">Result word: {{i.resultWord}}</div>
        </q-card-section>

        <q-separator dark inset></q-separator>
        <q-card-section>
          Date: {{i.time.Date}}
        </q-card-section>
      </q-card>

    </div>

    <q-dialog
        v-model="dialog"
        persistent
        transition-show="slide-up"
        transition-hide="slide-down"
    >
      <q-card style="min-width: 90%" class="row justify-center">

        <resultDisplay class="col-11" v-bind:answer="selectedRecord"></resultDisplay>

        <histogramm class="col-11" v-if="this.selectedRecord.resultWord" :input-array="setDataForHistogramm"> </histogramm>

        <q-separator class="col-12"></q-separator>
        <q-card-actions>
          <q-btn @click="dialog = false" flat>Close</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>


  </div>
</template>

<script>
  import resultDisplay from '../Components/ResultDisplay'
  import histogramm from '../Components/Histogramm'


  export default {
    name: "History",

    components:{
      resultDisplay,
      histogramm
    },

    data(){
      return{
        dialog: false,
        selectedRecord: {
          stepOneWord:  ['','','','','','','','','','','','','','','','',],
          stepTwoWord:  ['','','','','','','','',],
          stepThreeWord:['','','',''],
          stepFourWord: ['',''],
          resultWord: '',
          time: {stepTwo:[], stepThree:[], stepFour:[], resultStep: {}, Date: ''}
        },
        filterWord: '',
      }
    },

    methods:{
    getHistoryData(){
      let userData = false;
      //setTimeout(() =>{this.$store.dispatch('getAMRecords').catch(e=>{console.log(e)})}, delay)
      let getData = setInterval(() =>{
        if(this.$store.getters.USER) {
          userData = true}
        if(userData) {
          this.$store.dispatch('getAMRecords');
          clearInterval(getData);
        }
      }, 500)
    },

      showRecord(record){
        this.selectedRecord = record;
        this.dialog = true
      },


    },

    computed:{
      arrData(){
        return this.$store.getters.AMHISTORY
      },

      setDataForHistogramm(){
        if(this.selectedRecord.resultWord){
          let data = [];
          // пишим данные по второму этапу
          for (let i = 0; i < 8; i++){
            let obj = {};
            obj.x = 's2w' + (i+1);
            obj.y = (this.selectedRecord.time.stepTwo[i]/1000).toFixed(2);
            obj.z = '' + this.selectedRecord.stepOneWord[i*2] + ' + ' +
              this.selectedRecord.stepOneWord[i*2+1] + ' = ' + this.selectedRecord.stepTwoWord[i];
            data.push(obj);
          }
          // пишим данные по третьему этапу
          for (let i = 0; i<4; i++){
            let obj = {};
            obj.x = 's3w' + (i+1);
            obj.y = (this.selectedRecord.time.stepThree[i]/1000).toFixed(2);
            obj.z = '' + this.selectedRecord.stepTwoWord[i*2] + ' + ' +
              this.selectedRecord.stepTwoWord[i*2+1] + ' = ' + this.selectedRecord.stepThreeWord[i];
            data.push(obj);
          }
          // пишим данные по четвёртому этапу
          for (let i = 0; i<2; i++){
            let obj = {};
            obj.x = 's4w' + (i+1);
            obj.y = (this.selectedRecord.time.stepFour[i]/1000).toFixed(2);
            obj.z = '' + this.selectedRecord.stepThreeWord[i*2] + ' + ' +
              this.selectedRecord.stepThreeWord[i*2+1] + ' = ' + this.selectedRecord.stepFourWord[i];
            data.push(obj);
          }
          let obj = {};
          obj.x = 'result';
          obj.y = (this.selectedRecord.time.resultStep/1000).toFixed(2);
          obj.z = '' + this.selectedRecord.stepFourWord[0] + ' + ' +
            this.selectedRecord.stepFourWord[1] + ' = ' + this.selectedRecord.resultWord;
          data.push(obj);
          return data
        }
        return 0
      }

    },

    mounted(){
      this.getHistoryData();
    }
  }
</script>

<style scoped>
 .card{

 }
  .card:hover{
    box-shadow: 0 0 15px rgba(213, 7, 6, 0.79); /* Параметры тени */
  }
</style>
