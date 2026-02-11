import { createAction, props } from '@ngrx/store';
import { EmployeeJobHistoryResponse } from '../app/Services/employee-api.service';

export const loadEmployeeJobHistory = createAction(
  '[Employee] Load Manager + Job History',
  props<{ employeeId: number }>()
);

export const loadEmployeeJobHistorySuccess = createAction(
  '[Employee] Load Success',
  props<{ data: EmployeeJobHistoryResponse }>()
);

export const loadEmployeeJobHistoryFailure = createAction(
  '[Employee] Load Failure',
  props<{ error: string }>()
);

export const clearEmployeeJobHistory = createAction('[Employee] Clear');
