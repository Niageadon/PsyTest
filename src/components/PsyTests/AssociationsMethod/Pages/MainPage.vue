<template>
<div >
  <div class="row col-12 q-gutter-md justify-center q-mt-md">
    <q-btn  class="col-md-6 col-xs-11" to="/AssociationsMethod/test">Start </q-btn>
    <q-btn  class="col-md-6 col-xs-11" to="/AssociationsMethod/history">Archive</q-btn>
  </div>
</div>
</template>



<script>


export default {
  name: 'AssociationsMethod',
  data(){
    return{
      currentRoute: '',
    }
  },


}
</script>

<style>

</style>
