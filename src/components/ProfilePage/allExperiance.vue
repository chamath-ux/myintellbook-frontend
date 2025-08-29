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

         <div class="row p-2 gap-4" v-for="(experiance , index) in allExperiance" :key="index">
                <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <span class="fw-bold">{{ experiance.title }} <Badge severity="secondary" v-if="(experiance.currently_working)">current position</Badge></span>
                    <span class="fs-6">{{ experiance.company }} </span>
                    <span class="fs-6">{{experiance.location}}</span>
                </div>
                <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" @click="experiance.id !== undefined && goToEdit(experiance.id)"/> </span>
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
import Badge from 'primevue/badge';
import { Button } from 'primevue';
import type { workExperianceType } from '@/types/workExperianceType';
import {Experiance, Education} from '@/services/profilePage';
import showAlert from '@/composables/showAlert';
import { useRouter } from 'vue-router';

const router = useRouter();
const userProfile = useUserProfile();
const allExperiance = ref<Array<workExperianceType>>([]);
const getExperiance = async() =>
{
    let result = await Experiance();

    if(result.code == 200)
   {
    allExperiance.value = result.data;

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

const goToEdit = (id:number) =>
{
    userProfile.showExperianceEdit = true;
    router.push(`/profileEdit/workExperience/${id}`);
}
onMounted(async() => {
    await getExperiance()
});
</script>