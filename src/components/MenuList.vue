<template>
  <b-card>
    <b-tabs content-class="mt-3 " fill>
      <b-tab title="Ekstra">
        <p>
          <card-list v-for="urun in ekstra" :key="urun._id">
            <button @click="UrunKaldir(urun._id)">
              sil
            </button>
            <div>

              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="Kahvaltı">
        <p>
          <card-list v-for="urun in kahvalti" :key="urun._id">
            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="Bagel">
        <p>
          <card-list v-for="urun in bagel" :key="urun._id">
            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="HaftaSonu">
        <p>
          <card-list v-for="urun in haftaSonu" :key="urun._id">
            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="İçecekler">
        <p>
          <card-list v-for="urun in icecek" :key="urun._id">
            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="Tatlılar">
        <p>
          <card-list v-for="urun in tatli" :key="urun._id">
            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="Sandiviçler">
        <p>
          <card-list v-for="urun in sandvic" :key="urun._id">
            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
          </card-list>
        </p>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import { MenuAl } from "../services/MenuService";
import CardList from "./CardList.vue";
//import { UrunSil } from "../services/AdminService";

export default {
  components: { CardList },
  methods: {

    async MenuCagir() {
      await MenuAl()
        .then((response) => {
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
    UrunKaldir(id) {
      if (this.title == "Tatlılar") {
        return this.silinecek.tabIndex = 1
      }
      else if (this.title == "İçecekler") {
        return this.silinecek.tabIndex = 2
      }
      else if (this.title == "Kahvaltı") {
        return this.silinecek.tabIndex = 3
      }
      else if (this.title == "Bagel") {
        return this.silinecek.tabIndex = 4
      }
      else if (this.title == "Sandiviçler") {
        return this.silinecek.tabIndex = 5
      }
      else if (this.title == "HaftaSonu") {
        return this.silinecek.tabIndex = 6
      }
      else if (this.title == "Ekstra") {
        return this.silinecek.tabIndex = 7
      }
      this.silinecek.id = id
      console.log("id -", this.silinecek.id)
      console.log("tabIndex -", this.silinecek.tabIndex)



      this.$store
        .dispatch("Admin/UrunKaldir", this.silinecek)
        .catch((err) => {
          console.log("hata - ", err)
        })
    }
  },
  mounted() {
    this.MenuCagir();
    //this.UrunKaldir();

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
      silinecek: {
        id: "",
        tabindex: 0
      }
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
