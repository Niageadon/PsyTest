<template>
<div>


    <q-tab-panels v-model="tab" animated>

      <q-tab-panel v-for="(item, index) in records" :key="index" class="row justify-center q-gutter-md" :name="index">
        <q-img
          class="col-md-3 col-xs-11 just"
          :src="item.url">
        </q-img>
        <q-select class="col-md-3 col-xs-11"  v-model="emotion" :options="options" label="Emotion"></q-select>
        <div class="col-md-1 col-sm-0"></div>

        <q-btn class="col-5 c">Back</q-btn>
        <q-btn @click="nextStep" class="col-5">Next</q-btn>
      </q-tab-panel>



    </q-tab-panels>



  <!--<img src="../../../assets/man.jpg" height="542" width="1566"/>
--></div>
</template>

<script>
  export default {
    name: "Test",

    data(){
      return{
        inputData: [{imgUrl: '', answer: '',  }],
        answer: [],
        tab: '0',

        emotion: '',
        options: ['Радость', 'Удивление', 'Печаль', 'Гнев', 'Отвращение', 'Презрение', 'Страх'],
        url: 'https://placeimg.com/500/300/nature',
        man1: 'https://drive.google.com/uc?id=1q2AVfJAy_hrb8hoz1COovhF7igC2CiFo',
        man: 'https://pp.userapi.com/c840429/v840429309/24b79/C-j6ibA9-mY.jpg',
      }
    },

    methods:{
      nextStep(){
        this.answer[this.tab] = this.emotion;
        this.emotion = '';
        this.tab = (+this.tab+1).toString();

        console.log(this.tab)
      }
    },

    computed:{
      records(){
        return this.$store.getters['ReadEmotionsData/RECORDSS'];
      },


    },

    mounted(){
      this.$store.dispatch('ReadEmotionsData/getRERecords');
    }
  }
</script>

<style scoped>
  .img{
    max-width: 400px;
  }
</style>
