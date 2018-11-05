import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from './services/cart.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CartComponent, children: [
          { path: '', component: FeedbackComponent },
          { path: 'rating', component: RatingComponent },
        ]
      },
    ]),
  ],
  declarations: [CartComponent, FeedbackComponent, RatingComponent],
  exports: [CartComponent],
  // providers: [CartService]
})
export class CartModule { }
