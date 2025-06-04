<template>
    <!-- <div class="mt-3 "> -->
        <div class="row flex-grow-1 overflow-auto  m-0 justify-content-center mb-3">
            <div class="col-md-2 mt-3">
                <ProfileDetails />
            </div>
            <div class="col-md-7 mt-3">
               
                <SortingMenu />
                <QuestionGroups />
                <QuestionGroups />
                <QuestionGroups />
                 <QuestionGroups />
                <QuestionGroups />
                <QuestionGroups />
               
            </div>
            <div class="col-md-3 mt-3">
                
                <Card>
                    <template #title>Simple Card</template>
                    <template #content>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                            quas!
                        </p>
                    </template>
                </Card>
                <Divider />
                <ProfileList />
            </div>

        </div>
    <!-- </div> -->
</template>
<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useUserStore } from '@/stores/user/userStore';
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProfileDetails from '@/components/HomePage/ProfileDetails.vue';
import SortingMenu from '@/components/HomePage/SortingMenu.vue';
import QuestionGroups from '@/components/HomePage/QuestionGroups.vue';
import Divider from 'primevue/divider';
import ProfileList from '@/components/HomePage/ProfileList.vue';




const toggle = (event: Event) => {
    // menuProfile.value?.toggle(event);  
        }
const userstore = useUserStore();




</script>