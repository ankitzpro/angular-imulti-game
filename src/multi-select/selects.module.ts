import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SelectsComponent } from './selects.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule],
  declarations: [ SelectsComponent ],
  bootstrap:    [ SelectsComponent ],
  exports:      [SelectsComponent]
})
export class SelectsModule { }
