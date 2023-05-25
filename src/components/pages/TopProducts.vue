<script lang="ts">
import { defineComponent } from 'vue';
import TopInBath from '@/components/pages/TopInBath.vue';
import TopInAndOutBath from './TopInAndOutBath.vue';
import AppArrowAnimeButton from '../AppArrowAnimeButton.vue';

export default defineComponent({
  name: 'TopProducts',
  components: {
    TopInBath,
    TopInAndOutBath,
    AppArrowAnimeButton
  }
});
</script>

<template>
  <section class="TopProducts">
    <div class="TopProducts__container">
      <h2 class="TopProducts__ttl">PRODUCTS</h2>
      <router-link to="about">
        <AppArrowAnimeButton>VIEW ALL</AppArrowAnimeButton>
      </router-link>
    </div>
    <h3 class="TopProducts__subttl">IN BATH</h3>
    <TopInBath />
    <h3 class="TopProducts__subttl">IN & OUT BATH</h3>
    <TopInAndOutBath />
  </section>
</template>

<style lang="scss" scoped>
  .TopProducts {
    padding: 50px 5vw;
    background: $colorLightGray;
    @media screen and (min-width: 1024px) {
      padding: 200px 7vw;
    }
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
      @media screen and (min-width: 1024px) {
        margin-bottom: 60px;
      }
    }
    &__ttl {
      @include sectionTtl();
    }
    &__subttl {
      position: relative;
      width: fit-content;
      margin: 0 auto 40px;
      font-size: 13px;
      letter-spacing: 0.1em;
      @media screen and (min-width: 1024px) {
        font-size: 18px;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        display: block;
        width: 100%;
        height: 2px;
        background: #000;
      }
    }
  }
</style>