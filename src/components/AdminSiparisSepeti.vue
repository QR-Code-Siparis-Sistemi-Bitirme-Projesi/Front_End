<template>
  <card-list v-for="urun in sepettekiUrunler" :key="urun">
    <div>
      <li>
        <p>Fiyat : {{ urun.Fiyat }}</p>
        <p>İsim : {{ urun.Urun }}</p>
      </li>
    </div>
  </card-list>
</template>

<script>
export default {
  props: ["sepettekiUrunler"],
};
</script>

<style scoped>
</style>