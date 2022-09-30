import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DestinationComponent } from './page/destination/destination.component';
import { CrewComponent } from './page/crew/crew.component';
import { TechnologyComponent } from './page/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
