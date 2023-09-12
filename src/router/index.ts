import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
