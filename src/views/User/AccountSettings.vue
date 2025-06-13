<template>
        <div class="row m-0 overflow-hidden">
            <div class="col-md-1 flex-grow-0 d-none d-md-flex"></div>
            <div class="col-md-3 mt-4 d-none d-md-block">
                <Card :pt="{
                    root: 'd-none d-md-flex'
                }">
                    <template #content>
                        <PanelMenu :model="items" class="w-100" :pt="{
                            panel:'border-0',
                            item:'mt-2'
                        }" />  
                    </template>
                </Card>
            </div>
            <div class="col-md-7 h-100">
                <div class="h-100 d-flex flex-column">
                    <Menubar :model="items" :pt="{
                        root:'d-flex d-md-none',
                        content:'p-2'
                    }" />
                    <router-view />
                </div>
            </div>
        </div>
</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import PanelMenu from 'primevue/panelmenu';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import FloatLabel from 'primevue/floatlabel';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';
import Menubar from 'primevue/menubar';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

import { ref } from "vue";

const items = ref([
    {
        label: 'Login Informations',
        icon: 'pi pi-cog',
        command: () => {
                    router.push('/accountSettings/loginInformations');
        },
    },
    {
        label: 'Privacy',
        icon: 'pi pi-lock',
        command: () => {
                    router.push('/accountSettings/privacyInformations');
        },
    },
    {
        label: 'Delete Account',
        icon: 'pi pi-trash',
        command: () => {
                    router.push('/accountSettings/deleteAccount');
        },
    }
]);

</script>