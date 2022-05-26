import { createStore } from 'vuex'
import { MenuAl } from '../services/MenuAl';

export default createStore({
  state: {
      storePaylasimlar: [],
      hataObj: { status: "", mesaj: "" },
  },
  getters: {
    MenuAl(state) {
      return state.storePaylasimlar;
    },
  },
  mutations: {
    PaylasimDepola(state, payload) {
      if (payload && payload.status === 200) {
        state.hataObj = {};
        state.storePaylasimlar = payload.resData;
      }
    },
  },
  actions: {
    async BilgileriAl(context) {
      await MenuAl()
        .then((responseData) => {
          context.commit("PaylasimDepola", responseData);
          console.log(responseData)
        })
        .catch((err) => {
          context.commit("PaylasimDepola", err);
          throw new Error(err);
        });
    },
  },
  modules: {
  }
})
