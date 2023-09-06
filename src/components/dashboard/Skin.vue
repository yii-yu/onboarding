<template>
  <div class="skin">
    <h2 class="dashboard-title">Choose Your <br /><slot></slot> Color</h2>
    <div class="container">
      <div
        v-for="skin of skinColors"        
        :key="skin"
        class="skin-color btn"
        :style="{ backgroundColor: skin }"        
        :class="{active:skin==store.getters.skin}"
        @click="chooseColor(skin)"        
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '../../store/';
import { skinColors } from '../../utilities/settings';

const store = useStore(key);

const chooseColor = (color:string)=>{
  store.commit('setSkin',color);
}
</script>

<style lang="scss" scoped>
.skin {
  justify-content: space-around;
}
.container {
  margin: 60px 0;
  column-gap: 20px;
  row-gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  .skin-color {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;

    &:hover {
      &:before {
        content: '';
        position: absolute;
        top:-7px;
        right: -7px;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: block;
        border: 4px solid #fa5959;
        box-sizing: border-box;
      }
    }
    &.active{
      &:before {
        content: '';
        position: absolute;
        top:-7px;
        right: -7px;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: block;
        border: 4px solid #fa5959;
        box-sizing: border-box;
      }
    }
  }
}
</style>
