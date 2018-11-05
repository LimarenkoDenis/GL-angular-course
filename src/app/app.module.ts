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
    // FormsModule
    // CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
