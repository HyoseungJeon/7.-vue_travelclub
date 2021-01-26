import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueSession from 'vue-session'
import VueRouter from 'vue-router'
import router from './router'

var Sessionoptions = {
  persist: true
}

Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(VueSession,Sessionoptions)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
