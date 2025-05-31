<template>
<div class="flex-grow-1 overflow-auto">
    <div class="row h-100 me-0 mx-0">
        <div class="col-md-6 d-none d-md-flex flex-column image-section justify-content-center align-items-center" >
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
import formComponent from '@/components/userLogin/formComponent.vue';

const submitUserData = (userRegister: any) => {

};
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
body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {
    height: 100% !important;
}
</style>