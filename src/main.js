import Vue from 'vue'
import App from './App'
/*import store from './store/index'*/
import router from './router'
import './common/css/reset.css'
import './filter'
import './common/css/style.scss'
import './globalFun'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*
new Vue({
  router,
  /!* store,*!/
  render: h => h(App),
}).$mount('#app')
*/
