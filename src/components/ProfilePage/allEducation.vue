<template>
    <div class="d-flex justify-content-center vh-100 bg-light">
        <Card class="mb-3 mt-3" :pt="{
        root:'w-50'
    }">
    <template #title>
        <div class="d-flex justify-content-between flex-grow-0">
            <span class="fw-semibold fs-5">
            Top Users
        </span>
         <Button asChild v-slot="slotProps" variant="link"  label="see all">
            <RouterLink to="/profile" class="text-decoration-none" style="font-size:15px;">back to profile</RouterLink>
        </Button>
        </div>
    </template>
    <template #content>

            <div class="row p-2 gap-4" v-for="(education, index) in educationDetails" :key="index">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-column">
                        <span class="fw-bold">{{ education.school }}</span>
                        <span class="fs-6">{{education.degree+"-"+ education.field_of_study}}</span>
                    </div>
                    <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" @click="()=>{router.push(`/profileEdit/educationInfo/${education.id}`)}"/> </span>
                </div>
            </div>
    </template>
</Card>

    </div>

</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import { onMounted, ref } from 'vue';
import { useUserProfile } from '@/stores/User/userProfile'; 
import { Button } from 'primevue';
import type { educationType } from '@/types/educationType';
import {Experiance, Education} from '@/services/profilePage';
import showAlert from '@/composables/showAlert';
import { useRouter } from 'vue-router';

const router = useRouter();
const userProfile = useUserProfile();
const educationDetails = ref<Array<educationType>>([]);
const getEducationInfo = async() =>
{
   let result = await Education();
   if(result.code == 200)
   {
    educationDetails.value =result.data.slice(0,3);
    // allExperiance.value = result.data;

   }else{
    let config ={
                    icon:'error',
                    title:'Error',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
            
        let confirm = await showAlert(config);
   }
}

onMounted(async() => {
    await getEducationInfo()
});
</script>