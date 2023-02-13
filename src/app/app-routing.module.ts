import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NotesListComponent} from "./notes-list/notes-list.component";
import {CreateNoteComponent} from "./create-note/create-note.component";
import {NotesListModule} from "./notes-list/notes-list.module";
import {CreateNoteModule} from "./create-note/create-note.module";


const routes: Routes = [
  {path: 'create-note/:id', component: CreateNoteComponent},
  {path: 'create-note', component: CreateNoteComponent},
  {path: '**', component: NotesListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotesListModule,
    CreateNoteModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
