import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',

        component: function() {
            return import ('../views/About.vue')
        }
    },
    {
        path: '/contact',
        name: 'Contact',

        component: function() {
            return import ('@/views/contactUs.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',

        component: function() {
            return import ('@/views/Login.vue')
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router