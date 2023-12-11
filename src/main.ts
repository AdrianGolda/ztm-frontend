import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { RouterView } from 'vue-router'
// @ts-ignore
import VueGoodTablePlugin from 'vue-good-table-next';
import { VueQueryPlugin } from "vue-query";

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app = createApp(App)
app.use(VueQueryPlugin);
app.use(VueGoodTablePlugin);
app.use(createPinia())
app.use(router)

app.mount('#app')
