<template>
    <div>
        <h1 class="text-center">Welcome to User Home</h1>
        <p class="text-center">Checking user status...</p>
        <Button label="Check Status" @click="checkStatus" />
        <p class="text-center">You will be redirected based on your login status.</p>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user/userStore';
import Button from 'primevue/button';

const userstore = useUserStore();

const checkStatus = async() =>{
    const result = await userstore.checkUserStatus();
    if (result.code === 200) {
        // User is logged in, redirect to home or dashboard
        window.location.href = '/home';
    } else {
        // User is not logged in, redirect to login page
        window.location.href = '/login';
    }
}

</script>