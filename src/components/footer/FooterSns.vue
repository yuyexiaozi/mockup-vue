<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterSns',
});
</script>

<template>
  <div class="FooterSns">
    <p class="FooterSns__pic"><a href="https://www.instagram.com/" class="FooterSns__link" target="_blank"><img src="@/assets/images/footer_insta.png" alt="インスタグラムアイコン" class="FooterSns__img"></a></p>
    <p class="FooterSns__pic"><a href="https://www.twitter.com/" class="FooterSns__link" target="_blank"><img src="@/assets/images/footer_twitter.png" alt="ツイッターアイコン" class="FooterSns__img"></a></p>
  </div>
</template>

<style lang="scss" scoped>
  .FooterSns {
    display: flex;
    gap: 40px;
    @media screen and (min-width: 1024px) {
      gap: 30px;
    }
    &__pic {
      width: 28px;
      @media screen and (min-width: 1024px) {
        width: 24px;
      }
    }
  }
</style>