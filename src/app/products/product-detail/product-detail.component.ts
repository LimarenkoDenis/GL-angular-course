import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productDetail$: Observable<any>;


  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this._route.data.subscribe((data) => {
      console.log(data);

    })

    this.productDetail$ = this._route.params.pipe(
      switchMap((params: any) => this._productService.getProduct(params['id']))
    );


    this._route.queryParams.subscribe((data) => {
      console.log(data);

    })
    // subscribe((params) => {
    //   console.log(params['id']);

    // })
  }

}
