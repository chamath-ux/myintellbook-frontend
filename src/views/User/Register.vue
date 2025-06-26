<template>
<div class="flex-grow-1 overflow-auto">
    <div class="row h-100 me-0 mx-0">
        <div class="col-md-6 d-none d-md-flex flex-column image-section justify-content-center align-items-center overflow-hidden" >
            <div class="w-100 text-center">
                <img src="@/assets/myinteli.svg"  class="w-50"/>
            </div>
            <div class="w-100 text-center">
                <h1 class="">Make the most</h1>
                <h2>of your professional life</h2>
                <span>
                    Lorem ipsum dolor sit amet consectetur. Magna viverra vitae lacus vel
                    nec in risus non. Quis amet consectetur arcu aliquet. Mauris eget.
                </span>
            </div>
        </div>
        <div class="col-md-6 align-content-center">
            <formComponent />
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue';
import formComponent from '@/components/userRegister/formComponent.vue';
import { useUserStore } from '@/stores/User/userStore';

const userStore = useUserStore();
const submitUserData = (userRegister: any) => {

};

const setNavBarShow = ()=>
{
    userStore.isShowNavBar = false
}

onMounted(()=>{
    setNavBarShow();
})
</script>
<style scoped>
.image-section{
    background-color:#ebe5d4;
    color:#a03829;
}

</style>