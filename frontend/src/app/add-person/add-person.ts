import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PersonService } from '../person-service';
import { Person } from '../person';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css'
})
export class AddPersonComponent {

  person: Person = {};

  constructor(
    private personService: PersonService,
    private router: Router
  ) {}

  save(): void {
    this.personService.add(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
