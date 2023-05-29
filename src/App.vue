<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppNav from '@/components/AppNav.vue';
import router from '@/router';

export default defineComponent({
  components: {
    AppHeader,
    AppNav,
    AppFooter,
  }
});
</script>

<template>
  <div class="App">
    <AppHeader />
    <AppNav />
  </div>
  <router-view />
  <AppFooter />
</template>

<style lang="scss">
</style>
