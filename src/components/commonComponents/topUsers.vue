<template>
    <div class="d-flex justify-content-center vh-100 bg-light">
        <Card class="mb-3 mt-3" :pt="{
        root:'w-50'
    }">
    <template #title>
        <div class="d-flex justify-content-between flex-grow-0">
            <span class="fw-semibold fs-5">
            LeaderBoard
        </span>
         <Button asChild v-slot="slotProps" variant="link"  label="see all">
            <RouterLink to="/home" class="text-decoration-none" style="font-size:15px;">back to home</RouterLink>
        </Button>
        </div>
    </template>
    <template #content>
        <!-- <div class="d-flex w-100 justify-content-center align-items-center flex-column">
            <Avatar :image="(topUsers[0].profile_image) ? topUsers[0].profile_image : userPng" class="border border-2 mr-2 me-2"  size="xlarge" style="width:auto;height:100px;" />
            <span class="fs-3">{{ "#1" }}</span>
            <span class="fs-1">{{ topUsers[0].score }}</span>
        </div> -->
        <div v-for="(topUser, index) in topUsers" :key="index" class="w-100"> 
            <div class="d-flex flex-row mt-4 justify-content-between border rounded-5 p-1">
                <span class="d-flex align-items-center fs-4 fw-semibold me-2">{{ "#"+(index + 1) }}</span>
                 <Avatar :image="(topUser.profile_image) ? topUser.profile_image : userPng" class=" mr-2 me-2" shape="circle"  size="xlarge" style="width:auto;height:60px;" />
                    <div class="d-flex justify-content-between align-items-center px-4 w-100"> 
                        <div class="d-flex flex-column justify-content-center">
                            <span class="fs-5">{{ topUser.name }}</span>
                            <span class="opacity-75">{{ 'Rank '+ (index + 1) }}</span>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <span class="d-flex justify-content-center">{{ topUser.score }}</span>
                            <span class="opacity-75">{{ "Points" }}</span>
                        </div>
                    </div>
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
import type { topUsersType } from '@/types/topUsersType';
import { Button } from 'primevue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';   
import Avatar from 'primevue/avatar';
import userPng from '@/assets/user.png';

const userProfile = useUserProfile();
const topUsers = ref<Array<topUsersType>>([])

const getTopUsers = async() =>
{
    let result = await userProfile.getTopUsers();
    topUsers.value = result.data;
    console.log(result);
}
onMounted(async() => {
    await getTopUsers()
});
</script>