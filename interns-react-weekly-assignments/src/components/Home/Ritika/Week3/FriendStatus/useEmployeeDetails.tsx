import { useState } from 'react';
import { Employee } from '../interfaces/interface';

const useEmployeeDetails = () => {
  const value = localStorage.getItem('employees');
  const [employees, setEmployees] = useState<Employee[]>(value ? JSON.parse(value) : []);

  const addEmployee = (name: string, status: string) => {
    const newEmployee: Employee = { employeeID: Math.floor(Math.random() * 1000), employeeName: name, employeeStatus: status };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return { employees, addEmployee };
};

export default useEmployeeDetails;
