<template>
  <NavBar />
  <card-list v-for=" urun in urunler" :key="urun">
    <div>
      burada gözükecek
      <li>
        <p> {{ urun.Fiyat }} </p>
        <p> {{ urun.Urun }} </p>
      </li>
    </div>
  </card-list>
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
          console.log(responseData.resData.ekstraObj);
          this.urunler = responseData.resData.ekstraObj
        })
        .catch((err) => {
          throw new Error(err);
        });
    },

  },
  mounted() {
    this.BilgileriAl();
  },
  data() {
    return {
      urunler: []
    };
  }
};
</script>

