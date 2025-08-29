<template>
    <Card :pt="{
                    content:'pt-3',
                    root:'w-75'
                }">
        <template #title>
            
            <div class="d-flex justify-content-between align-items-center">
                Profiles
                <Button asChild v-slot="slotProps" variant="link"  label="see all">
                    <RouterLink to="/profiles" class="text-decoration-none" style="font-size:15px;">See all</RouterLink>
                </Button>
            </div>
        </template>
        <template #content>
            <div class="d-flex flex-column" v-for="(profile, index) in userProfiles.slice(0,showLength)" :key="index" v-if="userProfiles.length > 0">
                <div class="d-flex flex-row mb-3">
                    <Avatar :image="(profile.profile_image) ?profile.profile_image:userPng" shape="circle" style="width:auto;height:60px;"/>
                    <div class="d-flex flex-column mx-2">
                        <p class="m-0 fw-semibold" style="font-size:14px;">{{ profile.first_name+" "+profile.last_name }}</p>
                        <p class="m-0" style="font-size:14px;">{{ (profile.currently_working.length >0) ? profile.currently_working[0].location :'' }}</p>
                         <Button label="View Profile" size="small" severity="info" outlined></Button>
                    </div> 
                    
                </div> 
               
                <Divider />
            </div>
            <div class="w-100 text-center">
                <Button class="text-decoration-none text-center w-100 fw-semibold text-primary d-flex flex-row gap-2 align-items-center" severity="link" 
                v-if="(userProfiles.length  > 3 || showLength == 6)" @click="()=>{ (showLength == 3) ? showLength = 6 : showLength = 3}">
                {{(showLength == 3) ? 'See more Profiles' : 'See less Profiles'}}
                 <i :class="(showLength == 3) ?'pi pi-angle-down' : 'pi pi-angle-up'"></i>
                </Button>
            </div>
        </template>
        
    </Card>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import { useUserProfile} from '../../stores/User/userProfile';
import userPng from '../../assets/user.png';

const userProfile = useUserProfile();
const userProfiles = computed(() => userProfile.getProfiles);
const showLength = ref<number>(0);

watch(userProfiles, (newValue, oldValue) => {
  if(newValue.length < 3 ){
    showLength.value = newValue.length
  }else{
    showLength.value = 3
  }
});
</script>