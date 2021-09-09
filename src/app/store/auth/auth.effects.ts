import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess } from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.authService
          .login({
            email: action.email,
            password: action.password,
          })
          .pipe(map((successData) => loginSuccess(successData))),
      ),
    ),
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
