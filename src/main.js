import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBagShopping, faArrowRight, faEye, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faBagShopping, faArrowRight, faEye, faCartShopping, faMagnifyingGlass)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
