import { Component } from '@angular/core';
import { MultiService } from './multi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent {
  constructor(private multiservice:MultiService){}
  game1=this.multiservice.game1;
  game2=this.multiservice.game2;;
  seconds=this.multiservice.seconds;
  timerseconds=5;
  midtimer=false;
  sub:Subscription;
    ngOnInit(){
      this.multiservice.chooseGames();
      this.game1=this.multiservice.game1;
      this.game2=this.multiservice.game2;
      this.seconds=this.multiservice.seconds;
      this.countDown();
      this.sub = this.multiservice.timerShow$.subscribe(timerShow => 
        {this.midtimer = timerShow;
          if(this.midtimer==true)
          this.midTimer();
        });
    }
    clearTime(){
    }
  countDown() {
     this.seconds=this.multiservice.seconds
     
   //this.multiservice.start_count+=1;
   //if(this.multiservice.start_count==1){
      this.multiservice.intervalId = setInterval(() => {
        this.seconds -= 0.1;
        if (this.seconds.toFixed(1) === '0.0') {
          this.multiservice.clearTimer();
          this.midtimer=true;
          this.midTimer();
        }
      }, 100);
    //}
  }

     midTimer(){
     console.log('timer clled');
       var intervalId = setInterval(() => {
        if(this.multiservice.levelgame1==4 && this.multiservice.levelgame2==4){
          this.multiservice.reset();
          this.multiservice.chooseGames();
          this.game1=this.multiservice.game1;
          this.game2=this.multiservice.game2;
        }
        this.timerseconds -= 1;
        if (this.timerseconds === 0) {
          clearInterval(intervalId);
          this.midtimer=false;
          this.countDown();
          this.timerseconds=5;
          this.multiservice.waitgame1=false;
          this.multiservice.waitgame2=false;
         // this.multiservice.changeQuestion();
        }
      }, 1000);
    }

    
}
