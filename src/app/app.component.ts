import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data1:string = 'One way binding';
  data2 = 'hi 123';
  d1= 'input 1';
  d2= 'input 2';
  d3= 'input 3';
  isActive = true;

  printName():void{
      console.log('event binding ^_^')
  }
}
