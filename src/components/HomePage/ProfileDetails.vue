<template>
    <Card :pt="{
    body: 'p-0 m-0',
    }">
        <template #content>
                <div class="w-100 rounded-top background-image" :style="{ backgroundImage: `url(${(basicInfo.cover_image) ?basicInfo.cover_image: coverImage})` }">
                    <Avatar :image="(basicInfo.profile_image)? basicInfo.profile_image : base64Image" shape="circle" 
                    style="width:70px;height:70px;position:relative;right: -10px;top: 35px;" class="border border-2 border-light"/>
                </div>
                <h6 class="px-3 m-0 mt-2 mb-2">{{basicInfo.first_name}} {{basicInfo.last_name}}</h6>
                <p class="px-3 m-0 fw-semibold text-secondary" style="font-size:13px;">{{ (basicInfo.currently_working.length >0) ? basicInfo.currently_working[0].company:'' }}</p>
                <p class="px-3 fw-semibold mb-1" style="font-size:13px;">{{ (basicInfo.currently_working.length >0 ) ? basicInfo.currently_working[0].location:'' }}</p>
                <i class="pi pi-star-fill ps-3" style="font-size:12px;color:#a03829;"></i>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>

                <Divider >
                <span class="text-secondary" style="font-size:12px;" v-if="!isCompelete">complete your profile</span>
                    
                </Divider>
                <compeletedProfile @profileCompleted="setVisibility" v-if="!isCompelete"/>
                <!-- <Divider >
                <span class="text-secondary" style="font-size:12px;">create a exam</span>
                    
                </Divider>
                <NewExamCreate /> -->

        </template>
    </Card>
</template>
<script setup lang="ts">

import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import NewExamCreate from './NewExamCreate.vue';
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/User/userStore';
import type { basicUserDetails } from '../../types/basicUserDetails';
import { useUserProfile } from '../../stores/User/userProfile';
import userPng from '../../assets/user.png';
import coverImageSet from '../../assets/default-cover-2.jpg';
import compeletedProfile from '@/components/HomePage/compeleteProfile.vue';

const userstore = useUserStore();
const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
const coverImage = ref<string>(coverImageSet);
const base64Image = ref<string>('');
const isCompelete = ref<boolean>(true);
const userDetails = ref<basicUserDetails>({
    first_name: '',
    last_name: '',
    gender: 0,
    birth_date:''
});
const setUserData = async() =>
{
    let result = await userstore.getUserData();
    userDetails.value = result.data;
    base64Image.value = userPng;
}
const categories = ref([
    { name: 'Category 1', code: 'C1' },
    { name: 'Category 2', code: 'C2' },
    { name: 'Category 3', code: 'C3' }
]);

const items = ref([
    { label: 'Add Category', icon: 'pi pi-fw pi-plus', command: () => { } },
    { label: 'Attached Categories', icon: 'pi pi-fw pi-file', command: () => { } },
    { label: 'Sort Categories', icon: 'pi pi-fw pi-sort', command: () => { } }
]);
const selectedCity= ref(null);

const setVisibility = (value:boolean) =>
{
    isCompelete.value = value;
}
// const imageToBase64 = async(image:any) =>{
//     const response = await fetch(image);
//     const blob = await response.blob();

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       if (typeof reader.result === 'string') {
//         base64Image.value = reader.result;
//       } else {
//         base64Image.value = '';
//       }
//        // Base64 string with MIME prefix
//     };
//     reader.readAsDataURL(blob);
// }
onMounted(() => {
    setUserData();
});


</script>
<style scoped>
.background-image{
    background-image: url('../../assets/cover.jpg');
    background-size:cover;
    min-height:30px;
    margin-bottom:30px;
}
</style>