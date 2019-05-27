<template>
  <div>
    <div  class="row justify-center">
      <q-card class="bg-blue-grey-4 q-mt-md-xl q-mt-xs-none col-md-8 cols-sm-12" v-if="currentStage === 0">
        <q-form
            class="row justify-center q-gutter-xs"
            @submit="completeFirstStage">
          <div class="row col-md-11 self-start justify-center q-gutter-md">
            <q-input
                :rules="[ val => val && val.length > 0 || 'Please type something']"
                class="q-mt-lg q-pt-lg col-md-7 col-xs-10 text-h6"
                bg-color="blue-grey-2" filled v-model="answer.mainWord" label="Main word">
            </q-input>
            <div class="row justify-around ">
              <q-input
                  lazy-rules bg-color="blue-grey-2"
                  :rules="[ val => val && val.length > 0 || 'Please type something']"
                  class="col-md-5 col-xs-10"
                  v-for="(word, i) in firstStage" :key="i"  filled v-model="firstStage[i]">
              </q-input>
            </div>
            <q-btn class="col-11 q-mb-md" label="Next step" type="submit" color="deep-purple-10"></q-btn>
          </div>
        </q-form>
      </q-card> <!-- Первый шаг: пишем главное слово и 16 ассоциаций к нему-->

      <q-card class=" q-mt-lg col-md-7 col-sm-12" v-if="currentStage === 1">
        <q-form
            @submit="completeSecondStage">
          <q-linear-progress stripe style="height: 10px" :value="secondStageProgress"></q-linear-progress>
          <q-tab-panels class="" v-model="secondStageCounter" animated>
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

      <resultDisplay v-if="currentStage === 5" :answer="answer"></resultDisplay>

    </div>


    <div>sec{{time.second}}</div>
    <div>sec{{time.mSecond}}</div>

  </div>
</template>

<script>
  import resultDisplay from '../Components/ResultDisplay'
  export default {
    name: "Test",

    components:{
      resultDisplay
    },
    data(){
      return{
        time: {second: 0, mSecond: 0},
        timerIsWork: false,
        currentStage: 0,
        // расчет раздеелён на несколько этапов:
        // 0 - ввод 16 ассоциаций,
        // 1 - подбор 8 ассоциаций для слов первого этапа
        // 2 - подбор 4 ассоциаций...
        // 3 - подбор 2 ассоциаций...
        // 4 - финальный этап
        // 5 - отображение результата
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
          stepTwoWord:  ['','','','','','','','',],
          stepThreeWord:['','','',''],
          stepFourWord: ['',''],
          resultWord: '',
          time: {stepTwo:[], stepThree:[], stepFour:[], resultStep: {}, currentDate: ''}
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
        // запускаем таймер для следующих этапов
        this.timerIsWork = true;
        this.getTimeInterval();
      },

      completeSecondStage(){
        this.secondStageProgress = this.secondStageCounter / 7 + 1/7;
        this.secondStageCounter = + this.secondStageCounter + 1;
        this.secondStageCounter = this.secondStageCounter.toString();
        // таймер
        const second = this.time.second;
        const mSecond = this.time.mSecond;
        this.answer.time.stepTwo.push({second, mSecond});
        this.refreshTimer();

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
        // таймер
        const second = this.time.second;
        const mSecond = this.time.mSecond;
        this.answer.time.stepThree.push({second, mSecond});
        this.refreshTimer();

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
        // таймер
        const second = this.time.second;
        const mSecond = this.time.mSecond;
        this.answer.time.stepFour.push({second, mSecond});
        this.refreshTimer();

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
        // таймер
        const second = this.time.second;
        const mSecond = this.time.mSecond;
        this.answer.time.resultStep = {second, mSecond};
        this.refreshTimer();
        this.timerIsWork = false;

        this.answer.resultWord = this.finalStage;
        localStorage.setItem('TestData', JSON.stringify(this.answer));
        //localStorage.TestData = this.answer;
        this.currentStage = 5;
        this.$store.dispatch('NewAMRecord', this.answer)
      },

      getTimeInterval(){
        let timerId = setInterval(() =>{
          if (!this.timerIsWork) {clearTimeout(timerId)}
          this.time.mSecond += 200;
          if (this.time.mSecond === 1000){this.time.second++; this.time.mSecond = 0;}
        }, 200);

      },

      refreshTimer(){
        this.time.second = 0;
        this.time.mSecond = 0;
      },

      compareRandom() {
        // ф-я для случайной сортировки
        return Math.random() - 0.5;
      },

      getCurrentDate(){
        // auto select current date
        let currentDate = new Date;
        let year = currentDate.getFullYear();
        let day = currentDate.getDate();
        day = (day.toString().length === 1)? '0' + day : day;
        let month = currentDate.getMonth() + 1;
        month = (month.toString().length === 1)? '0' + month : month;
        this.answer.time.currentDate = (year + '-' + month + '-' + day );
        console.log(this.answer.time.currentDate)
        //return(year + '-' + month + '-' + day )
      },



    },

    mounted(){
      this.getCurrentDate();
    }
  }
</script>

<style scoped>
  .textCenter{
    text-align: center;
  }
</style>
