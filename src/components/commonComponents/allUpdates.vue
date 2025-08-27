<template>
    <div class="d-flex justify-content-center vh-100 bg-light">
        <Card class="mb-3 mt-3" :pt="{
        root:'w-50'
    }">
    <template #title>
        <div class="d-flex justify-content-between flex-grow-0">
            <span class="fw-semibold fs-5">
            Latest Updates
        </span>
         <Button asChild v-slot="slotProps" variant="link"  label="see all">
            <RouterLink to="/home" class="text-decoration-none" style="font-size:15px;">back to home</RouterLink>
        </Button>
        </div>
    </template>
    <template #content>
        <div v-for="notification in notifications" :key="notification.id" class=""> 
                <Notifications 
                 :message="notification.message" 
                 :created_at="notification.created_at" 
                 :profileImage="notification.profile_image"
                 :name="notification.user_name"
                 />
            </div>
    </template>
</Card>

    </div>

</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import { onMounted, ref } from 'vue';
import { useUserProfile } from '@/stores/User/userProfile'; 
import type { notificationsType } from '@/types/notifications';
import Notifications from './Notifications.vue';
import { Button } from 'primevue';

const userProfile = useUserProfile();
const notifications = ref<Array<notificationsType>>([])

const getNotifications = async() =>
{
    let result = await userProfile.getAllNotifications();
    notifications.value = result.data;
    console.log(result);
}
onMounted(async() => {
    await getNotifications()
});
</script>