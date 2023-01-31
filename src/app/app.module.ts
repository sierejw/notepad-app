import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { CreateNoteModule } from "./create-note/create-note.module";
import { NotesListModule } from "./notes-list/notes-list.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CreateNoteModule,
    NotesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
