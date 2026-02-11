import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState, employeeFeatureKey } from './employee.reducer';

export const selectEmployeeState =
  createFeatureSelector<EmployeeState>(employeeFeatureKey);

export const selectEmployeeLoading = createSelector(
  selectEmployeeState,
  (state) => state.loading
);

export const selectEmployeeError = createSelector(
  selectEmployeeState,
  (state) => state.error
);

export const selectEmployeeData = createSelector(
  selectEmployeeState,
  (state) => state.data
);

