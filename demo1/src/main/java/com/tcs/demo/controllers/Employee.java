package com.tcs.demo.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tcs.demo.eexceptions.ResourceNotFound;
import com.tcs.demo.repository.EmployeeRepository;


@RestController
@RequestMapping("/api/v1")
public class Employee {
	
    @Autowired
	private EmployeeRepository employeerepository;
    
    //get Employee Rest API
    @GetMapping("/employees")
    public List<com.tcs.demo.model.Employee> getAllEmployees(){
    	return employeerepository.findAll();
    }
    
    //Create Employee REST API
	@PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
    	return employeerepository.save(employee);
    }
	
	//Get Employee Id 
	@GetMapping("/employees/{id}")
	public ResponseEntity<com.tcs.demo.model.Employee> getEmployeeById(@PathVariable Long Id) {
		com.tcs.demo.model.Employee emp=employeerepository.findById(Id).orElseThrow(()->
		new ResourceNotFound("Employee not exists"+Id));
		return ResponseEntity.ok(emp);
	}
	
	
	//Update Employee
	@PutMapping("/employees/{id}")
	public ResponseEntity<com.tcs.demo.model.Employee> updateEmployee(@PathVariable Long Id,@RequestBody com.tcs.demo.model.Employee employeeUpdate){
		com.tcs.demo.model.Employee emp=employeerepository.findById(Id).orElseThrow(()->
		new ResourceNotFound("Employee not exists"+Id));
		emp.setFirstname(employeeUpdate.getFirstname());
		emp.setLastname(employeeUpdate.getLastname());
		emp.setEmail(employeeUpdate.getEmail());
		com.tcs.demo.model.Employee updateEmp=employeerepository.save(emp);
		return ResponseEntity.ok(updateEmp);
	}
	
	//Delete Rest API
	@DeleteMapping("/employees/{id}")
	 public Map<String,Boolean> deleteEmployee(@PathVariable Long id){
		com.tcs.demo.model.Employee emp=employeerepository.findById(id).orElseThrow(()->
		new ResourceNotFound("Employee not exists"+id));
		
		employeerepository.delete(emp);
	 }
	
	
	
}
