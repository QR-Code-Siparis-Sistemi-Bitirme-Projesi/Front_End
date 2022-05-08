<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <router-link class="barcizgi" to="/">Tatlılar</router-link>
        </div>
        <div class="col-auto">
          <router-link class="barcizgi" to="/KahvaltilarList"
            >Kahvaltılar</router-link
          >
        </div>
        <div class="col-auto">
          <router-link class="barcizgi" to="/İcecekList"
            >İcecekler
          </router-link>
        </div>
        <div class="col-auto">
          <router-link class="barcizgi" to="/SandvicList"
            >Sandviçler</router-link
          >
        </div>
        <div class="col-auto">
          <router-link class="barcizgi" to="/SpecialList"
            >Haftasonu Özel</router-link
          >
        </div>
        <div class="col-auto">
          <router-link class="barcizgi" to="/BagelList">Tek Bagel</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
</style>

<style scoped>
button {
  margin-right: 15px;
}
</style>