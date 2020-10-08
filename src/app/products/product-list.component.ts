import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
pageTitle = "Product List"
showTitle:string
showImg:boolean = false
_listFilter:string = ''
errorMessage:string

get listFilter():string{
  return this._listFilter;
}
set listFilter(value:string){
  this._listFilter=value;
  this.filterPro = this.listFilter ? this.performFilter(this.listFilter):
  this.products;
}
performFilter(filterBy:string):IProduct[] {
filterBy = filterBy.toLocaleLowerCase();
return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
}
filterPro:IProduct[]
//products:any[]=[]
products:IProduct[]
  constructor(private _productService : ProductService) { 
    //this.filterPro = this.products;
    
  }

  ngOnInit(): void {
   // this.products = this._productService.getProducts()
   //subscribing to obserable
   this._productService.getProducts().subscribe({
     next:data=>{this.products=data
      this.filterPro = this.products},
     error:err=>this.errorMessage=<any>err
    })
    //this.filterPro = this.products;

  }
  toggleImg():void{
    this.showImg = !this.showImg
  }

  onRatingClicked(message:string):void{
    this.showTitle = message;
  }

}
