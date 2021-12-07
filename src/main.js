import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Panel from 'primevue/panel';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Chip from 'primevue/chip';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';

import 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import 'primeflex/primeflex.css';
import 'primeflex/primeflex.scss';



const app = createApp(App)

app.use(PrimeVue, {ripple: true} );
app.use(router)

app.component('Menubar',Menubar)
app.component('Panel',Panel)
app.component('Card',Card)
app.component('Divider',Divider)
app.component('Chip',Chip)
app.component('Button',Button)
app.component('ProgressSpinner',ProgressSpinner)
app.component('Message',Message)

app.mount('#app')
