import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './plugins/i18n'
import { useThemeStore } from './stores/theme'

import App from './App.vue'

import './style.css'
import '@/assets/css/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.mount('#app')

const themeStore = useThemeStore();
themeStore.initTheme();