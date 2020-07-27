import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MemcardsComponent } from './memcards.component';



@NgModule({
  imports:      [  FormsModule,
    CommonModule, ],
  declarations: [ MemcardsComponent ],
  bootstrap:    [ MemcardsComponent ],
  exports:      [ MemcardsComponent ]
  
})
export class MemcardsModule { }