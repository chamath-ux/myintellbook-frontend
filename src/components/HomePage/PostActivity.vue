<template>
    <Card class="mb-3" :pt="{
        body:'p-0',
        footer:'px-3 pb-2'
    }">

        <template #content>
            <div class="d-flex flex-column">
               <div class="d-flex flex-row  text-secondary mb-3 px-3 pt-2">
                 <Avatar
                    class="w-10 h-auto me-2"
                    :image="profileImage"
                    size="large"
                    shape="circle"
                />
                    <div class="d-flex flex-column">
                        <span class="fw-semibold">{{ postName }}</span>
                        <span style="font-size:13px;opacity:0.8">{{ postDate }}</span>
                    </div>
                    <i class="pi pi-ellipsis-h ms-auto text-secondary opacity-50" style="font-size:16px;cursor:pointer;" />
               </div>
               <p class="w-100 mb-2 px-3" :class="(!postImage)? 'text-center':''">{{content}}</p>
               <Image v-if="postImage" :src="postImage" class="pb-2 text-center" width="100%" preview/>

            </div>
                <div class="d-flex flex-row align-items-center justify-content-between px-3 pt-2">
                    <span class="text-secondary" style="font-size:12px;">2 Likes</span>
                    <span class="text-secondary" style="font-size:12px;" @click="showHideComment">2 Comments</span>
                </div>
                <div class="d-flex flex-row align-items-center justify-content-around text-center border-top p-2 border-bottom like-buttons">
                    <i class="pi pi-thumbs-up text-secondary" > Like</i>
                    <i class="pi pi-comment text-secondary" @click="showHideComment"> Comment</i>
                </div>
        </template>
        <template #footer>
                <div class="d-flex flex-row align-items-center" v-if="openCommentBox">
                    <Avatar
                    class="w-10 h-auto me-2"
                    :image="profileImage"
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
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Image from 'primevue/image';
import { ref, computed } from 'vue';

const props = defineProps({
    profileImage: {
        type: String,
        default: ''
    },
    postName:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    },
    postDate:{
        type:String,
        default:''
    },
    postImage:{
        type:String,
        default:''
    }
});
const profileImage = computed(()=>props.profileImage);
const postName = computed(()=> props.postName);
const content = computed(()=>props.content);
const postDate = computed(()=> props.postDate);
const postImage = computed(()=>props.postImage);
const openCommentBox = ref(false);

const showHideComment = () => {
    openCommentBox.value = !openCommentBox.value;
};

</script>
<style scoped>
.like-buttons i {
    cursor: pointer;
}
.comment-image{
    width:10px;
}
</style>