const BASE_URL = "http://localhost:3002/";

import axios from "axios";

const MenuAl = async (Menu) => {
  return await axios
    .get(`${BASE_URL}api/MenuAl`, Menu)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err
    })
}

export { MenuAl }
