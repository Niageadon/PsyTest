<template>
  <div>
  <LineChart style="width: 800px" :chart-data="datacollection"></LineChart>
  </div>
</template>

<script>
  import LineChart from '../Components/LineChart.js'
  export default {
    name: "Histogramm",

    components:{
      LineChart
    },

    data(){
      return{
        datacollection: null,

      }
    },

    methods:{
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },


      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#a7f8f1',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }}
    },

    mounted(){
      this.fillData()
    }
  }
</script>

<style scoped>

</style>
