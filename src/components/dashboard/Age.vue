<template>
  <div class="dashboard-component">
    <h2 class="dashboard-title">Choose Your <br /><slot></slot></h2>

    <div class="current-value-liner">
      <span>{{ Math.round(age) }}</span>
      <span>years</span>
    </div>

    <RulerY
      :start-value="age"
      name-screen="age"
      :screen-height="screenHeight"
      measure-unit="year"
      @change-value="changeAge"
    />
  </div>
</template>

<script setup lang="ts">

import RulerY from './RulerY.vue';
import { useStore } from 'vuex';
import { ref, onBeforeUnmount } from 'vue';
import { key } from '../../store/';
import { rulerInit } from '../../utilities/settings';

defineProps({
  screenHeight: {
    type: Number,
    default: 0,
  },
});
const store = useStore(key);
const age = ref(store.getters.age ?? rulerInit.age.value);

const changeAge = (a: number) => {
  age.value = a;
};
onBeforeUnmount(() => {
  store.commit('setAge', age.value);
});
</script>
