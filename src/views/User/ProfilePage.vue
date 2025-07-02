<template>
    <div class="row flex-grow-1 m-0 overflow-auto">
        <div class="col-md-1"></div>
        <div class="col-md-7">
            <Card :pt="{
               body:{
                class:'p-0',
                style:'height:345px;'
               }
            }">
                <template #content>
                    <div class="profile-container mb-4">
                        <div class="cover-photo p-4 text-end" @click="()=>{ router.push('/profileEdit/addCoverImage')}" :style="{ backgroundImage: `url(${(userGeneralInfo.cover_image)?userGeneralInfo.cover_image:coverImageSet})` }">
                        <i class="pi pi-pencil cover-icon fs-5 border rounded-circle p-2 bg-light text-primary" />
                        </div>
                         <div class="avatar-wrapper position-relative d-inline-block" @click="()=>{ router.push('/profileEdit/addProfileImage')}">
                            <i class="pi pi-camera fs-5 border rounded-circle p-2 bg-light text-primary profile-image-icon position-absolute" />
                             <Avatar :image="(userGeneralInfo.profile_image) ?userGeneralInfo.profile_image : userPng" class="profile-image" shape="circle" />

                        </div>

                    </div>
                    <p class="w-100 text-center fs-4 mt-5 mb-0 fw-semibold">{{userGeneralInfo.first_name}}</p>
                     <p class="w-100 text-center fs-6 m-0 p-0 opacity-50"></p>
                     <p class="w-100 text-center fs-6 m-0 p-0 opacity-50"></p>
                </template>
            </Card>
            <div class="d-flex flex-row align-items-center mt-4 menuBar gap-4 mx-4" style="margin-top:100px;">
               <div @click="() => {showTimeLine = true; showProfile = false; }" :class="(showTimeLine) ? 'underline': ''">Timeline</div>
                <div @click="()=>{showProfile = true; showTimeLine = false;}"  :class="(showProfile) ? 'underline': ''">Profile</div>
            </div>
                <profileDetails 
                v-if="showProfile"  
                :generalInfo="userGeneralInfo"
                :workExperiance="workExperiance"
                :allExperiance="allExperiance"
                :educationDetails="educationDetails"
                :skills="skills"
                @skilldeleted="getSkills"
                />
                <div  class="row mt-3" v-if="showTimeLine">
                   <div class="col-md-4">
                        <Divider >
                        <span class="text-secondary" style="font-size:12px;">create a exam</span>
                            
                        </Divider>
                        <NewExamCreate />
                   </div>
                   <div class="col-md-8"> 
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
                   </div>
                </div>
        </div>
         <div class="col-md-3 mt-3 d-none d-md-block">
                
                <myExams />
                <Divider />
                <latestUpdates />
                <Divider />
                <categoriesShow />
                <Divider />
                <ProfileList />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import ProfileList from '../../components/HomePage/ProfileList.vue';
import myExams from '@/components/HomePage/MyExams.vue';
import Avatar from 'primevue/avatar';
import profileDetails from '../../components/ProfilePage/profileDetails.vue';
import SortingMenu from '@/components/HomePage/SortingMenu.vue';
import NewPost from '@/components/HomePage/NewPost.vue';
import PostActivity from '@/components/HomePage/PostActivity.vue';
import NewExamCreate from '../../components/HomePage/NewExamCreate.vue';
import { useUserProfile } from '@/stores/User/userProfile';
import type {userGeneralInfoType} from '../../types/userGeneralInfoType';
import showAlert from '@/composables/showAlert';
import type { workExperianceType } from '@/types/workExperianceType';
import type  { educationType } from '../../types/educationType';
import latestUpdates from '@/components/commonComponents/latestUpdates.vue';
import categoriesShow from '@/components/commonComponents/categoriesShow.vue';
import { useRouter } from 'vue-router';
import userPng from '../../assets/user.png';
import coverImageSet from '../../assets/default-cover-2.jpg';
import MyExams from '@/components/HomePage/MyExams.vue';

