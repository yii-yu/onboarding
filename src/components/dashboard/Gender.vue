<template>
  <div>
    <h2 class="dashboard-title">Choose Your <br /><slot></slot></h2>
    <div class="wrap">
      <ButtonOptions
        size="m"
        :is-active="store.getters.gender === 'man'"
        icon="male"
        icon-color="#FA5959"
        @click="() => store.dispatch('changeGender', 'man')"
        >Man</ButtonOptions
      >
      <ButtonOptions
        :is-active="store.getters.gender === 'woman'"
        icon="female"
        icon-color="#FA5959"
        @click="() => store.dispatch('changeGender', 'woman')"
        >Woman</ButtonOptions
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonOptions from './ButtonOptions.vue';
import { useStore } from 'vuex';
import { key } from '../../store';

const store = useStore(key);
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
