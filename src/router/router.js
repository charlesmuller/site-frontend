import { createRouter, createWebHistory } from 'vue-router';
import HomeContent from '@/components/HomeContent.vue';
import AboutContent from '@/components/AboutContent.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeContent },
    { path: '/about', name: 'About', component: AboutContent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
