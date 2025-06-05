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
                    <div class="row" >
                        <div class="col-md-3 mt-3" v-for="(profile , index) in profiles" :key="index">
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
import {ref} from 'vue';
import Card from 'primevue/card';
const profiles = ref([
    { name: 'Chamath Rathnayake', company: 'Itellegence Pvt Ltd', location: 'Colombo' },
    { name: 'John Doe', company: 'Tech Solutions', location: 'New York' },
    { name: 'Jane Smith', company: 'Web Innovations', location: 'San Francisco' },
    { name: 'Alice Johnson', company: 'Design Studio', location: 'Los Angeles' },
    { name: 'Bob Brown', company: 'Marketing Agency', location: 'Chicago' },
]);
</script>