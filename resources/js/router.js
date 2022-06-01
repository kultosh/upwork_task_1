import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Product from './pages/Product.vue';
import Login from './pages/Login.vue';
import Profile from './pages/Profile.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/product',
            name: 'product',
            component: Product
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
});

export default router;