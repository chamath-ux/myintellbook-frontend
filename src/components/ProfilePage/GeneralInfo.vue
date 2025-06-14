<template>
        
        <div class="row gap-4 p-4 bg-card mt-4 flex-grow-1 overflow-auto rounded-4">
            <div class="d-flex flex-row align-items-center justify-content-between">
                <h5>Edit General Information</h5>
                
            </div>
             <div class="d-flex flex-column"> 
                <FloatLabel variant="on" class="p-0 col-md-9">
                    <InputText  inputId="FirstName" id="FirstName" size="small" class="w-100"/>
                    <label for="FirstName">First Name</label>
                </FloatLabel>
               
                <Visibility @visibilityChange="visibilityChange"/>
            </div>
            <div class="d-flex flex-column"> 
                <FloatLabel variant="on" class="p-0 col-md-9">
                    <InputText inputId="LastName" class="w-100" size="small" />
                    <label for="LastName">Last Name</label>
                </FloatLabel>
                <Visibility/>
            </div>
             <div class="d-flex flex-column"> 
                <FloatLabel variant="on" class="p-0 col-md-5">
                    <Select v-model="selectedCity" :options="cities" optionLabel="name" inputId="SelectedGender" class="w-100" />
                    <label for="SelectedGender">Select a Gender</label>
                </FloatLabel>
                <Visibility/>
             </div>
             <div class="d-flex flex-column"> 
                <FloatLabel variant="on" class="p-0 col-md-3">
                    <DatePicker v-model="value1" inputId="over_label" showIcon iconDisplay="input"/>
                    <label for="over_label">Birth Date</label>
                </FloatLabel>
                <Visibility/>
            </div>
                <Button label="Save" icon="pi pi-save" severity="secondary" size="small" class="fw-semibold col-md-3" />
        </div> 
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import Visibility from '../commonComponents/Visibility.vue';

const visibilityChange = (value: any) =>
{
    console.log(value)
}
 const cities = ref([
    { name: 'Male', code: 'NY' },
    { name: 'Female', code: 'RM' },
]);
const selectedCity = ref(null);
const value1 = ref(null);
</script>