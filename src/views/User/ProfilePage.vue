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
                        <div class="cover-photo">
                        
                        </div>
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="profile-image" shape="circle"  />

                    </div>
                    <p class="w-100 text-center fs-4 mt-5 mb-0 fw-semibold">Chamath</p>
                     <p class="w-100 text-center fs-6 m-0 p-0 opacity-50">Itelligence Pvt Ltd</p>
                     <p class="w-100 text-center fs-6 m-0 p-0 opacity-50">Colombo</p>
                </template>
            </Card>
            <div class="d-flex flex-row align-items-center mt-4 menuBar gap-4 mx-4" style="margin-top:100px;">
               <div @click="() => {showTimeLine = true; showProfile = false; }" :class="(showTimeLine) ? 'underline': ''">Timeline</div>
                <div @click="()=>{showProfile = true; showTimeLine = false;}"  :class="(showProfile) ? 'underline': ''">Profile</div>
            </div>
                <profileDetails v-if="showProfile" />
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
                        <PostActivity />
                        <PostActivity />
                   </div>
                </div>
        </div>
        <div class="col-md-3 mt-3 d-none d-md-block">
                
            <compeletedProfile />
            <Divider />
            <Card class="mb-3">
                <template #title>
                    <span class="fw-semibold fs-5">Latest Updates</span>
                </template>
            </Card>
            <Divider />
            <Card class="mb-3">
                <template #title>
                    <span class="fw-semibold" style="font-size:18px;">Categories</span>
                    <i class="pi pi-question-circle text-secondary mx-1" style="font-size:12px;"></i>
                </template>
                <template #content>
                    <Tabs :value="selectedTab" :pt="{
                        root: 'w-100'
                    }">
                        <TabList :value="selectedTab">
                            <Tab value="0" class="col-md-6">Newest</Tab>
                            <Tab value="1" class="col-md-6">My</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel value="0">
                                <ul class="list-unstyled m-0 p-0 category-list">
                                    <li class="p-2 d-flex flex-column" @click="toggle('Category 1')">
                                        <span class="fw-semibold">Category 1</span>
                                        <span class="text-secondary opacity-75 fw-semibold" style="font-size:12px;"> created 6 hours ago</span>
                                    </li>
                                    <li class="p-2 d-flex flex-column" @click="toggle('Category 2')">  
                                        <span class="fw-semibold">Category 2</span>
                                        <span class="text-secondary opacity-75 fw-semibold" style="font-size:12px;"> created 8 hours ago</span>
                                    </li>
                                    <li class="p-2 d-flex flex-column" @click="toggle('Category 3')">
                                        <span class="fw-semibold">Category 3</span>
                                        <span class="text-secondary opacity-75 fw-semibold" style="font-size:12px;"> created 10 hours ago</span>
                                    </li>
                                </ul>
                                
                            </TabPanel>
                            <TabPanel value="1">
                                <ul class="list-unstyled m-0 p-0 category-list">
                                    <li class="p-2 d-flex flex-column" @click="toggleMyCat('Category 4')">
                                        <span class="fw-semibold">Category 4</span>
                                        <span class="text-secondary opacity-75 fw-semibold" style="font-size:12px;"> Added to my categories 6 hours ago</span>
                                    </li>
                                    <li class="p-2 d-flex flex-column" @click="toggleMyCat('Category 5')">  
                                        <span class="fw-semibold">Category 5</span>
                                        <span class="text-secondary opacity-75 fw-semibold" style="font-size:12px;"> Added to my categories 8 hours ago</span>
                                    </li>
                                    <li class="p-2 d-flex flex-column" @click="toggleMyCat('Category 6')">
                                        <span class="fw-semibold">Category 6</span>
                                        <span class="text-secondary opacity-75 fw-semibold" style="font-size:12px;"> Added to my categories 10 hours ago</span>
                                    </li>
                                </ul>
                                
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </template>
            </Card>
            <Divider />
            <ProfileList />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Divider from 'primevue/divider';
import Card from 'primevue/card';
import Tabs from 'primevue/tabs';
import Tab from 'primevue/tab';
import TabList from 'primevue/tabs';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import ProfileList from '../../components/HomePage/ProfileList.vue';
import compeletedProfile from '../../components/HomePage/compeleteProfile.vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import {useRouter} from 'vue-router';
import profileDetails from '../../components/ProfilePage/profileDetails.vue';
import SortingMenu from '@/components/HomePage/SortingMenu.vue';
import NewPost from '@/components/HomePage/NewPost.vue';
import PostActivity from '@/components/HomePage/PostActivity.vue';
import NewExamCreate from '../../components/HomePage/NewExamCreate.vue';

const router = useRouter();
const showProfile = ref(false);
const showTimeLine = ref(true);
const visible = ref(false);
const title = ref('');
const catTitle = ref('');
const visibleCat = ref(false);
const selectedTab = ref(0)


const toggle = (header:string) => {
    visible.value = true;
    title.value = header;
}

const toggleMyCat = (header:string) => {
    visibleCat.value = true;
    catTitle.value = header;
}
</script>
<style scoped>
.profile-container {
  position: relative;
  width: 100%;
  margin: auto;
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
</style>