import store from "@/store";

export default function headerUret() {
  if (store.getters["auth/girisYapildiMi"]) {
    return {
      //token ları almamız gerekiyordu
      Authorization: `Bearer ${store.getters["auth/tokenAl"].access} ${store.getters["auth/tokenAl"].refresh}`,
    };
  }
  else return {};
}
