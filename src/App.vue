<template>
  <q-layout view="lHh Lpr lFf">



   <q-page-container>


     <router-view/>
    </q-page-container>
    <h1>{{getWidth}}</h1>
  </q-layout>
</template>

<script>
import HelloWorld from './components/AssociationsMethod/MainPage.vue'
import test from './components/Test.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
    test
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      width: 0
    }
  },

  computed:{
    getWidth(){
      if(document.body.clientWidth> 1000) {return 'f'}
      else return 'ff'
    },


  },

  watch:{
    width(){
      console.log(this.width)
    }
  }
}
</script>

<style>
</style>
