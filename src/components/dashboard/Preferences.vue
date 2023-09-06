<template>
  <div>
    <h2 class="dashboard-title"><slot></slot></h2>

    <ButtonOptions
      v-for="(clothes, index) of typeСlothing"
      :key="index"
      :is-active="[...store.getters.preferences].includes(clothes)"
      :image-name="imageName(clothes)"
      icon-color="#FA5959"
      @click="() => store.dispatch('addPreference', clothes)"
      >{{ ucFirst(clothes) }}</ButtonOptions
    >
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '../../store/';
import { ucFirst } from '../../utilities/help';
import { typeСlothing } from '../../utilities/settings';
import ButtonOptions from './ButtonOptions.vue';

const store = useStore(key);

const imageName = (name: string): string => {
  let nameFile =
    store.getters.gender + '-' + name.split(' ').join('-') + '.png';
  return new URL(`../../assets/images/dashboard/${nameFile}`, import.meta.url).href;
};

</script>

<style lang="scss" scoped>
.dashboard {
  .dashboard-component {
    h2 {
      margin-top: 50px;
    }
  }
}
</style>
