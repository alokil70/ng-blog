import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { getAccessToken } from '../auth.selectors';
import { first, tap } from 'rxjs/operators';
import { flatMap } from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store$: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    this.store$.pipe(
      select(getAccessToken),
      tap(i => console.log('iiiiiiiiiiiiii', i)),
      first(),
      flatMap(token => {
        const req = token ? request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + token
          }
        }) : request;

        console.log('interceptor auth : ', req);
        return next.handle(req);
      })
    );
  }
}
