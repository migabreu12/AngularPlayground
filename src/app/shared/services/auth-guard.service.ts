import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const canActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>
{
  // This implementation deviates from the example code due to canActivate deprecation
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated().then((isAuthenticated) => {
    if(isAuthenticated) {
      return true;
    } else {
      router.navigate(["/"]);
      // To solve a ts code issue but this must be fixed or implemented a proper way. I'm guessing the navigate
      // is only done as part of this lesson and will be resolved by the end of the routing module.
      return false;
    }
  });
}

export const canActivateChildGuard: CanActivateChildFn = canActivateGuard;
