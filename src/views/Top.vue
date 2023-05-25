<script lang="ts">
import { defineComponent } from "vue";
import TopHero from '@/components/pages/TopHero.vue';
import TopConcept from '@/components/pages/TopConcept.vue';
import TopProducts from '@/components/pages/TopProducts.vue';
import TopNews from '@/components/pages/TopNews.vue';
import AppBg from '@/components/AppBg.vue';

export default defineComponent({
  name: "Top",
  components: {
    TopHero,
    TopConcept,
    TopProducts,
    TopNews,
    AppBg,
  }
});
</script>
<template>
  <div class="top">
    <TopHero />
    <TopConcept />
    <TopProducts />
    <TopNews />
    <AppBg />
  </div>
</template>

