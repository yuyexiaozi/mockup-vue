<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavSns'
});
</script>

<template>
  <div class="NavSns">
    <div class="NavSns">
    <p class="NavSns__pic"><a href="https://www.instagram.com/" class="NavSns__link" target="_blank"><img src="@/assets/images/footer_insta.png" alt="インスタグラムアイコン" class="NavSns__img"></a></p>
    <p class="NavSns__pic"><a href="https://www.twitter.com/" class="NavSns__link" target="_blank"><img src="@/assets/images/footer_twitter.png" alt="ツイッターアイコン" class="NavSns__img"></a></p>
  </div>
  </div>
</template>


<style lang="scss" scoped>
  .NavSns {
    display: flex;
    gap: 40px;
    &__pic {
      width: 28px;
    }
  }
</style>