import './index.scss';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

export default (startupOptions) => {
  const { Vue } = startupOptions;

  /* ==== Icons =============================================================== */
  // const importIconWithName = name => () => import('./components/-Generic/icons').then(module => module.default[name]);

  // Vue.component('icon-instagram', importIconWithName('Instagram'));
  // Vue.component('icon-facebook', importIconWithName('Facebook'));
  // Vue.component('icon-fbSquare', importIconWithName('FacebookSquare'));
  // Vue.component('icon-arrow-small', importIconWithName('ArrowSmall'));
  // Vue.component('icon-twitter', importIconWithName('Twitter'));
  // Vue.component('icon-youtube', importIconWithName('Youtube'));
  // Vue.component('icon-destroy', importIconWithName('Destroy'));
  // Vue.component('icon-profile', importIconWithName('Profile'));
  // Vue.component('icon-receipt', importIconWithName('Receipt'));
  // Vue.component('icon-refresh', importIconWithName('Refresh'));
  // Vue.component('icon-alert', importIconWithName('Alert'));
  // Vue.component('icon-arrow', importIconWithName('Arrow'));
  // Vue.component('icon-audio', importIconWithName('Audio'));
  // Vue.component('icon-heart', importIconWithName('Heart'));
  // Vue.component('icon-check', importIconWithName('Check'));
  // Vue.component('icon-cloud', importIconWithName('Cloud'));
  // Vue.component('icon-plus', importIconWithName('Plus'));
  // Vue.component('icon-info', importIconWithName('Info'));
  // Vue.component('icon-shop', importIconWithName('Shop'));
  // Vue.component('icon-pic', importIconWithName('Pic'));
  // Vue.component('icon-copy', importIconWithName('Copy'));
  // Vue.component('icon-play', importIconWithName('Play'));


  /* ==== Foundation ========================================================= */
  const importFoundationWithName = name => () => import('./components/-Generic/Foundation').then(module => module.default[name]);

  Vue.component('foundation-fieldcontainer', importFoundationWithName('FieldContainer'));
  Vue.component('foundation-gridx', importFoundationWithName('GridX'));

  return Promise.resolve(startupOptions);
};