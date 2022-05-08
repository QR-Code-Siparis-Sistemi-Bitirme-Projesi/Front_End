import { createStore } from "vuex";
import bilgilerModule from "./modules/bilgiler"

const store = createStore({
  modules: {
    bilgiler: bilgilerModule,
    // auth,
  },
});

export default store;
