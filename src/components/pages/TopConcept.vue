<script lang="ts">
import { defineComponent } from 'vue';
import AppArrowAnimeButton from '@/components/AppArrowAnimeButton.vue'


export default defineComponent({
  name: 'TopConcept',
  components: {
    AppArrowAnimeButton,
  }
});
</script>

<template>
  <section class="TopConcept">
    <div class="TopConcept__container--01">
      <h2 class="TopConcept__ttl">CONCEPT</h2>
      <p class="TopConcept__catch">Consectetur <br> eiusmod sunt.</p>
    </div>
    <div class="TopConcept__container--02">
      <p class="TopConcept__txt">Tempor quis cupidatat ipsum occaecat Lorem sit laborum incididunt fugiat. In nisi
        consectetur eu enim amet ad sint ullamco voluptate quis fugiat mollit eu qui. Eiusmod ad aliquip pariatur sit
        ullamco veniam excepteur et minim laborum.</p>
      <router-link to="about">
        <AppArrowAnimeButton>MORE DETAIL</AppArrowAnimeButton>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.TopConcept {
  position: relative;
  padding: 60px;
  @media screen and (min-width: 1024px) {
    padding: 120px 7vw 160px;
  }

  &__container--01 {
    &::after {
      content: "";
      position: absolute;
      top: 60px;
      right: 0;
      display: block;
      width: 200px;
      height: 350px;
      background: url(~@/assets/images/concept_img01.jpg) center center / cover;
      z-index: -1;
      @media screen and (min-width: 1024px) {
        top: 140px;
        right: 7vw;
        width: 300px;
        height: 525px;
      }
    }
  }

  &__ttl {
    @include sectionTtl;
    margin-bottom: 60px;
  }

  &__catch {
    margin-bottom: 80px;
    line-height: 2;
    font-size: 36px;
    letter-spacing: 0.1em;
    @media screen and (min-width: 1024px) {
      margin-bottom: 340px;
      padding-left: 10vw;
      font-size: 42px;
    }
  }

  &__container--02 {
    position: relative;
    padding-bottom: 240px;
    @media screen and (min-width: 1024px) {
      position: static;
      width: 40%;
      margin-left: auto;
      padding-bottom: 0;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 200px;
      background: url(~@/assets/images/concept_img02.jpg) center center / cover;
      @media screen and (min-width: 1024px) {
        left: 0;
        bottom: 160px;
        width: 50%;
        height: 500px;
      }
    }
  }

  &__txt {
    margin-bottom: 40px;
    line-height: 1.6;
    letter-spacing: 0.1em;
    font-weight: 400;
  }
}</style>