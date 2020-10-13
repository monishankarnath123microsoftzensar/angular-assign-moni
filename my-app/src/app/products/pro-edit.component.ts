import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

function ratingRange(c:AbstractControl):{[key:string]:boolean}|null{
  if(c.value !== null && (isNaN(c.value) || c.value<1 || c.value >5)){
    return {'range':true}
  }
  return null;
}
@Component({
  selector: 'app-pro-edit',
  templateUrl: './pro-edit.component.html',
  styleUrls: ['./pro-edit.component.css']
})
export class ProEditComponent implements OnInit {
pageTitle:string="Edit product"
errorMessage:string
productForm:FormGroup
product:IProduct
addRec:number
sub :Subscription
  constructor(private fb:FormBuilder,
    private _productServive:ProductService, 
    private _router:Router,
    private  _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.productForm = this.fb.group({
      productId:['0'],
      productName:['',[Validators.required,Validators.maxLength(15)]],
      productCode:['',Validators.required],
      releaseDate:['',Validators.pattern("(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}")],
      description:[''],
      price:['',[Validators.required,Validators.minLength(1)]],
      starRating:['',ratingRange],
      imageUrl:['']
    })
    this.sub = this._activatedRoute.paramMap.subscribe((params)=>{
      const id= +params.get('id')
      this.addRec=id
      if(id!=0)
      {
        this.getProduct(id)
      }
    })
  }
  save():void{
    if(this.productForm.valid){
      if(this.productForm.dirty){
        const p = {...this.product, ...this.productForm.value}
        if(p===0){
          this._productServive.createProduct(p).subscribe({
            next:()=>this.onSaveComplete(),
            error:(err)=>this.errorMessage = <any>err
          })
        }
        else{
          this._productServive.updateProduct(p).subscribe({
            next:()=>this.onSaveComplete(),
            error:(err)=>this.errorMessage = <any>err
          })
        }
      }
    }
    
  }
  deleteProduct():void{
    if(confirm(`Want to delete!! ${this.product.productName}`)){
      this._productServive.deleteProduct(this.product.productId).subscribe({
        next:()=>this.onSaveComplete(),
            error:(err)=>this.errorMessage = <any>err
      })
    }
  }
  onSaveComplete(){
    alert('data saved successfully!!')
    this.productForm.reset()
    this._router.navigate(['/products'])
  }

  getProduct(id:number){
    if(id){
      this._productServive.getProductById(id).subscribe({
        next:(product:IProduct)=>this.displayProduct(product),
        error:(err)=>this.errorMessage = <any>err
      })
    }
  }
displayProduct(product:IProduct){
  if(this.productForm){
    this.productForm.reset()
  }
  this.product = product
  if(this.product.productId===0){
    this.pageTitle='Add Product:'
  }else{
    this.pageTitle=`Edit Product: ${this.product.productName}`
  }
  this.productForm.setValue({
    productId:this.product.productId,
    productName : this.product.productName,
    productCode:this.product.productCode,
    releaseDate:this.product.releaseDate,
    description:this.product.description,
    price:this.product.price,
    starRating:this.product.starRating,
    imageUrl:this.product.imageUrl
  })
}
}
