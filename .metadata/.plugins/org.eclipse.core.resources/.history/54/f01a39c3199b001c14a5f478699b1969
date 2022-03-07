package com.tcs.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.demo.repository.EmployeeRepository;


@RestController
@RequestMapping("/api/v1")
public class Employee {
	
    @Autowired
	private EmployeeRepository employeerepository;
    
    
    @GetMapping("/employees")
    public List<com.tcs.demo.model.Employee> getAllEmployees(){
    	return employeerepository.findAll();
    }
}
