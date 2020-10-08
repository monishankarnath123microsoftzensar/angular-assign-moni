import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle:string = 'Product Detail'
  product:IProduct
  errorMsg:string
  constructor(private _productService : ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
    let id = +this._activatedRoute.snapshot.paramMap.get('id')

    this._productService.getProductById(id).subscribe({
      next:data=>this.product=data,
      error:err=>this.errorMsg=<any>err
     })
  }
  onBack():void{
    this._router.navigate(['/products'])
  }

}
