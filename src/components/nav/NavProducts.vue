<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  name: 'NavProducts',
  methods: {
    ...mapMutations(['closeNav']),
    close() {
      this.closeNav();
    },
    open(event: any) {
      event.target.classList.toggle('open');
    }
  }
});
</script>

<template>
  <ul class="NavProducts">
    <li class="NavProducts__list">
      <router-link class="NavProducts__link" to="/about" @click="close">-SHAMPOO</router-link>
    </li>
    <li class="NavProducts__list">
      <router-link class="NavProducts__link" to="/" @click="close">-TREATMENT</router-link>
    </li>
    <li class="NavProducts__list">
      <router-link class="NavProducts__link" to="/" @click="close">-PREMIUM MASK</router-link>
    </li>
    <li class="NavProducts__list">
      <router-link class="NavProducts__link" to="/" @click="close">-HAIR MIST</router-link>
    </li>
    <li class="NavProducts__list">
      <router-link class="NavProducts__link" to="/" @click="close">-HAIR MILK</router-link>
    </li>
    <li class="NavProducts__list" @click="open($event)">+HAIR OIL
      <ul class="NavProducts__oil">
        <li class="NavProducts__oil__list">
          <router-link class="NavProducts__oil__link" to="/" @click="close">-MOIST</router-link>
        </li>
        <li class="NavProducts__oil__list">
          <router-link class="NavProducts__oil__link" to="/" @click="close">-SLEEK</router-link>
        </li>
      </ul>
    </li>
    <li class="NavProducts__list" @click="open($event)">+HEAD SPA BRUSH
      <ul class="NavProducts__brush">
        <li class="NavProducts__brush__list">
          <router-link class="NavProducts__brush__link" to="/" @click="close">-SOFT</router-link>
        </li>
        <li class="NavProducts__brush__list">
          <router-link class="NavProducts__brush__link" to="/" @click="close">-HARD</router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.NavProducts {
  &__list {
    font-size: 12px;
    line-height: 2.5;
    letter-spacing: 0.1em;
    cursor: pointer;

    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }

  &__link {
    color: #000;
    line-height: 2.5;
    transition: .3s;

    @media screen and (min-width: 1024px) {
      &:hover {
        color: $navHoverGray;
        transition-delay: 0s;
      }
    }
  }

  //HAIR OIL
  &__oil {
    height: 0px;
    padding-left: 3%;
    line-height: 2.5;
    font-size: 80%;
    animation: hiddenListSp 1s forwards;

    &__link {
      color: #000;
      opacity: 0;
      pointer-events: none;
      transition: .3s;
      animation: hiddenListPc 1s forwards;
      transition: .3s;

      @media screen and (min-width: 1024px) {
        
        &:hover {
          color: $navHoverGray;
        }
      }
    }
  }
  
  // HEAD SPA BRUSH
  &__brush {
    height: 0;
    padding-left: 3%;
    line-height: 2.5;
    font-size: 80%;
    animation: hiddenListSp 1s forwards;
    
    @media screen and (min-width: 1024px) {
      height: auto;
    }
    
    &__link {
      color: #000;
      opacity: 0;
      pointer-events: none;
      transition: .3s;
      
      @media screen and (min-width: 1024px) {
        &:hover {
          color: $navHoverGray;
        }
      }
    }
  }
  
  .open {
    .NavProducts__oil {
      animation: showListSp .6s forwards ease-in-out;
      
      @media screen and (min-width: 1024px) {
        animation: showListPc .6s forwards ease-in-out;
        color: #000;
      }
      
      &__link {
        opacity: 1;
        pointer-events: visible;
        transition-delay: .8s, 0s;
        transition-property: opacity, color;
      }
    }
    
    .NavProducts__brush {
      animation: showListSp .6s forwards ease-in-out;
      
      @media screen and (min-width: 1024px) {
        animation: none;
      }
      
      &__link {
        opacity: 1;
        pointer-events: visible;
        transition-delay: .8s, 0s;
        transition-property: opacity, color;
        @media screen and (min-width: 1024px) {
          transition-delay: 0s, 0s;
        }
      }
    }
  }
}

@keyframes showListSp {
  0% {
    height: 0px;
  }

  100% {
    height: 50px;
  }
}

@keyframes showListPc {
  0% {
    height: 0px;
  }

  100% {
    height: 75px;
  }
}

@keyframes hiddenListSp {
  0% {
    height: 50px;
  }

  40% {
    height: 50px;
  }

  100% {
    height: 0px;
  }
}

@keyframes hiddenListPc {
  0% {
    height: 75px;
  }

  40% {
    height: 75px;
  }

  100% {
    height: 0px;
  }
}</style>