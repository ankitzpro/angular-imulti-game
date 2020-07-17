import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { StartComponent } from './views/start/start.component';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';
import { FinishComponent } from './views/finish/finish.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule],
  declarations: [ MainComponent ,StartComponent,
    GameComponent
    ,TimerComponent,FinishComponent],
  bootstrap:    [ MainComponent ],
  exports:      [MainComponent]
})
export class MainModule { }
