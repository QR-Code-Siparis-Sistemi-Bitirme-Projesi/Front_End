<template>
  <ul class="list-group" v-for="(eleman, index) in elemanlar" :key="eleman.id">
    <li class="list-group-item">
      <CardView :kardNo="index">
        <p>{{ eleman.bilgiMetni }}</p>
        <ul
          class="list-group list-group-hor  zontal"
          v-for="begenen in eleman.begeniler"
          :key="begenen"
        >
          <li class="list-group-item">
            {{ begenen.kAdi }}
          </li>
        </ul>
      </CardView>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["elemanlar"],
};
</script>

<style scoped>
</style>