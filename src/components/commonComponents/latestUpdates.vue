<template>
<Card class="mb-3" :pt="{
        root:'w-75'
    }">
    <template #title>
        <div class="d-flex justify-content-between">
            <span class="fw-semibold fs-5">
            Latest Updates
        </span>
         <Button asChild v-slot="slotProps" variant="link"  label="see all">
            <RouterLink to="/allUpdates" class="text-decoration-none" style="font-size:15px;">See all</RouterLink>
        </Button>
        </div>
    </template>
    <template #content>
        <div v-for="notification in notifications" :key="notification.id" class="mt-3"> 
                <Notifications 
                 :message="notification.message" 
                 :created_at="notification.created_at" 
                 :profileImage="notification.profile_image"
                 :name="notification.user_name"
                 />
            </div>
    </template>
</Card>
</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import { onMounted, ref, watch } from 'vue';
import { useUserProfile } from '@/stores/User/userProfile'; 
import type { notificationsType } from '@/types/notifications';
import Notifications from './Notifications.vue';
import { Button } from 'primevue';

const userProfile = useUserProfile();
const notifications = ref<Array<notificationsType>>([])

  watch(
  () => userProfile.getIsAnswered,
  async (newVal, oldVal) => {
    console.log(newVal);
    await getNotifications()
  }
)

const getNotifications = async() =>
{
    let result = await userProfile.getNotifications();
    notifications.value = result.data;
    console.log(result);
}
onMounted(async() => {
    await getNotifications()
});
</script>