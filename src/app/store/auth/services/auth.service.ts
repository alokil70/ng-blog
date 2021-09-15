import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../auth.reducer';
import { select, Store } from '@ngrx/store';
import { getAuthData } from '../auth.selectors';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAuth$ = this.store$.pipe(
    select(getAuthData),
    filter(authData => authData !== undefined),
    map(authData => !!authData)
  );

  constructor(private httpClient: HttpClient, private store$: Store) {}

  login(body: { email: string; password: string }): Observable<AuthData> {
    return this.httpClient.post<{ accessToken: string }>(
      'http://127.0.0.1:9090/api/auth/login', body);
  }
}
