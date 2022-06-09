import { girisYap, UrunEkle } from "@/services/AdminService";

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
  async MenuyeEkle(_, param, param1, param2) {
    await UrunEkle(param, param1, param2)
      .then((response) => {
        console.log("response kayıt - ", response);
      })
      .catch((err) => {
        console.log(err.response.data.hataMesaji);
        throw err.response.data.hataMesaji;
      });
  },
};
