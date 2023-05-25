<script lang="ts">
import { defineComponent } from 'vue';
import AppViewMore from '@/components/AppViewMore.vue'

export default defineComponent({
  name: 'TopInBath',
  components: {
    AppViewMore
  }
});
</script>

<template>
  <div class="inBath">
    <div class="inBath__box">
      <p class="inBath__pic"><img src="@/assets/images/products_img01.jpg" alt="ディープリペアシャンプー画像" class="inBath__img"></p>
      <div class="inBath__unit">
        <p class="inBath__name--en">DEEP REPAIR SHAMPOO</p>
        <p class="inBath__name--ja">ディープリペア シャンプー モイスト</p>
        <p class="inBath__price">220ml/¥1,650<small>(税込)</small></p>
        <router-link to="/about">
          <AppViewMore>ViewMore</AppViewMore>
        </router-link>
      </div>
    </div>
    <div class="inBath__box">
      <p class="inBath__pic"><img src="@/assets/images/products_img01.jpg" alt="ディープリペアトリートメント画像" class="inBath__img"></p>
      <div class="inBath__unit">
        <p class="inBath__name--en">DEEP REPAIR TREATMENT</p>
        <p class="inBath__name--ja">ディープリペア ヘアトリートメント モイスト</p>
        <p class="inBath__price">220ml/¥1,650<small class="inBath__small">(税込)</small></p>
        <router-link to="/about">
          <AppViewMore>ViewMore</AppViewMore>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inBath {
  margin-bottom: 80px;
  text-align: center;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }

  &__box {
    @media screen and (min-width: 1024px) {
      width: 48%;
    }
    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }

  &__pic {
    margin-bottom: 30px;
  }

  &__unit {
    width: 65%;
    margin: 0 auto;
    @media screen and (min-width: 1024px) {
      width: 90%;
    }
  }

  &__name--en {
    margin-bottom: 16px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.1em;
    @media screen and (min-width: 1024px) {
      margin-bottom: 20px;
      font-size: 24px;
      letter-spacing: 0.05em;
    }
  }

  &__name--ja {
    margin-bottom: 8px;
    font-size: 12px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }

  &__price {
    margin-bottom: 28px;
    font-size: 12px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 30px;
    }
  }

  &__small {
    font-size: 10px;
  }

  .more {
    width: 65%;
    margin: 0 auto;
  }
}
</style>