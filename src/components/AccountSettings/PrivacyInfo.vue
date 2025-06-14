<template>
        <div class="row gap-4 bg-card p-5 mt-4 flex-grow-1 overflow-auto rounded-4">
            <h5>Profile Visibility Settings</h5>

            <informationShow message="Select who may see your profile details." borderClass="border-primary" bgClass="bg-primary"/>
            <div class="border row p-4">
                    <h6>General Information</h6>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            First Name
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Last Name
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Birth Date
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                     <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Gender
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
            </div>
            <div class="border row p-4">
                    <h6>Work Experiance</h6>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Title
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Company Or Organization
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Location
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Employment Type
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                     <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Location Type
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
            </div>
            <div class="border row p-4">
                    <h6>Education Information</h6>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            School
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Degree
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Field Of Study
                        </div>
                        <div class="col-md-6 p-2">
                            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="" size="small" class="w-100" />
                        </div>
                    </div>
            </div>
            <div class="border row p-4">
                    <h6>Skill Information</h6>
                    <div class="row">
                        <div class="p-2 d-flex align-items-center col-md-6">
                            Skills
                        </div>
                        <div class="col-md-6 p-2">
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