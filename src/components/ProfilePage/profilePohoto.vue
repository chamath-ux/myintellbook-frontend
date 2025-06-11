<template>
    <div class="row gap-4 p-4 bg-card mt-4 flex-grow-1 overflow-auto rounded-4">
        <h5>Change Profile Photo</h5>
        <div>
            
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
</script>