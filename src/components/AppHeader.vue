<script lang="ts">
import { defineComponent } from 'vue';
import AppMenuTrigger from '@/components/header/AppMenuTrigger.vue'

export default defineComponent({
  name: "AppHeader",
  components: {
    AppMenuTrigger,
  }
});
</script>

<template>
  <header id="AppHeader" class="AppHeader">
    <h1 class="AppHeader__ttl"><router-link class="AppHeader__link" to="/">MOCK Up</router-link></h1>
    <AppMenuTrigger />
  </header>
</template>

<style lang="scss">
.AppHeader {
  padding: 20px;
  &__ttl {
    width: fit-content;
    margin: 0 auto;
    padding: 10px;
    font-size: 24px;
    letter-spacing: 0.2em;
    @media screen and (min-width: 1024px) {
      padding: 16px;
      font-size: 40px;
    }
  }
  &__link {
    color: #000;
  }
}
</style>