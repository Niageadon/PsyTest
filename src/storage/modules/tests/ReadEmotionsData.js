import  * as fireBase from 'firebase/app'
import 'firebase/database'
import userState from "../user";
import ar from "quasar/lang/ar";
//const fb = fireBase.firestore();

export default {
  namespaced: true,
  state: {
  records: [{a:'d'}],
  },

  getters: {
  RECORD(state){
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
      /////////////////////////////////////////////
      // Проверяем наличие записи с текущей датой, делая запрос на сервер
      //    | если нету, то заполняем данные и загружаем на сервер
      //    | есть есть, то выгружаем имеющиеся данные, редактируем их и отправвляем на сервер обновлённую версию
      /////////////////////////////////////////////
      const fb = fireBase.firestore();
      //commit('setWriteDone', true);               //забираем данные из текстового редактора
      //let newRecord = {date:'2019-04-01'};
      // check for date duplicate

        /* await fb.collection('users').doc(userID).collection('records').doc('data')
          .collection(recordType).doc(newRecord.date).get()*/



      try
      {
        //console.log(newRecord)
        await fb.collection("root").doc('admin').collection('testData').doc('ReadEmotions')
          .collection('Data').doc().set(payload);
      }
      catch (e) {
        throw e
      }




      //commit('setWriteDone', false);

    },

    async getRERecords({commit}){
      //commit('setLoading', true);
      let records = {};
      const FB = fireBase.firestore().collection("root").doc('admin').collection('testData').doc('ReadEmotions')
        .collection('Data');//.doc().collection('2019-04-19')//.doc('data');


      try{
        // Получаем данные с FB
        const note      = await FB.get();

        // Заполняем объект данными
        // Загрузка идёт с конца, для упрощения последующей сортировки
        const arrNote  = note.docs.map(doc => ({/*__id: doc.id, */...doc.data()}));
        commit('setRecord', arrNote);
        console.log(1, arrNote);
        for(let i = arrNote.length - 1; i > -1; i--) {
          //records.note[arrNote[i].date] = arrNote[i]
        }


      }
      catch (e) {
        throw e;
        //console.log(e)
      }
    }

  }
}
