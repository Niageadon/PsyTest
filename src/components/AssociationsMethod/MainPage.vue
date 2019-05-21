<template>
<div>
  <div class="row justify-center">
    <q-card class="q-my-md col-md-8 cols-sm-12" v-if="currentStage === 0">
      <q-form
        class="row justify-center q-gutter-xs"
        @submit="completeFirstStage">
          <div class="column col-md-11 self-start justify-center q-gutter-md">
            <div class=" row justify-center q-gutter-xs">
              <q-input
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                  class="q-mt-lg col-md-7 col-xs-10" filled v-model="answer.mainWord" label="Main word">
              </q-input>
            </div>
            <div class="row justify-around ">
              <q-input
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                  class="col-md-5 col-xs-10"
                  v-for="(word, i) in firstStage" :key="i"  filled v-model="firstStage[i]">
              </q-input>
            </div>
            <q-btn class="q-mb-md" label="Submit" type="submit" color="primary"></q-btn>
          </div>
      </q-form>
    </q-card> <!-- Первый шаг: пишем главное слово и 16 ассоциаций к нему-->

    <q-card class="q-mt-lg col-md-7 col-sm-12" v-if="currentStage === 1">
      <q-form
          @submit="completeSecondStage">
        <q-linear-progress stripe style="height: 10px" :value="secondStageProgress"></q-linear-progress>
        <q-tab-panels v-model="secondStageCounter" animated>
          <q-tab-panel v-for="(step, i) in secondStage" :key="i" class="row wrap justify-around" :name="i">
            <q-list class="col-md-5 col-sm-12" bordered separator >
              <q-item clickable>
                <q-item-label>{{answer.stepOneWord[+(i*2)]}}</q-item-label>
              </q-item>
              <q-item clickable>
                <q-item-label>{{answer.stepOneWord[+(i*2)+1]}}</q-item-label>
              </q-item>
            </q-list>
            <q-input
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col-md-5 col-sm-12" rounded outlined v-model="secondStage[i]" label="association">
            </q-input>
          </q-tab-panel>

        </q-tab-panels>
        <q-card-actions>
          <q-btn type="submit" flat>Next step</q-btn>
        </q-card-actions>
      </q-form>
    </q-card> <!-- Второй этап: 8 ассоциаций к 16 полученным ранее словам -->

    <q-card class="q-mt-lg col-md-7 col-sm-12" v-if="currentStage === 2">
      <q-form
          @submit="completeThirdStage">
        <q-linear-progress stripe style="height: 10px" :value="thirdStageProgress"></q-linear-progress>
        <q-tab-panels v-model="thirdStageCounter" animated>
          <q-tab-panel v-for="(step, i) in thirdStage" :key="i" class="row wrap justify-around" :name="i">
            <q-list class="col-md-5 col-sm-12" bordered separator >
              <q-item clickable>
                <q-item-label>{{answer.stepTwoWord[+(i*2)]}}</q-item-label>
              </q-item>
              <q-item clickable>
                <q-item-label>{{answer.stepTwoWord[+(i*2)+1]}}</q-item-label>
              </q-item>
            </q-list>
            <q-input
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col-md-5 col-sm-12" rounded outlined v-model="thirdStage[i]" label="association">
            </q-input>
          </q-tab-panel>

        </q-tab-panels>
        <q-card-actions>
          <q-btn type="submit" flat>Next step</q-btn>
        </q-card-actions>
      </q-form>
    </q-card> <!-- Третий этап: 4 ассоциации к 8 полученным ранее словам -->

    <q-card class="q-mt-lg col-md-7 col-sm-12" v-if="currentStage === 3">
      <q-form
          @submit="completeFourthStage">
        <q-linear-progress stripe style="height: 10px" :value="fourthStageProgress"></q-linear-progress>
        <q-tab-panels v-model="fourthStageCounter" animated>
          <q-tab-panel v-for="(step, i) in fourthStage" :key="i" class="row wrap justify-around" :name="i">
            <q-list class="col-md-5 col-sm-12" bordered separator >
              <q-item clickable>
                <q-item-label>{{answer.stepThreeWord[+(i*2)]}}</q-item-label>
              </q-item>
              <q-item clickable>
                <q-item-label>{{answer.stepThreeWord[+(i*2)+1]}}</q-item-label>
              </q-item>
            </q-list>
            <q-input
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col-md-5 col-sm-12" rounded outlined v-model="fourthStage[i]" label="association">
            </q-input>
          </q-tab-panel>

        </q-tab-panels>
        <q-card-actions>
          <q-btn type="submit" flat>Next step</q-btn>
        </q-card-actions>
      </q-form>
    </q-card> <!-- Четвёртый этап: 2 ассоциации к 4 полученным ранее словам -->

    <q-card class="q-mt-lg col-md-7 col-sm-12" v-if="currentStage === 4">
      <q-form
          @submit="completeFinalStage">
        <q-linear-progress stripe style="height: 10px" :value="1"></q-linear-progress>
        <q-tab-panels :value="1" animated>
          <q-tab-panel class="row wrap justify-around" :name="1">
            <q-list class="col-md-5 col-sm-12" bordered separator >
              <q-item clickable>
                <q-item-label>{{answer.stepFourWord[0]}}</q-item-label>
              </q-item>
              <q-item clickable>
                <q-item-label>{{answer.stepFourWord[1]}}</q-item-label>
              </q-item>
            </q-list>
            <q-input
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="col-md-5 col-sm-12" rounded outlined v-model="finalStage" label="association">
            </q-input>
          </q-tab-panel>

        </q-tab-panels>
        <q-card-actions>
          <q-btn type="submit" flat>Complete</q-btn>
        </q-card-actions>
      </q-form>
    </q-card> <!-- Финальный этап этап: ассоциация к 2 полученным ранее словам -->

    <div v-if="currentStage === 5" class="row justify-center col-11 q-mt-lg textCenter">
      <div class="row justify-center col-12 q-col-gutter-sm ">
         <q-input class="col-12 text-h4" color="cyan-12"  bg-color="deep-purple-13" rounded filled v-model="answer.mainWord" label="Main word"></q-input>

        <div class=" row col-12">
          <q-input outlined class="col" v-model="answer.stepOneWord[i-1]" bg-color="cyan-7" v-for="i in 8" :key="i"></q-input>
        </div> <!--младший "байт" первого этапа-->

        <div class=" row col-12">
          <q-input outlined class="col" v-model="answer.stepOneWord[i+7]" bg-color="cyan-7" v-for="i in 8" :key="i"></q-input>
        </div> <!--старший "байт" первого этапа-->

        <div class=" row col-12">
          <q-input outlined bg-color="green-6" class="col" v-model="answer.stepTwoWord[i-1]" v-for="i in 8" :key="i"></q-input>
        </div>

        <div class=" row col-12">
          <q-input outlined bg-color="yellow-4" class="col" v-model="answer.stepThreeWord[i-1]" v-for="i in 4" :key="i"></q-input>
        </div>

        <div class=" row col-12">
          <q-input outlined bg-color="orange-6" class="col" v-model="answer.stepFourWord[i-1]" v-for="i in 2" :key="i"></q-input>
        </div>

        <q-input class="col-12 text-h4" color="grey-10" bg-color="red-10"  filled v-model="answer.resultWord" label="Result word"></q-input>
        <!--<div class="col-1" v-for="i in 8" :key="i">{{answer.stepOneWord[i+7]}}</div>-->
      </div>

    </div>

  </div>
