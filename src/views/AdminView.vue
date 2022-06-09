<template>
  <h1>Admin Paneli</h1>
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
      <b-tab title="Düzenle">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="Çıkar">
        <p>I'm the second tab</p>
      </b-tab>
    </b-tabs>
  </b-card>

</template>

<script>
import MenuList from "../components/MenuList.vue";
import UrunEkle from "../components/AdminServices/UrunEkle.vue"

export default {
  components: {
    MenuList,
    UrunEkle
  },
};
</script>

<style>
</style>