import { createStore } from 'vuex'
import MenuModule from "./Modules/Menü"
import AdminModule from "./Modules/Admin"
import SiparisModule from "./Modules/Siparis"
const store = createStore({
  modules: {
    Menu: MenuModule,
    Admin: AdminModule,
    Siparis: SiparisModule
  }
});

export default store;
