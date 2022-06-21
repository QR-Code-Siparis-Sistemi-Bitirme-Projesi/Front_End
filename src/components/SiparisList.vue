<template>
  <b-card>
    <b-tabs content-class="mt-3 " fill>
      <b-tab title="Siparişler">
        <p>
          <card-list v-for="siparis in siparisler" :key="siparis">
            <div>
              <li>
                <p>Masa Numarası: {{ siparis.masaNo }}</p>
                <p>Ürün adı: {{ siparis.Urun }}</p>
                <p>Ürün Fiyatı: {{ siparis.Fiyat }}</p>
                <p>Ürün içeriği: {{ siparis.icindekiler }}</p>
                <p>Ekstralar: {{ siparis.Ekstralar }}</p>
                <p>Sipariş Notu: {{ siparis.Not }}</p>
                <p>Toplam Fiyat: {{ siparis.ToplamFiyat }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
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
          this.siparisler = response.data.resData.siparisObj
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
      siparisler: []
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
