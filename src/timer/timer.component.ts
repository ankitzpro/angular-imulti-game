import { Component, OnInit } from '@angular/core';
//import { Router} from '@angular/router';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: [ './timer.component.scss' ],
})
export class TimerComponent implements OnInit {

  constructor(
  //,private routers:Router
  ) { }
anstext:String;
intervalId: number = 0;
message: string = '';
seconds: number = 5;
  ngOnInit() {
this.countDown();
  }
  private countDown(): void {
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0 ) {
    }
    }, 1000);
  }
}
