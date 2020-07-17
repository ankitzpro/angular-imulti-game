import { Component,Input,OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
 
@Component({
  selector: 'multi-game',
  templateUrl: './mgames.component.html',
  styleUrls: [ './mgames.component.scss' ],
})
export class MgamesComponent implements OnInit {

  @Input() gameData:any;

  constructor(public appservice: AppService){
  }

  game1=this.appservice.game1;
  game2=this.appservice.game2;
 ngOnInit() {

  }
  onSubmit(){
  }
}