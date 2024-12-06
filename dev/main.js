// eslint-disable-next-line import/no-extraneous-dependencies
import { createApp } from 'vue';
import App from './App.vue';
// import VueGoodTable from '../src/vue-good-table.esm';
// import '../dist/vue-good-table.css';
import VueGoodTable from '../src';

// Create Vue app instance
const app = createApp(App);

// Use VueGoodTable plugin
app.use(VueGoodTable);

// Mount the app
app.mount('#app');
