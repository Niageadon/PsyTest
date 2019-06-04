<template>
<div>
  <div class="row justify-center">

    <q-img
        :src="man"
       ></q-img>

  </div>


  <!--<img src="../../../assets/man.jpg" height="542" width="1566"/>
--></div>
</template>

<script>
  export default {
    name: "Test",

    data(){
      return{
        url: 'https://placeimg.com/500/300/nature',
        man1: '../../../assets/man.jpg',
        man: 'https://pp.userapi.com/c840429/v840429309/24b79/C-j6ibA9-mY.jpg',
      }
    }
  }
</script>

<style scoped>

</style>
