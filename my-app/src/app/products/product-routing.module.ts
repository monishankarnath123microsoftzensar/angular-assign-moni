import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsGuard } from './product-details.guard';
import { ProEditComponent } from './pro-edit.component';
import { ProductEditGuard } from './product-edit.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path:'products',component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailsComponent,canActivate:[ProductDetailsGuard]},
      {path: 'addProduct', component: ProEditComponent},
      {path: 'products/:id/edit', component: ProEditComponent, canDeactivate:[ProductEditGuard]}
    ]),
  ],
  exports:[RouterModule]
})
export class ProductRoutingModule { }
