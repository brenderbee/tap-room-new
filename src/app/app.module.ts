import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { SellBeerComponent } from './sell-beer/sell-beer.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    SellBeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
