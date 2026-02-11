import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmployeeManagerDto {
  employeeId: number;
  employeeName: string;
  managerId: number | null;
  managerName: string | null;
  departmentId: number | null;
}

export interface JobHistoryDto {
  employeeId: number;
  startDate: string;
  endDate: string | null;
  jobId: string;
  jobTitle: string | null;
}

export interface EmployeeJobHistoryResponse {
  employee: EmployeeManagerDto | null;
  jobHistory: JobHistoryDto[];
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  private baseUrl = 'https://localhost:7112';

  constructor(private http: HttpClient) {}

  getManagerAndJobHistory(employeeId: number): Observable<EmployeeJobHistoryResponse> {
    return this.http.get<EmployeeJobHistoryResponse>(
      `${this.baseUrl}/api/employees/${employeeId}/manager-jobhistory`
    );
  }
}
  
