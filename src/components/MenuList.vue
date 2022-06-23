<template>
  <div>
  </div>
  <b-card>
    <b-tabs content-class="mt-3 " fill>
      <b-tab title="Kahvaltı">
        <p>
          <card-list v-for="urun in kahvalti" :key="urun._id" class="cerceve">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div>
                    <li>
                      <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                      <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                    </li>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button pill variant="danger" @click="kaldir(urun._id, 3)">
                    sil
                  </b-button>
                </b-col>
                <b-col>
                  <b-button pill variant="primary" v-b-modal.modal-2>Düzenle</b-button>
                </b-col>
              </b-row>
              <b-modal id="modal-2" title="Ürün Düzenle">
                <b-card>
                  <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 3)">
                    <div class="row">
                      <div class="col-lg-4">
                        Ürün
                        <b-form-input id="inline-form-input-username" placeholder="Ürün adı"
                          v-model="duzenlenecek.Urun">
                        </b-form-input>
                      </div>
                      <div class="col-lg-4">
                        Fiyat
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
            </b-container>
          </card-list>
        </p>
      </b-tab>

      <b-tab title="Bagel">
        <p>
          <card-list v-for="urun in bagel" :key="urun._id" class="cerceve">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div>
                    <li>
                      <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                      <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                    </li>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button pill variant="danger" @click="kaldir(urun._id, 4)">
                    sil
                  </b-button>
                </b-col>
                <b-col>
                  <b-button pill variant="primary" v-b-modal.modal-3>Düzenle</b-button>
                </b-col>
              </b-row>
              <b-modal id="modal-3" title="Ürün Düzenle">
                <b-card>
                  <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 4)">
                    <div class="row">
                      <div class="col-lg-4">
                        Ürün
                        <b-form-input id="inline-form-input-username" placeholder="Ürün adı"
                          v-model="duzenlenecek.Urun">
                        </b-form-input>
                      </div>
                      <div class="col-lg-4">
                        Fiyat
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
            </b-container>
          </card-list>
        </p>
      </b-tab>

      <b-tab title="HaftaSonu">
        <p>
          <card-list v-for="urun in haftaSonu" :key="urun._id" class="cerceve">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div>
                    <li>
                      <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                      <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                    </li>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button pill variant="danger" @click="kaldir(urun._id, 6)">
                    sil
                  </b-button>
                </b-col>
                <b-col>
                  <b-button pill variant="primary" v-b-modal.modal-4>Düzenle</b-button>
                </b-col>
              </b-row>
              <b-modal id="modal-4" title="Ürün Düzenle">
                <b-card>
                  <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 6)">
                    <div class="row">
                      <div class="col-lg-4">
                        Ürün
                        <b-form-input id="inline-form-input-username" placeholder="Ürün adı"
                          v-model="duzenlenecek.Urun">
                        </b-form-input>
                      </div>
                      <div class="col-lg-4">
                        <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
                          Fiyat
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
            </b-container>
          </card-list>
        </p>
      </b-tab>

      <b-tab title="İçecekler">
        <p>
          <card-list v-for="urun in icecek" :key="urun._id" class="cerceve">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div>
                    <li>
                      <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                      <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                    </li>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button pill variant="danger" @click="kaldir(urun._id, 2)">
                    sil
                  </b-button>
                </b-col>
                <b-col>
                  <b-button pill variant="primary" v-b-modal.modal-5>Düzenle</b-button>
                </b-col>
              </b-row>
              <b-modal id="modal-5" title="Ürün Düzenle">
                <b-card>
                  <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 2)">
                    <div class="row">
                      <div class="col-lg-4">
                        Ürün
                        <b-form-input id="inline-form-input-username" placeholder="Ürün adı"
                          v-model="duzenlenecek.Urun">
                        </b-form-input>
                      </div>
                      <div class="col-lg-4">
                        Fiyat
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
            </b-container>
          </card-list>
        </p>
      </b-tab>
      <b-tab title="Tatlılar">
        <p>
          <card-list v-for="urun in tatli" :key="urun._id" class="cerceve">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div>
                    <li>
                      <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                      <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                    </li>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button pill variant="danger" @click="kaldir(urun._id, 1)">
                    sil
                  </b-button>
                </b-col>
                <b-col>
                  <b-button pill variant="primary" v-b-modal.modal-6>Düzenle</b-button>
                </b-col>
              </b-row>
              <b-modal id="modal-6" title="Ürün Düzenle">
                <b-card>
                  <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 1)">
                    <div class="row">
                      <div class="col-lg-4">
                        Ürün
                        <b-form-input id="inline-form-input-username" placeholder="Ürün adı"
                          v-model="duzenlenecek.Urun">
                        </b-form-input>
                      </div>
                      <div class="col-lg-4">
                        Fiyat
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
            </b-container>
          </card-list>
        </p>
      </b-tab>

      <b-tab title="Sandiviçler">
        <p>
          <card-list v-for="urun in sandvic" :key="urun._id" class="cerceve">
            <b-container class="bv-example-row">
              <b-row>
                <b-col>
                  <div>
                    <li>
                      <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                      <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                    </li>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button pill variant="danger" @click="kaldir(urun._id, 5)">
                    sil
                  </b-button>
                </b-col>
                <b-col>
                  <b-button pill variant="primary" v-b-modal.modal-7>Düzenle</b-button>
                </b-col>
              </b-row>
              <b-modal id="modal-7" title="Ürün Düzenle">
                <b-card>
                  <b-form @submit.prevent="Duzenle(urun._id, duzenlenecek.Urun, duzenlenecek.Fiyat, 5)">
                    <div class="row">
                      <div class="col-lg-4">
                        Ürün
                        <b-form-input id="inline-form-input-username" placeholder="Ürün adı"
                          v-model="duzenlenecek.Urun">
                        </b-form-input>
                      </div>
                      <div class="col-lg-4">
                        Fiyat
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
            </b-container>
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

.renk {
  color: white;
}

.cerceve {
  border: 1px solid black;
}

.pozisyon {
  padding-top: 8%;
}

.yaziCerceve {
  border: 1px solid red;
  border-radius: 15px;
  max-width: 60%;
  margin-left: 20%;
  background-color: red;
  color: whitesmoke;
}

.fiyatCerceve {
  border: 1px solid lightgreen;
  border-radius: 15px;
  max-width: 30%;
  margin-left: 35%;
  background-color: lightgreen;

  color: black;
}
</style>
