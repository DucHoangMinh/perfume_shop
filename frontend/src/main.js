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

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.use(Notifications)
app.mount('#app')
