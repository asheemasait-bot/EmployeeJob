import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { App } from './app/app';
import { routes } from './app/app.routes';

import { employeeReducer, employeeFeatureKey } from './store/employee.reducer';
import { EmployeeEffects } from './store/employee.effects';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    provideStore({ [employeeFeatureKey]: employeeReducer }),
    provideEffects([EmployeeEffects]),
  ],
});

