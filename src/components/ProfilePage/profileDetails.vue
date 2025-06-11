<template>
    <div>
        <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>General Information</h5>
                        <Button label="Edit" icon="pi pi-pencil" severity="secondary" size="small" class="fw-semibold" @click="router.push('/profileEdit/generalInfo')"/> 
                    </div>
                    <Divider />
                    <div class="row">
                        <div class="col-md-6 opacity-50 mb-4">First Name</div>
                        <div class="col-md-6 text-start mb-4">Jhon</div>
                        <div class="col-md-6 opacity-50 mb-4">Last Name</div>
                        <div class="col-md-6 mb-4">Jhon</div>
                        <div class="col-md-6 opacity-50 mb-4">Birth Date</div>
                        <div class="col-md-6 mb-4">1/1/1990</div>
                        <div class="col-md-6 opacity-50 mb-4">Gender</div>
                        <div class="col-md-6 mb-4">Male</div>
                    </div>
                </template>
            </Card>
            <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>Work Experiance</h5>
                        <Button icon="pi pi-ellipsis-h" severity="secondary" text size="small" class="fw-semibol" @click="menuShow.toggle($event)"/>
                        <Menu :model="items" popup ref="menuShow"/>
                    </div>
                    <Divider />
                    <div class="row p-2 gap-4">
                         <div class="d-flex justify-content-between">
                           <div class="d-flex flex-column">
                                <span class="fw-bold">Software Engineer <Badge severity="secondary">current position</Badge></span>
                                <span class="fs-6">Its Company-Full Time</span>
                                <span class="fs-6">Colombo</span>
                           </div>
                            <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" @click="router.push('/profileEdit/workExperience/1')"/> </span>
                        </div>
                         <div class="d-flex justify-content-between">
                           <div class="d-flex flex-column">
                                <span class="fw-bold">Software Engineer</span>
                                <span class="fs-6">Its Company-Full Time</span>
                                <span class="fs-6">Colombo</span>
                           </div>
                            <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" /> </span>
                        </div>
                    </div>
                </template>
            </Card>
             <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>Education Information</h5>
                         <Button icon="pi pi-ellipsis-h" severity="secondary" text size="small" class="fw-semibol" @click="menuShow.toggle($event)"/>
                        <Menu :model="items" popup ref="menuShow"/>
                    </div>
                    <Divider />
                    <div class="row p-2 gap-4">
                        <div class="d-flex justify-content-between">
                           <div class="d-flex flex-column">
                                <span class="fw-bold">Software Engineer</span>
                                <span class="fs-6">Its Company-Full Time</span>
                                <span class="fs-6">Colombo</span>
                           </div>
                            <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" /> </span>
                        </div>
                         <div class="d-flex justify-content-between">
                           <div class="d-flex flex-column">
                                <span class="fw-bold">Software Engineer</span>
                                <span class="fs-6">Itss Company-Full Time</span>
                                <span class="fs-6">Colombo</span>
                           </div>
                            <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" /> </span>
                        </div>
                    </div>
                </template>
            </Card>
             <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>Skills Information</h5>
                        <Button icon="pi pi-ellipsis-h" severity="secondary" text size="small" class="fw-semibol" @click="menuShow.toggle($event)"/>
                        <Menu :model="items" popup ref="menuShow"/>
                    </div>
                    <Divider />
                </template>
            </Card>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Badge from 'primevue/badge';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuShow = ref<Menu | null>(null);
const items = ref([
    { label: 'New', icon: 'pi pi-fw pi-plus' },
    { label: 'Sort', icon: 'pi pi-fw pi-sort' },
]);
</script>