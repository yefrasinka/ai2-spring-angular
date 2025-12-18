import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PersonService } from '../person-service';
import { Person } from '../person';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [
    FormsModule, 
    RouterModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule],
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
