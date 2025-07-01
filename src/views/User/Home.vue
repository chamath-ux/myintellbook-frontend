<template>
    <!-- <div class="mt-3 "> -->
        <div class="row flex-grow-1 overflow-auto  m-0 justify-content-center mb-3">
            <div class="col-md-3 mt-3 d-none d-md-block">
                <ProfileDetails />
            </div>
            <div class="col-md-5 mt-3">
               <h3 class="fw-bold mb-4"> Activity Feed</h3>
                <NewPost />
                <SortingMenu />
                    <div  v-for="(post ,index) in basicInfo.posts"
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
                
                <compeletedProfile />
                <Divider />
                <latestUpdates />
                <Divider />
                <categoriesShow />
                <Divider />
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
import { useUserProfile} from '../../stores/User/userProfile';
import userPng from '../../assets/user.png';

const userProfile = useUserProfile();
const basicInfo = computed(()=> userProfile.getSummaryDetails);
</script>
