import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] login', props<{ email: string; password: string }>());

export const loginSuccess = createAction('[Auth] loginSuccess', props<{ accessToken: string }>());

export const loginFailed = createAction('[Auth] loginFailed', props<{ serverError: string }>());
