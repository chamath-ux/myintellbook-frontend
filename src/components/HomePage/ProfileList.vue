<template>
    <Card :pt="{
                    content:'pt-3',
                }">
        <template #title>
            
            <div class="d-flex justify-content-between align-items-center">
                Profiles
                    <i 
                    class="pi pi-users rounded-circle  border p-1 bg-dark text-white"  
                    v-tooltip.left="{
                        value:'see all profiles',
                        pt:{
                            text:'bg-light text-dark fs-6',
                            arrow:'text-light'
                        }
                    }"
                    ></i>
            </div>
        </template>
        <template #content>
            <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex flex-row">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                    <div class="d-flex flex-column mx-2">
                        <p class="m-0" style="font-size:14px;">Chamath Rathnayake</p>
                        <p class="m-0" style="font-size:14px;">Colombo</p>
                    </div> 
                </div> 
                <i class="pi pi-arrow-right" ></i> 
            </div>
            <Divider />
            <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex flex-row">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
                    <div class="d-flex flex-column mx-2">
                        <p class="m-0" style="font-size:14px;">Chamath Rathnayake</p>
                        <p class="m-0" style="font-size:14px;">Colombo</p>
                    </div> 
                </div> 
                <i class="pi pi-arrow-right" ></i> 
            </div>
            <Divider />
            <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex flex-row">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
                    <div class="d-flex flex-column mx-2">
                        <p class="m-0" style="font-size:14px;">Chamath Rathnayake</p>
                        <p class="m-0" style="font-size:14px;">Colombo</p>
                    </div> 
                </div> 
                <i class="pi pi-arrow-right" ></i> 
            </div>
            <Divider />
            <div class="w-100 text-center">
                <router-link class="text-decoration-none text-center w-100" to="/profiles">
                See More .......
                </router-link>
            </div>
        </template>
        
    </Card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Divider from 'primevue/divider';
</script>