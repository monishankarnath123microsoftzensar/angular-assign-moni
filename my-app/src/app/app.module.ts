import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customers/customer.component';
import { CustReactiveComponent } from './customers/cust-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    CustReactiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ProductModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
