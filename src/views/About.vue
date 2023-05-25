<script lang="ts">
import { defineComponent } from 'vue';
import AboutInfo from '@/components/pages/AboutInfo.vue';
import AboutFeature from '@/components/pages/AboutIFeature.vue';
import AppBg from '@/components/AppBg.vue';

export default defineComponent({
  components: {
    AboutInfo,
    AboutFeature,
    AppBg,
  }
});
</script>

<template>
  <section class="About">
    <AboutInfo />
    <AboutFeature />
  </section>
  <AppBg />
</template>

<style lang="scss" scoped>
.About {
  padding: 60px 50px;
  background: $colorLightGray;
  @media screen and (min-width: 1024px) {
    padding: 120px 100px;
  }
}
</style>
