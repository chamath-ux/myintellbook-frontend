<template>
    <div class="row flex-grow-1 overflow-auto m-0">
        <div class="col-md-2 mt-3">
            <!-- <ProfileDetails /> -->
        </div>
        <div class="col-md-8 mt-3 mb-3">
            <Card>
                <template #title>
                    <i class="pi pi-arrow-left me-2" @click="$router.back()" />
                    <span class="text-secondary fs-5">Other Users Profiles</span>
                </template>
                <template #content>
                   <div>
                        <IconField :pt="{
                        root: 'w-50 mx-2',
                        icon: 'bg-white border-0 p-1',
                        input: 'w-100'
                    }">
                        <InputIcon class="pi pi-search" />
                        <InputText  placeholder="Search..."  class="w-75" style="border-radius: 20px; height: 35px; font-size: 0.8rem;" @keyup="searchProfile" v-model="searchVal"/>
                    </IconField>
                   </div>
                    <div class="row" >
                        
                        <div class="col-md-3 mt-3" v-for="(profile , index) in profileList" :key="index">
                            <ProfilesSummary :profile="profile" />
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import ProfilesSummary from '@/components/HomePage/ProfilesSummary.vue';
import {ref, computed, onMounted} from 'vue';
import Card from 'primevue/card';
import { useUserProfile } from '@/stores/User/userProfile';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import type {profileListSearch} from '../../types/profileListSearch'

const userProfile = useUserProfile();
const profiles =computed(() => userProfile.getProfiles);
const profileList = ref<Array<profileListSearch>>([]);
const searchVal = ref<string>('');

const searchProfile = async()=>
{

        userProfile.SearchKey = searchVal.value;
        let result =await userProfile.searchProfile();
        profileList.value = result.data;
        console.log(profileList.value);
    
}

onMounted(async() => {
    await searchProfile()
});


</script>