import { SiparisAl } from "@/services/SiparisService";

export default {
    async BilgileriAl(context) {
        await SiparisAl()
            .then((responseData) => {
                context.commit("SiparisDepola", responseData);
                console.log(responseData)
            })
            .catch((err) => {
                context.commit("SiparisDepola", err);
                throw new Error(err);
            });
    },


} 