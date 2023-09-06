<template>
  <i class="icon-base component">
    <component :is="iconName" :width="width" :height="height" :color="color" />
    <slot />
  </i>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

const files = import.meta.globEager('./src/*.vue');
const components: Record<
  string,
  {
    [key: string]: any;
  }
> = {};
for (const key in files) {
  components[key.replace(/^\.\/src\/(.*)\.\w+$/, '$1')] = files[key].default;
}

export default defineComponent({
  components,
  props: {
    iconName: {
      type: String,
      require: true,
      default: 'error',
    },
    width: {
      type: String,
      default: '24px',
    },
    height: {
      type: String,
      default: '24px',
    },
    color: {
      type: String,
      default: '#FA5959',
    },
  },
});
</script>

<style scoped>
.icon-base.component {
  text-align: right;
}
</style>
