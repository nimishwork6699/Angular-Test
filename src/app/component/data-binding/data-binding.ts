import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = 'Angular';
  isActive:boolean=false;
  currentDate:Date=new Date();
  rollNo:number=222;


  constructor() {
    console.log(this.courseName);

    this.courseName='Angular 20 Tutorial';
        console.log(this.courseName);
  }
  Change_course_name(){
    this.courseName="Helo";
    
  }
  showAlert(){
    alert("Welcome To Angular")
  }
}
