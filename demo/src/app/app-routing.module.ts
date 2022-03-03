import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"employees" ,component:EmployeeListComponent},
  {path:"", redirectTo:'employees', pathMatch:'full'},
  {path:"addEmployee" ,component:CreateEmployeeComponent},
  {path:"updateEmployee/:id", component:EmployeeUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
