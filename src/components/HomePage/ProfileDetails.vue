<template>
    <Card>
        <template #header>
            
        </template>
        <template #content>
                <div class="d-flex justify-content-between" >
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" style="width:70px;height:70px;" @click="toggle"/>
                <i class="pi pi-info-circle"></i>
                </div>
                <h6 class="p-0 m-0 mt-2 mb-2">Chamath Rathnayake</h6>
                <p class="p-0 m-0 fw-semibold text-secondary" style="font-size:13px;">Itellegence Pvt Ltd</p>
                <p class="p-0 fw-semibold" style="font-size:13px;">Colombo</p>

                <Divider >
                <span class="text-secondary" style="font-size:12px;">My Categories</span>
                    <i class="pi pi-ellipsis-v border rounded-circle p-1 bg-dark text-white mx-1" style="font-size:8px;" @click="showMenu"></i>
                    <Menu ref="menu" :model="items" :popup="true" />
                </Divider>
                    <div class="d-flex justify-content-end align-content-center">
                        
                    </div>
                    <p class="w-100 d-flex justify-content-between align-content-center">Action <i class="pi pi-trash" /></p>  
                    <p class="w-100 d-flex justify-content-between align-content-center">Refree <i class="pi pi-trash" /></p>
                    <p class="w-100 d-flex justify-content-between align-content-center">Action <i class="pi pi-trash" /></p>

        </template>
    </Card>
</template>
<script setup lang="ts">

import Menu from 'primevue/menu';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { ref } from 'vue';
const categories = ref([
    { name: 'Category 1', code: 'C1' },
    { name: 'Category 2', code: 'C2' },
    { name: 'Category 3', code: 'C3' }
]);

const items = ref([
    { label: 'Add Category', icon: 'pi pi-fw pi-plus', command: () => { } },
    { label: 'Attached Categories', icon: 'pi pi-fw pi-file', command: () => { } },
    { label: 'Sort Categories', icon: 'pi pi-fw pi-sort', command: () => { } }
]);
const menu= ref(null);
const selectedCity= ref(null);
const showMenu = (event: Event) => {
    menu.value.toggle(event);
}


</script>