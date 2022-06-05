import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const AdminLocal = JSON.parse(localStorage.getItem("kullanici"));
const baslangicDegeri = AdminLocal ? AdminLocal : null;


export default {
  namespaced: true,
  state() {
    return {
      kullanici: baslangicDegeri,
      hataObj: { status: "", mesaj: "" },
    };
  },
  mutations,
  actions,
  getters,
};
