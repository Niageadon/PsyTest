<template>

</template>

<script>
  export default {
    name: "Drawer",

    data(){
      return{
      }
    },

    computed:{
      drawer(){
        return this.$store.getters.DRAWER
      }
    }
  }
</script>

<style scoped>

</style>
