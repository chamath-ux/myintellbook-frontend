<template>
    <Inplace :pt="{
                    display: 'p-0'
                }">
        <template #display>  
            <span class="opacity-50" style="font-size:12px;"> {{visibility}}</span>
            <span class="fw-semibold mx-1" style="font-size:12px;">Change</span>
            
        </template>
        <template #content="{ closeCallback }">
            <div class="d-flex flex-column gap-2">
                Select Who to see ?
                <div class="d-flex flex-row align-items-center gap-2">
                    <RadioButton v-model="visibility" inputId="ingredient1" name="pizza" value="Public" size="small" @change="toggle"/>
                    <label for="ingredient1">Public</label>
                </div>
                <div class="d-flex flex-row align-items-center gap-2">
                    <RadioButton v-model="visibility" inputId="ingredient1" name="pizza" value="Only Me" size="small" @change="toggle"/>
                    <label for="ingredient1">Only Me</label>
                </div>
                <Button  label="close" severity="secondary" size="small" @click="closeCallback" class="p-1" style="width:100px"/>
            </div>
        </template>
    </Inplace>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import Inplace from 'primevue/inplace';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
const visibility = ref<string>('');
const emit = defineEmits(['visibilityChange']);
const selectedVisibility = ref<{ label: string; value: number } | undefined>(undefined)
const visibilityTypes = ref([
    { label: 'Public', value: 1 },
    { label: 'Only Me', value: 2 },
])

const toggle = () => {
    selectedVisibility.value = visibilityTypes.value.find((item) => item.label === visibility.value);
    emit('visibilityChange', [{label:visibility.value,value: selectedVisibility.value}]);
}
</script>