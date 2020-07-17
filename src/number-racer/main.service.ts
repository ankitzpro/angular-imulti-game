import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
@Output() scoreData:EventEmitter<any>= new EventEmitter();
  level=0;
  compoShowValue='Start';
  private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

  compoShow$: Observable<string> = this.compoShow.asObservable();
anstext='';

score=0;
rangestart=2;
rangeend=25;
noofdigits=6;
secperlevel=2000;
secperdigit=300;
textMaker(text:string){
  this.anstext=text;

  if(this.level==10){
  this.anstext='Your Final Score :'+this.score;
  }
}

levelUpdate(){
  this.level++;
  if(this.level>=1 && this.level<4){
    this.rangestart=2;
    this.rangeend=25;
    this.noofdigits=6;
    // this.secperdigit=3000000000000;
    // this.secperlevel=200000000000000;
    this.secperdigit=500;
    this.secperlevel=3200;


  }
  else if(this.level>=4 && this.level<7){
 this.rangestart=20;
    this.rangeend=50;
    this.noofdigits=6;
    this.secperdigit=500;
    this.secperlevel=3200;
  }
  else if(this.level>=7 && this.level<9){
     this.rangestart=50;
    this.rangeend=100;
    this.noofdigits=7;
    this.secperdigit=300;
    this.secperlevel=2000;
  }
  else if(this.level>=9 && this.level<=10){
 this.rangestart=100;
    this.rangeend=999;
    this.noofdigits=7;
    this.secperdigit=300;
    this.secperlevel=2000;
  }
  else{
    
  }
}
  sendValues(){
  this.scoreData.emit(this.score);
}
changeCompo(comp:string){
  this.compoShowValue=comp;
  this.compoShow.next(this.compoShowValue);
}
}
