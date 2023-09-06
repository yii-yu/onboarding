<template>
  <button :class="classObject" class="btn-options">
    <BaseIcon
      v-if="isActive"
      width="22"
      height="22"
      icon-name="check_on"
      :color="iconColor"
    />
    <BaseIcon
      v-else
      width="22"
      height="22"
      icon-name="check_off"
      :color="iconColorDefault"
    />
    <span>
      <slot></slot>
    </span>
    <BaseIcon v-if="icon" :icon-name="icon" width="40" height="40" :color="iconColor" />
    <i v-if="imageName" class="wrap-image">
      <img :src="imageName" />
    </i>
  </button>
</template>

<script setup lang="ts">
import BaseIcon from '../icons/BaseIcon.vue';
import { computed } from 'vue';
const iconColorDefault = '#E7E7E7';
const props = defineProps({
  size: {
    type: String,
    default: 'm',
    validator(value: string) {
      return ['s', 'm', 'l'].includes(value);
    },
  },
  icon: {
    type: String,
    default: '',
  },
  imageName: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: '#ccc',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const classObject = computed(() => {
  return {
    ['size-' + props.size]: true,
    ['active']: props.isActive,
  };
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';

button {
  position: relative;
  cursor: pointer;
}
.size-m {
  width: 291px;
  height: 100px;
  font-size: 1.2rem;
  margin: 12px;
}
.btn-options {
  border-width: 1px;
  border-radius: 12px;
  box-sizing: border-box;
  font-weight: bold;
  border: 1px solid #e7e7e7;
  background-color: transparent;
  color:rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 9px 0;
  font-family: $font-family-normal;
  .icon-check-mark {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid#e7e7e7;
    margin-left: 30px;
  }
  i {
    width: 40px;
  }
  .wrap-image{
    position: relative;
    height: 100%;
    margin-left: 20px;
    img{
      position: absolute;
      bottom: 0;
      right: 0;
      // height: 110%;
    }
  }
  span {
    width: 150px;
    text-align: left;
    margin-left: 30px;
  }
  &:hover {
    background-color: #fff;
    opacity: 1;
  }
  &.active {
    box-shadow: 0px 3px 10px rgba(231, 231, 231, 0.5);
    background-color: #fff;
    border: none;
    color: #000;
  }

  @media (pointer: coarse) {
  button {
    &.active {
      &:hover {
        opacity: 1;
        background-color: transparent;
      }
    }
  }
}
}
</style>
