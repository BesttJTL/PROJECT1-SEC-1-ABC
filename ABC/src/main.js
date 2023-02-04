

import './assets/main.css'
/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPause, faPlay, faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */

library.add(faPlay)
library.add(faPause)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

