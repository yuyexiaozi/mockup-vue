<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutFeature'
});
</script>

<template>
  <div class="AboutFeature">
    <p class="AboutFeature__sub">FEATURES</p>
    <ul class="AboutFeature__ul">
      <li class="AboutFeature__list">うねりケア</li>
      <li class="AboutFeature__list">湿気ブロック</li>
      <li class="AboutFeature__list">パサつき</li>
      <li class="AboutFeature__list">キューティクル補修</li>
      <li class="AboutFeature__list">ヒートプロテクト</li>
    </ul>
    <p class="AboutFeature__scent">アクアブロッサムの香り</p>
  </div>
</template>

<style lang="scss" scoped>
.AboutFeature {
  &__sub {
    margin-bottom: 30px;
    letter-spacing: 0.1em;
    font-size: 13px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 40px;
      font-size: 24px;
    }
  }
  &__ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }
  &__list {
    width: fit-content;
    padding: 12px;
    border: 1px solid;
    border-radius: 30px;
    letter-spacing: 0.05em;
    font-size: 12px;
    list-style-type: none;
    @media screen and (min-width: 1024px) {
      padding: 20px 29px;
      border: 2px solid;
      font-size: 18px;
    }
  }
  &__scent {
    padding: 12px 0;
    background: #fff;
    border-radius: 30px;
    letter-spacing: 0.1em;
    text-align: center;
    font-size: 12px;
    @media screen and (min-width: 1024px) {
      width: 480px;
      padding: 20px 0;
      font-size: 18px;
    }
  }
}
</style>