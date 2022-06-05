<template>
  <card-list v-for="urun in ekstra" :key="urun">
    <div>
      <li>
        <p>Fiyat : {{ urun.Fiyat }}</p>
        <p>İsim : {{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
  <card-list v-for="urun in sandvic" :key="urun">
    <div>
      <ul>
        <li>
          <p>Fiyat :{{ urun.Fiyat }}</p>
          <p>İsim :{{ urun.Urun }}</p>
        </li>
      </ul>
    </div>
  </card-list>
  <card-list v-for="urun in icecek" :key="urun">
    <div>
      <li>
        <p>Fiyat :{{ urun.Fiyat }}</p>
        <p>İsim :{{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
  <card-list v-for="urun in kahvalti" :key="urun">
    <div>
      <li>
        <p>Fiyat :{{ urun.Fiyat }}</p>
        <p>İsim :{{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
  <card-list v-for="urun in bagel" :key="urun">
    <div>
      <li>
        <p>Fiyat :{{ urun.Fiyat }}</p>
        <p>İsim :{{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
  <card-list v-for="urun in haftaSonu" :key="urun">
    <div>
      <li>
        <p>Fiyat :{{ urun.Fiyat }}</p>
        <p>İsim :{{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
  <card-list v-for="urun in tatli" :key="urun">
    <div>
      <li>
        <p>Fiyat :{{ urun.Fiyat }}</p>
        <p>İsim :{{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
</template>

<script>
import { MenuAl } from "../services/MenuService";
import CardList from "./CardList.vue";
export default {
  components: { CardList },
  methods: {
    async MenuCagir() {
      await MenuAl()
        .then((response) => {
          this.urunler = response.data.resData;
          this.ekstra = response.data.resData.ekstraObj;
          this.kahvalti = response.data.resData.kahvaltiObj;
          this.bagel = response.data.resData.bagelObj;
          this.haftaSonu = response.data.resData.haftaSonuObj;
          this.icecek = response.data.resData.icecekObj;
          this.tatli = response.data.resData.tatliObj;
          this.sandvic = response.data.resData.sanvicObj;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
  mounted() {
    this.MenuCagir();
  },
  data() {
    return {
      ekstra: [],
      kahvalti: [],
      bagel: [],
      haftaSonu: [],
      icecek: [],
      tatli: [],
      sandvic: [],
      urunler: [],
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
