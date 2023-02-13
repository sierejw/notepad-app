import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNoteComponent } from "./create-note.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreateNoteComponent
  ],
  exports:[
    CreateNoteComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CreateNoteModule { }
