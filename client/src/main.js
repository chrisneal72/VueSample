// import './index.scss';
import { createApp } from 'vue'
import App from './components/App.vue'
import Footer from './components/Nav/SiteFooter.vue';
import Nav from './components/Nav/MainNav.vue';
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)

app
.component("main-nav", Nav)
.component("main-footer", Footer);


app.mount('#app')