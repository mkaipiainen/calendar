import { Routes } from '@angular/router';
import { IsAuthenticatedAuthGuard } from '@src/app/shared/auth-guards/is-authenticated.auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar',
  },
  {
    path: 'calendar',
    loadComponent: async () => {
      const m = await import('@src/app/calendar/calendar.component');
      return m.CalendarComponent;
    },
    canActivate: [IsAuthenticatedAuthGuard()],
  },
];
