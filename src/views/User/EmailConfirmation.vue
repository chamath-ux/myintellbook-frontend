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
            <h4 class="text-center w-100">Email Confirmation</h4>
        </div>
    </template>
        <p class="m-0">
           You are almost there! We have sent you a verification email. Please check your inbox.
                        Just click on the link in that email to complete your action. If you don't see it, 
                        you may need to <strong>check your spam</strong> folder.<strong><a href="https://mail.google.com/mail/u/0/#spam" class="fw-semibold fs-6" target="_blank">Go to Spam folder</a></strong>
        </p>
    </Panel>
</div>
</template>
<script lang="ts" setup>
import Panel from 'primevue/panel';

</script>