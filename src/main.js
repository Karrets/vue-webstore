import { createApp } from 'vue';

import App from './App.vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

createApp(App).use(Quasar, quasarUserOptions).mount('#app');
