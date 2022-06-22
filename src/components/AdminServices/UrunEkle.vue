<template>

  <b-card>
    <b-form @submit.prevent="UrunGonder()">
      <div class="row">
        <div class="col-lg-2">
          <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ürün Adı"
            v-model="Menu.Urun">
          </b-form-input>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Fiyat" v-model="Menu.Fiyat"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1 ">
          <b-form-select id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0"
            :options="[{ text: 'Tür Seçiniz...', value: null }, 'Bagel', 'Tatlı', 'Ekstra', 'HaftaSonu', 'Kahvaltı', 'Sandviç', 'İçecek']"
            :value="null" v-model="Menu.tabIndex"></b-form-select>
        </div>
        <div v-if="Menu.tabIndex == 'Kahvaltı' || Menu.tabIndex == 'Sandviç'">
          <b-form-group>
            <b-form-checkbox v-for="(icerik, index) in icindekiler" :key="index" v-model="Menu.cikacak" :value="icerik">
              {{ icerik }}
            </b-form-checkbox>
          </b-form-group>
        </div>
        <div class="col-lg-1">
          <b-button type="submit" variant="primary">Save</b-button>
        </div>
      </div>
    </b-form>
  </b-card>

</template>

<script>
export default {
  data() {
    return {
      icindekiler:
        ["Balli Yoğurt", "Ketçap", "Domates", "Mayonez", "Marul",
          "Hardalli Sos", "Baharat", "Sriracha Sos", "Nohut Karisimi", "Tursu",
          "Cheddar Peynir", "Pancarli Somon", "Avokado", "Krem Peynir", "Deniz Tuzu",
          "Kirmizi Sogan Tursusu", "Kapari Tursusu", "Fume Somon",],
      Menu: { // dispatch ederken birden fazla parametreyi taşıyamıyoruz bu yüzden tek bir parametrenin içine atadım. (78.satır)
        Urun: "",
        Fiyat: 0,
        tabIndex: 0,
        cikacak: []
      }
    }
  },
  methods: {
    KutuBosmu() {
      if (!this.Menu.tabIndex || this.Menu.Urun === "" || this.Menu.Fiyat === 0 || this.Menu.cikacak.length === 0) {
        alert("Lütfen Bütün Alanları Doldurunuz")
        throw Error("Lütfen Bütün Alanları Doldurunuz")
      }
    },
    FormTemizle() {
      this.Menu.tabIndex = "",
        this.Menu.Urun = "",
        this.Menu.Fiyat = ""
    },
    async UrunGonder() {
      try {
        this.KutuBosmu()
        if (this.Menu.tabIndex == "Tatlı") {
          this.Menu.tabIndex = 1
        }
        else if (this.Menu.tabIndex == "İçecek") {
          this.Menu.tabIndex = 2
        }
        else if (this.Menu.tabIndex == "Kahvaltı") {
          this.Menu.tabIndex = 3
        }
        else if (this.Menu.tabIndex == "Bagel") {
          this.Menu.tabIndex = 4
        }
        else if (this.Menu.tabIndex == "Sandviç") {
          this.Menu.tabIndex = 5
        }
        else if (this.Menu.tabIndex == "HaftaSonu") {
          this.Menu.tabIndex = 6
        }
        else if (this.Menu.tabIndex == "Ekstra") {
          this.Menu.tabIndex = 7
        }
        this.$store
          .dispatch("Admin/MenuyeEkle", this.Menu)
          .then(() => {
            alert("Ürün Eklendi")
          })
          .catch((err) => {
            console.log("hata - ", err)
          })
      }
      catch (err) {
        console.log(err)
      }
    },
  }
}
</script>

<style>
</style>