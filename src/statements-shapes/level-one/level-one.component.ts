import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {
  question:string;
  shape:string;
  color:string;
  answer:string;
  userAnswer:string;
  text:string="Choose if the Statement is Correct or Not";
  intervalId:any;
  score:number=0;
  questionOn=1;
  showQuestion:boolean=false;
  noOfQuestions=5;
  startCountDown:number=5;
  seconds:number=20;
  level:number=1;
  timmerCountDown:number=5;
  timerDownId:any;
  notifier: NotifierService;
  constructor(
    private service: StatementService,
    notifierService: NotifierService) {
      this.notifier = notifierService;
    }
    Stage1Que =[
      {question:"It's not a purple circle",shape:'circle',color:'purple',answer:'FALSE'},
      {question:"It's not a red circle",shape:'circle',color:'purple',answer:'TRUE'},
      {question:"It's a blue circle",shape:'circle',color:'black',answer:'FALSE'},
      {question:"It's not a black circle",shape:'circle',color:'black',answer:'FALSE'},
      {question:"It's not an orange circle",shape:'circle',color:'orange',answer:'FALSE'},
      {question:"It's a brown square",shape:'circle',color:'brown',answer:'FALSE'},
      {question:"It's not a purple square",shape:'circle',color:'black',answer:'TRUE'},
      {question:"It's a purple square",shape:'square',color:'purple',answer:'TRUE'},
      {question:"It's a black square",shape:'square',color:'black',answer:'TRUE'},
      {question:"It's not a red circle",shape:'circle',color:'blue',answer:'FALSE'},
      {question:"It's an orange circle",shape:'circle',color:'orange',answer:'TRUE'},
      {question:"It's not a black circle",shape:'square',color:'black',answer:'TRUE'},
      {question:"It's not a blue circle",shape:'circle',color:'blue',answer:'FALSE'},
      {question:"It's a green circle",shape:'circle',color:'green',answer:'TRUE'},
      {question:"It's not a blue circle",shape:'square',color:'blue',answer:'TRUE'},
      {question:"It's not a red circle",shape:'square',color:'red',answer:'TRUE'},
      {question:"It's not a red circle",shape:'square',color:'blue',answer:'TRUE'},
      {question:"It's not a red circle",shape:'square',color:'purple',answer:'TRUE'},
      {question:"It's not a purple circle",shape:'square',color:'purple',answer:'TRUE'},
      {question:"It's not an orange circle",shape:'square',color:'orange',answer:'TRUE'},
      {question:"It's not a black square",shape:'square',color:'pink',answer:'TRUE'},
      {question:"It's not a black square",shape:'square',color:'black',answer:'FALSE'},
      {question:"It's not a yellow circle",shape:'square',color:'blue',answer:'TRUE'},
      {question:"It's not a yellow circle",shape:'circle',color:'red',answer:'TRUE'},
      {question:"It's not a green square",shape:'square',color:'red',answer:'TRUE'},
      {question:"It's a red circle",shape:'circle',color:'red',answer:'TRUE'},
      {question:"It's not a black square",shape:'square',color:'blue',answer:'TRUE'},
      {question:"It's a green square",shape:'square',color:'black',answer:'FALSE'},
      {question:"It's a blue circle",shape:'square',color:'blue',answer:'FALSE'},
      {question:"It's not a black square",shape:'circle',color:'black',answer:'TRUE'},
    ];
  ngOnInit() {
    this.countDown();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  getQuestion(){
    this.clearTimer();
    if(this.questionOn <= this.noOfQuestions){
      var random  = Math.floor(Math.random()*this.Stage1Que.length);
      this.question=this.Stage1Que[random].question;
      this.shape=this.Stage1Que[random].shape;
      this.color=this.Stage1Que[random].color;
      this.answer=this.Stage1Que[random].answer;
      this.l1_countDown();
      this.timmer();
    }else{
     // this.service.showAlert("Your Level-One Score Is "+ this.service.l1_score + " OK For Next Level");
      this.service.changeCompo('Level2');
    }
  }
  result(ans: any){
    this.userAnswer = ans;
    this.myfunction();
    // this.service.customConsole(this.userAnswer +"=="+ this.answer);
      if( this.userAnswer == this.answer){
        this.notifier.notify("success","Question "+this.questionOn + " is Correct Answer");
        this.questionOn++
        this.service.l1_score++;
        this.score = this.service.l1_score;

        this.getQuestion();
      }else{
        this.notifier.notify("error","Question "+this.questionOn + " is Incorrect Answer!");

          this.questionOn++
          this.getQuestion();
      }
  }

  l1_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
            this.questionOn++;
            this.myfunction();
            this.getQuestion();
            this.seconds=20;
        }, 5000);
        // }, 5000000000000);
      }
      clearTimer(){clearTimeout(this.intervalId);}
  private countDown(){
    var countDownId = window.setInterval(() => {
      this.startCountDown -= 1;
      this.startCountDown=this.startCountDown;
      if ((this.startCountDown).toFixed(1) == '0.0') {
        this.showQuestion=true;
        clearInterval(countDownId);
        this.getQuestion();
      }
    }, 1000);
  }

  private timmer(){
    this.timerDownId = window.setInterval(() => {
      this.timmerCountDown -= 0.1;
      this.timmerCountDown=this.timmerCountDown;
      if ((this.timmerCountDown).toFixed(1) == '0.0') {
        this.service.customConsole(this.timmerCountDown);
        clearInterval(this.timerDownId);
        }
    // }, 10000000000);
    }, 100);
    this.timmerCountDown = 5;

  }
  myfunction(){clearInterval(this.timerDownId);}
}
