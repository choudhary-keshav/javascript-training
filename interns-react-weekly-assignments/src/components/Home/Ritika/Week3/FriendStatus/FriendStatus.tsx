import React, { useEffect, useState } from 'react';
import FriendInputDetail from './FriendInputDetail';
import useEmployeeDetails from './useEmployeeDetails';
import statusOptions from '../../../Keshav/Week3/utils/statusOptions';
import { FriendStatusWrapper,EmployeeList,EmployeeItem,EmployeeButton } from './FriendStatus.styled';
import {Employee} from "../interfaces/interface"

const FriendStatus = () => {
  const { employees } = useEmployeeDetails();
  const [employeesNew, setEmployeesNew] = useState<Employee[]>(employees?employees:[])

  useEffect(()=>{
    console.log(employeesNew)
  },[employeesNew])
  
  const handleStatusChange = (employeeIndex: number) => {
    const currentIndex = statusOptions.indexOf(employees[employeeIndex].employeeStatus);
    const nextIndex = (currentIndex + 1) % statusOptions.length;
    const temp:Employee[] = employees;
    temp[employeeIndex].employeeStatus = statusOptions[nextIndex];
    localStorage.setItem('employees', JSON.stringify(temp));
    setEmployeesNew(temp)
  };
  

  return (
    <FriendStatusWrapper>
      <FriendInputDetail />
      <EmployeeList>
        {employees.map((employee, index) => (
          <EmployeeItem key={index}>
            {employee.employeeName}- <EmployeeButton onClick={() => handleStatusChange(index)}>{employee.employeeStatus}</EmployeeButton>
          </EmployeeItem>
        ))}
      </EmployeeList>
    </FriendStatusWrapper>
  );
};

export default FriendStatus;
