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
      { Urun: Menu.Urun, Fiyat: Menu.Fiyat, İçindekiler: Menu.cikacak, tabIndex: Menu.tabIndex },
      {
        headers: headerUret(),
      }
    )
    .then(() => {
      console.log("Ürün - ", Menu.Urun);
      console.log("Fiyat - ", Menu.Fiyat);
      console.log("tabIndex - ", Menu.cikacak);
      console.log("tabIndex - ", Menu.tabIndex);
    });
};

const UrunSil = async (silinecek) => {
  return await axios
    .post(`${BASE_URL}api/UrunSil`, {
      id: silinecek.id, tabIndex: silinecek.tabIndex,
    },
      {
        headers: headerUret(),
      }
    )
};

const SiparisSil = async (id) => {
  return await axios
    .post(`${BASE_URL}api/siparisSil`, { id },
      {
        headers: headerUret(),
      })
};

const AMenuAl = async (Menu) => {
  return await axios
    .get(`${BASE_URL}api/MenuAl`, Menu, /*{
      // headers: headerUret(),
    }*/
  )
    .then((response) => {
      console.log("servis - ", response)
      return response;
    })
    .catch((err) => {
      throw err
    })
}
const MenuDuzenle = async (menu) => {
  console.log("servis - ", menu)
  return await axios
    .put(`${BASE_URL}api/UrunDuzenle`,
      { id: menu.id, Urun: menu.Urun, Fiyat: menu.Fiyat, tabIndex: menu.tabIndex })
}

export { girisYap, UrunEkle, UrunSil, SiparisSil, AMenuAl, MenuDuzenle };
