import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SolidService } from '../services/solid.service';

@Injectable({
  providedIn: 'root'
})
export class SolidAuthenticationGuard implements CanActivate {
  constructor(private solid: SolidService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.solid.handleRedirect().then(() => {
        if (this.solid.isLoggedIn()) {
          resolve(true);
        } else {
          this.solid.login();
          resolve(false);
        }
      });
    });
  }
}
