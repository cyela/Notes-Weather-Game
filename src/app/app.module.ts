import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteService } from './note.service';
import {SortPipe} from './app.sort';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherComponent } from './weather/weather.component';
import {Router, Routes, RouterModule} from '@angular/router';

const appRoutes:Routes=[
  {
    path:'note',
    component: AppComponent
  },
  {
    path:'weather',
    component: WeatherComponent
  } ];
@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    NoteItemComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule ,
    FontAwesomeModule ,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [NoteService, DatePipe,Navigator],
  bootstrap: [AppComponent]
})
export class AppModule { }
