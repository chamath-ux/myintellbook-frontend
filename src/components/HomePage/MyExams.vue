<template>
    <Card :pt="{
        root:'w-75'
    }">
        <template #content>
            <Divider class="w-100 text-secondary p-0" style="font-size:12px;"> 
                My Exams
            </Divider>
            <div class="d-flex align-items-center justify-content-between gap-2">
                <NewExamCreate />
            </div>
        <div class="d-flex flex-column align-items-center">
            
            <p class="text-secondary" style="font-size: 14px;">You have not created any exams yet.</p>
            
        </div>
        </template>
    </Card>
</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import NewExamCreate from '../HomePage/NewExamCreate.vue';   
import Divider from 'primevue/divider';
</script>