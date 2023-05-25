<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterContactPrivacy'
});
</script>

<template>
  <div class="FooterContactPrivacy">
    <router-link to="/about" class="FooterContactPrivacy__link">CONTACT US</router-link>
    <router-link to="/about" class="FooterContactPrivacy__link">PRIVACY POLICY</router-link>
  </div>
</template>

<style lang="scss" scoped>
.FooterContactPrivacy {
  display: flex;
  gap: 30px;
  margin-bottom: 24px;

  @media screen and (min-width: 1024px) {
    display: block;
    order: 1;
  }

  &__link {
    display: block;
    color: #000;
    line-height: 2.5;
    font-size: 11px;
    letter-spacing: 0.05em;

    @media screen and (min-width: 1024px) {
      font-size: 15px;
      transition: .3s;
      &:hover {
        color: $fnavHoverGray;
      }
    }
  }
}</style>