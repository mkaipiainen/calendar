import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import { createAuth0 } from '@auth0/auth0-vue';
import DialogServiceApi, { DialogService } from '@/services/dialog.service';
import DialogWrapper from '@/components/dialog/dialog-wrapper.component.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component('DialogWrapper', DialogWrapper);
app.provide(DialogService, DialogServiceApi);
app.use(
  createAuth0({
    domain: 'dev-ev7m3p4bucka4la6.us.auth0.com',
    clientId: 'lqTQ2LfvM5yyicwSy5mCq6nPiVBWSPM7',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  }),
);

app.mount('#app');
