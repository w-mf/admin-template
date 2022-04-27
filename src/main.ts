import { createApp } from 'vue';
import App from './App.vue';
import router from '~/routers';
import store from '~/stores';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(store);
appInstance.mount('#app');
