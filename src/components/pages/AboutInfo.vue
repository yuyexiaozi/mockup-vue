<script lang="ts">
import { defineComponent } from 'vue';
import AppViewMore from '@/components/AppViewMore.vue';

export default defineComponent({
  name: 'AboutInfo',
  components: {
    AppViewMore,
  }
});
</script>

<template>
  <div class="AboutInfo">
    <p class="AboutInfo__pic"><img src="@/assets/images/products_img01.jpg" alt="ディープリペアシャンプーモイスト" class="AvoutInfo__img">
    </p>
    <div class="AboutInfo__container">
      <p class="AboutInfo__read">PRODUCTS / IN BATH</p>
      <h2 class="AboutInfo__ttl">DEEP REPAIR <span class="AboutInfo__ttlSpan">SHAMPOO</span></h2>
      <p class="AboutInfo__sub">ディープリペア&nbsp;シャンプー&nbsp;モイスト</p>
      <p class="AboutInfo__price">450mL/¥1,650<small class="AboutInfo__small">(税込)</small></p>
      <p class="AboutInfo__txt">Aliquip duis non nulla amet esse dolor minim fugiat aute amet reprehenderit occaecat nisi.
        Quis labore aliqua pariatur aute nisi. Ipsum enim laborum pariatur id tempor reprehenderit qui.</p>
      <router-link to="/" class="AboutInfo__btn"><AppViewMore>BUY NOW</AppViewMore></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AboutInfo {
  margin-bottom: 90px;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
  &__pic {
    margin-bottom: 40px;
    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }
  &__container {
    @media screen and (min-width: 1024px) {
      flex-shrink: 0;
      width: 45%;
      padding-top: 40px;
    }
  }
  &__read {
    margin-bottom: 20px;
    font-size: 12px;
    letter-spacing: 0.05em;
    @media screen and (min-width: 1024px) {
      margin-bottom: 36px;
      font-size: 18px;
    }
  }
  &__ttl {
    margin-bottom: 12px;
    font-size: 32px;
    line-height: 2;
    letter-spacing: 0.1em;
    @media screen and (min-width: 1024px) {
      margin-bottom: 20px;
      font-size: 48px;
    }
  }
  &__ttlSpan {
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
  &__sub {
    line-height: 1.8;
    letter-spacing: 0.1em;
    font-size: 13px;
    font-weight: 400;
    @media screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  &__price {
    margin-bottom: 20px;
    line-height: 1.8;
    letter-spacing: 0.1em;
    font-size: 13px;
    font-weight: 400;
    @media screen and (min-width: 1024px) {
      font-size: 14px;
    }
  }
  &__txt {
    margin-bottom: 44px;
    line-height: 1.8;
    letter-spacing: 0.05em;
    font-size: 13px;
    font-weight: 400;
    @media screen and (min-width: 1024px) {
      font-size: 18px;
    }
  }
  &__btn {
    display: block;
    width: 70%;
    @media screen and (min-width: 1024px) {
      width: 40%;
    }
  }
}
</style>