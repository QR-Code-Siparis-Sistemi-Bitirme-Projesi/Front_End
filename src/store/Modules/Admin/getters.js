export default {
    girisYapildiMi(state) {
      return !!state.kullanici;
    },
    tokenAl(state) {
      return state.kullanici.tokens;
    },
  };
  