import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import * as EmployeeActions from './employee.actions';
import { EmployeeApiService } from '../app/Services/employee-api.service'; // ✅ FIX PATH

@Injectable()
export class EmployeeEffects {
  private actions$ = inject(Actions);
  private api = inject(EmployeeApiService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployeeJobHistory),
      mergeMap(({ employeeId }) =>
        this.api.getManagerAndJobHistory(employeeId).pipe(
          map((data) => {
            if (!data?.employee || !data.employee.employeeId || data.employee.employeeId === 0) {
              return EmployeeActions.loadEmployeeJobHistoryFailure({
                error: `Employee ${employeeId} not found.`,
              });
            }
            return EmployeeActions.loadEmployeeJobHistorySuccess({ data });
          }),
          catchError((err) =>
            of(
              EmployeeActions.loadEmployeeJobHistoryFailure({
                error: err?.error?.message ?? 'API call failed (check CORS/HTTPS/port).',
              })
            )
          )
        )
      )
    )
  );
}

