import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
//import { ProFilterPipe } from './pro-filter.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProEditComponent } from './pro-edit.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    //ProFilterPipe,
    ProductDetailsComponent,
    ProEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
