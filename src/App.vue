<template>
  <q-layout  view="lHh Lpr lFf">
  <Toolbar></Toolbar>
<!--    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer"></q-btn>

        <q-toolbar-title>

          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>-->

    <q-drawer v-model="drawer" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>






   <q-page-container>


     <router-view/>
    </q-page-container>
    <h1>{{getWidth}}</h1>
  </q-layout>
</template>

<script>
import Toolbar from './components/System/Toolbar'
import Drawer from './components/System/Drawer'

export default {
  name: 'LayoutDefault',

  components: {
    Toolbar,
    Drawer
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
