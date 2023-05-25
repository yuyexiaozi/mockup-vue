<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterNav',
});
</script>

<template>
  <nav class="fnav">
    <ul class="fnav__nav">
      <li class="fnav__list"><router-link to="/" class="fnav__link">HOME</router-link></li>
      <li class="fnav__list"><router-link to="/about" class="fnav__link">ABOUT</router-link></li>
      <li class="fnav__list"><router-link to="/about" class="fnav__link">PRODUCTS</router-link></li>
      <li class="fnav__list"><router-link to="/about" class="fnav__link">NEWS</router-link></li>
      <li class="fnav__list"><router-link to="/about" class="fnav__link">Q&A</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.fnav {
  width: 50%;

  &__list {
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;

      @media screen and (min-width: 1024px) {
        margin-bottom: 12px;
      }
    }
  }

  &__link {
    display: block;
    padding: 8px 0;
    color: #000;
    font-size: 13px;
    letter-spacing: 0.05em;

    @media screen and (min-width: 1024px) {
      font-size: 20px;
      transition: .3s;
      &:hover {
        color: $fnavHoverGray;
      }
    }

  }
}</style>