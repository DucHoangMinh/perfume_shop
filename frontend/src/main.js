/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import {Notifications} from "@kyvg/vue3-notification";
// Components
import App from './App.vue'

import { createApp } from 'vue'
import router from "@/router";
import store from "@/store";
import './index.css'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(Notifications)
app.use(store)
app.mount('#app')
