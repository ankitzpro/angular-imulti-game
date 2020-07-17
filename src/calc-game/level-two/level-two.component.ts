import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent implements OnInit {
  firstInput:number;
  secondInput:number;
  thirdInput:number;
  rhs:number;
  lhs:any;
  rmVal:boolean;
  question_no:number =1;
  score:number;
  c_score:any;
  intervalId: any = 0;
  seconds: number = 15;
  showtimer=false;
  l2_score:number= 0;
  countDownId:any;
  level:number =2;
  noOfQustion:number=4;
  max_question_no =5;
  operator1:any='';
  operator2:any='';
  showQuestion:boolean=false;
  timmer:number=5;
  notifier: NotifierService;
  constructor(
    private service: CalcService,
    notifierService: NotifierService) { 
      this.notifier = notifierService;
    }
  ngOnInit() {
    this.showTimmer();
    // this.clearTimer();
    // this.getRhs();
    // this.countDown();
  }
  
  insertChar(character: number): void {
    
    if(!this.firstInput){
      this.firstInput = character;
      
    }else if(!this.secondInput){
      this.secondInput = character;
 
    }else if(!this.thirdInput){
      this.thirdInput = character;
    }
    if(this.firstInput && this.secondInput && this.thirdInput){
      this.result();
    }    
  }

  getRhs() { 
    this.clearTimer();
    this.getOperator();
    this.rhs= Math.floor(Math.random() * (90 - 2 + 1) + 2);
    this.l2_score = this.service.l2_score;
    this.clearTimer();
    this.countDown();
    this.clearCountDown();
    if(this.question_no <= this.max_question_no){
      this.clearTimer();
      this.l2_countDown();
      this.clearCountDown();
    }else{
      this.clearCountDown();
      //this.service.showAlert('Level Two Score '+ this.service.l2_score  + ' Click OK For Next Level');
      this.service.changeCompo('Level3');
    }
    this.removeChar(1);
  }
  removeChar(rmVal){
    this.firstInput=null
    this.secondInput=null
    this.thirdInput=null
  }
  l2_countDown() {
    this.showtimer=true;
    this.intervalId = setTimeout(() => {
            //this.service.showAlert('Sorry! Timeout Click OK For Next Qustion');
            this.question_no++;
            this.getRhs();
            this.seconds=10;
        }, 10000);
        this.clearCountDown();
      }
      clearTimer(){clearTimeout(this.intervalId);}

      private countDown(){
        this.countDownId = window.setInterval(() => {
          this.seconds -= 0.1;
          this.seconds=this.seconds;
          if ((this.seconds).toFixed(1) == '0.0') {
            this.service.customConsole("wait");
          } 
        }, 100);
        this.seconds = 10;
      }
      clearCountDown(){clearTimeout(this.countDownId);}

      result(){
        switch(this.operator1) {
            case "*":
                this.lhs = this.firstInput * this.secondInput + this.thirdInput;
                break;
            case "+":
                this.lhs = this.firstInput + this.secondInput * this.thirdInput;
              break;
        }
          if(this.lhs == this.rhs){
            this.notifier.notify("success","Question "+this.question_no + " is Correct Answer");
                this.question_no++;
                this.service.l2_score++;
                this.l2_score = this.service.l2_score;
                // this.service.showAlert("Correct Answer! Click OK For Next Question");
                this.removeChar(1);
                this.getRhs();
              }else{
            this.notifier.notify("error","Question "+this.question_no + " is Incorrect Answer!");
                this.question_no++;
                // this.service.showAlert("Incorrect Answer! Click OK For Next Question");
                this.removeChar(1);
                this.getRhs();
              }
      }
      getOperator(){
        var operator = [{sign: "*",},{sign: "+"}];
        var selectedOperator1 = Math.floor(Math.random()*operator.length);
        this.operator1=operator[selectedOperator1].sign;
        if(this.operator1 == "*"){
          this.operator2='+';
        }else{
          this.operator2='*';
        }
      }
      
      showTimmer(){
        var countDownId = window.setInterval(() => {
          this.timmer -= 1;
          this.timmer=this.timmer;
          if ((this.timmer).toFixed(1) == '0.0') {
            this.showQuestion=true;
            clearInterval(countDownId);
            this.getRhs();
            this.countDown();
          } 
        }, 1000);
        this.showQuestion=false;
      }  
}
