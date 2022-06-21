const BASE_URL = "http://localhost:3003/";

import axios from "axios";

const SiparisAl = async (Menu) => {
  return await axios
    .get(`${BASE_URL}api/SiparisleriCagir`, Menu)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err
    })
}



export { SiparisAl }
