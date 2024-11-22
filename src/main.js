import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '../public/base.css'
import router from './router/router';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
