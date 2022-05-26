<template>
  <b-button pill variant="primary" class="butn"
    ><router-link to="/">Geri Dön</router-link></b-button
  >
  <div>
    <h1>Sepet</h1>

  </div>
  <button @click="BilgileriAl">Paylasim getir</button>
  <ul>
    <li>{{ responseData }}</li>
  </ul>

  
  <p>Burası Sepet olucak</p>



</template>
<script>
import {MenuAl} from '../services/MenuAl'
export default {
 methods: {
    async BilgileriAl(context) {
      await MenuAl()
        .then((responseData) => {
          context.commit("PaylasimDepola", responseData);
          console.log(responseData);
        })
        .catch((err) => {
          context.commit("PaylasimDepola", err);
          throw new Error(err);
        });
    },
  },
}
</script>
<style scoped>
.butn{
  float: left
}
</style>