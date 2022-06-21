import { SiparisAl } from "@/services/SiparisService.js";

export default {
  async SiparisleriAl(context) {
    await SiparisAl()
      .then((responseData) => {
        context.commit("SiparisDepola", responseData);
        console.log(responseData);
      })
      .catch((err) => {
        context.commit("SiparisDepola", err);
        throw new Error(err);
      });
  },


};
