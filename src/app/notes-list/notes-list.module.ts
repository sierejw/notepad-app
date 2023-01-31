import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from "./notes-list.component";


@NgModule({
  declarations: [
    NotesListComponent
  ],
  exports:[
    NotesListComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class NotesListModule { }
