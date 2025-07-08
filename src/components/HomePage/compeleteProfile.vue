<template>

    <ProgressBar :value="0" class="mb-4 mx-2"></ProgressBar>
    <ProfileComplete description="General Information" :completedquantity="generalInfo" :totalSteps="4" link="/profileEdit/generalInfo" :completed="true"/>
    <ProfileComplete description="Work Experience" :completedquantity="workExperiance" :totalSteps="5" link="/profileEdit/workExperience" />
    <ProfileComplete description="Education Information" :completedquantity="educationInfo" :totalSteps="3" link="/profileEdit/educationInfo" />
    <ProfileComplete description="Skills Information" :completedquantity="SkillsInfo" :totalSteps="1" link="/profileEdit/skillsInfo" />
    <ProfileComplete description="Profile Photo" :completedquantity="profileImage" :totalSteps="1" link="/profileEdit/addProfileImage" />
    <ProfileComplete description="Cover Photo" :completedquantity="coverImage" :totalSteps="1" :completed="true" link="/profileEdit/addCoverImage"/>

</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import ProfileComplete from './ProfileComplete.vue';
import Popover from 'primevue/popover';
import {useUserProfile} from '@/stores/User/userProfile';
import { ref, computed, onMounted } from 'vue';
const op = ref<InstanceType<typeof Popover> | null>(null);
const showPopover = (event:any) => {
        op.value?.toggle(event);
};
const userProfile = useUserProfile();
const profileCompleted = computed(()=> userProfile.getProfiileComplete);
const profileImage = ref<number>(0);
const coverImage = ref<number>(0);
const generalInfo = ref<number>(0);
const workExperiance = ref<number>(0);
const educationInfo = ref<number>(0);
const SkillsInfo = ref<number>(0);

const percentage = () =>
{
    // if(profileCompleted.value.coverImage == true)
    // {
    //     coverImage.value = 1;

    // }else if(profileCompleted.value.profileImage == true)
    // {
    //     profileImage.value = 1;
    // }else if(profileCompleted.value.workExperiance)
    // {
    //     workExperiance.value =1;
    // }else if(profileCompleted.value.education){
    //     educationInfo.value = 1
    // }else if(profileCompleted.value.skills){
    //     SkillsInfo.value =1;
    // }else if(
    //     profileCompleted.value.generalInfo.first_name||
    //     profileCompleted.value.generalInfo.gender||
    //     profileCompleted.value.generalInfo.birth_date
    // ){
    //     console.log(profileCompleted.value.generalInfo.first_name);
    //     generalInfo.value = generalInfo.value + 1;
    // }else if(profileCompleted.value.generalInfo.last_name)
    // {
    //     generalInfo.value += generalInfo.value + 1;
    // }
}

onMounted(()=>{
    percentage();
})
</script>