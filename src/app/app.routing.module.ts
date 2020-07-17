import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailsComponent } from '../multi-details/details.component';
import { SelectsComponent } from '../multi-select/selects.component';
import { MgamesComponent } from '../multi-game/mgames.component';



@NgModule({
  declarations: [ 
  ],
  imports: [
    RouterModule.forRoot([
       { path: '', component: SelectsComponent },
      { path: 'select', component: SelectsComponent },
      { path: 'detail', component: DetailsComponent },
       { path: 'mgame', component: MgamesComponent },
      { path: '**', redirectTo: 'select' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}

