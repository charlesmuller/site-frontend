import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import AboutContent from '@/components/AboutContent.vue';
import ThingsAboutMe from '@/components/ThingsAboutMe.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import MyBlog from '@/components/MyBlog.vue';

const routes = [
    { path: '/', name: 'Main', component: MainContent },
    { path: '/about', name: 'About', component: AboutContent },
    { path: '/things-about-me', name: 'ThingsAboutMe', component: ThingsAboutMe },
    { path: '/work-history', name: 'WorkHistory', component: WorkHistory },
    { path: '/my-blog', name: 'MyBlog', component: MyBlog },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
