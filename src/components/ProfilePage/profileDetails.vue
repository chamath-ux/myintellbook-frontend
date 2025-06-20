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
                        <div class="col-md-6 text-start mb-4">{{ generalInfo.first_name }}</div>
                        <div class="col-md-6 opacity-50 mb-4">Last Name</div>
                        <div class="col-md-6 mb-4">{{ generalInfo.last_name }}</div>
                        <div class="col-md-6 opacity-50 mb-4">Birth Date</div>
                        <div class="col-md-6 mb-4">{{ generalInfo.birth_date }}</div>
                        <div class="col-md-6 opacity-50 mb-4">Gender</div>
                        <div class="col-md-6 mb-4">{{ generalInfo.gender }}</div>
                    </div>
                </template>
            </Card>
            <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>Work Experiance</h5>
                        <Button icon="pi pi-ellipsis-h" severity="secondary" text size="small" class="fw-semibol" @click="showMenu"/>
                        <Menu :model="experianceItems" popup ref="menuShow"/>
                    </div>
                    <Divider />
                    <div class="row p-2 gap-4" v-for="(experiance , index) in props.workExperiance" :key="index">
                         <div class="d-flex justify-content-between">
                           <div class="d-flex flex-column">
                                <span class="fw-bold">{{ experiance.title }} <Badge severity="secondary" v-if="(experiance.currently_working)">current position</Badge></span>
                                <span class="fs-6">{{ experiance.company }} </span>
                                <span class="fs-6">{{experiance.location}}</span>
                           </div>
                            <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" @click="experiance.id !== undefined && goToEdit(experiance.id)"/> </span>
                        </div>
                    </div>
                    
                </template>
                <template #footer>
                        <Button severity="secondary" class="w-100" @click="openAllExperiance">Show all ...</Button>
                </template>
            </Card>
             <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>Education Information</h5>
                         <Button icon="pi pi-ellipsis-h" severity="secondary" text size="small" class="fw-semibol" @click="showMenu"/>
                        <Menu :model="educationItems" popup ref="menuShow"/>
                    </div>
                    <Divider />
                    <div class="row p-2 gap-4" v-for="(education, index) in educationDetails" :key="index">
                        <div class="d-flex justify-content-between">
                           <div class="d-flex flex-column">
                                <span class="fw-bold">{{ education.school }}</span>
                                <span class="fs-6">{{education.degree+"-"+ education.field_of_study}}</span>
                           </div>
                            <span><Button icon="pi pi-pen-to-square" severity="secondary" size="small" class="fw-semibold" @click="()=>{router.push(`/profileEdit/educationInfo/${education.id}`)}"/> </span>
                        </div>
                    </div>
                </template>
            </Card>
             <Card class="mt-3">
                <template #content>
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <h5>Skills Information</h5>
                        <Button icon="pi pi-ellipsis-h" severity="secondary" text size="small" class="fw-semibol" @click="showMenu"/>
                        <Menu :model="experianceItems" popup ref="menuShow"/>
                    </div>
                    <Divider />
                </template>
            </Card>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, PropType, computed } from 'vue';
import Card from 'primevue/card';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Badge from 'primevue/badge';
import { useRouter } from 'vue-router';
import type {userGeneralInfoType} from '../../types/userGeneralInfoType';
import type { workExperianceType } from '@/types/workExperianceType';
import { useUserProfile } from '@/stores/User/userProfile';
import type  { educationType } from '../../types/educationType';

const router = useRouter();
const userProfile = useUserProfile();
const props = defineProps({
    generalInfo:{
        type:Object as PropType<userGeneralInfoType>,
        default:{}
    },
    workExperiance:{
        type:Array as PropType<Array<workExperianceType>>,
        default:{}
    },
    allExperiance:{
        type:Array as PropType<Array<workExperianceType>>,
            default:{}
    },
    educationDetails:{
        type:Array as PropType<Array<educationType>>,
        default:{}
    }
});
const generalInfo = computed(()=> props.generalInfo);
const workExperiance = computed(() => props.workExperiance);
const educationDetails = computed(() => props.educationDetails);
const menuShow = ref< InstanceType<typeof Menu> | null>(null);
const experianceItems = ref([
    { label: 'New', icon: 'pi pi-fw pi-plus',command:()=>{ userProfile.showExperianceEdit = false;router.push('/profileEdit/workExperience');} },
    { label: 'Sort', icon: 'pi pi-fw pi-sort' },
]);

const educationItems = ref([
    { label: 'New', icon: 'pi pi-fw pi-plus',command:()=>{ userProfile.showExperianceEdit = false;router.push('/profileEdit/educationInfo');} },
    { label: 'Sort', icon: 'pi pi-fw pi-sort' },
]);

const showMenu = (event: Event) => {
    if(menuShow.value)
    {
     menuShow.value.toggle(event);
    }
}

const openAllExperiance = () =>
{
    
}

const goToEdit = (id:number) =>
{
    userProfile.showExperianceEdit = true;
    router.push(`/profileEdit/workExperience/${id}`);
}

</script>