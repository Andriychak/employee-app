
// tslint:disable-next-line:import-blacklist
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class EmployeeService {

  private employeesUrl = 'assets/data/employees.json';

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeesUrl).pipe(catchError(this.errorHandler));
  }
}
