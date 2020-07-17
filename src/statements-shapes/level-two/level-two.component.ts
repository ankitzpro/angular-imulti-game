import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent implements OnInit {
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
  startCountDown:number=10;
  seconds:number=30;
  level:number=2;
  notifier: NotifierService;
  timmerCountDown:number=5;
  timerDownId:any;
  constructor(
    private service: StatementService,
    notifierService: NotifierService) { 
      this.notifier = notifierService;
    }
    Stage2Que =[
      {question:"It's a red circle or a purple circle",shape:'circle',color:'green',answer:'FALSE'},
      {question:"It's a green circle or an orange circle",shape:'circle',color:'black',answer:'FALSE'},
      {question:"It's not a brown square neither a black circle",shape:'square',color:'black',answer:'TRUE'},
      {question:"It's not a brown square neither a black square",shape:'circle',color:'orange',answer:'TRUE'},
      {question:"It's not a green circle neither a black square",shape:'square',color:'green',answer:'TRUE'},
      {question:"It's not a brown circle neither a Blue square",shape:'circle',color:'blue',answer:'TRUE'},
      {question:"It's not a purple square",shape:'circle',color:'black',answer:'FALSE'},
      {question:"It's not a blue circle neither an orange circle",shape:'circle',color:'orange',answer:'FALSE'},
      {question:"It's a red circle or a purple circle",shape:'circle',color:'purple',answer:'TRUE'},
      {question:"It's not a purple square neither an orange circle",shape:'circle',color:'orange',answer:'FALSE'},
      {question:"It's a red square or a green circle",shape:'circle',color:'red',answer:'FALSE'},
      {question:"It's a purple square or a red circle",shape:'square',color:'purple',answer:'TRUE'}, 
      {question:"It's not a red square neither a blue square",shape:'square',color:'blue',answer:'FALSE'}, 
      {question:"It's not a green square neither a red circle",shape:'square',color:'red',answer:'FALSE'}, 
      {question:"It's a green circle or a red circle",shape:'square',color:'red',answer:'FALSE'}, 
      {question:"It's not a red circle niether a red blue square",shape:'circle',color:'red',answer:'FALSE'}, 
      {question:"It's a black square or a blue square",shape:'square',color:'black',answer:'TRUE'}, 
      {question:"Its not a black circle neither a blue square",shape:'square',color:'black',answer:'TRUE'}, 
      {question:"It's a green circle or a black square",shape:'circle',color:'green',answer:'TRUE'}, 
      {question:"It's not a red square neither a black circle",shape:'square',color:'green',answer:'TRUE'}, 
      {question:"It's a red circle or a green square",shape:'square',color:'red',answer:'FALSE'}, 
      {question:"It's a purple circle or a green circle",shape:'square',color:'green',answer:'FALSE'}, 
      {question:"It's a black square or a green square",shape:'circle',color:'red',answer:'FALSE'}, 
      {question:"It's a brown circle or a green square",shape:'square',color:'brown',answer:'FALSE'}, 
      {question:"It's a brown circle or a green square",shape:'circle',color:'brown',answer:'TRUE'}, 
      {question:"It's a black circle or a brown circle",shape:'circle',color:'brown',answer:'TRUE'}, 
      {question:"It's not a blue square neither a  blue circle",shape:"square",color:"blue",answer:"FALSE"},
      {question:"It's a green square or a black circle",shape:"circle",color:"black",answer:"TRUE"},
      {question:"It's an orange circle or a green square",shape:"square",color:"brown",answer:"FALSE"},
      {question:"It's a black circle or a green square",shape:"square",color:"green",answer:"TRUE"},
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
      var random  = Math.floor(Math.random()*this.Stage2Que.length);
      this.question=this.Stage2Que[random].question;
      this.shape=this.Stage2Que[random].shape;
      this.color=this.Stage2Que[random].color;
      this.answer=this.Stage2Que[random].answer;
      this.l2_countDown();
      this.timmer();
    }else{
     // this.service.showAlert("Your Level-Two Score Is "+ this.service.l2_score + " OK For Next Level");
      this.service.changeCompo('Level3');
    }
  }
  result(ans: any){
    this.userAnswer = ans;
    this.myfunction();
      if( this.userAnswer == this.answer){
        this.notifier.notify("success","Question "+this.questionOn + " is Correct Answer");
        this.questionOn++
        this.service.l2_score++;
        this.score = this.service.l2_score;
        this.getQuestion();
      }else{
        this.notifier.notify("error","Question "+this.questionOn + " is Incorrect Answer!");
          this.questionOn++
          this.getQuestion();
      }
  }

  l2_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
            this.questionOn++;
            this.myfunction()
            this.getQuestion();
            this.seconds=20;
        }, 5000);
      }
      clearTimer(){clearTimeout(this.intervalId);}
  private countDown(){
    var countDownId = window.setInterval(() => {
      this.startCountDown -= 1;
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
    }, 100);
    this.timmerCountDown = 5;
    
  }
  myfunction(){clearInterval(this.timerDownId);}
}
