import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data1 = 'One way binding';
  data2 = 'Two way binding';
  isActive = true;

  printName():void{
      console.log('event binding ^_^')
  }
}
