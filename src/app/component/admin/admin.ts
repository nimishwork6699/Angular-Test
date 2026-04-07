import { AfterViewInit, Component,OnDestroy,OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit,OnDestroy{
  
  constructor() {
   console.log('constructor executed')
  }//propertety initiallization

  ngOnInit():void { // api call
    console.log('ngOnInit')//subscription
  }

  ngAfterViewInit(): void {
    console.log('ngAfterView') 
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}

