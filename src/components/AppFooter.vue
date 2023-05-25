<script lang="ts">
import { defineComponent } from 'vue';
import FooterNav from '@/components/footer/FooterNav.vue';
import FooterOnline from '@/components/footer/FooterOnline.vue';
import FooterSns from '@/components/footer/FooterSns.vue';
import FooterContactPrivacy from '@/components/footer/FooterContactPrivacy.vue';
import FooterOfficeInfo from '@/components/footer/FooterOfficeInfo.vue';

export default defineComponent({
  name: 'AppFooter',
  components: {
    FooterNav,
    FooterOnline,
    FooterSns,
    FooterContactPrivacy,
    FooterOfficeInfo,
  }
});
</script>

<template>
  <footer class="AppFooter">
    <div class="AppFooter__container">
      <p class="AppFooter__ttl"><router-link to="/" >MOCK Up</router-link></p>
      <div class="AppFooter__box--01">
        <FooterNav />
        <div class="AppFooter__unit--01">
          <FooterOnline />
          <FooterSns class="AppFooter__sns--01" />
        </div>
      </div>
      <div class="AppFooter__box--02">
        <FooterContactPrivacy />
        <FooterOfficeInfo />
        <FooterSns class="AppFooter__sns--02" />
      </div>
    </div>
    <p class="AppFooter__copy"><small class="AppFooter__small">&copy;2023 MOCK Up Inc. All Right Reserved.</small></p>
  </footer>
</template>

<style lang="scss" scoped>
.AppFooter {
  padding: 60px 0 60px 50px;
  @media screen and (min-width: 1024px) {
    padding: 120px 7vw;
  }
  &__container {
    margin-bottom: 24px;
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
    }
  }
  &__ttl {
    margin-bottom: 50px;
    font-size: 20px;
    letter-spacing: 0.2em;
    @media screen and (min-width: 1024px) {
      font-size: 30px;
    }
    a {
      color: #000;
    }
  }
  &__box--01 {
    display: flex;
    margin-bottom: 30px;
    @media screen and (min-width: 1024px) {
      display: block;
      margin-bottom: 0;
    }
  }
  &__box--02 {
    display: flex;
    flex-direction: column;
  }
  &__sns {
    &--01{
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
    &--02 {
      display: none;
      @media screen and (min-width: 1024px) {
        display: flex;
        order: 2;
      }
    }
  }
  &__copy {
    font-size: 10px;
    font-weight: 400;
    @media screen and (min-width: 1024px) {
      font-size: 12px;
      letter-spacing: 0.05em;
    }
  }
}
</style>