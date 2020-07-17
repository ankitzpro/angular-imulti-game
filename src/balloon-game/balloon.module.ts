import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BalloonComponent } from './balloon.component';
import { StartComponent } from './views/start/start.component';
import { GameComponent } from './views/game/game.component';
import { TimerComponent } from './views/timer/timer.component';
import { FinishComponent } from './views/finish/finish.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,CommonModule],
  declarations: [ BalloonComponent ,StartComponent,
    GameComponent
    ,TimerComponent,FinishComponent],
  bootstrap:    [ BalloonComponent ],
  exports:      [BalloonComponent]
})
export class BalloonModule { }
