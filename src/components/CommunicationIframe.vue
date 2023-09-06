<template>
  <span></span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { key } from '../store/';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore(key);
const router = useRouter();

const handlerMessage = (event: any): void => {
  // you need to send a request to the server by passing the jwt read from the get parameter and get a valid origin
  const origin = 'http://localhost:3000';

  if (event.origin != origin) return;

  let data = JSON.parse(event.data);
  if (data.gender) {
    store.commit('setGender', data.gender);
  }
  router.replace({
    name: 'Dashboard',
  });
};

onMounted(() => {
  window.addEventListener('message', handlerMessage);
});

onUnmounted(() => {
  window.removeEventListener('message', handlerMessage);
});
</script>
