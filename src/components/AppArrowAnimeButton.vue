<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppArrowAnimeButton',
});
</script>

<template>
  <div class="btn">
    <div class="btn__txt">
      <slot />
    </div>
    <div class="btn__arrow">
      <div class="btn__circle"></div>
      <div class="btn__pic"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    width: fit-content;
    margin-left: auto;
    @media screen and (min-width: 1024px) {
      margin-left: 0;
      transition: .2s;
    }
    
    &__txt {
      font-size: 13px;
      color: #000;
      letter-spacing: 0.05em;
      @media screen and (min-width: 1024px) {
        font-size: 18px;
        transition: 0.2s;
      }
    }
    
    &__arrow {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;
      @media screen and (min-width: 1024px) {
        width: 48px;
        height: 48px;
        &::after {
          content: "";
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          background: #000;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: .2s;
        }
      }
    }
    &__pic {
      position: relative;
      width: 50%;
      height: 50%;
      background: url(~@/assets/images/arrow_bk.svg);
      z-index: 1;
      animation: arrowFade 1s forwards;
    }
    &__circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;
      height: 36px;
      border: 1px solid #000;
      border-radius: 50%;
      @media screen and (min-width: 1024px) {
        width: 48px;
        height: 48px;
      }
    }
    &:hover {
      @media screen and (min-width: 1024px) {
        gap: 15px;
        .btn__txt {
          padding-left: 5px;
        }
        .btn__arrow::after {
          transform: scaleY(1);
        }
        .btn__pic {
          background: url(~@/assets/images/arrow_wh.svg) no-repeat;
          animation: arrowSlide .8s forwards;
        }
      }
    }
  }
  @keyframes arrowSlide {
    0% {
      // translate: 0%;
      background-position: center center;
    }
    50% {
      // translate: 150%;
      background-position: 40px center;
    }
    51% {
      // translate: -100%;
      background-position: -40px center;
    }
    100% {
      // translate: 0%;
      background-position: center center;
    }
  }
  @keyframes arrowFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>