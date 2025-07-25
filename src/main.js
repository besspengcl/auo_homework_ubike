import { createApp } from 'vue';
import './style.css';

import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
