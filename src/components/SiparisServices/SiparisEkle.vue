<template>

  <b-card>
    <b-form @submit.prevent="SiparisGonder()">
      <div class="row">
        <div class="col-lg-2">
          <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ürün Adı"
            v-model="siparis.Urun">
          </b-form-input>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Fiyat" v-model="siparis.Fiyat"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="MasaNo" v-model="siparis.masaNo"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Ekstralar" v-model="siparis.ekstralar"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-input-group class="col-lg-4 mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Not" v-model="siparis.not"></b-form-input>
          </b-input-group>
        </div>
        <div class="col-lg-1">
          <b-button variant="primary" @click="SiparisGonder()">Save</b-button>
        </div>
      </div>
    </b-form>
  </b-card>

</template>

<script>
export default {
  data() {
    return {
      siparis: {
        masaNo: "",
        Urun:[],
        
        Fiyat: "",
        Icindekiler: [],
        
        Ekstralar:"",
        Not:"",
        ToplamFiyat:"",
        SiparisAktifMi:false
      }
    }
  },
  methods: {
    KutuBosmu() {
      if (!this.siparis.masaNo || this.siparis.Urun === "") {
        alert("Lütfen masa numarası ve ürünü belirtiniz.")
        throw new Error("Eksik Girdiniz");

      }
    },
    FormTemizle() {
      this.siparis.MasaNo = "",
        this.siparis.Urun = "",
        this.siparis.Fiyat = "",
        this.siparis.Ekstralar = ""
        this.siparis.Not = ""
    },
    async SiparisGonder() {
      this.KutuBosmu()
      this.$store
        .dispatch("Admin/SiparisEkle", this.siparis)
        .catch((err) => {
          console.log("hata - ", err)
        })
    },
  }
}
</script>

<style>
</style>