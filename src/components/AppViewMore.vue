<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppViewMore',
});
</script>

<template>
  <div class="more">
    <span class="more__link"><slot /></span>
  </div>
</template>

<style lang="scss" scoped>
.more {
  border: 1px solid #000;
  border-radius: 30px;
  overflow: hidden;
  &__link {
    position: relative;
    display: block;
    padding: 14px 0;
    color: #000;
    text-align: center;
    font-size: 14px;
    transition: .2s;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 100%;
      background: #000;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: .2s;
      z-index: -1;
    }
    @media screen and (min-width: 1024px) {
      &:hover {
        color: #fff;
        &::after {
          transform: scaleY(1);
        }
      }
    }
  }
}
</style>