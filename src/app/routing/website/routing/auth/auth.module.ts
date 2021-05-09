import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RouterModule } from '@angular/router';
import { LoginBlockModule } from '../../../../view/login-block/login-block.module';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    LoginBlockModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: AuthPageComponent,
      },
    ]),
  ],
})
export class AuthModule {}
