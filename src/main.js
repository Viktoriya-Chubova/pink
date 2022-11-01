import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import components from '@/components/UI'

import './assets/layouts/index.scss'


const app = createApp(App)

components.forEach(component => {
   app.component(component.name, component)
});

app.use(router).mount('#app')
