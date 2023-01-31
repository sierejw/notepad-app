import { Component, OnInit } from '@angular/core';
import { Notes } from "../objects-and-api/notes";
import { Router } from "@angular/router";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`])
  }

}
