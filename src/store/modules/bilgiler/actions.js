import { urunleriGetir } from "@/services/paylasimService.js";

export default {
  async BilgileriAl(context) {
    await urunleriGetir()
      .then((responseData) => {
        context.commit("SiparisDepola", responseData);
      })
      .catch((err) => {
        context.commit("SiparisDepola", err);
        throw new Error();
      });
  },
};
