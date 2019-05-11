<template>
  <q-layout view="lHh Lpr lFf">



   <q-page-container>


     <router-view/>
    </q-page-container>
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
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
