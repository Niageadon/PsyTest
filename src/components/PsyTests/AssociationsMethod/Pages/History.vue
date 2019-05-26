<template>
  <div>
    <resultDisplay :answer="dataa"></resultDisplay>
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
        resultArray: [],
        dataa: {}
      }
    },

    mounted(){
    this.dataa = this.$store.getters.ASSOCIATIONMETHOD
      console.log(this.dataa)
    }
  }
</script>

<style scoped>

</style>
