<template>
    <Divider  layout="horizontal" align="right"
        :pt="{
            content: {
                style: {
                    backgroundColor: '#f4f0f0',
                },
            }
        }"
    >
        <span class="font-size">Sort By:<b>{{sortingKey}}</b></span>
        <i class="pi pi-sort-down-fill cursor-pointer sorting-icon" @click="showHideGroup($event)"></i>
        <i class="pi pi-info-circle px-2 sorting-icon text-dark" @click="openPopover"/>
        <Popover ref="popOver">
            <div>
                basic idea about the sorting menu and question groups
                <ul class="list-unstyled m-0 p-2">
                    <li class="font-size"><i class="pi pi-angle-right"></i>You can sort the question groups by <b>Dificulty or Recent</b>.</li>
                    <li class="font-size"><i class="pi pi-angle-right"></i>you can click the <b>three dots</b> and open the question group menu</li>
                    <li class="font-size"><i class="pi pi-angle-right"></i>You can skip the question group for now by clicking the <b>skip icon</b>.</li>
                    <li class="font-size"><i class="pi pi-angle-right"></i>You can start the question group by clicking the <b>start icon</b>.</li>
                    <li class="font-size"><i class="pi pi-angle-right"></i>You can open the question group by clicking the <b>open icon</b>.</li>
                </ul>
            </div>
        </Popover>
            <Menu  ref="menu" :model="items" :popup="true">
            <template #item="{ item, props }" v-bind="props.action">
                <span class="text-dark mb-2 p-2">{{ item.label }}</span>
            </template>
            </Menu>
    </Divider>
</template>
<script setup lang="ts">
import {ref } from 'vue';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import Popover from 'primevue/popover';
const menu = ref();
const sortingKey = ref('Dificulty');
const popOver = ref(null);
const items = ref([
    { label: 'Dificulty', 
        command:() =>{
            sortingKey.value = 'Dificulty';
        }
     },
    { label: 'Recent',
        command: () => {
            sortingKey.value = 'Recent';
        }
     }
]);


const showHideGroup = (event: Event) => {
    // Logic to show or hide question groups
    console.log('Toggle question group visibility');
    menu.value?.toggle(event);
    

};

const openPopover = () => {
    // Logic to open popover
    console.log('Open popover');
    popOver.value?.toggle(event);
};
</script>
<style scoped>
.font-size{
    font-size:13px;
}
.sorting-icon{
    font-size:11px;
    cursor: pointer;
}
</style>