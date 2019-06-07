<template>
  <div >
    <div class="row justify-center q-gutter-md">
      <h4 class="col-10">New record</h4>
      <q-input v-model="url" class="col-10" label="Image URL"></q-input>
      <q-select v-model="emotion" class="col-10" :options="emotionsType" label="Standard"></q-select>
      <q-btn @click="sendNewRecord" class="col-8" label="Send to server"> </q-btn>
      <q-btn @click="getFromServer" class="col-8" label="Get records from server"> </q-btn>
    </div>

    <div v-for="(i, index) in records" :key="index">
      ff {{i}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "admin",

    data(){
      return{
        url: '',
        emotion: '',
        emotionsType: ['Радость', 'Удивление', 'Печаль', 'Гнев', 'Отвращение', 'Презрение', 'Страх'],
      }
    },

    methods:{
      sendNewRecord(){
        let record = {};
        record.url = this.url;
        record.emotion = this.emotion;
        this.$store.dispatch('NewRERecord', record);
      },

      getFromServer(){
        this.$store.dispatch('ReadEmotionsData/getRERecords');
      }
    },

    computed:{
      records(){
        console.log(this.$store.getters.ReadEmotionsData.RECORD);
        return this.$store.getters.ReadEmotionsData.RECORD;
      }
    }
  }
</script>

<style scoped>

</style>
