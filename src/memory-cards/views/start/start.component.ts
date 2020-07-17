import { Component, OnInit } from '@angular/core';
import { CardService } from '../../card.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(private service: CardService) {}

  ngOnInit() {}

  onSubmit() {
    this.service.anstext="Memorize the Flashing Squares then Recreates the same when the countdown starts";
    this.service.changeCompo('Timer');
  }
}
