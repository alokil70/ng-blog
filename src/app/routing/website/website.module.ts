import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminGuestGuard} from './guards/admin-guest.guard';
import {AdminAuthGuard} from './guards/admin-auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routing/home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'admin/auth',
        loadChildren: () => import('./routing/auth/auth.module')
          .then(module => module.AuthModule),
        canActivate: [AdminGuestGuard],
        canLoad: [AdminGuestGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./routing/admin/admin.module')
          .then(module => module.AdminModule),
        canActivate: [AdminAuthGuard],
        canLoad: [AdminAuthGuard]
      },
      {
        path: '**',
        redirectTo: 'not-found'
      },
      {
        path: 'not-found',
        loadChildren: () => import('./routing/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      }
    ])
  ],
  providers: [AdminGuestGuard, AdminAuthGuard]
})
export class WebsiteModule { }
