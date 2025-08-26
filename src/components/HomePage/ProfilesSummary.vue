<template>
     <Card :pt="{
            root:'w-100 h-100 p-0 m-0',
            content:'text-center',
            body:'pt-0'
        }">
            <template #header>
                <div class="w-100 d-flex justify-content-end p-2 pb-0">
                    <i class="pi pi-times p-1 border rounded-circle bg-secondary text-white" />
                </div>
            </template>
            <template #content>
                
                <div class="d-flex flex-column align-items-center ">
                <Avatar :image="profileDeatils.profile_image" style="width:90px;height:90px;" shape="circle" />
                <p class="m-0 mt-3 fw-semibold">{{profileDeatils.first_name +" "+ profileDeatils.last_name}}</p>
                <p class="text-secondary m-0">{{(profileDeatils.currently_working && profileDeatils.currently_working.length >0) ? profileDeatils.currently_working[0].company :''}}</p>
                <p class="text-secondary">{{(profileDeatils.currently_working && profileDeatils.currently_working.length >0) ? (profileDeatils.currently_working)[0].location :''}}</p>
                
                
                </div>
            </template>
            <template #footer>
                <div>
                    <Button label="View Profile" class="w-100 mb-6 " size="small" severity="secondary" />
                </div>
               
            </template>
    </Card>
</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';  
import { ref, defineProps, computed } from 'vue'; 
import type { ProfileSummary }  from '../../types/ProfileSummary';
import type { PropType } from 'vue';

const props = defineProps({
    profile: {
        type: Object as PropType<ProfileSummary>,
        required: true
    }
});

const profileDeatils = computed(() => props.profile);
</script>