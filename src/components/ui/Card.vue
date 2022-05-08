<template>
  <div class="card justify-contend-center">
    <div class="card-body">
      <h5 class="card-title">
        <b>{{ kardNo + 1 }}. Paylaşım</b>
      </h5>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["kardNo"],
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  margin-top: 1%;
}

.card:hover {
  box-shadow: 0px 2px 2px rgba(249, 247, 247, 0.3);
  background-color: lightslategrey
}
</style>