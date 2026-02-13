import { Routes } from '@angular/router';
import { SearchComponent } from './search.component/search.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details';
import { JobHistoryComponent } from './job-history/job-history';

export const routes: Routes = [
  { path: '', component: SearchComponent },               // Home
  { path: 'employee/:id', component: EmployeeDetailsComponent }, // Details page (optional)
  { path: 'employee/:id/history', component: JobHistoryComponent }, // History page
  { path: '**', redirectTo: '' },
];

