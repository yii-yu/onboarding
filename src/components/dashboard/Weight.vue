<template>
  <div class="dashboard-component">
    <h2 class="dashboard-title">
      Choose Your
      <br />
      <slot></slot>
    </h2>

    <nav>
      <div
        v-for="nameUnit in unitsBind.Weight"
        :key="nameUnit"
        :class="{ active: unit == nameUnit }"
        class="btn"
      >
        <BaseIcon
          v-if="unit == nameUnit"
          icon-name="pointer-down"
          width="16px"
          height="16px"
        />

        <div @click="changeUnit(nameUnit)">
          {{ nameUnit }}
        </div>
      </div>
    </nav>
    <RulerX
      :key="rulerInit.weight[unit][gender].value"
      :start-value="weight"
      name-screen="weight"
      :screen-height="screenWidth"
      :measure-unit="unit"
      @change-value="changeWeight"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

import { key } from '../../store';
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
import BaseIcon from '../icons/BaseIcon.vue';
import RulerX from './RulerX.vue';
import { rulerInit, unitsBind } from '../../utilities/settings';
import { conversion } from '../../utilities/unitConversion';
const props = defineProps({
  screenHeight: {
    type: Number,
    default: 0,
  },
  screenWidth: {
    type: Number,
    default: 0,
  },
});
const store = useStore(key);
const gender = store.getters.gender;
const unit = computed(() => store.getters.unitWeight);
const weight = ref(
  store.getters.weight ?? rulerInit.weight[unit.value][gender].value
);

const changeWeight = (w: number) => {
  weight.value = w;
};

const changeUnit = (nameUnit: string) => {
  if (nameUnit == unit.value) return;
  store.commit('setUnitWeight', nameUnit);
  store.commit('setWeight', conversion(unit.value, Math.round(weight.value)));
  weight.value = Math.round(store.getters.weight);
};

onBeforeUnmount(() => {
  store.commit('setWeight', weight);
});

</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: calc(50% + 50px);

  div {
    margin: 0 15px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
    div {
      opacity: 0.5;
    }
    &.active div {
      opacity: 1;
    }
  }
}
</style>
