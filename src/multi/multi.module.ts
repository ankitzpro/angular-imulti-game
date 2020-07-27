import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiComponent } from './multi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemcardsModule } from '../memory-cards/memcards.module';
import { SwipeGameModule } from '../swipe-game/swipe-game.module';
import { SwitchGameModule } from '../switch-game/switch-game.module';
import { AccuracyGameModule } from '../accuracy-game/accuracy-game.module';


@NgModule({
  declarations: [MultiComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MemcardsModule,
   SwipeGameModule,
    SwitchGameModule,
    AccuracyGameModule,
  ],
  providers: [],
  bootstrap: [MultiComponent],
  exports:[MultiComponent]
})
export class MultiModule {}
