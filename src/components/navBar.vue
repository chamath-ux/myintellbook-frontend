<template>
     <Menubar :model="items" >
        <template #start>
            <img src="@/assets/myinteli.svg" alt="Logo" class="logo" style="width:35px; " />
           <InputText placeholder="Search" type="text" class="w-32 sm:w-auto mx-1" size="small"/>
        </template>
        <template #item>
            <i class="pi pi-bell" style="font-size: 1.5rem; color: #a03829;"></i>
        </template>
        <template #end>
                <div class="d-flex justify-content-end align-items-center gap-2">

                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" @click="toggle"/>
                    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" >
                        <template #start>
                            <div class="d-flex align-items-center p-2 flex-column">
                                <div class="d-flex flex-row items-center">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2 me-2" shape="circle" style="width:40px;height:40px;" />
                                    <span class="inline-flex flex-col items-start">
                                        <span class="font-bold">Amy Elsner</span>
                                        <span class="text-sm">Admin</span>
                                    </span>
                                </div>
                                <Button  label="info" variant="outlined" severity="info" size="small" class="w-100 m-0 rounded-4 mt-2 fw-semibold max-h-25">
                                    View Profile
                                </Button>
                            </div>
                            
                        </template>
                         <template #submenulabel="{ item }">
                                <span class="text-dark fw-semibold">{{ item.label }}</span>
                        </template>
                        <template #item="{ item, props }">
                            <a class="flex items-center" v-bind="props.action">
                                <span :class="item.icon" />
                                <span>{{ item.label }}</span>
                            </a>
                        </template>
                        <template #end>
                            <div class=" p-1">
                                <Button  label="Logout" variant="text" severity="secondary" size="small" class="text-start w-100 rounded-4 max-h-25">
                                    Sign Out
                                </Button>
                            </div>
                        </template>
                    </Menu>
                </div>
        </template>
    </Menubar>
</template>
<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu';
import Devider from 'primevue/divider';
import Button from 'primevue/button';

import { ref } from "vue";
import InputText from 'primevue/inputtext';

import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
const menu = ref<Menu | null>(null);
const items = ref([
    {
        separator: true,
    },
    {
        label: 'Account',
        items: [
            {
                label: 'Settings & Privacy',
                icon: 'pi pi-cog',
                command: () => {
                    console.log('Settings & Privacy');
                }
            },
        ],
        
    },
    {
        separator: true
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

</script>
