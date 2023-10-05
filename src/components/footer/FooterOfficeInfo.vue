<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterOfficeInfo',
});
</script>

<template>
  <div class="FooterOfficeInfo">
    <p class="FooterOfficeInfo__name">MOCU Up inc.</p>
    <ul class="FooterOfficeInfo__ul">
      <li class="FooterOfficeInfo__list">〒060-0005<br>Sapporo si chuoku kita 5 jo nishi 6 chome</li>
      <li class="FooterOfficeInfo__list">Tel.011-206-8836</li>
      <li class="FooterOfficeInfo__list">10:00～19:00</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.FooterOfficeInfo {
  line-height: 2;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.05em;
  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
    font-size: 15px;
  }
  &__list {
    list-style-type: none;
  }
}
//push test
//push test2
</style>
