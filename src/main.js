import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/main.css';
import routes from './routes';
import axios from 'axios';
import vSelect from 'vue-select';

Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
import './assets/dropdown_custom.css';
import './assets/bootstrap_custom.css';

Vue.prototype.$http = axios //global to access axios

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(vSelect);

const router = new VueRouter({mode: 'history',routes});

new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')
