import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendar',
  },
  {
    path: 'calendar',
    loadComponent: () => {
      return import('@src/app/calendar/calendar.component').then(
        m => m.CalendarComponent
      );
    },
  },
];
