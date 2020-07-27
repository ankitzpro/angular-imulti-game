import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;
anstext='';
totanswers=[];
score=0;
seconds=10;


  
  levelupgrade(){
    if(this.totanswers.length>4){
      this.seconds=10;
    }
    else{
      this.seconds=12;
    }
  }

  
}