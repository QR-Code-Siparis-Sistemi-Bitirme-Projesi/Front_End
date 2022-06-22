export default {
  SepeteEkle(context, urun) {
    console.warn("action - ", urun);
    context.commit("SepetGuncelle", urun);
  },
  SepetenCikart(context, urun) {
    console.warn("action - ", urun);
    context.commit("SepetGuncelle", urun);
  },
};
