import { Component } from '@angular/core';
import { SwipeGameService } from '../swipe-game/swipe-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private swipeservice: SwipeGameService
    ){}
    start=true;
  title = 'oneclick';
 ngOnInit(){
   this.swipeservice.readData();
 }
  startgame(){

    this.start=false;
  }
}
