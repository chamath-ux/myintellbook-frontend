<template>
    <Card>
        <template #content>
                <div class="w-100 rounded-top background-image" :style="{ backgroundImage: `url(${basicInfo.cover_image})`}">
                    <Avatar :image="basicInfo.profile_image" shape="circle" 
                    style="width:70px;height:70px;position:relative;right: -10px;top: 35px;" class="border border-2 border-light"/>
                </div>
                <h6 class="p-0 m-0 mt-2 mb-2">{{basicInfo.first_name}} {{basicInfo.last_name}}</h6>
                <p class="p-0 m-0 fw-semibold text-secondary" style="font-size:13px;">{{ (basicInfo.currently_working.length >0) ? basicInfo.currently_working[0].company:'' }}</p>
                <p class="p-0 fw-semibold mb-1" style="font-size:13px;">{{ (basicInfo.currently_working.length >0 ) ? basicInfo.currently_working[0].location:'' }}</p>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>

                <Divider >
                <span class="text-secondary" style="font-size:12px;">My Progress</span>
                    
                </Divider>
                <Divider >
                <span class="text-secondary" style="font-size:12px;">create a exam</span>
                    
                </Divider>
                <NewExamCreate />

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

const userstore = useUserStore();
const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
const coverImage = computed(()=> userProfile.getCoverImage);
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
    console.log(result);
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