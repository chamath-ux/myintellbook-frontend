<template>
        <div class="row p-4 bg-card rounded-4 mt-4">
            <h5>Skills Information</h5>

            <informationShow message="You can add new skills."  bgClass="bg-primary" borderClass="border-primary" class="mb-4 mt-2"/>
            <FloatLabel variant="on" class="p-0 col-md-9">
                <InputText  inputId="skill" id="FirstName" size="small" class="w-100" v-model="skillDetails.skill"/>
                <label for="skill">Skills</label>
            </FloatLabel>
                <Button label="Save" icon="pi pi-save" severity="secondary" size="small" class="fw-semibold col-md-3" @click="submitSkill" >
                   <i class="pi pi-spin pi-spinner" v-if="(btnName == 'Please wait .....')" />
                    <i class="pi pi-save" v-else />
                    <label class="fw-semibold">{{ btnName }}</label>
                </Button>
        </div> 
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import informationShow from '../../components/commonComponents/infomationShow.vue';
import { useUserProfile } from '@/stores/User/userProfile';
import showAlert from '@/composables/showAlert';
import {useRouter} from 'vue-router';

const router = useRouter();
const skillDetails = ref({
    skill:''
});
const userProfile = useUserProfile();
const btnName = ref<string>('Save');

const submitSkill = async() =>
{
    btnName.value = 'Please wait .....';
    userProfile.skillDetails = skillDetails.value;
    let result = await userProfile.addSkill();

    if(result.code == 200)
    {
         let config ={
            icon:'success',
            title:'Success',
            text: result.message,
            confirmButtonText: 'OK',
            confirmButtonColor: '#a03829',
            showConfirmButton:false,
            timer: 3000
        }
        let confirm = await showAlert(config);

        if(confirm.isDismissed){
            btnName.value = 'Save';
            router.push('/profile')
        }
    }

}
</script>