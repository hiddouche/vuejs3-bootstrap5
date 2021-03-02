import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Arquivo do Twitter Bootstrap 5 (JS e SCSS)
import 'bootstrap'
import './assets/scss/bootstrap.scss'

createApp(App).use(router).mount('#app')
