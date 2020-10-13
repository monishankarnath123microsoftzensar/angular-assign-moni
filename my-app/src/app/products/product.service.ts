import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  // getProductById(id:number):Observable<IProduct>{
  //   return this.getProducts().pipe(
  //     map((product:IProduct[])=>product.find(p=>p.productId===id)),
  //     catchError(this.handleError)
  //   )
  // }
  getProductById(id:number):Observable<IProduct>{
    if(id==0){
      
    }
    const url= `${this.productUrl}/${id}`
    return this._httpClient.get<IProduct>(url).pipe(
      catchError(this.handleError)
    )
  }
  updateProduct(product:IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    const url = `${this.productUrl}/${product}`
    return this._httpClient.put<IProduct>(url,product,{headers}).pipe(
      tap(()=>console.log(`Update products:${product.productId}`)),
      catchError(this.handleError)
         )
  }
  createProduct(product:IProduct):Observable<IProduct>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this._httpClient.put<IProduct>(this.productUrl,product,{headers}).pipe(
      tap((data)=>console.log(`Create products:${JSON.stringify(data)}`)),
      catchError(this.handleError)
         )
  }
  deleteProduct(id:number):Observable<{}>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    const url= `${this.productUrl}/${id}`
    return this._httpClient.delete<IProduct>(url,{headers}).pipe(
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
