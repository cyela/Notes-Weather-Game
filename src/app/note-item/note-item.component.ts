import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { DatePipe } from '@angular/common';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {


  @Input('Notes') note:any;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() changeEvent = new EventEmitter<any>();
  status;
  visible=false;
  faCoffee = faTrash;
  faCoffee2=faEdit;
  constructor(private api:NoteService,private pipe: DatePipe) { }

  ngOnInit() {
    this.status=this.note.status;
    console.log(this.status);
  }

  edit(){
  this.visible=!this.visible;
  }
  update(){
    this.visible=!this.visible;
    this.updateEvent.emit(this.note);
  }
  delete(){
   this.deleteEvent.emit(this.note);
  }
  changeStatus(){
    if(this.note.status=="false"){
    this.note.status="true";
    }else{
      this.note.status="false";
    }
    console.log(this.note);
    this.changeEvent.emit(this.note);
  }
}
