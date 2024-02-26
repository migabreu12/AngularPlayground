import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CanComponentDeactivate } from "../interfaces/can-component-deactivate.interface";
import { Observable } from "rxjs";

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
(
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean | UrlTree> | 
   Promise<boolean | UrlTree> | 
   boolean | 
   UrlTree => {
  return component.canDeactivate();
}