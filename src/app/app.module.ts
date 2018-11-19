import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { UiModule } from './ui/ui.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConcactUsComponent } from './concact-us/concact-us.component';
import {RouterModule} from '@angular/router';
import { routes } from './router.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './effects/products.effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    ConcactUsComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    BrowserAnimationsModule,
    ProductsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    // FormsModule
    // CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
