/*
 * @Author: Tmier
 * @Date: 2021-07-15 15:56:14
 * @LastEditTime: 2021-07-15 16:04:39
 * @Description: 
 * @LastModifiedBy: Tmier
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('./views/index.vue')
        }
    ]
})
