import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
const ContactUs = () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import(/* webpackChunkName: "about" */ '../views/Testimonials.vue'),
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
];

const router = new VueRouter({
  routes,
});

export default router;
