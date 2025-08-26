<template>
        <div class="row gap-4 bg-card p-4 mt-4 flex-grow-1 overflow-auto rounded-4">
            <h5 class="text-danger">Delete Account</h5>

            <informationShow message="Deleting your account will delete all of the content you have created. It will be completely irrecoverable." borderClass="border-warning" bgClass="bg-warning"/>
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