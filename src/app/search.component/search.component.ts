import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search.component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
employeeId: number | null = null;
  error = '';

  constructor(private router: Router) {}

  go() {
    this.error = '';
    if (!this.employeeId || this.employeeId <= 0) {
      this.error = 'Please enter a valid Employee ID (positive number).';
      return;
    }
    this.router.navigate(['/employee', this.employeeId]);
  }
}

