<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useLoadingStore} from '@/stores/loadingStore';
import navBar from '@/components/navBar.vue';
import { useRoute } from 'vue-router';
import { computed, ref, onMounted, watch } from 'vue';
import { useUserProfile} from '@/stores/User/userProfile';
import type {userGeneralInfoType} from '@/types/userGeneralInfoType'

const loadingStore = useLoadingStore();
const route = useRoute();
const isLoading = computed(()=>loadingStore.isLoadingState);
const userProfile = useUserProfile();
const isLoginPage = computed(() => 
route.path === '/' || 
route.path === '/register' || 
route.path === '/emailVerified' || 
route.path === '/EmailConfirmation' || 
route.path === '/password/reset' || 
route.path === '/password/reset/:token'
);
const userGeneralInfo = ref<userGeneralInfoType>({
    first_name: '',
    last_name: '',
    gender: 0,
    birth_date: '',
    profile_image:'',
    cover_image:'',
    posts:[],
    visibility:{}
});

watch(isLoginPage,async()=>
{
  if(!isLoginPage.value)
  {
     await BasicInfo();
     await profileCompliation();
  }
});

const profileCompliation = async() =>
{
  let result =await userProfile.getProfileComplete();
  
  if(result.code == 200){
    console.log(result);
     userProfile.profileComplete = result.data[0];
  }else{
    console.error(result.error)
  }
}

const BasicInfo = async() =>
{
  let result =await userProfile.basicInfo();

  if(result.code == 200){
    userProfile.summaryDetails = result.data[0];
      console.log(result);
  }else{
    console.error(result.error)
  }
}

</script>

<template>
  <div class="h-100 d-flex flex-column">
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

