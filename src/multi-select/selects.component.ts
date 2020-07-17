import { Component,Input,OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import { Router} from '@angular/router'
 
@Component({
  selector: 'multi-select',
  templateUrl: './selects.component.html',
  styleUrls: [ './selects.component.scss' ],
})
export class SelectsComponent implements OnInit {

  @Input() gameData:any;

  constructor( public appservice: AppService,private routers:Router){
  }
  games=this.appservice.games;
 ngOnInit() {

  }
  onSubmit(){
    if(this.appservice.game1!='' && this.appservice.game2!=''){
      this.routers.navigate(['detail']);

    }
  }
  changeGame(e,gno){
    this.appservice.changeGame(e.target.value,gno)
   
}
  
}