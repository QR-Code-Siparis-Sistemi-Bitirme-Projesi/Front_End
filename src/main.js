import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import NavBar from "@/components/layout/NavBar.vue";
import Card_v from "@/components/ui/Card";

const app = createApp(App);

app
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("NavBar", NavBar)
  .component("CardView", Card_v)
  .mount("#app");
