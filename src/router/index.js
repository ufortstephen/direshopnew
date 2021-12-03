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
    {
        path: '/enagic',
        name: 'Enagic',

        component: function() {
            return import ('@/SubSites/Enagic/Home.vue')
        }
    },
    {
        path: '/products',
        name: 'Enagic Products',

        component: function() {
            return import ('@/SubSites/Enagic/EnagicProducts.vue')
        }
    },
    {
        path: '/:id',
        name: 'Enagic Products',

        component: function() {
            return import ('@/SubSites/Enagic/EnagicProduct.vue')
        }
    },
    {
        path: '/benefits',
        name: 'Atomic Benefits',

        component: function() {
            return import ('@/SubSites/Benefits/Home.vue')
        }
    },
    {
        path: '/benefits/application',
        name: 'Atomic Benefits',

        component: function() {
            return import ('@/SubSites/Benefits/Application.vue')
        }
    },
]


const router = new VueRouter({
    mode: 'history',
    routes,


    scrollBehavior() {
        return { x: 0, y: 0 }
    }

})

export default router