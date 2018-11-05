import { MyauthGuard } from './shared/services/myauth.guard';
import { ConcactUsComponent } from './concact-us/concact-us.component';
import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const routes: Route[] = [
  // {path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: '', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent, data: { title: 'titl' } },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'contact-us', component: ConcactUsComponent, canActivate: [MyauthGuard] },
  { path: '**', component: ProductsComponent }
];


// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class AppRouterModule { }
