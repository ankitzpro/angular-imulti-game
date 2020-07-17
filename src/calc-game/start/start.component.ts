import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service'
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private service:CalcService) { }

  ngOnInit() {
  }
  submit(){
this.service.changeCompo('Level1');
  }
}
