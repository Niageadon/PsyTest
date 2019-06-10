<!-- Страница добавления и удаления -->
<template>
  <div class="row justify-center">
    <q-card class=" col-11 q-mt-md bg-indigo-4">
      <q-card-section class=" row justify-center">
        <h4 class="col-6 q-mt-none text-center">New record</h4>
        <q-separator class="col-12"></q-separator>
      </q-card-section>
      <q-card-section class="row  justify-center q-gutter-md ">
        <q-img
            class=" just col-md-4 cold-xs-11 q-mt-md"
            :src="urlOutput">
        </q-img>
        <div class="row col-11 justify-center">
          <q-toggle
              class="col-3"
              v-model="urlMode"
              label="Google drive src"
              color="yellow">
          </q-toggle>
          <q-input v-model="urlInput" class="col-8" label="Image URL"></q-input>
        </div>
        <q-select v-model="emotion" class="col-10" :options="emotionsType" label="Emotion"></q-select>
        <q-btn @click="sendNewRecord" class="col-8 q-my-md bg-indigo-3" label="Send to server"> </q-btn>
      </q-card-section>
    </q-card>

    <q-card class="col-11 q-mt-lg  bg-indigo-2">
      <q-card-section class="row justify-center q-gutter-md">
        <q-btn @click="getFromServer" class="col-8 bg-indigo-4" label="Get records from server"> </q-btn>

        <q-card class="col-md-5 col-xs-11" v-for="(i, index) in records" :key="index">
          <q-card-section>
            <q-img
                class=" just"
                :src="i.url">
            </q-img>
            {{i.emotion}}
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "admin",

    data(){
      return{
        // для удобста ввода ссылок с google drive
        urlInput: '',
        urlOutput: '',
        urlMode: true,

        emotion: '',
        emotionsType: ['Радость', 'Удивление', 'Печаль', 'Гнев', 'Отвращение', 'Презрение', 'Страх'],
      }
    },

    methods:{
      sendNewRecord(){
        let record = {};
        record.url = this.urlOutput;
        record.emotion = this.emotion;
        this.$store.dispatch('ReadEmotionsData/NewRERecord', record);
      },

      getFromServer(){
        this.$store.dispatch('ReadEmotionsData/getRERecords');
      },

      boba(){
        console.log(this.$store.getters);
      }
    },

    computed:{
      records(){
        return this.$store.getters['ReadEmotionsData/RECORDSS'];
      },


    },

    watch:{
      urlInput(){
        if(this.urlMode)
        {
          let offset = this.urlInput.indexOf('id=');
          if(offset > 0){
            let id = this.urlInput.substring(offset, this.urlInput.length);
            this.urlOutput = 'http://drive.google.com/uc?export=view&' + id;
          }
        }
        else this.urlOutput = this.urlInput;
      }
    }
  }
</script>

<style scoped>

</style>
