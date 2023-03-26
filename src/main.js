import { createApp } from 'vue'
import { ToastPlugin } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBagShopping, faArrowRight, faArrowLeft, faEye, faCartShopping, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faBagShopping, faArrowRight, faArrowLeft, faEye, faCartShopping, faMagnifyingGlass, faTrash)

createApp(App).use(router).use(ToastPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
