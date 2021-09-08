import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_NAME, authReducer } from './auth-reducer';

@NgModule({
  declarations: [],
  imports: [
	  CommonModule,
	  StoreModule.forFeature(AUTH_FEATURE_NAME, authReducer)
  ],
})
export class AuthStoreModule {}
