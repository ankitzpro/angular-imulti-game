import { Component, OnInit } from '@angular/core';
import { StatementService} from '../statement.service';
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor( private service: StatementService) { }

  ngOnInit() {
  }
submit(){
  this.service.changeCompo('Level1');
}
}
