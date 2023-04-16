import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'


import PrimeVue from 'primevue/config';

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";
import Button from 'primevue/button'

const app =createApp(App);

app.use(PrimeVue);
app.component('pv-button',Button)
createApp(App).mount('#app')
