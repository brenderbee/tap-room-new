import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-sell-beer',
  templateUrl: './sell-beer.component.html',
  styleUrls: ['./sell-beer.component.css']
})
export class SellBeerComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickedSellPint= new EventEmitter();

}
