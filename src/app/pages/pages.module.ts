import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminGuestGuard } from '../guards/admin-guest.guard';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { StoreModule } from '@ngrx/store';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'admin/auth',
        loadChildren: () =>
          import('./auth/auth-page.module').then((module) => module.AuthPageModule),
        canActivate: [AdminGuestGuard],
        canLoad: [AdminGuestGuard],
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule),
        canActivate: [AdminAuthGuard],
        canLoad: [AdminAuthGuard],
      },
      {
        path: '**',
        redirectTo: 'not-found',
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./not-found/not-found.module').then((module) => module.NotFoundModule),
      },
    ]),
  ],
  providers: [AdminGuestGuard, AdminAuthGuard],
})
export class PagesModule {}
