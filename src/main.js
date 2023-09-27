import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, Dialog } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions, {
    plugins: {Dialog}
}).mount('#app')
