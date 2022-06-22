export default {
  siparisVarMi(state) {
    return state.sepettekiUrunler.length > 0 ? true : false;
  },
  sepetiAl(state) {
    return state.sepettekiUrunler;
  },
};
