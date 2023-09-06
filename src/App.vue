<template>
  <div class="layout">
    <CommunicationIframe />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import CommunicationIframe from './components/CommunicationIframe.vue';
</script>

<style lang="scss">
@import './assets/styles/helpers/variables';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
}
.layout {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
