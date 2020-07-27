import { Component} from '@angular/core';
import { AccuracyGameService} from './accuracy-game.service';
import { MultiService } from '../multi/multi.service';




@Component({
  selector: 'accuracy-game',
  templateUrl: './accuracy-game.component.html',
  styleUrls: ['./accuracy-game.component.scss'],
})

export class AccuracyGameComponent  {
  constructor(private service:AccuracyGameService,private multiservice: MultiService

  ) {}


  eventText = '';
  level=this.service.level;
 numstring:any='';
  progress:any;
  whitespace:any;
  randpos:number;
  seconds:number=this.service.seconds;
  disable=false;
  ngOnInit() {
    this.multiservice.levelUp('accuracy-game');
    this.progress=Math.floor(Math.random() * 90)+10;
    this.whitespace=100-this.progress;
}




  insertChar(char) {
    var a = '' + this.numstring + char;
    var y: number = +a;
    if (y < 100) {
      this.numstring = '' + this.numstring + char;
    } else {
      alert('Number cannot be greater than 99');
    }
    console.log(this.numstring);
  }
  insertNum(a) {
   var b= (<HTMLInputElement>event.target).value;
     this.numstring=b;
  }

  
  submit() {
    var diff = this.progress - this.numstring;
    this.service.scoreCalc(Math.abs(diff));
    this.disable=true;
    this.multiservice.disableGame('accuracy-game');
  }

  clear(){
    this.numstring='';
  }
}
