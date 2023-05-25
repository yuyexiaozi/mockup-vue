<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import NavProducts from '@/components/nav/NavProducts.vue';
import NavOnline from '@/components/nav/NavOnline.vue';
import NavSns from '@/components/nav/NavSns.vue';

export default defineComponent({
  name: 'AppNav',
  methods: {
    // closeNav() {
    //   const appNav  = document.querySelector('#AppNav');
    //   const appHeaderTrigger = document.querySelector('#AppHeader__trigger');
    //   if(appNav && appHeaderTrigger){
    //     appNav?.classList.remove('navOpen');
    //     appHeaderTrigger.classList.remove('isOpen');
    //   }
    // }
    ...mapMutations(['closeNav']),
    close() {
      this.closeNav();
    }
  },
  components: {
    NavProducts,
    NavOnline,
    NavSns,
  }
});
</script>

<template>
  <nav id="AppNav" class="AppNav">
    <ul class="AppNav__nav">
      <li class="AppNav__list AppNav__list--01"><router-link class="AppNav__link" to="/" @click="close">TOP</router-link>
      </li>
      <li class="AppNav__list AppNav__list--02">PRODUCTS
        <NavProducts />
      </li>
      <li class="AppNav__list AppNav__list--03"><router-link class="AppNav__link" to="/About"
          @click="close">ABOUT</router-link></li>
      <li class="AppNav__list AppNav__list--04"><router-link class="AppNav__link" to="/About"
          @click="close">NEWS</router-link></li>
      <li class="AppNav__list AppNav__list--05"><router-link class="AppNav__link" to="/About"
          @click="close">Q&A</router-link></li>
      <li class="AppNav__list AppNav__list--06">
        <NavOnline />
      </li>
      <li class="AppNav__list AppNav__list--07">
        <NavSns />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.AppNav {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  height: 0;
  background: $colorLightGray;
  overflow: hidden;
  z-index: 1;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }

  &__nav {
    padding: 10vh 0 10vh 10vw;
    overscroll-behavior: none;

    @media screen and (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      flex-shrink: 0;
      width: 60vw;
      height: 90vh;
      padding-top: 140px;
    }
  }

  &__list {
    margin-bottom: 0.6em;
    line-height: 1.5;
    font-size: 20px;

    @media screen and (min-width: 1024px) {
      font-size: 30px;
    }

    &--02 {
      @media screen and (min-width: 1024px) {
        order: 1;
      }
    }
  }

  &__link {
    color: #000;
    line-height: 1.5;
    transition: .3s;

    &:hover {
      @media screen and (min-width: 1024px) {
        color: $navHoverGray;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    align-self: center;
    width: 40vw;
    height: 50vh;
    background: url(~@/assets/images/concept_img01.jpg) center center / cover;

    @media screen and (min-width: 1024px) {
      width: 30vw;
      height: 100vh;
    }
  }
}

.navOpen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: showNav .5s forwards;
  overflow: auto;
  z-index: 2;
}

@keyframes showNav {
  0% {
    height: 0px;
  }

  100% {
    height: 100%;
  }
}</style>