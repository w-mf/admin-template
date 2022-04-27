import { createApp } from 'vue';
import router from '~/routers';
import store from '~/stores';
import App from './App.vue';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(store);
appInstance.mount('#app');
