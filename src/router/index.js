import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import('@/page/home/index.vue')
        },
        {
            path: "/detail",
            name: "detail",
            component: () => import('@/page/detail/index.vue')
        },
    ]
})

export default router