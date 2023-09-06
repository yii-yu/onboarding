<template>
  <button
    :class="{ active: isActive }"
    :disabled="!isActive"
    @click="emit('next')"
  >
    Continue
  </button>
</template>

<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['next']);
</script>

<style lang="scss" scoped>
@import '../../assets/styles/helpers/variables';
button {
  width: 291px;
  height: 50px;
  background-color: #FA5959;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  margin-top: 30px;
  z-index: 2;
  font-family: $font-family-bold;

  &.active {
    opacity: 1;
  }

  &:not(.active) {
    opacity: 0.7;
    cursor: default;
  }

  &:hover {
    opacity: 0.7;
  }
}

@media (pointer: coarse) {
  button {
    &.active {
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
