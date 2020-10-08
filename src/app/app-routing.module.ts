import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customers/customer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'customer', component:CustomerComponent},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
