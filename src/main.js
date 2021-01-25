import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueSession from 'vue-session'

var Sessionoptions = {
  persist: true
}

Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(VueSession,Sessionoptions)

new Vue({
  render: h => h(App),
}).$mount('#app')
