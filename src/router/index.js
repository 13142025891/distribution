import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import homeLogin from '@/components/logina'

Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'login',
            component: homeLogin
        },
        {
            path: '/register',
            name: 'register',
            component: register,

        }

    ]
})