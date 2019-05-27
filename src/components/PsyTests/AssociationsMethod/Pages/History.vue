<template>
  <div>


    <div class="row justify-center">


      <q-input :dense="true" class="col-md-8 col-xs-11 q-my-lg text-h5">Filter</q-input>

      <q-card style="cursor: pointer" @click="boba" v-for="i in 3" :key="i" dark bordered class="card q-ma-xs bg-grey-9 my-card col-md-5 col-xs-11">
        <q-card-section>
          <div class="text-h6">Main word: {{i}}</div>
          <div class="text-h7">Result word: {{i}}</div>
        </q-card-section>

        <q-separator dark inset></q-separator>
        <q-card-section>
          Date: {{i}}
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
      setTimeout(() =>{this.$store.dispatch('getAMRecords')}, delay)
    },

      boba(){
        console.log('click')
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
