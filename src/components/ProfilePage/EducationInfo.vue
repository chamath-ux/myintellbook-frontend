<template>
        <div class="row gap-4 p-4 bg-card mt-4 flex-grow-1 overflow-auto rounded-4">
            <h5>Education Information</h5>
            <FloatLabel variant="on" class="p-0 col-md-9">
                <InputText  inputId="School" id="FirstName" size="small" class="w-100"/>
                <label for="School">School</label>
            </FloatLabel>
            <FloatLabel variant="on" class="p-0 col-md-9">
                <InputText inputId="Degree" class="w-100" size="small" />
                <label for="Degree">Degree</label>
            </FloatLabel>
            <FloatLabel variant="on" class="p-0 col-md-9">
                <InputText inputId="study" class="w-100" size="small" />
                <label for="study">Field Of Study</label>
            </FloatLabel>
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
</script>