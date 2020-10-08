import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
//import { ProFilterPipe } from './pro-filter.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    //ProFilterPipe,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
