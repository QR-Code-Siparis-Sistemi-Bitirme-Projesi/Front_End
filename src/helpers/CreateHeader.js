import store from "@/store";

export default function headerUret() {
  if (store.getters["Admin/girisYapildiMi"]) {
    return {
      //token ları almamız gerekiyordu
      Authorization: `Bearer ${store.getters["Admin/tokenAl"].access} ${store.getters["Admin/tokenAl"].refresh}`,
    };
  }
  else return {};
}
