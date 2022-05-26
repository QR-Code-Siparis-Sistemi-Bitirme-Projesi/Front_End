<template>
  <NavBar />
  <CardList >Merhaba</CardList>
  <b-button pill variant="primary"
    ><router-link to="/SepetView">Sepet</router-link></b-button
  >
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
