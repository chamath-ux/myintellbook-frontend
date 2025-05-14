<template>
<div class="h-100 d-flex  flex-column justify-content-center align-items-center" style=" background-color:#ebe5d4;">
    <Panel 
    :pt="{
        root: 'w-50',
        header:'fs-3 text-center',
    }">
    <template #header>
        <div class="d-flex flex-column align-items-center w-100 gap-2">
            <i class="pi pi-envelope"></i>
            <h4 class="text-center w-100">Email Confirmed</h4>
        </div>
    </template>
        <p class="m-0">
           You have successfully verified your email!<strong @click="verifiedEmail" class="cursor"> Go To login</strong>
        </p>
    </Panel>
</div>
</template>
<script lang="ts" setup>
import Panel from 'primevue/panel';
import { useUserStore } from '@/stores/user/userStore';
import { onMounted, ref, computed, watch } from 'vue';
import type verifyEmailType from '@/types/verifyEmail';
import { useRouter } from 'vue-router';
const router = useRouter();

const userStore = useUserStore();
const verifyEmail = ref<verifyEmailType>({
    token: '',
    email: ''
});
const verifiedEmail = async() =>{
    const url = new URL(window.location.href);
    const token = url.searchParams.get('token');
    const email = url.searchParams.get('email');
    if(token && email){
        verifyEmail.value = {
            token: token,
            email: email
        };
        userStore.verifyEmail = verifyEmail.value;
        let result = await userStore.emailVeryfied();
    
        if(result){
            router.push('/login')
        }
    }
    else{
        // Handle the case where token or email is not present
        console.error('Token or email not provided in the URL.');
    }   

}



</script>
<style scoped>
.cursor{
    cursor: pointer;
    color: blue;
}
</style>