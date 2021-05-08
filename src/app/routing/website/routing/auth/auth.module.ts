import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AuthPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: AuthPageComponent
      }
    ])
  ]
})
export class AuthModule { }
