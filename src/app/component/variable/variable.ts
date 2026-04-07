import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  imports: [],
  templateUrl: './variable.html',
  styleUrl: './variable.css',
})
export class Variable {

//string | number | date | boolean
// array | object

customerName : string = "Chetan Jogi";

studentRollNo: number = 112;

currentDate: Date = new Date();

isCustomeActive: boolean = false;

mahaCityArray: string [] = ["Mumbai","Thane","Nagpur","Pune"];

rollNoList: number [] = [111,112,1134,114,114,43543];

studentObj = {
  name: 'Chetan',
  city: 'Pune',
  mobile: '1122334455',
  email: 'chetan@gmail.com'
}

constructor() {
 console.log(this.customerName);
 
 this.customerName="Rahul";
 console.log("After Update");
 console.log(this.customerName);

 //this.customerName=123
 this.customerName='1234'

}
}
