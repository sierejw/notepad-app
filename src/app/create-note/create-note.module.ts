import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNoteComponent } from "./create-note.component";


@NgModule({
  declarations: [
    CreateNoteComponent
  ],
  exports:[
    CreateNoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateNoteModule { }
