const BASE_URL = "http://localhost:3002/";

const MenuAl = async () => {
  return await fetch(`${BASE_URL}api/MenuAl`)
    .then(async (response) => {
      console.log(response)
      if (response.status === 200) {
        return await response.json();//parse
        
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
    
};

module.exports = { MenuAl };
