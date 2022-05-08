const BASE_URL = "http://localhost:3002/";

const paylasimlariGetir = async () => {
  return await fetch(`${BASE_URL}api/bilgiler`)
    .then(async (response) => {
      if (response.status === 200) {
        /**
         * burada tekrardan bekletmeye gerek yok
         * return await response.json();*/
        return response.json(); //parse
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
};

module.exports = { paylasimlariGetir };
