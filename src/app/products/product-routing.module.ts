import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from './product-details.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path:'products',component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailsComponent,canActivate:[ProductDetailsGuard]},
    ]),
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
