<template>
  <b-aspect :aspect="aspect">
    <b-card>
      <b-tabs content-class="mt-3 " fill>
        <b-tab title="Kahvaltı">
          <p>
            <card-list v-for="urun in kahvalti" :key="urun" class="cerceve">
              <div>
                <li>
                  <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                  <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b> </p>
                  <EkleCikart :eklenenUrun="urun" />
                </li>
              </div>
            </card-list>
          </p>
        </b-tab>
        <b-tab title="Bagel">
          <p>
            <card-list v-for="urun in bagel" :key="urun" class="cerceve">
              <div>
                <li>
                  <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                  <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                  <EkleCikart :eklenenUrun="urun" />
                </li>
              </div>
            </card-list>
          </p>
        </b-tab>
        <b-tab title="HaftaSonu">
          <p>
            <card-list v-for="urun in haftaSonu" :key="urun" class="cerceve">
              <div>
                <li>
                  <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                  <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                  <EkleCikart :eklenenUrun="urun" />
                </li>
              </div>
            </card-list>
          </p>
        </b-tab>
        <b-tab title="İçecekler">
          <p>
            <card-list v-for="urun in icecek" :key="urun" class="cerceve">
              <div>
                <li>
                  <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                  <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                  <EkleCikart :eklenenUrun="urun" />
                </li>
              </div>
            </card-list>
          </p>
        </b-tab>
        <b-tab title="Tatlılar">
          <p>
            <card-list v-for="urun in tatli" :key="urun" class="cerceve">
              <div>
                <li>
                  <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                  <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                  <EkleCikart :eklenenUrun="urun" />
                </li>
              </div>
            </card-list>
          </p>
        </b-tab>
        <b-tab title="Sandiviçler">
          <p>
            <card-list v-for="urun in sandvic" :key="urun" class="cerceve">
              <div>
                <li>
                  <p class="yaziCerceve "><b>{{ urun.Urun }}</b></p>
                  <p class="fiyatCerceve"><b>Fiyat :</b> {{ urun.Fiyat }} <b> TL</b></p>
                  <EkleCikart :eklenenUrun="urun" />
                </li>
              </div>
            </card-list>
          </p>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-aspect>
</template>

<script>
import { MenuAl } from "../services/MenuService";
import CardList from "./CardList.vue";

export default {
  components: {
    CardList,
  },
  data() {
    return {
      aspect: '4:3',
      kahvalti: [],
      bagel: [],
      haftaSonu: [],
      icecek: [],
      tatli: [],
      sandvic: [],
      urunler: [],
    };
  },
  methods: {
    async MenuCagir() {
      await MenuAl()
        .then((response) => {
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
    //this.UrunKaldir();
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
