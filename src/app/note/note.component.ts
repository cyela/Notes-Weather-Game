import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  visible=false;
  notes;
  currentTime;
  toggle=true;
    constructor(private api:NoteService,private pipe:DatePipe){
      }
  ngOnInit(){
   this.getNotes();
   setInterval(()=>{
    this.currentTime = new Date();
   },1000);
  }
  
  ToggleContent(){
    this.toggle=!this.toggle;
  }
  
  getNotes(){
    this.api.getNotes().subscribe(res=>{
      this.notes=res;
    });
  }
  toggleForm(){
    this.visible=!this.visible;
  }
  
  saveNote(note){
    const now=Date.now();
    const formatDate=this.pipe.transform(now,'medium');
    const modifiednote={
      "title":note.title,
      "description":note.description,
      "status":"false",
      "addedOn":formatDate
    }
  this.api.postNote(modifiednote).subscribe(res=>{
    this.toggleForm();
    this.getNotes();
    
  });
  }
  
  updateEventHander($event){
   
    const now=Date.now();
    const formatDate=this.pipe.transform(now,'medium');
    const modifiednote={
      "id":$event.id,
      "title":$event.title,
      "description":$event.description,
      "status":"false",
      "addedOn":formatDate
    };
    this.api.updateNote(modifiednote).subscribe(res=>{
      this.getNotes();
    });
  
  }
  deleteEventHandler($event){
    this.api.delNote($event.id).subscribe(res=>{
      this.getNotes();
    });
  }
  changeEventHandler($event){
    this.api.changeStatus($event).subscribe(res=>{
      this.getNotes();
    });
  }
  
}
