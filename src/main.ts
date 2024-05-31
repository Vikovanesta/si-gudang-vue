import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { IonicVue } from '@ionic/vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)
app.use(CKEditor)
app.use(IonicVue)
app.use(router)
app.mount('#app')
