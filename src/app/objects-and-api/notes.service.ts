import { Injectable } from '@angular/core';
import { Notes } from "./notes";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Notes[];

  constructor() { }

  // I will need to be able to edit, delete, create, and view notes here
}
