const BASE_URL = "http://localhost:3003/";
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

export { girisYap };
