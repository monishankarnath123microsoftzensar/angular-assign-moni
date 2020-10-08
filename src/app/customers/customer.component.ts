import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer:Customer = new Customer();
  constructor() { }

  ngOnInit(): void {
  }
saveCustomer(custForm:NgForm):void{
  console.log(custForm.form)
  console.log(`Saved Cust Data: ${JSON.stringify(custForm.value)}`)
}
}
