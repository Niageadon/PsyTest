<template>
  <div>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>

          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>
  </div>
</template>

<script>
  export default {
    name: "Toolbar",
    data(){
      return{
        drawer: true,
      }
    },

    methods:{
      setDrawer(){
        this.$store.dispatch('setDrawer');
      }
    }
  }
</script>

<style scoped>

</style>
