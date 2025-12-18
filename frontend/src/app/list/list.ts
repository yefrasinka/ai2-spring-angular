import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonService } from '../person-service';
import { Person } from '../person';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {

  persons: Person[] = [];

  constructor(
    private personService: PersonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.personService.getAll().subscribe(data => {
      this.persons = data;

      this.cdr.detectChanges();
    });
  }

  delete(id?: number): void {
    if (!id) return;

    this.personService.delete(id).subscribe(() => {
      this.personService.getAll().subscribe(data => {
        this.persons = data;
        this.cdr.detectChanges();
      });
    });
  }
}
