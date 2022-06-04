import { createStore } from 'vuex'
import MenuModule from "./Modules/Menü"
import AdminModule from "./Modules/Admin"

const store = createStore({
  modules: {
    Menu: MenuModule,
    Admin: AdminModule
  }
});

export default store;
