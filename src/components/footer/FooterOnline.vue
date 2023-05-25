<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterOnline',
});
</script>

<template>
  <div class="FooterOnline">
    <p class="FooterOnline__lead">ONLINE STORE</p>
    <p class="FooterOnline__btn"><a href="https://www.rakuten.co.jp/" class="FooterOnline__link"
        target="_blank">-RAKUTEN</a></p>
    <p class="FooterOnline__btn"><a href="https://www.amazon.co.jp/" class="FooterOnline__link"
        target="_blank">-AMAZON</a></p>
  </div>
</template>

<style lang="scss" scoped>
.FooterOnline {
  margin-bottom: 30px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }

  &__lead {
    margin-bottom: 10px;
    line-height: 2;
    font-size: 13px;

    @media screen and (min-width: 1024px) {
      font-size: 20px;
    }
  }

  &__btn {
    font-size: 11px;

    @media screen and (min-width: 1024px) {
      font-size: 15px;
    }
  }

  &__link {
    display: block;
    padding: 10px 0;
    color: #000;
    letter-spacing: 0.05em;
    transition: .3s;

    @media screen and (min-width: 1024px) {
    &:hover {
        color: $fnavHoverGray;
      }
    }
  }
}</style>