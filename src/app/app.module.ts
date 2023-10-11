import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTowerComponent } from './app-tower/app-tower.component';
import { AppOppositionComponent } from './app.opposition/app.opposition.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTowerComponent,
    AppOppositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
