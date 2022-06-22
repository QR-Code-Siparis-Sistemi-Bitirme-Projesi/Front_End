<template>
  <MusteriMenuList></MusteriMenuList>
</template>

<script>
import MusteriMenuList from "../components/MusteriMenuList.vue";
export default {
  components: {
    MusteriMenuList,
  },
  methods: {
    masaNumarasiAl() {
      /**
       * QR koddan okutulduğunda şimdilik http://localhost/?masaNo=25 olarak açılacak
       * URL e parametre ekle istenirse ? kullanılır. masaNo adında bir parametre ekledik ve bunun değeri 25
       * console.log(this.$route.query); // konsola {masaNo: '25'} basar
       * console.log(this.$route.query.masaNo); //konsola 25 basar
       */

      // let sepet = {
      //   masaNo: this.$route.query.masaNo,
      // };

      localStorage.setItem("siparisler", JSON.stringify(this.$route.query));
    },
  },
  mounted() {
    this.masaNumarasiAl();
  },
};
</script>

<style>
</style>