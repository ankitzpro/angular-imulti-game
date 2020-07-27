import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwitchGameComponent } from './switch-game.component';

@NgModule({
  imports: [ FormsModule, CommonModule],
  declarations: [
    SwitchGameComponent,
  ],
  bootstrap: [SwitchGameComponent],
  exports: [SwitchGameComponent],
})
export class SwitchGameModule {}
