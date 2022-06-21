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
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Fiyat" v-model="Menu.Fiyat"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Fiyat" v-model="Menu.Fiyat"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Fiyat" v-model="Menu.Fiyat"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Fiyat" v-model="Menu.Fiyat"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-button variant="primary" @click="UrunGonder()">Save</b-button>
        </div>
      </div>
    </b-form>
  </b-card>

</template>

<script>
export default {
  data() {
    return {
      Menu: { // dispatch ederken birden fazla parametreyi taşıyamıyoruz bu yüzden tek bir parametrenin içine atadım. (78.satır)
        Urun: "",
        Fiyat: "",
        tabIndex: "",
      }
    }
  },
  methods: {
    KutuBosmu() {
      if (!this.Menu.tabIndex || this.Menu.Urun === "" || !this.Menu.Fiyat === "") {
        alert("Lütfen Bütün Alanları Doldurunuz")
        throw new Error("Eksik Girdiniz");

      }
    },
    FormTemizle() {
      this.Menu.tabIndex = "",
        this.Menu.Urun = "",
        this.Menu.Fiyat = ""
    },
    async UrunGonder() {
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
        .catch((err) => {
          console.log("hata - ", err)
        })
    },
  }
}
</script>

<style>
</style>