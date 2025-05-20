<template>
<form class="d-flex justify-content-center align-items-center h-100 col-sm-12 w-100">
    <div class="d-flex flex-column gap-4 col-md-6 col-sm-12">
        <h4 class="fw-bold">Sign In to Myintelbook</h4>
        
            <InputText v-model="userLogin.email"  placeholder="Email" size="normal" id="userEmail"/>
            <InputGroup>
                <InputText :type="password" v-model="userLogin.password" placeholder="Password" id="userPassword"/>
                <InputGroupAddon><i :class="iconString" @click="showPassword('password')" id="showPassword"></i></InputGroupAddon>
            </InputGroup>
    <div>
        <p style="font-size:14px;">By clicking Sign In, you agreed to the Myintelbook <span style="color:#a03829;">Privacy Policy</span> and <span style="color:#a03829;">Cookie Policy.</span></p>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <p style="font-size:14px;">Don't have an account? <router-link to="/register" style="color:#a03829;">Sign Up</router-link></p>
            <p>
                <router-link to="/forgot-password" style="color:#a03829;">Forgot Password?</router-link>  
            </p>
        </div>
    </div>
            <Button :label="submitButtonLabel" class="w-100" style="background-color:#a03829;" size="normal" @click="submitUserData" id="login"/>
    </div>
</form>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import type userRegisterType from '@/types/userRegisterType';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import Swal from 'sweetalert2';
import { useUserStore } from '@/stores/user/userStore';

const userStore = useUserStore();
const submitButtonLabel = ref<string>('Sign In');
const userLogin = ref<userRegisterType>({
    email: '',
    password: '',
});

const password = ref<string>('password');
const iconString = ref<string>('bi bi-eye-slash');

const showPassword = (type: string) => {
    if(type === 'password'){
        password.value = password.value === 'password' ? 'text' : 'password';
        iconString.value = password.value === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye';
    }
};

const submitUserData = async() => {

userStore.userData =userLogin.value;
submitButtonLabel.value = 'please wait...';
let result = await userStore.loginUser();

    if(result.code  === 200){
       let confirm =await Swal.fire({
            icon: 'success',
            title: 'Success',
            text: result.message,
            confirmButtonText: 'OK',
            confirmButtonColor: '#a03829',
        });
        if(confirm.isConfirmed){
            localStorage.setItem('userToken', result.token);
           submitButtonLabel.value = 'Sign In';
        }
        
    }else{
        let confirm = await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: result.message,
            confirmButtonText: 'OK',
            confirmButtonColor: '#a03829',
        });

        if(confirm.isConfirmed){
           submitButtonLabel.value = 'Sign In';
        }
    }
}   

</script>