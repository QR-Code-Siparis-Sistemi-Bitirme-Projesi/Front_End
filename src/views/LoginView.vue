<template>
  <cmpLogin @formuGonder="GirisYap">
    <p v-if="hata">{{ hata }}</p>
  </cmpLogin>
</template>

<script>
import cmpLogin from "@/components/GirisYap.vue";

export default {
  data() {
    return {
      hata: "",
    };
  },
  components: {
    cmpLogin,
  },
  methods: {
    GirisYap(e) {
      this.$store
        .dispatch("Admin/KullaniciGirisi", e) //action tetikler
        .then(() => {
          const redirectUrl = "/" + (this.$route.query.redirect || "admin");
          this.$router.push(redirectUrl);
        })
        .catch((err) => {
          this.hata = err;
        });
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>