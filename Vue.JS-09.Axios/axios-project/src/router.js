import Vue from 'vue'
import Router from 'vue-router'

import Main from './components/Main.vue'
import About from './components/About.vue'
import Response from './components/Response.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/response',
        name: 'response',
        component: Response
    }
]

const router = new Router({
    routes
})

export default router