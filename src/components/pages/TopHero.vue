<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopHero',
});
</script>

<template>
  <div class="mv"></div>
</template>

<style lang="scss" scoped>
.mv {
  height: 40vh;
  background: url(~@/assets/images/mv.jpg) center center / cover;
  @media screen and (min-width: 1024px) {
    height: 80vh;
  }
}
</style>