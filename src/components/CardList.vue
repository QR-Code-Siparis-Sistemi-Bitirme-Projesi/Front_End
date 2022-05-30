<template>
  <b-card-group deck>
    <b-card>
      <slot> </slot>
    </b-card>
  </b-card-group>
</template>
<script>
export default {
  props: ['urun'],
}
</script>