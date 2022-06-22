<template>
  <div>
  </div>
  <b-card>
    <b-tabs content-class="mt-3 " fill>
      <b-tab title="Ekstra">
        <p>
          <card-list v-for="urun in ekstra" :key="urun._id">
            <button @click="kaldir(urun._id, 7)">
              sil
            </button>
            <button v-b-modal.modal-2>Düzenle</button>
            <b-modal id="modal-2" title="BootstrapVue">
              <b-card>
                <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 7)">
                  <div class="row">
                    <div class="col-lg-4">
                      Ürün
                      <b-form-input id="inline-form-input-username" placeholder="Ürün adı" v-model="duzenlenecek.Urun">
                      </b-form-input>
                    </div>
                    <div class="col-lg-4">
                      <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
                        <b-form-input type="number" placeholder="Fiyat" v-model.number="duzenlenecek.Fiyat">
                        </b-form-input>
                      </b-input-group>
                    </div>
                    <div class="col-lg-2">
                      <b-button type="submit" variant="primary">Save</b-button>
                    </div>
                  </div>
                </b-form>
              </b-card>
            </b-modal>

            <div>
              <li>
                <p>Fiyat : {{ urun.Fiyat }}</p>
                <p>İsim : {{ urun.Urun }}</p>
              </li>
            </div>
            <button v-b-modal.modal-3>Ekle</button>
            <b-modal id="modal-3" title="BootstrapVue">
              <p class="my-4">Hello from modal!</p>
            </b-modal>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="Kahvaltı">
        <p>
          <card-list v-for="urun in kahvalti" :key="urun._id">
            <button @click="kaldir(urun._id, 3)">
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
      <b-tab title="Bagel">
        <p>
          <card-list v-for="urun in bagel" :key="urun._id">
            <button @click="kaldir(urun._id, 4)">
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
      <b-tab title="HaftaSonu">
        <p>
          <card-list v-for="urun in haftaSonu" :key="urun._id">
            <button @click="kaldir(urun._id, 6)">
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
      <b-tab title="İçecekler">
        <p>
          <card-list v-for="urun in icecek" :key="urun._id">
            <button @click="kaldir(urun._id, 2)">Sil</button>
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
            <button @click="kaldir(urun._id, 1)">Sil</button>
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
            <button @click="kaldir(urun._id, 5)">Sil</button>
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
import { AMenuAl } from "../services/AdminService";
import CardList from "./CardList.vue";
//import { UrunSil } from "../services/AdminService";

export default {
  components: { CardList },
  methods: {
    Duzenle(id, Urun, Fiyat, tabIndex) {
      this.duzenlenecek = {
        id: id,
        Urun: Urun,
        Fiyat: Fiyat,
        tabIndex: tabIndex
      }
      console.log("menü - ", this.duzenlenecek)
      this.$store
        .dispatch("Admin/MenuDuzenleme", this.duzenlenecek)
        .then(() => {

          this.MenuCagir()
        })
        .catch((err) => {
          console.log("hata - ", err)
        })

    },

    async MenuCagir() {
      await AMenuAl()
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
    kaldir(id, tabIndex) {
      this.silinecek = {
        id: id,
        tabIndex: tabIndex
      }
      console.log("menu - ", this.silinecek)
      this.$store
        .dispatch("Admin/UrunKaldir", this.silinecek)
        .then(() => {
          this.MenuCagir()
        })
        .catch((err) => {
          console.log("hata - ", err)
        })
    },
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
      },
      duzenlenecek: {
        id: "",
        Urun: "",
        Fiyat: 0,
        tabIndex: 0
      },
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
