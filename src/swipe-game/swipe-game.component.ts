import { Component, OnInit,Input ,EventEmitter, Output,HostListener} from '@angular/core';
import { SwipeGameService} from './swipe-game.service'
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as swp from './swipe';
import { MultiService } from '../multi/multi.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  DOWN_ARROW = 40,
}

@Component({
  selector: 'swipe-game',
  templateUrl: './swipe-game.component.html',
  styleUrls: [ './swipe-game.component.scss' ],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swp.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swp.swipeleft))),
      transition('* => swipedown', animate(750, keyframes(swp.swipedown)))
    ])
  ]
})
export class SwipeGameComponent implements OnInit {

  constructor(private serv: SwipeGameService,private multiservice: MultiService) { }
  @HostListener('window:keyup', ['$event']) w(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.serv.pageno == 1 || this.serv.pageno == 2)
        this.clickOrswipe('left');
      else this.clickOrswipe('right');
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.serv.pageno == 1 || this.serv.pageno == 2)
        this.clickOrswipe('right');
      else this.clickOrswipe('left');
    }

    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.clickOrswipe('down');
    }
  }
  eventText = '';
word1:String;
word2:String;

animationState: string;
disable=false;

clk='up';
  ngOnInit() {
    this.serv.question();
    this.multiservice.levelUp('swipe-game');
this.word1=this.serv.word1;
this.word2=this.serv.word2;
  }
  onSwipe(evt) {
    this.startAnimation('');
    const x =
      Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left') : '';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    var event = x == '' ? y : x;
    this.clickOrswipe(event);
  }
  
  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  
  clicked(abc:string) { 
    this.clk=abc;
}
clickOrswipe(evt) {
  this.eventText = evt;

  if ( this.eventText != 'up') {
    this.startAnimation('swipe' + this.eventText);
    this.serv.getAnswer(this.eventText);
    this.disable=true;

    setTimeout(() => {
      this.multiservice.disableGame('swipe-game');
    }, 500);
  }
}
resetAnimationState(state) {
  this.animationState = '';
}


}
