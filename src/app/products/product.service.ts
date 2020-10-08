import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { catchError,map,tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:IProduct[]
  //private productUrl:string = 'assets/data/products/products.json'
  private productUrl:string = 'https://localhost:44345/api/productapi'
  

  constructor(private _httpClient:HttpClient) { }
  // getProducts():IProduct[]{
  //   return this.products;
  // }
  
  getProducts():Observable<IProduct[]>{
    //console.log(this._httpClient.get<IProduct[]>(this.productUrl).toPromise())
    return this._httpClient.get<IProduct[]>(this.productUrl).pipe(
tap((data)=>console.log(`All products:${JSON.stringify(data)}`)),
catchError(this.handleError)
    )
  }
  getProductById(id:number):Observable<IProduct>{
    return this.getProducts().pipe(
      map((product:IProduct[])=>product.find(p=>p.productId===id)),
      catchError(this.handleError)
    )
  }
  handleError(err){
    let errorMsg=''
    if(err.error instanceof Error){
      errorMsg = `An error occured : ${err.error.message}`;
    }
    else{
      errorMsg = `Server returned code: ${err.status} error message is : ${err.message}`
    }
    console.log(errorMsg)
    return throwError
  }
}
