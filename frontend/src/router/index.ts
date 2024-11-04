import { createRouter, createWebHistory } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
import { watch } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'plantminder',
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: import('@/views/calendar/calendar.view.vue'),
    },
    {
      path: '/plantminder',
      name: 'plantminder',
      component: import('@/views/plantminder/plantminder.view.vue'),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading.value) {
    await new Promise<void>((resolve) => {
      const unwatch = watch(isLoading, (newValue) => {
        if (!newValue) {
          unwatch();
          resolve();
        }
      });
    });
  }

  if (!isAuthenticated.value) {
    await loginWithRedirect({ appState: { targetUrl: to.fullPath } });
    return false; // Cancel the navigation
  }

  return true; // Proceed with the navigation
});

export default router;
