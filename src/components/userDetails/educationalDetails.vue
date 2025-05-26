<template>
    <Panel header="Education Details" toggleable>
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Education Type" class="w-100 mt-3 mb-3" />
        <InputText  v-model="userEmail" placeholder="Name of Institue" size="normal" id="userEmail" class="w-50 mt-3 "/>
            <InputText  v-model="userEmail" placeholder="Degree" size="normal" id="userEmail" class="w-50 mt-3 "/>
            <h6 class="mt-3">Start Date</h6>
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Education Type" class="col-md-6 mt-3 mb-3" />
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Education Type" class="col-md-6 mt-3 mb-3" />
        <h6 class="mt-3">End Date</h6>
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Education Type" class="col-md-6 mt-3 mb-3" />
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Education Type" class="col-md-6 mt-3 mb-3" />
    </Panel>
</template>
<script lang="ts" setup>
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
</script>