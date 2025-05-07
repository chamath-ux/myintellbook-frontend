import './assets/main.css'
// main.js or main.ts
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: false
        }
    }
 });

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
