<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <button v-on:click="azalt()" :disabled="miktar < 1" class="btn btn-danger">
          <i class="fas fa-minus-circle">-</i>
        </button>
      </b-col>
      <b-col>
        <input v-model="miktar" disabled />
      </b-col>
      <b-col>
        <button v-on:click="arttir()" class="btn btn-success">
          <i class="fas fa-plus-circle">+</i>
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["eklenenUrun", "propMiktar"],
  data() {
    return {
      miktar: this.eklenenUrun.miktar || 0,
    };
  },
  methods: {
    arttir() {
      this.miktar += 1;
      let eklenenUrunObj = this.eklenenUrun;
      eklenenUrunObj.miktar = this.miktar;
      this.$store.dispatch("Sepet/SepeteEkle", eklenenUrunObj);
    },
    azalt() {
      this.miktar -= 1;
      let cikanUrunObj = this.eklenenUrun;
      cikanUrunObj.miktar = this.miktar;
      this.$store.dispatch("Sepet/SepeteEkle", cikanUrunObj);
    },
  },
};
</script>

<style>
.yükseklik {
  padding-top: 7%;
}
</style>