import { Injectable } from '@angular/core';
import { Notes } from "./notes";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Notes[] = [];
  counter: number = 1;


  constructor() { }

  getAllNotes(): Observable<Notes[]> {
    return of(this.notes);
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note: Notes): number {
    return this.notes.indexOf(note);
  }

  add(note: Notes): void {
      this.notes.push(note);
  }

  edit(pos: number, title: string, body: string) {
      let note = this.notes[pos];
      note.title = title;
      note.body = body;
  }

  delete(pos: number) {
      this.notes.splice(pos, 1);
  }

  show(){
    console.log(this.notes);
  }
  // I will need to be able to edit, delete, create, and view notes here
}
