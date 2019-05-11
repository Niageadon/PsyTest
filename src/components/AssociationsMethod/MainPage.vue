<template>
<div>
  <q-form
    class="row justify-center q-gutter-xs"
    @submit="onSubmit"
    @reset="onReset">
      <div class="column col-md-7 col-xs-12 self-start justify-center q-gutter-md">
        <div class="row justify-center q-gutter-xs">
          <q-input
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              class="col-md-7 col-xs-10" filled v-model="mainWord" label="Main word">
          </q-input>
        </div>

        <div class="row justify-center q-gutter-xs">
          <q-input
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
              class="col-md-5 col-xs-10"
              v-for="(word, i) in answer_1" :key="i"  filled v-model="answer_1[i]">
          </q-input>
        </div>
        <q-btn label="Submit" type="submit" color="primary"></q-btn>
      </div>
  </q-form>
</div>
</template>

<style>
</style>

<script>
export default {
  name: 'AssociationsMethod',
  data(){
    return{
      options_1:{
        validated: false,
        wordStatus:[]
      },

      mainWord:'',
      answer_1:{
        word1:'', word2:'', word3:'', word4:'', word5:'', word6:'', word7:'', word8:'', word9:'',
        word10:'', word11:'', word12:'', word13:'', word14:'', word15:'', word16:'',
      }
    }
  },

  methods: {
    onSubmit () {

        console.log(this.answer_1)

    },

    onReset () {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
}
</script>
