/**
 * Burada yapılanı anlayıp bana sunumdan sonra anlatacaksınız!!!
 */

export default {
  SepetGuncelle(state, payload) {
    // console.log("mutation length: ", state.sepettekiUrunler.length);

    if (payload.miktar === 0) {
      if (state.sepettekiUrunler.length === 1) {
        state.sepettekiUrunler = [];
      } else {
        state.sepettekiUrunler = state.sepettekiUrunler.filter((urunObj) => {
          return urunObj.Urun !== payload.Urun;
        });
      }
    } else {
      let urunEkliMi = false;

      state.sepettekiUrunler.find((urunObj) => {
        if (urunObj.Urun === payload.Urun) {
          urunEkliMi = true;
        }
      });

      if (urunEkliMi == false) {
        state.sepettekiUrunler.push(payload);
      } else {
        var urunIndex = state.sepettekiUrunler.findIndex(
          (x) => x.Urun == payload.Urun
        );

        let listedekiUrun = state.sepettekiUrunler[urunIndex];
        listedekiUrun.miktar = payload.miktar; 
        state.sepettekiUrunler[urunIndex] = listedekiUrun;
      }
    }

    const storage = localStorage.getItem("siparisler");

    if (storage) {
      localStorage.removeItem("siparisler");
      var sepet = {
        masaNo: JSON.parse(storage).masaNo,
        siparisler: state.sepettekiUrunler,
      };

      localStorage.setItem("siparisler", JSON.stringify(sepet));
    }

    // console.warn("mutation Güncelle", state.sepettekiUrunler);
    // console.warn("mutation local storage", storage);
  },
};
