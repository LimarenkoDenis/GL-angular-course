import { PageEvent } from '@angular/material/paginator';
import { IProduct } from './../interfaces/product.interface';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private _http: HttpClient,
    @Inject('api') private _api: string,
  ) { }

  public getProducts(data: PageEvent): Observable<IProduct[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bareer toiken',
      'Authorization1': 'Bareer toiken',

    });


    const params: HttpParams = new HttpParams({
      fromObject: {
        _page: String(data.pageIndex),
        _limit: String(data.pageSize)
      }
    });
    return this._http.get<IProduct[]>(`${environment.api}/products`, { headers, params });
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    return this._http.post<IProduct>(`${environment.api}/products`, product);
  }

  public getProduct(id: string): Observable<any> {
    return this._http.get<any>(`${environment.api}/products/${id}`);
  }

  public updateProduct(product: Partial<IProduct>, id: string): Observable<IProduct> {
    return this._http.post<IProduct>(`${environment.api}/products/${id}`, product);
  }

  public deleteProduct(id: string): Observable<IProduct> {
    return this._http.delete<IProduct>(`${environment.api}/products/${id}`);
  }
}
