import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from "./notes-list.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NotesListComponent
  ],
  exports:[
    NotesListComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})
export class NotesListModule { }
