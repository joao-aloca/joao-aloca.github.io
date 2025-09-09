import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/ServicesView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';
import LoginView from '@/views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/servicos', name: 'Serviços', component: ServicesView},
  { path: '/sobre', name: 'Sobre', component: AboutView},
  { path: '/contato', name: 'Contato', component: ContactView},
  { path: '/login', name: 'Login', component: LoginView}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
