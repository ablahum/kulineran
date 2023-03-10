import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBagShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBagShopping, faArrowRight)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
