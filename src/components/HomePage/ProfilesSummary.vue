<template>
     <Card :pt="{
            root:'w-100 h-auto p-0 m-0',
            content:'h-50 text-center',
            body:'pt-0'
        }">
            <template #header>
                <div class="w-100 d-flex justify-content-end p-2 pb-0">
                    <i class="pi pi-times p-1 border rounded-circle bg-secondary text-white" />
                </div>
            </template>
            <template #content>
                
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" style="width:90px;height:90px;" shape="circle" />
                <p class="m-0 mt-3">{{profileDeatils.name}}</p>
                <p class="text-secondary m-0">{{profileDeatils.company}}</p>
                <p class="text-secondary">{{profileDeatils.location}}</p>
                
                <Button label="View Profile" class="w-100 mb-6" size="small" severity="secondary" />
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