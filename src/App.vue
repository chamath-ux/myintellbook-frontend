<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useLoadingStore} from '@/stores/loadingStore';
import navBar from '@/components/navBar.vue';
import { useRoute } from 'vue-router';
import { computed, ref, onMounted, watch } from 'vue';
import { useUserProfile} from '@/stores/User/userProfile';
import type {userGeneralInfoType} from '@/types/userGeneralInfoType'
import { useUserStore } from '@/stores/User/userStore';

const loadingStore = useLoadingStore();
const route = useRoute();
const userStore = useUserStore();
const isLoading = computed(()=>loadingStore.isLoadingState);
const userProfile = useUserProfile();
const userGeneralInfo = ref<userGeneralInfoType>({
    first_name: '',
    last_name: '',
    gender: 0,
    birth_date: '',
    profile_image:'',
    cover_image:'',
    posts:[],
    visibility:{},
    profession:{
      company:'',
      location:'',
      profession:''
    }
});

watch(isLoading,async()=>
{
  if(isLoading.value)
  {
     await BasicInfo();
     await profileCompliation();
     await getProfileList();
  }
});

const profileCompliation = async() =>
{
  let result =await userProfile.getProfileComplete();
  
  if(result.code == 200){
    console.log(result);
     userProfile.profileComplete = result.data;
  }else{
    console.error(result.error)
  }
}

const BasicInfo = async() =>
{
  let result =await userProfile.basicInfo();

  if(result.code == 200){
    userProfile.summaryDetails = result.data[0];
      
  }else{
    console.error(result.error)
  }
}

const getProfileList = async() =>{
    let result = await userProfile.getUserProfiles();
    if(result.code == 200)
    {

        userProfile.userProfiles = result.data;
        console.log('User Profiles:', userProfile.userProfiles);
    }
    else
    {
        console.error('Failed to fetch profiles:', result.message);
    }
}

</script>

<template>
  <div class="h-100 d-flex flex-column" style="background-color:#e6e6e6;">
    <navBar />
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

