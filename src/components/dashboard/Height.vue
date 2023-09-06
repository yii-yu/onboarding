<template>
  <div class="dashboard-component">
    <h2 class="dashboard-title">
      Choose Your
      <br /><slot></slot>
    </h2>

    <div class="current-value-liner">
      <span v-if="unit !== 'ft'">{{ Math.round(height) }} {{ unit }}</span>
      <span v-else>
        {{ inchToFt(height)[0] }}&prime; {{ inchToFt(height)[1] }}&Prime;
      </span>
    </div>

    <nav>
      <div
        v-for="nameUnit in unitsBind.Height"
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
          {{ nameUnit }} <span v-if="nameUnit == 'ft'">in</span>
        </div>
      </div>
    </nav>

    <RulerY
      :key="rulerInit.height[unit][gender].value"
      :start-value="height"
      name-screen="height"
      :screen-height="screenHeight"
      :measure-unit="unit"
      @change-value="changeHeight"
    />
  </div>
</template>

<script setup lang="ts">
import RulerY from './RulerY.vue';
import { useStore } from 'vuex';
import { key } from '../../store';
import { computed, ref, onBeforeUnmount} from 'vue';
import BaseIcon from '../icons/BaseIcon.vue';
import { unitsBind, rulerInit } from '../../utilities/settings';
import { inchRound, inchToFt } from '../../utilities/help';
import { conversion } from '../../utilities/unitConversion';

const store = useStore(key);
defineProps({
  screenHeight: {
    type: Number,
    default: 0,
  },
});
const gender: string = store.getters.gender;
const unit = computed(() => store.getters.unitHeight);
const height = ref(
  store.getters.height ?? rulerInit.height[unit.value][gender].value
);

const changeHeight = (h: number) => {
  height.value = h;
};

const changeUnit = (nameUnit: string) => {
  if (nameUnit == unit.value) return;
  store.commit('setUnitHeight', nameUnit);
  store.commit(
    'setHeight',
    conversion(
      unit.value,
      nameUnit == 'ft' ? inchRound(height.value) : Math.round(height.value)
    )
  );
  height.value =
    nameUnit == 'ft'
      ? inchRound(store.getters.height)
      : Math.round(store.getters.height);
};
onBeforeUnmount(() => {
  store.commit('setHeight', height);
});
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: calc(50% + 100px);

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
