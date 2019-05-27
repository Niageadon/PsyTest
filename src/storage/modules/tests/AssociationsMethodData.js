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
          .collection('AssociationsMethod').doc().set(payload);

      }
      catch (e) {
        throw e
      }




      //commit('setWriteDone', false);

    },

    async getAMRecords({commit}){
      //commit('setLoading', true);
      let userID = userState.state.user;
      let records = {note:{}, task:{}, reminder:{}, med:{}};
      const FB = fireBase.firestore().collection('root').doc('users').collection(userID)
        .doc('userData').collection('AssociationsMethod');//.doc().collection('2019-04-19')//.doc('data');


      try{
        // Получаем данные с FB
        const note      = await FB.get();

        // Заполняем объект данными
        // Загрузка идёт с конца, для упрощения последующей сортировки
        const arrNote  = note.docs.map(doc => ({/*__id: doc.id, */...doc.data()}));
        for(let i = arrNote.length - 1; i > -1; i--) {
          records.note[arrNote[i].date] = arrNote[i]
        }

        console.log(arrNote)
        //commit('setRecordsArray', records);
        commit('setLoading', false);

        //commit

      }
      catch (e) {
        commit('setLoading', false);
        throw e;
        //console.log(e)
      }
    }
  }
}
