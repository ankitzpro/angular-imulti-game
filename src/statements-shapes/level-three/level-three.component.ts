import { Component, OnInit } from '@angular/core';
import { StatementService } from '../statement.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class LevelThreeComponent implements OnInit {
  question:string;
  shape1:string;
  color1:string;
  shape2:string;
  color2:string;
  answer:string;
  userAnswer:string;
  text:string="Choose if the Statement is Correct or Not";
  intervalId:any;
  score:number=0;
  questionOn=1;
  showQuestion:boolean=false;
  noOfQuestions=5;
  startCountDown:number=10;
  seconds:number=20;
  level:number=3;
  timmerCountDown:number=5;
  timerDownId:any;
  notifier: NotifierService;
  constructor(
    private service: StatementService,
    notifierService: NotifierService) {
      this.notifier = notifierService;
    }
    Stage3Que =[
      {question:"There is neither a black circle nor a green square",shape1:'square',shape2:'circle',color1:'black',color2:'green',answer:'TRUE'},
      {question:"There is either a brown square or a black square",shape1:'circle',shape2:'circle',color1:'brown',color2:'purple',answer:'FALSE'},
      {question:"There is atleast one black square",shape1:'circle',shape2:'square',color1:'black',color2:'blue',answer:'FALSE'},
      {question:"There is neither a brown square nor an orange circle",shape1:'circle',shape2:'square',color1:'brown',color2:'orange',answer:'TRUE'},
      {question:"There is either a green circle or a green square",shape1:'circle',shape2:'square',color1:'brown',color2:'black',answer:'FALSE'},
      {question:"There is a blue square but not a brown circle",shape1:'square',shape2:'circle',color1:'blue',color2:'brown',answer:'FALSE'},
      {question:"There is a purple circle but not a purple square",shape1:'square',shape2:'square',color1:'black',color2:'purple',answer:'FALSE'},
      {question:"There is a yellow circle and a red square",shape1:'square',shape2:'circle',color1:'yello',color2:'red',answer:'FALSE'},
      {question:"There is either a yellow square or a yellow circle",shape1:'square',shape2:'circle',color1:'yellow',color2:'yellow',answer:'FALSE'},
      {question:"There is a yellow circle but not a red square",shape1:'square',shape2:'square',color1:'yellow',color2:'red',answer:'FALSE'},
      {question:"There is neither a brown square nor a purple circle",shape1:'circle',shape2:'square',color1:'brown',color2:'purple',answer:'TRUE'},
      {question:"There is either a green square or a red square",shape1:'circle',shape2:'square',color1:'green',color2:'red',answer:'TRUE'},
      {question:"There is a black square but not a green circle",shape1:'square',shape2:'square',color1:'black',color2:'green',answer:'TRUE'},
      {question:"There is no green circle",shape1:'circle',shape2:'square',color1:'brown',color2:'green',answer:'TRUE'},
      {question:"There is atmost one black circle",shape1:'square',shape2:'circle',color1:'black',color2:'black',answer:'TRUE'},
      {question:"There is atleast one green square",shape1:'square',shape2:'square',color1:'green',color2:'green',answer:'TRUE'},
      {question:"There is either a black circle or a green circle",shape1:'square',shape2:'square',color1:'green',color2:'black',answer:'FALSE'},
      {question:"There is neither a black square nor a black circle",shape1:'square',shape2:'circle',color1:'black',color2:'black',answer:'FALSE'},
      {question:"There is a red circle but not a green square",shape1:'circle',shape2:'square',color1:'red',color2:'green',answer:'FALSE'},
      {question:"There is atmost one brown square",shape1:'square',shape2:'circle',color1:'yellow',color2:'brown',answer:'TRUE'},
      {question:"There are atleast two blue circle",shape1:'circle',shape2:'square',color1:'blue',color2:'blue',answer:'FALSE'},
      {question:"There is neither a black circle nor a black square",shape1:'circle',shape2:'square',color1:'blue',color2:'green',answer:'TRUE'},
      {question:"There is either a grey circle or a red square",shape1:'circle',shape2:'square',color1:'grey',color2:'red',answer:'FALSE'},
      {question:"There is neither a blue square nor a yellow square",shape1:'circle',shape2:'circle',color1:'blue',color2:'yellow',answer:'TRUE'},
      {question:"There is atleast one black circle",shape1:'square',shape2:'circle',color1:'black',color2:'grey',answer:'FALSE'},
      {question:"There are atmost two green circle",shape1:'square',shape2:'circle',color1:'green',color2:'green',answer:'TRUE'},
      {question:"There is a grey square but not a grey circle",shape1:'square',shape2:'circle',color1:'grey',color2:'grey',answer:'FALSE'},
      {question:"There is no black square",shape1:'circle',shape2:'square',color1:'black',color2:'green',answer:'TRUE'},
      {question:"There are atleast two green square",shape1:'square',shape2:'circle',color1:'green',color2:'green',answer:'FALSE'},
      {question:"There is a grey circle but not a black circle",shape1:'circle',shape2:'square',color1:'grey',color2:'black',answer:'TRUE'},
    ];
  ngOnInit() {
    this.countDown();
  }
  ngOnDestroy() {
    this.clearTimer();
    this.service.l1_score=0;
    this.service.l2_score=0;
    this.service.l3_score=0;
  }
  getQuestion(){
    this.clearTimer();
    if(this.questionOn <= this.noOfQuestions){
      var random  = Math.floor(Math.random()*this.Stage3Que.length);
      this.question=this.Stage3Que[random].question;
      this.shape1=this.Stage3Que[random].shape1;
      this.color1=this.Stage3Que[random].color1;
      this.shape2=this.Stage3Que[random].shape2;
      this.color2=this.Stage3Que[random].color2;
      this.answer=this.Stage3Que[random].answer;
      this.l3_countDown();
      this.timmer();
    }else{
      this.service.score = this.service.l1_score+this.service.l2_score+this.service.l3_score;
     // this.service.showAlert("Your Total Score Is "+ this.service.score);
      this.service.changeCompo('Finish');
    }
  }
  result(ans: any){
    this.userAnswer = ans;
    this.myfunction();
    // this.service.customConsole(this.userAnswer +"=="+ this.answer);
      if( this.userAnswer == this.answer){
        this.notifier.notify("success","Question "+this.questionOn + " is Correct Answer");
        this.questionOn++
        this.service.l3_score++;
        this.score = this.service.l3_score;
        this.getQuestion();
      }else{
        this.notifier.notify("error","Question "+this.questionOn + " is Incorrect Answer!");
          this.questionOn++
          this.getQuestion();
      }
  }

  l3_countDown() {
    this.intervalId = setTimeout(() => {
      this.startCountDown -= 0.1;
            this.questionOn++;
            this.myfunction();
            this.getQuestion();
            this.seconds=20;
        // }, 5000000000000);
        }, 5000);
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
    }, 100);
    this.timmerCountDown = 5;

  }
  myfunction(){clearInterval(this.timerDownId);}


}
