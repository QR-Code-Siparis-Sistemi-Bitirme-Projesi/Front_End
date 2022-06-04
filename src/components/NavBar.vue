<template>
  <div>
    <b-dropdown
      text="Menu"
      block
      variant="primary"
      class="m-2"
      menu-class="w-100"
    >
      <b-dropdown-item>
        <router-link to="/tatli" class="rlink">Çeşit 1</router-link></b-dropdown-item
      >
      <b-dropdown-item
        ><router-link to="/ekstra" class="rlink" >Çeşit 2</router-link></b-dropdown-item
      >
      <b-dropdown-item
        ><router-link to="/" class="rlink" >Çeşit 3</router-link></b-dropdown-item
      >
      <b-dropdown-item
        ><router-link to="/" class="rlink" >Çeşit 4</router-link></b-dropdown-item
      >
      <b-dropdown-item
        ><router-link to="/" class="rlink" >Çeşit 5</router-link></b-dropdown-item
      >
      <b-dropdown-item
        ><router-link to="/" class="rlink" >Çeşit 6</router-link></b-dropdown-item
      >
      <b-dropdown-item
        ><router-link to="/" class="rlink" >Çeşit 7</router-link></b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<style>
.rlink:link,
.rlink:visited {
  background-color: #f44336;
  color: white;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 2%;
}

.rlink:hover,
.rlink:active {
  background-color: red;
}
</style>