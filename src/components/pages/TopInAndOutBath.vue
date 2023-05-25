<script lang="ts">
import { defineComponent } from 'vue';
import AppViewMore from '@/components/AppViewMore.vue'

export default defineComponent({
  name: 'TopInAndOutBath',
  components: {
    AppViewMore,
  }
});
</script>

<template>
  <div class="inAndOutBath">
    <div class="inAndOutBath__box">
      <p class="inAndOutBath__pic"><img src="@/assets/images/products_img02.jpg" alt="ヘアオイル画像" class="inAndOutBath__img"
          href="#"></p>
      <div class="inAndOutBath__unit">
        <p class="inAndOutBath__name--en">DEEP PEPAIR<span class="inAndOutBath__name--span">HAIR OIL MOIST</span></p>
        <p class="inAndOutBath__name--ja">ディープリペア<span class="inAndOutBath__name--span">ヘアオイル モイスト</span></p>
        <p class="inAndOutBath__price">100ml/¥1,200<small class="inAndOutBath__small">(税込)</small></p>
        <router-link to="/about">
          <AppViewMore>ViewMore</AppViewMore>
        </router-link>
      </div>
    </div>
    <div class="inAndOutBath__box">
      <p class="inAndOutBath__pic"><img src="@/assets/images/products_img03.jpg" alt="ヘアオイル画像" class="inAndOutBath__img"
          href="#"></p>
      <div class="inAndOutBath__unit">
        <p class="inAndOutBath__name--en">DEEP PEPAIR<span class="inAndOutBath__name--span">HAIR OIL MOIST</span></p>
        <p class="inAndOutBath__name--ja">ディープリペア<span class="inAndOutBath__name--span">ヘアオイル モイスト</span></p>
        <p class="inAndOutBath__price">100ml/¥1,200<small class="inAndOutBath__small">(税込)</small></p>
        <router-link to="/about">
          <AppViewMore>ViewMore</AppViewMore>
        </router-link>
      </div>
    </div>
    <div class="inAndOutBath__box">
      <p class="inAndOutBath__pic"><img src="@/assets/images/products_img04.jpg" alt="ヘアオイル画像" class="inAndOutBath__img"
          href="#"></p>
      <div class="inAndOutBath__unit">
        <p class="inAndOutBath__name--en">DEEP PEPAIR<span class="inAndOutBath__name--span">HAIR OIL MOIST</span></p>
        <p class="inAndOutBath__name--ja">ディープリペア<span class="inAndOutBath__name--span">ヘアオイル モイスト</span></p>
        <p class="inAndOutBath__price">100ml/¥1,200<small class="inAndOutBath__small">(税込)</small></p>
        <router-link to="/about">
          <AppViewMore>ViewMore</AppViewMore>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.inAndOutBath {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  text-align: center;

  &__box {
    width: 48%;
    @media screen and (min-width: 1024px) {
      width: 30%;
    }
  }

  &__pic {
    height: 250px;
    margin-bottom: 30px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__unit {
    width: 90%;
    min-width: 135px;
    margin: 0 auto;
  }

  &__name {
    &--en {
      margin-bottom: 16px;
      line-height: 1.2;
      font-size: 15px;
      letter-spacing: 0.1em;
      @media screen and (min-width: 1024px) {
        margin-bottom: 18px;
        line-height: 1.5;
        font-size: 20px;
      }
    }

    &--ja {
      margin-bottom: 8px;
      line-height: 1.2;
      font-size: 11px;
      letter-spacing: 0.1em;
      @media screen and (min-width: 1024px) {
        margin-bottom: 10px;
        font-size: 14px;
      }
    }

    &--span {
      display: block;
    }
  }

  &__price {
    margin-bottom: 28px;
    font-size: 11px;
    letter-spacing: 0.1em;
    @media screen and (min-width: 1024px) {
      margin-bottom: 32px;
    }
  }

  .more {
    width: 80%;
    margin: 0 auto;
  }
}
</style>