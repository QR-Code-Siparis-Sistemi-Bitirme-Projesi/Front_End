<template>
  <NavBar />
  <!-- <div class="container-md border viewCss"> -->
  <div class="container deneme">
    <div class="row">
      <div class="col-2"></div>

      <div class="col-6 customPadding">
        <router-view />
      </div>

      <div class="col-2 customPadding">
        <div class="container bg-light onlineKullanici pb-3">
          <h5 class="text-center pt-3">
            <b>Online Kullanıcılar</b>
          </h5>
          <ul class="list-group">
            <div class="container"></div>
            <li class="list-group-item">Kullanıcı 1</li>
            <li class="list-group-item">Kullanıcı 2</li>
            <li class="list-group-item">...</li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        
        <!-- Online kullanıcılar(fikir!) 
        <div>
          <button
            type="button"
            class="btn btn-primary position-relative dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Inbox
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ kisiSayisi }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          <ul class="dropdown-menu">
            <li
              v-for="(kisi, index) in onlineKisiler"
              :key="kisi.kAdi"
              @click="Goruntulendi(index)"
            >
              <a class="dropdown-item" href="#">{{ kisi.kAdi }}</a>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

// <script>
// export default {
//   data() {
//     return {
//       onlineKisiler: [{ kAdi: "Can" }, { kAdi: "Cem" }, { kAdi: "Kerem" }],
//     };
//   },
//   methods: {
//     Goruntulendi(e) {
//       this.onlineKisiler.splice(e, 1);
//     },
//   },
//   computed: {
//     kisiSayisi() {
//       return this.onlineKisiler.length;
//     },
//   },
// };
// </script>

<style lang="scss">
.deneme {
  max-width: 100% !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* // text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.viewCss {
  margin-top: 5%;
  margin-bottom: 5%;
}

.customPadding {
  padding-top: 2%;
  padding-bottom: 1%;
}

.onlineKullanici {
  border-radius: 20px;
  opacity: 0.75;
}
.onlineKullanici:hover {
  opacity: 1;
}
</style>
