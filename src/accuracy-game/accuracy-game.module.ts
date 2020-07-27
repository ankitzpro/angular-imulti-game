import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccuracyGameComponent } from './accuracy-game.component';
import {  NumberDirective } from '../numonly.directive';


@NgModule({
  imports:      [  FormsModule ,CommonModule
   
  ],
  declarations: [ AccuracyGameComponent ,NumberDirective],
  bootstrap:    [ AccuracyGameComponent ],
  exports:      [AccuracyGameComponent]
})
export class AccuracyGameModule { }
