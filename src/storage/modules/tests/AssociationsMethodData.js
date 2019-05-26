import  * as fireBase from 'firebase/app'
import 'firebase/database'
import userState from '../user'
//const fb = fireBase.firestore();

export default {
  state: {
    amHistory:[],
  },

  getters: {
    AMHISTORY: state =>{
      return state.amHistory;
    }

  },

  mutations: {

  },



  actions: {
    async NewAMRecord({state, commit}, payload){
      /////////////////////////////////////////////
      // Проверяем наличие записи с текущей датой, делая запрос на сервер
      //    | если нету, то заполняем данные и загружаем на сервер
      //    | есть есть, то выгружаем имеющиеся данные, редактируем их и отправвляем на сервер обновлённую версию
      /////////////////////////////////////////////
      console.log(payload)
      const fb = fireBase.firestore();
      //commit('setWriteDone', true);               //забираем данные из текстового редактора
      const userID = userState.state.user;
      //let newRecord = {date:'2019-04-01'};
      let test = {};
      // check for date duplicate

        /* await fb.collection('users').doc(userID).collection('records').doc('data')
          .collection(recordType).doc(newRecord.date).get()*/


      if(state.record === ''){throw "body is empty"}

      try
      {
        //console.log(newRecord)
        await fb.collection("root").doc('users').collection(userID).doc('userData')
          .collection('AssociationsMethod').doc('1').set(payload);

      }
      catch (e) {
        throw e
      }




      //commit('setWriteDone', false);

    },
  }
}
