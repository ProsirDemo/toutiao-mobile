import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载Vant核心组件
import Vant from 'vant'

// 加载Vant全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 注册使用Vant组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
