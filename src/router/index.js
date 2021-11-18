import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'
import Shop from '../pages/Shop.vue'
import Auth from '../pages/Auth.vue'
import Cabinet from '../pages/Cabinet.vue'
import Cart from '../pages/Cart.vue'
import Registration from '../pages/Registration.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    },
    {
        path: '/cabinet',
        name: 'Cabinet',
        component: Cabinet
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router