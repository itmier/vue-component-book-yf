/*
 * @Author: Tmier
 * @Date: 2021-07-15 15:56:14
 * @LastEditTime: 2021-07-15 16:13:03
 * @Description: 
 * @LastModifiedBy: Tmier
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
