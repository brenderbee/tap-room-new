import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
    @Input() childKegList: Keg[];
    @Output() clickSender = new EventEmitter();
    @Output() clickSellPint = new EventEmitter();
    @Output() clickSellGrowler = new EventEmitter();

    editButtonClicked(kegToEdit: Keg) {
      this.clickSender.emit(kegToEdit);
    }

    sellPintClicked(kegToEdit: Keg) {
      this.clickSellPint.emit(kegToEdit);
    }

    sellGrowlerClicked(kegToEdit: Keg) {
      this.clickSellGrowler.emit(kegToEdit);
    }

    warningColor(kegToCheck: Keg) {
      if (kegToCheck.pints <= 20) {
        return 'bg-warning';
      }
    }

}
