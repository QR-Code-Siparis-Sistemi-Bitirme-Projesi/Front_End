import { createStore } from "vuex";
import MenuModule from "./Modules/Menü";
import AdminModule from "./Modules/Admin";
import SiparisModule from "./Modules/Siparis";
import SepetModule from "./Modules/Sepet";
const store = createStore({
  modules: {
    Menu: MenuModule,
    Admin: AdminModule,
    Siparis: SiparisModule,
    Sepet: SepetModule,
  },
});

export default store;