const showProfile = ref(false);
const showTimeLine = ref(true);
const router = useRouter();
const userProfile = useUserProfile();
const currentWorking = ref();
const skills = ref<Array<{skill:'',id:0}>>([]);
const allExperiance = ref<Array<workExperianceType>>([]);
const educationDetails = ref<Array<educationType>>([]);
const userGeneralInfo = ref<userGeneralInfoType>({
    first_name: '',
    last_name: '',
    gender: 0,
    birth_date: '',
    profile_image:'',
    cover_image:'',
    visibility:{}
});
const workExperiance = ref<Array<workExperianceType>>([]);
const basicInfo = computed(()=> userProfile.getSummaryDetails);

const getGeneralInfo = async() =>
{
    let result = await userProfile.getGeneralInfo();
    if(result.code == 200)
   {
        userGeneralInfo.value = result.data[0];
        userGeneralInfo.value.gender = (userGeneralInfo.value.gender == 1) ? 'Male':'Female';
        userProfile.profile_image_set =  userGeneralInfo.value.profile_image;
        userProfile.cover_image_set =  userGeneralInfo.value.cover_image;
        
   }else{
    let config ={
                    icon:'error',
                    title:'Error',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
            
        let confirm = await showAlert(config);
   }
}

const getExperiance = async() =>
{
    let result = await userProfile.getExperiance();
    if(result.code == 200)
   {
    workExperiance.value =result.data.slice(0,3);
    allExperiance.value = result.data;
    currentWorking.value = workExperiance.value.find((item) => item.currently_working == 1);

   }else{
    let config ={
                    icon:'error',
                    title:'Error',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
            
        let confirm = await showAlert(config);
   }
}

const getEducationInfo = async() =>
{
   let result = await userProfile.getEducationInfo();

   if(result.code == 200)
   {
    console.log(result);
    educationDetails.value =result.data.slice(0,3);
    // allExperiance.value = result.data;

   }else{
    let config ={
                    icon:'error',
                    title:'Error',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
            
        let confirm = await showAlert(config);
   }
}

const getSkills = async() =>
{
    let result = await userProfile.getSkills();

   if(result.code == 200)
   {
    skills.value =result.data;
    // allExperiance.value = result.data;

   }else{
    let config ={
                    icon:'error',
                    title:'Error',
                    text: result.message,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#a03829',
                    showConfirmButton:true
                }
            
        let confirm = await showAlert(config);
   }
}

const BasicInfo = async() =>
{
  let result =await userProfile.basicInfo();

  if(result.code == 200){
    userProfile.summaryDetails = result.data[0];
      console.log(result);
  }else{
    console.error(result.error)
  }
}


onMounted(async()=>{
    await getGeneralInfo();
    await getExperiance();
    await getEducationInfo();
    await getSkills();
     await BasicInfo();
})
</script>
<style scoped>
.profile-container {
  /* position: relative; */
  width: 100%;
  margin: auto;
    text-align: center;
}

.cover-photo {
  height: 200px;
  background-image: url('../../assets/cover.jpg');
  background-size: cover;
  background-position: center;
  background-color:red;
}

.profile-image {
  position: absolute;
  bottom: -50px; /* move it slightly down to overlap */
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid white;
  object-fit: cover;
}
.menuBar > div:hover{
    cursor:pointer;
    color:orange;
    border-bottom:orange 2px solid;
}
.underline{
    border-bottom:orange 2px solid;
}
.name-profile{
    position: absolute;
    bottom: 40px;
    left: 34%;
    font-size: 25px;
    font-weight: 600;
}
.cover-photo:hover{
    cursor: pointer;
    opacity: 0.7;
}

.cover-icon{
    display: none;
}
.cover-photo:hover .cover-icon{
    display:inline;
}

.avatar-wrapper {
  /* width: fit-content;
  height: fit-content; */
  position: relative;
  display: inline-block;
}

.profile-image-icon {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: none;
}

.avatar-wrapper:hover{
    cursor: pointer;
}

.avatar-wrapper:hover .profile-image-icon{
     display:inline-block;
}

</style>