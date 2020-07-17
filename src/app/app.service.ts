import { Injectable,Output,EventEmitter } from '@angular/core';
import { MainService} from '../number-racer/main.service';
import { MyserviceService} from '../swipe-game/myservice.service';
import { BalloonService} from '../balloon-game/balloon.service';
import { CalcService } from '../calc-game/calc.service';
import { CardService } from '../memory-cards/card.service';
import { StatementService } from '../statements-shapes/statement.service';
import { SwitchService } from '../switch-game/switch.service';
import { AccuracyService } from '../accuracy-game/accuracy.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  game1='';
  game2='';
  gamedata1='';
  gamedata2='';
  games = [
  {'description':'Compare the 2 words and decide whether there meaning is almost the same, almost the opposite, or they have another relationship./n If they have thengula same meaning, Click left. For almost opposites, Click right. For all other words pairs, Click down','value':'Link Swipe'},
  {'description':'Use the Sequences in the middle to determine the correct reorder of the symbols to make the Upper row match the Lower row','value':'Switch Game'},
  {'description':'Solve the equation to collect the game point','value':'Digit Game'},
  {'description':'Collect the dropping numbers whose sum is equals to the number in the top right','value':'Number racer'},
  {'description':'Memorize the Flashing Squares then Recreates the same when the countdown starts','value':'Memory cards'},
  {'description':'Guess the percentage of the aquarium filled. The final score will depend upon how accurate you are','value':'Accuracy Game'},
  {'description':'Check If the statement is correct for the given shape to score a point','value':'Statement-Shapes'},
  {'description':'Pump the balloon to get more and more points and collect before it blasts.','value':'Balloon Pump'}];
    constructor(private calcservice:CalcService,private numservice: MainService, private balloonservice:BalloonService,private memcardsservice:CardService, private statementservice:StatementService,
      private switchservice:SwitchService,private accuracyservice:AccuracyService,private swipeservice:MyserviceService){}
  
changeGame(val,gno){
if(gno==1){
this.game1=val;
var ind1 = this.games.map(function(e) { return e.value; }).indexOf(val);
this.gamedata1=this.games[ind1].description;
console.log('G1'+this.game1);
console.log('G1'+this.gamedata1);
}
else{
  this.game2=val;
  var ind2 = this.games.map(function(e) { return e.value; }).indexOf(val);
  this.gamedata2=this.games[ind2].description;
  console.log('G2'+this.game2);
  console.log('G2'+this.gamedata2);

}
}

startGame(){
 this.swipeservice.compoChange('Timer');
 this.swipeservice.pageno=2;
 this.switchservice.changeCompo('Timer');
 this.memcardsservice.changeCompo('Timer');
 this.numservice.changeCompo('Timer');
 this.accuracyservice.changeCompo('Timer');
 this.balloonservice.changeCompo('Timer');
 this.statementservice.changeCompo('Level1');
 this.calcservice.changeCompo('Level1');
}
  }