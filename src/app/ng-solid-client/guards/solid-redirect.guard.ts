import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SolidService} from '../services/solid.service';

@Injectable({
  providedIn: 'root'
})
export class SolidRedirectGuard implements CanActivate {
  constructor(private solid: SolidService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.solid.handleRedirect();
    return true;
  }
}
