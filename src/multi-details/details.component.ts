import { Component,Input,OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import { Router} from '@angular/router'
 
@Component({
  selector: 'multi-detail',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ],
})
export class DetailsComponent implements OnInit {

  @Input() gameData:any;

  constructor( public appservice: AppService, private routers:Router){
  }
GameName1=this.appservice.game1;
GameName2=this.appservice.game2;
GameData1=this.appservice.gamedata1;
GameData2=this.appservice.gamedata2;
 ngOnInit() {

  }
  onSubmit(){
    this.appservice.startGame();
        this.routers.navigate(['mgame']);
  }
}