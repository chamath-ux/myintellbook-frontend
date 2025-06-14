<template>
        <div class="row gap-4 bg-card p-5 mt-4 flex-grow-1 overflow-auto rounded-4">
            <h5>Profile Visibility Settings</h5>

            <informationShow message="Select who may see your profile details." borderClass="border-primary" bgClass="bg-primary"/>
            <div class="border row">
               <div class="col-md-6 p-2 d-flex flex-column gap-2">
                    <h6>General Information</h6>
                    <div class="p-2 d-flex align-items-center">First Name</div>
                    <div class="p-2 d-flex align-items-center">Last Name</div>
                    <div class="p-2 d-flex align-items-center">Birth Date</div>
                    <div class="p-2 d-flex align-items-center">Gender</div>
                    
                </div>
                <div class="col-md-6 p-2">
                    <h6> Visibility</h6>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                </div>
            </div>
            <div class="border row">
               <div class="col-md-6 p-2 d-flex flex-column gap-2">
                    <h6>Work Experiance</h6>
                    <div class="p-2 d-flex align-items-center">Title</div>
                    <div class="p-2 d-flex align-items-center">Company Or Organization</div>
                    <div class="p-2 d-flex align-items-center">Location</div>
                    <div class="p-2 d-flex align-items-center">Employment Type</div>
                    <div class="p-2 d-flex align-items-center">Location Type</div>
                    
                </div>
                <div class="col-md-6 p-2">
                    <h6> Visibility</h6>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                </div>
            </div>
            <div class="border row">
               <div class="col-md-6 p-2 d-flex flex-column gap-2">
                    <h6>Education Information</h6>
                    <div class="p-2 d-flex align-items-center">School</div>
                    <div class="p-2 d-flex align-items-center">Degree</div>
                    <div class="p-2 d-flex align-items-center">Field Of Study</div>
                    
                </div>
                <div class="col-md-6 p-2">
                    <h6> Visibility</h6>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                </div>
            </div>
            <div class="border row">
               <div class="col-md-6 p-2 d-flex flex-column gap-2">
                    <h6>Skill Information</h6>
                    <div class="p-2 d-flex align-items-center">Skills</div>
                    
                </div>
                <div class="col-md-6 p-2">
                    <h6> Visibility</h6>
                    <div class="p-2 w-100">
                        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                    </div>
                </div>
            </div>
            <Button label="Save" icon="pi pi-save" severity="secondary" size="small" class="fw-semibold col-md-3" />
        </div> 
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Select from 'primevue/select';
import informationShow from '../../components/commonComponents/infomationShow.vue';

const selectedCity = ref();
const cities = ref([
    { name: 'Public', code: 'NY' },
    { name: 'Only Me', code: 'RM' },
]);
</script>