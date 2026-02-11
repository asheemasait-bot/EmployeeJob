import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import { EmployeeJobHistoryResponse } from '../app/Services/employee-api.service';

export const employeeFeatureKey = 'employee';

export interface EmployeeState {
  loading: boolean;
  error: string;
  data: EmployeeJobHistoryResponse | null;
}

export const initialState: EmployeeState = {
  loading: false,
  error: '',
  data: null,
};

export const employeeReducer = createReducer(
  initialState,

  on(EmployeeActions.clearEmployeeJobHistory, () => initialState),

  on(EmployeeActions.loadEmployeeJobHistory, (state) => ({
    ...state,
    loading: true,
    error: '',
    data: null,
  })),

  on(EmployeeActions.loadEmployeeJobHistorySuccess, (state, { data }) => ({
    ...state,
    loading: false,
    error: '',
    data,
  })),

  on(EmployeeActions.loadEmployeeJobHistoryFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    data: null,
  }))
);
