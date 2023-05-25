<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppBg'
});
</script>

<template>
  <div class="bg"></div>
</template>

<style lang="scss" scoped>
.bg {
  height: 30vh;
  background: url(~@/assets/images/bg.jpg) top center / cover;
  @media screen and (min-width: 1024px) {
    height: 70vh;
  }
}
</style>