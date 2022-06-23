import { girisYap, UrunEkle, UrunSil, SiparisSil, AMenuAl, MenuDuzenle, AsiparisEkle } from "@/services/AdminService";

export default {
  async AdminGirisi(context, kullanıcı) {
    await girisYap(kullanıcı)
      .then((resKullanici) => {
        // console.log("response - ", resKullanici);
        context.commit("KullaniciDepola", resKullanici); //mutasyon çağırma
        localStorage.setItem(
          "kullanici",
          JSON.stringify(resKullanici.data.mesaj)
        );
      })
      .catch((err) => {
        console.log("actions hata - ", err);
        throw err;
      });
  },
  async MenuyeEkle(_, param) {
    console.log("action - ", param);
    await UrunEkle(param)
      .then((response) => {
        console.log("response kayıt - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },

  async UrunKaldir(_, param) {
    console.log("action - ", param);
    await UrunSil(param)
      // .then((response) => {
      //   console.log("Ürün Silindi - ", response);
      // })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },

  async SiparisKaldir(_, param) {
    await SiparisSil(param)
      .then((response) => {
        console.log("Sipariş Silindi - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },
  async SiparisEkle(_, param) {
    console.log("action - ", param);
    await AsiparisEkle(param)
      .then((response) => {
        console.log("response kayıt - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },

  async BilgileriAl(context) {
    await AMenuAl()
      .then((responseData) => {
        context.commit("AMenuDepola", responseData);
        console.log(responseData)
      })
      .catch((err) => {
        context.commit("AMenuDepola", err);
        throw new Error(err);
      });
  },
  async MenuDuzenleme(_, param) {
    console.log("action - ", param);
    await MenuDuzenle(param)
      .then((response) => {
        console.log("response kayıt - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },

};
