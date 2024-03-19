import { useState } from 'react';
import { Employee } from '../interfaces/interface';
import { toast } from 'react-toastify';
import notify from '../utils/constants.json';
import { EmployeeDetailsHook } from '../interfaces/interface';

const useEmployeeDetails = (): EmployeeDetailsHook => {
  const value = localStorage.getItem('employees');
  const [employees, setEmployees] = useState<Employee[]>(value ? JSON.parse(value) : []);

  const addEmployee = (name: string, status: string) => {
    const newEmployee: Employee = { employeeID: Math.floor(Math.random() * 1000), employeeName: name, employeeStatus: status };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    toast.success(notify.successMessage);
  };
  const updateState = (employeeArray: Employee[]) => {
    setEmployees([...employeeArray]);
  };
  return { employees, addEmployee, updateState };
};

export default useEmployeeDetails;
