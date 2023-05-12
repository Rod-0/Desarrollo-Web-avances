import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import PrimeVue from 'primevue/config';


import "primevue/resources/themes/lara-light-indigo/theme.css";   //theme
import "primevue/resources/primevue.min.css";  //core
import "primeicons/primeicons.css";  //icons
import { i18n } from '../src/locales/i18n';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'; 
import Toolbar from 'primevue/toolbar';
import router from './router'


const app =createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);
app.component('pv-button',Button)
app.component('pv-inputText',InputText)
app.component('pv-card',Card)
app.component('pv-datatable',DataTable)
app.component('pv-column',Column)
app.component('pv-toolBar',Toolbar)

app.mount('#app')

