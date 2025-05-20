<template>
<div class="d-flex flex-column h-100 justify-content-center align-items-center image-section">
    <Panel
        :pt="{
            root: 'p-0 col-sm-12 col-md-4 overflow-auto',
            header: 'text-center fs-4 fw-bold w-100 d-flex justify-content-between ',
        }">
        <template #header>
           <h4>Forgot Password</h4>
           
        </template>
        <template #icons>
            <router-link to="/login"><Button icon="pi pi-arrow-left" severity="secondary" rounded text /></router-link>
            <Menu ref="menu" id="config_menu"  popup />
        </template>
        <InputText  v-model="userEmail" placeholder="Email" size="normal" id="userEmail" class="w-100 mt-3"/>
        <p class="mt-3">We’ll send a verification link to this email if it matches an existing account.</p>
         <Button :label="passwordResetButtonLabel" class="w-100" style="background-color:#a03829;" size="normal" @click="sentPasswordResetLink" id="passwordReset">
            <template #icon>
                <i class="pi pi-spin pi-spinner" style="font-size: 1rem" v-if="submitData"></i>
            </template>
        </Button>
    </Panel>
</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useUserStore } from '@/stores/user/userStore';
import Swal from 'sweetalert2';
import Menu from 'primevue/menu';

const passwordResetButtonLabel = ref<string>('Send Verification Link');
const userEmail = ref<string>('');
const userStore = useUserStore();
const submitData = ref<boolean>(false);

const sentPasswordResetLink = async() =>{
    passwordResetButtonLabel.value = 'please wait...';
    submitData.value = true;
    userStore.email = userEmail.value;
    let result = await userStore.resetPassword();
    if(result.code == 200){
        let confirm = await Swal.fire({
            icon: 'success',
            title: 'Success',
            text: result.message+" This link will expire in 60 minutes.",
            confirmButtonText: 'OK',
            confirmButtonColor: '#a03829',
        });
        if(confirm.isConfirmed){
            passwordResetButtonLabel.value = 'Send Verification Link';
            submitData.value = false;
        }
    }
    else{
        let confirm = await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: result.message,
            confirmButtonText: 'OK',
            confirmButtonColor: '#a03829',
        });
        if(confirm.isConfirmed){
            passwordResetButtonLabel.value = 'Send Verification Link';
            submitData.value = false;
        }
    }
    userEmail.value = '';
    
}
</script>
<style scoped>
.image-section{
    background-color:#ebe5d4;
    color:#a03829;
}
@media screen {
    @media (min-width: 768px) {
        .image-section{
            display:none;
        }
    }
    /* @media (min-width: 768px) {
        .image-section{
            display:none;
        }
    } */
}

</style>