<template>
<div class="row h-100 overflow-auto d-flex flex-grow-1">
    <div class="col-md-6 d-flex flex-column image-section justify-content-center align-items-center overflow-hidden" >
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
    <div class="col-md-6">
        <formComponent />
    </div>
</div>
</template>
<script setup lang="ts">
import formComponent from '@/components/userRegister/formComponent.vue';

const submitUserData = (userRegister: any) => {

};
</script>
<style scoped>
.image-section{
    background-color:#ebe5d4;
    color:#a03829;
}

</style>