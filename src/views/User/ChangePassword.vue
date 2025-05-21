<template>
<div class="d-flex flex-column h-100 justify-content-center align-items-center image-section">
    <Panel
        :pt="{
            root: 'p-0 col-sm-12 col-md-4 overflow-auto',
            header: 'text-center fs-4 fw-bold w-100 d-flex justify-content-between ',
        }">
        <template #header>
           <h4>New Password</h4>
           
        </template>
        <InputGroup class="w-100 mt-3">
            <InputText :type="password"  v-model="userRegister.password" placeholder="New Password" size="normal" id="userPassword"  @focus="toggle" />
            <InputGroupAddon><i :class="iconString" @click="showPassword('password')" id="showPassword"></i></InputGroupAddon>
        </InputGroup>
        <InputGroup class="w-100 mt-3">
            <InputText  :type="confirmPassword" v-model="userRegister.password_confirmation" placeholder="Confirm Password" size="normal" id="userconfirmPassword" />
            <InputGroupAddon><i :class="conIconString" @click="showPassword('con-password')" id="showConfirmPassword"></i></InputGroupAddon>
        </InputGroup>
        
        <p class="mt-3">Enter a Strong Password.</p>
       <PasswordValidation :password="userRegister.password"  ref="ChangePassword"/>
        
         <Button :label="passwordResetButtonLabel" class="w-100" style="background-color:#a03829;" size="normal" @click="changePassword" id="changePassword">
            <template #icon>
                <i class="pi pi-spin pi-spinner" style="font-size: 1rem" v-if="submitData"></i>
            </template>
        </Button>
    </Panel>
</div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { useUserStore } from '@/stores/user/userStore';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Swal from 'sweetalert2';
import Menu from 'primevue/menu';
import type userRegisterType from '@/types/userRegisterType';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import  PasswordValidation  from '@/components/PasswordValidation.vue';



const passwordResetButtonLabel = ref<string>('Submit New Password');
const iconString = ref<string>('bi bi-eye-slash');
const conIconString = ref<string>('bi bi-eye-slash');
const password = ref<string>('password');
const confirmPassword = ref<string>('password');
const ChangePassword = ref<any>(null);

const userRegister = ref<userRegisterType>({
    password: '',
    password_confirmation: '',
});

const submitData = ref<boolean>(false);
const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const showPassword = (type: string) => {
    if(type === 'password'){
        password.value = password.value === 'password' ? 'text' : 'password';
        iconString.value = password.value === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye';
    }else{
        confirmPassword.value = confirmPassword.value === 'password' ? 'text' : 'password';
        conIconString.value = confirmPassword.value === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye';
    }
};


const toggle = (event) => {
    ChangePassword.value.toggle(event);
}

const changePassword = async() => {
    passwordResetButtonLabel.value = 'please wait...';
    submitData.value = true;
    userStore.userData =userRegister.value;
    let token = route.params.token.slice(1) as string;
    let result = await userStore.changePassword(token);
    if(result.code == 200){
        let confirm = await Swal.fire({
            icon: 'success',
            title: 'Success',
            text: result.message,
            confirmButtonText: 'OK',
            confirmButtonColor: '#a03829',
        });
        if(confirm.isConfirmed){
            passwordResetButtonLabel.value = 'Submit New Password';
            submitData.value = false;
            router.push({ name: 'login' });
        }
    }
    else if(result.message == 'Invalid token')
    {
        let confirm = await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: result.message,
            confirmButtonText: 'resend link',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#a03829',
        });
        if(confirm.isConfirmed){
            router.push({ name: 'password.reset' });
            passwordResetButtonLabel.value = 'Submit New Password';
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
            passwordResetButtonLabel.value = 'Submit New Password';
            submitData.value = false;
        }
    }
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