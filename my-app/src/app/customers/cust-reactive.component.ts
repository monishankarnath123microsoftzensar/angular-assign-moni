import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { Customer } from './customer';

@Component({
  selector: 'app-cust-reactive',
  templateUrl: './cust-reactive.component.html',
  styleUrls: ['./cust-reactive.component.css']
})
export class CustReactiveComponent implements OnInit {
customer:Customer = new Customer();
custRForm:FormGroup;

  constructor(private fb:FormBuilder) { }
//creating reactiveform using formcontrol and form group
  // ngOnInit(): void {
  //   this.custRForm = new FormGroup({
  //     firstName: new FormControl(),
  //     lastName: new FormControl(),
  //     email: new FormControl(),
  //   })
  // }
//using formbuilder service to build a reactive form
  ngOnInit():void{
    this.custRForm= this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:[{value:'abc',disabled:true},Validators.required],
      email:['',Validators.required],
      phone:''
    })
  }
  saveCustForm():void{
    console.log(this.custRForm)
    console.log(`Saved data Reactive: ${this.custRForm.value}`)
  }
  showSetData():void{
    this.custRForm.setValue({
      firstName:'David',
      lastName: 'Smith',
      email:'david.smith@gmail.com',
      phone:'12345'
    })
  }
  showPatchData():void{
    this.custRForm.patchValue({
      firstName:'David',
      lastName: 'Smith',
      
    })
  }

}
