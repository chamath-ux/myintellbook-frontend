<template>
    <Card>
        <template #content>
                <div class="w-100 rounded-top background-image" style="min-height:30px;margin-bottom:30px;">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" 
                    style="width:70px;height:70px;position:relative;right: -10px;top: 35px;" class="border border-2 border-light"/>
                </div>
                <h6 class="p-0 m-0 mt-2 mb-2">{{userDetails.first_name}} {{userDetails.last_name}}</h6>
                <p class="p-0 m-0 fw-semibold text-secondary" style="font-size:13px;">Itellegence Pvt Ltd</p>
                <p class="p-0 fw-semibold mb-1" style="font-size:13px;">Colombo</p>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>
                <i class="pi pi-star-fill" style="font-size:12px;color:#a03829;"></i>

                <Divider >
                <span class="text-secondary" style="font-size:12px;">My Progress</span>
                    
                </Divider>
                <Divider >
                <span class="text-secondary" style="font-size:12px;">create a exam</span>
                    
                </Divider>
                <NewExamCreate />

        </template>
    </Card>
</template>
<script setup lang="ts">

import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';
import NewExamCreate from './NewExamCreate.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/User/userStore';
import type { basicUserDetails } from '../../types/basicUserDetails';

const userstore = useUserStore();
const userDetails = ref<basicUserDetails>({
    first_name: '',
    last_name: '',
    gender: 0,
});
const setUserData = async() =>
{
    let result = await userstore.getUserData();
    userDetails.value = result.data;
    console.log(result);
}
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
const selectedCity= ref(null);
onMounted(() => {
    setUserData();
});


</script>
<style scoped>
.background-image{
    background-image: url('../../assets/cover.jpg');
    background-size:cover;
}
</style>