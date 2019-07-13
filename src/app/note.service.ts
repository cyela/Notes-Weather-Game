import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // private headers = new HttpHeaders({
  //   'Content-Type': 'application/json'
  //   });

  constructor(private http:HttpClient) {

   }
  
   postNote(note:any):any{
    return  this.http.post('http://localhost:9999/JersseyDemo/note/addNote',note);
   }
   updateNote(note:any):any{
    return  this.http.post('http://localhost:9999/JersseyDemo/note/updateNote',note);
   }

   getNotes():any{
    return  this.http.get('http://localhost:9999/JersseyDemo/note/getNote');
   }

   changeStatus(note:any):any{
    return  this.http.post('http://localhost:9999/JersseyDemo/note/updateStatus',note);
   }

   delNote(note:any):any{
    return  this.http.delete('http://localhost:9999/JersseyDemo/note/delNote/'+note);
   }
}

























// const body = new HttpParams()
// .set('noteid', note.noteid)
// .set('note', note.note)
// .set('status', note.status);