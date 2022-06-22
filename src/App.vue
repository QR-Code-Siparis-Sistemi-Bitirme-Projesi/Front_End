<template>
  <div>
    <b-button pill variant="danger" v-b-modal.modal-scrollable v-if="siparisVarMi()" scrollable>
      sepet
    </b-button>
    <b-modal id="modal-scrollable" scrollable centered title="Sepetim">
      <b-container class="bv-example-row">
        <b-row>
          <!-- <div class="d-block text-strt mt-3 mb-0"> </div> -->
          <b-col>
            <card-list v-for="urun in sepetiGetir" :key="urun">
              <div>
                <li>
                  <p><b>{{ urun.Urun }}</b></p>
                  <p><b>Fiyat : </b>{{ urun.Fiyat }}</p>
                  <EkleCikart :eklenenUrun="urun" :propMiktar="urun.miktar" />
                </li>
              </div>
            </card-list>
          </b-col>
          <b-col>
            <b-button class="mb-2" variant="primary">
              Toplam:
              <b-badge variant="light">{{ toplamTutarHesapla() }} TL</b-badge>
            </b-button>
          </b-col>
        </b-row>
      </b-container>
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
    siparisVarMi() {
      return this.$store.getters['Sepet/siparisVarMi']
    },

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

li {
  list-style: none;
}
</style>