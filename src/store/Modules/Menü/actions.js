import { MenuAl } from "@/services/MenuService.js";

export default {
    async BilgileriAl(context) {
        await MenuAl()
            .then((responseData) => {
                context.commit("MenuDepola", responseData);
                console.log(responseData)
            })
            .catch((err) => {
                context.commit("MenuDepola", err);
                throw new Error(err);
            });
    },


} 