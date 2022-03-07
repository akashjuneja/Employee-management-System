import { EmployeeServiceService } from './../employee-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  id:number =0;
  constructor(private emp:EmployeeServiceService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  delEmployee(){
     this.id=this.route.snapshot.params['id']
     this.emp.deleteEmployee(this.id)
  }

}
