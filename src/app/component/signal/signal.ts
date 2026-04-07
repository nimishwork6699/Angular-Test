import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName:String="Angular"
  newVector= signal("20")
  courseDuration=signal<string>('2 Months');
  cityList=signal<string[]>(["Nagpur","Pune"])

  studentObj=signal<any>({
    name:'AAB',
    city:'Pune'
  })

  chngeDuration(){
    this.courseName="React jS"

    this.courseDuration.set("3 Month")
  }
  addCity(){
    this.cityList.set(["Nagpur","Pune","Delhi"]);

    
  }
  chngeCity(){
    this.studentObj.update((oldobj:any)=>({...oldobj,city:'Thane'}))
  }
  addNagpur(){
    if(
      !this.cityList().includes('Delhi')
    )
    this.cityList.update((old:string[])=>[...old,'Delhi'])
  }
}
