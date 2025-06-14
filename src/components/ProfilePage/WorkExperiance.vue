<template>
   
        <div class="row gap-4 p-4 bg-card mt-4 flex-grow-1 overflow-auto rounded-4">
            <div class="d-flex justify-content-between align-items-center">
                <h5>Work Experiance</h5>
                <Button icon="pi pi-trash" severity="danger" size="small" class="fw-semibold col-md-3" v-if="showDelete" @click="confirmDelete"/>
            </div>
            <div class="d-flex flex-column">
                <FloatLabel variant="on" class="p-0 col-md-9">
                    <InputText  inputId="Title" id="FirstName" size="small" class="w-100"/>
                    <label for="Title">Title</label>
                </FloatLabel>
                <Visibility />
            </div>
            <div class="d-flex flex-column">
                <FloatLabel variant="on" class="p-0 col-md-9">
                    <InputText  inputId="company" id="FirstName" size="small" class="w-100"/>
                    <label for="company">Company Or Organization</label>
                </FloatLabel>
                <Visibility />
            </div>
                <div class="p-0 d-flex flex-row align-items-center gap-2">
                    <Checkbox v-model="currentlyWorking" inputId="ingredient1" name="pizza" value="Cheese" size="small"/>
                    <label for="ingredient1"> I am currently working in this role </label>
                </div>
            <div class="d-flex flex-column">
                <FloatLabel variant="on" class="p-0 col-md-9">
                    <InputText  inputId="location" id="FirstName" size="small" class="w-100"/>
                    <label for="location">Location</label>
                </FloatLabel>
                <Visibility />
            </div>
            <div class="d-flex flex-column">
                <FloatLabel variant="on" class="p-0 col-md-5">
                    <Select v-model="selectEmpType" :options="empTypes" optionLabel="name" inputId="SelectedGender" class="w-100" />
                    <label for="SelectedGender">Employment Type</label>
                </FloatLabel>
                <Visibility />
            </div>
            <div class="d-flex flex-column">
                <FloatLabel variant="on" class="p-0 col-md-4">
                    <Select v-model="locationType" :options="types" optionLabel="name" inputId="locatoinType" class="w-100" />
                    <label for="locatoinType">Location Type</label>
                </FloatLabel>
             <Visibility />
            </div>
            <Button label="Save" icon="pi pi-save" severity="secondary" size="small" class="fw-semibold col-md-3" />
            
        </div>
    
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import Checkbox from 'primevue/checkbox';
import Visibility from '../commonComponents/Visibility.vue';
import { useRoute } from 'vue-router';
import showAlert from '@/composables/showAlert';

const route = useRoute();
const showDelete = computed(() => (route.params.id) ? true : false);
const currentlyWorking = ref(false);

const confirmDelete = async() => {
  let config ={
                icon:'warning',
                title:'Warning',
                text: 'Are you sure? Delete this work experiance',
                confirmButtonText: 'OK',
                confirmButtonColor: '#a03829',
                showConfirmButton:true,
                showCancelButton:true
            }
            
        let confirm = await showAlert(config);
}

const selectEmpType = ref('');
const locationType = ref('');
const empTypes = ref([
    { name : 'Full Time', code: 'NY' },
    { name : 'Part Time', code: 'RM' },
    { name : 'Contract', code: 'RM' },
    { name : 'Internship', code: 'RM' },
]);
const types = ref([
    { name : 'Office', code: 'NY' },
    { name : 'Home', code: 'RM' },
])
</script>