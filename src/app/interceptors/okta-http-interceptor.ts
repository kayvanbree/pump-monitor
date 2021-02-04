import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AuthenticationStateModel} from '../store/models/authentication-state.model';

/**
 * This interceptor adds the bearer token to all our HttpClient requests
 */
@Injectable()
export class OktaHttpInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'OPTIONS') {
      const state = this.store.selectSnapshot<AuthenticationStateModel>(stateModel => stateModel.authentication);
      const token = state.accessToken;
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
