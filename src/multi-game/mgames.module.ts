import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgamesComponent } from './mgames.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from '../number-racer/main.module';
import { MemcardsModule } from '../memory-cards/memcards.module';
import { SwipeModule } from '../swipe-game/swipe.module';
import { SwitchModule } from '../switch-game/switch.module';
import { AccuracyModule } from '../accuracy-game/accuracy.module';
import { StatementModule } from '../statements-shapes/statement.module';
import { CalcModule } from '../calc-game/calc.module';
import { BalloonModule } from '../balloon-game/balloon.module';

@NgModule({
  declarations: [MgamesComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MainModule,
    MemcardsModule,
   SwipeModule,
    SwitchModule,
    AccuracyModule,
    StatementModule,
    CalcModule,
    BalloonModule,
  ],
  providers: [],
  bootstrap: [MgamesComponent],
  exports:[MgamesComponent]
})
export class MgamesModule {}
