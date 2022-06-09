const BASE_URL = "http://localhost:3003/";
import headerUret from "@/helpers/CreateHeader";
import axios from "axios";

const girisYap = async (admin) => {
    return await axios
        .post(`${BASE_URL}api/giris`, admin)
        .then((response) => {
            console.log("Giriş Yapıldı.")
            return response;
        })
        .catch((err) => {
            throw err.response.data.mesaj;
        });

};

const UrunEkle = async (Menu) => {

    console.log("Servis - ", Menu.Urun)
    return await axios
        .post(`${BASE_URL}api/UrunEkle`, { Urun: Menu.Urun, Fiyat: Menu.Fiyat, tabIndex: Menu.tabIndex }, {
            headers: headerUret(),
        })
        .then((response) => {
            console.log("SerRes _ ", Menu.tabIndex)
            return response;
        })
        .catch((err) => {
            throw err
        })
}

export { girisYap, UrunEkle };
