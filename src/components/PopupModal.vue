<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="isVisible" class="popup-modal">
        <div class="popup-window">
          <slot></slot>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);

const open = () => {
  isVisible.value = true;
};
const close = () => {
  isVisible.value = false;
};

defineExpose({
  open,
  close,
});
</script>

<style lang="scss" scoped>
.popup-modal {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 10;
  .popup-window {
    background: #fff;
    border-radius: 14px;
    // box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 320px;
    // min-width: 270px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    background: rgba(242, 242, 242, 0.8);
    backdrop-filter: blur(54.3656px);
    text-align: center;
  }
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.5s ease;
    .popup-window {
      transition: transform 0.5s ease;
    }
  }
  &.fade-enter-from,
  &.fade-leave-to {
    opacity: 0;

    .popup-window {
      transform: scale(0, 0);
    }
  }
}
</style>
