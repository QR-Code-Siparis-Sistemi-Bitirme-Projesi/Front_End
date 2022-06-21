import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
import CardList from './components/CardList'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);

app
    .use(store)
    .use(router)
    .use(BootstrapVue3)
    .component("CardList", CardList)
    .mount("#app");

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('kullanici');
});