</div>
</template>



<script>
export default {
  name: 'AssociationsMethod',
  data(){
    return{
      currentStage: 0,
      // расчет раздеелён на несколько этапов:
      // 1 - ввод 16 ассоциаций,
      // 2 - подбор 8 ассоциаций для слов первого этапа
      // 3 - подбор 4 ассоциаций...
      // 4 - подбор 2 ассоциаций...
      // 5 - финальный этап
      firstStage:{0:'', 1:'', 2:'', 3:'', 4:'', 5:'',6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 13:'', 14:'', 15:''},
      secondStage:{0:'', 1:'', 2:'', 3:'', 4:'', 5:'',6:'', 7:''},
      secondStageCounter: '0',
      secondStageProgress: 0,

      thirdStage:{0:'', 1:'', 2:'', 3:''},
      thirdStageCounter: '0',
      thirdStageProgress: 0,

      fourthStage:{0:'', 1:''},
      fourthStageCounter: '0',
      fourthStageProgress: 0,

      finalStage: '',

      answer:{
        mainWord:'',
        stepOneWord:  ['','','','','','','','','','','','','','','','',],//['','','','','','','','','','','','','','','','',],
        stepTwoWord:  ['1','2','3','4','5','6','7','8',],
        stepThreeWord:['3','3','2','2'],
        stepFourWord: ['1','2'],
        resultWord: ''
      },

    }
  },

  methods: {
    completeFirstStage(){
      let array=[];
      // добавляем в массив слова из первого шага

      for(let i = 0; i < 16; i++){
        array.push(this.firstStage[i])
      }
      // перетасовка элементов массива
      //array.sort(this.compareRandom);
      this.answer.stepOneWord = array;
      this.currentStage = 1;

    },

    completeSecondStage(){
      this.secondStageProgress = this.secondStageCounter / 7 + 1/7;
      this.secondStageCounter = + this.secondStageCounter + 1;
      this.secondStageCounter = this.secondStageCounter.toString();

      if(this.secondStageCounter==='8'){
        let array = [];
        for(let i = 0; i < 8; i++){
          array.push(this.secondStage[i])
        }
        //array.sort(this.compareRandom);
        this.answer.stepTwoWord = array;
        this.currentStage = 2;
      }
    },

    completeThirdStage(){
      this.thirdStageProgress = this.thirdStageCounter / 3 + 1/3;
      this.thirdStageCounter = + this.thirdStageCounter + 1;
      this.thirdStageCounter = this.thirdStageCounter.toString();

      if(this.thirdStageCounter==='4'){
        let array = [];
        for(let i = 0; i < 4; i++){
          array.push(this.thirdStage[i])
        }
       // array.sort(this.compareRandom);
        this.answer.stepThreeWord = array;
        this.currentStage = 3;
      }
    },

    completeFourthStage(){
      this.fourthStageProgress = this.fourthStageCounter / 2 + 1/2;
      this.fourthStageCounter = + this.fourthStageCounter + 1;
      this.fourthStageCounter = this.fourthStageCounter.toString();

      if(this.fourthStageCounter==='2'){
        let array = [];
        for(let i = 0; i < 2; i++){
          array.push(this.fourthStage[i])
        }
        //array.sort(this.compareRandom);
        this.answer.stepFourWord = array;
        this.currentStage = 4;
      }
    },

    completeFinalStage(){
        this.answer.resultWord = this.finalStage[0];
        console.log(this.answer);
      this.currentStage = 5;
    },



    compareRandom(a, b) {
      // ф-я для случайной сортировки
      return Math.random() - 0.5;
    }




  }
}
</script>

<style>
  .textCenter{
    text-align: center;
  }
</style>
