import { girisYap, UrunEkle, UrunSil } from "@/services/AdminService";

export default {
  async AdminGirisi(context, kullanıcı) {
    await girisYap(kullanıcı)
      .then((resKullanici) => {
        // console.log("response - ", resKullanici);
        context.commit("KullaniciDepola", resKullanici); //mutasyon çağırma
        localStorage.setItem("kullanici", JSON.stringify(resKullanici.data.mesaj));
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
      .then((response) => {
        console.log("Ürün Silindi - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  }
};
