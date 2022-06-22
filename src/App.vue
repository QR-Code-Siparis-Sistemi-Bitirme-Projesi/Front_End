<template>
  <div>
    <button
      v-b-modal.modal-scrollable
      v-if="this.$store.getters['Sepet/siparisVarMi']"
      scrollable
    >
      sepet
    </button>
    <b-modal id="modal-scrollable" scrollable centered title="Sepetim">
      <div class="d-block text-strt mt-3 mb-0">
        <b-button class="mb-2" variant="primary">
          Toplam:
          <b-badge variant="light">{{ toplamTutarHesapla() }} TL</b-badge>
        </b-button>
      </div>
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
  methods: {
    sepetiGuncelle() {
      return this.sepetiGetir;
    },
    toplamTutarHesapla() {
      const storeSepetList = JSON.parse(
        JSON.stringify(this.$store.getters["Sepet/sepetiAl"])
      );

      return storeSepetList.reduce((toplam, urun) => {
        return toplam + urun.miktar * urun.Fiyat;
      }, 0);
    },
  },
  watch: {
    sepetiGetir() {
      this.sepetiGuncelle();
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