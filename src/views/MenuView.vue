<template>
  <NavBar />
  <CardList>Merhaba</CardList>
  <b-button pill variant="primary"
    ><router-link to="/SepetView">Sepet</router-link></b-button
  >
  <div>
    {{ bilgi }}
  </div>

  <button @click="BilgileriAl">Paylasim getir</button>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { MenuAl } from "@/services/MenuAl";
export default {
  components: {
    NavBar,
  },
  methods: {
    async BilgileriAl() {
      await MenuAl()
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
};
</script>

