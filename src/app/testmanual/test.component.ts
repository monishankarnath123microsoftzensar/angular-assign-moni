import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    template:`<h1>This is test without cli</h1>
    <p>Angular latest version</p>
    <div style="background-color: aqua">
    <h3>Personal Details</h3>
    <p>Name: {{name}}</p>
    <p>Age: {{age}}</p>
    <p>Employee: {{isEmp}}</p>
    <p>Salary: {{salary}}</p>
    </div>
    <table class="table table-bordered">
    <tr>
    <td>Name</td>
    <td>Id</td>
    </tr>
    <tr *ngFor ="let p of person">
    <td>{{p.pName}}</td>
    <td>{{p.pId}}</td>
    </tr>
    </table>
    `
   // template:'<h1>This is test without cli</h1>'
   //templateUrl:'',
   //templateUrl: './test.component.html'

})

export class TestComponent{
    age:number =34
    salary:number= 45245.24
    isEmp:boolean = true
    name:string = 'test from test manual'
    person:any[]=[{pName:"Moni",pId:100},
    {pName:"Smriti",pId:200},
    {pName:"Shankar",pId:300},
    {pName:"Dustu",pId:400},]
}