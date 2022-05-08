<template>
  <cmpListeleme :elemanlar="elemanlarList" />
</template>

<script>
import cmpListeleme from "@/components/Listeleme.vue";

export default {
  components: {
    cmpListeleme,
  },
  data() {
    return {
      elemanlarList: [],
    };
  },
  methods: {
    async siparisleriAl() {
      try {
        await this.$store.dispatch("bilgiler/BilgileriAl");
        /**
         * getter kullanımı
         * this.elemanlarList = this.$store.getters["bilgiler/paylasimlariGetir"]*/
        this.elemanlarList = this.$store.state.bilgiler.storePaylasimlar;
      } catch (err) {
        console.log("hata oluştu", err);
      }
    },
  },
  mounted() {
    //lifecycle hooks
    this.siparisleriAl();
  },
};
</script>

<style>
</style>