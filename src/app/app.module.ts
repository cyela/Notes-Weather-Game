import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoteService } from './note.service';
import {SortPipe} from './app.sort';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherComponent } from './weather/weather.component';
import {Router, Routes, RouterModule} from '@angular/router';
import { GameComponent } from './game/game.component';
import { NoteComponent } from './note/note.component';
import { NoteItemComponent } from './note/note-item/note-item.component';

const appRoutes:Routes=[
  {
    path:'note',
    component: NoteComponent
  },
  {
    path:'weather',
    component: WeatherComponent
  },
  {
    path:'game',
    component: GameComponent
  } ];
@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    NoteItemComponent,
    WeatherComponent,
    GameComponent,
    NoteComponent,
    
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
