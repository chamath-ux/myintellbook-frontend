<template>
        <div class="row p-4 bg-card rounded-4 mt-4">
            <h5>Skills Information</h5>

            <informationShow message="You can add new skills."  bgClass="bg-primary" borderClass="border-primary" class="mb-4 mt-2"/>
            <FloatLabel variant="on" class="p-0 col-md-9">
                <InputText  inputId="skill" id="FirstName" size="small" class="w-100"/>
                <label for="skill">Skills</label>
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
import informationShow from '../../components/commonComponents/infomationShow.vue';
</script>