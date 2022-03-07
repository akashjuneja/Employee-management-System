import { Employee } from './employee';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl="http://localhost:8080/api/v1/employees"
  constructor(private http:HttpClient) {

  }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`)
  }

  createEmployee(employee:Employee):Observable<Object>{
     return this.http.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:number |undefined): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
  }

  updateEmployeeById(id:number |undefined,employee:Employee) :Observable<Object>{
      return this.http.put(`${this.baseUrl}/${id}`,employee)
  }


deleteEmployee(id:number |undefined):any {
  return this.http.delete(`${this.baseUrl}/${id}`)
}
}
