import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { EmployeeJobHistoryResponse } from '../Services/employee-api.service';
import { selectEmployeeLoading, selectEmployeeError, selectEmployeeData } from '../../store/employee.selectors';
import * as EmployeeActions from '../../store/employee.actions';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-details.html',
})
export class EmployeeDetailsComponent implements OnInit {
  
loading$!: Observable<boolean>;
  error$!: Observable<string>;
  data$!: Observable<EmployeeJobHistoryResponse | null>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.loading$ = this.store.select(selectEmployeeLoading);
    this.error$ = this.store.select(selectEmployeeError);
    this.data$ = this.store.select(selectEmployeeData);
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id || id <= 0) {
      this.store.dispatch(EmployeeActions.loadEmployeeJobHistoryFailure({ error: 'Invalid employee id in URL.' }));
      return;
    }
    this.store.dispatch(EmployeeActions.loadEmployeeJobHistory({ employeeId: id }));
  }
}

