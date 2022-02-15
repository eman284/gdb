import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdbAComponent } from './gdb-a/gdb-a.component';



@NgModule({
  declarations: [
    GdbAComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GdbAComponent
  ]
})
export class GdbModule { }
