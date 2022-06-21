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

const UrunSil = async (Menu) => {
  axios.post(`${BASE_URL}api/UrunSil`,
    {id: Menu.urun_id, tabIndex: Menu.tabIndex},
    {
        headers:headerUret()
    }
    .then(()=>{
        console.log("Silinen ürün: ",Menu.Urun);
        console.log("tabIndex", Menu.tabIndex);
    })
  )};


export { girisYap, UrunEkle, UrunSil };
