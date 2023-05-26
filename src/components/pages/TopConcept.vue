<script lang="ts">
import { defineComponent } from 'vue';
// import { gsap } from 'gsap';
import AppArrowAnimeButton from '@/components/AppArrowAnimeButton.vue'


export default defineComponent({
  name: 'TopConcept',
  data() {
    return {
      showText: false,
      // chatch01: 'Consectetur',
      // chatch02: 'eiusmod sunt.'
    };
  },
  // beforeMount() {
  //   const topConceptCopyes = document.querySelectorAll('.TopConcept__catch');
  //   topConceptCopyes.forEach((topConceptChatch) => {
  //     topConceptChatch.innerHTML = this.wrapCharSpan(topConceptChatch?.innerHTML)
  //   });
  // },
  mounted() {
    const topConcept = document.querySelector('#TopConcept');
    if (!topConcept) {
      return
    }
    let Y: number = window.scrollY;
    const topConceptY = topConcept.getBoundingClientRect().y - Y;
    window.addEventListener('scroll', () => {
      Y = window.scrollY;
      if (Y > topConceptY - 100) {
        // this.animationText();
        this.showText = true;
      }
    });
  },
  methods: {
    // wrapCharSpan(str: string) {
    //   return [...str].map(char => `<span class="text" style="display: block; translate: 0 100%;">${char}</span>`).join('');
    // }
    // animationText() {
    //   const chars = this.$refs;
    //   Object.keys(chars).forEach(key => {
    //     const char = chars[key] as HTMLElement;
    //     if(char){
    //       gsap.from(char, { 
    //         opacity: 0, 
    //         duration: 1,
    //         delay: 0.1 * parseInt(key.split('-')[1]) });
    //     }
    //   });
    // }
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
        <span class="TopConcept__catch--span">C</span>
        <span class="TopConcept__catch--span">o</span>
        <span class="TopConcept__catch--span">n</span>
        <span class="TopConcept__catch--span">s</span>
        <span class="TopConcept__catch--span">e</span>
        <span class="TopConcept__catch--span">c</span>
        <span class="TopConcept__catch--span">t</span>
        <span class="TopConcept__catch--span">e</span>
        <span class="TopConcept__catch--span">t</span>
        <span class="TopConcept__catch--span">u</span>
        <span class="TopConcept__catch--span">r</span>
      </p>
      <p class="TopConcept__catch" :class="{ 'show-text': showText }">
        <span class="TopConcept__catch--span">e</span>
        <span class="TopConcept__catch--span">i</span>
        <span class="TopConcept__catch--span">u</span>
        <span class="TopConcept__catch--span">s</span>
        <span class="TopConcept__catch--span">m</span>
        <span class="TopConcept__catch--span">o</span>
        <span class="TopConcept__catch--span">d</span>
        <span class="TopConcept__catch--span"></span>
        <span class="TopConcept__catch--span">s</span>
        <span class="TopConcept__catch--span">u</span>
        <span class="TopConcept__catch--span">n</span>
        <span class="TopConcept__catch--span">t</span>
        <span class="TopConcept__catch--span">.</span>
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