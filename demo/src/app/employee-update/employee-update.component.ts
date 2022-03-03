import { EmployeeServiceService } from './../employee-service.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee:Employee =new Employee()
  id:number =0
  constructor(private emp:EmployeeServiceService, private route:ActivatedRoute,
    private router:Router ) { }

  onSubmit(){
     this.emp.updateEmployeeById(this.id,this.employee).subscribe(data=>{
       console.log(data)
       this.router.navigate(['/employees'])
     })
  }
  employeeById(){
    this.id=this.route.snapshot.params['id']
    this.emp.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data
    })
  }
  ngOnInit(): void {
  }

}
