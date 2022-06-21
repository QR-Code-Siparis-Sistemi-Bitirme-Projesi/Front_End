<template>
  <b-card>
    <b-tabs content-class="mt-3 " fill>
      <b-tab title="Siparişler"
        ><p>
                   <card-list v-for="siparis in siparis" :key="siparis">
            <div>
              <li>
                <p>Masa Numarası: {{ siparis.masaNo }}</p>
                <p>Ürün adı: {{ siarpis.Urun }}</p>
                <p>Ürün Fiyatı: {{ siarpis.Fiyat }}</p>
                <p>Ürün içeriği: {{ siarpis.icindekiler }}</p>
                <p>Ekstralar: {{ siarpis.Ekstralar }}</p>
                <p>Sipariş Notu: {{ siarpis.Not }}</p>
                <p>Toplam Fiyat: {{ siarpis.ToplamFiyat }}</p>
              </li>
            </div>
          </card-list>
        </p></b-tab
      >
      
    </b-tabs>
  </b-card>
</template>

<script>
import { SiparisAl } from "../services/SiparisService";
import CardList from "./CardList.vue";

export default {
  components: { CardList },
  methods: {
    async SiparisCagir() {
      await SiparisAl()
        .then((response) => {
            this.siparis = response.data.resData.siparisObj;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
  mounted() {
    this.SiparisCagir();
  },
  data() {
    return {
        siparis: []
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
