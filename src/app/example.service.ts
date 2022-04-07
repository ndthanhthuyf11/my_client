import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from './interfaces/oproduct';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  url: string = "http://localhost:3000/products"
  constructor(private _http: HttpClient) { }

  //get products
  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse){
    return throwError(() => {new Error(error.message)});
  }
}
