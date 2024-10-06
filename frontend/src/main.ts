import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component('PMenubar', Menubar);
app.component('PMenubar', Menubar);

app.mount('#app');
