import { createReducer } from '@ngrx/store';

export const AUTH_FEATURE_NAME = 'auth';

export interface authData {
	accessToken: string;
}

export interface authState {
	loaded: boolean;
	loading: boolean;
	serverError: string;
	authData?: authData;
}

const initialState: authState = {
	loaded: true,
	loading: false,
	serverError: 'sssssss'
};

export const authReducer = createReducer(initialState);
