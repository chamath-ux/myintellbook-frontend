<template>
    <!-- <div class="mt-3 "> -->
        <div class="row flex-grow-1 overflow-auto  m-0 justify-content-center mb-3 gap-5">
            <div class="col-md-1"></div>
            <div class="col-md-2 mt-3 d-none d-md-block">
                <ProfileDetails />
            </div>
            <div class="col-md-4 mt-3">
                <!-- <NewPost /> -->
                <!-- <SortingMenu /> -->
                  <todayPost 
                    :profileImage="basicInfo.posts?.[0]?.profile_image || userPng"
                    :postName="`today's Question`"
                    questionCat="Digital Citizenship"
                    :Level="tquestion?.difficulty_level || 'Beginner'"
                    :content="tquestion?.question || 'No question available'"
                    :answers="tquestion?.options || 'No answers available'"
                  />
                    <div v-for="(post ,index) in basicInfo.posts"
                    :key="index">
                        <PostActivity 
                        :profileImage="basicInfo.posts?.[0]?.profile_image || userPng"
                        :postName="post.post_by"
                        :postDate="post.posted_at"
                        :content="post.post_content"
                        :postImage="post.post_image"
                        :comments="post.comments"
                        :post_id ="post.post_id"
                        />
                    </div>
               
                <!-- <userProfiles /> -->
            </div>

            <div class="col-md-3 mt-3 d-none d-md-block">
                
                <latestUpdates />
                <Divider class="w-75"/>
                <myExams  @createExam="showExamCreate" :visible="examsCreateShow"/>
                <Divider class="w-75" />
                <!-- <categoriesShow /> -->
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
import todayPost from '@/components/HomePage/todayPost.vue';

const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
const tquestion = computed(()=> userProfile.getSummaryDetails.tquestion);
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
