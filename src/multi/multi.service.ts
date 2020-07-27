import { Injectable,Output,EventEmitter } from '@angular/core';
import { SwitchService } from '../switch-game/switch-game.service';
import { AccuracyGameService} from '../accuracy-game/accuracy-game.service';
import { MemcardsService} from '../memory-cards/memcards.service';
import { SwipeGameService} from '../swipe-game/swipe-game.service';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiService {
  constructor( private switchservice:SwitchService,private accuservice:AccuracyGameService,private memcardsservice:MemcardsService,private swipeservice:SwipeGameService){

  }
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
timerShowValue=false;
private timerShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.timerShowValue);

timerShow$: Observable<boolean> = this.timerShow.asObservable();
games=['switch-game','swipe-game','memory-cards','accuracy-game'];
game1='';
game2='';
service1:any;
service2:any;
seconds=0;
intervalId;
timer=false;
levelgame1=0;
levelgame2=0;
waitgame1=false;
waitgame2=false;
start_count=0;
chooseGames(){
  console.log(this.games);
  console.log('choose cllled');
  if(this.games.length>1){
  var a = Math.floor(Math.random() * this.games.length);
  this.game1=this.games[a];
  this.games.splice(a,1);
  this.getService(this.game1,1);
  var b = Math.floor(Math.random() * this.games.length);
  this.game2=this.games[b];
  this.games.splice(b,1);
  this.getService(this.game2,2);
 this.seconds=this.service1.seconds+this.service2.seconds;
 console.log(this.games);
}
else{
  window.location.reload();
}
}

getService(game,no){
var service;
if(game=='switch-game'){
  service=this.switchservice;
}
if(game=='accuracy-game'){
  service=this.accuservice;
}
if(game=='memory-cards'){
  service=this.memcardsservice;
}
if(game=='swipe-game'){
  service=this.swipeservice;
}
if(no==1)
this.service1=service;
else
this.service2=service;
}

clearTimer() {
  clearInterval(this.intervalId);
  //this.start_count=0;
}

reset(){
this.game1='';
this.game2='';
this.seconds=0;
this.intervalId = 0;
this.levelgame1=0;
this.levelgame2=0;
}

levelUp(game){
  if(this.game1==game){ 
  this.levelgame1++;}
  if(this.game2==game){
  this.levelgame2++;}

}
disableGame(game){
  if(this.game1==game)
  this.waitgame1=true;
  if(this.game2==game)
  {
    this.waitgame2=true;}
  if(this.waitgame1==true && this.waitgame2==true)
  {
    this.timerShowValue=true;
    this.timerShow.next(this.timerShowValue);
    this.clearTimer();
    this.waitgame1=false;
    this.waitgame2=false;
  }
}
}