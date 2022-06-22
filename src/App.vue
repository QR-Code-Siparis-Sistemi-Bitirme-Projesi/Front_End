<template>
  <div>
    <button v-if="this.$store.getters['Sepet/siparisVarMi']" v-b-modal.modal-1>
      sepet
    </button>
    <b-modal id="modal-1" title="Sepetim">
      <card-list v-for="urun in sepetiGetir" :key="urun">
        <div>
          <li>
            <p>Fiyat : {{ urun.Fiyat }}</p>
            <p>İsim : {{ urun.Urun }}</p>
            <EkleCikart :eklenenUrun="urun" :propMiktar="urun.miktar" />
          </li>
        </div>
      </card-list>
    </b-modal>
  </div>
  <router-view />
</template>

<script>
export default {
  computed: {
    sepetiGetir() {
      return this.$store.getters["Sepet/sepetiAl"];
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
