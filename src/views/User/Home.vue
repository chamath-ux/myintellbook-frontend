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
               <PostActivity />
                <PostActivity />
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
                        <Tabs value="0" class="w-100">
                            <TabList>
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
        <DetailsOfCat :visible="visible" @update:visible="visible = false" :title="title" />
        <DetailsOfMyCat :visible="visibleCat" @update:visible="visibleCat = false" :title="catTitle" @showTestFilter="showTestFilter"/>
        </div>
        
    <!-- </div> -->
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useUserStore } from '@/stores/User/userStore';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import ProfileDetails from '@/components/HomePage/ProfileDetails.vue';
import SortingMenu from '@/components/HomePage/SortingMenu.vue';
import QuestionGroups from '@/components/HomePage/QuestionGroups.vue';
import Divider from 'primevue/divider';
import ProfileList from '@/components/HomePage/ProfileList.vue';
import ProgressBar from 'primevue/progressbar';
import compeletedProfile from '@/components/HomePage/compeleteProfile.vue';
import NewPost from '@/components/HomePage/NewPost.vue';
import PostActivity from '@/components/HomePage/PostActivity.vue';
import DetailsOfCat from '@/components/HomePage/DetailsOfCat.vue';
import DetailsOfMyCat from '@/components/HomePage/DetailsOfMyCat.vue';

import Dialog from 'primevue/dialog';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Checkbox from 'primevue/checkbox';

const userstore = useUserStore();
const visible = ref(false);
const title = ref('');
const catTitle = ref('');
const visibleCat = ref(false);

const toggle = (header:String) => {
    visible.value = true;
    title.value = header;
}

const toggleMyCat = (header:String) => {
    visibleCat.value = true;
    catTitle.value = header;
}




</script>
<style scoped>
.category-list{
    cursor: pointer;
}
</style>
