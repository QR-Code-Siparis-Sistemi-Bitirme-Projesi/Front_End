import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      storeSiparisler: [],
      hataObj: { status: "", mesaj: "" },
    };
  },
  mutations,
  actions,
  getters,
};
