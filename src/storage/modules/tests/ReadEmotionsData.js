import  * as fireBase from 'firebase/app'
import 'firebase/database'
import userState from "../user";
import ar from "quasar/lang/ar";
//const fb = fireBase.firestore();

export default {
  namespaced: true,
  state: {
  records: [],
  },

  getters: {
  RECORDSS(state){
    return state.records;
  }
  },

  mutations: {
    setRecord(state, payload){
      state.records = payload;
    }
  },



  actions: {
    async NewRERecord({state, commit}, payload){
      const fb = fireBase.firestore();
      try
      {
        //console.log(newRecord)
        await fb.collection("root").doc('admin').collection('testData').doc('ReadEmotions')
          .collection('Data').doc().set(payload);
      }
      catch (e) {
        throw e
      }


    },

    async getRERecords({commit}){
      //commit('setLoading', true);
      let records = {};
      const FB = fireBase.firestore().collection("root").doc('admin').collection('testData').doc('ReadEmotions')
        .collection('Data');//.doc().collection('2019-04-19')//.doc('data');


      try{
        const note      = await FB.get();

        const arrNote  = note.docs.map(doc => ({/*__id: doc.id, */...doc.data()}));
        commit('setRecord', arrNote);
        for(let i = arrNote.length - 1; i > -1; i--) {
          //records.note[arrNote[i].date] = arrNote[i]
        }


      }
      catch (e) {
        throw e;
        //console.log(e)
      }
    },

  }
}
