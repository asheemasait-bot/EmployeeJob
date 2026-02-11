import { Routes } from '@angular/router';
import { SearchComponent } from './search.component/search.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: '**', redirectTo: 'search' },
];
