<template>
  <div ref="refRoot" class="dashboard">
    <BaseIcon
      v-if="idCurrentTab > 0"
      width="17"
      height="32"
      icon-name="arrow-back"
      color="#8B8B8B"
      class="btn-back btn"
      @click="--idCurrentTab"
    />
    <component
      :is="currentTab.component"
      class="dashboard-component"
      :screen-height="screenHeight"
      :screen-width="screenWidth"
    >
      {{ currentTab.name }}
    </component>

    <div class="dashboard-bottom">
      <div v-show="isShowNext" class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab.name"
          :class="['tab tab-button', { active: currentTab === tab }]"
        ></div>
      </div>

      <ButtonNext
        :is-active="activeButton"
        @click="++idCurrentTab"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store/';

import Age from '../components/dashboard/Age.vue';
import Gender from '../components/dashboard/Gender.vue';
import Height from '../components/dashboard/Height.vue';
import Weight from '../components/dashboard/Weight.vue';
import ButtonNext from '../components/dashboard/ButtonNext.vue';
import Selfie from '../components/dashboard/Selfie.vue';
import Skin from '../components/dashboard/Skin.vue';
import Preferences from '../components/dashboard/Preferences.vue';
import BaseIcon from '../components/icons/BaseIcon.vue';

const store = useStore(key);
const idCurrentTab = ref(0);
const isShowNext = ref(true);
const screenHeight = ref(666);
const screenWidth = ref(329);
const tabs = [
  { name: 'Gender', component: Gender },
  { name: 'Age', component: Age },
  { name: 'Height', component: Height },
  { name: 'Weight', component: Weight },
  { name: 'Skin', component: Skin },
  { name: 'Preferences', component: Preferences },
  { name: 'Selfie', component: Selfie },
];
const refRoot = ref();

const currentTab = computed(() => {
  return tabs[idCurrentTab.value];
});
const activeButton = computed<boolean>(() => {
  if (currentTab.value.name === 'Selfie' && !store.getters.photo) return false;
  if (currentTab.value.name === 'Skin' && !store.getters.skin) return false;
  if (currentTab.value.name === 'Gender' && !store.getters.gender) return false;
  if (currentTab.value.name === 'Preferences' && !store.getters.preferences.length) return false;
  return true;
});

onMounted(() => {
  screenHeight.value = refRoot.value.clientHeight;
  screenWidth.value = refRoot.value.clientWidth;
});

watch(idCurrentTab, (next: number, prev: number) => {
  if (next > tabs.length - 1) {
    idCurrentTab.value = prev;
  }
  if (next < 0) {
    idCurrentTab.value = 0;
  }

  if (tabs[next] && tabs[next].name == 'Selfie') {
    isShowNext.value = false;
  } else {
    isShowNext.value = true;
  }
});
</script>

<style lang="scss">
@import '../assets/styles/helpers/variables';

.dashboard {
  background-image: url('../assets/images/dashboard/bg-dashboard-light.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .dashboard-title {
    font-size: 2.1rem;
    font-family: $font-family-bold;
    z-index: 2;
    span {
      font-family: $font-family-normal;
    }
  }
  .dashboard-component {
    width: 100%;
    height: 75%;
    max-height: 590px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $font-family-normal;
    h2 {
      margin-top: 110px;
    }
  }
  .dashboard-bottom {
    height: 25%;
    width: 100%;
    position: relative;
  }
  .tabs {
    display: flex;
    flex-direction: row;
    bottom: 10px;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    .tab {
      width: 7px;
      height: 7px;
      margin: 0 4px;
      border-radius: 50%;
      background-color: #8b8b8b;
      &.active {
        background-color: #fa5959;
      }
    }
  }
  .btn-back {
    position: absolute;
    width: auto;
    top: 56px;
    left: 34px;
    cursor: pointer;
    z-index: 2;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
