const BASE_URL = "http://localhost:3003/";
// import headerUret from "../helpers/CreateHeader";
import axios from "axios";

const SiparisAl = async (siparis) => {
  return await axios
    .get(`${BASE_URL}api/siparisleriCagir`, siparis , /*{
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



export { SiparisAl }
