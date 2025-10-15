import { createApp } from 'vue'
import '@/styles/styles.scss'
import App from './App.vue'

import router from '@/plugins/router'

import vuetify from '@/plugins/vuetify'

import i18n from '@/plugins/i18n'

import Vue3Toastify from 'vue3-toastify'
import options from '@/plugins/toastify'

import pinia from '@/plugins/pinia'

import '@fontsource/roboto'

const app = createApp(App)

app.config.performance = true

app.use(router).use(vuetify).use(i18n).use(Vue3Toastify, options).use(pinia).mount('#app')
