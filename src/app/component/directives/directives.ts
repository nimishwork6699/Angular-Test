import { Component ,signal,Signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isLogin=signal(true)
  users=signal(["Antony","Raj","Shah"])
  pColor=signal("red")

  studentData=[
    {
      name:'Anil',
      age:13,
      email:'anil@123'
    },
    {
      name:'Rom',
      age:23,
      email:'rom@123'
    },
    {
      name:'sham',
      age:13,
      email:'sham@123'
    },
    {
      name:'peter',
      age:12,
      email:'peter@123'
    }
  ]
student: any;


color="black"
changeColor(color:string){
  this.color=color
}
}

