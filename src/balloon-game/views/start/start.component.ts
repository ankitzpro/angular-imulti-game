

import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { BalloonService } from '../../balloon.service'



@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: [ './start.component.scss' ],
})
export class StartComponent implements OnInit {

  constructor(private service: BalloonService){
  }
    submitted = false;

  ngOnInit() {
  }



   onSubmit(){
       // this.routers.navigate(['/game'],{ skipLocationChange: true });
       this.service.changeCompo('Game');
       this.service.countDown();
   }

}


