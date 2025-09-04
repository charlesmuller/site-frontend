import { createRouter, createWebHistory } from 'vue-router';
import MainContent from '@/components/MainContent.vue';
import MyProjects from '@/components/MyProjects.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import MyBlog from '@/components/MyBlog.vue';

const routes = [
    { path: '/', name: 'Main', component: MainContent },
    { path: '/my-projects', name: 'MyProjects', component: MyProjects },
    { path: '/work-history', name: 'WorkHistory', component: WorkHistory },
    { path: '/my-blog', name: 'MyBlog', component: MyBlog },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
