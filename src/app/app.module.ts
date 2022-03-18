import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { NextButtonComponent } from './components/shared/next-button/next-button.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { CardsComponent } from './components/cards/cards.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScrollingDirective } from './directives/scrolling.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutMeComponent,
    NavComponent,
    ContactComponent,
    NextButtonComponent,
    TechnologiesComponent,
    CardsComponent,
    SliderComponent,
    ProfileComponent,
    ScrollingDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
