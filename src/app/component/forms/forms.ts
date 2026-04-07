import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule,CommonModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  addUser(data:NgForm){
    console.log(data)
  }

}
