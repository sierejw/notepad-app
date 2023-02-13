import { Component, OnInit } from '@angular/core';
import { NotesService } from "../objects-and-api/notes.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Notes } from "../objects-and-api/notes";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note: Notes;
  edit: boolean;
  id: number;

  constructor(private noteService: NotesService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.note = {title: '', body: ''};
    this.route.params.subscribe( params => {
      if(params['id'] != null){
        this.note = this.noteService.get(params['id'])
        this.id = params['id'];
        this.edit = true;
      } else {
        this.edit = false;
      }
    })
  }

  addNote(note: Notes){
    this.noteService.add(note);
  }

  editNote(pos: number,title: string, body: string){
    this.noteService.edit(pos, title, body);
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]).then();
  }

  onSubmit(form: NgForm){
    if(this.edit == true){
      this.editNote(this.id, form.value.title, form.value.body);
    } else {
      this.addNote(form.value);
    }

    this.goToPage('home');
  }


}
