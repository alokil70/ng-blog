import { createAction, props } from '@ngrx/store';
import { AuthData } from './auth.reducer';

export enum ELoginActions {
  Login = '[Auth] login',
  LoginSuccess = '[Auth] loginSuccess',
  LoginFailed = '[Auth] loginFailed'
}

export const login = createAction(ELoginActions.Login, props<{ email: string; password: string }>());

export const loginSuccess = createAction(ELoginActions.LoginSuccess, props<{ authData: AuthData }>());

export const loginFailed = createAction(ELoginActions.LoginFailed, props<{ serverError: string }>());
