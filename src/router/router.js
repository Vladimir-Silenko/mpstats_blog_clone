import { createRouter, createWebHistory } from 'vue-router'
import FullPost from '@/pages/FullPost.vue'
import MainPage from '@/pages/MainPage.vue'
import searchResult from '@/pages/searchResult.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
        props: (route) => ({ searchValue: route.query.search || '' }),
    },
    { path: '/full/:id', component: FullPost },
    { path: '/results', component: searchResult },
]
const router = createRouter({ routes, history: createWebHistory() })

export default router
