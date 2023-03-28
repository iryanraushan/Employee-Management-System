package com.ryan.Application.servises;

import com.ryan.Application.model.Employee;

import java.util.List;

public interface EmployeeServises {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployee();

    boolean deleteEmployee(Long id);

    Employee getEmployeeById(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
