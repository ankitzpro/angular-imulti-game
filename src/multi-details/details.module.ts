import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule],
  declarations: [ DetailsComponent ],
  bootstrap:    [ DetailsComponent ],
  exports:      [DetailsComponent]
})
export class DetailsModule { }
