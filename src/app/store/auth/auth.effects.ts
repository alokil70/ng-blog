import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginFailed, loginSuccess } from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        this.authService
          .login({ email: action.email, password: action.password })
          .pipe(
            map((authData) => loginSuccess({ authData })),
            catchError(err => of(loginFailed({
              serverError: err.error.message
            })))
          )
      )
    )
  );


  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
