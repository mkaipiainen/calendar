import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { take } from 'rxjs';
import { inject } from '@angular/core';

export function IsAuthenticatedAuthGuard(): CanActivateFn {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return new Promise((resolve, reject) => {
      authService.isAuthenticated$.pipe(take(1)).subscribe(isAuthenticated => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
          resolve(true);
        } else {
          authService.loginWithRedirect({}).subscribe();
          resolve(false);
        }
      });
    });
  };
}
