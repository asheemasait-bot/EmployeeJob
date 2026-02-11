import { EmployeeState, employeeFeatureKey } from './employee.reducer';

export interface AppState {
  [employeeFeatureKey]: EmployeeState;
}
