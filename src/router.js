import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
import Authorize from './views/Authorize'
import Chat from './views/Chat'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index,
            meta:{
                auth:false
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path:'/callback',
            name:'auth',
            component:Authorize
        },
        {
            path:'/chat',
            name:'chat',
            component:Chat
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/personal',
            name:'/personal',
            component:()=>import(/* webpackChunkName:"personal" */'./views/Person.vue'),
            meta:{
                auth:true
            }
        }
    ]
})
