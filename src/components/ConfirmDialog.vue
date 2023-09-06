<template>
  <popup-modal ref="popup">
    <div class="title">
      <BaseIcon
        v-if="icon"
        :icon-name="icon"
        width="20"
        height="20"
        :color="iconColor"
      />
      <span>{{ title }}</span>
    </div>
    <p>{{ message }}</p>
    <div class="btns">
      <span v-if="cancelButton" @click="_cancel">{{ cancelButton }}</span>
      <span @click="_confirm">{{ okButton }}</span>
    </div>
  </popup-modal>
</template>

<script setup lang="ts">
import PopupModal from './PopupModal.vue';
import { ref } from 'vue';
import BaseIcon from './icons/BaseIcon.vue';

export type PopupOpts = {
  title: string;
  message: string;
  okButton: string;
  cancelButton: string;
  icon: string;
  iconColor: string;
};

const title = ref('');
const message = ref('');
const okButton = ref('');
const cancelButton = ref('');
const icon = ref('');
const iconColor = ref('');
const popup = ref<InstanceType<typeof PopupModal> | any>(null);

const resolvePromise = ref();
const rejectPromise = ref();

const show = (opts: PopupOpts) => {
  title.value = opts.title;
  message.value = opts.message;
  okButton.value = opts.okButton;

  if (opts.cancelButton) {
    cancelButton.value = opts.cancelButton;
  }
  if (opts.icon && opts.iconColor) {
    icon.value = opts.icon;
    iconColor.value = opts.iconColor;
  }

  popup.value?.open();

  return new Promise((resolve, reject) => {
    resolvePromise.value = resolve;
    rejectPromise.value = reject;
  });
};

const _confirm = () => {
  _clearDialog();
  resolvePromise.value(true);
};

const _cancel = () => {
  _clearDialog();
  resolvePromise.value(false);
};

const _clearDialog = () => {
  title.value = '';
  message.value = '';
  cancelButton.value = '';
  okButton.value = '';
  popup.value?.close();
};

defineExpose({
  show,
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/helpers/variables';

.title {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
 
  span {
    color: #000;    
    padding: 0 5px;
     font-family: $font-family-bold;
  }
}
p {
  color: #000;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
}
.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #007aff;

  span {
    width: 100%;
    padding: 11px;
    background-color: transparent;
    font-size: 1.1rem;
    border: 1px solid#cbcbcb;
    border-left: none;
    cursor: pointer;
  }
}
</style>
