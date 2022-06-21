const BASE_URL = "http://localhost:3003/";
import headerUret from "../helpers/CreateHeader";
import axios from "axios";

const girisYap = async (admin) => {
  return await axios
    .post(`${BASE_URL}api/giris`, admin)
    .then((response) => {
      console.log("Giriş Yapıldı. -", response.data.mesaj);
      return response;
    })
    .catch((err) => {
      throw err.response.data.mesaj;
    });
};

const UrunEkle = async (Menu) => {
  return await axios
    .post(
      `${BASE_URL}api/UrunEkle`,
      { Urun: Menu.Urun, Fiyat: Menu.Fiyat, tabIndex: Menu.tabIndex },
      {
        headers: headerUret(),
      }
    )
    .then(() => {
      console.log("Ürün - ", Menu.Urun);
      console.log("Fiyat - ", Menu.Fiyat);
      console.log("tabIndex - ", Menu.tabIndex);
    });
};

const UrunSil = async (silinecek) => {
  return await axios
    .delete(`${BASE_URL}api/UrunSil`, {
      id: silinecek.id,
      tabIndex: silinecek.tabIndex,
    })
    .then(() => {
      console.log("servis - ", this.id);
      console.log("servis -", this.tabIndex);
    });
};

const SiparisSil = async (id) => {
  return await axios
    .post(`${BASE_URL}api/siparisSil`, { id },
      {
        headers: headerUret(),
      })
    .then(() => {
      console.log("servis - ", this.id);
    });
};

export { girisYap, UrunEkle, UrunSil, SiparisSil };
