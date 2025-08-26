<template>
    <!-- <div class="mt-3 "> -->
        <div class="row flex-grow-1 overflow-auto  m-0 justify-content-center mb-3 gap-5">
            <div class="col-md-1"></div>
            <div class="col-md-2 mt-3 d-none d-md-block">
                <ProfileDetails />
            </div>
            <div class="col-md-7 mt-3">
          
                 <Card>
                    <template #title>
                        <div class="d-flex justify-content-between">
                            <div>{{'Your Scores'}}</div>
                            <div>{{'Your Total '+ scores.totalScore}}</div>
                        </div>
                    </template>
                    <template #content>
                        <div>
                            <Tabs value="0">
                                <TabList>
                                    <Tab value="0">Daily Questions</Tab>
                                    <Tab value="1">Profile Updates</Tab>
                                    <Tab value="2">Exams</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel value="0">
                                        
                                        <div v-for="question in scores.daily_questions" :key="question.id" class="d-flex flex-row justify-content-between mb-3">
                                            <div >{{ question.question_date }}</div>
                                            <div class="fw-bold">{{ question.question }}</div>
                                            <div class="fw-bold">{{ question.points }}</div>
                                            
                                        </div>
                                        <!-- <div class="w-100 text-end fw-bold">{{ 'Total Score: '+ scores.daily_questions[0].daily_total}}</div> -->
                                    </TabPanel>
                                    <TabPanel value="1">
                                 
                                        <div v-for="question in scores.profile_update" :key="question.id" class="d-flex flex-row justify-content-between mb-3">
                                            <div >{{ question.added_date }}</div>
                                            <div class="fw-bold">{{ question.name }}</div>
                                            <div class="fw-bold">{{ question.points }}</div>
                                        </div>
                                       
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <p class="m-0">
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                                            qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                                        </p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>

                        </div>
                    </template>
                </Card>

            </div>
        </div>
        
    <!-- </div> -->
</template>
<script setup lang="ts">
import { ref , computed, onMounted, onBeforeUnmount} from 'vue';
import ProfileDetails from '@/components/HomePage/ProfileDetails.vue';
import { useUserProfile} from '../../stores/User/userProfile';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import type {ScoreDetails}  from '@/types/ScoreDetails';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';


const userProfile = useUserProfile();
const scores = ref<Array<ScoreDetails>>([

]);

const getScores = async () => {
    // Fetch scores from the API or store
    // This is a placeholder function
    let result = await userProfile.getScores();
    console.log(result);
    scores.value = result.data;

};

onMounted(() => {
    getScores();
});
</script>
