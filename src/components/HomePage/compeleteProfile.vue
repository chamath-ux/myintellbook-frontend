<template>
    <Card>
        <template #title>
            <div class="d-flex justify-content-between align-items-center">
                <span style="font-size:18px;font-weight:600">Complete Your Profile</span>
                <i class="pi pi-info text-white bg-dark rounded-circle p-1" style="font-size:8px;" @click="showPopover"/>
                <Popover ref="op" appendTo="self" :pt="{
                    root:'me-4'
                }">
                    
                        <div class="text-secondary" style="font-size:12px;">
                            Complete your profile to get the most out of MyIntellBook. It helps you connect with others and showcase your skills.
                        </div>
                 
                </Popover>
                </div>
        </template>
        <template #content>
            <ProgressBar :value="50" class="mb-4 mt-3"></ProgressBar>
            <ProfileComplete description="General Information" :completedquantity="5" :totalSteps="6" link="/profileEdit/generalInfo" :completed="true"/>
            <ProfileComplete description="Work Experience" :completedquantity="1" :totalSteps="3" link="/profileEdit/workExperience" />
             <ProfileComplete description="Education Information" :completedquantity="1" :totalSteps="3" link="/profileEdit/educationInfo" />
              <ProfileComplete description="Skills Information" :completedquantity="1" :totalSteps="3" link="/profileEdit/skillsInfo" />
            <ProfileComplete description="Profile Photo" :completedquantity="1" :totalSteps="1" link="/profileEdit/addProfileImage" />
            <ProfileComplete description="Cover Photo" :completedquantity="1" :totalSteps="1" :completed="true" link="/profileEdit/coverPhoto"/>
        </template>
    </Card>
</template>
<script lang="ts" setup>
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
import ProfileComplete from './ProfileComplete.vue';
import Popover from 'primevue/popover';
import { ref } from 'vue';
const op = ref(null);
const showPopover = () => {
    op.value.toggle(event);
};
</script>