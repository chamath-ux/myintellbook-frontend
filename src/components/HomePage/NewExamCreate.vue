<template>
        <Panel toggleable :pt="{root:'w-100'}" class="w-100">
            <template #header>
                <div class="d-flex align-items-center justify-content-between gap-2">
                    
                    <span class="font-bold" style="font-size:12px;">Create New Exam</span>
                    
                </div>
            </template>
            <template #icons>
                    <!-- <i class="pi pi-question-circle pt-2" v-tooltip="'you can create a new exam from here'" ></i> -->
            </template>
                <div class="row">
                     <Select v-model="selectedCity" :options="categories" optionLabel="name" placeholder="Select a Category" class="mb-2" style="font-size:12px;"/>
                    <Select v-model="selectedSubCategory" :options="cities" optionLabel="name" placeholder="Select a sub Category" class="mb-2" style="font-size:12px;"/>
                    <Select v-model="selectedSubCategory" :options="cities" optionLabel="name" placeholder="Select a Exam Level" style="font-size:12px;"/>
                    <!-- <label class="mt-4 mb-2">Select a Exam Level
                        <i class="pi pi-question-circle mx-2" style="font-size:12px;" v-tooltip="'you can choose the level of the exam , mixed will be for the easy and intermediate, expert combination'"></i>
                    </label> 
                    <RadioButtonGroup name="ingredient" class="row">
                        <div class="d-flex gap-4">
                            <RadioButton inputId="Easy" value="Easy" />
                            <label for="Easy">Easy</label>
                        </div>
                        <div class="d-flex gap-4">
                            <RadioButton inputId="Intermediate" value="Intermediate" />
                            <label for="Intermediate">Intermediate</label>
                        </div>
                        <div class="d-flex gap-4">
                            <RadioButton inputId="Expert" value="Expert" />
                            <label for="Expert">Expert</label>
                        </div>
                            <div class="d-flex gap-4">
                            <RadioButton inputId="Mixed" value="Mixed" />
                            <label for="Mixed">Mixed</label>
                        </div>
                    </RadioButtonGroup> -->
                    
                    <label for="NoOfQuestions" class="mt-4" style="font-size:12px;">
                        Number of Questions
                        <i class="pi pi-question-circle mx-2" style="font-size:12px;" v-tooltip="'You can add minimum 10 questions for the exam'"></i>
                    </label>
                    <InputText type="number" placeholder="for exam minimum 10 questions" class="w-100 " id="NoOfQuestions" style="font-size:12px;" />
                    <Button label="Create Exam" severity="secondary" class="w-100 mt-3" size="small"  autofocus />
                </div>
        </Panel>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Select from 'primevue/select';
import Panel from 'primevue/panel';

const categories = ref([
    { name: 'Category 1', code: 'C1' },
    { name: 'Category 2', code: 'C2' },
    { name: 'Category 3', code: 'C3' },
    { name: 'Category 4', code: 'C4' }
]);
const cities = ref([
    { name: 'City 1', code: 'C1' },
    { name: 'City 2', code: 'C2' },
    { name: 'City 3', code: 'C3' }
]);
const selectedCity = ref('Category 1');
const selectedSubCategory = ref(null);
</script>
