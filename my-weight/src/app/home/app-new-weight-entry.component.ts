import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Home } from './home';

@Component({
  selector: 'app-app-new-weight-entry',
  templateUrl: './app-new-weight-entry.component.html',
  styleUrls: ['./app-new-weight-entry.component.css']
})
export class AppNewWeightEntryComponent implements OnInit {
  home:Home = new Home();
  @Input() showbodyfat
  constructor() { }

  ngOnInit(): void {
  }
  saveData(custForm:NgForm):void{
    console.log(custForm.form)
    console.log(`Saved Cust Data: ${JSON.stringify(custForm.value)}`)
  }

}
