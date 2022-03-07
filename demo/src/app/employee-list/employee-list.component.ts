import { EmployeeServiceService } from './../employee-service.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[] | undefined

  constructor(private empService :EmployeeServiceService , private router :Router) {
    this.employees=[{
      "id":1,
      "firstname":"akash",
      "lastname":"juneja",
      "emailId":"abc@gmail.com"

    },
    {
      "id":1,
      "firstname":"akash",
      "lastname":"juneja",
      "emailId":"abc@gmail.com"

    },
    {
      "id":1,
      "firstname":"akash",
      "lastname":"juneja",
      "emailId":"abc@gmail.com"

    },
    {
      "id":1,
      "firstname":"akash",
      "lastname":"juneja",
      "emailId":"abc@gmail.com"

    },
    {
      "id":1,
      "firstname":"akash",
      "lastname":"juneja",
      "emailId":"abc@gmail.com"

    }
  ]
}

  ngOnInit(): void {
     this.getEmployee()
  }

  private getEmployee(){
    this.empService.getEmployeeList().subscribe(data=>{
      this.employees=data
    })
  }

  updateEmployee(id:number |undefined){
    this.router.navigate(['updateEmployee' ,id])
  }
  deleteEmployee(id:number |undefined){
    this.router.navigate(['deleteEmployee' ,id])
  }


}
