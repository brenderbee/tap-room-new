import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CamelCase TapRoom';

  masterKegList: Keg[] = [
    new Keg('Nectarine Premiere', 'de Garde Brewing', '7.10%'),
    new Keg('Notorious Triple IPA', 'Boneyard Beer Company', '12.00%'),
    new Keg('5	Double Stack', 'Great Notion Brewing', '10.00%')
  ]
}
