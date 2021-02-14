import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProductModel } from './product.model';
import { catchError, map, tap } from 'rxjs/operators';

const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productUrl)
      .pipe(
        tap(_ => console.log('fetched heroes')),
        catchError(this.handleError<ProductModel[]>('getProducts', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getProduct(id: number): Observable<ProductModel> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<ProductModel>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<ProductModel>(`getProduct id=${id}`))
    );
  }

  addProduct(product: ProductModel): Observable<ProductModel> {
 
    return this.http.post<ProductModel>(this.productUrl, product, options).pipe(
      tap(_ => console.log(`push product id=${product.guid}`)),
      catchError(this.handleError)
    );
  }

  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(this.productUrl, product, options).pipe(
      tap(_ => console.log(`push product id=${product.guid}`)),
      catchError(this.handleError)
    );
  }

  deleteProduct(guid: string | ProductModel): Observable<ProductModel> {
    const id = typeof guid === 'string' ? guid : guid.guid;
    const url = `${this.productUrl}/${guid}`;
 
    return this.http.delete<ProductModel>(url, options).pipe(
      catchError(this.handleError)
    );
  }

  //#region private

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

//#endregion
}
