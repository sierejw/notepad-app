import { Component, OnInit } from '@angular/core';
import { Notes } from "../objects-and-api/notes";
import { NotesService } from "../objects-and-api/notes.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { Observable } from "rxjs";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {

  notesList: Notes[];
  searchText: string;

  constructor(private noteService: NotesService,
              private router: Router) { }

  ngOnInit(): void {
    this.generateNotesList();
    this.searchText = '';
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]).then();
  }

  goToEdit(pageName: String, id: number) {
    this.router.navigate([`${pageName}`, id]).then();
  }

  getThisId(note: Notes): number{
    return this.noteService.getId(note);
  }

  delete(id: number) {
    this.noteService.delete(id);
  }
  generateNotesList(){
    this.noteService.getAllNotes().pipe().subscribe(
      (notes) => {
        if(notes != null) {
          this.notesList = notes;
        }
      }
    );
  }

  /*add(){
    this.noteService.add();
  }

  show(){
    this.noteService.show();
  }*/

}
