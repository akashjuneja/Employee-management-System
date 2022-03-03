import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private emp:EmployeeServiceService,private router:Router) { }

  employee:Employee=new Employee();

  ngOnInit(): void {
  }

  onSubmit():any {
    console.log(this.employee)
    this.addEmployee()
  }
   navigateToEmpList(){
     this.router.navigate(['/employess'])
  }

  addEmployee() {
    this.emp.createEmployee(this.employee).subscribe(data=>{
      console.log(data)
      this.navigateToEmpList()
    }),
      (error: any)=> console.log(error);
  }



}
