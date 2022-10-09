import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DestinationComponent } from './page/destination/destination.component';
import { CrewComponent } from './page/crew/crew.component';
import { TechnologyComponent } from './page/technology/technology.component';
import { HomeComponent } from './page/home/home.component';
import { ProgressivePictureComponent } from './progressive-picture/progressive-picture.component';
import { ImageContainerComponent } from './page/technology/image-container/image-container.component';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'technology', component: TechnologyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    HomeComponent,
    ProgressivePictureComponent,
    ImageContainerComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoute)],
  // exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}