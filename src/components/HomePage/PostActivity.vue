<template>
    <Card class="mb-3">

        <template #content>
            <div class="d-flex flex-column">
               <div class="d-flex flex-row  text-secondary mb-3">
                 <Avatar
                    class="w-10 h-auto me-2"
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                    size="large"
                    shape="circle"
                />
                    <div class="d-flex flex-column">
                        <span class="fw-semibold">Chamath</span>
                        <span style="font-size:13px;opacity:0.8">6 days ago</span>
                    </div>
                    <i class="pi pi-ellipsis-h ms-auto text-secondary opacity-50" style="font-size:16px;cursor:pointer;" />
               </div>
               <i class="pi pi-briefcase text-secondary fs-2 w-100 text-center" />
                <p class="p-2 w-100 text-center">Has Updated his new job details</p>
            </div>
                <div class="d-flex flex-row align-items-center justify-content-between">
                    <span class="text-secondary" style="font-size:12px;">2 Likes</span>
                    <span class="text-secondary" style="font-size:12px;">2 Comments</span>
                </div>
                <div class="d-flex flex-row align-items-center justify-content-around text-center border-top p-2 border-bottom like-buttons">
                    <i class="pi pi-thumbs-up text-secondary" > Like</i>
                    <i class="pi pi-comment text-secondary" > Comment</i>
                </div>
        </template>
        <template #footer>
                <div class="d-flex flex-row align-items-center">
                    <Avatar
                    class="w-10 h-auto me-2"
                    image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
                    size="large"
                    shape="circle"
                /> 
                    <div class="w-100  border p-2 rounded d-flex flex-row align-items-center justify-content-between" @click="openCommentBox = true">
                        <span class="text-secondary" style="font-size:13px;" v-if="!openCommentBox">Add a comment...</span>
                        <InputText v-if="openCommentBox" class="w-100" placeholder="Add a comment..." />
                        <Button v-if="openCommentBox" label="Post" class="p-button-text p-button-secondary" @click="openCommentBox = false" />
                        <i class="pi pi-camera text-secondary  opacity-50" />
                       
                    </div>
                </div>                              
        </template>
    </Card>
</template>
<script lang="ts" setup>
import Card from 'primevue/card'; 
import Avatar from 'primevue/avatar';  
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

const openCommentBox = ref(false);
</script>
<style scoped>
.like-buttons i {
    cursor: pointer;
}
.comment-image{
    width:10px;
}
</style>