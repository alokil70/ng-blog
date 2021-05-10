import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WebsiteModule } from './routing/website/website.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

/*import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';*/

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WebsiteModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    /*EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),*/
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
