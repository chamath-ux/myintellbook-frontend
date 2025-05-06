<template>
<form class="d-flex justify-content-center align-items-center h-100 col-sm-12">
    <div class="d-flex flex-column gap-4">
        <h4 class="fw-bold">Sign Up to Myintelbook</h4>
        
            <InputText v-model="userRegister.email"  placeholder="Email" size="normal"/>
            <InputGroup>
                <InputText :type="password" v-model="userRegister.password" placeholder="Password"/>
                <InputGroupAddon><i :class="iconString" @click="showPassword('password')"></i></InputGroupAddon>
            </InputGroup>

            <InputGroup>
                <InputText :type="confirmPassword" v-model="userRegister.confirmPassword" placeholder="Confirm Password"/>
                <InputGroupAddon><i :class="conIconString" @click="showPassword('con-password')"></i></InputGroupAddon>
            </InputGroup>
            <p style="font-size:14px;">By clicking Agree and Join, you agreed to the Myintelbook <span style="color:#a03829;">Privacy Policy</span> and <span style="color:#a03829;">Cookie Policy.</span></p>
            <Button label="Agree and Join" class="w-100" style="background-color:#a03829;" size="normal" @click="submitUserData"/>
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


const emits = defineEmits(['submitUserData']);
const userStore = useUserStore();
const userRegister = ref<userRegisterType>({
    email: '',
    password: '',
    confirmPassword: '',
});

const password = ref<string>('password');
const confirmPassword = ref<string>('password');
const iconString = ref<string>('bi bi-eye-slash');
const conIconString = ref<string>('bi bi-eye-slash');

const showPassword = (type: string) => {
    if(type === 'password'){
        password.value = password.value === 'password' ? 'text' : 'password';
        iconString.value = password.value === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye';
    }else{
        confirmPassword.value = confirmPassword.value === 'password' ? 'text' : 'password';
        conIconString.value = confirmPassword.value === 'password' ? 'bi bi-eye-slash' : 'bi bi-eye';
    }
};

const submitUserData = () => {

userStore.userData =userRegister.value;
let result = userStore.submitUserData();
    emits('submitUserData', userRegister.value);
}   

</script>