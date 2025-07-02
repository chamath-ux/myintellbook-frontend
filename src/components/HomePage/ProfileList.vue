<template>
    <Card :pt="{
                    content:'pt-3',
                }">
        <template #title>
            
            <div class="d-flex justify-content-between align-items-center">
                Profiles
                    <i 
                    class="pi pi-users rounded-circle  border p-1 bg-dark text-white"  
                    v-tooltip.left="{
                        value:'see all profiles',
                        pt:{
                            text:'bg-light text-dark fs-6',
                            arrow:'text-light'
                        }
                    }"
                    ></i>
            </div>
        </template>
        <template #content>
            <div class="d-flex flex-column" v-for="(profile, index) in userProfiles" :key="index" v-if="userProfiles.length > 0">
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
                <router-link class="text-decoration-none text-center w-100" to="/profiles">
                See More .......
                </router-link>
            </div>
        </template>
        
    </Card>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import { useUserProfile} from '../../stores/User/userProfile';
import userPng from '../../assets/user.png';

const userProfile = useUserProfile();
const userProfiles = computed(() => userProfile.getProfiles);
</script>