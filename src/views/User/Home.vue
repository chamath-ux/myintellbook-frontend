<template>
    <!-- <div class="mt-3 "> -->
        <div class="row flex-grow-1 overflow-auto  m-0 justify-content-center mb-3">
            <div class="col-md-1"></div>
            <div class="col-md-2 mt-3 d-none d-md-block">
                <ProfileDetails />
            </div>
            <div class="col-md-5 mt-3">
                <NewPost />
                <SortingMenu />
                    <div v-for="(post ,index) in basicInfo.posts"
                    :key="index">
                        <PostActivity 
                        :profileImage="(post.profile_image)? post.profile_image : userPng"
                        :postName="post.post_by"
                        :postDate="post.posted_at"
                        :content="post.post_content"
                        :postImage="post.post_image"
                        />
                    </div>
               
                <!-- <userProfiles /> -->
            </div>
            <div class="col-md-3 mt-3 d-none d-md-block">
                
                <myExams  @createExam="showExamCreate" :visible="examsCreateShow"/>
                <Divider class="w-75"/>
                <latestUpdates />
                <Divider class="w-75" />
                <categoriesShow />
                <Divider class="w-75" />
                <ProfileList />
            </div>   
        </div>
        
    <!-- </div> -->
</template>
<script setup lang="ts">
import { ref , computed, onMounted, onBeforeUnmount} from 'vue';
import ProfileDetails from '@/components/HomePage/ProfileDetails.vue';
import SortingMenu from '@/components/HomePage/SortingMenu.vue';
import Divider from 'primevue/divider';
import ProfileList from '@/components/HomePage/ProfileList.vue';
import compeletedProfile from '@/components/HomePage/compeleteProfile.vue';
import NewPost from '@/components/HomePage/NewPost.vue';
import PostActivity from '@/components/HomePage/PostActivity.vue';
import latestUpdates from '@/components/commonComponents/latestUpdates.vue';
import categoriesShow from '@/components/commonComponents/categoriesShow.vue';
import myExams from '@/components/HomePage/MyExams.vue';
import { useUserProfile} from '../../stores/User/userProfile';
import userPng from '../../assets/user.png';
import createExam from '@/components/commonComponents/createExam.vue';

const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
const examCreate = ref<InstanceType<typeof createExam> | null>(null);
const examsCreateShow   = ref(false);
const showExamCreate = ()=>
{
    if(examCreate.value)
    {
       examsCreateShow.value = true;
    }
}
</script>
