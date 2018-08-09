import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
// Vue.use(ElementUI)
Vue.use(MintUI)
Vue.prototype.$http=axios
Vue.config.productionTip = false

var http=axios.create({
    baseURL:'http://laravel.test/api/',
    headers:{
      'Authorization':'Bearer '+localStorage.getItem('auth_token')
    }
})
Vue.prototype.$http=http;
router.beforeEach((to, from, next) => {
      if (to.meta.auth&&!localStorage.getItem('auth_token')){
        next({path:'/login'})
      }
      next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
