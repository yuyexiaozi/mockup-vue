<script lang="ts">
import { defineComponent } from 'vue';
// import { gsap } from 'gsap';
import AppArrowAnimeButton from '@/components/AppArrowAnimeButton.vue'


export default defineComponent({
  name: 'TopConcept',
  data() {
    return {
      showText: false,
      consectetur: [
        { id: 1, text: 'C' },
        { id: 2, text: 'o' },
        { id: 3, text: 'n' },
        { id: 4, text: 's' },
        { id: 5, text: 'e' },
        { id: 6, text: 'c' },
        { id: 7, text: 't' },
        { id: 8, text: 'e' },
        { id: 9, text: 't' },
        { id: 10, text: 'u' },
        { id: 11, text: 'r' },
      ],
      eiusmodsunt: [
        { id: 1, text: 'e' },
        { id: 2, text: 'i' },
        { id: 3, text: 'u' },
        { id: 4, text: 's' },
        { id: 5, text: 'm' },
        { id: 6, text: 'o' },
        { id: 7, text: 'd' },
        { id: 8, text: ' ' },
        { id: 9, text: 's' },
        { id: 10, text: 'u' },
        { id: 11, text: 'n' },
        { id: 12, text: 't' },
        { id: 13, text: '.' },
      ]
    };
  },
  mounted() {
    const topConcept = document.querySelector('#TopConcept');
    if (!topConcept) {
      return
    }
    let Y: number = window.scrollY;
    const topConceptY = topConcept.getBoundingClientRect().y - Y;
    window.addEventListener('scroll', () => {
      Y = window.scrollY;
      if (Y > topConceptY - 300) {
        this.showText = true;
      }
    });
  },
  components: {
    AppArrowAnimeButton,
  }
});
</script>

<template>
  <section id="TopConcept" class="TopConcept">
    <div class="TopConcept__container--01">
      <h2 class="TopConcept__ttl">CONCEPT</h2>
      <p class="TopConcept__catch" :class="{ 'show-text': showText }">
        <span v-for="c in consectetur" :key="c.id" v-bind:style="{ transitionDelay: `${c.id * 0.05}s` }"
          class="TopConcept__catch--span">{{ c.text }}</span>
      </p>
      <p class="TopConcept__catch" :class="{ 'show-text': showText }">
        <span v-for="e in eiusmodsunt" :key="e.id" v-bind:style="{ transitionDelay: `${e.id * 0.05}s` }"
          class="TopConcept__catch--span">{{ e.text }}</span>
      </p>
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
    display: flex;
    line-height: 2;
    font-size: 36px;
    letter-spacing: 0.1em;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
      padding-left: 10vw;
      font-size: 42px;
    }

    &:last-child {
      margin-bottom: 80px;

      @media screen and (min-width: 1024px) {
        margin-bottom: 340px;
      }
    }

    & span {
      translate: 0 100%;
      transition: .3s;
    }

    &.show-text span {
      translate: 0 0;
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