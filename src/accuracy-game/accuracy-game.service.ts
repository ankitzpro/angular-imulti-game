import { Injectable,Output,EventEmitter } from '@angular/core';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccuracyGameService {
@Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  level=0;

seconds: number = 5;
score=0;
diff=0;
totanswers=[];

  scoreCalc(diff:any){

    if(diff<7 && this.totanswers.length<4){
      this.score++;
      this.totanswers.push(1);
    }
    else if(diff<5 && this.totanswers.length<7 && this.totanswers.length>3){
      this.score++;
      this.totanswers.push(1);
    }
    else if(diff<3 && this.totanswers.length<10  && this.totanswers.length>6){
      this.score++;
      this.totanswers.push(1);
    }
    else if(diff<2 && this.totanswers.length<13 && this.totanswers.length>9){
      this.score++;
      this.totanswers.push(1);
    }
  }

  
}