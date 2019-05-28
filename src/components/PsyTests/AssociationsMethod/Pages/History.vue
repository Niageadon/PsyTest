<template>
  <div>


    <div class="row justify-center">


      <q-input :dense="true" class="col-md-8 col-xs-11 q-my-lg text-h5">Filter</q-input>

      <q-card style="cursor: pointer" @click="boba" v-for="(i, index) in arrData" :key="index" dark bordered class="card q-ma-xs bg-grey-9 my-card col-md-5 col-xs-11">
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
  </div>
</template>

<script>
  import resultDisplay from '../Components/ResultDisplay'
  export default {
    name: "History",

    components:{
      resultDisplay
    },

    data(){
      return{
        archiveData: [],
        filterWord: '',
      }
    },

    methods:{
    getHistoryData(){
      let delay = this.$store.getters.USER? 1: 1500;
      setTimeout(() =>{this.$store.dispatch('getAMRecords')}, delay);
      setTimeout(() =>{ console.log('ff');}, 3000);

    },

      boba(){
        console.log('click')
      }
    },

    computed:{
      arrData(){
        return this.$store.getters.AMHISTORY
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
