<template>
  <q-layout  view="hhh lpR fFf">
 <Toolbar></Toolbar>








   <q-page-container>
     <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import Toolbar from './components/System/Toolbar'

export default {
  name: 'LayoutDefault',

  components: {
    Toolbar,

  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      width: 0,
      left: true
    }
  },

  computed:{



  },

  watch:{
    width(){
      console.log(this.width)
    }
  },



  beforeMount(){
    if(localStorage.TestData){
      let data = JSON.parse(localStorage.getItem('TestData'));
      //this.$store.dispatch('setAssociationsMethod', data);
    }
  }
}
</script>

<style>
</style>
