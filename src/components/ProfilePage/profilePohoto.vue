<template>
    <div class="row gap-4 p-4 bg-card mt-4 flex-grow-1 overflow-auto rounded-4">
        <h5>Change Profile Photo</h5>
        <div class="">
            <informationShow message="Your profile photo will be used on your profile and throughout the site." borderClass="border-primary" bgClass="bg-primary"/>
            <div>
                <form
                    ref="dropzoneForm"
                    class="dropzone d-flex flex-column align-items-center justify-content-center"
                    id="myDropzone"
                    action="https://httpbin.org/post"
                ></form>
            </div>
            <Button label="Save" icon="pi pi-save" severity="secondary" size="small" class="fw-semibold col-md-3 mt-4" />
        </div>
          
    </div> 
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import informationShow from '../../components/commonComponents/infomationShow.vue';
import Dropzone from 'dropzone'
import 'dropzone/dist/dropzone.css';
onMounted(() => {
  new Dropzone('#myDropzone', {
    paramName: 'file',
    maxFilesize: 2, // MB
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    success(file, response) {
      console.log('Upload success:', response)
    },
  })
})
</script>