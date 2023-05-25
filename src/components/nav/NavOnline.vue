<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavOnline',
});
</script>

<template>
  <div class="NavOnline">
    <p class="NavOnline__lead">ONLINE STORE</p>
    <p class="NavOnline__btn"><a href="https://www.rakuten.co.jp/" class="NavOnline__link" target="_blank">-RAKUTEN</a>
    </p>
    <p class="NavOnline__btn"><a href="https://www.amazon.co.jp/" class="NavOnline__link" target="_blank">-AMAZON</a></p>
  </div>
</template>

<style lang="scss" scoped>
.NavOnline {
  margin-bottom: 30px;

  &__lead {
    margin-bottom: 10px;
    line-height: 2;
    font-size: 13px;

    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }

  &__btn {
    font-size: 11px;
  }

  &__link {
    display: block;
    padding: 10px 0;
    color: #000;
    letter-spacing: 0.05em;
    transition: .3s;

    @media screen and (min-width: 1024px) {
      &:hover {
        color: $navHoverGray;
      }
    }
  }
}</style>