import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: import('@/views/landing/LandingView.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: import('@/views/calendar/CalendarView.vue'),
    },
    {
      path: '/plantminder',
      name: 'plantminder',
      component: import('@/views/plantminder/PlantMinder.vue'),
    },
  ],
});

export default router;
