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
import 'primeicons/primeicons.css';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
// import Echo from "laravel-echo";
// import Pusher from "pusher-js";

// declare global {
//   interface Window {
//     Echo: any;
//     Pusher: any;
//   }
// }


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

//  window.Pusher = Pusher;

//  window.Echo = new Echo({
//     broadcaster: "reverb",
//     key: import.meta.env.VITE_REVERB_APP_KEY,
//     wsHost: import.meta.env.VITE_REVERB_HOST,
//     wsPort: import.meta.env.VITE_REVERB_PORT,
//     forceTLS: false,
//     enabledTransports: ["ws"],
// });

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.directive('tooltip', Tooltip);
app.use(ToastService);

app.mount('#app')
