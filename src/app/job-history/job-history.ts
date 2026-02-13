import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EmployeeJobHistoryResponse } from '../Services/employee-api.service';
import { selectEmployeeLoading, selectEmployeeError, selectEmployeeData } from '../../store/employee.selectors';
import * as EmployeeActions from '../../store/employee.actions';

@Component({
  selector: 'app-job-history',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './job-history.html',
})
export class JobHistoryComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  loading$: Observable<boolean> = this.store.select(selectEmployeeLoading);
  error$: Observable<string> = this.store.select(selectEmployeeError);
  data$: Observable<EmployeeJobHistoryResponse | null> = this.store.select(selectEmployeeData);

  private employeeId = 0;

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.employeeId || this.employeeId <= 0) {
      this.router.navigate(['/']);
      return;
    }

    this.store.dispatch(EmployeeActions.loadEmployeeJobHistory({ employeeId: this.employeeId }));
  }

  back() {
    this.router.navigate(['/']);
  }
}


