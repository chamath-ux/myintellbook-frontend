<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {useLoadingStore} from '@/stores/loadingStore';

const loadingStore = useLoadingStore();
</script>

<template>
  <div class="h-100 w-100">
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

