<script lang="ts">
import { defineComponent, computed } from 'vue';
import { clickEvent } from '@/store/app.config'

export default defineComponent({
  name: "AppMenuTrigger",
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    navOpen() {
      const appNav:any = document.querySelector('#AppNav');
      this.isOpen = !this.isOpen;
      appNav.classList.toggle('navOpen');
    }
  }
});
</script>

<template>
  <div id="AppHeader__trigger" class="AppHeader__trigger" @click="navOpen" v-bind:class="{isOpen}">
    <span class="AppHeader__triggerBar -top"></span>
    <span class="AppHeader__triggerBar -middle"></span>
    <span class="AppHeader__triggerBar -bottom"></span>
  </div>
</template>

<style lang="scss" scoped>
  .AppHeader__trigger{
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 3;
    &Bar {
      position: absolute;
      display: block;
      width: 80%;
      height: 2px;
      background: #000;
      transition: .3s;
    }
    & .-top {
      transform: translateY(-8px);
    }
    & .-bottom {
      transform: translateY(8px);
    }
  }

  .isOpen {
    & .-top {
      transform: rotate(45deg);
    }
    & .-middle {
      opacity: 0;
      visibility: hidden;
    }
    & .-bottom {
      transform: rotate(-45deg);
    }
  }
</style>