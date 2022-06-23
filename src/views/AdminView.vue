<template>
  <h1>Admin Paneli</h1>
  <button @click="cikis()">Çıkış</button>
  <b-card>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Menü Görüntüle">
        <p>
          <MenuList></MenuList>
        </p>
      </b-tab>
      <b-tab title="Ekle">
        <p>
          <UrunEkle />
        </p>
      </b-tab>
      <b-tab title="Siparişleri Görüntüle">
        <p>
          <SiparisList />
        </p>
      </b-tab>
      <b-tab title="Sipariş Ekle">
        <p>
          <SiparisEkle></SiparisEkle>
        </p>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import MenuList from "../components/MenuList.vue";
import UrunEkle from "../components/AdminServices/UrunEkle.vue";
import SiparisEkle from "../components/SiparisServices/SiparisEkle.vue";
import SiparisList from "../components/SiparisList.vue"

export default {
  components: {
    MenuList,
    UrunEkle,
    SiparisList,
    SiparisEkle
  },
  methods: {
    cikis() {
      localStorage.removeItem('kullanici')
      this.$router.go({ path: "/login" })
    }
  }
};
</script>

<style>
</style>