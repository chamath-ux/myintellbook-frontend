<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useLoadingStore} from '@/stores/loadingStore';
import navBar from '@/components/navBar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const loadingStore = useLoadingStore();
const route = useRoute();
const isLoginPage = computed(() => route.path === '/login');
</script>

<template>
  <div style="height: 100vh; width: 100vw;">
    <navBar  v-show="!isLoginPage"/>
    <div v-if="loadingStore.isLoadingState" class="loader-overlay">
      <div class="spinner"></div>
    </div>
    
    <router-view />
    
  </div>
</template>
<style>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top-color: #1d3f72;
  border-radius: 50%;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

